(this["webpackJsonpuser-monitoring"]=this["webpackJsonpuser-monitoring"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(26),r=c.n(a),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,105)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))},l=c(7),o=c(6),j=c(8),h=c(9),d=c(13),b=c(12),u=c(11),m=c(1),x=n.a.createContext(),O=(x.Provider,function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={result:[],timestamp:"",company:"",address:"",nickname:"",fullname:"",email:"",phonenumber:"",url:"http://103.135.5.242/receiveESP/view.php"},e.fetchData=function(){fetch(e.state.url).then((function(t){t.json().then(function(e){1===e.success?this.setState({result:e.result,timestamp:e.timestamp}):console.log(e.message)}.bind(Object(d.a)(e)))})).catch((function(e){console.log(e)}))},e.handleAdd=function(t,c,s,n,a,r){e.setState({company:t,address:c,nickname:s,fullname:n,email:a,phonenumber:r})},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.fetchData(),setInterval(this.fetchData,1e3)}},{key:"render",value:function(){var e={result:this.state.result,timestamp:this.state.timestamp,company:this.state.company,address:this.state.address,nickname:this.state.nickname,fullname:this.state.fullname,email:this.state.email,phonenumber:this.state.phonenumber,handleAdd:this.handleAdd};return Object(m.jsx)("div",{children:Object(m.jsx)(x.Provider,{value:e,children:this.props.children})})}}]),c}(s.Component)),p=(c(59),c(60),c(103)),f=c(104);c(61);function v(){return Object(m.jsx)("div",{children:Object(m.jsxs)(p.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(m.jsxs)(l.b,{className:"d-flex justify-content-start align-self-center navbar-brand",to:"/home",children:["Cipta",Object(m.jsx)("span",{children:"Things"}),"."]}),Object(m.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(p.a.Collapse,{className:"justify-content-center",id:"basic-navbar-nav",children:[Object(m.jsxs)(f.a,{children:[Object(m.jsx)(l.b,{to:"/dashboard",children:"Dashboard"}),Object(m.jsx)(l.b,{to:"/reports",children:"Reports"}),Object(m.jsx)(l.b,{to:"/help",children:"Help"}),Object(m.jsx)(l.b,{to:"/account",children:"Account"})]}),Object(m.jsx)(l.b,{className:"ml-auto navbar-out",to:"/",children:"Sign out"})]})]})})}c(69);function g(){return Object(m.jsx)("div",{className:"text-center footer",children:Object(m.jsx)("footer",{children:"\xa9 PT Tri Cipta Teknindo - 2021"})})}function N(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{}),e.children,Object(m.jsx)(g,{})]})}var y=c(21),w=c.n(y),D=c(16),k=c.n(D),S=(c(88),c.p+"static/media/Cipta_Things-removebg.2cb7f7af.png"),C=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).postData=function(t){t.preventDefault(),t.persist(),w.a.post("https://103.135.5.242/receiveESP/login.php",{username:e.username.value,password:e.password.value}).then(function(e){var c=e.data;1===c.success?(this.setState({message:c.message,referrer:!0}),this.context.handleAdd(c.company,c.address,c.nickname,c.fullname,c.email,c.phonenumber),t.target.reset()):(this.setState({message:c.address}),k()(this.state.message,{icon:"error"}))}.bind(Object(d.a)(e))).catch((function(e){console.log(e)}))},e.state={message:"",referrer:!1},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return!0===this.state.referrer?Object(m.jsx)(o.a,{to:"/home"}):Object(m.jsx)("div",{className:"login",children:Object(m.jsx)("div",{className:"container d-flex justify-content-center",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col d-flex align-items-end col-login",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)("span",{children:"Make it simple, but"}),Object(m.jsx)("span",{children:"significant"})]})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsxs)("h6",{children:[Object(m.jsx)("img",{src:S,alt:"img"}),Object(m.jsx)("b",{children:"Cipta"}),"Things."]}),Object(m.jsx)("h1",{className:"mt-5",children:Object(m.jsx)("b",{children:"Login"})}),Object(m.jsx)("h2",{className:"mt-4",children:"Login to your account"}),Object(m.jsx)("h4",{children:"Thank you for get back to CiptaThings. lets access the platform"}),Object(m.jsxs)("form",{className:"mt-5",onSubmit:this.postData,children:[Object(m.jsx)("h5",{children:Object(m.jsx)("b",{children:"Username"})}),Object(m.jsx)("input",{type:"text",name:"username",ref:function(t){return e.username=t},className:"form-control",placeholder:"Email or username"}),Object(m.jsx)("h5",{children:Object(m.jsx)("b",{children:"Password"})}),Object(m.jsx)("input",{type:"password",name:"password",ref:function(t){return e.password=t},className:"form-control",placeholder:"password"}),Object(m.jsx)("input",{type:"submit",value:"Submit",className:"form-control my-4"})]}),Object(m.jsxs)("h5",{children:["Don't have an account yet? ",Object(m.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/",children:"Sign Up"})]})]})]})})})}}]),c}(s.Component);C.contextType=x;c(89);var A=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).postData=function(e){e.preventDefault(),e.persist(),w.a.post("http://103.135.5.242/receiveESP/search.php",{User:s.User.value,Company:s.Company.value}).then(function(e){var t=e.data;1===t.success?this.setState({result:t.result,referrer:1}):this.setState({referrer:0})}.bind(Object(d.a)(s))).catch((function(e){console.log(e)}))},s.state={result:[],referrer:0},s}return Object(h.a)(c,[{key:"render",value:function(){var e,t=this,c=this.state,s=c.result,n=c.referrer;return 1===n?e=Object(m.jsx)("div",{className:"table-responsive",children:Object(m.jsxs)("table",{className:"table table-borderless",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Location"}),Object(m.jsx)("th",{children:"Time"})]})}),Object(m.jsx)("tbody",{children:s.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.User}),Object(m.jsxs)("td",{children:["Area - ",e.Area]}),Object(m.jsx)("td",{children:e.Time})]},e.id)}))})]})}):0===n&&(e=Object(m.jsx)("h3",{children:"Data not Found"})),Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"container text-center",children:[Object(m.jsx)("h1",{children:"People Location"}),Object(m.jsx)("h6",{children:this.context.timestamp}),Object(m.jsx)("div",{className:"row d-flex justify-content-center mt-4",children:Object(m.jsx)("form",{onSubmit:this.postData,children:Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsx)("input",{type:"hidden",value:this.context.company,ref:function(e){return t.Company=e}}),Object(m.jsx)("input",{type:"text",ref:function(e){return t.User=e},className:"col form-control text-center",placeholder:"Name"})]})})}),Object(m.jsx)("div",{className:"row mt-3",children:e})]})})}}]),c}(s.Component);A.contextType=x;c(90),c(91),c(93);var T=c(27),P=c.n(T),I=(c(94),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).fetchData=function(){fetch("http://103.135.5.242/receiveESP/view.php?Company="+s.context.company).then((function(e){e.json().then(function(e){1===e.success?this.setState({result:e.result}):console.log(e.message)}.bind(Object(d.a)(s)))})).catch((function(e){console.log(e)}))},s.state={result:[]},s}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.fetchData(),setInterval(this.fetchData,1e3)}},{key:"componentDidUpdate",value:function(){P()(document).ready((function(){P()("#example").DataTable()}))}},{key:"render",value:function(){var e=this.state.result;return Object(m.jsx)("div",{className:"dataList",children:Object(m.jsxs)("div",{className:"container text-center",children:[Object(m.jsx)("h1",{children:"List of Data Location"}),Object(m.jsx)("h6",{children:this.context.timestamp}),Object(m.jsx)("div",{className:"row mt-3 mb-5",children:Object(m.jsx)("div",{className:"table-responsive",children:Object(m.jsxs)("table",{id:"example",className:"table table-borderless",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Mac Address"}),Object(m.jsx)("th",{children:"RSSI"}),Object(m.jsx)("th",{children:"Area"}),Object(m.jsx)("th",{children:"Time"})]})}),Object(m.jsx)("tbody",{children:e.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.User}),Object(m.jsx)("td",{children:e.Address}),Object(m.jsx)("td",{children:e.RSSI}),Object(m.jsx)("td",{children:e.Area}),Object(m.jsx)("td",{children:e.Time})]},e.id)}))})]})})})]})})}}]),c}(s.Component));I.contextType=x;c(95);var E=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).fetchData=function(){fetch("http://103.135.5.242/receiveESP/count.php?Company="+s.context.company).then((function(e){e.json().then(function(e){1===e.success?this.setState({result:e.result,result_area1:e.result_area1,result_area2:e.result_area2}):console.log(e.message)}.bind(Object(d.a)(s)))})).catch((function(e){console.log(e)}))},s.state={result:"",result_area1:"",result_area2:""},s}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.fetchData(),setInterval(this.fetchData,1e3)}},{key:"render",value:function(){var e=this.state,t=e.result,c=e.result_area1,s=e.result_area2;return Object(m.jsx)("div",{className:"summary",children:Object(m.jsxs)("div",{className:"container text-center",children:[Object(m.jsx)("h1",{children:"Summary"}),Object(m.jsx)("h6",{children:this.context.timestamp}),Object(m.jsxs)("div",{className:"row mt-3",children:[Object(m.jsxs)("div",{className:"col a-summary",children:[Object(m.jsx)("h3",{children:"Area - 1"}),Object(m.jsx)("h5",{children:c})]}),Object(m.jsxs)("div",{className:"col b-summary",children:[Object(m.jsx)("h3",{children:"Total"}),Object(m.jsx)("h5",{children:t})]}),Object(m.jsxs)("div",{className:"col c-summary",children:[Object(m.jsx)("h3",{children:"Area - 2"}),Object(m.jsx)("h5",{children:s})]})]})]})})}}]),c}(s.Component);E.contextType=x;var U=c(28),L=c(31),_=(c(96),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"help",children:Object(m.jsxs)("div",{className:"container text-center",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)(U.a,{className:"mb-2"})," Help Center"]}),Object(m.jsx)("h6",{children:"Choose a category to quickly find the help you need"}),Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsxs)(l.b,{className:"col a-help",to:"/",children:[Object(m.jsx)(L.a,{size:30,className:"mb-2"}),Object(m.jsx)("h5",{children:"Getting Started"})]}),Object(m.jsxs)(l.b,{className:"col b-help",to:"/",children:[Object(m.jsx)(L.b,{size:30,className:"mb-2"}),Object(m.jsx)("h5",{children:"Usage Guides"})]}),Object(m.jsxs)(l.b,{className:"col c-help",to:"/",children:[Object(m.jsx)(L.a,{size:30,className:"mb-2"}),Object(m.jsx)("h5",{children:"Contact Support"})]})]}),Object(m.jsxs)("h2",{children:[Object(m.jsx)("span",{children:Object(m.jsx)("b",{children:"Quick"})})," Answers"]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(l.b,{className:"d-flex bd-highlight box-help",to:"/",children:[Object(m.jsx)("div",{className:"p-2 w-100 bd-highlight",children:"How can i setup my user profile ?"}),Object(m.jsx)("div",{className:"p-2 flex-shrink-1 bd-highlight icon",children:Object(m.jsx)(U.b,{})})]}),Object(m.jsxs)(l.b,{className:"d-flex bd-highlight box-help",to:"/",children:[Object(m.jsx)("div",{className:"p-2 w-100 bd-highlight",children:"Can i have more than one subcription at a time ?"}),Object(m.jsx)("div",{className:"p-2 flex-shrink-1 bd-highlight",children:Object(m.jsx)(U.b,{})})]}),Object(m.jsxs)(l.b,{className:"d-flex bd-highlight box-help",to:"/",children:[Object(m.jsx)("div",{className:"p-2 w-100 bd-highlight",children:"Can i cancel my subscription wherever i want ?"}),Object(m.jsx)("div",{className:"p-2 flex-shrink-1 bd-highlight",children:Object(m.jsx)(U.b,{})})]})]})})}}]),c}(s.Component)),F=c(52),q=c(53),M=(c(97),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"account",children:Object(m.jsxs)("div",{className:"container text-center",children:[Object(m.jsx)("h1",{children:"Account"}),Object(m.jsx)("h6",{children:this.context.timestamp}),Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsxs)(l.b,{className:"col a-account",to:"/addAccount",children:[Object(m.jsx)(F.a,{size:30,className:"mb-2"}),Object(m.jsx)("h5",{children:"Add Someone"})]}),Object(m.jsxs)(l.b,{className:"col b-account",to:"/updateAccount",children:[Object(m.jsx)(q.a,{size:30,className:"mb-2"}),Object(m.jsx)("h5",{children:"Update Profile"})]})]})]})})}}]),c}(s.Component));M.contextType=x;c(98);var R=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).postData=function(t){t.preventDefault(),t.persist(),k()({title:"Are you sure?",text:"Once submitted, you will not be able to change your data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(c){c?w.a.post("http://103.135.5.242/receiveESP/create.php",{nickName:e.nickName.value,fullName:e.fullName.value,address:e.state.address}).then(function(e){var c=e.data;1===c.success?(this.setState({message:c.message,referrer:0}),t.target.reset(),k()(this.state.message,{icon:"success"})):k()(this.state.message,{icon:"error"})}.bind(Object(d.a)(e))).catch((function(e){console.log(e)})):k()("Change your data!")}))},e.getData=function(t){t.preventDefault(),t.persist(),w.a.post("http://103.135.5.242/receiveESP/get.php",{counter:1}).then(function(e){var t=e.data;1===t.success?(this.setState({address:t.address,referrer:1}),k()(t.message,{icon:"success"})):k()(t.message,{icon:"error"})}.bind(Object(d.a)(e))).catch((function(e){console.log(e)}))},e.state={message:"",address:"",referrer:0},e}return Object(h.a)(c,[{key:"render",value:function(){var e,t=this,c=this.state,s=c.referrer,n=c.address;return 1===s?e=Object(m.jsxs)("form",{onSubmit:this.postData,children:[Object(m.jsx)("h3",{className:"text-center",children:Object(m.jsxs)("b",{children:["Device ID ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{className:"text-center",children:"Scan Device to get the ID"}),Object(m.jsx)("input",{type:"text",name:"address",value:n,className:"text-center form-control",style:{width:"220px",marginLeft:"auto",marginRight:"auto"},disabled:!0}),Object(m.jsxs)("div",{className:"row justify-content-center mt-3",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Display Name ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"How do you want to be called?"}),Object(m.jsx)("input",{type:"text",name:"nickName",ref:function(e){return t.nickName=e},className:"form-control",required:!0})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Full Name ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"Visible to other members"}),Object(m.jsx)("input",{type:"text",name:"fullName",ref:function(e){return t.fullName=e},className:"form-control",required:!0})]})]}),Object(m.jsxs)("div",{className:"row justify-content-center mt-3",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsx)("b",{children:"Email"})}),Object(m.jsx)("h4",{children:"Receive logging in info"}),Object(m.jsx)("input",{type:"text",name:"nickName",ref:function(e){return t.nickName=e},className:"form-control",required:!0})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Phone Number ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"For receiving notifications"}),Object(m.jsx)("input",{type:"text",name:"fullName",ref:function(e){return t.fullName=e},className:"form-control",required:!0})]})]}),Object(m.jsx)("input",{type:"submit",value:"Submit",className:"form-control mt-5"})]}):0===s&&(e=Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"form-control",onClick:this.getData,children:"Get the ID"}),Object(m.jsx)("h4",{children:"Click the button to get the ID of your device"})]})),Object(m.jsx)("div",{className:"add",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Add Account"}),Object(m.jsx)("h6",{children:"Add someone new to looking his/her location"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"row justify-content-center",children:e})]})})}}]),c}(s.Component),z=(c(99),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).postData=function(t){t.preventDefault(),t.persist(),k()({title:"Are you sure?",text:"Once submitted, you will not be able to change your data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(c){c?w.a.post("http://103.135.5.242/receiveESP/create.php",{nickName:e.nickName.value,fullName:e.fullName.value,address:e.state.address}).then(function(e){var c=e.data;1===c.success?(this.setState({message:c.message,referrer:0}),t.target.reset(),k()(this.state.message,{icon:"success"})):k()(this.state.message,{icon:"error"})}.bind(Object(d.a)(e))).catch((function(e){console.log(e)})):k()("Change your data!")}))},e.state={message:""},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"update",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Update Profile"}),Object(m.jsx)("h6",{children:"Update your profile"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("form",{onSubmit:this.postData,children:[Object(m.jsx)("h3",{className:"text-center",children:Object(m.jsxs)("b",{children:["Device ID ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{className:"text-center",children:"Scan Device to get the ID"}),Object(m.jsx)("input",{type:"text",name:"address",value:this.context.address,ref:function(t){return e.address=t},className:"text-center form-control",style:{width:"220px",marginLeft:"auto",marginRight:"auto"},disabled:!0}),Object(m.jsxs)("div",{className:"row justify-content-center mt-3",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Display Name ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"How do you want to be called?"}),Object(m.jsx)("input",{type:"text",name:"nickName",value:this.context.nickname,ref:function(t){return e.nickName=t},className:"form-control",required:!0})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Full Name ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"Visible to other members"}),Object(m.jsx)("input",{type:"text",name:"fullName",value:this.context.fullname,ref:function(t){return e.fullName=t},className:"form-control",required:!0})]})]}),Object(m.jsxs)("div",{className:"row justify-content-center mt-3",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsx)("b",{children:"Email"})}),Object(m.jsx)("h4",{children:"Receive logging in info"}),Object(m.jsx)("input",{type:"text",name:"email",value:this.context.email,ref:function(t){return e.email=t},className:"form-control"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:["Phone Number ",Object(m.jsx)("span",{style:{color:"red"},children:"*"})]})}),Object(m.jsx)("h4",{children:"For receiving notifications"}),Object(m.jsx)("input",{type:"text",name:"phoneNumber",value:this.context.phonenumber,ref:function(t){return e.phoneNumber=t},className:"form-control",required:!0})]})]}),Object(m.jsx)("div",{className:"row mt-4 delete-update",children:Object(m.jsxs)("div",{className:"d-flex bd-highlight",children:[Object(m.jsxs)("div",{className:"p-2 w-100 bd-highlight mr-5",children:[Object(m.jsx)("h3",{children:Object(m.jsx)("b",{children:"Delete Account"})}),Object(m.jsx)("h4",{children:"By deleting your account you have to scan the device again to register the account"})]}),Object(m.jsx)("div",{className:"p-2 flex-shrink-0 bd-highlight d-flex align-items-center ml-5",children:Object(m.jsx)("h4",{style:{fontSize:"8pt",fontWeight:"600"},children:"Delete account.."})})]})}),Object(m.jsx)("input",{type:"submit",value:"Submit",className:"form-control my-4"})]})})]})})}}]),c}(s.Component));z.contextType=x,r.a.render(Object(m.jsx)(l.a,{children:Object(m.jsx)(O,{children:Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/",component:C}),Object(m.jsxs)(N,{children:[Object(m.jsx)(o.b,{path:"/home",component:A}),Object(m.jsx)(o.b,{path:"/reports",component:I}),Object(m.jsx)(o.b,{path:"/dashboard",component:E}),Object(m.jsx)(o.b,{path:"/help",component:_}),Object(m.jsx)(o.b,{path:"/account",component:M}),Object(m.jsx)(o.b,{path:"/addAccount",component:R}),Object(m.jsx)(o.b,{path:"/updateAccount",component:z})]})]})})}),document.getElementById("root")),i()},59:function(e,t,c){},61:function(e,t,c){},69:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.8874a93a.chunk.js.map