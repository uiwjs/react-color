"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[369],{1369:(e,t,s)=>{s.r(t),s.d(t,{Component:()=>c});var r=s(7804),i=s(4590),o=s(3623),l=s(7980),a=s(9424);function n(){const{hsva:e,dispatch:t}=(0,r.useContext)(l.ob);return(0,a.jsx)("div",{style:{width:256},children:(0,a.jsx)(i.A,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],color:e,onChange:s=>{t({hsva:{...e,...s.hsva}})}})})}class c extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-circle/README.md",this.getMdStr=()=>Promise.all([s.e(968),s.e(919)]).then(s.bind(s,2919)),this.example=(0,a.jsx)(n,{})}}},3623:(e,t,s)=>{s.d(t,{A:()=>p});var r=s(7804),i=s(5789),o=s(3235),l=s(9424);const a=o.Ay.div`
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
`,c=o.Ay.div`
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
`,h=o.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class p extends r.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:s}=this.state.mdObj||{};return(0,l.jsxs)(c,{className:"wmde-markdown-var",children:[(0,l.jsxs)(a,{children:[this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,l.jsxs)(h,{children:[(0,l.jsx)("h3",{children:"Example"}),this.example]}),(0,l.jsx)(i.A,{data:{data:s,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,l.jsxs)(d,{children:[(0,l.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,l.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,l.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,l.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},4590:(e,t,s)=>{s.d(t,{A:()=>u});var r=s(9520),i=s(8102),o=s(9257),l=s(7804),a=s(2945),n=s(6966),c=s(9424);function d(e){var t,s,r,{style:o,className:a,title:n,checked:d,color:h,onClick:p,rectProps:u}=e,g=(0,l.useRef)(null),m=(0,l.useCallback)(()=>{g.current.style.transform="scale(1.2)"},[]),b=(0,l.useCallback)(()=>{g.current.style.transform="scale(1)"},[]),x=(null==u||null==(t=u.style)?void 0:t.width)||"100%",f=(null==u||null==(s=u.style)?void 0:s.height)||"100%",j=(0,i.A)({"--circle-point-background-color":"#fff",backgroundColor:"var(--circle-point-background-color)",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},u.style,{borderRadius:(null==u||null==(r=u.style)?void 0:r.borderRadius)||"50%",height:d?f:0,width:d?x:0});return(0,c.jsx)("div",{ref:g,onClick:p,onMouseEnter:m,onMouseLeave:b,title:n,className:a,style:(0,i.A)({padding:3,marginRight:12,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",boxSizing:"border-box",transform:"scale(1)",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"},o,{boxShadow:h+" 0px 0px "+(d?5:0)+"px"}),children:(0,c.jsx)("div",(0,i.A)({},u,{style:j}))})}var h=["prefixCls","className","color","colors","rectProps","pointProps","style","onChange"],p=l.forwardRef((e,t)=>{var s,l,p,u,g,{prefixCls:m="w-color-circle",className:b,color:x,colors:f=[],rectProps:j={},pointProps:v={},style:y={},onChange:w}=e,k=(0,o.A)(e,h),A="string"===typeof x&&(0,a.Am)(x)?(0,a.RV)(x):x||{},C=x?(0,a.D9)(A):"",_=[m,b].filter(Boolean).join(" "),R=[m+"-point",null==v?void 0:v.className].filter(Boolean).join(" ");return v.style=v.style||{},v.style.borderRadius=(null==(s=v.style)?void 0:s.borderRadius)||"50%",v.style.width=(null==(l=v.style)?void 0:l.width)||26,v.style.height=(null==(p=v.style)?void 0:p.height)||26,v.style.marginRight=(null==(u=v.style)?void 0:u.marginRight)||0,v.style.marginBottom=(null==(g=v.style)?void 0:g.marginBottom)||0,y.gap=y.gap||10,(0,c.jsx)(n.A,(0,i.A)({ref:t,colors:f,color:C,style:y},k,{className:_,rectRender:e=>{var t=(0,i.A)({},((0,r.A)(e),e));return(0,c.jsx)(d,(0,i.A)({},t,v,{style:(0,i.A)({},t.style,v.style),className:R,rectProps:j}))},onChange:e=>{w&&w((0,a.yW)(e))}}))});p.displayName="Circle";const u=p},9520:(e,t,s)=>{function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}s.d(t,{A:()=>r})}}]);
//# sourceMappingURL=369.8dc2c73e.chunk.js.map