"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8650],{7256:function(e,t,n){var r=n(27378),o=n(32244),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l};t.Z=function(e){var t=(0,o.kz)(e),n=r.forwardRef(function(e,n){var o,u,c,s=e.fallback,f=void 0===s?null:s,d=l(e,["fallback"]);return(u=(o=a((0,r.useState)(!0),2))[0],c=o[1],(0,r.useEffect)(function(){c(!1)},[]),u)?null!=f?f:null:r.createElement(r.Suspense,{fallback:f},r.createElement(t,i({ref:n},d)))});return n.load=t.preload,n}},77876:function(e,t,n){n.d(t,{K:function(){return o},U:function(){return i}});var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},o=function(e){if(!e)return 0;if("string"!=typeof e)return e;var t=r(e.replace(/\^|\*/g,"").split(".").map(Number),3);return t[0]+.01*t[1]+1e-4*t[2]},i=function(e){var t=e.toVersion,n=e.migrate,r=e.fromVersion,i=e.fromVersionRange;this.toVersion=o(t),this.migrate=n,this.fromVersion=o(null!=r?r:i)}},7108:function(e,t,n){n.d(t,{E:function(){return v},g:function(){return b}});var r=n(16052),o=n(7256),i=n(57434),l=n.n(i),a=n(27378),u=n(71969),c=function(e,t){var n=e.plugins;return(0,a.useMemo)(function(){return n.filter(function(e){return"component"===e.pluginType&&"mark"!==e.object})},t)},s=function(e,t){var n=e.plugins;return(0,a.useMemo)(function(){return n.filter(function(e){return"component"===e.pluginType&&"mark"===e.object})},t)},f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},p=(0,o.Z)(function(){return Promise.all([n.e(5095),n.e(4879),n.e(5482),n.e(6597),n.e(2983),n.e(291),n.e(3355),n.e(4281),n.e(9816),n.e(2965),n.e(9209),n.e(8275),n.e(1106),n.e(6685)]).then(n.bind(n,56685))}),y=function(e){return e&&l()(e)?Object.keys(e).reduce(function(t,n){var o;return(0,r.Z)(n)?f(f({},t),((o={})[n]=e[n],o)):t},{}):{}},m={useFocused:function(){return!1},useSelected:function(){return!1},readOnly:!0},v=function(e,t){var n=e.plugins,r=e.defaultPluginType,o=e.injections,i=void 0===o?m:o,l=c({plugins:n},t);return(0,a.useCallback)(function(e){var t,o=e.element,c=e.children,s=e.attributes,d=o.type,m=o.data,v=void 0===m?{}:m,b=o.children,h=null!==(t=l.find(function(e){return e.type===d}))&&void 0!==t?t:l.find(function(e){return e.type===r});if(h){var g=h.Component,P=h.getStyle,O={children:c,style:P?P(v||{}):void 0};if("string"==typeof g||g instanceof String){var w=y(v);return a.createElement(g,f({},s,O,w))}g.displayName="SlatePlugin("+h.type+")";var E=f({childNodes:b,getTextContents:function(){return(0,u.L)(b,{slatePlugins:n})}},i),I=a.createElement(g,f({},O,v,{attributes:s},E));if(("inline"===h.object||"block"===h.object)&&h.isVoid&&!i.readOnly){var j="inline"===h.object?"span":"div";return a.createElement(j,f({},s,{contentEditable:!1}),c,a.createElement(p,{component:I,element:o,plugin:h}))}return I}return a.createElement("p",null,"unknown component ",d)},t)},b=function(e,t){var n=e.plugins,r=e.injections,o=void 0===r?m:r,i=e.readOnly,u=void 0!==i&&i,c=s({plugins:n},t);return(0,a.useCallback)(function(e){var t=e.leaf,n=t.text,r=d(t,["text"]),i=e.attributes,s=e.children,p=u?a.Fragment:"span";return a.createElement(p,f({},i),Object.keys(r).reduce(function(e,t){var i=c.find(function(e){return e.type===t});if(i){var u=i.Component,s=i.getStyle,d=r[t],p=l()(d)?d:{},m=s?s(p):void 0;if("string"==typeof u||u instanceof String){var v=y(p);return a.createElement(u,f({},v,{style:m}),e)}return a.createElement(u,f({childNodes:[{text:n}],getTextContents:function(){return[n]},useSelected:o.useSelected,useFocused:o.useFocused,style:m},p),e)}return e},s))},t)}},39946:function(e,t,n){n.d(t,{P:function(){return o}});var r=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},o=function(e){var t=e.plugins;return function(e){var o,i,l,a;return o=void 0,i=void 0,l=void 0,a=function(){return r(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(281),n.e(5079)]).then(n.bind(n,75079))];case 1:return[2,(0,r.sent().default)({plugins:t})(e)]}})},new(l||(l=Promise))(function(e,t){function n(e){try{u(a.next(e))}catch(n){t(n)}}function r(e){try{u(a.throw(e))}catch(n){t(n)}}function u(t){var o;t.done?e(t.value):((o=t.value)instanceof l?o:new l(function(e){e(o)})).then(n,r)}u((a=a.apply(o,i||[])).next())})}}},48650:function(e,t,n){n.d(t,{lD:function(){return eC},ZP:function(){return eK}});var r=n(7256),o=n(27378),i=n(1948),l=n(7108),a=o.memo(function(e){var t=e.plugins,n=e.defaultPluginType,r=(0,l.E)({plugins:t,defaultPluginType:n},[]),a=(0,l.g)({plugins:t,readOnly:!0},[]);return o.createElement("div",{style:{position:"relative",outline:"none",whiteSpace:"pre-wrap",overflowWrap:"break-word"}},o.createElement(i.H,{renderElement:r,renderLeaf:a,value:e.data.slate,LeafWrapper:o.Fragment}))}),u=n(39946),c=n(77876),s=n(757),f=n.n(s),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=new c.U({toVersion:"0.0.2",fromVersionRange:"^0.0.1",migrate:function(e){return e=d(d({},e),e.serialized?{serialized:{document:e.serialized}}:{}),e=f()(e,function(e){switch(e){case"kind":return"object";case"ranges":return"leaves";default:return e}})}}),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},v=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},b=function(e){return e?e.reduce(function(e,t){if(t.leaves)return v(v([],m(e),!1),m(t.leaves.map(function(e){return y(y({},e),{object:"text"})})),!1);var n=t.nodes?y(y({},t),{nodes:b(t.nodes)}):t;return v(v([],m(e),!1),[n],!1)},[]):[]},h=new c.U({toVersion:"0.0.3",fromVersionRange:"^0.0.2",migrate:function(e){return e?e.serialized&&e.serialized.document?y(y({},e),{serialized:y(y({},e.serialized),{document:y(y({},e.serialized.document),{nodes:b(e.serialized.document.nodes)})})}):e:{}}}),g=n(22712),P=n.n(g),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},w=function(e){var t,n;return O({text:e.text},null!==(n=null===(t=e.marks)||void 0===t?void 0:t.reduce(function(e,t){var n;return O(O({},e),((n={})[t.type]=!!P()(t.data)||t.data,n))},{}))&&void 0!==n?n:{})},E=function(e){var t,n,r;return{data:null!==(t=e.data)&&void 0!==t?t:{},type:e.type,children:null!==(r=null===(n=e.nodes)||void 0===n?void 0:n.map(I))&&void 0!==r?r:[]}},I=function(e){return"text"===e.object?w(e):E(e)},j=new c.U({toVersion:"0.0.4",fromVersionRange:"^0.0.3",migrate:function(e){if(!e)return{};var t,n,r,o,i={slate:null!==(o=null===(r=null===(n=null===(t=e.serialized)||void 0===t?void 0:t.document)||void 0===n?void 0:n.nodes)||void 0===r?void 0:r.map(I))&&void 0!==o?o:[]};return e.importFromHtml&&(i.importFromHtml=e.importFromHtml),i}}),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},S=function e(t){var n=function(n){return void 0===n&&(n=function(e){return e}),e(n(t))};return n.toPlugin=function(){return k({pluginType:"data"},t)},n},T=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(6193)]).then(n.bind(n,16193))}),N=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(2259)]).then(n.bind(n,32259))}),A=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(4673)]).then(n.bind(n,94673))}),L=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(4068)]).then(n.bind(n,64068))}),Z=S({icon:o.createElement(T,null),label:"Align Left",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return(null==e?void 0:e.align)==="left"},getInitialData:function(){return{align:"left"}}}),x=S({icon:o.createElement(N,null),label:"Align Center",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return(null==e?void 0:e.align)==="center"},getInitialData:function(){return{align:"center"}}}),D=S({icon:o.createElement(A,null),label:"Align Right",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return(null==e?void 0:e.align)==="right"},getInitialData:function(){return{align:"right"}}}),H=S({icon:o.createElement(L,null),label:"Align Justify",object:"block",addToolbarButton:!0,addHoverButton:!1,dataMatches:function(e){return(null==e?void 0:e.align)==="justify"},getInitialData:function(){return{align:"justify"}}}),B=n(60686),R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},z=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(7529)]).then(n.bind(n,97529))}),C=(0,B.Z)({type:"CODE/CODE",object:"block",icon:o.createElement(z,null),label:"Code Block",addToolbarButton:!0,addHoverButton:!1,deserialize:{tagName:"code"},Component:function(e){var t=e.children,n=e.attributes;return o.createElement("code",R({},n,{style:{display:"block",overflow:"scroll"}}),t)}}),G=(0,B.Z)({type:"CODE/CODE",object:"mark",icon:o.createElement(z,null),label:"Code",addHoverButton:!0,addToolbarButton:!1,deserialize:{tagName:"code"},Component:function(e){var t=e.children,n=e.attributes;return o.createElement("code",R({style:{whiteSpace:"pre-wrap"}},n),t)}}),K=function(){return(K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F=function(e){return(0,B.Z)({type:e.type,object:"mark",hotKey:e.hotKey,icon:e.icon,label:e.label,addToolbarButton:!1,addHoverButton:!0,deserialize:{tagName:e.tagName},Component:function(t){var n=t.children,r=t.attributes,i=e.tagName;return o.createElement(i,K({},r),n)}})},M=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(7627)]).then(n.bind(n,7627))}),U=F({type:"EMPHASIZE/EM",tagName:"em",icon:o.createElement(M,null),label:"Italic",hotKey:"mod+i"}),V=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(4194)]).then(n.bind(n,4194))}),W=F({type:"EMPHASIZE/STRONG",tagName:"strong",icon:o.createElement(V,null),label:"Bold",hotKey:"mod+b"}),_=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(1716)]).then(n.bind(n,21716))}),q=F({type:"EMPHASIZE/U",tagName:"u",icon:o.createElement(_,null),label:"Underline",hotKey:"mod+u"}),Q=n(39417),J=function(e){return(0,Q.Z)({type:e.type,hotKey:"mod+"+e.level,replaceWithDefaultOnRemove:!0,icon:e.icon,label:"Heading ".concat(e.level),tagName:"h"+e.level})},X=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(7831)]).then(n.bind(n,7831))}),Y=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(1273)]).then(n.bind(n,31273))}),$=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(6675)]).then(n.bind(n,36675))}),ee=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(6069)]).then(n.bind(n,26069))}),et=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(8484)]).then(n.bind(n,48484))}),en=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(6)]).then(n.bind(n,10006))}),er={h1:J({type:"HEADINGS/HEADING-ONE",level:1,icon:o.createElement(X,null)}),h2:J({type:"HEADINGS/HEADING-TWO",level:2,icon:o.createElement(Y,null)}),h3:J({type:"HEADINGS/HEADING-THREE",level:3,icon:o.createElement($,null)}),h4:J({type:"HEADINGS/HEADING-FOUR",level:4,icon:o.createElement(ee,null)}),h5:J({type:"HEADINGS/HEADING-FIVE",level:5,icon:o.createElement(et,null)}),h6:J({type:"HEADINGS/HEADING-SIX",level:6,icon:o.createElement(en,null)})},eo=function(){return(eo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ei=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(8489)]).then(n.bind(n,58489))}),el=(0,B.Z)({type:"LINK/LINK",object:"inline",icon:o.createElement(ei,null),label:"Link",addHoverButton:!0,addToolbarButton:!0,controls:{type:"autoform",schema:{type:"object",required:["href"],properties:{href:{type:"string"},openInNewWindow:{type:"boolean"}}}},deserialize:{tagName:"a",getData:function(e){return{href:e.getAttribute("href")||"",openInNewWindow:"_blank"===e.getAttribute("target")}}},Component:function(e){var t=e.children,n=e.openInNewWindow,r=e.href,i=e.attributes;return o.createElement("a",eo({},i,{target:n?"_blank":void 0,href:r}),t)}}),ea=S({addHoverButton:!1,addToolbarButton:!0,object:"block",label:"Id for Link Anchor",icon:o.createElement("span",null,"#"),properties:["id"],dataMatches:function(e){return Boolean(null==e?void 0:e.id)},controls:{type:"autoform",schema:{type:"object",required:["id"],properties:{id:{type:"string"}}}}}),eu=n(49776),ec=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(l,a)}u((r=r.apply(e,t||[])).next())})},es=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},ef=n(55386),ed=n(84027),ep=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(3596)]).then(n.bind(n,23596))}),ey=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(2662)]).then(n.bind(n,2662))}),em=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(5779)]).then(n.bind(n,5779))}),ev=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(5749)]).then(n.bind(n,15749))}),eb=(0,ef.Z)({type:ed.OL,icon:o.createElement(ey,null),label:"Ordered List",tagName:"ol"}),eh=(0,ef.Z)({type:ed.UL,icon:o.createElement(ep,null),label:"Unordered List",tagName:"ul"}),eg=(0,eu.Z)({tagName:"li",type:ed.LI}),eP=function e(t){var r=function(n){return e(n(t))};return r.toPlugin=function(){return[{pluginType:"custom",addToolbarButton:!0,addHoverButton:!1,icon:t.iconIncrease,label:t.labelIncrease,customAdd:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return(0,r.sent().increaseListIndention)(e,{listItemType:t.listItemType}),[2]}})})},customRemove:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return(0,r.sent().decreaseListIndention)(e,{listItemType:t.listItemType}),[2]}})})},isDisabled:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return[2,!(0,r.sent().getPreviousListItem)(e,t.listItemType)]}})})}},{pluginType:"custom",addToolbarButton:!0,addHoverButton:!1,icon:t.iconDecrease,label:t.labelDecrease,customAdd:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return(0,r.sent().decreaseListIndention)(e,{listItemType:t.listItemType}),[2]}})})},customRemove:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(r){switch(r.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return(0,r.sent().increaseListIndention)(e,{listItemType:t.listItemType}),[2]}})})},isDisabled:function(e){return ec(void 0,void 0,void 0,function(){return es(this,function(t){switch(t.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return[2,!(0,t.sent().getActiveListType)(e)]}})})}}]},r}({iconIncrease:o.createElement(em,null),iconDecrease:o.createElement(ev,null),listItemType:ed.LI,labelIncrease:"Increase Indentation",labelDecrease:"Decrease Indentation"}),eO=n(60884),ew=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(5574)]).then(n.bind(n,5574))}),eE={blockQuote:(0,Q.Z)({type:"BLOCKQUOTE/BLOCKQUOTE",icon:o.createElement(ew,null),label:"Quote",tagName:"blockquote"})},eI={paragraphs:eO.Z,headings:er,link:{anchor:ea,link:el},lists:{ol:eb,ul:eh,li:eg,indention:eP},quotes:eE,code:{mark:G,block:C},emphasize:{em:U,strong:W,underline:q},alignment:{left:Z,center:x,right:D,justify:H}},ej=n(71969);function ek(e){return Array.isArray(e)?e.reduce(function(e,t){return Array.isArray(t)?e.concat(ek(t)):e.concat(t)},[]):[e]}var eS=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},eT=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},eN=function(){return(eN=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},eA=function(e){return e.map(function(e){var t;if(e.plugin){var n=ek(e.plugin.toPlugin?e.plugin.toPlugin():e.plugin).find(function(e){return"component"===e.pluginType||e});return n&&"component"===n.pluginType?eN(eN({type:n.type},null!==(t=e.data)&&void 0!==t?t:{}),{children:e.children?eA(e.children):[]}):null}if("string"==typeof e)return{text:e}})},eL=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},eZ=function(){return(eZ=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ex=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},eD=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},eH=(0,r.Z)(function(){return Promise.all([n.e(5095),n.e(5240),n.e(4512),n.e(8275),n.e(8854),n.e(4841)]).then(n.bind(n,63466))}),eB=(0,r.Z)(function(){return Promise.all([n.e(4879),n.e(4414)]).then(n.bind(n,54414))}),eR=(0,r.Z)(function(){return Promise.all([n.e(5095),n.e(4879),n.e(5482),n.e(6597),n.e(2983),n.e(291),n.e(3355),n.e(4281),n.e(9816),n.e(5240),n.e(4512),n.e(2965),n.e(9209),n.e(8275),n.e(1106),n.e(8854),n.e(5869),n.e(2261)]).then(n.bind(n,77912))}),ez=(0,r.Z)(function(){return Promise.all([n.e(5095),n.e(8275),n.e(5788)]).then(n.bind(n,25788))}),eC="ory/editor/core/content/slate",eG={icon:o.createElement(eB,null),plugins:eI,defaultPluginType:"PARAGRAPH/PARAGRAPH",id:eC,version:1,translations:{pluginName:"Text",pluginDescription:"An advanced rich text area.",placeholder:"Write here...",linkPlugin:{cancel:"Cancel",ok:"Ok",createLink:"Create a link",linkTitlePlaceholder:"Link title",linkHrefPlaceholder:"http://example.com/my/link.html",linkOpenInNewWindowLabel:"Open in new window"}},migrations:[p,h,j],allowInlineNeighbours:!0},eK=function(e){var t,n=e?e(eG):eG,r=function(e){return e?{slate:eA(e({plugins:n.plugins}).children)}:{slate:[]}},i=function(){return r(function(e){return{children:[{plugin:e.plugins.paragraphs.paragraph,children:[""]}]}})},l=Object.keys(t=n.plugins).reduce(function(e,n){var r=Object.keys(t[n]).reduce(function(e,r){var o=t[n][r],i=o.toPlugin?o.toPlugin():o;return eT(eT([],eS(e),!1),eS(ek(i)),!1)},[]);return eT(eT([],eS(e),!1),eS(r),!1)},[]),c=(0,u.P)({plugins:l});return{Renderer:function(e){var t,r,i,u,c=eZ(eZ({},e),{plugins:l,translations:n.translations,defaultPluginType:n.defaultPluginType}),s=eD((r=(t=eL(o.useState(!1),2))[0],i=t[1],u=o.useRef(!1),o.useEffect(function(){return u.current=!0,function(){u.current=!1}},[]),[r,o.useCallback(function(e){if(u.current)return i(e)},[u,i])]),2),f=s[0],d=s[1];return(e.readOnly||f||ez.load().then(function(){return d(!0)}),e.readOnly||!f)?o.createElement(a,eZ({},c)):o.createElement(eH,eZ({},c,{fallback:o.createElement(a,eZ({},c))}))},Provider:function(e){return o.createElement(ez,eZ({},e,{plugins:l,translations:n.translations,defaultPluginType:n.defaultPluginType,fallback:o.createElement(o.Fragment,null,e.children)}))},disableProviderInReadOnly:!0,controls:{type:"custom",Component:function(e){return o.createElement(eR,eZ({},e,{plugins:l,translations:n.translations}))}},id:n.id||n.name,version:n.version,icon:n.icon,title:n.title||n.translations.pluginName,description:n.description||n.translations.pluginDescription,hideInMenu:n.hideInMenu,allowInlineNeighbours:n.allowInlineNeighbours,allowClickInside:!0,handleRemoveHotKey:function(){return Promise.reject()},handleFocusPreviousHotKey:function(){return Promise.reject()},handleFocusNextHotKey:function(e,t){return Promise.reject()},createInitialData:i,createInitialState:i,createInitialSlateState:r,createData:r,createDataFromHtml:c,getTextContents:function(e){return(0,ej.L)(e.slate,{slatePlugins:l})},serialize:function(e){return void 0===e&&(e={slate:[]}),eZ({slate:e.slate},(e.selection,ex(e,["slate","selection"])))},cellClassName:"slate",unserialize:function(e){return(null==e?void 0:e.importFromHtml)?eZ(eZ({importFromHtml:e.importFromHtml},e),i()):(null==e?void 0:e.slate)?eZ(eZ({},e),{selection:null}):i()},migrations:n.migrations}}},60686:function(e,t){var n=function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.Z=function e(t){var r=function(n){return void 0===n&&(n=function(e){return e}),e(n(t))};return r.toPlugin=function(){return n(n({},t),{pluginType:"component"})},r}},49776:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(39417);function o(e){return(0,r.Z)({noButton:!0,tagName:e.tagName,type:e.type})}},55386:function(e,t,n){var r=n(84027),o=n(49776),i=n(39417),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(l,a)}u((r=r.apply(e,t||[])).next())})},u=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.Z=function(e){var t,c=l(l({},e),{type:r.v+e.type,listItem:null!==(t=e.listItem)&&void 0!==t?t:{tagName:"li",type:r.LI}}),s=function(e,t){var l=function(n){return s(e,{customizeList:function(e){var r=(null==t?void 0:t.customizeList)?t.customizeList(e):e;return(null==n?void 0:n.customizeList)?n.customizeList(r):r},customizeListItem:function(e){var r=(null==t?void 0:t.customizeList)?t.customizeListItem(e):e;return(null==n?void 0:n.customizeList)?n.customizeListItem(r):r}})};return l.toPlugin=function(){return(function(e,t){var l,c=this;void 0===t&&(t={});var s=null!==(l=e.listItem)&&void 0!==l?l:{tagName:"li",type:r.LI};return[(0,i.Z)({type:e.type,icon:e.icon,label:e.label,noButton:e.noButton,tagName:e.tagName,getStyle:e.getStyle,customAdd:function(t){return a(c,void 0,void 0,function(){var r,o,i,l;return u(this,function(a){switch(a.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:if(o=(r=a.sent()).getActiveList,i=r.increaseListIndention,l=o(t))return[3,2];return i(t,{listItemType:s.type},e.type),[3,4];case 2:return[4,Promise.all([n.e(5095),n.e(92)]).then(n.bind(n,85912))];case 3:a.sent().Transforms.setNodes(t,{type:e.type},{at:l[1]}),a.label=4;case 4:return[2]}})})},customRemove:function(e){return a(c,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,Promise.all([n.e(5095),n.e(2980)]).then(n.bind(n,31640))];case 1:return(0,t.sent().decreaseListIndention)(e,{listItemType:s.type}),[2]}})})}})(t.customizeList),(0,o.Z)(s)(t.customizeListItem)]})(e,t).map(function(e){return e.toPlugin()})},l};return s(c)}},39417:function(e,t,n){var r=n(60884),o=n(60686),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.Z=function(e){return(0,o.Z)({type:e.type,object:"block",hotKey:e.hotKey,replaceWithDefaultOnRemove:e.replaceWithDefaultOnRemove,icon:e.icon,label:e.label,onKeyDown:e.onKeyDown,addToolbarButton:!e.noButton,customAdd:e.customAdd,customRemove:e.customRemove,controls:e.controls,addHoverButton:!1,deserialize:{tagName:e.tagName,getData:e.getData||r.D},getStyle:function(t){var n,r;return i({textAlign:t.align},null!==(r=null===(n=e.getStyle)||void 0===n?void 0:n.call(e,t))&&void 0!==r?r:{})},Component:e.tagName})}},84027:function(e,t,n){n.d(t,{LI:function(){return l},OL:function(){return i},UL:function(){return o},v:function(){return r}});var r="LISTS/",o="UNORDERED-LIST",i="ORDERED-LIST",l="LISTS/LIST-ITEM"},60884:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(60686),o=function(e){var t,n=null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.textAlign;if(n)return{align:n}};t.Z={paragraph:(0,r.Z)({type:"PARAGRAPH/PARAGRAPH",label:"Paragraph",object:"block",addToolbarButton:!1,addHoverButton:!1,deserialize:{tagName:"p",getData:o},getStyle:function(e){return{textAlign:e.align}},Component:"p"}),pre:(0,r.Z)({type:"PARAGRAPH/PRE",label:"Pre",object:"block",addToolbarButton:!1,addHoverButton:!1,deserialize:{tagName:"pre",getData:o},getStyle:function(e){return{textAlign:e.align}},Component:"pre"})}},71969:function(e,t,n){n.d(t,{L:function(){return l}});var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l},o=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},i=function(e){return Boolean(e.text)},l=function(e,t){return e.reduce(function(e,n){if(i(n))return o(o([],r(e),!1),[n.text],!1);if(!n.children)return e;var a=l(n.children,t),u=n.children.every(function(e){if(i(e))return!0;var n=t.slatePlugins.find(function(t){return"component"===t.pluginType&&t.type===e.type});return!n||"block"!==n.object});return o(o([],r(e),!1),r(u?[a.join("")]:a),!1)},[])}}}]);
//# sourceMappingURL=8650-a562e079ec9ba02e.js.map