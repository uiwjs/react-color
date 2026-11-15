"use strict";(globalThis.webpackChunkwebsite||=[]).push([[790],{3623(e,t,r){r.d(t,{A:()=>h});var i=r(7804),s=r(5713),o=r(3235),a=r(9424);const n=o.Ay.div`
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
`,u=o.Ay.div`
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
`;class h extends i.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,a.jsxs)(c,{className:"wmde-markdown-var",children:[(0,a.jsxs)(n,{children:[this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(u,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(s.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},790(e,t,r){r.r(t),r.d(t,{Component:()=>c});var i=r(7804),s=r(6801),o=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:e,dispatch:t}=(0,i.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(s.A,{color:e,onChange:r=>{t({hsva:{...e,...r.hsva}})}})})}class c extends o.A{constructor(...e){super(...e),this.editorUrl="/packages/color-wheel/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(2108)]).then(()=>r(2108)),this.example=(0,n.jsx)(l,{})}}},6801(e,t,r){r.d(t,{A:()=>m});var i=r(8102),s=r(9257),o=r(7804),a=r(2945),n=r(1346),l=r(9424),c=e=>{var t=e.className,r=e.color,s=e.left,o=e.top,a=e.style,n=e.prefixCls,c=(0,i.A)({},a,{position:"absolute",top:o,left:s}),d=n+"-pointer "+(t||"");return(0,l.jsx)("div",{className:d,style:c,children:(0,l.jsx)("div",{className:n+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,l.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})},d=2*Math.PI,u=(e,t)=>Math.sqrt(e*e+t*t);function h(e){var t=e.width,r=void 0===t?0:t,i=r/2;return{width:r,radius:i,cx:i,cy:i}}function p(e){var t=e.width;return(void 0===t?0:t)/2}function g(e,t,r){var i,s=e.angle||0,o=e.direction;return r&&"clockwise"===o?t=s+t:"clockwise"===o?t=360-s+t:r&&"anticlockwise"===o?t=s+180-t:"anticlockwise"===o&&(t=s-t),(t%(i=360)+i)%i}var x=["prefixCls","radius","pointer","className","style","width","height","oval","direction","angle","color","onChange"],v=o.forwardRef((e,t)=>{var r=e.prefixCls,o=void 0===r?"w-color-wheel":r,v=(e.radius,e.pointer),m=e.className,f=e.style,b=e.width,w=void 0===b?200:b,j=e.height,y=void 0===j?200:j,k=e.oval,A=e.direction,C=void 0===A?"anticlockwise":A,E=e.angle,M=void 0===E?180:E,_=e.color,R=e.onChange,N=(0,s.A)(e,x),S="string"===typeof _&&(0,a.Am)(_)?(0,a.RV)(_):_||{},D=_?(0,a.D9)(S):"",O={width:w,direction:C,angle:M},X=function(e,t){var r=h(e),i=r.cx,s=r.cy,o=p(e),a=(180+g(e,t.h,!0))*(d/360),n=t.s/100*o,l="clockwise"===e.direction?-1:1;return{x:i+n*Math.cos(a)*l,y:s+n*Math.sin(a)*l}}(O,S),Y={top:"0",left:"0",color:D},L=(e,t)=>{var r=function(e,t,r){var i=h(e),s=i.cx,o=i.cy,a=p(e);t=s-t,r=o-r;var n=g(e,Math.atan2(-r,-t)*(360/d)),l=Math.min(u(t,r),a);return{h:Math.round(n),s:Math.round(100/a*l)}}(O,e.x,e.y),i={h:r.h,s:r.s,v:S.v,a:S.a};R&&R((0,a.yW)(i))},I={zIndex:1,position:"absolute",transform:"translate("+X.x+"px, "+X.y+"px) "+("x"===k||"X"===k?"scaleY(2)":"y"===k||"Y"===k?"scaleX(2)":"")},U=v&&"function"===typeof v?v((0,i.A)({prefixCls:o,style:I},Y)):(0,l.jsx)(c,(0,i.A)({prefixCls:o,style:I},Y));return(0,l.jsxs)(n.A,(0,i.A)({className:[o,m||""].filter(Boolean).join(" ")},N,{style:(0,i.A)({position:"relative",width:w,transform:"x"===k||"X"===k?"scaleY(0.5)":"y"===k||"Y"===k?"scaleX(0.5)":"",height:y},f),ref:t,onMove:L,onDown:L,children:[U,(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===C?"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)":"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",transform:"rotateZ("+(90-M)+"deg)",inset:0}}),(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,l.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof S.v?1-S.v/100:0}})]}))});v.displayName="Wheel";const m=v},1346(e,t,r){r.d(t,{A:()=>g});var i=r(8102),s=r(9257),o=r(7804);function a(e){var t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useCallback)((e,r)=>t.current&&t.current(e,r),[])}var n=e=>"touches"in e,l=e=>{!n(e)&&e.preventDefault&&e.preventDefault()},c=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},d=(e,t)=>{var r=e.getBoundingClientRect(),i=n(t)?t.touches[0]:t;return{left:c((i.pageX-(r.left+window.pageXOffset))/r.width),top:c((i.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:i.pageX-(r.left+window.pageXOffset),y:i.pageY-(r.top+window.pageYOffset)}},u=r(9424),h=["prefixCls","className","onMove","onDown"],p=o.forwardRef((e,t)=>{var r=e.prefixCls,c=void 0===r?"w-color-interactive":r,p=e.className,g=e.onMove,x=e.onDown,v=(0,s.A)(e,h),m=(0,o.useRef)(null),f=(0,o.useRef)(!1),b=(0,o.useState)(!1),w=b[0],j=b[1],y=a(g),k=a(x),A=(0,o.useCallback)(e=>{(l(e),m.current)&&((n(e)?e.touches.length>0:e.buttons>0)?null==y||y(d(m.current,e),e):j(!1))},[y]),C=(0,o.useCallback)(()=>j(!1),[]),E=(0,o.useCallback)(e=>{e?(window.addEventListener(f.current?"touchmove":"mousemove",A),window.addEventListener(f.current?"touchend":"mouseup",C)):(window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",C),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",C))},[A,C]);(0,o.useEffect)(()=>(E(w),()=>{E(!1)}),[w,A,C,E]);var M=(0,o.useCallback)(e=>{var t=document.activeElement;null==t||t.blur(),l(e.nativeEvent),(e=>!(f.current&&!n(e))&&(f.current=n(e),!0))(e.nativeEvent)&&m.current&&(null==k||k(d(m.current,e.nativeEvent),e.nativeEvent),j(!0))},[k]),_=(0,o.useCallback)(e=>{m.current=e,"function"===typeof t?t(e):t&&(t.current=e)},[t]);return(0,u.jsx)("div",(0,i.A)({},v,{className:[c,p||""].filter(Boolean).join(" "),style:(0,i.A)({},v.style,{touchAction:"none"}),ref:_,tabIndex:0,onMouseDown:M,onTouchStart:M}))});p.displayName="Interactive";const g=p}}]);
//# sourceMappingURL=790.7f517a08.chunk.js.map