"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{411:(e,t,r)=>{r.d(t,{A:()=>g});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),l=r(5991),n=r(6966),d=r(9424),c=["prefixCls","className","style","color","colors","showTriangle","onChange"],h=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],p=i.forwardRef(((e,t)=>{var{prefixCls:r="w-color-block",className:i,style:p,color:g,colors:x=h,showTriangle:u=!0,onChange:b}=e,m=(0,o.A)(e,c),j="string"===typeof g&&(0,a.Am)(g)?(0,a.RV)(g):g,f=g?(0,a.D9)(j):"",v=(e,t)=>{"string"===typeof e&&(0,a.Am)(e)&&/(3|6)/.test(String(e.replace(/^#/,"").length))&&b&&b((0,a.yW)((0,a.RV)(e)))},w=(0,s.A)({"--block-background-color":"rgb(255, 255, 255)","--block-box-shadow":"rgb(0 0 0 / 10%) 0 1px",width:170,borderRadius:6,background:"var(--block-background-color)",boxShadow:"var(--block-box-shadow)",position:"relative"},p);return(0,d.jsxs)("div",(0,s.A)({ref:t,className:[r,i].filter(Boolean).join(" "),style:w},m,{children:[u&&(0,d.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+f,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),(0,d.jsx)("div",{title:f,style:{backgroundColor:""+f,color:(0,a.OB)(f),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:f.toLocaleUpperCase()}),(0,d.jsx)(n.A,{colors:x,color:f,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:e=>{b&&b((0,a.yW)(e))}}),(0,d.jsx)(l.A,{value:f.toLocaleUpperCase(),onChange:(e,t)=>v(t),onBlur:e=>{var t=e.target.value;e.target.value=t.slice(0,6),v(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));p.displayName="Block";const g=p},1984:(e,t,r)=>{r.r(t),r.d(t,{Component:()=>d});var s=r(7804),o=r(411),i=r(3623),a=r(7980),l=r(9424);function n(){const{hsva:e,dispatch:t}=(0,s.useContext)(a.ob);return(0,l.jsxs)("div",{style:{minWidth:300,display:"flex",gap:"1rem"},children:[(0,l.jsx)(o.A,{color:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}}),(0,l.jsx)(o.A,{color:e,showTriangle:!1,onChange:r=>{t({hsva:{...e,...r.hsva}})}})]})}class d extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-block/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(158)]).then(r.bind(r,2158)),this.example=(0,l.jsx)(n,{})}}},3623:(e,t,r)=>{r.d(t,{A:()=>p});var s=r(7804),o=r(9203),i=r(3235),a=r(9424);const l=i.Ay.div`
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
`,h=i.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((e=>{this.setState({mdStr:e.default.source,mdObj:e.default})}))}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}}}]);
//# sourceMappingURL=984.4d54150f.chunk.js.map