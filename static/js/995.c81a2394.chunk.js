(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[995],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,r)=>{"use strict";r.d(e,{A:()=>p});var s=r(7804),o=r(52),i=r(3235),a=r(9424);const l=i.Ay.div`
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
`,n=i.Ay.div`
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(n,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(d,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(d,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1984:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Component:()=>n});var s=r(7804),o=r(411),i=r(3623),a=r(7980),l=r(9424);function d(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,l.jsx)("div",{style:{width:300},children:(0,l.jsx)(o.default,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class n extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-block/README.md",this.getMdStr=()=>r.e(158).then(r.bind(r,2158)),this.example=(0,l.jsx)(d,{})}}},411:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),l=r(5991),d=r(6966),n=r(9424),c=["prefixCls","className","style","color","colors","onChange"],h=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],p=i.forwardRef(((t,e)=>{var{prefixCls:r="w-color-block",className:i,style:p,color:g,colors:u=h,onChange:x}=t,b=(0,o.A)(t,c),m="string"===typeof g&&(0,a.validHex)(g)?(0,a.hexToHsva)(g):g,f=g?(0,a.hsvaToHex)(m):"",j=(t,e)=>{"string"===typeof t&&(0,a.validHex)(t)&&/(3|6)/.test(String(t.replace(/^#/,"").length))&&x&&x((0,a.color)((0,a.hexToHsva)(t)))},v=(0,s.A)({"--block-background-color":"rgb(255, 255, 255)","--block-box-shadow":"rgb(0 0 0 / 10%) 0 1px",width:170,borderRadius:6,background:"var(--block-background-color)",boxShadow:"var(--block-box-shadow)",position:"relative"},p);return(0,n.jsxs)("div",(0,s.A)({ref:e,className:[r,i].filter(Boolean).join(" "),style:v},b,{children:[(0,n.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+f,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),(0,n.jsx)("div",{title:f,style:{backgroundColor:""+f,color:(0,a.getContrastingColor)(f),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:f.toLocaleUpperCase()}),(0,n.jsx)(d.default,{colors:u,color:f,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:t=>{x&&x((0,a.color)(t))}}),(0,n.jsx)(l.default,{value:f.toLocaleUpperCase(),onChange:(t,e)=>j(e),onBlur:t=>{var e=t.target.value;t.target.value=e.slice(0,6),j(e.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));p.displayName="Block";const g=p}}]);
//# sourceMappingURL=995.c81a2394.chunk.js.map