"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[434],{11:(t,e,r)=>{r.d(e,{A:()=>g});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),l=r(5991),n=r(6436),d=r(9424),h=["prefixCls","className","style","color","onChange"],c={boxShadow:"initial",borderWidth:"0 0 1px 0",borderBottomColor:"var(--material-border-bottom-color)",borderBottomStyle:"solid",height:30,outline:0,fontSize:15,padding:0},p=i.forwardRef((t,e)=>{var{prefixCls:r="w-color-material",className:i,style:p,color:g,onChange:m}=t,u=(0,o.A)(t,h),b="string"===typeof g&&(0,a.Am)(g)?(0,a.RV)(g):g,x=g?(0,a.D9)(b).replace(/^#/,""):"",f=(t,e)=>{"string"===typeof t&&(0,a.Am)(t)&&/(3|6)/.test(String(t.length))&&m&&m((0,a.yW)((0,a.RV)(t)))},j=(0,s.A)({"--material-border-bottom-color":"#eee","--material-background-color":"#fff",padding:16,width:98,fontFamily:"Roboto",backgroundColor:"var(--material-background-color)"},p);return(0,d.jsxs)("div",(0,s.A)({ref:e,className:[r,i||""].filter(Boolean).join(" "),style:j},u,{children:[(0,d.jsx)(l.A,{label:"Hex",value:x.toLocaleUpperCase(),onChange:(t,e)=>f(e),onBlur:t=>{var e=t.target.value;t.target.value=e.slice(0,6),f(e.slice(0,6))},inputStyle:{outline:0,border:0,height:30,fontSize:15,padding:0,boxShadow:"initial",borderWidth:"0 0 2px 0",borderBottomColor:x?"#"+x:"var(--material-border-bottom-color)",borderBottomStyle:"solid",background:"transparent"},style:{flexDirection:"column-reverse",alignItems:"flex-start"}}),(0,d.jsx)(n.A,{hsva:b,placement:"top",style:{marginTop:11},rProps:{style:{alignItems:"flex-start"},inputStyle:(0,s.A)({},c)},gProps:{style:{alignItems:"flex-start"},inputStyle:(0,s.A)({},c)},bProps:{style:{alignItems:"flex-start"},inputStyle:(0,s.A)({},c)},aProps:!1,onChange:t=>{return e=t.hsva,void(m&&m((0,a.yW)(e)));var e}})]}))});p.displayName="Material";const g=p},3434:(t,e,r)=>{r.r(e),r.d(e,{Component:()=>d});var s=r(7804),o=r(11),i=r(3623),a=r(7980),l=r(9424);function n(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(o.A,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class d extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-material/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(716)]).then(r.bind(r,716)),this.example=(0,l.jsx)(n,{})}}},3623:(t,e,r)=>{r.d(e,{A:()=>p});var s=r(7804),o=r(5789),i=r(3235),a=r(9424);const l=i.Ay.div`
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(c,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}}}]);
//# sourceMappingURL=434.49e49378.chunk.js.map