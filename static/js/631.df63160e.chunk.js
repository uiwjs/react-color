"use strict";(globalThis.webpackChunkwebsite||=[]).push([[631],{3623(e,t,r){r.d(t,{A:()=>p});var a=r(7804),o=r(5713),i=r(3235),s=r(9424);const n=i.Ay.div`
  background-color: var(--card, var(--color-theme-bg));
  border: 1px solid var(--line, rgba(0, 0, 0, 0.08));
  box-shadow: var(--shadow, 0 8px 16px rgb(0 0 0 / 8%));
  border-radius: 18px;
  max-width: 1120px;
  margin: 20px auto;
  padding-bottom: 20px;
  position: relative;
  color: var(--ink, inherit);
`,l=i.Ay.a`
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
`;class p extends a.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,s.jsxs)(c,{className:"wmde-markdown-var",children:[(0,s.jsxs)(n,{children:[this.editorUrl&&(0,s.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,s.jsxs)(h,{children:[(0,s.jsx)("h3",{children:"Example"}),this.example]}),(0,s.jsx)(o.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,s.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,s.jsxs)(d,{children:[(0,s.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,s.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,s.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,s.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,s.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},631(e,t,r){r.r(t),r.d(t,{Component:()=>c});var a=r(7804),o=r(1636),i=r(3623),s=r(7980),n=r(9424);function l(){const{hsva:e,dispatch:t}=(0,a.useContext)(s.ob);return(0,n.jsx)("div",{style:{width:300},children:(0,n.jsx)(o.Ay,{hsva:e,onChange:r=>{t({hsva:{...e,...r}})}})})}class c extends i.A{constructor(...e){super(...e),this.editorUrl="/packages/color-alpha/README.md",this.getMdStr=()=>Promise.all([r.e(3968),r.e(785)]).then(()=>r(785)),this.example=(0,n.jsx)(l,{})}}},1636(e,t,r){r.d(t,{xm:()=>p,Ay:()=>g});var a=r(8102),o=r(9257),i=r(7804),s=r(2945),n=r(1346),l=r(9424),c=["className","prefixCls","left","top","style","fillProps"],d=e=>{var t=e.className,r=e.prefixCls,i=e.left,s=e.top,n=e.style,d=e.fillProps,h=(0,o.A)(e,c),p=(0,a.A)({},n,{position:"absolute",left:i,top:s}),u=(0,a.A)({width:18,height:18,boxShadow:"var(--alpha-pointer-box-shadow)",borderRadius:"50%",backgroundColor:"var(--alpha-pointer-background-color)"},null==d?void 0:d.style,{transform:i?"translate(-9px, -1px)":"translate(-1px, -9px)"});return(0,l.jsx)("div",(0,a.A)({className:r+"-pointer "+(t||""),style:p},h,{children:(0,l.jsx)("div",(0,a.A)({className:r+"-fill"},d,{style:u}))}))},h=["prefixCls","className","hsva","background","bgProps","innerProps","pointerProps","radius","width","height","direction","reverse","style","onChange","pointer"],p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==",u=i.forwardRef((e,t)=>{var r=e.prefixCls,c=void 0===r?"w-color-alpha":r,u=e.className,g=e.hsva,v=e.background,x=e.bgProps,b=void 0===x?{}:x,m=e.innerProps,f=void 0===m?{}:m,w=e.pointerProps,A=void 0===w?{}:w,j=e.radius,k=void 0===j?0:j,C=e.width,y=e.height,E=void 0===y?16:y,M=e.direction,D=void 0===M?"horizontal":M,R=e.reverse,_=void 0!==R&&R,z=e.style,N=e.onChange,S=e.pointer,U=(0,o.A)(e,h),B=(0,i.useCallback)(e=>{var t="horizontal"===D?e.left:e.top;return"horizontal"===D?_?1-t:t:_?t:1-t},[D,_]),O=(0,i.useCallback)(e=>"horizontal"===D?_?1-e:e:_?e:1-e,[D,_]),P=e=>{var t=B(e);N&&N((0,a.A)({},g,{a:t}),e)},G=(0,s.dR)(Object.assign({},g,{a:1})),L="horizontal"===D?_?"linear-gradient(to right, "+G+" 0%, rgba(244, 67, 54, 0) 100%)":"linear-gradient(to right, rgba(244, 67, 54, 0) 0%, "+G+" 100%)":_?"linear-gradient(to bottom, rgba(244, 67, 54, 0) 0%, "+G+" 100%)":"linear-gradient(to bottom, "+G+" 0%, rgba(244, 67, 54, 0) 100%)",Y={};"horizontal"===D?Y.left=100*O(g.a)+"%":Y.top=100*O(g.a)+"%";var I=(0,a.A)({"--alpha-background-color":"#fff","--alpha-pointer-background-color":"rgb(248, 248, 248)","--alpha-pointer-box-shadow":"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:k,background:"url("+p+") left center",backgroundColor:"var(--alpha-background-color)"},{width:C,height:E},z,{position:"relative"}),T=(0,i.useCallback)(e=>{var t=.01,r=g.a,o=r;switch(e.key){case"ArrowLeft":"horizontal"===D&&(o=_?Math.min(1,r+t):Math.max(0,r-t),e.preventDefault());break;case"ArrowRight":"horizontal"===D&&(o=_?Math.max(0,r-t):Math.min(1,r+t),e.preventDefault());break;case"ArrowUp":"vertical"===D&&(o=_?Math.max(0,r-t):Math.min(1,r+t),e.preventDefault());break;case"ArrowDown":"vertical"===D&&(o=_?Math.min(1,r+t):Math.max(0,r-t),e.preventDefault());break;default:return}if(o!==r){var i=O(o),s={left:"horizontal"===D?i:g.a,top:"vertical"===D?i:g.a,width:0,height:0,x:0,y:0};N&&N((0,a.A)({},g,{a:o}),s)}},[O,g,D,N,_]),X=(0,i.useCallback)(e=>{e.target.focus()},[]),Q=S&&"function"===typeof S?S((0,a.A)({prefixCls:c},A,Y)):(0,l.jsx)(d,(0,a.A)({},A,{prefixCls:c},Y));return(0,l.jsxs)("div",(0,a.A)({},U,{className:[c,c+"-"+D,u||""].filter(Boolean).join(" "),style:I,ref:t,children:[(0,l.jsx)("div",(0,a.A)({},b,{style:(0,a.A)({inset:0,position:"absolute",background:v||L,borderRadius:k},b.style)})),(0,l.jsx)(n.A,(0,a.A)({},f,{style:(0,a.A)({},f.style,{inset:0,zIndex:1,position:"absolute",outline:"none"}),onMove:P,onDown:P,onClick:X,onKeyDown:T,children:Q}))]}))});u.displayName="Alpha";const g=u},1346(e,t,r){r.d(t,{A:()=>g});var a=r(8102),o=r(9257),i=r(7804);function s(e){var t=(0,i.useRef)(e);return(0,i.useEffect)(()=>{t.current=e}),(0,i.useCallback)((e,r)=>t.current&&t.current(e,r),[])}var n=e=>"touches"in e,l=e=>{!n(e)&&e.preventDefault&&e.preventDefault()},c=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},d=(e,t)=>{var r=e.getBoundingClientRect(),a=n(t)?t.touches[0]:t;return{left:c((a.pageX-(r.left+window.pageXOffset))/r.width),top:c((a.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:a.pageX-(r.left+window.pageXOffset),y:a.pageY-(r.top+window.pageYOffset)}},h=r(9424),p=["prefixCls","className","onMove","onDown"],u=i.forwardRef((e,t)=>{var r=e.prefixCls,c=void 0===r?"w-color-interactive":r,u=e.className,g=e.onMove,v=e.onDown,x=(0,o.A)(e,p),b=(0,i.useRef)(null),m=(0,i.useRef)(!1),f=(0,i.useState)(!1),w=f[0],A=f[1],j=s(g),k=s(v),C=(0,i.useCallback)(e=>{(l(e),b.current)&&((n(e)?e.touches.length>0:e.buttons>0)?null==j||j(d(b.current,e),e):A(!1))},[j]),y=(0,i.useCallback)(()=>A(!1),[]),E=(0,i.useCallback)(e=>{e?(window.addEventListener(m.current?"touchmove":"mousemove",C),window.addEventListener(m.current?"touchend":"mouseup",y)):(window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",y),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",y))},[C,y]);(0,i.useEffect)(()=>(E(w),()=>{E(!1)}),[w,C,y,E]);var M=(0,i.useCallback)(e=>{var t=document.activeElement;null==t||t.blur(),l(e.nativeEvent),(e=>!(m.current&&!n(e))&&(m.current=n(e),!0))(e.nativeEvent)&&b.current&&(null==k||k(d(b.current,e.nativeEvent),e.nativeEvent),A(!0))},[k]),D=(0,i.useCallback)(e=>{b.current=e,"function"===typeof t?t(e):t&&(t.current=e)},[t]);return(0,h.jsx)("div",(0,a.A)({},x,{className:[c,u||""].filter(Boolean).join(" "),style:(0,a.A)({},x.style,{touchAction:"none"}),ref:D,tabIndex:0,onMouseDown:M,onTouchStart:M}))});u.displayName="Interactive";const g=u}}]);
//# sourceMappingURL=631.df63160e.chunk.js.map