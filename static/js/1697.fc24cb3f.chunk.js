"use strict";(globalThis.webpackChunkwebsite||=[]).push([[1697],{3623(e,t,r){r.d(t,{A:()=>h});var s=r(7804),a=r(5713),o=r(3235),i=r(9424);const n=o.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
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
  padding: 0 16px 80px;
`,u=o.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,d=o.Ay.div`
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
`;class h extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,i.jsxs)(c,{className:"wmde-markdown-var",children:[(0,i.jsxs)(n,{children:[this.editorUrl&&(0,i.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,i.jsxs)(d,{children:[(0,i.jsx)("h3",{children:"Example"}),this.example]}),(0,i.jsx)(a.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,i.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,i.jsxs)(u,{children:[(0,i.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,i.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,i.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,i.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,i.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1697(e,t,r){r.r(t),r.d(t,{Component:()=>c});var s=r(7804),a=r(2084),o=r(3623),i=r(7980),n=r(9424);function l(){const{hsva:e,dispatch:t}=(0,s.useContext)(i.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(a.A,{hsva:e,onChange:r=>{t({hsva:{...e,...r,a:e.a}})}})})}class c extends o.A{constructor(...e){super(...e),this.editorUrl="/packages/color-saturation/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(5939)]).then(()=>r(5939)),this.example=(0,n.jsx)(l,{})}}},2084(e,t,r){r.d(t,{A:()=>h});var s=r(8102),a=r(9257),o=r(7804),i=r(2945),n=r(1346),l=r(9424),c=e=>{var t=e.className,r=e.color,s=e.left,a=e.top,i=e.prefixCls,n={position:"absolute",top:a,left:s},c={"--saturation-pointer-box-shadow":"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"var(--saturation-pointer-box-shadow)",borderRadius:"50%",backgroundColor:r};return(0,o.useMemo)(()=>(0,l.jsx)("div",{className:i+"-pointer "+(t||""),style:n,children:(0,l.jsx)("div",{className:i+"-fill",style:c})}),[a,s,r,t,i])},u=["prefixCls","radius","pointer","className","hue","style","hsva","onChange"],d=o.forwardRef((e,t)=>{var r,d=e.prefixCls,h=void 0===d?"w-color-saturation":d,p=e.radius,g=void 0===p?0:p,x=e.pointer,v=e.className,m=e.hue,f=void 0===m?0:m,b=e.style,w=e.hsva,j=e.onChange,k=(0,a.A)(e,u),A=(0,s.A)({width:200,height:200,borderRadius:g},b,{position:"relative"}),C=(0,o.useRef)(null),y=(0,o.useCallback)(e=>{C.current=e,"function"===typeof t?t(e):t&&"current"in t&&(t.current=e)},[t]),E=(0,o.useCallback)((e,t)=>{j&&w&&j({h:w.h,s:100*e.left,v:100*(1-e.top),a:w.a});var r=C.current;r&&r.focus()},[w,j]),M=(0,o.useCallback)(e=>{if(w&&j){var t=w.s,r=w.v;switch(e.key){case"ArrowLeft":t=Math.max(0,w.s-1),e.preventDefault();break;case"ArrowRight":t=Math.min(100,w.s+1),e.preventDefault();break;case"ArrowUp":r=Math.min(100,w.v+1),e.preventDefault();break;case"ArrowDown":r=Math.max(0,w.v-1),e.preventDefault();break;default:return}j({h:w.h,s:t,v:r,a:w.a})}},[w,j]),_=(0,o.useMemo)(()=>{if(!w)return null;var e={top:100-w.v+"%",left:w.s+"%",color:(0,i.dR)(w)};return x&&"function"===typeof x?x((0,s.A)({prefixCls:h},e)):(0,l.jsx)(c,(0,s.A)({prefixCls:h},e))},[w,x,h]),D=(0,o.useCallback)(e=>{e.target.focus()},[]);return(0,l.jsx)(n.A,(0,s.A)({className:[h,v||""].filter(Boolean).join(" ")},k,{style:(0,s.A)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+(null!=(r=null==w?void 0:w.h)?r:f)+", 100%, 50%))"},A,{outline:"none"}),ref:y,onMove:E,onDown:E,onKeyDown:M,onClick:D,children:_}))});d.displayName="Saturation";const h=d},1346(e,t,r){r.d(t,{A:()=>g});var s=r(8102),a=r(9257),o=r(7804);function i(e){var t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useCallback)((e,r)=>t.current&&t.current(e,r),[])}var n=e=>"touches"in e,l=e=>{!n(e)&&e.preventDefault&&e.preventDefault()},c=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},u=(e,t)=>{var r=e.getBoundingClientRect(),s=n(t)?t.touches[0]:t;return{left:c((s.pageX-(r.left+window.pageXOffset))/r.width),top:c((s.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:s.pageX-(r.left+window.pageXOffset),y:s.pageY-(r.top+window.pageYOffset)}},d=r(9424),h=["prefixCls","className","onMove","onDown"],p=o.forwardRef((e,t)=>{var r=e.prefixCls,c=void 0===r?"w-color-interactive":r,p=e.className,g=e.onMove,x=e.onDown,v=(0,a.A)(e,h),m=(0,o.useRef)(null),f=(0,o.useRef)(!1),b=(0,o.useState)(!1),w=b[0],j=b[1],k=i(g),A=i(x),C=(0,o.useCallback)(e=>{(l(e),m.current)&&((n(e)?e.touches.length>0:e.buttons>0)?null==k||k(u(m.current,e),e):j(!1))},[k]),y=(0,o.useCallback)(()=>j(!1),[]),E=(0,o.useCallback)(e=>{e?(window.addEventListener(f.current?"touchmove":"mousemove",C),window.addEventListener(f.current?"touchend":"mouseup",y)):(window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",y),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",y))},[C,y]);(0,o.useEffect)(()=>(E(w),()=>{E(!1)}),[w,C,y,E]);var M=(0,o.useCallback)(e=>{var t=document.activeElement;null==t||t.blur(),l(e.nativeEvent),(e=>!(f.current&&!n(e))&&(f.current=n(e),!0))(e.nativeEvent)&&m.current&&(null==A||A(u(m.current,e.nativeEvent),e.nativeEvent),j(!0))},[A]),_=(0,o.useCallback)(e=>{m.current=e,"function"===typeof t?t(e):t&&(t.current=e)},[t]);return(0,d.jsx)("div",(0,s.A)({},v,{className:[c,p||""].filter(Boolean).join(" "),style:(0,s.A)({},v.style,{touchAction:"none"}),ref:_,tabIndex:0,onMouseDown:M,onTouchStart:M}))});p.displayName="Interactive";const g=p}}]);
//# sourceMappingURL=1697.fc24cb3f.chunk.js.map