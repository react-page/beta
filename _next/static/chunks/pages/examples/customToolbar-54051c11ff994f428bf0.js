_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"469l":function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("mXGw"),l=(n("17x9"),n("iuhU")),i=n("H2TA"),c=n("5AJ6"),u=Object(c.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=o.forwardRef((function(e,t){var n=e.alt,i=e.children,c=e.classes,s=e.className,d=e.component,f=void 0===d?"div":d,m=e.imgProps,p=e.sizes,v=e.src,g=e.srcSet,b=e.variant,h=void 0===b?"circle":b,y=Object(a.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,O=function(e){var t=e.src,n=e.srcSet,r=o.useState(!1),a=r[0],l=r[1];return o.useEffect((function(){if(t||n){l(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&l("loaded")},r.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,n]),a}({src:v,srcSet:g}),x=v||g,w=x&&"error"!==O;return j=w?o.createElement("img",Object(r.a)({alt:n,src:v,srcSet:g,sizes:p,className:c.img},m)):null!=i?i:x&&n?n[0]:o.createElement(u,{className:c.fallback}),o.createElement(f,Object(r.a)({className:Object(l.a)(c.root,c.system,c[h],s,!w&&c.colorDefault),ref:t},y),j)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},"56Rm":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n("4uDH"),a=Object(r.a)((function(){return n.e(10).then(n.bind(null,"s3X+"))})),o=Object(r.a)((function(){return Promise.all([n.e(10),n.e(12),n.e(79)]).then(n.bind(null,"UHGO"))}))},"6DZK":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt,i="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,f=Math.min,m=function(){return u.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=a.test(e);return i||o.test(e)?l(e.slice(2),i?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,a,o,l,i,c,u=0,s=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=a;return r=a=void 0,u=t,l=e.apply(o,n)}function y(e){return u=e,i=setTimeout(O,t),s?h(e):l}function j(e){var n=e-c;return void 0===c||n>=t||n<0||g&&e-u>=o}function O(){var e=m();if(j(e))return x(e);i=setTimeout(O,function(e){var n=t-(e-c);return g?f(n,o-(e-u)):n}(e))}function x(e){return i=void 0,b&&r?h(e):(r=a=void 0,l)}function w(){var e=m(),n=j(e);if(r=arguments,a=this,c=e,n){if(void 0===i)return y(c);if(g)return i=setTimeout(O,t),h(c)}return void 0===i&&(i=setTimeout(O,t)),l}return t=v(t)||0,p(n)&&(s=!!n.leading,o=(g="maxWait"in n)?d(v(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==i&&clearTimeout(i),u=0,r=c=a=i=void 0},w.flush=function(){return void 0===i?l:x(m())},w}}).call(this,n("ntbh"))},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"7frF":function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=l},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},"9yUu":function(e,t,n){"use strict";n.d(t,"k",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"j",(function(){return y})),n.d(t,"l",(function(){return j})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return x})),n.d(t,"d",(function(){return w})),n.d(t,"m",(function(){return E})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return I}));var r=n("6DZK"),a=n.n(r),o=n("mXGw"),l=n("B0PM"),i=n("NEWh"),c=n("dK0u"),u=n("QM3I"),s=n("5W9F"),d=n("I2TO"),f=(n("PLNu"),n("QnYI")),m=n("z935"),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},g=function(e,t){return Object(l.c)((function(n){var r=Object(i.b)(n,e);return r?t(r.node,r.ancestors):null}),u.a)},b=function(e,t){return g(e,(function(e,n){return Object(c.a)(e)?null:t(e,n)}))},h=function(e){return g(e,(function(e,t){return Object(c.a)(e)?null:e}))},y=function(e){return Object(l.c)((function(t){var n;return(null===(n=t.reactPage.hover)||void 0===n?void 0:n.nodeId)===e?t.reactPage.hover.position:null}))},j=function(e){return g(e,(function(e,t){var n;return e&&t?null===(n=t.find((function(e){return!Object(c.a)(e)&&e.plugin})))||void 0===n?void 0:n.id:null}))},O=function(e){return g(e,(function(e){var t,n,r,a;return Object(c.a)(e)?null!==(n=null===(t=e.cells)||void 0===t?void 0:t.map((function(e){return e.id})))&&void 0!==n?n:[]:null!==(a=null===(r=e.rows)||void 0===r?void 0:r.map((function(e){return e.id})))&&void 0!==a?a:[]}))},x=function(e){return g(e,(function(e){var t,n,r,a;return Object(c.a)(e)?null!==(n=(null===(t=e.cells)||void 0===t?void 0:t.length)>0)&&void 0!==n&&n:null!==(a=(null===(r=e.rows)||void 0===r?void 0:r.length)>0)&&void 0!==a&&a}))},w=function(e){return b(e,(function(e){return Boolean(e.plugin)}))},E=function(e){var t=Object(m.b)();return b(e,(function(e){return e.plugin?t.find((function(t){var n;return t.id===(null===(n=e.plugin)||void 0===n?void 0:n.id)})):null}))},k=function(e){return b(e,(function(e){return null===e||void 0===e?void 0:e.dataI18n}))},C=function(e,t){var n=Object(m.f)(),r=null!==t&&void 0!==t?t:n;return b(e,(function(e){var t;return null!==(t=Object(s.a)(e,r))&&void 0!==t?t:{}}))},S=function(e,t){var n=E(e),r=Object(m.f)(),a=null!==t&&void 0!==t?t:r;return b(e,(function(e){var t;return null!==(t=Object(d.a)(n,Object(s.a)(e,a)))&&void 0!==t?t:{}}))},I=function(e){var t=C(e),n=v(Object(o.useState)(t),2),r=n[0],l=n[1],i=Object(o.useRef)(r);i.current=r;var c=Object(o.useRef)(t),s=Object(f.m)(e),d=Object(o.useCallback)(a()((function(e){c.current=i.current,s(i.current,e)}),200),[s]),m=!Object(u.a)(t,c.current);Object(o.useEffect)((function(){m&&(c.current=t,l(t))}),[m,t]);var g=Object(o.useCallback)((function(e,t){var n=p(p({},r),e);l(n),d(t)}),[d,l,r]);return[r,g]}},AUy9:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.default=l},"CRf/":function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=l},Cekx:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.default=l},HALo:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},KH1D:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=l},PLNu:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("dK0u"),a=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},o=function(e,t){var n,a=null!==(n=Object(r.a)(t)?t.cells:t.rows)&&void 0!==n?n:[];return[a.findIndex((function(t){return t.id===e.id})),a.length]},l=function(e,t){var n=a(t),i=n[0],c=n.slice(1);return i&&(Object(r.a)(e)||0===a(o(e,i),1)[0])?l(i,c)+1:0},i=function(e,t){var n=a(t),l=n[0],c=n.slice(1);if(!l)return 0;if(Object(r.a)(e))return i(l,c)+1;var u=a(o(e,l),2);return u[0]===u[1]-1?i(l,c)+1:0},c=function(e,t){var n=a(t),l=n[0],i=n.slice(1);return l?Object(r.a)(e)?0===a(o(e,l),1)[0]?c(l,i)+1:0:c(l,i)+1:0},u=function(e,t){var n=a(t),l=n[0],i=n.slice(1);if(!l)return 0;if(Object(r.a)(e)){var c=a(o(e,l),2);return c[0]===c[1]-1?u(l,i)+1:0}return u(l,i)+1},s=function(e,t){return{left:l(e,t),right:i(e,t),above:c(e,t),below:u(e,t)}}},UhlP:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("mXGw"),l=(n("17x9"),n("iuhU")),i=n("H2TA"),c=n("ye/S"),u=n("NqtD"),s=n("4ppn"),d=o.forwardRef((function(e,t){var n=e.classes,i=e.className,c=e.color,d=void 0===c?"secondary":c,f=e.edge,m=void 0!==f&&f,p=e.size,v=void 0===p?"medium":p,g=Object(a.a)(e,["classes","className","color","edge","size"]),b=o.createElement("span",{className:n.thumb});return o.createElement("span",{className:Object(l.a)(n.root,i,{start:n.edgeStart,end:n.edgeEnd}[m],"small"===v&&n["size".concat(Object(u.a)(v))])},o.createElement(s.a,Object(r.a)({type:"checkbox",icon:b,checkedIcon:b,classes:{root:Object(l.a)(n.switchBase,n["color".concat(Object(u.a)(d))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},g)),o.createElement("span",{className:n.track}))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(d)},WHoZ:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}),"Translate");t.default=l},ZGBi:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("mXGw"),l=(n("17x9"),n("iuhU")),i=n("EHdT"),c=n("H2TA"),u=n("ofer"),s=n("NqtD"),d=o.forwardRef((function(e,t){e.checked;var n=e.classes,c=e.className,d=e.control,f=e.disabled,m=(e.inputRef,e.label),p=e.labelPlacement,v=void 0===p?"end":p,g=(e.name,e.onChange,e.value,Object(a.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=Object(i.a)(),h=f;"undefined"===typeof h&&"undefined"!==typeof d.props.disabled&&(h=d.props.disabled),"undefined"===typeof h&&b&&(h=b.disabled);var y={disabled:h};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof d.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),o.createElement("label",Object(r.a)({className:Object(l.a)(n.root,c,"end"!==v&&n["labelPlacement".concat(Object(s.a)(v))],h&&n.disabled),ref:t},g),o.cloneElement(d,y),o.createElement(u.a,{component:"span",className:Object(l.a)(n.label,h&&n.disabled)},m))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(d)},aRHm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("tr08"),a=n("lopY"),o=function(){var e=Object(r.a)();return Object(a.a)(e.breakpoints.down("sm"))}},bWLx:function(e,t,n){"use strict";var r=n("wx14"),a=n("mXGw"),o=n.n(a),l=(n("17x9"),n("OKji")),i=n("aXM8"),c=n("hfi/");t.a=function(e){var t=e.children,n=e.theme,a=Object(i.a)(),u=o.a.useMemo((function(){var e=null===a?n:function(e,t){return"function"===typeof t?t(e):Object(r.a)({},e,t)}(a,n);return null!=e&&(e[c.a]=null!==a),e}),[n,a]);return o.a.createElement(l.a.Provider,{value:u},t)}},"buY/":function(e,t,n){"use strict";n.r(t);var r=n("xvhg"),a=n("mXGw"),o=n.n(a),l=n("LSll"),i=n("33kk"),c=n("deX4"),u=n("HALo");function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=n("ofer"),f=n("9yUu"),m=n("qwGW"),p=n("csfp"),v=n("PsDL"),g=n("AUy9"),b=n.n(g),h=n("Cekx"),y=n.n(h),j=o.a.createElement,O=function(e){var t=e.collapsed,n=e.setCollapsed,r=o.a.useCallback((function(){n(!t)}),[t,n]);return j(p.a,{title:t?"Restore Panel":"Collapse Panel"},j(v.a,{onClick:r,"aria-label":"delete",color:"default"},j(t?y.a:b.a,null)))},x=o.a.memo(O),w=o.a.createElement,E=o.a.memo((function(e){var t=e.pluginControls,n=s(e,["pluginControls"]),a=o.a.useState(!1),l=Object(r.a)(a,2),i=l[0],c=l[1],p=Object(f.m)(n.nodeId);return w(m.a,Object(u.a)({},n,{style:{borderRadius:20,borderColor:"red"},pluginControls:i?null:t,actionsLeft:[w(x,{key:"collapse button",collapsed:i,setCollapsed:c})]}),w(d.a,null,"Custom Toolbar for ",null===p||void 0===p?void 0:p.title))})),k=n("Z3vd"),C=n("iQEo"),S=o.a.createElement,I=[Object(i.b)(),c.a,C.a];t.default=function(){var e=o.a.useState(null),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!0),u=c[0],s=c[1],d=o.a.useMemo((function(){return u?{BottomToolbar:E}:{}}),[u]);return S(o.a.Fragment,null,S(k.a,{onClick:function(){return s(!u)}},"Toggle custom toolbar"),S(l.b,{cellPlugins:I,value:n,onChange:i,components:d}))}},deX4:function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));var r=n("4uDH"),a=n("mXGw"),o=n.n(a),l=Object(r.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(75)]).then(n.t.bind(null,"c5OO",7))})),i={Controls:function(){return o.a.createElement(o.a.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return o.a.createElement(o.a.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"I have a URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link location (url)",openNewWindow:"Open in new window",srcPlaceholder:"http://example.com/image.png"},icon:o.a.createElement(l,null)},c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e){var t=c(c({},i),e),n=t.Controls;return{controls:{type:"custom",Component:function(e){return o.a.createElement(n,c({},e,{translations:t.translations,imageUpload:t.imageUpload}))}},Renderer:t.Renderer,id:"ory/editor/core/content/image",version:1,icon:t.icon,title:t.translations.pluginName,isInlineable:!0,description:t.translations.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},d=Object(r.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.t.bind(null,"f5QF",7))})),f=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.src,r=null===t||void 0===t?void 0:t.openInNewWindow,a=o.a.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:n});return n?o.a.createElement("div",null,(null===t||void 0===t?void 0:t.href)?o.a.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===t||void 0===t?void 0:t.href,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0},a):a):o.a.createElement("div",null,o.a.createElement("div",{className:"react-page-plugins-content-image-placeholder"},o.a.createElement(d,{style:s})))},m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=Object(r.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(10),n.e(49)]).then(n.bind(null,"t/Zn"))})),v=function(e){return u(m({Renderer:f,Controls:p},e))},g=v();t.a=g},gX5J:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/customToolbar",function(){return n("buY/")}])},iQEo:function(e,t,n){"use strict";var r=n("56Rm"),a=n("mXGw"),o=n.n(a).a.createElement,l={Renderer:function(e){var t,n,r,a=e.data;return o("div",{style:{backgroundColor:null===(t=a.style)||void 0===t?void 0:t.backgroundColor,color:null===a||void 0===a||null===(n=a.style)||void 0===n?void 0:n.textColor,padding:null===a||void 0===a||null===(r=a.style)||void 0===r?void 0:r.padding}},o("h3",null,a.title),o("p",null,"Firstname: ",a.firstName),o("p",null,"Lastname: ",a.lastName),o("p",null,"Age: ",a.age))},id:"custom-content-plugin",title:"Custom content plugin",description:"Some custom content plugin with multiple controls",version:1,controls:[{title:"Default config",controls:{type:"autoform",schema:{properties:{title:{type:"string",default:"I am a custom plugin with multiple controls, this is my configuration"},firstName:{type:"string"},lastName:{type:"string"},age:{title:"Age in years",type:"integer",minimum:0}},required:["firstName","lastName"]}}},{title:"Styling",controls:{type:"autoform",schema:{type:"object",required:[],properties:{style:{type:"object",required:[],properties:{backgroundColor:{type:"string",default:"white",uniforms:{component:r.b}},textColor:{type:"string",default:"black",uniforms:{component:r.b}},padding:{type:"number",default:10}}}}}}}]};t.a=l},m4gq:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"}),"VerticalAlignTop");t.default=l},"n+Yt":function(e,t,n){"use strict";var r=n("viY9"),a=Object(r.a)({palette:{type:"dark"}});t.a=a},qwGW:function(e,t,n){"use strict";n.d(t,"a",(function(){return de}));var r=n("mXGw"),a=n.n(r),o=n("r7fV"),l=n("n+Yt"),i=n("wb2y"),c=n("bjog"),u=n("IIOH"),s=n("aRHm"),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f="rgba(0, 0, 0, 0.87)",m=function(e){var t=e.className,n=e.anchor,o=e.open,l=e.dark,m=e.scale,p=void 0===m?1:m,v=e.children,g=e.style,b=void 0===g?{}:g,h=a.a.createElement(i.a,{style:{marginLeft:-24,marginRight:-24,marginTop:12,marginBottom:12}}),y=a.a.Children.toArray(v).filter(Boolean),j=Object(s.a)();return a.a.createElement(c.a,null,a.a.createElement(u.a,{SlideProps:{mountOnEnter:!0,unmountOnExit:!0},variant:"persistent",className:t,open:o,anchor:n,PaperProps:{style:{zIndex:10,backgroundColor:"transparent",border:"none",overflow:"visible",pointerEvents:"none"}}},a.a.createElement("div",{style:d(d(d({pointerEvents:"all",border:(l?f:"rgba(0, 0, 0, 0.12)")+" 1px solid",borderRadius:"4px 4px 0 0",backgroundColor:l?f:"rgba(255,255,255, 0.98)",padding:"12px 24px"},j?{marginLeft:20,marginRight:80}:{marginLeft:"auto",marginRight:"auto",minWidth:"50vw",maxWidth:"min(1280px, calc(100vw - 250px))"}),{boxShadow:"0px 1px 8px -1px rgba(0,0,0,0.4)",position:"relative",transformOrigin:"bottom",transform:"scale("+p+")",transition:"scale 0.3s"}),b)},y.map((function(e,t){return a.a.createElement(r.Fragment,{key:t},e,t<y.length-1?h:null)})))))},p=n("Ff2n"),v=n("wx14"),g=(n("17x9"),n("iuhU")),b=n("H2TA"),h=[0,1,2,3,4,5,6,7,8,9,10],y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var O=r.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,i=e.classes,c=e.className,u=e.component,s=void 0===u?"div":u,d=e.container,f=void 0!==d&&d,m=e.direction,b=void 0===m?"row":m,h=e.item,y=void 0!==h&&h,j=e.justify,O=void 0===j?"flex-start":j,x=e.lg,w=void 0!==x&&x,E=e.md,k=void 0!==E&&E,C=e.sm,S=void 0!==C&&C,I=e.spacing,P=void 0===I?0:I,N=e.wrap,R=void 0===N?"wrap":N,z=e.xl,D=void 0!==z&&z,M=e.xs,L=void 0!==M&&M,T=e.zeroMinWidth,_=void 0!==T&&T,A=Object(p.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(g.a)(i.root,c,f&&[i.container,0!==P&&i["spacing-xs-".concat(String(P))]],y&&i.item,_&&i.zeroMinWidth,"row"!==b&&i["direction-xs-".concat(String(b))],"wrap"!==R&&i["wrap-xs-".concat(String(R))],"stretch"!==l&&i["align-items-xs-".concat(String(l))],"stretch"!==a&&i["align-content-xs-".concat(String(a))],"flex-start"!==O&&i["justify-xs-".concat(String(O))],!1!==L&&i["grid-xs-".concat(String(L))],!1!==S&&i["grid-sm-".concat(String(S))],!1!==k&&i["grid-md-".concat(String(k))],!1!==w&&i["grid-lg-".concat(String(w))],!1!==D&&i["grid-xl-".concat(String(D))]);return r.createElement(s,Object(v.a)({className:H,ref:t},A))})),x=Object(b.a)((function(e){return Object(v.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return h.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(j(a,2)),width:"calc(100% + ".concat(j(a),")"),"& > $item":{padding:j(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};y.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(v.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(O),w=n("469l"),E=n("ofer"),k=n("9yUu"),C=n("z935"),S=n("csfp"),I=n("PsDL"),P=n("FrwU"),N=n.n(P),R=n("QnYI"),z=n("ZGBi"),D=n("UhlP"),M=n("7frF"),L=n.n(M),T=n("CRf/"),_=n.n(T),A=function(e){var t,n,r=e.nodeId,o=e.lang,l=Object(C.i)().t,i=Object(k.e)(r,(function(e){return{isDraft:e.isDraft,isDraftI18n:e.isDraftI18n}})),c=Object(R.j)(r),u=Object(C.f)();if(!i)return null;var s=null!==o&&void 0!==o?o:u,d=Boolean(i.isDraftI18n),f=null!==(n=null===(t=null===i||void 0===i?void 0:i.isDraftI18n)||void 0===t?void 0:t[s])&&void 0!==n?n:null===i||void 0===i?void 0:i.isDraft,m=l(f?"Content is hidden":"Content is visible");return i?a.a.createElement(S.a,{title:m+(d?" in "+s:"")},a.a.createElement(z.a,{style:{marginRight:5},labelPlacement:"start",control:a.a.createElement(D.a,{color:"primary",checked:!f,onChange:function(e){c(!e.target.checked,s)}}),label:f?a.a.createElement(_.a,{style:{marginTop:5}}):a.a.createElement(L.a,{style:{marginTop:5}})})):null},H=n("KH1D"),W=n.n(H),X=a.a.memo((function(e){var t=e.nodeId,n=Object(R.b)(t),r=Object(C.i)().t;return a.a.createElement(S.a,{title:r("Duplicate Plugin")},a.a.createElement(I.a,{onClick:n,"aria-label":"delete",color:"default"},a.a.createElement(W.a,null)))})),$=n("kfFl"),G=n("WHoZ"),F=n.n(G),B=n("cVXz"),U=Object(r.memo)((function(){var e,t=Object(C.g)(),n=Object(C.f)(),r=Object(R.k)();return(null===(e=t.languages)||void 0===e?void 0:e.length)>0?a.a.createElement(B.a,{value:n||"",onChange:function(e){return r(e.target.value)}},t.languages.map((function(e){return a.a.createElement("option",{key:e.lang,value:e.lang},e.label)}))):null})),V=n("EQI2"),q=n("/EAt"),K=n("Z3vd"),Q=function(e){var t,n,o=e.nodeId,l=e.onClose,i=Object(C.f)(),c=Object(C.g)(),u=Object(C.i)().t,s=Object(R.k)(),d=Object(k.c)(o),f=Object(R.m)(o),m=Object(r.useCallback)((function(e){f(null,{lang:e})}),[f]),p=null===(n=null===(t=c.languages)||void 0===t?void 0:t[0])||void 0===n?void 0:n.label;return a.a.createElement(V.a,null,a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement(F.a,{style:{marginRight:"auto"}})," ",a.a.createElement(U,null)),a.a.createElement("hr",null),a.a.createElement(q.a,null,a.a.createElement("tbody",null,c.languages.map((function(e,t){var n=null===d||void 0===d?void 0:d[e.lang],r=i===e.lang,l=Boolean(n);return a.a.createElement("tr",{key:e.lang},a.a.createElement("th",{style:{textAlign:"left",textDecoration:r?"underline":void 0}},a.a.createElement(K.a,{onClick:function(){return s(e.lang)}},e.label," ",0===t?u("(default)"):null)),a.a.createElement("td",null,a.a.createElement(A,{nodeId:o,lang:e.lang})),a.a.createElement("td",null,l?"\u2714\ufe0f":" "),a.a.createElement("td",null,l&&0!==t?a.a.createElement(K.a,{onClick:function(){m(e.lang)}},u("Reset to "+p+" \u26a0\ufe0f")):null))})))),a.a.createElement(K.a,{onClick:function(){return l()}},u("Close")))},Y=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},Z=a.a.memo((function(e){var t,n=e.nodeId,o=Object(C.g)(),l=Y(Object(r.useState)(!1),2),i=l[0],c=l[1],u=function(){return c(!1)};return(null===(t=o.languages)||void 0===t?void 0:t.length)>0?a.a.createElement(a.a.Fragment,null,a.a.createElement($.a,{open:i,onClose:u},a.a.createElement(Q,{nodeId:n,onClose:u})),a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement(I.a,{onClick:function(){return c(!0)},"aria-label":"i18n",color:"secondary"},a.a.createElement(F.a,null)),a.a.createElement(U,null))):null})),J=n("m4gq"),ee=n.n(J),te=a.a.memo((function(e){var t=e.nodeId,n=Object(k.l)(t),r=Object(C.i)().t,o=Object(R.c)(n);return n?a.a.createElement(I.a,{className:"bottomToolbar__selectParentButton",onClick:function(){return o()},color:"default",title:r("Select parent")},a.a.createElement(ee.a,null)):null})),ne=a.a.memo((function(e){var t=e.nodeId,n=Object(C.i)().t,r=Object(R.f)(t);return a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement(Z,{nodeId:t}),a.a.createElement(A,{nodeId:t}),a.a.createElement(X,{nodeId:t}),a.a.createElement(te,{nodeId:t}),a.a.createElement(S.a,{title:n("Remove Plugin")},a.a.createElement(I.a,{onClick:function(){return r()},"aria-label":"delete",color:"secondary"},a.a.createElement(N.a,null))))})),re=a.a.memo((function(e){var t,n=e.nodeId,r=e.actionsLeft,o=null!==(t=Object(k.m)(n))&&void 0!==t?t:{},l=o.title,i=o.icon,c=Object(C.i)().t;return a.a.createElement("div",null,a.a.createElement(x,{container:!0,direction:"row",alignItems:"center"},i||l?a.a.createElement(x,{item:!0},a.a.createElement(w.a,{children:i||l?l[0]:"",style:{marginRight:16}})):null,a.a.createElement(x,{item:!0},a.a.createElement(E.a,{variant:"subtitle1"},c(l))),a.a.Children.map(r,(function(e,t){return a.a.createElement(x,{item:!0,key:t},e)})),a.a.createElement(x,{item:!0,style:{marginLeft:"auto"}},a.a.createElement(ne,{nodeId:n}))))})),ae=n("tWml"),oe=n.n(ae),le=[1,.8,.6,1.2],ie=le[0],ce=function(e){var t=e.scale,n=e.setScale,r=Object(C.i)().t,o=a.a.useCallback((function(){var e=le[(le.indexOf(null!==ie&&void 0!==ie?ie:t)+1)%le.length];n(e),ie=e}),[t,ie,n]);return a.a.createElement(S.a,{title:r("Toggle Scale")},a.a.createElement(I.a,{onClick:o,"aria-label":"toggle scale",color:"primary"},a.a.createElement(oe.a,null)))},ue=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l},se=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(ue(arguments[t]));return e},de=a.a.memo((function(e){var t=e.open,n=void 0!==t&&t,r=e.className,i=e.dark,c=void 0!==i&&i,u=e.theme,s=e.anchor,d=void 0===s?"bottom":s,f=e.pluginControls,p=e.nodeId,v=e.actionsLeft,g=e.style,b=e.children,h=ue(a.a.useState(1),2),y=h[0],j=h[1];return a.a.createElement(o.a,{theme:u||(c?l.a:null)},a.a.createElement(m,{className:r,open:n,anchor:d,scale:y,dark:c,style:g},b,f,a.a.createElement(re,{nodeId:p,actionsLeft:se([a.a.createElement(ce,{key:"scalebutton",scale:y,setScale:j})],a.a.Children.toArray(v))})))}))},r7fV:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("mXGw"),a=n.n(r),o=n("viY9"),l=n("o8Rm"),i=n("bWLx"),c=n("PRV4"),u=Object(c.a)({disableGlobal:!0,seed:"reactPage",productionPrefix:"reactPage"}),s=Object(o.a)({}),d=function(e){return a.a.createElement(l.b,{injectFirst:!0,generateClassName:u},a.a.createElement(i.a,{theme:e.theme||s},e.children))}},tWml:function(e,t,n){"use strict";var r=n("mBgD"),a=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("mXGw")),l=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),"FormatSize");t.default=l},xvhg:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("8rE2");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["gX5J",3,1,0,2,5,4,7,14,16]]]);