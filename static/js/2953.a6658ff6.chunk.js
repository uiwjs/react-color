"use strict";(globalThis.webpackChunkwebsite||=[]).push([[2953],{3623(e,r,t){t.d(r,{A:()=>p});var s=t(7804),o=t(5713),i=t(3235),a=t(9424);const l=i.Ay.div`
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
`;class p extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:r,data:t}=this.state.mdObj||{};return(0,a.jsxs)(c,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:t,components:r,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},2953(e,r,t){t.r(r),t.d(r,{Component:()=>d});var s=t(7804),o=t(6966),i=t(2945),a=t(3623),l=t(7980),n=t(9424);function c(){const{hsva:e,dispatch:r}=(0,s.useContext)(l.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(o.A,{colors:["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],color:(0,i.D9)(e),onChange:e=>{r({hsva:{...e,...e}})}})})}class d extends a.A{constructor(...e){super(...e),this.editorUrl="/packages/color-swatch/README.md",this.getMdStr=()=>Promise.all([t.e(3968),t.e(2135)]).then(()=>t(2135)),this.example=(0,n.jsx)(c,{})}}},6966(e,r,t){var s=t(8102),o=t(9257),i=t(7804),a=t(2945),l=t(9424),n=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=i.forwardRef((e,r)=>{var t=e.prefixCls,c=void 0===t?"w-color-swatch":t,d=e.className,h=e.color,p=e.colors,g=void 0===p?[]:p,u=e.style,x=e.rectProps,m=void 0===x?{}:x,b=e.onChange,j=e.addonAfter,v=e.addonBefore,f=e.rectRender,w=(0,o.A)(e,n),k=(0,s.A)({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},m.style),A=(e,r)=>{b&&b((0,a.RV)(e),(0,a.yW)((0,a.RV)(e)),r)};return(0,l.jsxs)("div",(0,s.A)({ref:r},w,{className:[c,d||""].filter(Boolean).join(" "),style:(0,s.A)({display:"flex",flexWrap:"wrap",position:"relative"},u),children:[v&&i.isValidElement(v)&&v,g&&Array.isArray(g)&&g.map((e,r)=>{var t="",o="";"string"===typeof e&&(t=e,o=e),"object"===typeof e&&e.color&&(t=e.title||e.color,o=e.color);var a=h&&h.toLocaleLowerCase()===o.toLocaleLowerCase(),n=f&&f({title:t,color:o,checked:!!a,style:(0,s.A)({},k,{background:o}),onClick:e=>A(o,e)});if(n)return(0,l.jsx)(i.Fragment,{children:n},r);var c=m.children&&i.isValidElement(m.children)?i.cloneElement(m.children,{color:o,checked:a}):null;return(0,l.jsx)("div",(0,s.A)({tabIndex:0,title:t,onClick:e=>A(o,e)},m,{children:c,style:(0,s.A)({},k,{background:o})}),r)}),j&&i.isValidElement(j)&&j]}))});c.displayName="Swatch";const d=c;t.d(r,["A",0,d])}}]);
//# sourceMappingURL=2953.a6658ff6.chunk.js.map