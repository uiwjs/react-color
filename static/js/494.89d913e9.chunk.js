(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[494],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2007:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var o=r(2951),i=r(1976),s=r(7591),n=r(9616),a=r(8573),l={markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"},c=r(189),d=r(3782),h=r(9123),u=r(1128),p=r(204),g=r(8563),x=r(4760),f=["inline","node"],m=["data-meta"],b=u.ZP.Preview,v=u.ZP.Code,j=u.ZP.Toolbar;function w(e){return(0,x.jsx)(h.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,o=t.inline,i=t.node,s=(0,d.Z)(t,f),n=s,a=n["data-meta"],l=(0,d.Z)(n,m);if(o||!(0,g.pN)(a))return(0,x.jsx)("code",(0,c.Z)({},s));var h=null===(r=i.position)||void 0===r?void 0:r.start.line,w=(0,g.Mx)(a)||String(h),k=e.components["".concat(w)];if(w&&"function"===typeof k){var _=(0,p.U)(i.children),y=(0,g.aE)(a);return(0,x.jsxs)(u.ZP,{children:[(0,x.jsx)(b,{children:(0,x.jsx)(k,{})}),(0,x.jsx)(j,{text:_,children:y.title||"Example Display"}),(0,x.jsx)(v,{children:(0,x.jsx)("code",(0,c.Z)({},l))})]})}return(0,x.jsx)("code",(0,c.Z)({},l))}}})}var k=function(e){var t=e.editorUrl;return t?(0,x.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},_=function(e){(0,s.Z)(r,e);var t=(0,n.Z)(r);function r(e){var i;return(0,o.Z)(this,r),(i=t.call(this,e)).editorUrl=void 0,i.getMdStr=void 0,i.example=void 0,i.state={mdStr:""},i}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,o=e.data;return(0,x.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,x.jsxs)("div",{className:l.markdown,children:[(0,x.jsx)(k,{editorUrl:this.editorUrl}),this.example&&(0,x.jsxs)("div",{className:l.example,children:[(0,x.jsx)("h3",{children:"Example"}),this.example]}),(0,x.jsx)(w,{source:t||"",components:r||{},data:o||{}}),(0,x.jsx)(k,{editorUrl:this.editorUrl})]}),(0,x.jsxs)("div",{className:l.footer,children:[(0,x.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,x.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,x.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,x.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,x.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,x.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,x.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,x.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,x.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(a.Component)},5545:function(e,t,r){"use strict";r.r(t),r.d(t,{Component:function(){return g}});var o=r(1976),i=r(2951),s=r(7591),n=r(9616),a=r(189),l=r(8573),c=r(2867),d=r(2007),h=r(7905),u=r(4760);function p(){var e=(0,l.useContext)(h._y),t=e.hsva,r=e.dispatch;return(0,u.jsx)("div",{style:{width:300},children:(0,u.jsx)(c.default,{color:t,onChange:function(e){r({hsva:(0,a.Z)((0,a.Z)({},t),e.hsva)})}})})}var g=function(e){(0,s.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;(0,i.Z)(this,a);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).editorUrl="/packages/color-block/README.md",e.getMdStr=function(){return r.e(301).then(r.bind(r,301))},e.example=(0,u.jsx)(p,{}),e}return(0,o.Z)(a)}(d.Z)},2867:function(e,t,r){"use strict";r.r(t);var o=r(5773),i=r(808),s=r(8573),n=r(5301),a=r(6493),l=r(7961),c=r(8702),d=r(9887),h=r(4760),u=["prefixCls","className","style","color","colors","onChange"],p=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],g=s.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-block":r,g=e.className,x=e.style,f=e.color,m=e.colors,b=void 0===m?p:m,v=e.onChange,j=(0,i.Z)(e,u),w="string"===typeof f&&(0,n.Ff)(f)?(0,a.hexToHsva)(f):f,k=f?(0,a.hsvaToHex)(w):"",_=function(e,t){"string"===typeof e&&(0,n.Ff)(e)&&/(3|6)/.test(String(e.replace(/^#/,"").length))&&v&&v((0,a.color)((0,a.hexToHsva)(e)))},y=(0,o.Z)({"--block-background-color":"rgb(255, 255, 255)","--block-box-shadow":"rgb(0 0 0 / 10%) 0 1px",width:170,borderRadius:6,background:"var(--block-background-color)",boxShadow:"var(--block-box-shadow)",position:"relative"},x);return(0,h.jsxs)("div",(0,o.Z)({ref:t,className:[s,g].filter(Boolean).join(" "),style:y},j,{children:[(0,h.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+k,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),(0,h.jsx)("div",{title:k,style:{backgroundColor:""+k,color:(0,l.Q)(k),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:k.toLocaleUpperCase()}),(0,h.jsx)(d.Z,{colors:b,color:k,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:function(e){v&&v((0,a.color)(e))}}),(0,h.jsx)(c.Z,{value:k.toLocaleUpperCase(),onChange:function(e,t){return _(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),_(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));g.displayName="Block",t.default=g}}]);
//# sourceMappingURL=494.89d913e9.chunk.js.map