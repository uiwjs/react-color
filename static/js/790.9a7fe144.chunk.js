"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[790],{790:(t,e,r)=>{r.r(e),r.d(e,{Component:()=>c});var s=r(7804),i=r(6801),o=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(i.A,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class c extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-wheel/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(108)]).then(r.bind(r,2108)),this.example=(0,n.jsx)(l,{})}}},3623:(t,e,r)=>{r.d(e,{A:()=>p});var s=r(7804),i=r(9203),o=r(3235),a=r(9424);const n=o.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
`,l=o.Ay.a`
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(c,{className:"wmde-markdown-var",children:[(0,a.jsxs)(n,{children:[this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(i.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},6801:(t,e,r)=>{r.d(e,{A:()=>m});var s=r(8102),i=r(9257),o=r(7804),a=r(2945),n=r(1346),l=r(9424),c=t=>{var{className:e,color:r,left:i,top:o,style:a,prefixCls:n}=t,c=(0,s.A)({},a,{position:"absolute",top:o,left:i}),d=n+"-pointer "+(e||"");return(0,l.jsx)("div",{className:d,style:c,children:(0,l.jsx)("div",{className:n+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,l.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})},d=2*Math.PI,h=(t,e)=>Math.sqrt(t*t+e*e);function p(t){var{width:e=0}=t,r=e/2;return{width:e,radius:r,cx:r,cy:r}}function u(t){var{width:e=0}=t;return e/2}function x(t,e,r){var s,i=t.angle||0,o=t.direction;return r&&"clockwise"===o?e=i+e:"clockwise"===o?e=360-i+e:r&&"anticlockwise"===o?e=i+180-e:"anticlockwise"===o&&(e=i-e),(e%(s=360)+s)%s}var g=["prefixCls","radius","pointer","className","style","width","height","oval","direction","angle","color","onChange"],b=o.forwardRef(((t,e)=>{var{prefixCls:r="w-color-wheel",radius:o=0,pointer:b,className:m,style:f,width:w=200,height:j=200,oval:v,direction:y="anticlockwise",angle:k=180,color:A,onChange:C}=t,M=(0,i.A)(t,g),_="string"===typeof A&&(0,a.Am)(A)?(0,a.RV)(A):A||{},R=A?(0,a.D9)(_):"",S=function(t,e){var{cx:r,cy:s}=p(t),i=u(t),o=(180+x(t,e.h,!0))*(d/360),a=e.s/100*i,n="clockwise"===t.direction?-1:1;return{x:r+a*Math.cos(o)*n,y:s+a*Math.sin(o)*n}}({width:w},_),N={top:"0",left:"0",color:R},E=(t,e)=>{var r=function(t,e,r){var{cx:s,cy:i}=p(t),o=u(t);e=s-e,r=i-r;var a=x(t,Math.atan2(-r,-e)*(360/d)),n=Math.min(h(e,r),o);return{h:Math.round(a),s:Math.round(100/o*n)}}({width:w},w-t.x,j-t.y),s={h:r.h,s:r.s,v:_.v,a:_.a};C&&C((0,a.yW)(s))},U={zIndex:1,transform:"translate("+S.x+"px, "+S.y+"px) "+("x"===v||"X"===v?"scaleY(2)":"y"===v||"Y"===v?"scaleX(2)":"")},D=b&&"function"===typeof b?b((0,s.A)({prefixCls:r,style:U},N)):(0,l.jsx)(c,(0,s.A)({prefixCls:r,style:U},N));return(0,l.jsxs)(n.Ay,(0,s.A)({className:[r,m||""].filter(Boolean).join(" ")},M,{style:(0,s.A)({position:"relative",width:w,transform:"x"===v||"X"===v?"scaleY(0.5)":"y"===v||"Y"===v?"scaleX(0.5)":"",height:j},f),ref:e,onMove:E,onDown:E,children:[D,(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===y?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(k+90)+"deg)",inset:0}}),(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,l.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof _.v?1-_.v/100:0}})]}))}));b.displayName="Wheel";const m=b}}]);
//# sourceMappingURL=790.9a7fe144.chunk.js.map