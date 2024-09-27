(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[674],{256:t=>{function s(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}s.keys=()=>[],s.resolve=s,s.id=256,t.exports=s},3623:(t,s,e)=>{"use strict";e.d(s,{A:()=>p});var r=e(7804),a=e(52),o=e(3235),i=e(9424);const l=o.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,h=o.Ay.a`
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
`,n=o.Ay.div`
  padding-bottom: 120px;
`,d=o.Ay.footer`
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
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends r.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:s,data:e}=this.state.mdObj||{};return(0,i.jsxs)(n,{className:"wmde-markdown-var",children:[(0,i.jsxs)(l,{children:[this.editorUrl&&(0,i.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,i.jsxs)(c,{children:[(0,i.jsx)("h3",{children:"Example"}),this.example]}),(0,i.jsx)(a.A,{data:{data:e,components:s,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,i.jsx)(h,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,i.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,i.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},3425:(t,s,e)=>{"use strict";e.r(s),e.d(s,{Component:()=>n});var r=e(7804),a=e(8088),o=e(3623),i=e(7980),l=e(9424);function h(){const{hsva:t,dispatch:s}=(0,r.useContext)(i.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(a.default,{hsva:t,onChange:e=>{s({hsva:{...t,...e.hsva}})}})})}class n extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-editable-input-hsla/README.md",this.getMdStr=()=>e.e(547).then(e.bind(e,5547)),this.example=(0,l.jsx)(h,{})}}},8088:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>c});var r=e(8102),a=e(9257),o=e(7804),i=e(6436),l=e(2945),h=e(9424),n=["prefixCls","hsva","hProps","sProps","lProps","aProps","className","onChange"],d=o.forwardRef(((t,s)=>{var{prefixCls:e="w-color-editable-input-hsla",hsva:o,hProps:d={},sProps:c={},lProps:p={},aProps:u={},className:g,onChange:x}=t,b=(0,a.A)(t,n),m=o?(0,l.hsvaToHsla)(o):{h:0,s:0,l:0,a:0},j=(t,s,e)=>{"number"===typeof t&&("h"===s&&(t<0&&(t=0),t>360&&(t=360),x&&x((0,l.color)((0,l.hslaToHsva)((0,r.A)({},m,{h:t}))))),"s"===s&&(t<0&&(t=0),t>100&&(t=100),x&&x((0,l.color)((0,l.hslaToHsva)((0,r.A)({},m,{s:t}))))),"l"===s&&(t<0&&(t=0),t>100&&(t=100),x&&x((0,l.color)((0,l.hslaToHsva)((0,r.A)({},m,{l:t}))))),"a"===s&&(t<0&&(t=0),t>1&&(t=1),x&&x((0,l.color)((0,l.hslaToHsva)((0,r.A)({},m,{a:t}))))))},v=0!=u&&(0,r.A)({label:"A",value:Math.round(100*m.a)/100},u,{onChange:(t,s)=>j(s,"a")});return(0,h.jsx)(i.default,(0,r.A)({ref:s,hsva:o,rProps:(0,r.A)({label:"H",value:Math.round(m.h)},d,{onChange:(t,s)=>j(s,"h")}),gProps:(0,r.A)({label:"S",value:Math.round(m.s)+"%"},c,{onChange:(t,s)=>j(s,"s")}),bProps:(0,r.A)({label:"L",value:Math.round(m.l)+"%"},p,{onChange:(t,s)=>j(s,"l")}),aProps:v,className:[e,g||""].filter(Boolean).join(" ")},b))}));d.displayName="EditableInputHSLA";const c=d}}]);
//# sourceMappingURL=674.4256a8d0.chunk.js.map