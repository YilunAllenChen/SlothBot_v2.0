# !python3 -m pip install --upgrade firebase-admin

import RPi.GPIO as GPIO
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from random import choice, gauss, random
from time import time, sleep
from requests import get
import uuid
import pathlib
import logging
import serial
import json

pathlib.Path("./logs").mkdir(parents=True, exist_ok=True)
logger = logging.getLogger("cloud")
logger.setLevel("INFO")
f_handler = logging.FileHandler("logs/cloud.log", "a+")
f_handler.setFormatter(logging.Formatter("[%(asctime)s] [%(levelname)s] %(message)s"))
logger.addHandler(f_handler)

ser = serial.Serial('/dev/ttyS0', 115200)
ser.flushInput()
ser.flushOutput()


GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(23,GPIO.OUT)

print("setup complete")

try:
    connected = False
    while(not connected):
        # Use a service account
        cred = credentials.Certificate('agent_cred.json.secret')
        firebase_admin.initialize_app(cred)
        db = firestore.client()
        datatypes = [u'temperature_C', u'temperature_F',
                    u"battery_voltage", u"humidity"]
        connected = True
except Exception as e:
    logger.error(str(e))

print("Conneted")

while(True):
    try:
        doc_ref = db.collection(u'sensor_data').document(f"AGENT_{hex(uuid.getnode())}")
        timestamp = str(int(time() * 1000 + random()*10000-5000))
        
        instructions = None
        try:
            instructions = doc_ref.get().to_dict().get("instructions")
            doc_ref.set({"instructions": []}, merge=True)
        except Exception as e:
            logger.error("Can't fetch instructions:", str(e))
        doc_ref.set({
            "env_data": {
                timestamp: {
                    u'type': choice(datatypes),
                    u'data': (gauss(10, 2)),
                }
            },
            "state": {
                "ip_addr": get('https://api.ipify.org').text,
                "heartbeat": int(time() * 1000)
            },
        }, merge=True)

        if instructions and len(instructions) > 0:
            for instruction in instructions:
                if instruction == "LED ON":
                    GPIO.output(23, GPIO.HIGH)
                elif instruction == "SLEEP 1":
                    sleep(1)
                elif instruction == "LED OFF":
                    GPIO.output(23, GPIO.LOW)

                elif instruction == "READ SENSORS":
                        payload = {
                            "component": "sensors",
                            "cmd": "read_all"
                        }
                        payload_jsonstr = json.dumps(payload)
                        ser.write(payload_jsonstr.encode())
                        logger.info('sent')
                        
                        sleep(1)
                        inbound_str = ser.read_all().decode()
                        if len(inbound_str) > 0:
                            result = str(json.loads(inbound_str))
                            doc_ref.set({
                                "manual_reading": {
                                    timestamp: {
                                        u'type': choice(datatypes),
                                        u'data': result,
                                    }
                                },
                            }, merge=True)
                    
                elif instruction == "GO":
                    payload = {
                        "component": "motors",
                        "cmd": "set_speed",
                        "params": [1]
                    }
                    payload_jsonstr = json.dumps(payload)
                    ser.write(payload_jsonstr.encode())

                if instruction == "STOP":
                    payload = {
                        "component": "motors",
                        "cmd": "set_speed",
                        "params": [0]
                    }
                    payload_jsonstr = json.dumps(payload)
                    ser.write(payload_jsonstr.encode())
                        
        sleep(10)
    except Exception as e:
        logger.error(str(e) + str(hex(uuid.getnode())))