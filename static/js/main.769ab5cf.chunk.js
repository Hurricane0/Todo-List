(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=(a(9),a(1)),s=o.a.createContext(),i={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},checkbox:{marginRight:"1rem"},delete:{borderRadius:"50%",background:"#ff5c5c",border:"none",color:"#fff",paddingBottom:"3px",cursor:"pointer",outline:"none",userSelect:"none"}},d=function(e){var t=e.todo,a=e.index,c=e.toggleCompleted,l=[],r=Object(n.useContext)(s).removeTodo;return t.completed&&l.push("done"),o.a.createElement("li",{style:i.li,className:"liDark"},o.a.createElement("span",{className:l.join(" ")},o.a.createElement("input",{checked:t.completed,style:i.checkbox,type:"checkbox",onChange:function(){return c(t.id)},className:"inputDark"}),o.a.createElement("strong",null,a+1),"\xa0",t.text),o.a.createElement("button",{onClick:function(){return r(t.id)},style:i.delete},"\u2717"))},m={ul:{listStyle:"none",margin:0,padding:0}},u=function(e){var t=e.todos,a=e.toggleCompleted;return o.a.createElement("ul",{style:m.ul},t.map((function(e,t){return o.a.createElement(d,{toggleCompleted:a,todo:e,index:t,key:e.id})})))},p=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(r.a)(a,2),l=c[0],s=c[1];return o.a.createElement("form",{className:"form",style:{marginBottom:"8px"},onSubmit:function(e){e.preventDefault(),l&&(t(l),s(""))}},o.a.createElement("button",{className:"addTodoButton",type:"submit"},"+"),o.a.createElement("input",{className:"addTodoInput",value:l,onChange:function(e){return s(e.target.value)},type:"text"}))},f=(a(10),function(e){var t=e.toggleMode,a=e.mode,n=e.modal;return o.a.createElement("div",{className:"switch_box box_3"},o.a.createElement("div",{className:"toggle_switch"},o.a.createElement("input",{type:"checkbox",className:"switch_3",onChange:t,checked:a,disabled:n}),o.a.createElement("svg",{className:"checkbox",xmlns:"http://www.w3.org/2000/svg",style:{isolation:"isolate"},viewBox:"0 0 168 80"},o.a.createElement("path",{className:"outer-ring",d:"M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z",fill:"none",stroke:"#233043","stroke-width":"3","stroke-linecap":"square","stroke-miterlimit":"3"}),o.a.createElement("path",{className:"is_checked",d:"M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"}),o.a.createElement("path",{className:"is_unchecked",d:"M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"}))))}),g=(a(11),function(e){var t=e.closeModal;return o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-body"},o.a.createElement("span",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("span",{onClick:t,className:"modalClose"},"\u2717"),o.a.createElement("h1",null,"Todo List")),o.a.createElement("p",null,"\xa9 Made by Nikita Dvortsov")))});var h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(r.a)(l,2),d=i[0],m=i[1],h=Object(n.useState)(!1),E=Object(r.a)(h,2),b=E[0],v=E[1];return o.a.createElement(s.Provider,{value:{removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))}}},o.a.createElement("div",{className:d?"light":"dark"},o.a.createElement("div",{className:"aboutAuthor"},o.a.createElement("span",{onClick:function(){v(!0)},className:"aboutAuthorButton"},"Project Card"),o.a.createElement(f,{toggleMode:function(){m(!d)},mode:d,modal:b})),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"Todo List"),b&&o.a.createElement(g,{closeModal:function(){v(!1)}}),o.a.createElement(p,{addTodo:function(e){c(a.concat([{id:Date.now(),completed:!1,text:e}]))}}),a.length?o.a.createElement(u,{toggleCompleted:function(e){c(a.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},todos:a}):o.a.createElement("p",{className:"addSomeTodosDark",style:{display:"flex",justifyContent:"center"}},"Add some todos..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.769ab5cf.chunk.js.map