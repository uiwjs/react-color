(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[17],{477:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var s=r(48),a=r(49),i=r(50),c=r(5),n=r(0),o=r(62),l=r(51),h=r(6),u=r(1);function b(){var t=Object(n.useContext)(h.a),e=t.hsva,r=t.dispatch;return Object(u.jsx)("div",{style:{width:256},children:Object(u.jsx)(o.a,{hue:e.h,onChange:function(t){r({hsva:Object(c.a)(Object(c.a)({},e),t)})}})})}var d=function(t){Object(a.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(s.a)(this,c);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).editorUrl="/packages/color-hue/README.md",t.getMdStr=function(){return r.e(39).then(r.bind(null,446))},t.example=Object(u.jsx)(b,{}),t}return c}(l.a)},51:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var s=r(48),a=r(54),i=r(49),c=r(50),n=r(0),o=r(55),l=r(52),h=r.n(l),u=r(1),b=function(t){Object(i.a)(r,t);var e=Object(c.a)(r);function r(t){var a;return Object(s.a)(this,r),(a=e.call(this,t)).editorUrl=void 0,a.getMdStr=void 0,a.example=void 0,a.state={mdStr:""},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default||e})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:h.a.warpper,children:[Object(u.jsxs)("div",{className:h.a.markdown,children:[this.example&&Object(u.jsx)("div",{className:h.a.example,children:this.example}),Object(u.jsx)(o.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(u.jsxs)("div",{className:h.a.footer,children:[Object(u.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(u.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(u.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(n.Component)},52:function(t,e,r){t.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},62:function(t,e,r){"use strict";var s=r(2),a=r(4),i=r(0),c=r.n(i),n=r(47),o=r(1),l=["prefixCls","className","hue","onChange","direction"],h=c.a.forwardRef((function(t,e){var r=t.prefixCls,i=void 0===r?"w-color-hue":r,c=t.className,h=t.hue,u=void 0===h?0:h,b=t.onChange,d=t.direction,j=void 0===d?"horizontal":d,g=Object(a.a)(t,l);return Object(o.jsx)(n.b,Object(s.a)({ref:e,className:i+" "+(c||"")},g,{direction:j,background:"linear-gradient(to "+("horizontal"===j?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:u,s:100,v:100,a:u/360},onChange:function(t,e){b&&b({h:"horizontal"===j?360*e.left:360*e.top})}}))}));h.displayName="Hue",e.a=h}}]);
//# sourceMappingURL=17.89b75ab6.chunk.js.map