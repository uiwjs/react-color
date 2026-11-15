"use strict";(globalThis.webpackChunkwebsite||=[]).push([[1984],{3623(e,t,r){r.d(t,{A:()=>h});var o=r(7804),a=r(5713),i=r(3235),s=r(9424);const l=i.Ay.div`
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
`,c=i.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,p=i.Ay.div`
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
`;class h extends o.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,s.jsxs)(d,{className:"wmde-markdown-var",children:[(0,s.jsxs)(l,{children:[this.editorUrl&&(0,s.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,s.jsxs)(p,{children:[(0,s.jsx)("h3",{children:"Example"}),this.example]}),(0,s.jsx)(a.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,s.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,s.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,s.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1984(e,t,r){r.r(t),r.d(t,{Component:()=>d});var o=r(7804),a=r(411),i=r(3623),s=r(7980),l=r(9424);function n(){const{hsva:e,dispatch:t}=(0,o.useContext)(s.ob);return(0,l.jsxs)("div",{style:{minWidth:300,display:"flex",gap:"1rem"},children:[(0,l.jsx)(a.A,{color:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}}),(0,l.jsx)(a.A,{color:e,showTriangle:!1,onChange:r=>{t({hsva:{...e,...r.hsva}})}})]})}class d extends i.A{constructor(...e){super(...e),this.editorUrl="/packages/color-block/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(8853)]).then(()=>r(8853)),this.example=(0,l.jsx)(n,{})}}},411(e,t,r){var o=r(8102),a=r(9257),i=r(7804),s=r(2945),l=r(5991),n=r(6966),d=r(9424),c=["prefixCls","className","style","color","colors","showTriangle","onChange"],p=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],h=i.forwardRef((e,t)=>{var r=e.prefixCls,i=void 0===r?"w-color-block":r,h=e.className,g=e.style,u=e.color,x=e.colors,b=void 0===x?p:x,m=e.showTriangle,v=void 0===m||m,f=e.onChange,j=(0,a.A)(e,c),w="string"===typeof u&&(0,s.Am)(u)?(0,s.RV)(u):u,y=u?(0,s.D9)(w):"",k=(e,t)=>{"string"===typeof e&&(0,s.Am)(e)&&/(3|6)/.test(String(e.replace(/^#/,"").length))&&f&&f((0,s.yW)((0,s.RV)(e)))},A=(0,o.A)({"--block-background-color":"rgb(255, 255, 255)","--block-box-shadow":"rgb(0 0 0 / 10%) 0 1px",width:170,borderRadius:6,background:"var(--block-background-color)",boxShadow:"var(--block-box-shadow)",position:"relative"},g);return(0,d.jsxs)("div",(0,o.A)({ref:t,className:[i,h].filter(Boolean).join(" "),style:A},j,{children:[v&&(0,d.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+y,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),(0,d.jsx)("div",{title:y,style:{backgroundColor:""+y,color:(0,s.OB)(y),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:y.toLocaleUpperCase()}),(0,d.jsx)(n.A,{colors:b,color:y,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:e=>{f&&f((0,s.yW)(e))}}),(0,d.jsx)(l.A,{value:y.toLocaleUpperCase(),onChange:(e,t)=>k(t),onBlur:e=>{var t=e.target.value;e.target.value=t.slice(0,6),k(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))});h.displayName="Block";const g=h;r.d(t,["A",0,g])},5991(e,t,r){var o=r(8102),a=r(9257),i=r(7804),s=r(9424),l=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],n=i.forwardRef((e,t)=>{var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,d=e.placement,c=void 0===d?"bottom":d,p=e.label,h=e.value,g=e.className,u=e.style,x=e.labelStyle,b=e.inputStyle,m=e.onChange,v=e.onBlur,f=e.renderInput,j=(0,a.A)(e,l),w=(0,i.useState)(h),y=w[0],k=w[1],A=(0,i.useRef)(!1),C=(0,i.useRef)(j.id||n+"-"+Math.random().toString(36).slice(2,11)),S=j.id||C.current;(0,i.useEffect)(()=>{e.value!==y&&(A.current||k(e.value))},[e.value]);var R={};"bottom"===c&&(R.flexDirection="column"),"top"===c&&(R.flexDirection="column-reverse"),"left"===c&&(R.flexDirection="row-reverse");var N=(0,o.A)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},R,u),_=(0,o.A)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},b),E=(0,o.A)({value:y,onChange:function(e,t){var r=(t||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var o=(e=>Number(String(e).replace(/%/g,"")))(r);isNaN(o)||m&&m(e,o),k(r)},onBlur:function(t){A.current=!1,k(e.value),v&&v(t)},autoComplete:"off",onFocus:()=>A.current=!0},j,{id:S,style:_,onFocusCapture:e=>{var t=e.target;t.setSelectionRange(t.value.length,t.value.length)}});return(0,s.jsxs)("div",{className:[n,g||""].filter(Boolean).join(" "),style:N,children:[f?f(E,t):(0,s.jsx)("input",(0,o.A)({ref:t},E)),p&&(0,s.jsx)("label",{htmlFor:S,style:(0,o.A)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},x),children:p})]})});n.displayName="EditableInput";const d=n;r.d(t,["A",0,d])},6966(e,t,r){var o=r(8102),a=r(9257),i=r(7804),s=r(2945),l=r(9424),n=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],d=i.forwardRef((e,t)=>{var r=e.prefixCls,d=void 0===r?"w-color-swatch":r,c=e.className,p=e.color,h=e.colors,g=void 0===h?[]:h,u=e.style,x=e.rectProps,b=void 0===x?{}:x,m=e.onChange,v=e.addonAfter,f=e.addonBefore,j=e.rectRender,w=(0,a.A)(e,n),y=(0,o.A)({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},b.style),k=(e,t)=>{m&&m((0,s.RV)(e),(0,s.yW)((0,s.RV)(e)),t)};return(0,l.jsxs)("div",(0,o.A)({ref:t},w,{className:[d,c||""].filter(Boolean).join(" "),style:(0,o.A)({display:"flex",flexWrap:"wrap",position:"relative"},u),children:[f&&i.isValidElement(f)&&f,g&&Array.isArray(g)&&g.map((e,t)=>{var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var s=p&&p.toLocaleLowerCase()===a.toLocaleLowerCase(),n=j&&j({title:r,color:a,checked:!!s,style:(0,o.A)({},y,{background:a}),onClick:e=>k(a,e)});if(n)return(0,l.jsx)(i.Fragment,{children:n},t);var d=b.children&&i.isValidElement(b.children)?i.cloneElement(b.children,{color:a,checked:s}):null;return(0,l.jsx)("div",(0,o.A)({tabIndex:0,title:r,onClick:e=>k(a,e)},b,{children:d,style:(0,o.A)({},y,{background:a})}),t)}),v&&i.isValidElement(v)&&v]}))});d.displayName="Swatch";const c=d;r.d(t,["A",0,c])}}]);
//# sourceMappingURL=1984.706301b5.chunk.js.map