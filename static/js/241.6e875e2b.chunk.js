(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[241],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,r)=>{"use strict";r.d(e,{A:()=>f});var o,a,n,s,i,l=r(114),h=r(7804),d=r(6110),p=r(3235),c=r(9424);const g=p.Ay.div(o||(o=(0,l.A)(["\n  background-color: var(--color-theme-bg);\n  box-shadow:\n    0 0 0 1px rgb(0 0 0 / 15%),\n    0 8px 16px rgb(0 0 0 / 15%);\n  border-radius: 16px;\n  max-width: 860px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n  position: relative;\n"]))),u=p.Ay.a(a||(a=(0,l.A)(["\n  position: absolute;\n  right: 20px;\n  padding: 3px 8px 4px 8px;\n  background: #333333;\n  border-radius: 0 0 6px 6px;\n  text-decoration: initial;\n  color: #fff;\n  transition: all 0.3s;\n  font-size: 14px;\n  &:hover {\n    background-color: #3f51b4;\n  }\n"]))),b=p.Ay.div(n||(n=(0,l.A)(["\n  padding-bottom: 120px;\n"]))),x=p.Ay.footer(s||(s=(0,l.A)(["\n  text-align: center;\n  margin-top: 40px;\n  a {\n    margin: 0 5px;\n  }\n  p {\n    font-size: 12px;\n    text-align: center;\n  }\n"]))),m=p.Ay.div(i||(i=(0,l.A)(["\n  border-bottom: 1px solid var(--color-border-default);\n  border-radius: 16px 16px 0 0;\n  padding: 28px;\n  > h3 {\n    margin: 0;\n    padding-bottom: 12px;\n  }\n"])));class f extends h.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,c.jsxs)(b,{className:"wmde-markdown-var",children:[(0,c.jsxs)(g,{children:[this.editorUrl&&(0,c.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"}),this.example&&(0,c.jsxs)(m,{children:[(0,c.jsx)("h3",{children:"Example"}),this.example]}),(0,c.jsx)(d.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,c.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"})]}),(0,c.jsxs)(x,{children:[(0,c.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,c.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,c.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,c.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,c.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,c.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,c.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,c.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,c.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1232:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Component:()=>h});var o=r(7804),a=r(2051),n=r(3623),s=r(7980),i=r(9424);function l(){const{hsva:t,dispatch:e}=(0,o.useContext)(s.ob);return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,i.jsx)(a.default,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.Top,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.TopLeft,onChange:r=>{e({hsva:{...t,...r.hsva}})}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"1rem",marginTop:20},children:[(0,i.jsx)(a.default,{placement:a.GithubPlacement.Left,color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.LeftTop,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.LeftBottom,onChange:r=>{e({hsva:{...t,...r.hsva}})}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"1rem",marginTop:20},children:[(0,i.jsx)(a.default,{placement:a.GithubPlacement.Right,color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.RightTop,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.RightBottom,onChange:r=>{e({hsva:{...t,...r.hsva}})}})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:"1rem",marginTop:20},children:[(0,i.jsx)(a.default,{placement:a.GithubPlacement.BottomLeft,color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.Bottom,onChange:r=>{e({hsva:{...t,...r.hsva}})}}),(0,i.jsx)(a.default,{color:t,placement:a.GithubPlacement.BottomRight,onChange:r=>{e({hsva:{...t,...r.hsva}})}})]})]})}class h extends n.A{constructor(){super(...arguments),this.editorUrl="/packages/color-github/README.md",this.getMdStr=()=>r.e(546).then(r.bind(r,2165)),this.example=(0,i.jsx)(l,{})}}},2051:(t,e,r)=>{"use strict";r.r(e),r.d(e,{GithubPlacement:()=>u,default:()=>x});var o=r(9520),a=r(8102),n=r(9257),s=r(7804),i=r(2945),l=r(6966),h=r(9424),d={marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25};function p(t){var{style:e,title:r,checked:o,color:n,onClick:i,rectProps:l}=t,p=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{p.current.style.zIndex="2",p.current.style.outline="#fff solid 2px",p.current.style.boxShadow="rgb(0 0 0 / 25%) 0 0 5px 2px"}),[]),g=(0,s.useCallback)((()=>{o||(p.current.style.zIndex="0",p.current.style.outline="initial",p.current.style.boxShadow="initial")}),[o]),u=o?{zIndex:1,outline:"#fff solid 2px",boxShadow:"rgb(0 0 0 / 25%) 0 0 5px 2px"}:{zIndex:0};return(0,h.jsx)("div",(0,a.A)({ref:p,title:r},l,{onClick:i,onMouseEnter:c,onMouseLeave:g,style:(0,a.A)({},e,{marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25},d,u,null==l?void 0:l.style)}))}var c=["prefixCls","placement","className","style","color","colors","rectProps","onChange","rectRender"],g=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"],u=function(t){return t.Left="L",t.LeftTop="LT",t.LeftBottom="LB",t.Right="R",t.RightTop="RT",t.RightBottom="RB",t.Top="T",t.TopRight="TR",t.TopLeft="TL",t.Bottom="B",t.BottomLeft="BL",t.BottomRight="BR",t}({}),b=s.forwardRef(((t,e)=>{var{prefixCls:r="w-color-github",placement:d=u.TopRight,className:b,style:x,color:m,colors:f=g,rectProps:v={},onChange:j,rectRender:w}=t,C=(0,n.A)(t,c),B="string"===typeof m&&(0,i.validHex)(m)?(0,i.hexToHsva)(m):m,R=m?(0,i.hsvaToHex)(B):"",T=(0,a.A)({"--github-border":"1px solid rgba(0, 0, 0, 0.2)","--github-background-color":"#fff","--github-box-shadow":"rgb(0 0 0 / 15%) 0px 3px 12px","--github-arrow-border-color":"rgba(0, 0, 0, 0.15)",width:200,borderRadius:4,background:"var(--github-background-color)",boxShadow:"var(--github-box-shadow)",border:"var(--github-border)",position:"relative",padding:5},x),k={borderStyle:"solid",position:"absolute"},y=(0,a.A)({},k),A=(0,a.A)({},k);/^T/.test(d)&&(y.borderWidth="0 8px 8px",y.borderColor="transparent transparent var(--github-arrow-border-color)",A.borderWidth="0 7px 7px",A.borderColor="transparent transparent var(--github-background-color)"),d===u.TopRight&&(y.top=-8,A.top=-7),d===u.Top&&(y.top=-8,A.top=-7),d===u.TopLeft&&(y.top=-8,A.top=-7),/^B/.test(d)&&(y.borderWidth="8px 8px 0",y.borderColor="var(--github-arrow-border-color) transparent transparent",A.borderWidth="7px 7px 0",A.borderColor="var(--github-background-color) transparent transparent",d===u.BottomRight&&(y.top="100%",A.top="100%"),d===u.Bottom&&(y.top="100%",A.top="100%"),d===u.BottomLeft&&(y.top="100%",A.top="100%")),/^(B|T)/.test(d)&&(d!==u.Top&&d!==u.Bottom||(y.left="50%",y.marginLeft=-8,A.left="50%",A.marginLeft=-7),d!==u.TopRight&&d!==u.BottomRight||(y.right=10,A.right=11),d!==u.TopLeft&&d!==u.BottomLeft||(y.left=7,A.left=8)),/^L/.test(d)&&(y.borderWidth="8px 8px 8px 0",y.borderColor="transparent var(--github-arrow-border-color) transparent transparent",A.borderWidth="7px 7px 7px 0",A.borderColor="transparent var(--github-background-color) transparent transparent",y.left=-8,A.left=-7),/^R/.test(d)&&(y.borderWidth="8px 0 8px 8px",y.borderColor="transparent transparent transparent var(--github-arrow-border-color)",A.borderWidth="7px 0 7px 7px",A.borderColor="transparent transparent transparent var(--github-background-color)",y.right=-8,A.right=-7),/^(L|R)/.test(d)&&(d!==u.RightTop&&d!==u.LeftTop||(y.top=5,A.top=6),d!==u.Left&&d!==u.Right||(y.top="50%",A.top="50%",y.marginTop=-8,A.marginTop=-7),d!==u.LeftBottom&&d!==u.RightBottom||(y.top="100%",A.top="100%",y.marginTop=-21,A.marginTop=-20));return(0,h.jsx)(l.default,(0,a.A)({ref:e,className:[r,b].filter(Boolean).join(" "),colors:f,color:R,rectRender:t=>{var e=(0,a.A)({},((0,o.A)(t),t)),r=w&&w((0,a.A)({},e));return r||(0,h.jsx)(p,(0,a.A)({},e,{rectProps:v}))}},C,{onChange:t=>j&&j((0,i.color)(t)),style:T,rectProps:{style:{marginRight:0,marginBottom:0,borderRadius:0,height:25,width:25}},addonBefore:(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("div",{style:y}),(0,h.jsx)("div",{style:A})]})}))}));b.displayName="Github";const x=b},9520:(t,e,r)=>{"use strict";function o(t){if(null==t)throw new TypeError("Cannot destructure "+t)}r.d(e,{A:()=>o})}}]);
//# sourceMappingURL=241.6e875e2b.chunk.js.map