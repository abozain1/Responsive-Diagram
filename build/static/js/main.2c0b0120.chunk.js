(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{13:function(e,n,c){e.exports={backdrop:"Modal_backdrop__3Nkn3",modal:"Modal_modal__3xz8c","slide-down":"Modal_slide-down__3JyUX"}},22:function(e,n,c){},28:function(e,n,c){"use strict";c.r(n);var t=c(5),s=c.n(t),o=(c(22),c(6)),a=c(0),i=(c(23),c(14)),d=c(3),r=c.n(d),l=c(12),p=c(13),u=c.n(p),j=c(2),m=function(e){return Object(j.jsx)("div",{onClick:e.onclick,className:u.a.backdrop})},h=function(e){return Object(j.jsx)("div",{className:u.a.modal,children:Object(j.jsx)("div",{className:u.a.content,children:e.children})})},b=document.getElementById("modal"),O=function(e){return Object(j.jsxs)(a.Fragment,{children:[s.a.createPortal(Object(j.jsx)(m,{onclick:e.onclick}),b),s.a.createPortal(Object(j.jsx)(h,{children:e.children}),b)]})},_=function(e){var n=e.id,c=e.content,t=e.data;return Object(j.jsxs)("div",{className:r.a.compmain,children:[Object(j.jsxs)("div",{className:r.a.iconholder,children:[Object(j.jsx)(l.a,{onClick:function(){return t.remove(n)},className:r.a.cross}),Object(j.jsx)(l.b,{onClick:function(){return t.add(n)},className:r.a.plus})]}),Object(j.jsx)("p",{className:r.a.p,children:c})]})},k=Object(i.a)({nodes:[],links:[]});function f(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),c=n[0],t=n[1],s=Object(a.useState)(!1),d=Object(o.a)(s,2),l=d[0],p=d[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),h=m[0],b=m[1],f=Object(i.c)(k),x=Object(o.a)(f,2),g=x[0],v=x[1],N=v.onChange,A=v.addNode,C=(v.removeNode,[]);function y(e){for(var n=0;n<g.nodes.length;n++){g.links[n]&&g.links[n].output===e&&(g.links.splice(n,1),C.push(e),n=-1),g.links[n]&&g.links[n].input===e&&(C.push(g.links[n].output),g.links.splice(n,1),n=-1);for(var c=0;c<g.nodes.length;c++)g.links[c]&&C[n]&&g.links[c].input===C[n]&&(C.push(g.links[c].output),g.links.splice(c,1),c=-1,n=-1)}for(var s=0;s<g.nodes.length;s++)for(var o=0;o<g.nodes.length;o++)g.nodes[o]&&C[s]&&g.nodes[o].id===C[s]&&(g.nodes.splice(o,1),C.splice(s,1),o=-1,s=-1);A({id:"demo",content:"demo",coordinates:[10,10],render:_}),"master-1"===e&&(t(!1),g.nodes.splice(0))}for(var w=function(e,n){t(!0);var c={};c=g.nodes.length<1?{id:n,content:e,coordinates:[250,160],render:_,data:{remove:y,add:M}}:{id:"node-".concat(Math.random()),content:e,coordinates:[250,160],render:_,data:{remove:y,add:M}},g.nodes.length>0&&g.links.push({input:n,output:c.id,readonly:!0}),A(c)},M=function(e){p(!0),b(e)},S=function(e){p(!1),w(e,h)},B=0;B<g.nodes.length;B++)g.nodes[B]&&"demo"===g.nodes[B].id&&(console.log(B),g.nodes.splice(B,1),B=-1);return Object(j.jsxs)(a.Fragment,{children:[l&&Object(j.jsxs)(O,{children:[Object(j.jsx)("p",{className:r.a.category,onClick:function(){return S("Alpha")},children:"Alpha"}),Object(j.jsxs)("p",{className:r.a.category,onClick:function(){return S("Beta")},children:[" ","Beta"]}),Object(j.jsx)("p",{className:r.a.category,onClick:function(){return S("Sigma")},children:"Sigma"})]}),Object(j.jsxs)("div",{className:r.a.dia,children:[!c&&Object(j.jsx)("button",{onClick:function(){return w("Master","master-1")},children:"Add new node"}),c&&Object(j.jsx)(i.b,{schema:g,onChange:N})]})]})}s.a.render(Object(j.jsx)(f,{}),document.getElementById("diagram"))},3:function(e,n,c){e.exports={compmain:"App_compmain__33Rm7",iconholder:"App_iconholder__3N8Oc",p:"App_p__3paNp",plus:"App_plus__zCzrT",cross:"App_cross__2cGfv",dia:"App_dia__bIcWs",category:"App_category__2rPI7"}}},[[28,1,2]]]);
//# sourceMappingURL=main.2c0b0120.chunk.js.map