"use strict";(globalThis.webpackChunkwebsite||=[]).push([[3229],{3623(e,t,r){r.d(t,{A:()=>h});var a=r(7804),s=r(5713),i=r(3235),l=r(9424);const o=i.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
`,n=i.Ay.a`
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
`,d=i.Ay.div`
  padding: 0 16px 80px;
`,p=i.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,c=i.Ay.div`
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
`;class h extends a.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,l.jsxs)(d,{className:"wmde-markdown-var",children:[(0,l.jsxs)(o,{children:[this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,l.jsxs)(c,{children:[(0,l.jsx)("h3",{children:"Example"}),this.example]}),(0,l.jsx)(s.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,l.jsxs)(p,{children:[(0,l.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,l.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,l.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,l.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},3229(e,t,r){r.r(t),r.d(t,{Component:()=>d});var a=r(7804),s=r(6436),i=r(3623),l=r(7980),o=r(9424);function n(){const{hsva:e,dispatch:t}=(0,a.useContext)(l.ob);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"10px 0 10px 0"},children:[(0,o.jsx)(s.A,{style:{maxWidth:180,marginRight:15},hsva:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}}),(0,o.jsx)(s.A,{style:{maxWidth:180},hsva:e,placement:"top",onChange:r=>{t({hsva:{...e,...r.hsva}})}})]}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center"},children:[(0,o.jsx)(s.A,{style:{maxWidth:180,marginRight:15},hsva:e,placement:"left",onChange:r=>{t({hsva:{...e,...r.hsva}})}}),(0,o.jsx)(s.A,{style:{maxWidth:180},hsva:e,placement:"right",onChange:r=>{t({hsva:{...e,...r.hsva}})}})]})]})}class d extends i.A{constructor(...e){super(...e),this.editorUrl="/packages/color-editable-input-rgba/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(2215)]).then(()=>r(2215)),this.example=(0,o.jsx)(n,{})}}},6436(e,t,r){var a=r(8102),s=r(9257),i=r(7804),l=r(5991),o=r(2945),n=r(9424),d=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],p=i.forwardRef((e,t)=>{var r=e.prefixCls,i=void 0===r?"w-color-editable-input-rgba":r,p=e.hsva,c=e.placement,h=void 0===c?"bottom":c,u=e.rProps,g=void 0===u?{}:u,x=e.gProps,m=void 0===x?{}:x,b=e.bProps,v=void 0===b?{}:b,f=e.aProps,j=void 0===f?{}:f,y=e.className,A=e.style,w=e.onChange,S=(0,s.A)(e,d),C=p?(0,o.ss)(p):{};function k(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var _=(e,t,r)=>{"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,o.yW)((0,o.SX)((0,a.A)({},C,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w((0,o.yW)((0,o.SX)((0,a.A)({},C,{r:e})))),"g"===t&&w&&w((0,o.yW)((0,o.SX)((0,a.A)({},C,{g:e})))),"b"===t&&w&&w((0,o.yW)((0,o.SX)((0,a.A)({},C,{b:e})))))},N=C.a?Math.round(100*C.a)/100:0;return(0,n.jsxs)("div",(0,a.A)({ref:t,className:[i,y||""].filter(Boolean).join(" ")},S,{style:(0,a.A)({fontSize:11,display:"flex"},A),children:[(0,n.jsx)(l.A,(0,a.A)({label:"R",value:C.r||0,onBlur:k,placement:h,onChange:(e,t)=>_(t,"r",e)},g,{style:(0,a.A)({},g.style)})),(0,n.jsx)(l.A,(0,a.A)({label:"G",value:C.g||0,onBlur:k,placement:h,onChange:(e,t)=>_(t,"g",e)},m,{style:(0,a.A)({marginLeft:5},m.style)})),(0,n.jsx)(l.A,(0,a.A)({label:"B",value:C.b||0,onBlur:k,placement:h,onChange:(e,t)=>_(t,"b",e)},v,{style:(0,a.A)({marginLeft:5},v.style)})),j&&(0,n.jsx)(l.A,(0,a.A)({label:"A",value:parseInt(String(100*N),10),onBlur:e=>{var t=Number(e.target.value);t&&t>100&&(e.target.value="100"),t&&t<0&&(e.target.value="0")},placement:h,onChange:(e,t)=>_(t,"a",e)},j,{style:(0,a.A)({marginLeft:5},j.style)}))]}))});p.displayName="EditableInputRGBA";const c=p;r.d(t,["A",0,c])},5991(e,t,r){var a=r(8102),s=r(9257),i=r(7804),l=r(9424),o=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],n=i.forwardRef((e,t)=>{var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,d=e.placement,p=void 0===d?"bottom":d,c=e.label,h=e.value,u=e.className,g=e.style,x=e.labelStyle,m=e.inputStyle,b=e.onChange,v=e.onBlur,f=e.renderInput,j=(0,s.A)(e,o),y=(0,i.useState)(h),A=y[0],w=y[1],S=(0,i.useRef)(!1),C=(0,i.useRef)(j.id||n+"-"+Math.random().toString(36).slice(2,11)),k=j.id||C.current;(0,i.useEffect)(()=>{e.value!==A&&(S.current||w(e.value))},[e.value]);var _={};"bottom"===p&&(_.flexDirection="column"),"top"===p&&(_.flexDirection="column-reverse"),"left"===p&&(_.flexDirection="row-reverse");var N=(0,a.A)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},_,g),R=(0,a.A)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},m),B=(0,a.A)({value:A,onChange:function(e,t){var r=(t||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&b&&b(e,r);var a=(e=>Number(String(e).replace(/%/g,"")))(r);isNaN(a)||b&&b(e,a),w(r)},onBlur:function(t){S.current=!1,w(e.value),v&&v(t)},autoComplete:"off",onFocus:()=>S.current=!0},j,{id:k,style:R,onFocusCapture:e=>{var t=e.target;t.setSelectionRange(t.value.length,t.value.length)}});return(0,l.jsxs)("div",{className:[n,u||""].filter(Boolean).join(" "),style:N,children:[f?f(B,t):(0,l.jsx)("input",(0,a.A)({ref:t},B)),c&&(0,l.jsx)("label",{htmlFor:k,style:(0,a.A)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},x),children:c})]})});n.displayName="EditableInput";const d=n;r.d(t,["A",0,d])}}]);
//# sourceMappingURL=3229.2ad265e9.chunk.js.map