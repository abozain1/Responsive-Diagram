(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{12:function(e,n,t){e.exports={backdrop:"Modal_backdrop__1utJ9",modal:"Modal_modal__4KWQD","slide-down":"Modal_slide-down__6KPja"}},21:function(e,n,t){},26:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var c=t(4),s=t.n(c),o=(t(21),t(5)),a=t(0),d=(t(22),t(13)),i=(t(26),t(11)),r=t(12),l=t.n(r),u=t(2),j=function(e){return Object(u.jsx)("div",{onClick:e.onclick,className:l.a.backdrop})},m=function(e){return Object(u.jsx)("div",{className:l.a.modal,children:Object(u.jsx)("div",{className:l.a.content,children:e.children})})},b=document.getElementById("modal"),h=function(e){return Object(u.jsxs)(a.Fragment,{children:[s.a.createPortal(Object(u.jsx)(j,{onclick:e.onclick}),b),s.a.createPortal(Object(u.jsx)(m,{children:e.children}),b)]})},p=function(e){var n=e.id,t=e.content,c=e.data;return Object(u.jsxs)("div",{className:"compmain",children:[Object(u.jsxs)("div",{className:"iconholder",children:[Object(u.jsx)(i.a,{onClick:function(){return c.remove(n)},className:"cross"}),Object(u.jsx)(i.b,{onClick:function(){return c.add(n)},className:"plus"})]}),Object(u.jsx)("p",{className:"p",children:t})]})},O=Object(d.a)({nodes:[],links:[]});function k(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(a.useState)(""),m=Object(o.a)(j,2),b=m[0],k=m[1],f=Object(d.c)(O),x=Object(o.a)(f,2),g=x[0],v=x[1],N=v.onChange,C=v.addNode;v.removeNode;function _(e){for(var n=[],t=0;t<g.nodes.length;t++){g.links[t]&&g.links[t].output===e&&(g.links.splice(t,1),n.push(e),t=-1),g.links[t]&&g.links[t].input===e&&(n.push(g.links[t].output),g.links.splice(t,1),t=-1);for(var s=0;s<g.nodes.length;s++)g.links[s]&&n[t]&&g.links[s].input===n[t]&&(n.push(g.links[s].output),g.links.splice(s,1),s=-1,t=-1)}for(var o=0;o<g.nodes.length;o++)for(var a=0;a<g.nodes.length;a++)g.nodes[a]&&n[o]&&g.nodes[a].id===n[o]&&(g.nodes.splice(a,1),n.splice(o,1),a=-1,o=-1);C({id:"demo",content:"demo",coordinates:[10,10],render:p}),"master-1"===e&&(c(!1),g.nodes.splice(0))}for(var y=function(e,n){c(!0);var t={};t=g.nodes.length<1?{id:n,content:e,coordinates:[250,160],render:p,data:{remove:_,add:M}}:{id:"node-".concat(Math.random()),content:e,coordinates:[250,160],render:p,data:{remove:_,add:M}},g.nodes.length>0&&g.links.push({input:n,output:t.id,readonly:!0}),C(t)},M=function(e){l(!0),k(e)},S=function(e){l(!1),y(e,b)},w=0;w<g.nodes.length;w++)g.nodes[w]&&"demo"===g.nodes[w].id&&(g.nodes.splice(w,1),w=-1);return Object(u.jsxs)(a.Fragment,{children:[r&&Object(u.jsxs)(h,{children:[Object(u.jsx)("p",{className:"category",onClick:function(){return S("Alpha")},children:"Alpha"}),Object(u.jsxs)("p",{className:"category",onClick:function(){return S("Beta")},children:[" ","Beta"]}),Object(u.jsx)("p",{className:"category",onClick:function(){return S("Sigma")},children:"Sigma"})]}),Object(u.jsxs)("div",{className:"dia",children:[!t&&Object(u.jsx)("button",{className:"btn",onClick:function(){return y("Master","master-1")},children:"Add node"}),t&&Object(u.jsx)(d.b,{className:"digo",schema:g,onChange:N})]})]})}s.a.render(Object(u.jsx)(k,{}),document.getElementById("diagram"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6e0aeb64.chunk.js.map