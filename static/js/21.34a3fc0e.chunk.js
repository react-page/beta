/*! For license information please see 21.34a3fc0e.chunk.js.LICENSE.txt */
(this["webpackJsonp@react-page/examples"]=this["webpackJsonp@react-page/examples"]||[]).push([[21],{1129:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1130:function(e,t,r){"use strict";e.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e.exports.Resizable=r(747).default,e.exports.ResizableBox=r(1135).default},1131:function(e,t,r){"use strict";var n=r(1132);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},1132:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1133:function(e,t,r){var n,o;window,e.exports=(n=r(0),o=r(12),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){e.exports=r(5)()},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){var n=r(7),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},function(e,t,r){"use strict";var n=r(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),s=r(2),c=r.n(s),u=r(3),l=r.n(u);function f(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]}function p(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function d(e){return"number"==typeof e&&!isNaN(e)}function h(e){return parseInt(e,10)}function y(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))}var g=["Moz","Webkit","O","ms"];function b(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var t=window.document.documentElement.style;if(e in t)return"";for(var r=0;r<g.length;r++)if(b(e,g[r])in t)return g[r];return""}();function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w="";function S(e,t){return w||(w=f(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return p(e[t])}))),!!p(e[w])&&e[w](t)}function x(e,t,r){var n=e;do{if(S(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1}function P(e,t,r){e&&(e.attachEvent?e.attachEvent("on"+t,r):e.addEventListener?e.addEventListener(t,r,!0):e["on"+t]=r)}function j(e,t,r){e&&(e.detachEvent?e.detachEvent("on"+t,r):e.removeEventListener?e.removeEventListener(t,r,!0):e["on"+t]=null)}function D(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=h(r.borderTopWidth))+h(r.borderBottomWidth)}function E(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=h(r.borderLeftWidth))+h(r.borderRightWidth)}function _(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=h(r.paddingTop))-h(r.paddingBottom)}function R(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=h(r.paddingLeft))-h(r.paddingRight)}function C(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),s="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(s,")")+a}return a}function k(e){if(e){var t,r,n=e.getElementById("react-draggable-style-el");n||((n=e.createElement("style")).type="text/css",n.id="react-draggable-style-el",n.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",n.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(n)),e.body&&(r="react-draggable-transparent-selection",(t=e.body).classList?t.classList.add(r):t.className.match(new RegExp("(?:^|\\s)".concat(r,"(?!\\S)")))||(t.className+=" ".concat(r)))}}function T(e){try{e&&e.body&&(t=e.body,r="react-draggable-transparent-selection",t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(r,"(?!\\S)"),"g"),"")),e.selection?e.selection.empty():window.getSelection().removeAllRanges()}catch(e){}var t,r}function z(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({touchAction:"none"},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function M(e){return"both"===e.props.axis||"x"===e.props.axis}function N(e){return"both"===e.props.axis||"y"===e.props.axis}function A(e,t,r){var n="number"==typeof t?function(e,t){return e.targetTouches&&f(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&f(e.changedTouches,(function(e){return t===e.identifier}))}(e,t):null;if("number"==typeof t&&!n)return null;var o=$(r);return function(e,t){var r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:e.clientX+t.scrollLeft-r.left,y:e.clientY+t.scrollTop-r.top}}(n||e,r.props.offsetParent||o.offsetParent||o.ownerDocument.body)}function H(e,t,r){var n=e.state,o=!d(n.lastX),a=$(e);return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:a,deltaX:t-n.lastX,deltaY:r-n.lastY,lastX:n.lastX,lastY:n.lastY,x:t,y:r}}function L(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}}function $(e){var t=c.a.findDOMNode(e);if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B={start:"touchstart",move:"touchmove",stop:"touchend"},F={start:"mousedown",move:"mousemove",stop:"mouseup"},K=F,G=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=this,o=(e=I(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==Y(o)&&"function"!=typeof o?U(n):o,V(U(r),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),V(U(r),"handleDragStart",(function(e){if(r.props.onMouseDown(e),!r.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;var t=c.a.findDOMNode(U(r));if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=t.ownerDocument;if(!(r.props.disabled||!(e.target instanceof n.defaultView.Node)||r.props.handle&&!x(e.target,r.props.handle,t)||r.props.cancel&&x(e.target,r.props.cancel,t))){var o=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0}(e);r.setState({touchIdentifier:o});var a=A(e,o,U(r));if(null!=a){var i=a.x,s=a.y,u=H(U(r),i,s);r.props.onStart,!1!==r.props.onStart(e,u)&&(r.props.enableUserSelectHack&&k(n),r.setState({dragging:!0,lastX:i,lastY:s}),P(n,K.move,r.handleDrag),P(n,K.stop,r.handleDragStop))}}})),V(U(r),"handleDrag",(function(e){"touchmove"===e.type&&e.preventDefault();var t=A(e,r.state.touchIdentifier,U(r));if(null!=t){var n,o,a,i=t.x,s=t.y;if(Array.isArray(r.props.grid)){var c=i-r.state.lastX,u=s-r.state.lastY,l=X((n=r.props.grid,o=c,a=u,[Math.round(o/n[0])*n[0],Math.round(a/n[1])*n[1]]),2);if(c=l[0],u=l[1],!c&&!u)return;i=r.state.lastX+c,s=r.state.lastY+u}var f=H(U(r),i,s);if(!1!==r.props.onDrag(e,f))r.setState({lastX:i,lastY:s});else try{r.handleDragStop(new MouseEvent("mouseup"))}catch(e){var p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(p)}}})),V(U(r),"handleDragStop",(function(e){if(r.state.dragging){var t=A(e,r.state.touchIdentifier,U(r));if(null!=t){var n=t.x,o=t.y,a=H(U(r),n,o),i=c.a.findDOMNode(U(r));i&&r.props.enableUserSelectHack&&T(i.ownerDocument),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),r.props.onStop(e,a),i&&(j(i.ownerDocument,K.move,r.handleDrag),j(i.ownerDocument,K.stop,r.handleDragStop))}}})),V(U(r),"onMouseDown",(function(e){return K=F,r.handleDragStart(e)})),V(U(r),"onMouseUp",(function(e){return K=F,r.handleDragStop(e)})),V(U(r),"onTouchStart",(function(e){return K=B,r.handleDragStart(e)})),V(U(r),"onTouchEnd",(function(e){return K=B,r.handleDragStop(e)})),r}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentWillUnmount",value:function(){var e=c.a.findDOMNode(this);if(e){var t=e.ownerDocument;j(t,F.move,this.handleDrag),j(t,B.move,this.handleDrag),j(t,F.stop,this.handleDragStop),j(t,B.stop,this.handleDragStop),this.props.enableUserSelectHack&&T(t)}}},{key:"render",value:function(){return o.a.cloneElement(o.a.Children.only(this.props.children),{style:z(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&W(r.prototype,n),t}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(r,!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e,t,r){return t&&ne(e.prototype,t),r&&ne(e,r),e}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}V(G,"displayName","DraggableCore"),V(G,"propTypes",{allowAnyClick:i.a.bool,disabled:i.a.bool,enableUserSelectHack:i.a.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.a.arrayOf(i.a.number),handle:i.a.string,cancel:i.a.string,onStart:i.a.func,onDrag:i.a.func,onStop:i.a.func,onMouseDown:i.a.func,className:y,style:y,transform:y}),V(G,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){}}),r.d(t,"default",(function(){return se})),r.d(t,"DraggableCore",(function(){return G}));var se=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=te(t).call(this,e),r=!n||"object"!==J(n)&&"function"!=typeof n?re(this):n,ie(re(r),"onDragStart",(function(e,t){if(!1===r.props.onStart(e,L(re(r),t)))return!1;r.setState({dragging:!0,dragged:!0})})),ie(re(r),"onDrag",(function(e,t){if(!r.state.dragging)return!1;var n=L(re(r),t),o={x:n.x,y:n.y};if(r.props.bounds){var a=o.x,i=o.y;o.x+=r.state.slackX,o.y+=r.state.slackY;var s=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(function(e,t,r){if(!e.props.bounds)return[t,r];var n=e.props.bounds;n="string"==typeof n?n:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(n);var o=$(e);if("string"==typeof n){var a,i=o.ownerDocument,s=i.defaultView;if(!((a="parent"===n?o.parentNode:i.querySelector(n))instanceof s.HTMLElement))throw new Error('Bounds selector "'+n+'" could not find an element.');var c=s.getComputedStyle(o),u=s.getComputedStyle(a);n={left:-o.offsetLeft+h(u.paddingLeft)+h(c.marginLeft),top:-o.offsetTop+h(u.paddingTop)+h(c.marginTop),right:R(a)-E(o)-o.offsetLeft+h(u.paddingRight)-h(c.marginRight),bottom:_(a)-D(o)-o.offsetTop+h(u.paddingBottom)-h(c.marginBottom)}}return d(n.right)&&(t=Math.min(t,n.right)),d(n.bottom)&&(r=Math.min(r,n.bottom)),d(n.left)&&(t=Math.max(t,n.left)),d(n.top)&&(r=Math.max(r,n.top)),[t,r]}(re(r),o.x,o.y),2),c=s[0],u=s[1];o.x=c,o.y=u,o.slackX=r.state.slackX+(a-o.x),o.slackY=r.state.slackY+(i-o.y),n.x=o.x,n.y=o.y,n.deltaX=o.x-r.state.x,n.deltaY=o.y-r.state.y}if(!1===r.props.onDrag(e,n))return!1;r.setState(o)})),ie(re(r),"onDragStop",(function(e,t){if(!r.state.dragging)return!1;if(!1===r.props.onStop(e,L(re(r),t)))return!1;var n={dragging:!1,slackX:0,slackY:0};if(Boolean(r.props.position)){var o=r.props.position,a=o.x,i=o.y;n.x=a,n.y=i}r.setState(n)})),r.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:ee({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,o.a.Component),oe(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:{x:r.x,y:r.y,prevPropsPosition:ee({},r)}}}]),oe(t,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&c.a.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,s=t.defaultClassNameDragged,c=t.position,u=t.positionOffset,f=(t.scale,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),p={},d=null,h=!Boolean(c)||this.state.dragging,y=c||n,g={x:M(this)&&h?this.state.x:y.x,y:N(this)&&h?this.state.y:y.y};this.state.isElementSVG?d=function(e,t){return C(e,t,"")}(g,u):p=function(e,t){var r=C(e,t,"px");return O({},b("transform",m),r)}(g,u);var v=l()(r.props.className||"",a,(ie(e={},i,this.state.dragging),ie(e,s,this.state.dragged),e));return o.a.createElement(G,Q({},f,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.a.cloneElement(o.a.Children.only(r),{className:v,style:ee({},r.props.style,{},p),transform:d}))}}]),t}();ie(se,"displayName","Draggable"),ie(se,"propTypes",ee({},G.propTypes,{axis:i.a.oneOf(["both","x","y","none"]),bounds:i.a.oneOfType([i.a.shape({left:i.a.number,right:i.a.number,top:i.a.number,bottom:i.a.number}),i.a.string,i.a.oneOf([!1])]),defaultClassName:i.a.string,defaultClassNameDragging:i.a.string,defaultClassNameDragged:i.a.string,defaultPosition:i.a.shape({x:i.a.number,y:i.a.number}),positionOffset:i.a.shape({x:i.a.oneOfType([i.a.number,i.a.string]),y:i.a.oneOfType([i.a.number,i.a.string])}),position:i.a.shape({x:i.a.number,y:i.a.number}),className:y,style:y,transform:y})),ie(se,"defaultProps",ee({},G.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))}]))},1134:function(e,t,r){"use strict";t.__esModule=!0,t.cloneElement=function(e,t){t.style&&e.props.style&&(t.style=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props.style,{},t.style));t.className&&e.props.className&&(t.className=e.props.className+" "+t.className);return o.default.cloneElement(e,t)};var n,o=(n=r(0))&&n.__esModule?n:{default:n};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1135:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r(0)),o=i(r(748)),a=i(r(747));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return u(c(t=e.call.apply(e,[this].concat(n))||this),"state",{width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height}),u(c(t),"onResize",(function(e,r){var n=r.size;n.width,n.height;t.props.onResize?(e.persist&&e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)})),t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.getDerivedStateFromProps=function(e,t){if(t.propsWidth!==e.width||t.propsHeight!==e.height)return{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}},o.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize,o=(e.onResize,e.onResizeStart),i=e.onResizeStop,c=e.draggableOpts,u=e.minConstraints,l=e.maxConstraints,f=e.lockAspectRatio,p=e.axis,d=(e.width,e.height,e.resizeHandles),h=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles"]);return n.default.createElement(a.default,{handle:t,handleSize:r,width:this.state.width,height:this.state.height,onResizeStart:o,onResize:this.onResize,onResizeStop:i,draggableOpts:c,minConstraints:u,maxConstraints:l,lockAspectRatio:f,axis:p,resizeHandles:d},n.default.createElement("div",s({style:{width:this.state.width+"px",height:this.state.height+"px"}},h)))},o}(n.default.Component);t.default=l,u(l,"propTypes",{height:o.default.number,width:o.default.number}),u(l,"defaultProps",{handleSize:[20,20]})},282:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},308:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},310:function(e,t,r){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",(function(){return n}))},313:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},316:function(e,t,r){"use strict";e.exports=r(320)},318:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(308),i=r(282),s=r(313),c=r(310),u=r(319),l=r.n(u);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var p=o.a.createContext();var d=function(e){return e};function h(e){var t=e.resolve,r=void 0===t?d:t,n=e.render,u=e.onLoad;function l(e,t){void 0===t&&(t={});var l=function(e){return"function"===typeof e?{requireAsync:e}:e}(e),d={};function h(e){return t.cacheKey?t.cacheKey(e):l.resolve?l.resolve(e):null}var y,g=function(e){function o(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:h(r)},n.promise=null,f(!r.__chunkExtractor||l.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(l.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(l.chunkName(r))),Object(s.a)(n)):(l.isReady&&l.isReady(r)&&n.loadSync(),n)}Object(c.a)(o,e),o.getDerivedStateFromProps=function(e,t){var r=h(e);return Object(i.a)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var p=o.prototype;return p.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},p.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},p.componentWillUnmount=function(){this.mounted=!1},p.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},p.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},p.loadSync=function(){if(this.state.loading)try{var e=l.requireSync(this.props),t=r(e,{Loadable:m});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},p.getCacheKey=function(){return h(this.props)||JSON.stringify(this.props)},p.getCache=function(){return d[this.getCacheKey()]},p.setCache=function(e){d[this.getCacheKey()]=e},p.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,Object(a.a)(n,["__chunkExtractor","forwardedRef"]));this.promise=l.requireAsync(o).then((function(n){var o=r(n,{Loadable:m});t.suspense&&e.setCache(o),e.safeSetState({result:r(n,{Loadable:m}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},p.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,s=(e.__chunkExtractor,Object(a.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,l=c.loading,f=c.result;if(t.suspense){var p=this.getCache();if(!p)throw this.loadAsync();return n({loading:!1,fallback:null,result:p,options:t,props:Object(i.a)({},s,{ref:r})})}if(u)throw u;var d=o||t.fallback||null;return l?d:n({loading:l,fallback:d,result:f,options:t,props:Object(i.a)({},s,{ref:r})})},o}(o.a.Component),b=(y=g,function(e){return o.a.createElement(p.Consumer,null,(function(t){return o.a.createElement(y,Object.assign({__chunkExtractor:t},e))}))}),m=o.a.forwardRef((function(e,t){return o.a.createElement(b,Object.assign({forwardedRef:t},e))}));return m.preload=function(e){l.requireAsync(e)},m.load=function(e){return l.requireAsync(e)},m}return{loadable:l,lazy:function(e,t){return l(e,Object(i.a)({},t,{suspense:!0}))}}}var y=h({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return l()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),g=y.loadable,b=y.lazy,m=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"===typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),v=m.loadable,O=m.lazy;var w=g;w.lib=v,b.lib=O;t.a=w},319:function(e,t,r){"use strict";var n=r(316),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var o=d(r);o&&o!==h&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var s=c(t),y=c(r),g=0;g<i.length;++g){var b=i[g];if(!a[b]&&(!n||!n[b])&&(!y||!y[b])&&(!s||!s[b])){var m=p(r,b);try{u(t,b,m)}catch(v){}}}return t}return t}},320:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case u:return e;default:return t}}case b:case g:case a:return t}}}function S(e){return w(e)===p}t.typeOf=w,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=b,t.Memo=g,t.Portal=a,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===c||e===s||e===h||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===m||e.$$typeof===v||e.$$typeof===O)},t.isAsyncMode=function(e){return S(e)||w(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===h}},747:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r(0)),o=s(r(748)),a=r(1133),i=r(1134);function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return f(l(t=e.call.apply(e,[this].concat(n))||this),"state",{slackW:0,slackH:0}),t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=o.prototype;return s.lockAspectRatio=function(e,t,r){return[e=(t=e/r)*r,t]},s.runConstraints=function(e,t){var r=[this.props.minConstraints,this.props.maxConstraints],n=r[0],o=r[1];if(!n&&!o)return[e,t];if(this.props.lockAspectRatio)if(t===this.props.height){var a=this.props.width/this.props.height;e=(t=e/a)*a}else{var i=this.props.height/this.props.width;t=(e=t/i)*i}var s=e,c=t,u=this.state,l=u.slackW,f=u.slackH;return e+=l,t+=f,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),o&&(e=Math.min(o[0],e),t=Math.min(o[1],t)),f+=c-t,(l+=s-e)===this.state.slackW&&f===this.state.slackH||this.setState({slackW:l,slackH:f}),[e,t]},s.resizeHandler=function(e,t){var r=this;return function(n,o){var a=o.node,i=o.deltaX,s=o.deltaY,c=("both"===r.props.axis||"x"===r.props.axis)&&-1===["n","s"].indexOf(t),u=("both"===r.props.axis||"y"===r.props.axis)&&-1===["e","w"].indexOf(t);c&&"w"===t[t.length-1]&&(i=-i),u&&"n"===t[0]&&(s=-s);var l=r.props.width+(c?i:0),f=r.props.height+(u?s:0),p=l!==r.props.width,d=f!==r.props.height;if("onResize"!==e||p||d){var h=r.runConstraints(l,f);l=h[0],f=h[1];var y={};if("onResizeStart"===e);else if("onResizeStop"===e)y.slackW=y.slackH=0;else if(l===r.props.width&&f===r.props.height)return;"function"===typeof r.props[e]?("function"===typeof n.persist&&n.persist(),r.setState(y,(function(){return r.props[e](n,{node:a,size:{width:l,height:f},handle:t})}))):r.setState(y)}}},s.renderResizeHandle=function(e){var t=this.props.handle;return t?"function"===typeof t?t(e):t:n.default.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e})},s.render=function(){var e=this,t=this.props,r=t.children,o=t.draggableOpts,s=(t.width,t.height,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart,t.resizeHandles),l=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["children","draggableOpts","width","height","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles"]),p=l.className?l.className+" react-resizable":"react-resizable";return(0,i.cloneElement)(r,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l,{className:p,children:[r.props.children,s.map((function(t){return n.default.createElement(a.DraggableCore,c({},o,{key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t))}))]}))},o}(n.default.Component);t.default=p,f(p,"propTypes",{children:o.default.element.isRequired,width:o.default.number.isRequired,height:o.default.number.isRequired,handle:o.default.element,handleSize:o.default.array,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),lockAspectRatio:o.default.bool,axis:o.default.oneOf(["both","x","y","none"]),minConstraints:o.default.arrayOf(o.default.number),maxConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,draggableOpts:o.default.object}),f(p,"defaultProps",{handleSize:[20,20],lockAspectRatio:!1,axis:"both",minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"]})},748:function(e,t,r){e.exports=r(1131)()}}]);
//# sourceMappingURL=21.34a3fc0e.chunk.js.map