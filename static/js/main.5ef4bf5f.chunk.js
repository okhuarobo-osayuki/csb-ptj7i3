(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(5),a=(c(4),c(2)),s=c(0);var i=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),l=Object(a.a)(i,2),o=l[0],j=l[1],b=Object(n.useState)(""),u=Object(a.a)(b,2),d=u[0],O=u[1],x=Object(n.useState)(null),h=Object(a.a)(x,2),k=h[0],m=h[1],f=Object(n.useState)(!1),p=Object(a.a)(f,2),C=p[0],N=p[1],g=function(e){if(!o.includes(".")||"."!==e.target.innerText){if("0"===o&&"0"===e.target.innerText)return o;if(""===o&&"."===e.target.innerText)return o;C&&r(""),j(o?function(t){return t+e.target.innerText}:e.target.innerText),N(!1)}};Object(n.useEffect)((function(){O(o)}),[o]),Object(n.useEffect)((function(){O("")}),[]);var v=function(e){N(!1),m(e.target.innerText),""!==o&&(""!==c?F():(r(o),j("")))},F=function(e){var t;switch("="===(null===e||void 0===e?void 0:e.target.innerText)&&N(!0),k){case"\xf7":t=String(parseFloat(c)/parseFloat(o));break;case"+":t=String(parseFloat(c)+parseFloat(o));break;case"x":t=String(parseFloat(c)*parseFloat(o));break;case"-":t=String(parseFloat(c)-parseFloat(o));break;default:return}O(""),r(t),j("")};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("main",{className:"calculator-container",children:[Object(s.jsx)("h1",{children:"Calculator"}),Object(s.jsx)("div",{className:"output",children:""!==d||"0"===d?d:c}),Object(s.jsxs)("div",{className:"row-1",children:[Object(s.jsx)("button",{onClick:g,children:"7"}),Object(s.jsx)("button",{onClick:g,children:"8"}),Object(s.jsx)("button",{onClick:g,children:"9"}),Object(s.jsx)("button",{onClick:v,className:"operator",children:"\xf7"})]}),Object(s.jsxs)("div",{className:"row-2",children:[Object(s.jsx)("button",{onClick:g,children:"4"}),Object(s.jsx)("button",{onClick:g,children:"5"}),Object(s.jsx)("button",{onClick:g,children:"6"}),Object(s.jsx)("button",{onClick:v,className:"operator",children:"x"})]}),Object(s.jsxs)("div",{className:"row-3",children:[Object(s.jsx)("button",{onClick:g,children:"1"}),Object(s.jsx)("button",{onClick:g,children:"2"}),Object(s.jsx)("button",{onClick:g,children:"3"}),Object(s.jsx)("button",{onClick:v,className:"operator",children:"-"})]}),Object(s.jsxs)("div",{className:"row-4",children:[Object(s.jsx)("button",{onClick:g,className:"zero",children:"0"}),Object(s.jsx)("button",{onClick:g,className:"decimal",children:"."})]}),Object(s.jsxs)("div",{className:"row-5",children:[Object(s.jsx)("button",{onClick:function(){r(""),j(""),O("")},className:"clear",children:"C"}),Object(s.jsx)("button",{onClick:F,className:"equal",children:"="}),Object(s.jsx)("button",{onClick:v,className:"plus operator",children:"+"})]})]})})};function l(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i,{})})}var o=document.getElementById("root");Object(r.createRoot)(o).render(Object(s.jsx)(n.StrictMode,{children:Object(s.jsx)(l,{})}))},4:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.5ef4bf5f.chunk.js.map