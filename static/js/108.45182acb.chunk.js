"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[108],{9571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(8102),o=r(9257),a=r(7804),i=r(2945),l=r(1636),u=r(9424),c=["prefixCls","className","onChange","direction","hsva"],f=a.forwardRef(((e,t)=>{var{prefixCls:r="w-color-saturation",className:a,onChange:f,direction:s="horizontal",hsva:h}=e,p=(0,o.A)(e,c),d=(0,i.hsvaToHslaString)((0,n.A)({},h,{a:1,v:100}));return(0,u.jsx)(l.default,(0,n.A)({ref:t},p,{className:r+" "+(a||""),hsva:{h:h.h,s:h.s,v:h.v,a:1-h.v/100},direction:s,background:"linear-gradient(to "+("horizontal"===s?"right":"bottom")+", "+d+", rgb(0, 0, 0))",onChange:(e,t)=>{f&&f({v:"horizontal"===s?100-100*t.left:100-100*t.top})}}))}));f.displayName="ShadeSlider";const s=f},9727:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={components:{21:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&{}.hasOwnProperty.call(t,l)){var u=a?Object.getOwnPropertyDescriptor(t,l):null;u&&(u.get||u.set)?Object.defineProperty(o,l,u):o[l]=t[l]}return o.default=t,n&&n.set(t,o),o}(r(7804)),o=(t=r(6801))&&t.__esModule?t:{default:t},a=r(2945);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=f((0,n.useState)({h:214,s:43,v:90,a:1}),2),t=e[0],r=e[1];return n.default.createElement(n.Fragment,null,n.default.createElement(o.default,{color:t,onChange:function(e){return r(u(u({},t),e.hsva))}}),n.default.createElement("div",{style:{width:"100%",height:34,marginTop:20,background:(0,a.hsvaToHex)(t)}}))}}(),39:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var n=a(r);if(n&&n.has(t))return n.get(t);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&{}.hasOwnProperty.call(t,l)){var u=i?Object.getOwnPropertyDescriptor(t,l):null;u&&(u.get||u.set)?Object.defineProperty(o,l,u):o[l]=t[l]}return o.default=t,n&&n.set(t,o),o}(r(7804)),o=(t=r(6801))&&t.__esModule?t:{default:t};function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=i((0,n.useState)({h:214,s:43,v:90,a:1}),2);return e[0],e[1],n.default.createElement("div",{style:{display:"grid",gap:20,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"}},n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:100}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:90}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:80}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:70}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:50}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:40}}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:40},width:100,height:100}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:30},width:100,height:100}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:20},width:100,height:100}),n.default.createElement(o.default,{color:{a:1,h:214,s:0,v:10},width:100,height:100}))}}(),65:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!=e(t)&&"function"!=typeof t)return{default:t};var n=l(r);if(n&&n.has(t))return n.get(t);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=t[i]}return o.default=t,n&&n.set(t,o),o}(r(7804)),n=i(r(6801)),o=i(r(9571)),a=r(2945);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=s((0,t.useState)({h:214,s:43,v:90,a:1}),2),r=e[0],i=e[1];return t.default.createElement(t.Fragment,null,t.default.createElement(n.default,{color:r,onChange:function(e){return i(c(c({},r),e.hsva))}}),t.default.createElement(o.default,{hsva:r,style:{width:210,marginTop:20},onChange:function(e){i(c(c({},r),e))}}),t.default.createElement("div",{style:{width:"100%",height:34,marginTop:20,background:(0,a.hsvaToHex)(r)}}))}}()},data:{21:{name:21,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorWheel = _interopRequireDefault(require("@uiw/react-color-wheel"));\nvar _colorConvert = require("@uiw/color-convert");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction Demo() {\n  var _useState = (0, _react.useState)({\n      h: 214,\n      s: 43,\n      v: 90,\n      a: 1\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    hsva = _useState2[0],\n    setHsva = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: hsva,\n    onChange: function onChange(color) {\n      return setHsva(_objectSpread(_objectSpread({}, hsva), color.hsva));\n    }\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: 34,\n      marginTop: 20,\n      background: (0, _colorConvert.hsvaToHex)(hsva)\n    }\n  }));\n}\nreturn Demo;',language:"tsx",value:"import React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;"},39:{name:39,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorWheel = _interopRequireDefault(require("@uiw/react-color-wheel"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction Demo() {\n  var _useState = (0, _react.useState)({\n      h: 214,\n      s: 43,\n      v: 90,\n      a: 1\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    hsva = _useState2[0],\n    setHsva = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      display: \'grid\',\n      gap: 20,\n      gridTemplateColumns: \'repeat(auto-fill, minmax(200px, 1fr))\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 100\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 90\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 80\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 70\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 50\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 40\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 40\n    },\n    width: 100,\n    height: 100\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 30\n    },\n    width: 100,\n    height: 100\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 20\n    },\n    width: 100,\n    height: 100\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: {\n      a: 1,\n      h: 214,\n      s: 0,\n      v: 10\n    },\n    width: 100,\n    height: 100\n  }));\n}\nreturn Demo;',language:"tsx",value:"import React, { useState } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>\n      <Wheel color={{a: 1, h: 214, s: 0, v: 100}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 90}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 80}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 70}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 50}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 30}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 20}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 10}} width={100} height={100} />\n    </div>\n  );\n}\n\nexport default Demo;"},65:{name:65,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorWheel = _interopRequireDefault(require("@uiw/react-color-wheel"));\nvar _reactColorShadeSlider = _interopRequireDefault(require("@uiw/react-color-shade-slider"));\nvar _colorConvert = require("@uiw/color-convert");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction Demo() {\n  var _useState = (0, _react.useState)({\n      h: 214,\n      s: 43,\n      v: 90,\n      a: 1\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    hsva = _useState2[0],\n    setHsva = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: hsva,\n    onChange: function onChange(color) {\n      return setHsva(_objectSpread(_objectSpread({}, hsva), color.hsva));\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactColorShadeSlider["default"], {\n    hsva: hsva,\n    style: {\n      width: 210,\n      marginTop: 20\n    },\n    onChange: function onChange(newShade) {\n      setHsva(_objectSpread(_objectSpread({}, hsva), newShade));\n    }\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: 34,\n      marginTop: 20,\n      background: (0, _colorConvert.hsvaToHex)(hsva)\n    }\n  }));\n}\nreturn Demo;',language:"tsx",value:"import React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport ShadeSlider from '@uiw/react-color-shade-slider';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <ShadeSlider\n        hsva={hsva}\n        style={{ width: 210, marginTop: 20 }}\n        onChange={(newShade) => {\n          setHsva({ ...hsva, ...newShade });\n        }}\n      />\n      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;"}},source:"React Color Wheel\n===\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)\n\nWheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n\x3c!--rehype:ignore:start--\x3e\n[![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)](https://uiwjs.github.io/react-color/#/wheel)\n\x3c!--rehype:ignore:end--\x3e\n\n## Install\n\n```bash\nnpm i @uiw/react-color-wheel\n```\n\n## Usage\n\n```tsx mdx:preview\nimport React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;\n```\n\n```tsx mdx:preview\nimport React, { useState } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>\n      <Wheel color={{a: 1, h: 214, s: 0, v: 100}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 90}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 80}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 70}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 50}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 40}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 30}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 20}} width={100} height={100} />\n      <Wheel color={{a: 1, h: 214, s: 0, v: 10}} width={100} height={100} />\n    </div>\n  );\n}\n\nexport default Demo;\n```\n\n```tsx mdx:preview\nimport React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport ShadeSlider from '@uiw/react-color-shade-slider';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <ShadeSlider\n        hsva={hsva}\n        style={{ width: 210, marginTop: 20 }}\n        onChange={(newShade) => {\n          setHsva({ ...hsva, ...newShade });\n        }}\n      />\n      <div style={{ width: '100%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;\n```\n\n\n## Props\n\n```ts\nimport React from 'react';\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\nimport { PointerProps } from './Pointer';\nexport interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  width?: number;\n  height?: number;\n  radius?: React.CSSProperties['borderRadius'];\n  /** Direction of the oval: 'x' or 'y'. */ \n  oval?: string;\n  /** Starting angle of the color wheel's hue gradient, measured in degrees. */\n  angle?: number;\n  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */\n  direction?: 'clockwise' | 'anticlockwise';\n  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;\n  onChange?: (color: ColorResult) => void;\n}\ndeclare const Wheel: React.ForwardRefExoticComponent<WheelProps & React.RefAttributes<HTMLDivElement>>;\nexport default Wheel;\n```\n\n\x3c!--footer-dividing--\x3e\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://uiwjs.github.io/react-color/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=108.45182acb.chunk.js.map