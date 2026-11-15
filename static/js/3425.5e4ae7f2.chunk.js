"use strict";(globalThis.webpackChunkwebsite||=[]).push([[3425],{3623(e,t,r){r.d(t,{A:()=>h});var a=r(7804),s=r(5713),o=r(3235),l=r(9424);const i=o.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
`,n=o.Ay.a`
  position: absolute;
  right: 20px;
  padding: 3px 8px 4px 8px;
  background: #333333;
  border-radius: 0 0 6px 6px;
  text-decoration: initial;
  color: #fff;
  transition: all 0.3s;
  font-size: 14px;
  &:hover {
    background-color: #3f51b4;
  }
`,d=o.Ay.div`
  padding: 0 16px 80px;
`,p=o.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,c=o.Ay.div`
  border-bottom: 1px solid var(--line, var(--color-border-default));
  border-radius: 18px 18px 0 0;
  padding: 22px 22px 28px;
  > h3 {
    margin: 0;
    padding-bottom: 14px;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted, #6e655c);
  }
`;class h extends a.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,l.jsxs)(d,{className:"wmde-markdown-var",children:[(0,l.jsxs)(i,{children:[this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,l.jsxs)(c,{children:[(0,l.jsx)("h3",{children:"Example"}),this.example]}),(0,l.jsx)(s.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,l.jsxs)(p,{children:[(0,l.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,l.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,l.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,l.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},3425(e,t,r){r.r(t),r.d(t,{Component:()=>d});var a=r(7804),s=r(8088),o=r(3623),l=r(7980),i=r(9424);function n(){const{hsva:e,dispatch:t}=(0,a.useContext)(l.ob);return(0,i.jsx)("div",{style:{width:256},children:(0,i.jsx)(s.A,{hsva:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}})})}class d extends o.A{constructor(...e){super(...e),this.editorUrl="/packages/color-editable-input-hsla/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(5547)]).then(()=>r(5547)),this.example=(0,i.jsx)(n,{})}}},8088(e,t,r){var a=r(8102),s=r(9257),o=r(7804),l=r(6436),i=r(2945),n=r(9424),d=["prefixCls","hsva","hProps","sProps","lProps","aProps","className","onChange"],p=o.forwardRef((e,t)=>{var r=e.prefixCls,o=void 0===r?"w-color-editable-input-hsla":r,p=e.hsva,c=e.hProps,h=void 0===c?{}:c,u=e.sProps,g=void 0===u?{}:u,b=e.lProps,m=void 0===b?{}:b,x=e.aProps,v=void 0===x?{}:x,f=e.className,A=e.onChange,j=(0,s.A)(e,d),y=p?(0,i.E_)(p):{h:0,s:0,l:0,a:0},w=(e,t,r)=>{"number"===typeof e&&("h"===t&&(e<0&&(e=0),e>360&&(e=360),A&&A((0,i.yW)((0,i.YA)((0,a.A)({},y,{h:e}))))),"s"===t&&(e<0&&(e=0),e>100&&(e=100),A&&A((0,i.yW)((0,i.YA)((0,a.A)({},y,{s:e}))))),"l"===t&&(e<0&&(e=0),e>100&&(e=100),A&&A((0,i.yW)((0,i.YA)((0,a.A)({},y,{l:e}))))),"a"===t&&(e<0&&(e=0),e>1&&(e=1),A&&A((0,i.yW)((0,i.YA)((0,a.A)({},y,{a:e}))))))},C=0!=v&&(0,a.A)({label:"A",value:Math.round(100*y.a)/100},v,{onChange:(e,t)=>w(t,"a")});return(0,n.jsx)(l.A,(0,a.A)({ref:t,hsva:p,rProps:(0,a.A)({label:"H",value:Math.round(y.h)},h,{onChange:(e,t)=>w(t,"h")}),gProps:(0,a.A)({label:"S",value:Math.round(y.s)+"%"},g,{onChange:(e,t)=>w(t,"s")}),bProps:(0,a.A)({label:"L",value:Math.round(y.l)+"%"},m,{onChange:(e,t)=>w(t,"l")}),aProps:C,className:[o,f||""].filter(Boolean).join(" ")},j))});p.displayName="EditableInputHSLA";const c=p;r.d(t,["A",0,c])},6436(e,t,r){var a=r(8102),s=r(9257),o=r(7804),l=r(5991),i=r(2945),n=r(9424),d=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],p=o.forwardRef((e,t)=>{var r=e.prefixCls,o=void 0===r?"w-color-editable-input-rgba":r,p=e.hsva,c=e.placement,h=void 0===c?"bottom":c,u=e.rProps,g=void 0===u?{}:u,b=e.gProps,m=void 0===b?{}:b,x=e.bProps,v=void 0===x?{}:x,f=e.aProps,A=void 0===f?{}:f,j=e.className,y=e.style,w=e.onChange,C=(0,s.A)(e,d),S=p?(0,i.ss)(p):{};function k(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var P=(e,t,r)=>{"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,i.yW)((0,i.SX)((0,a.A)({},S,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w((0,i.yW)((0,i.SX)((0,a.A)({},S,{r:e})))),"g"===t&&w&&w((0,i.yW)((0,i.SX)((0,a.A)({},S,{g:e})))),"b"===t&&w&&w((0,i.yW)((0,i.SX)((0,a.A)({},S,{b:e})))))},N=S.a?Math.round(100*S.a)/100:0;return(0,n.jsxs)("div",(0,a.A)({ref:t,className:[o,j||""].filter(Boolean).join(" ")},C,{style:(0,a.A)({fontSize:11,display:"flex"},y),children:[(0,n.jsx)(l.A,(0,a.A)({label:"R",value:S.r||0,onBlur:k,placement:h,onChange:(e,t)=>P(t,"r",e)},g,{style:(0,a.A)({},g.style)})),(0,n.jsx)(l.A,(0,a.A)({label:"G",value:S.g||0,onBlur:k,placement:h,onChange:(e,t)=>P(t,"g",e)},m,{style:(0,a.A)({marginLeft:5},m.style)})),(0,n.jsx)(l.A,(0,a.A)({label:"B",value:S.b||0,onBlur:k,placement:h,onChange:(e,t)=>P(t,"b",e)},v,{style:(0,a.A)({marginLeft:5},v.style)})),A&&(0,n.jsx)(l.A,(0,a.A)({label:"A",value:parseInt(String(100*N),10),onBlur:e=>{var t=Number(e.target.value);t&&t>100&&(e.target.value="100"),t&&t<0&&(e.target.value="0")},placement:h,onChange:(e,t)=>P(t,"a",e)},A,{style:(0,a.A)({marginLeft:5},A.style)}))]}))});p.displayName="EditableInputRGBA";const c=p;r.d(t,["A",0,c])},5991(e,t,r){var a=r(8102),s=r(9257),o=r(7804),l=r(9424),i=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],n=o.forwardRef((e,t)=>{var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,d=e.placement,p=void 0===d?"bottom":d,c=e.label,h=e.value,u=e.className,g=e.style,b=e.labelStyle,m=e.inputStyle,x=e.onChange,v=e.onBlur,f=e.renderInput,A=(0,s.A)(e,i),j=(0,o.useState)(h),y=j[0],w=j[1],C=(0,o.useRef)(!1),S=(0,o.useRef)(A.id||n+"-"+Math.random().toString(36).slice(2,11)),k=A.id||S.current;(0,o.useEffect)(()=>{e.value!==y&&(C.current||w(e.value))},[e.value]);var P={};"bottom"===p&&(P.flexDirection="column"),"top"===p&&(P.flexDirection="column-reverse"),"left"===p&&(P.flexDirection="row-reverse");var N=(0,a.A)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},P,g),_=(0,a.A)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},m),M=(0,a.A)({value:y,onChange:function(e,t){var r=(t||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&x&&x(e,r);var a=(e=>Number(String(e).replace(/%/g,"")))(r);isNaN(a)||x&&x(e,a),w(r)},onBlur:function(t){C.current=!1,w(e.value),v&&v(t)},autoComplete:"off",onFocus:()=>C.current=!0},A,{id:k,style:_,onFocusCapture:e=>{var t=e.target;t.setSelectionRange(t.value.length,t.value.length)}});return(0,l.jsxs)("div",{className:[n,u||""].filter(Boolean).join(" "),style:N,children:[f?f(M,t):(0,l.jsx)("input",(0,a.A)({ref:t},M)),c&&(0,l.jsx)("label",{htmlFor:k,style:(0,a.A)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},b),children:c})]})});n.displayName="EditableInput";const d=n;r.d(t,["A",0,d])}}]);
//# sourceMappingURL=3425.5e4ae7f2.chunk.js.map