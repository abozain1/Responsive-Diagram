(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{13:function(e,n,c){e.exports={backdrop:"Modal_backdrop__3Nkn3",modal:"Modal_modal__3xz8c","slide-down":"Modal_slide-down__3JyUX"}},22:function(e,n,c){},28:function(e,n,c){"use strict";c.r(n);var t=c(5),a=c.n(t),s=(c(22),c(6)),o=c(0),i=(c(23),c(14)),d=c(3),r=c.n(d),l=c(12),p=c(13),u=c.n(p),j=c(2),b=function(e){return Object(j.jsx)("div",{onClick:e.onclick,className:u.a.backdrop})},h=function(e){return Object(j.jsx)("div",{className:u.a.modal,children:Object(j.jsx)("div",{className:u.a.content,children:e.children})})},m=document.getElementById("modal"),O=function(e){return Object(j.jsxs)(o.Fragment,{children:[a.a.createPortal(Object(j.jsx)(b,{onclick:e.onclick}),m),a.a.createPortal(Object(j.jsx)(h,{children:e.children}),m)]})},_=function(e){var n=e.id,c=e.content,t=e.data;return Object(j.jsxs)("div",{className:r.a.compmain,children:[Object(j.jsxs)("div",{className:r.a.iconholder,children:[Object(j.jsx)(l.a,{onClick:function(){return t.remove(n)},className:r.a.cross}),Object(j.jsx)(l.b,{onClick:function(){return t.add(n)},className:r.a.plus})]}),Object(j.jsx)("p",{className:r.a.p,children:c})]})},k=Object(i.a)({nodes:[],links:[]});function f(){var e=Object(o.useState)(!1),n=Object(s.a)(e,2),c=n[0],t=n[1],a=Object(o.useState)(!1),d=Object(s.a)(a,2),l=d[0],p=d[1],u=Object(o.useState)(""),b=Object(s.a)(u,2),h=b[0],m=b[1],f=Object(i.c)(k),x=Object(s.a)(f,2),g=x[0],v=x[1],N=v.onChange,A=v.addNode,C=(v.removeNode,function(e){for(var n=[],c=0;c<g.nodes.length;c++){g.links[c]&&g.links[c].output===e&&(g.links.splice(c,1),n.push(e),c=-1),g.links[c]&&g.links[c].input===e&&(n.push(g.links[c].output),g.links.splice(c,1),c=-1);for(var a=0;a<g.nodes.length;a++)g.links[a]&&n[c]&&g.links[a].input===n[c]&&(n.push(g.links[a].output),g.links.splice(a,1),a=-1,c=-1)}for(var s=0;s<g.nodes.length;s++)for(var o=0;o<g.nodes.length;o++)g.nodes[o]&&n[s]&&g.nodes[o].id===n[s]&&(g.nodes.splice(o,1),n.splice(s,1),o=-1,s=-1);"node-1"===e&&(t(!1),g.nodes.splice(0,1))}),y=function(e,n){t(!0);var c={};c=g.nodes.length<1?{id:n,content:e,coordinates:[250,160],render:_,data:{remove:C,add:w}}:{id:"node-".concat(Math.random()),content:e,coordinates:[250,160],render:_,data:{remove:C,add:w}},g.nodes.length>0&&g.links.push({input:n,output:c.id,readonly:!0}),A(c)},w=function(e){p(!0),m(e)},M=function(e){p(!1),y(e,h)};return Object(j.jsxs)(o.Fragment,{children:[l&&Object(j.jsxs)(O,{children:[Object(j.jsx)("p",{className:r.a.category,onClick:function(){return M("Alpha")},children:"Alpha"}),Object(j.jsxs)("p",{className:r.a.category,onClick:function(){return M("Beta")},children:[" ","Beta"]}),Object(j.jsx)("p",{className:r.a.category,onClick:function(){return M("Sigma")},children:"Sigma"})]}),Object(j.jsxs)("div",{className:r.a.dia,children:[!c&&Object(j.jsx)("button",{onClick:function(){return y("Master","node-1")},children:"Add new node"}),c&&Object(j.jsx)(i.b,{schema:g,onChange:N})]})]})}a.a.render(Object(j.jsx)(f,{}),document.getElementById("diagram"))},3:function(e,n,c){e.exports={compmain:"App_compmain__33Rm7",iconholder:"App_iconholder__3N8Oc",p:"App_p__3paNp",plus:"App_plus__zCzrT",cross:"App_cross__2cGfv",dia:"App_dia__bIcWs",category:"App_category__2rPI7"}}},[[28,1,2]]]);
//# sourceMappingURL=main.73edfac3.chunk.js.map