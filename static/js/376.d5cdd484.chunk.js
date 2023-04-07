"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[376],{1376:function(n,e,r){r.r(e),r.d(e,{default:function(){return tn}});var t,o,i,a,c,u=r(9434),l=r(6210),s=r(9439),f=r(2791),d=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},p=r(8893),x=function(n){return n.contacts},b=r(168),m=r(6444),g=m.ZP.form(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  border: 3px solid #0058b8;\n  border-radius: 5px;\n  max-width: 700px;\n  padding: 50px 20px;\n  margin: 0 auto;\n"]))),h=m.ZP.button(o||(o=(0,b.Z)(["\n  padding: 10px 30px;\n  display: block;\n  font-family: inherit;\n  font-size: 20px;\n  color: #ffd600;\n  background-color: #0058b8;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 350ms ease, color 350ms ease;\n\n  &:hover,\n  &:focus {\n    color: #0058b8;\n    background-color: #ffd600;\n  }\n"]))),v=m.ZP.input(i||(i=(0,b.Z)(["\n  display: block;\n  width: 300px;\n  padding: 10px 15px;\n  font-family: inherit;\n  font-size: 25px;\n  color: #3c2a21;\n  background-color: #fff;\n  border: 3px solid #0058b8;\n  outline: none;\n  border-radius: 5px;\n"]))),y=m.ZP.label(a||(a=(0,b.Z)(["\n  display: block;\n  text-align: center;\n"]))),k=m.ZP.span(c||(c=(0,b.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 35px;\n  color: #1a120b;\n"]))),Z=r(3329),j=function(){var n=(0,f.useState)(""),e=(0,s.Z)(n,2),r=e[0],t=e[1],o=(0,f.useState)(""),i=(0,s.Z)(o,2),a=i[0],c=i[1],l=(0,u.v9)(x).items,b=(0,u.I0)();(0,f.useEffect)((function(){0===l.length&&b((0,p.yF)())}),[b,l.length]);var m=function(){t(""),c("")},j=function(n){var e=n.target,r=e.value;"name"!==e.name?c(r):t(r)};return(0,Z.jsxs)(g,{onSubmit:function(n){var e;if(n.preventDefault(),e=r,l.find((function(n){return n.name===e})))return alert("".concat(r," is already in contacts.")),void m();b((0,p.uK)({name:r,number:a,id:d(5)})),m()},children:[(0,Z.jsxs)(y,{children:[(0,Z.jsx)(k,{children:"Name"}),(0,Z.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:j})]}),(0,Z.jsxs)(y,{children:[(0,Z.jsx)(k,{children:"Number"}),(0,Z.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:j})]}),(0,Z.jsx)(h,{type:"submit",children:"Add a new friend \ud83c\udf89"})]})},w=r(7398),z=r(425),P="NOT_FOUND";var C=function(n,e){return n===e};function A(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?C:t,i=r.maxSize,a=void 0===i?1:i,c=r.resultEqualityCheck,u=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:P},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return P}return{get:t,put:function(e,o){t(e)===P&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,u);function s(){var e=l.get(arguments);if(e===P){if(e=n.apply(null,arguments),c){var r=l.getEntries(),t=r.find((function(n){return c(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function F(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function S(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(c=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,f=void 0===s?r:s,d=Array.isArray(f)?f:[f],p=F(t),x=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),b=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(b,{resultFunc:u,memoizedResultFunc:x,dependencies:p,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),b};return o}var E,L,O,_,q,I,N,D,R,U=S(A),X=function(n){return n.filter},G=U([X],(function(n){return n.toLowerCase()})),K=U([x,G],(function(n,e){return n.items.filter((function(n){return n.name.toLowerCase().includes(e)}))})),T=m.ZP.div(E||(E=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 30px;\n"]))),B=m.ZP.h3(L||(L=(0,b.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 25px;\n  color: #000;\n"]))),J=m.ZP.input(O||(O=(0,b.Z)(["\n  display: block;\n  max-width: 250px;\n  padding: 10px 15px;\n  font-family: inherit;\n  font-size: 25px;\n  color: #000;\n  background-color: #ffffff;\n  border: 3px solid #0058b8;\n  outline: none;\n  border-radius: 5px;\n"]))),M=function(){var n=(0,u.I0)(),e=(0,u.v9)(X);return(0,Z.jsxs)(T,{children:[(0,Z.jsx)(B,{children:"Find a contact \ud83d\udd0e"}),(0,Z.jsx)(J,{type:"text",name:"filter",value:e,onChange:function(e){return n((0,z.T)(e.target.value))}})]})},Q=m.ZP.li(_||(_=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  justify-content: center;\n  gap: 30px;\n  font-size: 30px;\n  color: #000;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),V=m.ZP.span(q||(q=(0,b.Z)(["\n  font-size: 30px;\n"]))),$=m.ZP.button(I||(I=(0,b.Z)(["\n  padding: 10px;\n  display: block;\n  font-family: inherit;\n  font-size: 15px;\n  color: #ffd600;\n  background-color: #0058b8;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 350ms ease, color 350ms ease;\n  &:hover,\n  &:focus {\n    color: #b7012a;\n    background-color: #ffffff;\n    border: 3px solid #b7012a;\n  }\n"]))),H=function(){var n=(0,u.v9)(x),e=n.isLoading,r=n.error,t=(0,u.v9)(K),o=(0,u.I0)();return(0,Z.jsxs)(Z.Fragment,{children:[e&&!r&&(0,Z.jsx)(Q,{children:"Loading..."}),(0,Z.jsx)("ul",{children:t.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,Z.jsxs)(Q,{children:[r,": ",(0,Z.jsx)(V,{children:t}),(0,Z.jsx)($,{type:"button",onClick:function(){return function(n){return o((0,p.GK)(n))}(e)},children:"Delete"})]},e)}))}),r&&!e&&(0,Z.jsx)(Q,{children:"Oops, something went wrong :("})]})},W=r(8830),Y=m.ZP.div(N||(N=(0,b.Z)(["\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  min-width: 150px;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  padding: 10px;\n"]))),nn=m.ZP.p(D||(D=(0,b.Z)(["\n  font-size: 30px;\n  margin: 0 0 0 0;\n"]))),en=m.ZP.button(R||(R=(0,b.Z)(["\n  padding: 5px 15px;\n  display: block;\n  font-family: inherit;\n  font-size: 15px;\n  color: #0058b8;\n  background-color: #fff;\n  border: 3px solid #0058b8;\n  border-radius: 5px;\n\n  cursor: pointer;\n  transition: background-color 350ms ease, color 350ms ease;\n\n  &:hover,\n  &:focus {\n    color: #b7012a;\n    background-color: none;\n    border: 3px solid #b7012a;\n  }\n"]))),rn=function(n){var e=n.user,r=(0,u.I0)();return(0,Z.jsxs)(Y,{children:[(0,Z.jsx)(nn,{children:e.name}),(0,Z.jsx)(en,{onClick:function(){return r((0,W.ni)())},children:"Log-out"})]})},tn=function(){var n=(0,u.v9)(l.Qb),e=(0,u.v9)(l.dy);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w.X6,{children:"Phonebook \ud83d\udcd6"}),(0,Z.jsx)(j,{}),(0,Z.jsx)(w.X6,{children:"Contacts"}),(0,Z.jsx)(M,{}),(0,Z.jsx)(H,{}),n&&(0,Z.jsx)(rn,{user:e})]})}},7398:function(n,e,r){r.d(e,{DL:function(){return d},Gt:function(){return p},X6:function(){return s},xv:function(){return f}});var t,o,i,a,c=r(168),u=r(6444),l=r(1087),s=u.ZP.h2(t||(t=(0,c.Z)(["\n  display: block;\n  margin-top: 150px;\n  font-size: 50px;\n  text-align: center;\n  color: #000;\n"]))),f=u.ZP.p(o||(o=(0,c.Z)(["\n  display: block;\n  font-size: 30px;\n  text-align: center;\n  color: #000;\n"]))),d=(0,u.ZP)(l.rU)(i||(i=(0,c.Z)(["\n  padding: 15px;\n  display: block;\n  max-width: 200px;\n  margin: 0 auto;\n  text-align: center;\n  text-decoration: none;\n  font-size: 30px;\n  color: #0058b8;\n  background-color: none;\n  border: 3px solid #ffd600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 250ms ease, color 250ms ease;\n\n  &:hover,\n  &:focus {\n    color: #0058b8;\n    background-color: #ffd600;\n  }\n"]))),p=u.ZP.button(a||(a=(0,c.Z)(["\n  padding: 15px;\n  display: block;\n  min-width: 230px;\n  margin: 0 auto;\n  text-align: center;\n  text-decoration: none;\n  font-size: 30px;\n  color: #b7012a;\n  background-color: #ffffff;\n  border: 3px solid #b7012a;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 250ms ease, color 250ms ease;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: #b7012a;\n  }\n"])))}}]);
//# sourceMappingURL=376.d5cdd484.chunk.js.map