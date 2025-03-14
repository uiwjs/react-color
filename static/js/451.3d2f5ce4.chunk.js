"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[451],{3451:(t,e,s)=>{s.r(e),s.d(e,{Component:()=>x});var r=s(7804),i=s(8102),a=s(9257),o=s(2945),n=s(1636),h=s(9424),l=["prefixCls","className","onChange","direction","hsva"],d=r.forwardRef(((t,e)=>{var{prefixCls:s="w-color-saturation",className:r,onChange:d,direction:c="horizontal",hsva:p}=t,g=(0,a.A)(t,l),u=(0,o.dR)((0,i.A)({},p,{a:1,v:100}));return(0,h.jsx)(n.Ay,(0,i.A)({ref:e},g,{className:s+" "+(r||""),hsva:{h:p.h,s:p.s,v:p.v,a:1-p.v/100},direction:c,background:"linear-gradient(to "+("horizontal"===c?"right":"bottom")+", "+u+", rgb(0, 0, 0))",onChange:(t,e)=>{d&&d({v:"horizontal"===c?100-100*e.left:100-100*e.top})}}))}));d.displayName="ShadeSlider";const c=d;var p=s(3623),g=s(7980);function u(){const{hsva:t,dispatch:e}=(0,r.useContext)(g.ob);return(0,h.jsx)("div",{style:{width:256},children:(0,h.jsx)(c,{hsva:t,onChange:s=>{e({hsva:{...t,...s}})}})})}class x extends p.A{constructor(){super(...arguments),this.editorUrl="/packages/color-shade-slider/README.md",this.getMdStr=()=>Promise.all([s.e(968),s.e(256)]).then(s.bind(s,6256)),this.example=(0,h.jsx)(u,{})}}},3623:(t,e,s)=>{s.d(e,{A:()=>p});var r=s(7804),i=s(9203),a=s(3235),o=s(9424);const n=a.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,h=a.Ay.a`
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
`,l=a.Ay.div`
  padding-bottom: 120px;
`,d=a.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,c=a.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends r.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:s}=this.state.mdObj||{};return(0,o.jsxs)(l,{className:"wmde-markdown-var",children:[(0,o.jsxs)(n,{children:[this.editorUrl&&(0,o.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,o.jsxs)(c,{children:[(0,o.jsx)("h3",{children:"Example"}),this.example]}),(0,o.jsx)(i.A,{data:{data:s,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,o.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,o.jsxs)(d,{children:[(0,o.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,o.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,o.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}}}]);
//# sourceMappingURL=451.3d2f5ce4.chunk.js.map