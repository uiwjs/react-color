(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[914],{256:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=256,e.exports=t},3623:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var s=r(7804),o=r(7609),i=r(3235),a=r(9424);const l=i.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
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
  padding-bottom: 120px;
`,h=i.Ay.footer`
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
`;class p extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((e=>{this.setState({mdStr:e.default.source,mdObj:e.default})}))}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(c,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},5615:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Component:()=>d});var s=r(7804),o=r(8024),i=r(3623),a=r(7980),l=r(9424);function n(){const{hsva:e,dispatch:t}=(0,s.useContext)(a.ob),[r,i]=(0,s.useState)(!1);return(0,l.jsxs)("div",{style:{width:256},children:[(0,l.jsx)(o.A,{color:e,disableAlpha:r,onChange:r=>{t({hsva:{...e,...r.hsva}})}}),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"checkbox",checked:r,onChange:e=>i(e.target.checked)}),r?"Hide":"Show"," Alpha"]})})]})}class d extends i.A{constructor(){super(...arguments),this.displayName="colorful-Page",this.editorUrl="/packages/color-colorful/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(185)]).then(r.bind(r,5185)),this.example=(0,l.jsx)(n,{})}}},8024:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),l=r(1636),n=r(2084),d=r(1068),h=r(9424),c=["style","color"],p=["prefixCls","className","onChange","color","style","disableAlpha"],u=e=>{var{style:t,color:r}=e,i=(0,o.A)(e,c),a=(0,s.A)({"--colorful-pointer-background-color":"#fff","--colorful-pointer-border":"2px solid #fff",height:28,width:28,position:"absolute",transform:"translate(-14px, -4px)",boxShadow:"0 2px 4px rgb(0 0 0 / 20%)",borderRadius:"50%",background:"url("+l.xm+")",backgroundColor:"var(--colorful-pointer-background-color)",border:"var(--colorful-pointer-border)",zIndex:1},t);return(0,h.jsx)("div",(0,s.A)({},i,{style:a,children:(0,h.jsx)("div",{style:{backgroundColor:r,borderRadius:"50%",height:" 100%",width:"100%"}})}))},x=i.forwardRef(((e,t)=>{var{prefixCls:r="w-color-colorful",className:i,onChange:c,color:x,style:g,disableAlpha:b}=e,m=(0,o.A)(e,p),f="string"===typeof x&&(0,a.Am)(x)?(0,a.RV)(x):x||{},j=e=>c&&c((0,a.yW)(e));return(0,h.jsxs)("div",(0,s.A)({ref:t,style:(0,s.A)({width:200,position:"relative"},g)},m,{className:r+" "+(i||""),children:[(0,h.jsx)(n.A,{hsva:f,className:r,radius:"8px 8px 0 0",style:{width:"auto",height:150,minWidth:120,borderBottom:"12px solid #000"},pointer:e=>{var{left:t,top:r,color:s}=e;return(0,h.jsx)(u,{style:{left:t,top:r,transform:"translate(-16px, -16px)"},color:(0,a.D9)(f)})},onChange:e=>j((0,s.A)({},f,e))}),(0,h.jsx)(d.A,{hue:f.h,height:24,radius:b?"0 0 8px 8px":0,className:r,onChange:e=>j((0,s.A)({},f,e)),pointer:e=>{var{left:t}=e;return(0,h.jsx)(u,{style:{left:t},color:"hsl("+(f.h||0)+"deg 100% 50%)"})}}),!b&&(0,h.jsx)(l.Ay,{hsva:f,height:24,className:r,radius:"0 0 8px 8px",pointer:e=>{var{left:t}=e;return(0,h.jsx)(u,{style:{left:t},color:(0,a.db)(f)})},onChange:e=>j((0,s.A)({},f,e))})]}))}));x.displayName="Colorful";const g=x}}]);
//# sourceMappingURL=914.62d2f0d2.chunk.js.map