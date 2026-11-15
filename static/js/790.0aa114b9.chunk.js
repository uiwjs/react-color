"use strict";(globalThis.webpackChunkwebsite||=[]).push([[790],{3623(t,e,r){r.d(e,{A:()=>p});var i=r(7804),s=r(5713),o=r(3235),a=r(9424);const n=o.Ay.div`
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
`,d=o.Ay.div`
  padding-bottom: 120px;
`,c=o.Ay.footer`
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
`;class p extends i.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(t=>{this.setState({mdStr:t.default.source,mdObj:t.default})})}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(n,{children:[this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(s.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},790(t,e,r){r.r(e),r.d(e,{Component:()=>d});var i=r(7804),s=r(6801),o=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:t,dispatch:e}=(0,i.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(s.A,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class d extends o.A{constructor(...t){super(...t),this.editorUrl="/packages/color-wheel/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(2108)]).then(()=>r(2108)),this.example=(0,n.jsx)(l,{})}}},6801(t,e,r){r.d(e,{A:()=>m});var i=r(8102),s=r(9257),o=r(7804),a=r(2945),n=r(1346),l=r(9424),d=t=>{var e=t.className,r=t.color,s=t.left,o=t.top,a=t.style,n=t.prefixCls,d=(0,i.A)({},a,{position:"absolute",top:o,left:s}),c=n+"-pointer "+(e||"");return(0,l.jsx)("div",{className:c,style:d,children:(0,l.jsx)("div",{className:n+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,l.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})},c=2*Math.PI,h=(t,e)=>Math.sqrt(t*t+e*e);function p(t){var e=t.width,r=void 0===e?0:e,i=r/2;return{width:r,radius:i,cx:i,cy:i}}function u(t){var e=t.width;return(void 0===e?0:e)/2}function x(t,e,r){var i,s=t.angle||0,o=t.direction;return r&&"clockwise"===o?e=s+e:"clockwise"===o?e=360-s+e:r&&"anticlockwise"===o?e=s+180-e:"anticlockwise"===o&&(e=s-e),(e%(i=360)+i)%i}var g=["prefixCls","radius","pointer","className","style","width","height","oval","direction","angle","color","onChange"],b=o.forwardRef((t,e)=>{var r=t.prefixCls,o=void 0===r?"w-color-wheel":r,b=(t.radius,t.pointer),m=t.className,v=t.style,f=t.width,j=void 0===f?200:f,w=t.height,y=void 0===w?200:w,k=t.oval,A=t.direction,M=void 0===A?"anticlockwise":A,C=t.angle,_=void 0===C?180:C,R=t.color,S=t.onChange,N=(0,s.A)(t,g),E="string"===typeof R&&(0,a.Am)(R)?(0,a.RV)(R):R||{},U=R?(0,a.D9)(E):"",D={width:j,direction:M,angle:_},z=function(t,e){var r=p(t),i=r.cx,s=r.cy,o=u(t),a=(180+x(t,e.h,!0))*(c/360),n=e.s/100*o,l="clockwise"===t.direction?-1:1;return{x:i+n*Math.cos(a)*l,y:s+n*Math.sin(a)*l}}(D,E),I={top:"0",left:"0",color:U},O=(t,e)=>{var r=function(t,e,r){var i=p(t),s=i.cx,o=i.cy,a=u(t);e=s-e,r=o-r;var n=x(t,Math.atan2(-r,-e)*(360/c)),l=Math.min(h(e,r),a);return{h:Math.round(n),s:Math.round(100/a*l)}}(D,t.x,t.y),i={h:r.h,s:r.s,v:E.v,a:E.a};S&&S((0,a.yW)(i))},X={zIndex:1,position:"absolute",transform:"translate("+z.x+"px, "+z.y+"px) "+("x"===k||"X"===k?"scaleY(2)":"y"===k||"Y"===k?"scaleX(2)":"")},Y=b&&"function"===typeof b?b((0,i.A)({prefixCls:o,style:X},I)):(0,l.jsx)(d,(0,i.A)({prefixCls:o,style:X},I));return(0,l.jsxs)(n.A,(0,i.A)({className:[o,m||""].filter(Boolean).join(" ")},N,{style:(0,i.A)({position:"relative",width:j,transform:"x"===k||"X"===k?"scaleY(0.5)":"y"===k||"Y"===k?"scaleX(0.5)":"",height:y},v),ref:e,onMove:O,onDown:O,children:[Y,(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===M?"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)":"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",transform:"rotateZ("+(90-_)+"deg)",inset:0}}),(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,l.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof E.v?1-E.v/100:0}})]}))});b.displayName="Wheel";const m=b}}]);
//# sourceMappingURL=790.0aa114b9.chunk.js.map