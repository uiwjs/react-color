"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[812],{3623:(e,t,r)=>{r.d(t,{A:()=>h});var s=r(7804),o=r(5789),i=r(3235),a=r(9424);const n=i.Ay.div`
  background-color: var(--color-theme-bg);
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 15%),
    0 8px 16px rgb(0 0 0 / 15%);
  border-radius: 16px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 20px;
  position: relative;
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
`,d=i.Ay.div`
  padding-bottom: 120px;
`,c=i.Ay.footer`
  text-align: center;
  margin-top: 40px;
  a {
    margin: 0 5px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
`,p=i.Ay.div`
  border-bottom: 1px solid var(--color-border-default);
  border-radius: 16px 16px 0 0;
  padding: 28px;
  > h3 {
    margin: 0;
    padding-bottom: 12px;
  }
`;class h extends s.Component{constructor(e){super(e),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then(e=>{this.setState({mdStr:e.default.source,mdObj:e.default})})}render(){const{source:e,components:t,data:r}=this.state.mdObj||{};return(0,a.jsxs)(d,{className:"wmde-markdown-var",children:[(0,a.jsxs)(n,{children:[this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"}),this.example&&(0,a.jsxs)(p,{children:[(0,a.jsx)("h3",{children:"Example"}),this.example]}),(0,a.jsx)(o.A,{data:{data:r,components:t,source:e},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,a.jsx)(l,{target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-color/edit/main${this.editorUrl}`,children:"Edit this page"})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,a.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,a.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,a.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,a.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},7355:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),n=r(5991),l=r(6436),d=r(6966),c=r(9424),p=["prefixCls","className","style","onChange","color","colors","rectProps","rectRender","addonBefore","addonAfter"],h=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#cccccc","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];function g(e){return e.checked?(0,c.jsx)("div",{style:{height:5,width:5,borderRadius:"50%",backgroundColor:(0,a.OB)(e.color)}}):null}var x=i.forwardRef((e,t)=>{var{prefixCls:r="w-color-compact",className:x,style:u,onChange:b,color:m,colors:f=h,rectProps:j,rectRender:v,addonBefore:w,addonAfter:A}=e,C=(0,o.A)(e,p),k="string"===typeof m&&(0,a.Am)(m)?(0,a.RV)(m):m,y=m?(0,a.D9)(k).replace(/^#/,""):"",F=(0,i.useCallback)(e=>b&&b((0,a.yW)(e)),[]),D={style:{alignItems:"baseline"},inputStyle:{boxShadow:"none",backgroundColor:"transparent",outline:0}},B=(0,s.A)({"--compact-background-color":"#f6f6f6",background:"var(--compact-background-color)",borderRadius:3,display:"flex",width:240,flexWrap:"wrap",paddingTop:5,paddingLeft:5},u);return(0,c.jsxs)("div",(0,s.A)({ref:t,style:B,className:[r,x||""].filter(Boolean).join(" ")},C,{children:[(0,c.jsx)(d.A,{colors:f,color:m?(0,a.D9)(k):void 0,rectRender:v,rectProps:(0,s.A)({children:(0,c.jsx)(g,{})},j,{style:(0,s.A)({display:"flex",alignItems:"center",justifyContent:"center"},null==j?void 0:j.style)}),onChange:e=>F(e),addonBefore:w,addonAfter:A}),(0,c.jsxs)("div",{className:[r+"-input-wrapper",x||""].filter(Boolean).join(" "),style:{display:"flex",margin:"0 4px 3px 0"},children:[(0,c.jsx)(n.A,{onChange:(e,t)=>{var r;"string"===typeof(r=t)&&(0,a.Am)(r)&&/(3|6)/.test(String(r.length))&&F((0,a.RV)(r))},labelStyle:{paddingRight:5,marginTop:-1},value:y.toLocaleUpperCase(),label:(0,c.jsx)("div",{style:{width:8,height:8,backgroundColor:"#"+y}}),inputStyle:{outline:"none",boxShadow:"initial",background:"transparent"},style:{flexDirection:"row-reverse",flex:"1 1 0%",minWidth:80}}),(0,c.jsx)(l.A,{hsva:k,placement:"left",onChange:e=>F(e.hsva),aProps:!1,rProps:D,gProps:D,bProps:D})]})]}))});x.displayName="Compact";const u=x},7812:(e,t,r)=>{r.r(t),r.d(t,{Component:()=>d});var s=r(7804),o=r(7355),i=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:e,dispatch:t}=(0,s.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:256},children:(0,n.jsx)(o.A,{color:e,style:{boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px"},onChange:r=>{t({hsva:{...e,...r.hsva}})}})})}class d extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-compact/README.md",this.getMdStr=()=>Promise.all([r.e(968),r.e(78)]).then(r.bind(r,7078)),this.example=(0,n.jsx)(l,{})}}}}]);
//# sourceMappingURL=812.61842bf6.chunk.js.map