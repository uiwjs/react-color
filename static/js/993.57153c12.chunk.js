(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[993],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,r)=>{"use strict";r.d(e,{A:()=>p});var s=r(7804),i=r(7584),o=r(3235),a=r(9424);const n=o.Ay.div`
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
`;class p extends s.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(n,{children:[this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(h,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(i.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},790:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Component:()=>d});var s=r(7804),i=r(6801),o=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(i.default,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class d extends o.A{constructor(){super(...arguments),this.editorUrl="/packages/color-wheel/README.md",this.getMdStr=()=>r.e(108).then(r.bind(r,9727)),this.example=(0,n.jsx)(l,{})}}},6801:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>m});var s=r(8102),i=r(9257),o=r(7804),a=r(2945),n=r(1346),l=r(9424),d=t=>{var{className:e,color:r,left:i,top:o,style:a,prefixCls:n}=t,d=(0,s.A)({},a,{position:"absolute",top:o,left:i}),c=n+"-pointer "+(e||"");return(0,l.jsx)("div",{className:c,style:d,children:(0,l.jsx)("div",{className:n+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,l.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})},c=2*Math.PI,h=(t,e)=>Math.sqrt(t*t+e*e);function p(t){var{width:e=0}=t,r=e/2;return{width:e,radius:r,cx:r,cy:r}}function u(t){var{width:e=0}=t;return e/2}function x(t,e,r){var s,i=t.angle||0,o=t.direction;return r&&"clockwise"===o?e=i+e:"clockwise"===o?e=360-i+e:r&&"anticlockwise"===o?e=i+180-e:"anticlockwise"===o&&(e=i-e),(e%(s=360)+s)%s}var g=["prefixCls","radius","pointer","className","style","width","height","oval","direction","angle","color","onChange"],b=o.forwardRef(((t,e)=>{var{prefixCls:r="w-color-wheel",radius:o=0,pointer:b,className:m,style:f,width:v=200,height:w=200,oval:j,direction:k="anticlockwise",angle:y=180,color:C,onChange:M}=t,_=(0,i.A)(t,g),A="string"===typeof C&&(0,a.validHex)(C)?(0,a.hexToHsva)(C):C||{},N=C?(0,a.hsvaToHex)(A):"",S=function(t,e){var{cx:r,cy:s}=p(t),i=u(t),o=(180+x(t,e.h,!0))*(c/360),a=e.s/100*i,n="clockwise"===t.direction?-1:1;return{x:r+a*Math.cos(o)*n,y:s+a*Math.sin(o)*n}}({width:v},A),E={top:"0",left:"0",color:N},R=(t,e)=>{var r=function(t,e,r){var{cx:s,cy:i}=p(t),o=u(t);e=s-e,r=i-r;var a=x(t,Math.atan2(-r,-e)*(360/c)),n=Math.min(h(e,r),o);return{h:Math.round(a),s:Math.round(100/o*n)}}({width:v},v-t.x,w-t.y),s={h:r.h,s:r.s,v:A.v,a:A.a};M&&M((0,a.color)(s))},U={zIndex:1,transform:"translate("+S.x+"px, "+S.y+"px) "+("x"===j||"X"===j?"scaleY(2)":"y"===j||"Y"===j?"scaleX(2)":"")},O=b&&"function"===typeof b?b((0,s.A)({prefixCls:r,style:U},E)):(0,l.jsx)(d,(0,s.A)({prefixCls:r,style:U},E));return(0,l.jsxs)(n.default,(0,s.A)({className:[r,m||""].filter(Boolean).join(" ")},_,{style:(0,s.A)({position:"relative",width:v,transform:"x"===j||"X"===j?"scaleY(0.5)":"y"===j||"Y"===j?"scaleX(0.5)":"",height:w},f),ref:e,onMove:R,onDown:R,children:[O,(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===k?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(y+90)+"deg)",inset:0}}),(0,l.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,l.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof A.v?1-A.v/100:0}})]}))}));b.displayName="Wheel";const m=b}}]);
//# sourceMappingURL=993.57153c12.chunk.js.map