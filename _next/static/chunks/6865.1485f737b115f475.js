(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6865,5424],{66471:function(n){"use strict";n.exports=function n(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var e,o,i;if(Array.isArray(t)){if((e=t.length)!=r.length)return!1;for(o=e;0!==o--;)if(!n(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((e=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=e;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=e;0!==o--;){var u=i[o];if(!n(t[u],r[u]))return!1}return!0}return t!==t&&r!==r}},3996:function(n){"use strict";n.exports=function(n,t,r,e,o,i,u,l){if(!n){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,e,o,i,u,l],s=0;(c=new Error(t.replace(/%s/g,(function(){return a[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},25389:function(n,t,r){var e=r(88799),o=r(26194),i=r(89278);n.exports=function(n,t){var r={};return t=i(t,3),o(n,(function(n,o,i){e(r,o,t(n,o,i))})),r}},23548:function(n,t,r){"use strict";r.d(t,{e:function(){return c}});var e=r(25389),o=r.n(e),i=r(27378),u=r(73456),l=r(45453);function c(n,t){function r(r){const[e,c]=(0,l.U)(r.name,r,t),a=function(n,t,r){if("leaf"===(null===r||void 0===r?void 0:r.kind))return n;const e=""!==t.name,i=Object.keys(n.state).some((n=>{const r=t[n];return null!==r&&void 0!==r}));if(!e&&!i)return n;const u=Object.assign({},n);return e&&(u.name=u.name.concat(t.name)),i&&(u.state=o()(u.state,((n,r)=>{const e=t[r];return null!==e&&void 0!==e?!!e:n}))),u}(c,r,t),s=i.createElement(n,Object.assign({},r,e));return c===a?s:i.createElement(u.D.Provider,{children:s,value:a})}return r.displayName=`${n.displayName||n.name}Field`,Object.assign(r,{Component:n,options:t})}},73456:function(n,t,r){"use strict";r.d(t,{D:function(){return e}});const e=(0,r(27378).createContext)(null)},64576:function(n,t,r){"use strict";r.d(t,{m:function(){return f}});const e=/[.[\]]/,o=/"/g;function i(n){return""===n||e.test(n)?`["${n.replace(o,'\\"')}"]`:n}function u(n,t){const r=i(n);return r===n?t?`.${n}`:n:r}const l=/^\["(.*)"]$/,c=/\\"/g;function a(n){const t=l.exec(n);return t?t[1].replace(c,'"'):n}const s=/^([^.[\]]*(?:\.[^.[\]]+)*)(?:\.?(\["(?:(?:[^"]|\\")*?[^\\])?"])\.?(.*))?$/;const f=Object.assign((function(...n){const t=null===n[0],r=[];for(let e=0;e!==n.length;++e){const t=n[e];if(t||0===t)if("string"===typeof t){const o=s.exec(t);if(o){const[,t,i,u]=o;t&&(t.includes(".")?r.push(...t.split(".")):r.push(t)),i&&(r.push(a(i)),u&&(n[e--]=u))}else r.push(t)}else if(Array.isArray(t)){if(t.length){const r=Math.min(e+1,t.length);e-=r,n.splice(e+1,r,...t)}}else r.push(""+t)}return t?r.map(i):r.map(u).join("")}),{escape:i,unescape:a})},45453:function(n,t,r){"use strict";r.d(t,{U:function(){return f}});var e=r(99729),o=r.n(e),i=r(25389),u=r.n(i),l=r(27378),c=r(64576),a=r(45939);function s(n,t,r,e){const o=!0===n||void 0===n,i=!0===t||void 0===t,u=i?e:t;return[""===n||!1===n||null===n||o&&(i||!r)?"":o?u:n,u]}function f(n,t,r){var e;const i=(0,a.c)(),f=(0,c.m)((null===r||void 0===r?void 0:r.absoluteName)?"":i.name,n),p=i.schema.getField(f),v=!1!==(null===r||void 0===r?void 0:r.initialValue),d=v?(0,l.useRef)(!1):{current:!1},h=u()(i.state,((n,r)=>{const e=t[r];return null!==e&&void 0!==e?!!e:n})),g=!!o()(i.changedMap,f),y=i.schema.getError(f,i.error),b=i.schema.getErrorMessage(f,i.error),m=i.schema.getType(f),O=i.schema.getSubfields(f),j=i.schema.getProps(f,Object.assign(Object.assign({},h),t)),[w,C]=s(t.label,j.label,h.label,""),[P]=s(t.placeholder,j.placeholder,h.placeholder,w||C),x=(0,l.useMemo)((()=>i.randomId()),[]),S=(0,l.useCallback)(((n,t=f)=>{d.current=!0,i.onChange(t,n)}),[i.onChange,f]),E=o()(i.model,f);let k,z=null!==(e=t.value)&&void 0!==e?e:E;v&&(d.current||(void 0===z?(z=i.schema.getInitialValue(f,t),k=z):void 0!==t.value&&t.value!==E&&(k=t.value)),(0,l.useEffect)((()=>{var n;(null!==(n=t.required)&&void 0!==n?n:j.required)&&void 0!==k&&S(k)}),[]));return[Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({id:x},h),{changed:g,error:y,errorMessage:b,field:p,fieldType:m,fields:O,onChange:S,value:z}),j),t),{label:w,name:f,placeholder:P}),i]}},45939:function(n,t,r){"use strict";r.d(t,{c:function(){return l}});var e=r(3996),o=r.n(e),i=r(27378),u=r(73456);function l(){const n=(0,i.useContext)(u.D);return o()(null!==n,"useForm must be used within a form."),n}},69774:function(n,t,r){"use strict";var e=r(27378);t.Z=function(n){var t=n.children;return e.createElement(e.Fragment,null,t)}},32365:function(n,t,r){"use strict";r.d(t,{_:function(){return a},Z:function(){return s}});var e=r(28415),o=r(56007),i=r(77876),u=function(){return u=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},u.apply(this,arguments)},l=function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(r[e[o]]=n[e[o]])}return r},c=new i.U({fromVersion:0,toVersion:1,migrate:function(n,t){var r,c,a=n.cells,s=n.id,f=t.lang,p=function(n){var t,r=n.cells,o=l(n,["cells"]);return u(u({},o),{id:(0,e.M)(),cells:null!==(t=null===r||void 0===r?void 0:r.map(v))&&void 0!==t?t:[]})},v=function(n){var t,r,c,a=n.content,s=n.layout,v=n.rows,d=l(n,["content","layout","rows"]),h=null!==s&&void 0!==s?s:a,g=null!==(r=null===h||void 0===h?void 0:h.stateI18n)&&void 0!==r?r:(null===h||void 0===h?void 0:h.state)?((t={})[f]=null!==(c=h.state)&&void 0!==c?c:null,t):void 0,y=h?{id:h.plugin.name,version:(0,i.K)(h.plugin.version)}:void 0;return(0,o.Y)(u(u({},d),{rows:null===v||void 0===v?void 0:v.map(p),plugin:y,dataI18n:g,id:(0,e.M)()}))},d=null!==(r=null===a||void 0===a?void 0:a.map(v))&&void 0!==r?r:[];return{id:s,rows:1!==d.length||d[0].plugin?[{id:(0,e.M)(),cells:d}]:null!==(c=d[0].rows)&&void 0!==c?c:[],version:0}}}),a=1,s=[c]},6026:function(n,t,r){"use strict";r.d(t,{xH:function(){return s},_9:function(){return v},e1:function(){return f},EW:function(){return d},w7:function(){return p}});var e=r(46242),o=function(n){var t;return!n||((0,e.j)(n)?0===n.cells.length:!(n.rows&&(null===(t=n.rows)||void 0===t?void 0:t.length)>0)&&!n.plugin)},i=r(56007),u=function(){return u=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},u.apply(this,arguments)},l=function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(r[e[o]]=n[e[o]])}return r},c=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u},a=function(n,t,r){if(r||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))},s=function(n,t){return a(a([],c(n),!1),c(t),!1)},f=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},p=function(n){return void 0===n&&(n=[]),n.filter((function(n){return!o(n)}))},v=function(n){var t=n.rows,r=l(n,["rows"]),e=u(u({},r),{rows:null===t||void 0===t?void 0:t.map((function(n){var t=n.cells,r=void 0===t?[]:t;if(1!==r.length)return[n];var e=r[0],o=e.rows,i=e.plugin;return o&&(null===o||void 0===o?void 0:o.length)>0&&!i?o:[n]})).reduce(s,[])});return(0,i.Y)(e)},d=function(n){var t=n.cells,r=l(n,["cells"]);return(0,i.Y)(u(u({},r),{cells:null===t||void 0===t?void 0:t.map((function(n){var t=n.rows,r=n.size;if(!t||1!==t.length||n.plugin)return[n];var e=t[0].cells,o=void 0===e?[]:e;return 1===o.length?o.map((function(n){return u(u({},n),{size:r})})):[n]})).reduce(s,[])}))}},9337:function(n,t,r){"use strict";r.d(t,{M:function(){return u}});var e=r(42443),o=r(6026),i=function(){return i=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i.apply(this,arguments)},u=function(n){return void 0===n&&(n=[]),(0,o.w7)(n).map((function(n){var t=(0,o.EW)(n);return t.cells&&(t.cells=(0,e.Ci)((0,e.nq)((0,o.e1)(t.cells.map((function(n){return i(i({},n),{rows:n.rows?u(n.rows):void 0})})))))),t}))}},42443:function(n,t,r){"use strict";r.d(t,{Ci:function(){return u},Wj:function(){return l},nq:function(){return c}});var e=r(61138),o=function(){return o=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},o.apply(this,arguments)},i=function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(r[e[o]]=n[e[o]])}return r},u=function(n){void 0===n&&(n=[]);var t=2===n.length&&n[0].inline?[o(o({},n[0]),{size:n[0].size||Math.round(6)}),o(o({},n[1]),{size:12,hasInlineNeighbour:n[0].id})]:n.map((function(n){n.hasInlineNeighbour;var t=i(n,["hasInlineNeighbour"]);return o(o({},t),{inline:null})}));return(0,e.Z)(n,t)?n:t},l=function(n,t){void 0===n&&(n=[]);var r=t.id,e=t.size,i=0;return n.map((function(n){var t,u;if(i>0){var l=o(o({},n),{size:(null!==(t=n.size)&&void 0!==t?t:0)+i-(null!==e&&void 0!==e?e:0)});return i=0,l}return r===n.id?(n.inline||(i=null!==(u=n.size)&&void 0!==u?u:0),o(o({},n),{size:e})):n}))},c=function(n){void 0===n&&(n=[]);var t=function(n){return void 0===n&&(n=[]),n.reduce((function(n,t){var r=n.size,e=void 0===r?99:r,o=n.inline,i=t.size,u=void 0===i?99:i;return{size:(o?0:1)*e+(t.inline?0:1)*u}}),{size:0}).size}(n);if(12===t)return n;var r=n.length,e=Math.floor(12/r),i=12-e*(r-1);return n.map((function(n,t){return o(o({},n),{size:t===r-1?i:e})}))}},46242:function(n,t,r){"use strict";r.d(t,{j:function(){return e}});var e=function(n){return!!n&&Object.prototype.hasOwnProperty.call(n,"cells")}},28415:function(n,t,r){"use strict";r.d(t,{M:function(){return e}});var e=function(){return Math.random().toString(36).substr(2,6)}},61138:function(n,t,r){"use strict";var e=r(66471),o=r.n(e);t.Z=o()},10186:function(n,t,r){"use strict";r.d(t,{m:function(){return u},q:function(){return l}});var e=function(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(l){o={error:l}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u},o=function(n,t,r){if(r||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))},i=function(n){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},u=function(n,t){if(!(null===t||void 0===t?void 0:t.pluginId))return n;var r=t.pluginId?n.find((function(n){return n.id===t.pluginId})):null;return(null===r||void 0===r?void 0:r.cellPlugins)?(Array.isArray(r.cellPlugins)?r.cellPlugins:r.cellPlugins(n,t.data)).reduceRight((function(n,t){return n.some((function(n){return n.id===t.id}))?n:o([t],e(n),!1)}),[]):n},l=function(n,t){var r,e,o=n;try{for(var l=i(t),c=l.next();!c.done;c=l.next()){var a=c.value;o=u(o,a)}}catch(s){r={error:s}}finally{try{c&&!c.done&&(e=l.return)&&e.call(l)}finally{if(r)throw r.error}}return o}},39277:function(n,t,r){"use strict";r.d(t,{k:function(){return e}});var e=function(n,t){var r,e,o,i=null===n||void 0===n?void 0:n.dataI18n;return null!==(o=null!==(r=null===i||void 0===i?void 0:i[t])&&void 0!==r?r:null===i||void 0===i?void 0:i[null!==(e=Object.keys(i).find((function(n){return i[n]})))&&void 0!==e?e:"default"])&&void 0!==o?o:{}}},40842:function(n,t,r){"use strict";r.d(t,{d:function(){return e},o:function(){return o}});var e=function(n,t){return(null===n||void 0===n?void 0:n.cellSpacing)?"function"===typeof(null===n||void 0===n?void 0:n.cellSpacing)?null===n||void 0===n?void 0:n.cellSpacing(t):null===n||void 0===n?void 0:n.cellSpacing:null},o=function(n){return void 0===n&&(n=0),n?-1!==["number","string"].indexOf(typeof n)?{x:+n||0,y:+n||0}:{x:+n.x||0,y:+n.y||0}:{x:0,y:0}}},56007:function(n,t,r){"use strict";r.d(t,{Y:function(){return o}});var e=function(){return e=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},e.apply(this,arguments)},o=function(n){return Object.keys(n).reduce((function(t,r){var o,i=n[r];return"undefined"===typeof i||null==i?t:e(e({},t),((o={})[r]=i,o))}),{})}},35424:function(n,t,r){"use strict";r.r(t);var e=r(68666),o=r(72697),i=r(2974),u=r(27378),l=r(68624),c=r(21462),a=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),s=function(){return s=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},s.apply(this,arguments)},f=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.anchorEl=null,t.state={isColorPickerVisible:!1},t.handleClickShowColorPicker=function(n){var r;(null===(r=t.props)||void 0===r?void 0:r.onDialogOpen)&&t.props.onDialogOpen(),t.setState({isColorPickerVisible:!t.state.isColorPickerVisible})},t.onChange=function(n){return t.props.onChange&&t.props.onChange(n.rgb)},t.handleChangeComplete=function(n){return t.props.onChangeComplete&&t.props.onChangeComplete(n.rgb)},t}return a(t,n),t.prototype.render=function(){var n,t=this;return u.createElement(u.Fragment,null,u.createElement(e.Z,{ref:function(n){t.anchorEl=n},variant:"contained",onClick:this.handleClickShowColorPicker,style:s(s({},this.props.style),{borderColor:(0,c.U)(this.props.color),borderStyle:"solid",borderWidth:"2px"})},this.props.buttonContent,this.props.icon),u.createElement(o.ZP,{open:this.state.isColorPickerVisible,anchorEl:this.anchorEl,onClose:this.handleClickShowColorPicker,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},u.createElement("div",null,u.createElement(l.AI,{color:null!==(n=this.props.color)&&void 0!==n?n:void 0,onChange:this.onChange,onChangeComplete:this.handleChangeComplete}))))},t.defaultProps={buttonContent:"Change color",icon:u.createElement(i.Z,{style:{marginLeft:"4px",fontSize:"19px"}})},t}(u.Component);t.default=f},44532:function(n,t,r){"use strict";r.r(t);var e=r(27378),o=r(23548),i=r(35424),u=r(21462),l=r(28854),c=(0,o.e)((function(n){var t,r=(0,l.WW)().t;return e.createElement(i.default,{style:{marginBottom:8},color:(0,u.u)(n.value),buttonContent:null!==(t=r(n.label))&&void 0!==t?t:"",onChange:function(t){n.onChange((0,u.U)(t))}})}));t.default=c},21462:function(n,t,r){"use strict";r.d(t,{U:function(){return o},u:function(){return i}});var e=r(39340),o=function(n){return n?"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")":void 0},i=function(n){var t=(0,e.Z)(n);return t&&"rgb"===t.space?{r:t.values[0],g:t.values[1],b:t.values[2],a:t.alpha}:null}}}]);