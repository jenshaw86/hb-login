(this["webpackJsonphb-login"]=this["webpackJsonphb-login"]||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t){var a=/^\w+@[a-z]+.[a-z]{3}$/;e.exports=function(e,t){switch(e){case"email":return a.test(t);case"password":return!(t.length<8)}}},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(31),a(12)),s=a(7),u=a(14),i=a(5),m=a(13),p=a(22);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=function(e,t){var a="Please enter a valid email",n="Please enter a password with at least 8 characters";switch(e){case"email":return h({},t,{email:a});case"password":return h({},t,{password:n})}},b=a(32),g=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),p=Object(u.a)(o,2),E=p[0],h=p[1],g=Object(n.useState)({email:"",password:""}),f=Object(u.a)(g,2),w=f[0],v=f[1],O=function(e){e.persist();var t=e.target,a=t.type,n=t.value;switch(a){case"email":c(n);break;case"password":h(n)}},y=function(e){for(var t=!0,a={email:"",password:""},n=0;n<2;n++){var r=[e.target[n].name,e.target[n].value],l=r[0];!1===b(l,r[1])&&(t=!1,a=d(l,a))}return v(a),t},j=function(e){return r.a.createElement(i.a.Text,{className:"text-muted"},e)},P=function(e){switch(e){case"/login":return"Log In";case"/signup":return"Sign Up"}};return r.a.createElement(s.a,null,r.a.createElement("h2",null,P(e.path)),r.a.createElement(i.a,{noValidate:!0,onSubmit:function(e){if(e.preventDefault(),e.persist(),!0!==y(e))return null;alert("logged in!")},className:"form"},r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Email Address"),r.a.createElement(i.a.Control,{type:"email",name:"email",value:l,placeholder:"Email",onChange:function(e){return O(e)},required:!0}),j(w.email)),r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Password"),r.a.createElement(i.a.Control,{type:"password",name:"password",value:E,placeholder:"Password",onChange:function(e){return O(e)},required:!0}),j(w.password)),r.a.createElement(m.a,{variant:"light",type:"submit",value:"submit"},P(e.path))))},f=a(8),w=function(e){return r.a.createElement(s.a,{className:"footer"},function(e){switch(e){case"/login":return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(f.b,{to:"/reset"},"Reset Password")," | ",r.a.createElement(f.b,{to:"/signup"},"Sign Up")));case"/signup":return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(f.b,{to:"/reset"},"Reset Password")," | ",r.a.createElement(f.b,{to:"/login"},"Login")));case"/reset":return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(f.b,{to:"/login"},"Login")," | ",r.a.createElement(f.b,{to:"/signup"},"Sign Up")))}}(e.path))},v=function(e){return r.a.createElement(s.a,{className:"card"},r.a.createElement(g,{path:e.match.path}),r.a.createElement(w,{path:e.match.path}))},O=function(e){return r.a.createElement(s.a,{className:"card"},r.a.createElement(g,{path:e.match.path}),r.a.createElement(w,{path:e.match.path}))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Reset Password"),r.a.createElement(i.a,null,r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Email Address"),r.a.createElement(i.a.Control,{type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement(i.a.Text,null,"We'll send you an email to reset your password.")),r.a.createElement(m.a,{variant:"light",type:"submit",value:"submit"},"Reset Password")))},j=function(e){return r.a.createElement(s.a,{className:"card"},r.a.createElement(y,null),r.a.createElement(w,{path:e.match.path}))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:"/"},r.a.createElement("h1",null,"HomeBinder")))};a(40),a(41);var x=function(){return r.a.createElement(s.a,{className:"app"},r.a.createElement(P,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(o.a,{to:"/login"})),r.a.createElement(o.b,{exact:!0,path:"/login",component:v}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:O}),r.a.createElement(o.b,{exact:!0,path:"/reset",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.372a8bb0.chunk.js.map