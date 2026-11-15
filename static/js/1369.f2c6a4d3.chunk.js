"use strict";(globalThis.webpackChunkwebsite||=[]).push([[1369],{3623(e,r,t){t.d(r,{A:()=>p});var o=t(7804),s=t(5713),i=t(3235),l=t(9424);const a=i.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
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
  padding: 0 16px 80px;
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
  border-bottom: 1px solid var(--line, var(--color-border-default));
  border-radius: 18px 18px 0 0;
  padding: 22px 22px 28px;
  > h3 {
    margin: 0;
    padding-bottom: 14px;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted, #6e655c);
  }
`;class p extends o.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:r,data:t}=this.state.mdObj||{};return(0,l.jsxs)(c,{className:"wmde-markdown-var",children:[(0,l.jsxs)(a,{children:[this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,l.jsxs)(h,{children:[(0,l.jsx)("h3",{children:"Example"}),this.example]}),(0,l.jsx)(s.A,{data:{data:t,components:r,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,l.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,l.jsxs)(d,{children:[(0,l.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,l.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,l.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,l.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,l.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,l.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1369(e,r,t){t.r(r),t.d(r,{Component:()=>c});var o=t(7804),s=t(4590),i=t(3623),l=t(7980),a=t(9424);function n(){const{hsva:e,dispatch:r}=(0,o.useContext)(l.ob);return(0,a.jsx)("div",{style:{width:256},children:(0,a.jsx)(s.A,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],color:e,onChange:t=>{r({hsva:{...e,...t.hsva}})}})})}class c extends i.A{constructor(...e){super(...e),this.editorUrl="/packages/color-circle/README.md",this.getMdStr=()=>Promise.all([t.e(3968),t.e(606)]).then(()=>t(606)),this.example=(0,a.jsx)(n,{})}}},4590(e,r,t){t.d(r,{A:()=>g});var o=t(9520),s=t(8102),i=t(9257),l=t(7804),a=t(2945),n=t(6966),c=t(9424);function d(e){var r,t,o,i=e.style,a=e.className,n=e.title,d=e.checked,h=e.color,p=e.onClick,g=e.rectProps,u=(0,l.useRef)(null),m=(0,l.useCallback)(()=>{u.current.style.transform="scale(1.2)"},[]),x=(0,l.useCallback)(()=>{u.current.style.transform="scale(1)"},[]),b=(null==g||null==(r=g.style)?void 0:r.width)||"100%",f=(null==g||null==(t=g.style)?void 0:t.height)||"100%",v=(0,s.A)({"--circle-point-background-color":"#fff",backgroundColor:"var(--circle-point-background-color)",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},g.style,{borderRadius:(null==g||null==(o=g.style)?void 0:o.borderRadius)||"50%",height:d?f:0,width:d?b:0});return(0,c.jsx)("div",{ref:u,onClick:p,onMouseEnter:m,onMouseLeave:x,title:n,className:a,style:(0,s.A)({padding:3,marginRight:12,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",boxSizing:"border-box",transform:"scale(1)",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"},i,{boxShadow:h+" 0px 0px "+(d?5:0)+"px"}),children:(0,c.jsx)("div",(0,s.A)({},g,{style:v}))})}var h=["prefixCls","className","color","colors","rectProps","pointProps","style","onChange"],p=l.forwardRef((e,r)=>{var t,l,p,g,u,m=e.prefixCls,x=void 0===m?"w-color-circle":m,b=e.className,f=e.color,v=e.colors,y=void 0===v?[]:v,j=e.rectProps,w=void 0===j?{}:j,k=e.pointProps,A=void 0===k?{}:k,C=e.style,R=void 0===C?{}:C,_=e.onChange,E=(0,i.A)(e,h),N="string"===typeof f&&(0,a.Am)(f)?(0,a.RV)(f):f||{},S=f?(0,a.D9)(N):"",M=[x,b].filter(Boolean).join(" "),B=[x+"-point",null==A?void 0:A.className].filter(Boolean).join(" ");return A.style=A.style||{},A.style.borderRadius=(null==(t=A.style)?void 0:t.borderRadius)||"50%",A.style.width=(null==(l=A.style)?void 0:l.width)||26,A.style.height=(null==(p=A.style)?void 0:p.height)||26,A.style.marginRight=(null==(g=A.style)?void 0:g.marginRight)||0,A.style.marginBottom=(null==(u=A.style)?void 0:u.marginBottom)||0,R.gap=R.gap||10,(0,c.jsx)(n.A,(0,s.A)({ref:r,colors:y,color:S,style:R},E,{className:M,rectRender:e=>{var r=(0,s.A)({},((0,o.A)(e),e));return(0,c.jsx)(d,(0,s.A)({},r,A,{style:(0,s.A)({},r.style,A.style),className:B,rectProps:w}))},onChange:e=>{_&&_((0,a.yW)(e))}}))});p.displayName="Circle";const g=p},6966(e,r,t){var o=t(8102),s=t(9257),i=t(7804),l=t(2945),a=t(9424),n=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=i.forwardRef((e,r)=>{var t=e.prefixCls,c=void 0===t?"w-color-swatch":t,d=e.className,h=e.color,p=e.colors,g=void 0===p?[]:p,u=e.style,m=e.rectProps,x=void 0===m?{}:m,b=e.onChange,f=e.addonAfter,v=e.addonBefore,y=e.rectRender,j=(0,s.A)(e,n),w=(0,o.A)({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},x.style),k=(e,r)=>{b&&b((0,l.RV)(e),(0,l.yW)((0,l.RV)(e)),r)};return(0,a.jsxs)("div",(0,o.A)({ref:r},j,{className:[c,d||""].filter(Boolean).join(" "),style:(0,o.A)({display:"flex",flexWrap:"wrap",position:"relative"},u),children:[v&&i.isValidElement(v)&&v,g&&Array.isArray(g)&&g.map((e,r)=>{var t="",s="";"string"===typeof e&&(t=e,s=e),"object"===typeof e&&e.color&&(t=e.title||e.color,s=e.color);var l=h&&h.toLocaleLowerCase()===s.toLocaleLowerCase(),n=y&&y({title:t,color:s,checked:!!l,style:(0,o.A)({},w,{background:s}),onClick:e=>k(s,e)});if(n)return(0,a.jsx)(i.Fragment,{children:n},r);var c=x.children&&i.isValidElement(x.children)?i.cloneElement(x.children,{color:s,checked:l}):null;return(0,a.jsx)("div",(0,o.A)({tabIndex:0,title:t,onClick:e=>k(s,e)},x,{children:c,style:(0,o.A)({},w,{background:s})}),r)}),f&&i.isValidElement(f)&&f]}))});c.displayName="Swatch";const d=c;t.d(r,["A",0,d])},9520(e,r,t){function o(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(r,{A:()=>o})}}]);
//# sourceMappingURL=1369.f2c6a4d3.chunk.js.map