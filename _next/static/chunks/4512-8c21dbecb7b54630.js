"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4512],{35870:function(e,t){function r(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var n=r();n.withExtraArgument=r,t.Z=n},90893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ActionCreators=t.ActionTypes=void 0;var r={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"};t.ActionTypes=r,t.ActionCreators={undo:function(){return{type:r.UNDO}},redo:function(){return{type:r.REDO}},jumpToFuture:function(e){return{type:r.JUMP_TO_FUTURE,index:e}},jumpToPast:function(e){return{type:r.JUMP_TO_PAST,index:e}},jump:function(e){return{type:r.JUMP,index:e}},clearHistory:function(){return{type:r.CLEAR_HISTORY}}}},80536:function(e,t){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.set=function(e){n=e},t.start=function(e,t){i={header:[],prev:[],action:[],next:[],msgs:[]},n&&(console.group?(i.header=["%credux-undo","font-style: italic","action",e.type],i.action=a("action",o.action,e),i.prev=a("prev history",o.prevState,t)):(i.header=["redux-undo action",e.type],i.action=["action",e],i.prev=["prev history",t]))},t.end=function(e){if(n){var t,s,u,c,l,d,h,f,p,g,v,y,m,T,D;console.group?i.next=a("next history",o.nextState,e):i.next=["next history",e],v=i.header,y=i.prev,m=i.next,T=i.action,D=i.msgs,console.group?((t=console).groupCollapsed.apply(t,r(v)),(s=console).log.apply(s,r(y)),(u=console).log.apply(u,r(T)),(c=console).log.apply(c,r(m)),(l=console).log.apply(l,r(D)),console.groupEnd()):((d=console).log.apply(d,r(v)),(h=console).log.apply(h,r(y)),(f=console).log.apply(f,r(T)),(p=console).log.apply(p,r(m)),(g=console).log.apply(g,r(D)))}},t.log=function(){if(n){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];i.msgs=i.msgs.concat([].concat(t,["\n"]))}};var n,i,o={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function a(e,t,r){return["%c".concat(e),"color: ".concat(t,"; font-weight: bold"),r]}},85996:function(e,t){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(e)?e:"string"==typeof e?[e]:t}Object.defineProperty(t,"__esModule",{value:!0}),t.parseActions=r,t.isHistory=function(e){return void 0!==e.present&&void 0!==e.future&&void 0!==e.past&&Array.isArray(e.future)&&Array.isArray(e.past)},t.includeAction=function(e){var t=r(e);return function(e){return t.indexOf(e.type)>=0}},t.excludeAction=function(e){var t=r(e);return function(e){return 0>t.indexOf(e.type)}},t.combineFilters=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){return function(r,n,i){return e(r,n,i)&&t(r,n,i)}},function(){return!0})},t.groupByActionTypes=function(e){var t=r(e);return function(e){return t.indexOf(e.type)>=0?e.type:null}},t.newHistory=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{past:e,present:t,future:r,group:n,_latestUnfiltered:t,index:e.length,limit:e.length+r.length+1}}},92795:function(e,t,r){Object.defineProperty(t,"MF",{enumerable:!0,get:function(){return i.ActionTypes}}),Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return o.default}});var n,i=r(90893);r(85996);var o=(n=r(37809))&&n.__esModule?n:{default:n}},37809:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i.set(r.debug);var n=c({limit:void 0,filter:function(){return!0},groupBy:function(){return null},undoType:o.ActionTypes.UNDO,redoType:o.ActionTypes.REDO,jumpToPastType:o.ActionTypes.JUMP_TO_PAST,jumpToFutureType:o.ActionTypes.JUMP_TO_FUTURE,jumpType:o.ActionTypes.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1},r,{initTypes:(0,a.parseActions)(r.initTypes,["@@redux-undo/INIT"]),clearHistoryType:(0,a.parseActions)(r.clearHistoryType,[o.ActionTypes.CLEAR_HISTORY])}),s=n.neverSkipReducer?function(t,r){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return c({},t,{present:e.apply(void 0,[t.present,r].concat(i))})}:function(e){return e};return function(){var r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i.start(u,o);for(var c=o,g=arguments.length,v=Array(g>2?g-2:0),y=2;y<g;y++)v[y-2]=arguments[y];if(!t){if(i.log("history is uninitialized"),void 0===o)return c=d(e.apply(void 0,[o,{type:"@@redux-undo/CREATE_HISTORY"}].concat(v)),n.ignoreInitialState),i.log("do not set initialState on probe actions"),i.end(c),c;(0,a.isHistory)(o)?(c=t=n.ignoreInitialState?o:(0,a.newHistory)(o.past,o.present,o.future),i.log("initialHistory initialized: initialState is a history",t)):(c=t=d(o,n.ignoreInitialState),i.log("initialHistory initialized: initialState is not a history",t))}switch(u.type){case void 0:return c;case n.undoType:return r=p(c,-1),i.log("perform undo"),i.end(r),s.apply(void 0,[r,u].concat(v));case n.redoType:return r=p(c,1),i.log("perform redo"),i.end(r),s.apply(void 0,[r,u].concat(v));case n.jumpToPastType:return r=f(c,u.index),i.log("perform jumpToPast to ".concat(u.index)),i.end(r),s.apply(void 0,[r,u].concat(v));case n.jumpToFutureType:return r=h(c,u.index),i.log("perform jumpToFuture to ".concat(u.index)),i.end(r),s.apply(void 0,[r,u].concat(v));case n.jumpType:return r=p(c,u.index),i.log("perform jump to ".concat(u.index)),i.end(r),s.apply(void 0,[r,u].concat(v));case m=u.type,n.clearHistoryType.indexOf(m)>-1?m:!m:return r=d(c.present,n.ignoreInitialState),i.log("perform clearHistory"),i.end(r),s.apply(void 0,[r,u].concat(v));default:if(r=e.apply(void 0,[c.present,u].concat(v)),n.initTypes.some(function(e){return e===u.type}))return i.log("reset history due to init action"),i.end(t),t;if(c._latestUnfiltered===r)return c;if("function"==typeof n.filter&&!n.filter(u,r,c)){var m,T,D,b,S,E,O,w,N,I=(0,a.newHistory)(c.past,r,c.future,c.group);return n.syncFilter||(I._latestUnfiltered=c._latestUnfiltered),i.log("filter ignored action, not storing it in past"),i.end(I),I}var x=n.groupBy(u,r,c);if(null!=x&&x===c.group){var P=(0,a.newHistory)(c.past,r,c.future,c.group);return i.log("groupBy grouped the action with the previous action"),i.end(P),P}return T=c,D=r,b=n.limit,S=T.past.length+1,i.log("inserting",D),i.log("new free: ",b-S),E=T.past,O=T._latestUnfiltered,w=E.slice(b&&b<=S?1:0),N=null!=O?[].concat(l(w),[O]):w,c=(0,a.newHistory)(N,D,[],x),i.log("inserted new state into history"),i.end(c),c}}};var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(80536)),o=r(90893),a=r(85996);function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,i;n=e,i=r[t],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){var r=(0,a.newHistory)([],e,[]);return t&&(r._latestUnfiltered=null),r}function h(e,t){if(t<0||t>=e.future.length)return e;var r=e.past,n=e.future,i=e._latestUnfiltered,o=[].concat(l(r),[i],l(n.slice(0,t))),s=n[t],u=n.slice(t+1);return(0,a.newHistory)(o,s,u)}function f(e,t){if(t<0||t>=e.past.length)return e;var r=e.past,n=e.future,i=e._latestUnfiltered,o=r.slice(0,t),s=[].concat(l(r.slice(t+1)),[i],l(n)),u=r[t];return(0,a.newHistory)(o,u,s)}function p(e,t){return t>0?h(e,t-1):t<0?f(e,e.past.length+t):e}},57001:function(e,t){if("function"==typeof Symbol&&Symbol.for){var r=Symbol.for;r("react.element"),r("react.portal"),r("react.fragment"),r("react.strict_mode"),r("react.profiler"),r("react.provider"),r("react.context"),r("react.forward_ref"),r("react.suspense"),r("react.suspense_list"),r("react.memo"),r("react.lazy"),r("react.block"),r("react.server.block"),r("react.fundamental"),r("react.debug_trace_mode"),r("react.legacy_hidden")}},37353:function(e,t,r){r(57001)},9673:function(e,t,r){r.d(t,{zt:function(){return c},AS:function(){return f},gR:function(){return g},fw:function(){return d}});var n=r(27378),i=n.createContext(null),o=function(e){e()},a={notify:function(){},get:function(){return[]}};function s(e,t){var r,n=a;function i(){u.onStateChange&&u.onStateChange()}function s(){if(!r){var a,s,u;r=t?t.addNestedSub(i):e.subscribe(i),a=o,s=null,u=null,n={clear:function(){s=null,u=null},notify:function(){a(function(){for(var e=s;e;)e.callback(),e=e.next})},get:function(){for(var e=[],t=s;t;)e.push(t),t=t.next;return e},subscribe:function(e){var t=!0,r=u={callback:e,next:null,prev:u};return r.prev?r.prev.next=r:s=r,function(){t&&null!==s&&(t=!1,r.next?r.next.prev=r.prev:u=r.prev,r.prev?r.prev.next=r.next:s=r.next)}}}}}var u={addNestedSub:function(e){return s(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(r)},trySubscribe:s,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=a)},getListeners:function(){return n}};return u}var u="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect,c=function(e){var t=e.store,r=e.context,o=e.children,a=(0,n.useMemo)(function(){var e=s(t);return{store:t,subscription:e}},[t]),c=(0,n.useMemo)(function(){return t.getState()},[t]);return u(function(){var e=a.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}},[a,c]),n.createElement((r||i).Provider,{value:a},o)};function l(){return(0,n.useContext)(i)}function d(e){void 0===e&&(e=i);var t=e===i?l:function(){return(0,n.useContext)(e)};return function(){return t().store}}r(55839),r(37353),r(25773);var h=d();function f(e){void 0===e&&(e=i);var t=e===i?h:d(e);return function(){return t().dispatch}}var p=function(e,t){return e===t};function g(e){void 0===e&&(e=i);var t=e===i?l:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=p);var i=t(),o=function(e,t,r,i){var o,a=(0,n.useReducer)(function(e){return e+1},0)[1],c=(0,n.useMemo)(function(){return s(r,i)},[r,i]),l=(0,n.useRef)(),d=(0,n.useRef)(),h=(0,n.useRef)(),f=(0,n.useRef)(),p=r.getState();try{if(e!==d.current||p!==h.current||l.current){var g=e(p);o=void 0!==f.current&&t(g,f.current)?f.current:g}else o=f.current}catch(v){throw l.current&&(v.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),v}return u(function(){d.current=e,h.current=p,f.current=o,l.current=void 0}),u(function(){function e(){try{var e=r.getState();if(e===h.current)return;var n=d.current(e);if(t(n,f.current))return;f.current=n,h.current=e}catch(i){l.current=i}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}},[r,c]),o}(e,r,i.store,i.subscription);return(0,n.useDebugValue)(o),o}}o=r(31542).unstable_batchedUpdates},91179:function(e,t,r){r.d(t,{PD:function(){return S}});var n={};function i(e){let t=null,r=()=>(null==t&&(t=e()),t);return r}r.r(n),r.d(n,{FILE:function(){return d},HTML:function(){return p},TEXT:function(){return f},URL:function(){return h}});class o{enter(e){let t=this.entered.length,r=t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e));return this.entered=function(e,t){let r=new Set,n=e=>r.add(e);e.forEach(n),t.forEach(n);let i=[];return r.forEach(e=>i.push(e)),i}(this.entered.filter(r),[e]),0===t&&this.entered.length>0}leave(e){let t=this.entered.length;return this.entered=this.entered.filter(this.isNodeInDocument).filter(t=>t!==e),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}let a=i(()=>/firefox/i.test(navigator.userAgent)),s=i(()=>Boolean(window.safari));class u{interpolate(e){let t;let{xs:r,ys:n,c1s:i,c2s:o,c3s:a}=this,s=r.length-1;if(e===r[s])return n[s];let u=0,c=a.length-1;for(;u<=c;){t=Math.floor(.5*(u+c));let l=r[t];if(l<e)u=t+1;else{if(!(l>e))return n[t];c=t-1}}s=Math.max(0,c);let d=e-r[s],h=d*d;return n[s]+i[s]*d+o[s]*h+a[s]*d*h}constructor(e,t){let r,n,i;let{length:o}=e,a=[];for(let s=0;s<o;s++)a.push(s);a.sort((t,r)=>e[t]<e[r]?-1:1);let u=[],c=[],l=[];for(let d=0;d<o-1;d++)r=e[d+1]-e[d],n=t[d+1]-t[d],c.push(r),u.push(n),l.push(n/r);let h=[l[0]];for(let f=0;f<c.length-1;f++){let p=l[f],g=l[f+1];if(p*g<=0)h.push(0);else{r=c[f];let v=c[f+1],y=r+v;h.push(3*y/((y+v)/p+(y+r)/g))}}h.push(l[l.length-1]);let m=[],T=[];for(let D=0;D<h.length-1;D++){i=l[D];let b=h[D],S=1/c[D],E=b+h[D+1]-i-i;m.push((i-b-E)*S),T.push(E*S*S)}this.xs=e,this.ys=t,this.c1s=h,this.c2s=m,this.c3s=T}}function c(e){let t=1===e.nodeType?e:e.parentElement;if(!t)return null;let{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function l(e){return{x:e.clientX,y:e.clientY}}let d="__NATIVE_FILE__",h="__NATIVE_URL__",f="__NATIVE_TEXT__",p="__NATIVE_HTML__";function g(e,t,r){let n=t.reduce((t,r)=>t||e.getData(r),"");return null!=n?n:r}let v={[d]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[p]:{exposeProperties:{html:(e,t)=>g(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[h]:{exposeProperties:{urls:(e,t)=>g(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[f]:{exposeProperties:{text:(e,t)=>g(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};class y{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})})}loadDataTransfer(e){if(e){let t={};Object.keys(this.config.exposeProperties).forEach(r=>{let n=this.config.exposeProperties[r];null!=n&&(t[r]={value:n(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}function m(e){if(!e)return null;let t=Array.prototype.slice.call(e.types||[]);return Object.keys(v).filter(e=>{let r=v[e];return null!=r&&!!r.matchesTypes&&r.matchesTypes.some(e=>t.indexOf(e)>-1)})[0]||null}class T{get window(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,i;n=e,i=r[t],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i})}return e}class b{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){let e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){let e=this.rootElement;if(void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,t,r){return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,r){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);let n=t=>this.handleDragStart(t,e),i=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",n),t.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",n),t.removeEventListener("selectstart",i),t.setAttribute("draggable","false")}}connectDropTarget(e,t){let r=t=>this.handleDragEnter(t,e),n=t=>this.handleDragOver(t,e),i=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",r),t.addEventListener("dragover",n),t.addEventListener("drop",i),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",n),t.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){let e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return D({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){let e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(e);return D({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){let e=this.monitor.getItemType();return Object.keys(n).some(t=>n[t]===e)}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){let r=v[e];if(!r)throw Error(`native type ${e} has no configuration`);let n=new y(r);return n.loadDataTransfer(t),n}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.mouseMoveTimeoutTimer=setTimeout(()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{let t=this.sourceNodes.get(e);return t&&c(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>Boolean(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{let e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!=typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!=typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;let{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;let r=l(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});let{dataTransfer:n}=e,i=m(n);if(this.monitor.isDragging()){if(n&&"function"==typeof n.setDragImage){let o=this.monitor.getSourceId(),d=this.sourceNodes.get(o),h=this.sourcePreviewNodes.get(o)||d;if(h){let{anchorX:f,anchorY:p,offsetX:g,offsetY:v}=this.getCurrentSourcePreviewNodeOptions(),y=function(e,t,r,n,i){var o;let l,d;let h="IMG"===t.nodeName&&(a()||!(null===(o=document.documentElement)||void 0===o?void 0:o.contains(t))),f=c(h?e:t),p={x:r.x-f.x,y:r.y-f.y},{offsetWidth:g,offsetHeight:v}=e,{anchorX:y,anchorY:m}=n,{dragPreviewWidth:T,dragPreviewHeight:D}=(l=h?t.width:g,d=h?t.height:v,s()&&h&&(d/=window.devicePixelRatio,l/=window.devicePixelRatio),{dragPreviewWidth:l,dragPreviewHeight:d}),{offsetX:b,offsetY:S}=i;return{x:0===b||b?b:(()=>{let e=new u([0,.5,1],[p.x,p.x/g*T,p.x+T-g]);return e.interpolate(y)})(),y:0===S||S?S:(()=>{let e=new u([0,.5,1],[p.y,p.y/v*D,p.y+D-v]),t=e.interpolate(m);return s()&&h&&(t+=(window.devicePixelRatio-1)*D),t})()}}(d,h,r,{anchorX:f,anchorY:p},{offsetX:g,offsetY:v});n.setDragImage(h,y.x,y.y)}}try{null==n||n.setData("application/json",{})}catch(T){}this.setCurrentDragSourceNode(e.target);let{captureDraggingState:D}=this.getCurrentSourcePreviewNodeOptions();D?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(i)this.beginDragNativeItem(i);else{if(n&&!n.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var t;null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}let r=this.enterLeaveCounter.enter(e.target);if(!r||this.monitor.isDragging())return;let{dataTransfer:n}=e,i=m(n);i&&this.beginDragNativeItem(i,n)},this.handleTopDragEnter=e=>{let{dragEnterTargetIds:t}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:l(e)});let r=t.some(e=>this.monitor.canDropOnTarget(e));r&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=e=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var t;null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}},this.handleTopDragOver=e=>{let{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none");return}this.altKeyPressed=e.altKey,this.lastClientOffset=l(e),this.scheduleHover(t);let r=(t||[]).some(e=>this.monitor.canDropOnTarget(e));r?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault();let t=this.enterLeaveCounter.leave(e.target);t&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=e=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var t;e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}else m(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{let{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:l(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{let t=e.target;"function"!=typeof t.dragDrop||"INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop())},this.options=new T(t,r),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new o(this.isNodeInDocument)}}let S=function(e,t,r){return new b(e,t,r)}}}]);
//# sourceMappingURL=4512-8c21dbecb7b54630.js.map