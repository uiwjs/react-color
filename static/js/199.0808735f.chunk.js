"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[199],{345:(e,t,r)=>{var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(6651)),o=n(r(453)),l=n(r(7804)),i=n(r(4707)),u=r(9424),s=["prefixCls","className","hue","onChange","direction"],c=l.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-hue":r,l=e.className,c=e.hue,f=void 0===c?0:c,d=e.onChange,p=e.direction,h=void 0===p?"horizontal":p,b=(0,o.default)(e,s);return(0,u.jsx)(i.default,(0,a.default)((0,a.default)({ref:t,className:"".concat(n," ").concat(l||"")},b),{},{direction:h,background:"linear-gradient(to ".concat("horizontal"===h?"right":"bottom",", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)"),hsva:{h:f,s:100,v:100,a:f/360},onChange:function(e,t){d&&d({h:"horizontal"===h?360*t.left:360*t.top})}}))}));c.displayName="Hue";t.default=c;e.exports=t.default},974:(e,t,r)=>{var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(6651)),o=n(r(453)),l=n(r(7804)),i=n(r(4226)),u=r(7604),s=r(9424),c=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],f=l.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input-rgba":r,l=e.hsva,f=e.placement,d=void 0===f?"bottom":f,p=e.rProps,h=void 0===p?{}:p,b=e.gProps,v=void 0===b?{}:b,g=e.bProps,y=void 0===g?{}:g,m=e.aProps,x=void 0===m?{}:m,_=e.className,w=e.style,A=e.onChange,S=(0,o.default)(e,c),C=l?(0,u.hsvaToRgba)(l):{};function k(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var j=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),A&&A((0,u.color)((0,u.rgbaToHsva)((0,a.default)((0,a.default)({},C),{},{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&A&&A((0,u.color)((0,u.rgbaToHsva)((0,a.default)((0,a.default)({},C),{},{r:e})))),"g"===t&&A&&A((0,u.color)((0,u.rgbaToHsva)((0,a.default)((0,a.default)({},C),{},{g:e})))),"b"===t&&A&&A((0,u.color)((0,u.rgbaToHsva)((0,a.default)((0,a.default)({},C),{},{b:e})))))};return(0,s.jsxs)("div",(0,a.default)((0,a.default)({ref:t,className:[n,_||""].filter(Boolean).join(" ")},S),{},{style:(0,a.default)({fontSize:11,display:"flex"},w),children:[(0,s.jsx)(i.default,(0,a.default)((0,a.default)({label:"R",value:C.r||0,onBlur:k,placement:d,onChange:function(e,t){return j(t,"r",e)}},h),{},{style:(0,a.default)({},h.style)})),(0,s.jsx)(i.default,(0,a.default)((0,a.default)({label:"G",value:C.g||0,onBlur:k,placement:d,onChange:function(e,t){return j(t,"g",e)}},v),{},{style:(0,a.default)({marginLeft:5},h.style)})),(0,s.jsx)(i.default,(0,a.default)((0,a.default)({label:"B",value:C.b||0,onBlur:k,placement:d,onChange:function(e,t){return j(t,"b",e)}},y),{},{style:(0,a.default)({marginLeft:5},y.style)})),x&&(0,s.jsx)(i.default,(0,a.default)((0,a.default)({label:"A",value:C.a?parseInt(String(100*C.a),10):0,onBlur:k,placement:d,onChange:function(e,t){return j(t,"a",e)}},x),{},{style:(0,a.default)({marginLeft:5},x.style)}))]}))}));f.displayName="EditableInputRGBA";t.default=f;e.exports=t.default},1974:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.preventDefaultMove=t.isTouch=t.getRelativePosition=t.clamp=void 0,t.useEventCallback=function(e){var t=(0,n.useRef)(e);return(0,n.useEffect)((function(){t.current=e})),(0,n.useCallback)((function(e,r){return t.current&&t.current(e,r)}),[])};var n=r(7804);var a=t.isTouch=function(e){return"touches"in e},o=(t.preventDefaultMove=function(e){!a(e)&&e.preventDefault&&e.preventDefault()},t.clamp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e>r?r:e<t?t:e});t.getRelativePosition=function(e,t){var r=e.getBoundingClientRect(),n=a(t)?t.touches[0]:t;return{left:o((n.pageX-(r.left+window.pageXOffset))/r.width),top:o((n.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:n.pageX-(r.left+window.pageXOffset),y:n.pageY-(r.top+window.pageYOffset)}}},3955:(e,t,r)=>{var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(8821)),l=n(r(6651)),i=n(r(453)),u=a(r(7804)),s=r(7604),c=n(r(7611)),f=r(5106),d=r(9424),p=["prefixCls","radius","pointer","className","hue","style","hsva","onChange"],h=u.default.forwardRef((function(e,t){var r,n=e.prefixCls,a=void 0===n?"w-color-saturation":n,h=e.radius,b=void 0===h?0:h,v=e.pointer,g=e.className,y=e.hue,m=void 0===y?0:y,x=e.style,_=e.hsva,w=e.onChange,A=(0,i.default)(e,p),S=(0,l.default)((0,l.default)({width:200,height:200,borderRadius:b},x),{},{position:"relative"}),C=(0,u.useState)({left:0,top:0,x:0,y:0,width:0,height:0}),k=(0,o.default)(C,2),j=k[0],R=k[1],P=function(e,t){R(e),w&&_&&w({h:_.h,s:100*e.left,v:100*(1-e.top),a:_.a})},E=(0,u.useMemo)((function(){if(!_)return null;var e={top:"".concat(j.y,"px"),left:"".concat(j.x,"px"),color:(0,s.hsvaToHslaString)(_)};return v&&"function"===typeof v?v((0,l.default)({prefixCls:a},e)):(0,d.jsx)(f.Pointer,(0,l.default)({prefixCls:a},e))}),[_,j,v,a]);return(0,d.jsx)(c.default,(0,l.default)((0,l.default)({className:[a,g||""].filter(Boolean).join(" ")},A),{},{style:(0,l.default)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(".concat(null!==(r=null===_||void 0===_?void 0:_.h)&&void 0!==r?r:m,", 100%, 50%))")},S),ref:t,onMove:P,onDown:P,children:E}))}));h.displayName="Saturation";t.default=h;e.exports=t.default},4226:(e,t,r)=>{var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(6651)),l=n(r(8821)),i=n(r(453)),u=a(r(7804)),s=r(9424),c=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],f=u.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,a=e.placement,f=void 0===a?"bottom":a,d=e.label,p=e.value,h=e.className,b=e.style,v=e.labelStyle,g=e.inputStyle,y=e.onChange,m=e.onBlur,x=e.renderInput,_=(0,i.default)(e,c),w=(0,u.useState)(p),A=(0,l.default)(w,2),S=A[0],C=A[1],k=(0,u.useRef)(!1);(0,u.useEffect)((function(){e.value!==S&&(k.current||C(e.value))}),[e.value]);var j={};"bottom"===f&&(j.flexDirection="column"),"top"===f&&(j.flexDirection="column-reverse"),"left"===f&&(j.flexDirection="row-reverse");var R=(0,o.default)((0,o.default)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},j),b),P=(0,o.default)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},g),E=(0,o.default)((0,o.default)({value:S,onChange:function(e,t){var r=(t||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&y&&y(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||y&&y(e,n),C(r)},onBlur:function(t){k.current=!1,C(e.value),m&&m(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},_),{},{style:P});return(0,s.jsxs)("div",{className:[n,h||""].filter(Boolean).join(" "),style:R,children:[x?x(E,t):(0,s.jsx)("input",(0,o.default)({ref:t},E)),d&&(0,s.jsx)("span",{style:(0,o.default)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},v),children:d})]})}));f.displayName="EditableInput";t.default=f;e.exports=t.default},4707:(e,t,r)=>{var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0});var a={BACKGROUND_IMG:!0};t.default=t.BACKGROUND_IMG=void 0;var o=n(r(6651)),l=n(r(453)),i=n(r(7804)),u=r(7604),s=n(r(7611)),c=r(5602);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var f=r(9424),d=["prefixCls","className","hsva","background","bgProps","innerProps","pointerProps","radius","width","height","direction","style","onChange","pointer"],p=t.BACKGROUND_IMG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==",h=i.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-alpha":r,a=e.className,i=e.hsva,h=e.background,b=e.bgProps,v=void 0===b?{}:b,g=e.innerProps,y=void 0===g?{}:g,m=e.pointerProps,x=void 0===m?{}:m,_=e.radius,w=void 0===_?0:_,A=e.width,S=e.height,C=void 0===S?16:S,k=e.direction,j=void 0===k?"horizontal":k,R=e.style,P=e.onChange,E=e.pointer,O=(0,l.default)(e,d),D=function(e){P&&P((0,o.default)((0,o.default)({},i),{},{a:"horizontal"===j?e.left:e.top}),e)},T=(0,u.hsvaToHslaString)(Object.assign({},i,{a:1})),M="linear-gradient(to ".concat("horizontal"===j?"right":"bottom",", rgba(244, 67, 54, 0) 0%, ").concat(T," 100%)"),B={};"horizontal"===j?B.left="".concat(100*i.a,"%"):B.top="".concat(100*i.a,"%");var L=(0,o.default)((0,o.default)((0,o.default)({"--alpha-background-color":"#fff","--alpha-pointer-background-color":"rgb(248, 248, 248)","--alpha-pointer-box-shadow":"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:w,background:"url(".concat(p,") left center"),backgroundColor:"var(--alpha-background-color)"},{width:A,height:C}),R),{},{position:"relative"}),N=E&&"function"===typeof E?E((0,o.default)((0,o.default)({prefixCls:n},x),B)):(0,f.jsx)(c.Pointer,(0,o.default)((0,o.default)({},x),{},{prefixCls:n},B));return(0,f.jsxs)("div",(0,o.default)((0,o.default)({},O),{},{className:[n,"".concat(n,"-").concat(j),a||""].filter(Boolean).join(" "),style:L,ref:t,children:[(0,f.jsx)("div",(0,o.default)((0,o.default)({},v),{},{style:(0,o.default)({inset:0,position:"absolute",background:h||M,borderRadius:w},v.style)})),(0,f.jsx)(s.default,(0,o.default)((0,o.default)({},y),{},{style:(0,o.default)((0,o.default)({},y.style),{},{inset:0,zIndex:1,position:"absolute"}),onMove:D,onDown:D,children:N}))]}))}));h.displayName="Alpha";t.default=h},5106:(e,t,r)=>{var n=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Pointer=void 0;var a=n(r(7804)),o=r(9424);t.Pointer=function(e){var t=e.className,r=e.color,n=e.left,l=e.top,i=e.prefixCls,u={position:"absolute",top:l,left:n},s={"--saturation-pointer-box-shadow":"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"var(--saturation-pointer-box-shadow)",borderRadius:"50%",backgroundColor:r};return(0,a.useMemo)((function(){return(0,o.jsx)("div",{className:"".concat(i,"-pointer ").concat(t||""),style:u,children:(0,o.jsx)("div",{className:"".concat(i,"-fill"),style:s})})}),[l,n,r,t,i])}},5560:(e,t,r)=>{var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(564)),l=n(r(6651)),i=n(r(453)),u=a(r(7804)),s=r(7604),c=r(9424),f=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],d=u.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-swatch":r,a=e.className,d=e.color,p=e.colors,h=void 0===p?[]:p,b=e.style,v=e.rectProps,g=void 0===v?{}:v,y=e.onChange,m=e.addonAfter,x=e.addonBefore,_=e.rectRender,w=(0,i.default)(e,f),A=(0,l.default)({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),S=function(e,t){y&&y((0,s.hexToHsva)(e),(0,s.color)((0,s.hexToHsva)(e)),t)};return(0,c.jsxs)("div",(0,l.default)((0,l.default)({ref:t},w),{},{className:[n,a||""].filter(Boolean).join(" "),style:(0,l.default)({display:"flex",flexWrap:"wrap",position:"relative"},b),children:[x&&u.default.isValidElement(x)&&x,h&&Array.isArray(h)&&h.map((function(e,t){var r="",n="";"string"===typeof e&&(r=e,n=e),"object"===(0,o.default)(e)&&e.color&&(r=e.title||e.color,n=e.color);var a=d&&d.toLocaleLowerCase()===n.toLocaleLowerCase(),i=_&&_({title:r,color:n,checked:!!a,style:(0,l.default)((0,l.default)({},A),{},{background:n}),onClick:function(e){return S(n,e)}});if(i)return(0,c.jsx)(u.Fragment,{children:i},t);var s=g.children&&u.default.isValidElement(g.children)?u.default.cloneElement(g.children,{color:n,checked:a}):null;return(0,c.jsx)("div",(0,l.default)((0,l.default)({tabIndex:0,title:r,onClick:function(e){return S(n,e)}},g),{},{children:s,style:(0,l.default)((0,l.default)({},A),{},{background:n})}),t)})),m&&u.default.isValidElement(m)&&m]}))}));d.displayName="Swatch";t.default=d;e.exports=t.default},5602:(e,t,r)=>{var n=r(6784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Pointer=void 0;var a=n(r(6651)),o=n(r(453)),l=(n(r(7804)),r(9424)),i=["className","prefixCls","left","top","style","fillProps"];t.Pointer=function(e){var t=e.className,r=e.prefixCls,n=e.left,u=e.top,s=e.style,c=e.fillProps,f=(0,o.default)(e,i),d=(0,a.default)((0,a.default)({},s),{},{position:"absolute",left:n,top:u}),p=(0,a.default)((0,a.default)({width:18,height:18,boxShadow:"var(--alpha-pointer-box-shadow)",borderRadius:"50%",backgroundColor:"var(--alpha-pointer-background-color)"},null===c||void 0===c?void 0:c.style),{},{transform:n?"translate(-9px, -1px)":"translate(-1px, -9px)"});return(0,l.jsx)("div",(0,a.default)((0,a.default)({className:"".concat(r,"-pointer ").concat(t||""),style:d},f),{},{children:(0,l.jsx)("div",(0,a.default)((0,a.default)({className:"".concat(r,"-fill")},c),{},{style:p}))}))}},6139:(e,t,r)=>{var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(6651)),l=n(r(564)),i=n(r(8821)),u=n(r(453)),s=a(r(7804)),c=n(r(3955)),f=n(r(4707)),d=n(r(4226)),p=n(r(974)),h=n(r(345)),b=r(7604),v=n(r(5560)),g=r(9424),y=["prefixCls","className","onChange","width","presetColors","color","editableDisable","disableAlpha","style"],m=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],x=function(e){return(0,g.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},_=s.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-sketch":r,a=e.className,_=e.onChange,w=e.width,A=void 0===w?218:w,S=e.presetColors,C=void 0===S?m:S,k=e.color,j=e.editableDisable,R=void 0===j||j,P=e.disableAlpha,E=void 0!==P&&P,O=e.style,D=(0,u.default)(e,y),T=(0,s.useState)({h:209,s:36,v:90,a:1}),M=(0,i.default)(T,2),B=M[0],L=M[1];(0,s.useEffect)((function(){"string"===typeof k&&(0,b.validHex)(k)&&L((0,b.hexToHsva)(k)),"object"===(0,l.default)(k)&&L(k)}),[k]);var N=function(e){L(e),_&&_((0,b.color)(e))},I=(0,o.default)({"--sketch-background":"rgb(255, 255, 255)","--sketch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px","--sketch-swatch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset","--sketch-alpha-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset","--sketch-swatch-border-top":"1px solid rgb(238, 238, 238)",background:"var(--sketch-background)",borderRadius:4,boxShadow:"var(--sketch-box-shadow)",width:A},O),H={borderRadius:2,background:(0,b.hsvaToRgbaString)(B),boxShadow:"var(--sketch-alpha-box-shadow)"};return(0,g.jsxs)("div",(0,o.default)((0,o.default)({},D),{},{className:"".concat(n," ").concat(a||""),ref:t,style:I,children:[(0,g.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,g.jsx)(c.default,{hsva:B,style:{width:"auto",height:150},onChange:function(e){return N((0,o.default)((0,o.default)((0,o.default)({},B),e),{},{a:B.a}))}}),(0,g.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,g.jsxs)("div",{style:{flex:1},children:[(0,g.jsx)(h.default,{width:"auto",height:10,hue:B.h,pointer:x,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return N((0,o.default)((0,o.default)({},B),e))}}),!E&&(0,g.jsx)(f.default,{width:"auto",height:10,hsva:B,pointer:x,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return N((0,o.default)((0,o.default)({},B),{a:e.a}))}})]}),!E&&(0,g.jsx)(f.default,{width:24,height:24,hsva:B,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:H},pointer:function(){return(0,g.jsx)(s.Fragment,{})}})]})]}),R&&(0,g.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,g.jsx)(d.default,{label:"Hex",value:(0,b.hsvaToHex)(B).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&(0,b.validHex)(r)&&/(3|6)/.test(String(r.length))&&N((0,b.hexToHsva)(r))},style:{minWidth:58}}),(0,g.jsx)(p.default,{hsva:B,style:{marginLeft:6},aProps:!E&&{},onChange:function(e){return N(e.hsva)}})]}),C&&C.length>0&&(0,g.jsx)(v.default,{style:{borderTop:"var(--sketch-swatch-border-top)",paddingTop:10,paddingLeft:10},colors:C,color:(0,b.hsvaToHex)(B),onChange:function(e){return N(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"var(--sketch-swatch-box-shadow)"}}})]}))}));_.displayName="Sketch";t.default=_;e.exports=t.default},7611:(e,t,r)=>{var n=r(6784).default,a=r(147).default;Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default=void 0;var l=n(r(6651)),i=n(r(8821)),u=n(r(453)),s=a(r(7804)),c=r(1974);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var f=r(9424),d=["prefixCls","className","onMove","onDown"],p=s.default.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-interactive":r,a=e.className,o=e.onMove,p=e.onDown,h=(0,u.default)(e,d),b=(0,s.useRef)(null),v=(0,s.useRef)(!1),g=(0,s.useState)(!1),y=(0,i.default)(g,2),m=y[0],x=y[1],_=(0,c.useEventCallback)(o),w=(0,c.useEventCallback)(p),A=(0,s.useCallback)((function(e){((0,c.preventDefaultMove)(e),b.current)&&(((0,c.isTouch)(e)?e.touches.length>0:e.buttons>0)?null===_||void 0===_||_((0,c.getRelativePosition)(b.current,e),e):x(!1))}),[_]),S=(0,s.useCallback)((function(){return x(!1)}),[]),C=(0,s.useCallback)((function(e){e?(window.addEventListener(v.current?"touchmove":"mousemove",A),window.addEventListener(v.current?"touchend":"mouseup",S)):(window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",S),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",S))}),[A,S]);(0,s.useEffect)((function(){return C(m),function(){C(!1)}}),[m,A,S,C]);var k=(0,s.useCallback)((function(e){(0,c.preventDefaultMove)(e.nativeEvent),function(e){return!(v.current&&!(0,c.isTouch)(e))&&(v.current=(0,c.isTouch)(e),!0)}(e.nativeEvent)&&b.current&&(null===w||void 0===w||w((0,c.getRelativePosition)(b.current,e.nativeEvent),e.nativeEvent),x(!0))}),[w]);return(0,f.jsx)("div",(0,l.default)((0,l.default)({},h),{},{className:[n,a||""].filter(Boolean).join(" "),style:(0,l.default)((0,l.default)({},h.style),{},{touchAction:"none"}),ref:b,tabIndex:0,onMouseDown:k,onTouchStart:k}))}));p.displayName="Interactive";t.default=p},8199:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={components:{21:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var n=o(r);if(n&&n.has(t))return n.get(t);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var u=l?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(a,i,u):a[i]=t[i]}return a.default=t,n&&n.set(t,a),a}(r(7804)),a=(t=r(6139))&&t.__esModule?t:{default:t};function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],u=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=l((0,n.useState)("#fff"),2),t=e[0],r=e[1],o=l((0,n.useState)(!1),2),i=o[0],u=o[1];return n.default.createElement("div",null,n.default.createElement(a.default,{style:{marginLeft:20},color:t,disableAlpha:i,onChange:function(e){r(e.hex)}}),n.default.createElement("button",{onClick:function(){return u(!i)}},"disableAlpha=",i.toString()))}}(),50:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var n=o(r);if(n&&n.has(t))return n.get(t);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var u=l?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(a,i,u):a[i]=t[i]}return a.default=t,n&&n.set(t,a),a}(r(7804)),a=(t=r(6139))&&t.__esModule?t:{default:t};function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],u=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var u=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE"];return function(){var e=l((0,n.useState)("#fff"),2),t=e[0],r=e[1],o=l((0,n.useState)(!1),2),i=o[0],s=o[1];return n.default.createElement("div",null,n.default.createElement(a.default,{style:{marginLeft:20},color:t,disableAlpha:i,presetColors:u,onChange:function(e){r(e.hex)}}),n.default.createElement("button",{onClick:function(){return s(!i)}},"disableAlpha=",i.toString()))}}()},data:{21:{name:21,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorSketch = _interopRequireDefault(require("@uiw/react-color-sketch"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction Demo() {\n  var _useState = (0, _react.useState)("#fff"),\n    _useState2 = _slicedToArray(_useState, 2),\n    hex = _useState2[0],\n    setHex = _useState2[1];\n  var _useState3 = (0, _react.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    disableAlpha = _useState4[0],\n    setDisableAlpha = _useState4[1];\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactColorSketch["default"], {\n    style: {\n      marginLeft: 20\n    },\n    color: hex,\n    disableAlpha: disableAlpha,\n    onChange: function onChange(color) {\n      setHex(color.hex);\n    }\n  }), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setDisableAlpha(!disableAlpha);\n    }\n  }, "disableAlpha=", disableAlpha.toString()));\n}\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport Sketch from '@uiw/react-color-sketch';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  const [disableAlpha, setDisableAlpha] = useState(false);\n  return (\n    <div>\n      <Sketch\n        style={{ marginLeft: 20 }}\n        color={hex}\n        disableAlpha={disableAlpha}\n        onChange={(color) => {\n          setHex(color.hex);\n        }}\n      />\n      <button onClick={() => setDisableAlpha(!disableAlpha)}>\n        disableAlpha={disableAlpha.toString()}\n      </button>\n    </div>\n  );\n}\n\nexport default Demo;"},50:{name:50,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorSketch = _interopRequireDefault(require("@uiw/react-color-sketch"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar PRESET_COLORS = [\'#D0021B\', \'#F5A623\', \'#f8e61b\', \'#8B572A\', \'#7ED321\', \'#417505\', \'#BD10E0\', \'#9013FE\'];\nfunction Demo() {\n  var _useState = (0, _react.useState)("#fff"),\n    _useState2 = _slicedToArray(_useState, 2),\n    hex = _useState2[0],\n    setHex = _useState2[1];\n  var _useState3 = (0, _react.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    disableAlpha = _useState4[0],\n    setDisableAlpha = _useState4[1];\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactColorSketch["default"], {\n    style: {\n      marginLeft: 20\n    },\n    color: hex,\n    disableAlpha: disableAlpha,\n    presetColors: PRESET_COLORS,\n    onChange: function onChange(color) {\n      setHex(color.hex);\n    }\n  }), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setDisableAlpha(!disableAlpha);\n    }\n  }, "disableAlpha=", disableAlpha.toString()));\n}\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport Sketch from '@uiw/react-color-sketch';\n\nconst PRESET_COLORS = [\n  '#D0021B',\n  '#F5A623',\n  '#f8e61b',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n];\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  const [disableAlpha, setDisableAlpha] = useState(false);\n  return (\n    <div>\n      <Sketch\n        style={{ marginLeft: 20 }}\n        color={hex}\n        disableAlpha={disableAlpha}\n        presetColors={PRESET_COLORS}\n        onChange={(color) => {\n          setHex(color.hex);\n        }}\n      />\n      <button onClick={() => setDisableAlpha(!disableAlpha)}>\n        disableAlpha={disableAlpha.toString()}\n      </button>\n    </div>\n  );\n}\n\nexport default Demo;"}},source:"React Color Sketch\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)\n\nSketch Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n\x3c!--rehype:ignore:start--\x3e\n[![react-color-sketch](https://user-images.githubusercontent.com/1680273/125952146-290199b4-8810-4552-944b-3ee673fb4350.png)](https://uiwjs.github.io/react-color/#/sketch)\n\x3c!--rehype:ignore:end--\x3e\n\n## Install\n\n```bash\nnpm i @uiw/react-color-sketch\n```\n\n## Usage\n\n```jsx mdx:preview\nimport React, { useState } from 'react';\nimport Sketch from '@uiw/react-color-sketch';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  const [disableAlpha, setDisableAlpha] = useState(false);\n  return (\n    <div>\n      <Sketch\n        style={{ marginLeft: 20 }}\n        color={hex}\n        disableAlpha={disableAlpha}\n        onChange={(color) => {\n          setHex(color.hex);\n        }}\n      />\n      <button onClick={() => setDisableAlpha(!disableAlpha)}>\n        disableAlpha={disableAlpha.toString()}\n      </button>\n    </div>\n  );\n}\n\nexport default Demo;\n```\n\nSet presetColors Example\n\n```jsx mdx:preview\nimport React, { useState } from 'react';\nimport Sketch from '@uiw/react-color-sketch';\n\nconst PRESET_COLORS = [\n  '#D0021B',\n  '#F5A623',\n  '#f8e61b',\n  '#8B572A',\n  '#7ED321',\n  '#417505',\n  '#BD10E0',\n  '#9013FE',\n];\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  const [disableAlpha, setDisableAlpha] = useState(false);\n  return (\n    <div>\n      <Sketch\n        style={{ marginLeft: 20 }}\n        color={hex}\n        disableAlpha={disableAlpha}\n        presetColors={PRESET_COLORS}\n        onChange={(color) => {\n          setHex(color.hex);\n        }}\n      />\n      <button onClick={() => setDisableAlpha(!disableAlpha)}>\n        disableAlpha={disableAlpha.toString()}\n      </button>\n    </div>\n  );\n}\n\nexport default Demo;\n```\n\n## Props\n\n```ts\nimport React from 'react';\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\nimport { SwatchPresetColor } from '@uiw/react-color-swatch';\nexport interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  width?: number;\n  color?: string | HsvaColor;\n  presetColors?: false | SwatchPresetColor[];\n  editableDisable?: boolean;\n  disableAlpha?: boolean;\n  onChange?: (newShade: ColorResult) => void;\n}\ndeclare const Sketch: React.ForwardRefExoticComponent<SketchProps & React.RefAttributes<HTMLDivElement>>;\nexport default Sketch;\n```\n\n\x3c!--footer-dividing--\x3e\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-color/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=199.0808735f.chunk.js.map