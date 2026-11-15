"use strict";(globalThis.webpackChunkwebsite||=[]).push([[5615],{3623(t,e,r){r.d(e,{A:()=>p});var s=r(7804),o=r(5713),i=r(3235),a=r(9424);const l=i.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,d=i.Ay.a`
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
`,h=i.Ay.div`
  padding-bottom: 120px;
`,n=i.Ay.footer`
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
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(h,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(d,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(c,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(d,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},5615(t,e,r){r.r(e),r.d(e,{Component:()=>h});var s=r(7804),o=r(8024),i=r(3623),a=r(7980),l=r(9424);function d(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob),[r,i]=(0,s.useState)(!1);return(0,l.jsxs)("div",{style:{width:256},children:[(0,l.jsx)(o.A,{color:t,disableAlpha:r,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"checkbox",checked:r,onChange:t=>i(t.target.checked)}),"Show Alpha"]})})]})}class h extends i.A{constructor(...t){super(...t),this.displayName="colorful-Page",this.editorUrl="/packages/color-colorful/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(345),r.e(1488)]).then(()=>r(1488)),this.example=(0,l.jsx)(d,{})}}},8024(t,e,r){var s=r(8102),o=r(9257),i=r(7804),a=r(2945),l=r(1636),d=r(2084),h=r(1068),n=r(9424),c=["style","color"],p=["prefixCls","className","onChange","color","style","disableAlpha"],x=t=>{var e=t.style,r=t.color,i=(0,o.A)(t,c),a=(0,s.A)({"--colorful-pointer-background-color":"#fff","--colorful-pointer-border":"2px solid #fff",height:28,width:28,position:"absolute",transform:"translate(-16px, -16px)",boxShadow:"0 2px 4px rgb(0 0 0 / 20%)",borderRadius:"50%",background:"url("+l.xm+")",backgroundColor:"var(--colorful-pointer-background-color)",border:"var(--colorful-pointer-border)",zIndex:1},e);return(0,n.jsx)("div",(0,s.A)({},i,{style:a,children:(0,n.jsx)("div",{style:{backgroundColor:r,borderRadius:"50%",height:"100%",width:"100%"}})}))},g=i.forwardRef((t,e)=>{var r=t.prefixCls,i=void 0===r?"w-color-colorful":r,c=t.className,g=t.onChange,u=t.color,b=t.style,m=t.disableAlpha,f=(0,o.A)(t,p),j="string"===typeof u&&(0,a.Am)(u)?(0,a.RV)(u):u||{},v=t=>g&&g((0,a.yW)(t));return(0,n.jsxs)("div",(0,s.A)({ref:e,style:(0,s.A)({width:200,position:"relative"},b)},f,{className:i+" "+(c||""),children:[(0,n.jsx)(d.A,{hsva:j,className:i,radius:"8px 8px 0 0",style:{width:"auto",height:150,minWidth:120,borderBottom:"12px solid #000"},pointer:t=>{var e=t.left,r=t.top;t.color;return(0,n.jsx)(x,{style:{left:e,top:r},color:(0,a.D9)(j)})},onChange:t=>v((0,s.A)({},j,t))}),(0,n.jsx)(h.A,{hue:j.h,height:24,radius:m?"0 0 8px 8px":0,className:i,onChange:t=>v((0,s.A)({},j,t)),pointer:t=>{var e=t.left;return(0,n.jsx)(x,{style:{left:e,transform:"translate(-16px, -5px)"},color:"hsl("+(j.h||0)+"deg 100% 50%)"})}}),!m&&(0,n.jsx)(l.Ay,{hsva:j,height:24,className:i,radius:"0 0 8px 8px",pointer:t=>{var e=t.left;return(0,n.jsx)(x,{style:{left:e,transform:"translate(-16px, -5px)"},color:(0,a.db)(j)})},onChange:t=>v((0,s.A)({},j,t))})]}))});g.displayName="Colorful";const u=g;r.d(e,["A",0,u])}}]);
//# sourceMappingURL=5615.94a1e2b8.chunk.js.map