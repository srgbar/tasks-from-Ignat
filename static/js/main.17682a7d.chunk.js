(this["webpackJsonphomeworks-from-ignat"]=this["webpackJsonphomeworks-from-ignat"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"Greeting_container__2-1NZ",container1:"Greeting_container1__3M-qo",block:"Greeting_block__YHnxS",input:"Greeting_input__2brXJ",inputError:"Greeting_inputError__3fUsN",button:"Greeting_button__28fzO",span:"Greeting_span__23SbP"}},12:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__21fkD",input:"SuperInputText_input__1qadH",errorInput:"SuperInputText_errorInput__vqoUM",span:"SuperInputText_span__3LhKk",errorSpan:"SuperInputText_errorSpan__V9ATR"}},18:function(e,t,a){e.exports={default:"SuperButton_default__3h9qb",red:"SuperButton_red__1k1Gu"}},21:function(e,t,a){e.exports={blue:"HW4_blue__2Buig",column:"HW4_column__2s3wA",testSpanError:"HW4_testSpanError__3VOcm"}},22:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1Rv0J",spanClassName:"SuperCheckbox_spanClassName__3ExPS"}},3:function(e,t,a){e.exports={App:"App_App__1ccWf",container:"App_container__217P4",title:"App_title__l2Tay"}},34:function(e,t,a){},4:function(e,t,a){e.exports={background:"Affairs_background__3sCY9",container:"Affairs_container__dhLQX",line:"Affairs_line__3D6-l",item:"Affairs_item__vLWLY",high:"Affairs_high__2oBSB",middle:"Affairs_middle__Hqx8L",low:"Affairs_low__3k-oY",button:"Affairs_button__3aJ26",filterBlock:"Affairs_filterBlock__1zli8"}},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(34),a(3)),o=a.n(i),l=a(11),j=a(9),u=a.n(j),d=a(0);var b=function(e){return Object(d.jsxs)("div",{className:u.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:u.a.avatar}),Object(d.jsx)("div",{className:u.a.angle}),Object(d.jsxs)("div",{className:u.a.content,children:[Object(d.jsx)("div",{className:u.a.name,children:e.name}),Object(d.jsx)("div",{className:u.a.message,children:e.message}),Object(d.jsx)("div",{className:u.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Victor",x="\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0443\u0447\u0438\u043b React?",O="22:00";var m=function(){return Object(d.jsxs)("div",{className:u.a.background,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 1"}),Object(d.jsx)(b,{avatar:_,name:h,message:x,time:O}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=a(7),p=a(4),v=a.n(p);var g=function(e){var t=v.a.item+" "+v.a[e.affair.priority];return Object(d.jsxs)("div",{className:v.a.line,children:[Object(d.jsx)("div",{className:v.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:v.a.button,children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:v.a.container,children:[t,Object(d.jsxs)("div",{className:v.a.filterBlock,children:[Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:v.a.button,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:v.a.button,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:v.a.button,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:v.a.button,children:"Low"})]})]})},k=[{_id:1,name:"react",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(k),t=Object(f.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("all"),s=Object(f.a)(r,2),i=s[0],l=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{className:v.a.background,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 2"}),Object(d.jsx)(N,{data:j,setFilter:l,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=a(29),w=a(10),y=a.n(w),A=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?y.a.inputError:y.a.input;return Object(d.jsxs)("div",{className:y.a.container1,children:[Object(d.jsxs)("div",{className:y.a.block,children:[Object(d.jsx)("input",{value:t,onChange:a,className:i,onBlur:a,onKeyDown:s}),Object(d.jsx)("button",{onClick:n,className:y.a.button,disabled:!t,children:"add"}),Object(d.jsx)("span",{children:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:y.a.span,children:c})})]})},H=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),r=Object(f.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),j=l[0],u=l[1],b=function(){a(s),alert("Hello, ".concat(s.trim()," !")),i("")},_=t.length;return Object(d.jsx)(A,{name:s,setNameCallback:function(e){e.currentTarget.value?(i(e.currentTarget.value),u("")):(i(""),u("name is require!"))},addUser:b,error:j,totalUsers:_,onEnter:function(e){"Enter"===e.key&&(b(),i(""))}})},T=a(43);var E=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:y.a.container,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 3"}),Object(d.jsx)(H,{users:a,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};c([].concat(Object(S.a)(a),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},I=a(13),M=a(14),P=a(12),B=a.n(P),W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,r=e.error,s=(e.className,e.spanClassName,Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),i="".concat(B.a.span," ").concat(r?B.a.errorSpan:B.a.span),o="".concat(B.a.superInput," ").concat(r?B.a.errorInput:B.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:o},s)),r&&Object(d.jsx)("span",{className:i,children:r})]})},G=a(21),J=a.n(G),U=a(18),q=a.n(U),F=function(e){var t=e.red,a=e.className,n=Object(M.a)(e,["red","className"]),c="".concat(t?"".concat(q.a.red," ").concat(q.a.default):q.a.default," ").concat(a);return Object(d.jsx)("button",Object(I.a)({className:c},n))},K=a(22),L=a.n(K),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:L.a.spanClassName,children:c})]})};var R=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],r=a?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),l=Object(f.a)(i,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:o.a.title,children:"homeworks 4"}),Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(W,{value:a,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(W,{className:J.a.blue}),Object(d.jsx)(F,{children:"default"}),Object(d.jsx)(F,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(F,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var X=function(){return Object(d.jsxs)("div",{className:o.a.container,children:[Object(d.jsx)(m,{}),Object(d.jsx)(C,{}),Object(d.jsx)(E,{}),Object(d.jsx)(R,{})]})},D=a(8),V=a.n(D);var Z=function(){return Object(d.jsxs)("div",{className:V.a.errorPage,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},z=a(2);var Q=function(){return Object(d.jsx)("div",{className:o.a.title,children:"HW6 and etc."})};var $=function(){return Object(d.jsx)("div",{className:o.a.title,children:"etc HW"})},ee="/pre-junior",te="/junior",ae="/junior-plus";var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(z.d,{children:[Object(d.jsx)(z.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(z.a,{to:ee})}}),Object(d.jsx)(z.b,{path:ee,render:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(z.b,{path:te,render:function(){return Object(d.jsx)(Q,{})}}),Object(d.jsx)(z.b,{path:ae,render:function(){return Object(d.jsx)($,{})}}),"// add routes",Object(d.jsx)(z.b,{render:function(){return Object(d.jsx)(Z,{})}})]})})};var ce=function(){return Object(d.jsxs)("div",{className:V.a.container,children:[Object(d.jsx)(l.b,{to:ee,className:V.a.link,activeClassName:V.a.active,children:"pre-junior"}),Object(d.jsx)(l.b,{to:te,className:V.a.link,activeClassName:V.a.active,children:"junior"}),Object(d.jsx)(l.b,{to:ae,className:V.a.link,activeClassName:V.a.active,children:"junior+"}),Object(d.jsx)("div",{className:V.a.block})]})};var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ce,{}),Object(d.jsx)(ne,{})]})})};var se=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{className:o.a.title,children:"React Homeworks"}),Object(d.jsx)(re,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={container:"Header_container__376jJ",link:"Header_link__fbtyU",active:"Header_active__3u_aZ",block:"Header_block__28gJ6",errorPage:"Header_errorPage__2vglF"}},9:function(e,t,a){e.exports={background:"Message_background__22aWh",message:"Message_message__2qJPR",avatar:"Message_avatar__1PiQj",content:"Message_content__dMIDO",angle:"Message_angle__Gxpj6",text:"Message_text__3OOXK",name:"Message_name__29kdr",time:"Message_time__3YxHJ"}}},[[41,1,2]]]);
//# sourceMappingURL=main.17682a7d.chunk.js.map