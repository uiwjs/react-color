"use strict";(globalThis.webpackChunkwebsite||=[]).push([[1369],{3623(t,e,s){s.d(e,{A:()=>p});var r=s(7804),i=s(5713),o=s(3235),l=s(9424);const a=o.Ay.div`
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
`;class p extends r.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:s}=this.state.mdObj||{};return(0,l.jsxs)(c,{className:"wmde-markdown-var",children:[(0,l.jsxs)(a,{children:[this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,l.jsxs)(h,{children:[(0,l.jsx)("h3",{children:"Example"}),this.example]}),(0,l.jsx)(i.A,{data:{data:s,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,l.jsxs)(d,{children:[(0,l.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,l.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,l.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,l.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1369(t,e,s){s.r(e),s.d(e,{Component:()=>c});var r=s(7804),i=s(4590),o=s(3623),l=s(7980),a=s(9424);function n(){const{hsva:t,dispatch:e}=(0,r.useContext)(l.ob);return(0,a.jsx)("div",{style:{width:256},children:(0,a.jsx)(i.A,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],color:t,onChange:s=>{e({hsva:{...t,...s.hsva}})}})})}class c extends o.A{constructor(...t){super(...t),this.editorUrl="/packages/color-circle/README.md",this.getMdStr=()=>Promise.all([s.e(3968),s.e(606)]).then(()=>s(606)),this.example=(0,a.jsx)(n,{})}}},4590(t,e,s){s.d(e,{A:()=>g});var r=s(9520),i=s(8102),o=s(9257),l=s(7804),a=s(2945),n=s(6966),c=s(9424);function d(t){var e,s,r,o=t.style,a=t.className,n=t.title,d=t.checked,h=t.color,p=t.onClick,g=t.rectProps,u=(0,l.useRef)(null),m=(0,l.useCallback)(()=>{u.current.style.transform="scale(1.2)"},[]),b=(0,l.useCallback)(()=>{u.current.style.transform="scale(1)"},[]),x=(null==g||null==(e=g.style)?void 0:e.width)||"100%",f=(null==g||null==(s=g.style)?void 0:s.height)||"100%",j=(0,i.A)({"--circle-point-background-color":"#fff",backgroundColor:"var(--circle-point-background-color)",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},g.style,{borderRadius:(null==g||null==(r=g.style)?void 0:r.borderRadius)||"50%",height:d?f:0,width:d?x:0});return(0,c.jsx)("div",{ref:u,onClick:p,onMouseEnter:m,onMouseLeave:b,title:n,className:a,style:(0,i.A)({padding:3,marginRight:12,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",boxSizing:"border-box",transform:"scale(1)",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"},o,{boxShadow:h+" 0px 0px "+(d?5:0)+"px"}),children:(0,c.jsx)("div",(0,i.A)({},g,{style:j}))})}var h=["prefixCls","className","color","colors","rectProps","pointProps","style","onChange"],p=l.forwardRef((t,e)=>{var s,l,p,g,u,m=t.prefixCls,b=void 0===m?"w-color-circle":m,x=t.className,f=t.color,j=t.colors,v=void 0===j?[]:j,y=t.rectProps,w=void 0===y?{}:y,k=t.pointProps,A=void 0===k?{}:k,C=t.style,_=void 0===C?{}:C,R=t.onChange,S=(0,o.A)(t,h),M="string"===typeof f&&(0,a.Am)(f)?(0,a.RV)(f):f||{},E=f?(0,a.D9)(M):"",N=[b,x].filter(Boolean).join(" "),P=[b+"-point",null==A?void 0:A.className].filter(Boolean).join(" ");return A.style=A.style||{},A.style.borderRadius=(null==(s=A.style)?void 0:s.borderRadius)||"50%",A.style.width=(null==(l=A.style)?void 0:l.width)||26,A.style.height=(null==(p=A.style)?void 0:p.height)||26,A.style.marginRight=(null==(g=A.style)?void 0:g.marginRight)||0,A.style.marginBottom=(null==(u=A.style)?void 0:u.marginBottom)||0,_.gap=_.gap||10,(0,c.jsx)(n.A,(0,i.A)({ref:e,colors:v,color:E,style:_},S,{className:N,rectRender:t=>{var e=(0,i.A)({},((0,r.A)(t),t));return(0,c.jsx)(d,(0,i.A)({},e,A,{style:(0,i.A)({},e.style,A.style),className:P,rectProps:w}))},onChange:t=>{R&&R((0,a.yW)(t))}}))});p.displayName="Circle";const g=p},9520(t,e,s){function r(t){if(null==t)throw new TypeError("Cannot destructure "+t)}s.d(e,{A:()=>r})}}]);
//# sourceMappingURL=1369.0c07c31d.chunk.js.map