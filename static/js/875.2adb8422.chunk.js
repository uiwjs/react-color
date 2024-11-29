(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[875],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var r=s(7804),i=s(7584),o=s(3235),a=s(9424);const l=o.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,n=o.Ay.a`
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
`,d=o.Ay.div`
  padding-bottom: 120px;
`,h=o.Ay.footer`
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
`;class p extends r.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:s}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(c,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(i.A,{data:{data:s,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},7958:(t,e,s)=>{"use strict";s.r(e),s.d(e,{Component:()=>d});var r=s(7804),i=s(4883),o=s(3623),a=s(7980),l=s(9424);function n(){const{hsva:t,dispatch:e}=(0,r.useContext)(a.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(i.default,{color:t,onChange:s=>{e({hsva:{...t,...s.hsv}})}})})}class d extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-slider/README.md",this.getMdStr=()=>s.e(428).then(s.bind(s,2428)),this.example=(0,l.jsx)(n,{})}}},4883:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var r=s(8102),i=s(9257),o=s(7804),a=s(2945),l=s(9424),n=["prefixCls","className","style","onChange","color","lightness"],d=o.forwardRef(((t,e)=>{var{prefixCls:s="w-color-slider",className:o,style:d,onChange:h,color:c,lightness:p=[80,65,50,35,20]}=t,g=(0,i.A)(t,n),u="string"===typeof c&&(0,a.validHex)(c)?(0,a.hexToHsva)(c):c||{};return(0,l.jsx)("div",(0,r.A)({ref:e,style:(0,r.A)({display:"flex"},d),className:[s,o||""].filter(Boolean).join(" ")},g,{children:p.map(((t,e)=>{var s="hsl("+(0,a.hsvaToHsla)(u).h+", 50%, "+t+"%)",i=s===(0,a.hsvaToHslString)(u);return(0,l.jsx)("div",{style:{paddingLeft:1,width:100/p.length+"%",boxSizing:"border-box"},children:(0,l.jsx)("div",{onClick:t=>((t,e)=>{h&&h((0,a.color)((0,a.hslStringToHsva)(t)),e)})(s,t),style:(0,r.A)({backgroundColor:s,height:12,cursor:"pointer"},i?{borderRadius:2,transform:"scale(1, 1.5)"}:{})})},e)}))}))}));d.displayName="Slider";const h=d}}]);
//# sourceMappingURL=875.2adb8422.chunk.js.map