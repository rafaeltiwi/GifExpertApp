(this.webpackJsonpgif=this.webpackJsonpgif||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(9),s=n.n(i),u=(n(4),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))}),o=n(2),j=n(11),b=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],s=r[1],u=function(t){t.preventDefault(),e((function(t){return[i].concat(Object(j.a)(t))})),s("")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("form",{onSubmit:u,children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)},className:"form-input"})}),Object(c.jsx)("button",{className:"btn submit",onClick:u,children:"buscar"}),Object(c.jsx)("button",{className:"btn",onClick:function(){e([])},children:"vaciar"})]})},l=n(8),d=n(7),O=n.n(d),f=n(10),m=function(){var t=Object(f.a)(O.a.mark((function t(e){var n,c,a,r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/stickers/search?limit=10&q=".concat(encodeURI(e),"&api_key=W6SHZFqQrCDUWTOQYX8jGjBATonF1Ozn"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.title,n=(t.id,t.url);return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h4",{children:e})})]})},p=function(t){var e=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(o.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}),3500)}))}),[t]),c}(t.categories),n=e.data,r=e.loading;return Object(c.jsxs)(c.Fragment,{children:[r&&Object(c.jsxs)("div",{className:"spinner",children:[Object(c.jsx)("div",{className:"bounce1"}),Object(c.jsx)("div",{className:"bounce2"}),Object(c.jsx)("div",{className:"bounce3"})]}),n.map((function(t){return Object(a.createElement)(h,Object(l.a)(Object(l.a)({},t),{},{key:t.id}))}))]})},x=function(){var t=Object(a.useState)(["Fast"]),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"GifExpertApp"}),Object(c.jsx)(b,{setCategories:r,categories:n}),Object(c.jsx)("hr",{}),n.map((function(t){return Object(c.jsx)(p,{categories:t},t)}))]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),u()},4:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.4b24df77.chunk.js.map