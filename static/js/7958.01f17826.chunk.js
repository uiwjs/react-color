"use strict";(globalThis.webpackChunkwebsite||=[]).push([[7958],{3623(t,e,r){r.d(e,{A:()=>p});var s=r(7804),i=r(5713),o=r(3235),a=r(9424);const l=o.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
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
  padding: 0 16px 80px;
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(l,{children:[this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(c,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(i.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(n,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},7958(t,e,r){r.r(e),r.d(e,{Component:()=>d});var s=r(7804),i=r(4883),o=r(3623),a=r(7980),l=r(9424);function n(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,l.jsx)("div",{style:{width:256},children:(0,l.jsx)(i.A,{color:t,onChange:r=>{e({hsva:{...t,...r.hsv}})}})})}class d extends o.A{constructor(...t){super(...t),this.editorUrl="/packages/color-slider/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(3051)]).then(()=>r(3051)),this.example=(0,l.jsx)(n,{})}}},4883(t,e,r){var s=r(8102),i=r(9257),o=r(7804),a=r(2945),l=r(9424),n=["prefixCls","className","style","onChange","color","customColorShades","lightness"],d=t=>"string"===typeof t&&(0,a.Am)(t)?(0,a.RV)(t):t||{},h=function(t,e,r){return void 0===r&&(r=2),Math.abs(t-e)<=r},c=o.forwardRef((t,e)=>{var r=t.prefixCls,o=void 0===r?"w-color-slider":r,c=t.className,p=t.style,g=t.onChange,u=t.color,x=t.customColorShades,m=void 0===x?[{color:"#000000",lightness:[50,40,30,20,10]},{color:"#ffffff",lightness:[95,90,80,70,60]}]:x,b=t.lightness,v=void 0===b?[80,65,50,35,20]:b,j=(0,i.A)(t,n),f=d(u),w=m.find(t=>{var e=((t,e,r)=>{var s=h(t.h,e.h)&&h(t.s,e.s)&&h(t.a,e.a);return!(!s||!h(t.v,e.v))||!!r&&s&&r.some(t=>h(e.v,t))})(d(t.color),f,t.lightness);return e}),k=w?w.lightness:v;return(0,l.jsx)("div",(0,s.A)({ref:e,style:(0,s.A)({display:"flex"},p),className:[o,c||""].filter(Boolean).join(" ")},j,{children:k.map((t,e)=>{var r=(0,s.A)({},f,{v:t}),i=(0,a.ss)(r),o="rgba("+i.r+", "+i.g+", "+i.b+", "+i.a+")",n=o===(0,a.db)(f);return(0,l.jsx)("div",{style:{paddingLeft:1,width:100/k.length+"%",boxSizing:"border-box"},children:(0,l.jsx)("div",{onClick:t=>((t,e)=>{var r=(0,a.Dy)(t);g&&g((0,a.yW)(r),e)})(o,t),style:(0,s.A)({backgroundColor:o,height:12,cursor:"pointer"},n?{borderRadius:2,transform:"scale(1, 1.5)"}:{})})},e)})}))});c.displayName="Slider";const p=c;r.d(e,["A",0,p])}}]);
//# sourceMappingURL=7958.01f17826.chunk.js.map