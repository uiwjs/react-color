"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{3425:(t,e,s)=>{s.r(e),s.d(e,{Component:()=>n});var r=s(7804),a=s(8088),i=s(3623),o=s(7980),l=s(9424);function h(){const{hsva:t,dispatch:e}=(0,r.useContext)(o.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(a.A,{hsva:t,onChange:s=>{e({hsva:{...t,...s.hsva}})}})})}class n extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-editable-input-hsla/README.md",this.getMdStr=()=>Promise.all([s.e(968),s.e(547)]).then(s.bind(s,5547)),this.example=(0,l.jsx)(h,{})}}},3623:(t,e,s)=>{s.d(e,{A:()=>c});var r=s(7804),a=s(5789),i=s(3235),o=s(9424);const l=i.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,h=i.Ay.a`
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
`,n=i.Ay.div`
  padding-bottom: 120px;
`,d=i.Ay.footer`
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
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class c extends r.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:s}=this.state.mdObj||{};return(0,o.jsxs)(n,{className:"wmde-markdown-var",children:[(0,o.jsxs)(l,{children:[this.editorUrl&&(0,o.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,o.jsxs)(p,{children:[(0,o.jsx)("h3",{children:"Example"}),this.example]}),(0,o.jsx)(a.A,{data:{data:s,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,o.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,o.jsxs)(d,{children:[(0,o.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,o.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,o.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},8088:(t,e,s)=>{s.d(e,{A:()=>p});var r=s(8102),a=s(9257),i=s(7804),o=s(6436),l=s(2945),h=s(9424),n=["prefixCls","hsva","hProps","sProps","lProps","aProps","className","onChange"],d=i.forwardRef((t,e)=>{var{prefixCls:s="w-color-editable-input-hsla",hsva:i,hProps:d={},sProps:p={},lProps:c={},aProps:g={},className:u,onChange:x}=t,b=(0,a.A)(t,n),m=i?(0,l.E_)(i):{h:0,s:0,l:0,a:0},j=(t,e,s)=>{"number"===typeof t&&("h"===e&&(t<0&&(t=0),t>360&&(t=360),x&&x((0,l.yW)((0,l.YA)((0,r.A)({},m,{h:t}))))),"s"===e&&(t<0&&(t=0),t>100&&(t=100),x&&x((0,l.yW)((0,l.YA)((0,r.A)({},m,{s:t}))))),"l"===e&&(t<0&&(t=0),t>100&&(t=100),x&&x((0,l.yW)((0,l.YA)((0,r.A)({},m,{l:t}))))),"a"===e&&(t<0&&(t=0),t>1&&(t=1),x&&x((0,l.yW)((0,l.YA)((0,r.A)({},m,{a:t}))))))},v=0!=g&&(0,r.A)({label:"A",value:Math.round(100*m.a)/100},g,{onChange:(t,e)=>j(e,"a")});return(0,h.jsx)(o.A,(0,r.A)({ref:e,hsva:i,rProps:(0,r.A)({label:"H",value:Math.round(m.h)},d,{onChange:(t,e)=>j(e,"h")}),gProps:(0,r.A)({label:"S",value:Math.round(m.s)+"%"},p,{onChange:(t,e)=>j(e,"s")}),bProps:(0,r.A)({label:"L",value:Math.round(m.l)+"%"},c,{onChange:(t,e)=>j(e,"l")}),aProps:v,className:[s,u||""].filter(Boolean).join(" ")},b))});d.displayName="EditableInputHSLA";const p=d}}]);
//# sourceMappingURL=425.4a41c988.chunk.js.map