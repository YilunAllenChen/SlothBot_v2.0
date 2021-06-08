(this["webpackJsonpcecropia-dashboard"]=this["webpackJsonpcecropia-dashboard"]||[]).push([[0],{238:function(e,t,n){},241:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(24),r=n.n(s),i=(n(161),n(162),n(8)),o=n(9),l=n(13),d=n(12),j=n(31),h=n(30),u=n(153),b=n(148),p=n(6),O=(n(238),n(21)),g=n(112),x=Object(g.b)({name:"reducer",initialState:{view:"home",controller:{activeAgent:null,agentStatus:null,agentStatusReady:!1,agentDataChart:null,agentDataReady:!1,selectedDataView:null,agnetInstructions:[],agentInstructionsReady:!1}},reducers:{toPage:function(e,t){e.view=t.payload},selectActiveAgentAndUnreadyData:function(e,t){e.controller.activeAgent=t.payload,e.controller.agentDataReady=!1,e.controller.agentInstructionsReady=!1,e.controller.agentStatusReady=!1},setVisualization:function(e,t){e.controller.agentDataReady=t.payload.agentDataReady,e.controller.agentDataChart=t.payload.agentDataChart,e.controller.selectedDataView=t.payload.selectedDataView},setVisualizedSensorDataView:function(e,t){e.controller.selectedDataView=t.payload},setFetchedAgentInstruction:function(e,t){e.controller.agentInstructions=t.payload.agentInstructions,e.controller.agentInstructionsReady=t.payload.agentInstructionsReady},setAgentStatusData:function(e,t){e.controller.agentStatus=t.payload.agentStatus,e.controller.agentStatusReady=t.payload.agentStatusReady}}}),f=x.actions,v=f.toPage,m=f.selectActiveAgentAndUnreadyData,y=f.setVisualization,k=f.setVisualizedSensorDataView,w=f.setFetchedAgentInstruction,D=f.setAgentStatusData,S=Object(g.a)({reducer:x.reducer}),A=(x.reducer,n(3)),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleDropdown=a.toggleDropdown.bind(Object(h.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(h.a)(a)),a.state={dropdownOpen:!1,collapseOpen:!1},a}return Object(o.a)(n,[{key:"toggleDropdown",value:function(){this.setState(Object(j.a)(Object(j.a)({},this.state),{dropdownOpen:!this.state.dropdownOpen}))}},{key:"toggleNavbar",value:function(){this.setState(Object(j.a)(Object(j.a)({},this.state),{collapseOpen:!this.state.collapseOpen}))}},{key:"handleGoToPage",value:function(e){this.props.dispatch(v(e)),console.log(e)}},{key:"render",value:function(){var e=this;return Object(A.jsxs)(p.t,{type:"dark",expand:"md",sticky:"top",style:{backgroundColor:"#223344"},children:[Object(A.jsx)(p.u,{href:"#",children:"Cecropia"}),Object(A.jsx)(p.v,{onClick:this.toggleNavbar}),Object(A.jsxs)(p.h,{open:this.state.collapseOpen,navbar:!0,children:[Object(A.jsxs)(p.q,{navbar:!0,children:[Object(A.jsx)(p.r,{children:Object(A.jsx)(p.s,{onClick:function(){return e.handleGoToPage("home")},href:"#",active:"home"===this.props.view,children:"Home"})}),Object(A.jsx)(p.r,{children:Object(A.jsx)(p.s,{onClick:function(){return e.handleGoToPage("controller")},href:"#",active:"controller"===this.props.view,children:"Controller"})})," ",Object(A.jsx)(p.r,{children:Object(A.jsx)(p.s,{onClick:function(){return e.handleGoToPage("team")},href:"#",active:"team"===this.props.view,children:"Team"})})]}),Object(A.jsx)(p.q,{navbar:!0,className:"ml-auto",children:Object(A.jsxs)(p.l,{size:"sm",seamless:!0,children:[Object(A.jsx)(p.m,{type:"prepend",children:Object(A.jsx)(p.n,{children:Object(A.jsx)(b.a,{icon:u.a})})}),Object(A.jsx)(p.j,{className:"border-0",placeholder:"Search..."})]})})]})]})}}]),n}(c.a.Component),I=Object(O.b)((function(e){return{view:e.view}}))(C);n(241);function L(){return Object(A.jsx)("div",{style:{height:"calc(100vh - 80px)"},children:Object(A.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/foiRTJnc-vA",title:"YouTube video player",frameBorder:"0",autoplay:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}var R=n(56),N=n(15),P=n(109);n(351);P.a.initializeApp({apiKey:"AIzaSyCGiPWGUd_6q5FvGy908P91AT3i7pyslHI",authDomain:"cecropia.firebaseapp.com",databaseURL:"https://cecropia-default-rtdb.firebaseio.com",projectId:"cecropia",storageBucket:"cecropia.appspot.com",messagingSenderId:"582360457051",appId:"1:582360457051:web:d75e356ec9e83ef306c47e",measurementId:"G-QXFS18M5T5"});var E=P.a.firestore().collection("slothbots"),T=(n(79),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).dataListener=function(){},a}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.dataListener()}},{key:"render",value:function(){var e=this;if(!this.props.agentInstructionsReady){if(!this.props.activeAgent||"select"===this.props.activeAgent)return Object(A.jsx)("div",{children:"Please select an agent."});this.dataListener(),this.dataListener=E.doc(this.props.activeAgent).onSnapshot((function(t){console.log(t.data()),e.props.dispatch(w({agentInstructions:t.data().instructions,agentInstructionsReady:!0}))}))}var t=[],n=0;if(this.props.agentInstructionsReady){var a,c=this.props.agentInstructions,s=Object(N.a)(c);try{for(s.s();!(a=s.n()).done;){var r=a.value;t.push(Object(A.jsx)(p.p,{className:"SmallPaddingInstruction",children:r},n++))}}catch(i){s.e(i)}finally{s.f()}0===t.length&&t.push(Object(A.jsx)(p.p,{className:"SmallPaddingInstruction",children:"Instruction Queue is empty"},"empty"))}else t=Object(A.jsx)(p.p,{children:"Loading..."});return Object(A.jsx)(p.o,{className:"black SmallPaddingInstruction",children:t})}}]),n}(c.a.Component)),F=Object(O.b)((function(e){return{activeAgent:e.controller.activeAgent,agentInstructions:e.controller.agentInstructions,agentInstructionsReady:e.controller.agentInstructionsReady}}))(T),V=n(156),G={scales:{yAxes:[{ticks:{beginAtZero:!0}}],x:{ticks:{autoSkip:!0,maxTicksLimit:5}}}},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).dataListener=function(){},a}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.dataListener()}},{key:"render",value:function(){var e=this;if(!this.props.agentDataReady){if(!this.props.activeAgent||"select"===this.props.activeAgent)return Object(A.jsx)("div",{children:"Please select an agent."});this.dataListener(),this.dataListener=E.doc(this.props.activeAgent).onSnapshot((function(t){var n={};for(var a in t=t.data().env_data)t[a].type in n||(n[t[a].type]={labels:[],datasets:[{label:t[a].type,data:[],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]}),n[t[a].type].labels.push(new Date(parseInt(a)).toLocaleDateString()),n[t[a].type].datasets[0].data.push(t[a].data);e.props.dispatch(y({agentDataChart:n,agentDataReady:!0,selectedDataView:Object.keys(n)[0]}))}))}if(this.props.agentDataReady){for(var t=[],n=0,a=Object.keys(this.props.agentDataChart);n<a.length;n++){var c=a[n];t.push(Object(A.jsx)("option",{value:c,children:c}))}return Object(A.jsxs)(p.i,{children:[Object(A.jsx)(p.k,{onChange:function(t){e.props.dispatch(k(t.target.value))},children:t}),Object(A.jsx)(V.a,{data:this.props.agentDataChart[this.props.selectedDataView],options:G})]})}return Object(A.jsx)("div",{children:"Loading..."})}}]),n}(c.a.Component),z=Object(O.b)((function(e){return{activeAgent:e.controller.activeAgent,agentDataReady:e.controller.agentDataReady,agentDataChart:e.controller.agentDataChart,selectedDataView:e.controller.selectedDataView}}))(U),M={margin:"5px"},B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"fireInstructions",value:function(e){this.props.activeAgent&&"select"!==this.props.activeAgent&&E.doc(this.props.activeAgent).set({instructions:e},{merge:!0})}},{key:"render",value:function(){var e=this;return Object(A.jsxs)(p.b,{style:{width:"100%",margin:"10px"},className:"black",children:[Object(A.jsx)(p.e,{children:"Robot Command Bank"}),Object(A.jsxs)(p.c,{children:[Object(A.jsx)("p",{children:"All instructions will be queued to the robot and executed at earliest convenience."}),Object(A.jsx)(p.a,{style:M,onClick:function(){return e.fireInstructions(["LED ON"])},children:"LED ON"}),Object(A.jsx)(p.a,{style:M,onClick:function(){return e.fireInstructions(["LED OFF"])},children:"LED OFF"}),Object(A.jsx)(p.a,{style:M,onClick:function(){return e.fireInstructions(["LED ON","SLEEP 1","LED OFF","SLEEP 1","LED ON","SLEEP 1","LED OFF","SLEEP 1"])},children:"Blink"}),Object(A.jsx)("hr",{}),Object(A.jsx)(p.a,{style:M,onClick:function(){e.fireInstructions(["GO"])},children:"GO"}),Object(A.jsx)(p.a,{style:M,onClick:function(){e.fireInstructions(["STOP"])},children:"STOP"}),Object(A.jsx)(p.a,{style:M,theme:"info",onClick:function(){e.fireInstructions(["UPDATE"])},children:"Update"})]}),Object(A.jsx)(p.d,{})]})}}]),n}(c.a.Component),q=Object(O.b)((function(e){return{activeAgent:e.controller.activeAgent}}))(B),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).dataListener=function(){},a}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.dataListener()}},{key:"render",value:function(){var e=this;if(!this.props.agentStatusReady)return this.props.activeAgent&&"select"!==this.props.activeAgent?(this.dataListener(),this.dataListener=E.doc(this.props.activeAgent).onSnapshot((function(t){e.props.dispatch(D({agentStatus:t.data().state,agentStatusReady:!0}))})),Object(A.jsx)("div",{children:"loading..."})):Object(A.jsx)("div",{children:"Please select an agent."});var t=new Date(this.props.agentStatus.heartbeat);return Object(A.jsxs)(p.b,{style:{width:"100%",margin:"10px"},className:"black",children:[Object(A.jsx)(p.e,{children:"Robot Status"}),Object(A.jsxs)(p.c,{children:[Object(A.jsxs)("p",{children:["Last Heartbeat: ",t.toLocaleString()]}),Object(A.jsxs)("p",{children:["IP Address: ",this.props.agentStatus.ip_addr]})]}),Object(A.jsx)(p.d,{})]})}}]),n}(c.a.Component),J=Object(O.b)((function(e){return{activeAgent:e.controller.activeAgent,agentStatus:e.controller.agentStatus,agentStatusReady:e.controller.agentStatusReady}}))(H);function W(){var e=Object(O.c)(),t=Object(a.useState)(!1),n=Object(R.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),i=Object(R.a)(r,2),o=i[0],l=i[1];if(!c)return E.get().then((function(e){var t=[];e.docs.forEach((function(e){t.push(e.id)})),l(t),s(!0)})),Object(A.jsx)(p.i,{children:Object(A.jsx)(p.w,{children:"Loading..."})});var d=[Object(A.jsx)("option",{value:"select",children:"Please Select"})];return o.forEach((function(e){d.push(Object(A.jsx)("option",{value:e,children:e}))})),Object(A.jsx)(p.i,{children:Object(A.jsxs)(p.w,{children:[Object(A.jsxs)(p.g,{xs:"12",md:"6",children:[Object(A.jsx)("h3",{className:"white",children:"Command Center"}),Object(A.jsxs)(p.w,{children:[Object(A.jsx)(p.g,{xs:"8",lg:"9",children:Object(A.jsx)(p.k,{onChange:function(t){console.log(t.target.value),e(m(t.target.value))},children:d})}),Object(A.jsx)(p.g,{xs:"4",lg:"3",children:Object(A.jsx)(p.a,{theme:"info",style:{width:"100%"},onClick:function(){console.log("refreshing"),s(!1),E.get().then((function(e){var t=[];e.docs.forEach((function(e){t.push(e.id)})),l(t),s(!0)}))},children:"Refresh"})})]}),Object(A.jsx)(p.w,{children:Object(A.jsx)(q,{})}),Object(A.jsx)(p.w,{children:Object(A.jsx)(J,{})})]}),Object(A.jsxs)(p.g,{xs:"12",md:"6",children:[Object(A.jsx)("h3",{className:"white",children:"Sensor Data"}),Object(A.jsx)(z,{}),Object(A.jsx)("hr",{}),Object(A.jsx)("h3",{className:"white",children:"Instruction Queue"}),Object(A.jsx)(F,{})]})]})})}var Q={margin:"10px"};function _(){return Object(A.jsx)(p.i,{children:Object(A.jsxs)(p.w,{children:[Object(A.jsx)(p.g,{sm:"12",md:"4",children:Object(A.jsxs)(p.b,{className:"black",style:Q,children:[Object(A.jsx)(p.e,{children:"Faculty Advisor"}),Object(A.jsx)(p.c,{children:Object(A.jsx)(p.f,{children:"Dr. Magnus Egerstedt"})})]})})," ",Object(A.jsx)(p.g,{sm:"12",md:"4",children:Object(A.jsxs)(p.b,{className:"black",style:Q,children:[Object(A.jsx)(p.e,{children:"Project Lead"}),Object(A.jsx)(p.c,{children:Object(A.jsx)(p.f,{children:"Allen Chen"})})]})})," ",Object(A.jsx)(p.g,{sm:"12",md:"4",children:Object(A.jsxs)(p.b,{className:"black",style:Q,children:[Object(A.jsx)(p.e,{children:"Team Member"}),Object(A.jsx)(p.c,{children:Object(A.jsx)(p.f,{children:"Yousef Emam"})})]})})," ",Object(A.jsx)(p.g,{sm:"12",md:"4",children:Object(A.jsxs)(p.b,{className:"black",style:Q,children:[Object(A.jsx)(p.e,{children:"Team Member"}),Object(A.jsx)(p.c,{children:Object(A.jsx)(p.f,{children:"Carmen Jimenez"})})]})}),Object(A.jsx)(p.g,{sm:"12",md:"4",children:Object(A.jsxs)(p.b,{className:"black",style:Q,children:[Object(A.jsx)(p.e,{children:"Team Member"}),Object(A.jsx)(p.c,{children:Object(A.jsx)(p.f,{children:"Hannah Phillips"})})]})})]})})}var Y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e;switch(this.props.view){case"home":e=Object(A.jsx)(L,{});break;case"controller":e=Object(A.jsx)(W,{});break;case"team":e=Object(A.jsx)(_,{});break;default:e=Object(A.jsx)("div",{children:"default"})}return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("div",{className:"topbar",children:Object(A.jsx)(I,{})}),Object(A.jsx)("div",{className:"mainContent",children:e})]})}}]),n}(c.a.Component),K=Object(O.b)((function(e){return{view:e.view}}))(Y);r.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(O.a,{store:S,children:Object(A.jsx)(K,{})})}),document.getElementById("root"))},79:function(e,t,n){}},[[347,1,2]]]);
//# sourceMappingURL=main.332f458a.chunk.js.map