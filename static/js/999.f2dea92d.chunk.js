(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{256:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=256,e.exports=t},3623:(e,t,s)=>{"use strict";s.d(t,{A:()=>p});var r=s(7804),a=s(7584),i=s(3235),o=s(9424);const l=i.Ay.div`
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
`,h=i.Ay.div`
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
`,c=i.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends r.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((e=>{this.setState({mdStr:e.default.source,mdObj:e.default})}))}render(){const{source:e,components:t,data:s}=this.state.mdObj||{};return(0,o.jsxs)(h,{className:"wmde-markdown-var",children:[(0,o.jsxs)(l,{children:[this.editorUrl&&(0,o.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,o.jsxs)(c,{children:[(0,o.jsx)("h3",{children:"Example"}),this.example]}),(0,o.jsx)(a.A,{data:{data:s,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,o.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,o.jsxs)(d,{children:[(0,o.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,o.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,o.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,o.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,o.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},9914:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Component:()=>d});var r=s(7804),a=s(5991),i=s(2945),o=s(3623),l=s(7980),n=s(9424);function h(){const{hsva:e,dispatch:t}=(0,r.useContext)(l.ob);return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.default,{label:"Hex",value:(0,i.hsvaToHex)(e),onChange:(e,s)=>{(0,i.validHex)(e.target.value)&&t({hsva:(0,i.hexToHsva)(e.target.value)})},onBlur:e=>{const t=e.target.value;t.replace(/^#/,"").length>6&&(e.target.value=t.slice(0,t.startsWith("#")?7:6))},placement:"top",style:{width:68,alignItems:"flex-start"}}),(0,n.jsx)(a.default,{label:"Hex",placement:"right",value:(0,i.hsvaToHex)(e),onChange:e=>{(0,i.validHex)(e.target.value)&&t({hsva:(0,i.hexToHsva)(e.target.value)})},labelStyle:{position:"relative",display:"block"},style:{width:84,marginTop:8}}),(0,n.jsx)("br",{}),(0,n.jsx)(a.default,{label:"Hex",value:(0,i.hsvaToHex)(e),onChange:e=>{(0,i.validHex)(e.target.value)&&t({hsva:(0,i.hexToHsva)(e.target.value)})},placement:"left",style:{width:84}}),(0,n.jsx)(a.default,{label:"Alpha",value:e.a,onChange:(s,r)=>{let a=Number(r)>1?1:r;t({hsva:{...e,a:a}})},onBlur:e=>{Number(e.target.value)>1&&(e.target.value="1")},labelStyle:{position:"relative",display:"block"},style:{width:68,marginTop:8}})]})}class d extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-editable-input/README.md",this.getMdStr=()=>s.e(315).then(s.bind(s,4696)),this.example=(0,n.jsx)(h,{})}}}}]);
//# sourceMappingURL=999.f2dea92d.chunk.js.map