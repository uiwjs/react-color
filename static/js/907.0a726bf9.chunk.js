(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[907],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,s)=>{"use strict";s.d(e,{A:()=>j});var r,i,n,o,a,d=s(114),h=s(7804),c=s(52),l=s(3235),p=s(9424);const g=l.Ay.div(r||(r=(0,d.A)(["\n  background-color: var(--color-theme-bg);\n  box-shadow:\n    0 0 0 1px rgb(0 0 0 / 15%),\n    0 8px 16px rgb(0 0 0 / 15%);\n  border-radius: 16px;\n  max-width: 860px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n  position: relative;\n"]))),u=l.Ay.a(i||(i=(0,d.A)(["\n  position: absolute;\n  right: 20px;\n  padding: 3px 8px 4px 8px;\n  background: #333333;\n  border-radius: 0 0 6px 6px;\n  text-decoration: initial;\n  color: #fff;\n  transition: all 0.3s;\n  font-size: 14px;\n  &:hover {\n    background-color: #3f51b4;\n  }\n"]))),x=l.Ay.div(n||(n=(0,d.A)(["\n  padding-bottom: 120px;\n"]))),b=l.Ay.footer(o||(o=(0,d.A)(["\n  text-align: center;\n  margin-top: 40px;\n  a {\n    margin: 0 5px;\n  }\n  p {\n    font-size: 12px;\n    text-align: center;\n  }\n"]))),m=l.Ay.div(a||(a=(0,d.A)(["\n  border-bottom: 1px solid var(--color-border-default);\n  border-radius: 16px 16px 0 0;\n  padding: 28px;\n  > h3 {\n    margin: 0;\n    padding-bottom: 12px;\n  }\n"])));class j extends h.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:s}=this.state.mdObj||{};return(0,p.jsxs)(x,{className:"wmde-markdown-var",children:[(0,p.jsxs)(g,{children:[this.editorUrl&&(0,p.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"}),this.example&&(0,p.jsxs)(m,{children:[(0,p.jsx)("h3",{children:"Example"}),this.example]}),(0,p.jsx)(c.A,{data:{data:s,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,p.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"})]}),(0,p.jsxs)(b,{children:[(0,p.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,p.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,p.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,p.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},2953:(t,e,s)=>{"use strict";s.r(e),s.d(e,{Component:()=>c});var r=s(7804),i=s(6966),n=s(2945),o=s(3623),a=s(7980),d=s(9424);function h(){const{hsva:t,dispatch:e}=(0,r.useContext)(a.ob);return(0,d.jsx)("div",{style:{width:256},children:(0,d.jsx)(i.default,{colors:["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],color:(0,n.hsvaToHex)(t),onChange:t=>{e({hsva:{...t,...t}})}})})}class c extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-swatch/README.md",this.getMdStr=()=>s.e(135).then(s.bind(s,2135)),this.example=(0,d.jsx)(h,{})}}}}]);
//# sourceMappingURL=907.0a726bf9.chunk.js.map