(this["webpackJsonphomeworks-from-ignat"]=this["webpackJsonphomeworks-from-ignat"]||[]).push([[0],{11:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__21fkD",input:"SuperInputText_input__1qadH",errorInput:"SuperInputText_errorInput__vqoUM",span:"SuperInputText_span__3LhKk",errorSpan:"SuperInputText_errorSpan__V9ATR"}},17:function(e,t,n){e.exports={default:"SuperButton_default__3h9qb",red:"SuperButton_red__1k1Gu"}},20:function(e,t,n){e.exports={blue:"HW4_blue__2Buig",column:"HW4_column__2s3wA",testSpanError:"HW4_testSpanError__3VOcm"}},21:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1Rv0J",spanClassName:"SuperCheckbox_spanClassName__3ExPS"}},3:function(e,t,n){e.exports={background:"Affairs_background__3sCY9",container:"Affairs_container__dhLQX",line:"Affairs_line__3D6-l",item:"Affairs_item__vLWLY",high:"Affairs_high__2oBSB",middle:"Affairs_middle__Hqx8L",low:"Affairs_low__3k-oY",button:"Affairs_button__3aJ26",filterBlock:"Affairs_filterBlock__1zli8"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),s=n.n(c),i=(n(33),n(6)),o=n.n(i),j=n(10),l=n(8),u=n.n(l),d=n(0);var b=function(e){return Object(d.jsxs)("div",{className:u.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:u.a.avatar}),Object(d.jsx)("div",{className:u.a.angle}),Object(d.jsxs)("div",{className:u.a.content,children:[Object(d.jsx)("div",{className:u.a.name,children:e.name}),Object(d.jsx)("div",{className:u.a.message,children:e.message}),Object(d.jsx)("div",{className:u.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Victor",O="\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0443\u0447\u0438\u043b React?",_="22:00";var m=function(){return Object(d.jsxs)("div",{className:u.a.background,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 1"}),Object(d.jsx)(b,{avatar:h,name:x,message:O,time:_}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(7),p=n(3),v=n.n(p);var g=function(e){var t=v.a.item+" "+v.a[e.affair.priority];return Object(d.jsxs)("div",{className:v.a.line,children:[Object(d.jsx)("div",{className:v.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:v.a.button,children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:v.a.container,children:[t,Object(d.jsxs)("div",{className:v.a.filterBlock,children:[Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:v.a.button,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:v.a.button,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:v.a.button,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:v.a.button,children:"Low"})]})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(N),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(f.a)(c,2),i=s[0],j=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{className:v.a.background,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 2"}),Object(d.jsx)(k,{data:l,setFilter:j,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=n(28),w=n(9),y=n.n(w),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,i=r?y.a.inputError:y.a.input;return Object(d.jsxs)("div",{className:y.a.container1,children:[Object(d.jsxs)("div",{className:y.a.block,children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onBlur:n,onKeyDown:s}),Object(d.jsx)("button",{onClick:a,className:y.a.button,disabled:!t,children:"add"}),Object(d.jsx)("span",{children:c})]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:y.a.span,children:r})})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(f.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(f.a)(o,2),l=j[0],u=j[1],b=function(){n(s),alert("Hello, ".concat(s.trim()," !")),i("")},h=t.length;return Object(d.jsx)(A,{name:s,setNameCallback:function(e){e.currentTarget.value?(i(e.currentTarget.value),u("")):(i(""),u("name is require!"))},addUser:b,error:l,totalUsers:h,onEnter:function(e){"Enter"===e.key&&(b(),i(""))}})},E=n(42);var I=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:y.a.container,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 3"}),Object(d.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};r([].concat(Object(S.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=n(12),B=n(13),H=n(11),W=n.n(H),G=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName,Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),i="".concat(W.a.span," ").concat(c?W.a.errorSpan:W.a.span),o="".concat(W.a.superInput," ").concat(c?W.a.errorInput:W.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:o},s)),c&&Object(d.jsx)("span",{className:i,children:c})]})},P=n(20),q=n.n(P),J=n(17),U=n.n(J),F=function(e){var t=e.red,n=e.className,a=Object(B.a)(e,["red","className"]),r="".concat(t?"".concat(U.a.red," ").concat(U.a.default):U.a.default," ").concat(n);return Object(d.jsx)("button",Object(M.a)({className:r},a))},K=n(21),L=n.n(K),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:L.a.spanClassName,children:r})]})};var R=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),j=Object(f.a)(i,2),l=j[0],u=j[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 4"}),Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(G,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(G,{className:q.a.blue}),Object(d.jsx)(F,{children:"default"}),Object(d.jsx)(F,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(F,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:l,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var X=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(C,{}),Object(d.jsx)(I,{}),Object(d.jsx)(R,{})]})};var D=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},V=n(2);var z=function(){return Object(d.jsx)("div",{children:"HW6 and etc."})};var Q=function(){return Object(d.jsx)("div",{children:"etc HW"})},Z="/pre-junior",$="/junior",ee="/junior-plus";var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(V.d,{children:[Object(d.jsx)(V.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(V.a,{to:Z})}}),Object(d.jsx)(V.b,{path:Z,render:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(V.b,{path:$,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(V.b,{path:ee,render:function(){return Object(d.jsx)(Q,{})}}),"// add routes",Object(d.jsx)(V.b,{render:function(){return Object(d.jsx)(D,{})}})]})})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:Z,children:"pre-junior"}),Object(d.jsx)(j.b,{to:$,children:"junior"}),Object(d.jsx)(j.b,{to:ee,children:"junior+"})]})};var ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(ne,{}),Object(d.jsx)(te,{})]})})};var re=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{className:o.a.title,children:"react homeworks:"}),Object(d.jsx)(ae,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={App:"App_App__1ccWf",title:"App_title__l2Tay"}},8:function(e,t,n){e.exports={background:"Message_background__22aWh",message:"Message_message__2qJPR",avatar:"Message_avatar__1PiQj",content:"Message_content__dMIDO",angle:"Message_angle__Gxpj6",text:"Message_text__3OOXK",name:"Message_name__29kdr",time:"Message_time__3YxHJ"}},9:function(e,t,n){e.exports={container:"Greeting_container__2-1NZ",container1:"Greeting_container1__3M-qo",block:"Greeting_block__YHnxS",input:"Greeting_input__2brXJ",inputError:"Greeting_inputError__3fUsN",button:"Greeting_button__28fzO",span:"Greeting_span__23SbP"}}},[[40,1,2]]]);
//# sourceMappingURL=main.e2b4813d.chunk.js.map