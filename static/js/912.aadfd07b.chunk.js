(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[912],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2664:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var i=r(2951),s=r(1976),o=r(7591),n=r(3415),a=r(1473),l=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=r(189),d=r(3782),u=r(4004),h=r(7963),p=r(2094),x=r(5142),g=r(9286),f=["inline","node"],m=["data-meta"];function v(e){return(0,g.jsx)(u.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,i=t.inline,s=t.node,o=(0,d.Z)(t,f),n=o,a=n["data-meta"],l=(0,d.Z)(n,m);if(i||!(0,x.pN)(a))return(0,g.jsx)("code",(0,c.Z)({},o));var u=null===(r=s.position)||void 0===r?void 0:r.start.line,v=(0,x.Mx)(a)||String(u),w=e.components["".concat(v)];if(v&&"function"===typeof w){var b=(0,p.U)(s.children),j=(0,x.aE)(a);return(0,g.jsx)(h.Z,{toolbar:j.title||"Example Display",code:(0,g.jsx)("code",(0,c.Z)({},l)),text:b,children:(0,g.jsx)(w,{})})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var w=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},b=function(e){(0,o.Z)(r,e);var t=(0,n.Z)(r);function r(e){var s;return(0,i.Z)(this,r),(s=t.call(this,e)).editorUrl=void 0,s.getMdStr=void 0,s.example=void 0,s.state={mdStr:""},s}return(0,s.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,i=e.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(w,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(v,{source:t||"",components:r||{},data:i||{}}),(0,g.jsx)(w,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(a.Component)},5059:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var i=r(1976),s=r(2951),o=r(7591),n=r(3415),a=r(189),l=r(1473),c=r(4511),d=r(2664),u=r(7664),h=r(9286);function p(){var e=(0,l.useContext)(u._y),t=e.hsva,r=e.dispatch;return(0,h.jsx)("div",{style:{width:256},children:(0,h.jsx)(c.Z,{color:t,onChange:function(e){r({hsva:(0,a.Z)((0,a.Z)({},t),e.hsva)})}})})}var x=function(e){(0,o.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).editorUrl="/packages/color-wheel/README.md",e.getMdStr=function(){return r.e(42).then(r.bind(r,1042))},e.example=(0,h.jsx)(p,{}),e}return(0,i.Z)(a)}(d.Z)},4511:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var i=r(5773),s=r(808),o=r(1473),n=r(6433),a=r(6651),l=r(1269),c=r(9286),d=function(e){var t=e.className,r=e.color,s=e.left,n=e.top,a=e.style,l=e.prefixCls,d=(0,i.Z)({},a,{position:"absolute",top:n,left:s});return(0,o.useMemo)((function(){return(0,c.jsx)("div",{className:l+"-pointer "+(t||""),style:d,children:(0,c.jsx)("div",{className:l+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,c.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})}),[n,s,r,t,l])},u=2*Math.PI,h=function(e,t){return Math.sqrt(e*e+t*t)};function p(e){var t=e.width,r=void 0===t?0:t,i=r/2;return{width:r,radius:i,cx:i,cy:i}}function x(e){var t=e.width;return(void 0===t?0:t)/2}function g(e,t,r){var i,s=e.angle||0,o=e.direction;return r&&"clockwise"===o?t=s+t:"clockwise"===o?t=360-s+t:r&&"anticlockwise"===o?t=s+180-t:"anticlockwise"===o&&(t=s-t),(t%(i=360)+i)%i}var f=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"],m=o.forwardRef((function(e,t){var r=e.prefixCls,m=void 0===r?"w-color-wheel":r,v=(e.radius,e.pointer),w=e.className,b=e.style,j=e.width,k=void 0===j?200:j,y=e.height,_=void 0===y?200:y,Z=e.direction,M=void 0===Z?"anticlockwise":Z,C=e.angle,N=void 0===C?180:C,S=e.color,E=e.onChange,U=(0,s.Z)(e,f),R="string"===typeof S&&(0,a.Ff)(S)?(0,n.hexToHsva)(S):S||{},D=S?(0,n.hsvaToHex)(R):"",O=function(e,t){var r=p(e),i=r.cx,s=r.cy,o=x(e),n=(180+g(e,t.h,!0))*(u/360),a=t.s/100*o,l="clockwise"===e.direction?-1:1;return{x:i+a*Math.cos(n)*l,y:s+a*Math.sin(n)*l}}({width:k},R),q={top:"0",left:"0",color:D},A=function(e,t){var r=function(e,t,r){var i=p(e),s=i.cx,o=i.cy,n=x(e);t=s-t,r=o-r;var a=g(e,Math.atan2(-r,-t)*(360/u)),l=Math.min(h(t,r),n);return{h:Math.round(a),s:Math.round(100/n*l)}}({width:k},k-e.x,_-e.y),i={h:r.h,s:r.s,v:R.v,a:R.a};E&&E((0,n.color)(i))};return(0,c.jsxs)(l.ZP,(0,i.Z)({className:[m,w||""].filter(Boolean).join(" ")},U,{style:(0,i.Z)({},b,{position:"relative",width:k,height:_}),ref:t,onMove:A,onDown:A,children:[o.createElement(v||d,(0,i.Z)({prefixCls:m,style:{zIndex:1,transform:"translate("+O.x+"px, "+O.y+"px)"}},q)),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===M?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(N+90)+"deg)",inset:0}}),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,c.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof R.v?1-R.v/100:0}})]}))}));m.displayName="Wheel";var v=m}}]);
//# sourceMappingURL=912.aadfd07b.chunk.js.map