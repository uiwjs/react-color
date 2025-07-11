"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[369],{1369:(e,t,r)=>{r.r(t),r.d(t,{Component:()=>c});var s=r(7804),o=r(4590),i=r(3623),a=r(7980),l=r(9424);function n(){const{hsva:e,dispatch:t}=(0,s.useContext)(a.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(o.A,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],color:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}})})}class c extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-circle/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(919)]).then(r.bind(r,2919)),this.example=(0,l.jsx)(n,{})}}},3623:(e,t,r)=>{r.d(t,{A:()=>p});var s=r(7804),o=r(5789),i=r(3235),a=r(9424);const l=i.Ay.div`
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
`,c=i.Ay.div`
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
`,h=i.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,a.jsxs)(c,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},4590:(e,t,r)=>{r.d(t,{A:()=>g});var s=r(9520),o=r(8102),i=r(9257),a=r(7804),l=r(2945),n=r(6966),c=r(9424);function d(e){var{style:t,className:r,title:s,checked:i,color:l,onClick:n,rectProps:d}=e,h=(0,a.useRef)(null),p=(0,a.useCallback)(()=>{h.current.style.transform="scale(1.2)"},[]),g=(0,a.useCallback)(()=>{h.current.style.transform="scale(1)"},[]),u=(0,o.A)({"--circle-point-background-color":"#fff",height:i?"100%":0,width:i?"100%":0,borderRadius:"50%",backgroundColor:"var(--circle-point-background-color)",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},d.style);return(0,c.jsx)("div",{ref:h,onClick:n,onMouseEnter:p,onMouseLeave:g,title:s,className:r,style:(0,o.A)({padding:3,marginRight:12,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",boxSizing:"border-box",transform:"scale(1)",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"},t,{boxShadow:l+" 0px 0px "+(i?5:0)+"px"}),children:(0,c.jsx)("div",(0,o.A)({},d,{style:u}))})}var h=["prefixCls","className","color","colors","rectProps","pointProps","onChange"],p=a.forwardRef((e,t)=>{var{prefixCls:r="w-color-circle",className:a,color:p,colors:g=[],rectProps:u={},pointProps:b={},onChange:x}=e,m=(0,i.A)(e,h),f="string"===typeof p&&(0,l.Am)(p)?(0,l.RV)(p):p||{},j=p?(0,l.D9)(f):"",w=[r,a].filter(Boolean).join(" "),v=[r+"-point",null==b?void 0:b.className].filter(Boolean).join(" ");return(0,c.jsx)(n.A,(0,o.A)({ref:t,colors:g,color:j},m,{className:w,rectRender:e=>{var t=(0,o.A)({},((0,s.A)(e),e));return(0,c.jsx)(d,(0,o.A)({},t,b,{style:(0,o.A)({},t.style,b.style),className:v,rectProps:u}))},onChange:e=>{x&&x((0,l.yW)(e))}}))});p.displayName="Circle";const g=p},9520:(e,t,r)=>{function s(e){if(null==e)throw new TypeError("Cannot destructure "+e)}r.d(t,{A:()=>s})}}]);
//# sourceMappingURL=369.a8f1319e.chunk.js.map