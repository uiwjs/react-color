"use strict";(globalThis.webpackChunkwebsite||=[]).push([[7070],{3623(t,e,r){r.d(e,{A:()=>p});var s=r(7804),i=r(5713),a=r(3235),o=r(9424);const h=a.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,n=a.Ay.a`
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
`,d=a.Ay.div`
  padding-bottom: 120px;
`,l=a.Ay.footer`
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,o.jsxs)(d,{className:"wmde-markdown-var",children:[(0,o.jsxs)(h,{children:[this.editorUrl&&(0,o.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,o.jsxs)(c,{children:[(0,o.jsx)("h3",{children:"Example"}),this.example]}),(0,o.jsx)(i.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,o.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,o.jsxs)(l,{children:[(0,o.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,o.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,o.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},7070(t,e,r){r.r(e),r.d(e,{Component:()=>d});var s=r(7804),i=r(9571),a=r(3623),o=r(7980),h=r(9424);function n(){const{hsva:t,dispatch:e}=(0,s.useContext)(o.ob);return(0,h.jsx)("div",{style:{width:256},children:(0,h.jsx)(i.A,{hsva:t,onChange:r=>{e({hsva:{...t,...r}})}})})}class d extends a.A{constructor(...t){super(...t),this.editorUrl="/packages/color-shade-slider/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(6256)]).then(()=>r(6256)),this.example=(0,h.jsx)(n,{})}}},9571(t,e,r){var s=r(8102),i=r(9257),a=r(7804),o=r(2945),h=r(1636),n=r(9424),d=["prefixCls","className","onChange","direction","hsva"],l=a.forwardRef((t,e)=>{var r=t.prefixCls,a=void 0===r?"w-color-saturation":r,l=t.className,c=t.onChange,p=t.direction,g=void 0===p?"horizontal":p,u=t.hsva,x=(0,i.A)(t,d),m=(0,o.dR)((0,s.A)({},u,{a:1,v:100}));return(0,n.jsx)(h.Ay,(0,s.A)({ref:e},x,{className:a+" "+(l||""),hsva:{h:u.h,s:u.s,v:u.v,a:1-u.v/100},direction:g,background:"linear-gradient(to "+("horizontal"===g?"right":"bottom")+", "+m+", rgb(0, 0, 0))",onChange:(t,e)=>{c&&c({v:"horizontal"===g?100-100*e.left:100-100*e.top})}}))});l.displayName="ShadeSlider";const c=l;r.d(e,["A",0,c])}}]);
//# sourceMappingURL=7070.e6f40143.chunk.js.map