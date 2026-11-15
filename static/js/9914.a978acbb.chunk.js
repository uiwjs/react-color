"use strict";(globalThis.webpackChunkwebsite||=[]).push([[9914],{3623(e,t,r){r.d(t,{A:()=>u});var a=r(7804),i=r(5713),l=r(3235),s=r(9424);const o=l.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
`,n=l.Ay.a`
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
`,d=l.Ay.div`
  padding: 0 16px 80px;
`,c=l.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,p=l.Ay.div`
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
`;class u extends a.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,s.jsxs)(d,{className:"wmde-markdown-var",children:[(0,s.jsxs)(o,{children:[this.editorUrl&&(0,s.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,s.jsxs)(p,{children:[(0,s.jsx)("h3",{children:"Example"}),this.example]}),(0,s.jsx)(i.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,s.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,s.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,s.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},9914(e,t,r){r.r(t),r.d(t,{Component:()=>c});var a=r(7804),i=r(5991),l=r(2945),s=r(3623),o=r(7980),n=r(9424);function d(){const{hsva:e,dispatch:t}=(0,a.useContext)(o.ob);return(0,n.jsxs)("div",{children:[(0,n.jsx)(i.A,{label:"Hex",value:(0,l.D9)(e),onChange:(e,r)=>{(0,l.Am)(e.target.value)&&t({hsva:(0,l.RV)(e.target.value)})},onBlur:e=>{const t=e.target.value;t.replace(/^#/,"").length>6&&(e.target.value=t.slice(0,t.startsWith("#")?7:6))},placement:"top",style:{width:68,alignItems:"flex-start"}}),(0,n.jsx)(i.A,{label:"Hex",placement:"right",value:(0,l.D9)(e),onChange:e=>{(0,l.Am)(e.target.value)&&t({hsva:(0,l.RV)(e.target.value)})},labelStyle:{position:"relative",display:"block"},style:{width:84,marginTop:8}}),(0,n.jsx)("br",{}),(0,n.jsx)(i.A,{label:"Hex",value:(0,l.D9)(e),onChange:e=>{(0,l.Am)(e.target.value)&&t({hsva:(0,l.RV)(e.target.value)})},placement:"left",style:{width:84}}),(0,n.jsx)(i.A,{label:"Alpha",value:e.a,onChange:(r,a)=>{let i=Number(a)>1?1:a;t({hsva:{...e,a:i}})},onBlur:e=>{Number(e.target.value)>1&&(e.target.value="1")},labelStyle:{position:"relative",display:"block"},style:{width:68,marginTop:8}})]})}class c extends s.A{constructor(...e){super(...e),this.editorUrl="/packages/color-editable-input/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(4696)]).then(()=>r(4696)),this.example=(0,n.jsx)(d,{})}}},5991(e,t,r){var a=r(8102),i=r(9257),l=r(7804),s=r(9424),o=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],n=l.forwardRef((e,t)=>{var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,d=e.placement,c=void 0===d?"bottom":d,p=e.label,u=e.value,h=e.className,g=e.style,x=e.labelStyle,b=e.inputStyle,m=e.onChange,v=e.onBlur,f=e.renderInput,j=(0,i.A)(e,o),w=(0,l.useState)(u),A=w[0],y=w[1],k=(0,l.useRef)(!1),S=(0,l.useRef)(j.id||n+"-"+Math.random().toString(36).slice(2,11)),C=j.id||S.current;(0,l.useEffect)(()=>{e.value!==A&&(k.current||y(e.value))},[e.value]);var _={};"bottom"===c&&(_.flexDirection="column"),"top"===c&&(_.flexDirection="column-reverse"),"left"===c&&(_.flexDirection="row-reverse");var R=(0,a.A)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},_,g),N=(0,a.A)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},b),D=(0,a.A)({value:A,onChange:function(e,t){var r=(t||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var a=(e=>Number(String(e).replace(/%/g,"")))(r);isNaN(a)||m&&m(e,a),y(r)},onBlur:function(t){k.current=!1,y(e.value),v&&v(t)},autoComplete:"off",onFocus:()=>k.current=!0},j,{id:C,style:N,onFocusCapture:e=>{var t=e.target;t.setSelectionRange(t.value.length,t.value.length)}});return(0,s.jsxs)("div",{className:[n,h||""].filter(Boolean).join(" "),style:R,children:[f?f(D,t):(0,s.jsx)("input",(0,a.A)({ref:t},D)),p&&(0,s.jsx)("label",{htmlFor:C,style:(0,a.A)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},x),children:p})]})});n.displayName="EditableInput";const d=n;r.d(t,["A",0,d])}}]);
//# sourceMappingURL=9914.a978acbb.chunk.js.map