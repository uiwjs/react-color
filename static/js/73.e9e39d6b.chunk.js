(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73],{363:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=363,t.exports=e},2664:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var i=r(2951),s=r(1976),a=r(7591),n=r(3415),o=r(1473),c=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),l=r(189),d=r(3782),h=r(4004),u=r(7963),p=r(2094),g=r(5142),m=r(9286),v=["inline","node"],f=["data-meta"];function j(t){return(0,m.jsx)(h.Z,{disableCopy:!0,source:t.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(e){var r,i=e.inline,s=e.node,a=(0,d.Z)(e,v),n=a,o=n["data-meta"],c=(0,d.Z)(n,f);if(i||!(0,g.pN)(o))return(0,m.jsx)("code",(0,l.Z)({},a));var h=null===(r=s.position)||void 0===r?void 0:r.start.line,j=(0,g.Mx)(o)||String(h),x=t.components["".concat(j)];if(j&&"function"===typeof x){var w=(0,p.U)(s.children),b=(0,g.aE)(o);return(0,m.jsx)(u.Z,{toolbar:b.title||"Example Display",code:(0,m.jsx)("code",(0,l.Z)({},c)),text:w,children:(0,m.jsx)(x,{})})}return(0,m.jsx)("code",(0,l.Z)({},c))}}})}var x=function(t){var e=t.editorUrl;return e?(0,m.jsx)("a",{className:c.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(e),children:"Edit this page"}):null},w=function(t){(0,a.Z)(r,t);var e=(0,n.Z)(r);function r(t){var s;return(0,i.Z)(this,r),(s=e.call(this,t)).editorUrl=void 0,s.getMdStr=void 0,s.example=void 0,s.state={mdStr:""},s}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default.source,mdObj:e.default})}))}},{key:"render",value:function(){var t=this.state.mdObj||{},e=t.source,r=t.components,i=t.data;return(0,m.jsxs)("div",{className:[c.warpper,"wmde-markdown-var"].join(" "),children:[(0,m.jsx)("dark-mode",{light:"Dark",dark:"Light"}),(0,m.jsxs)("div",{className:c.markdown,children:[(0,m.jsx)(x,{editorUrl:this.editorUrl}),this.example&&(0,m.jsx)("div",{className:c.example,children:this.example}),(0,m.jsx)(j,{source:e||"",components:r||{},data:i||{}}),(0,m.jsx)(x,{editorUrl:this.editorUrl})]}),(0,m.jsxs)("div",{className:c.footer,children:[(0,m.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,m.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,m.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,m.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(o.Component)},4411:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return w}});var i=r(1976),s=r(2951),a=r(7591),n=r(3415),o=r(189),c=r(1473),l=r(5773),d=r(808),h=r(6433),u=r(2077),p=r(9286),g=["prefixCls","className","onChange","direction","hsva"],m=c.forwardRef((function(t,e){var r=t.prefixCls,i=void 0===r?"w-color-saturation":r,s=t.className,a=t.onChange,n=t.direction,o=void 0===n?"horizontal":n,c=t.hsva,m=(0,d.Z)(t,g),v=(0,h.hsvaToHslaString)(Object.assign({},c,{a:1,s:100,v:100}));return(0,p.jsx)(u.default,(0,l.Z)({ref:e},m,{className:i+" "+(s||""),hsva:{h:c.h,s:100,v:c.v,a:1-c.v/100},direction:o,background:"linear-gradient(to "+("horizontal"===o?"right":"bottom")+", "+v+", rgb(0, 0, 0))",onChange:function(t,e){a&&a({v:"horizontal"===o?100-100*e.left:100-100*e.top,s:100})}}))}));m.displayName="ShadeSlider";var v=m,f=r(2664),j=r(7664);function x(){var t=(0,c.useContext)(j._y),e=t.hsva,r=t.dispatch;return(0,p.jsx)("div",{style:{width:256},children:(0,p.jsx)(v,{hsva:e,onChange:function(t){r({hsva:(0,o.Z)((0,o.Z)({},e),t)})}})})}var w=function(t){(0,a.Z)(o,t);var e=(0,n.Z)(o);function o(){var t;(0,s.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).editorUrl="/packages/color-shade-slider/README.md",t.getMdStr=function(){return r.e(515).then(r.bind(r,1515))},t.example=(0,p.jsx)(x,{}),t}return(0,i.Z)(o)}(f.Z)}}]);
//# sourceMappingURL=73.e9e39d6b.chunk.js.map