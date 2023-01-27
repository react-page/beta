"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6737],{30060:function(t,e,n){n.d(e,{k:function(){return o}});var r=n(14284);function o(t,e,...n){if(void 0!==r&&void 0===e)throw Error("invariant requires an error message argument");if(!t){let o;if(void 0===e)o=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;(o=Error(e.replace(/%s/g,function(){return n[i++]}))).name="Invariant Violation"}throw o.framesToPop=1,o}}},28821:function(t,e,n){n.d(e,{w:function(){return r}});function r(t,e,n,r){let o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;let s=Object.prototype.hasOwnProperty.bind(e);for(let u=0;u<i.length;u++){let c=i[u];if(!s(c))return!1;let l=t[c],d=e[c];if(!1===(o=n?n.call(r,l,d,c):void 0)||void 0===o&&l!==d)return!1}return!0}},13732:function(t,e,n){n.d(e,{L:function(){return o}});var r=n(27378);let o=(0,r.createContext)({dragDropManager:void 0})},37965:function(t,e,n){n.d(e,{J:function(){return a}});var r=n(61410),o=n(87222),i=n(27378);function a(t,e,n){return function(t,e,n){let[a,s]=function(t,e,n){let[a,s]=(0,i.useState)(()=>e(t)),u=(0,i.useCallback)(()=>{let r=e(t);!o(a,r)&&(s(r),n&&n())},[a,t,n]);return(0,r.L)(u),[a,u]}(t,e,n);return(0,r.L)(function(){let e=t.getHandlerId();if(null!=e)return t.subscribeToStateChange(s,{handlerIds:[e]})},[t,s]),a}(e,t||(()=>({})),()=>n.reconnect())}},42775:function(t,e,n){n.d(e,{N:function(){return a}});var r=n(27378),o=n(30060),i=n(13732);function a(){let{dragDropManager:t}=(0,r.useContext)(i.L);return(0,o.k)(null!=t,"Expected drag drop context"),t}},36737:function(t,e,n){n.d(e,{L:function(){return m}});var r=n(56825),o=n(42775),i=n(61410),a=n(30060),s=n(27378);class u{canDrop(){let t=this.spec,e=this.monitor;return!t.canDrop||t.canDrop(e.getItem(),e)}hover(){let t=this.spec,e=this.monitor;t.hover&&t.hover(e.getItem(),e)}drop(){let t=this.spec,e=this.monitor;if(t.drop)return t.drop(e.getItem(),e)}constructor(t,e){this.spec=t,this.monitor=e}}var c=n(76573);let l=!1;class d{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,e){return this.internalMonitor.subscribeToStateChange(t,e)}canDrop(){if(!this.targetId)return!1;(0,a.k)(!l,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return l=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{l=!1}}isOver(t){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}var f=n(28821),p=n(23487),h=n(51801);class g{get connectTarget(){return this.dropTarget}reconnect(){let t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();let e=this.dropTarget;if(this.handlerId){if(!e){this.lastConnectedDropTarget=e;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=e,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,e,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!(0,f.w)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=(0,p.p)({dropTarget:(t,e)=>{this.clearDropTarget(),this.dropTargetOptions=e,(0,h.d)(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}var T=n(37965);function m(t,e){let n=(0,c.w)(t,e),l=function(){let t=(0,o.N)();return(0,s.useMemo)(()=>new d(t),[t])}(),f=function(t){let e=(0,o.N)(),n=(0,s.useMemo)(()=>new g(e.getBackend()),[e]);return(0,i.L)(()=>(n.dropTargetOptions=t||null,n.reconnect(),()=>n.disconnectDropTarget()),[t]),n}(n.options);return!function(t,e,n){let c=(0,o.N)(),l=function(t,e){let n=(0,s.useMemo)(()=>new u(t,e),[e]);return(0,s.useEffect)(()=>{n.spec=t},[t]),n}(t,e),d=function(t){let{accept:e}=t;return(0,s.useMemo)(()=>((0,a.k)(null!=t.accept,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}(t);(0,i.L)(function(){let[t,o]=(0,r.n)(d,l,c);return e.receiveHandlerId(t),n.receiveHandlerId(t),o},[c,e,l,n,d.map(t=>t.toString()).join("|")])}(n,l,f),[(0,T.J)(n.collect,l,f),(0,s.useMemo)(()=>f.hooks.dropTarget(),[f])]}},61410:function(t,e,n){n.d(e,{L:function(){return o}});var r=n(27378);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},76573:function(t,e,n){n.d(e,{w:function(){return o}});var r=n(27378);function o(t,e){let n=[...e||[]];return null==e&&"function"!=typeof t&&n.push(t),(0,r.useMemo)(()=>"function"==typeof t?t():t,n)}},51801:function(t,e,n){n.d(e,{d:function(){return r}});function r(t){return null!==t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}},56825:function(t,e,n){function r(t,e,n){let r=n.getRegistry(),o=r.addTarget(t,e);return[o,()=>r.removeTarget(o)]}function o(t,e,n){let r=n.getRegistry(),o=r.addSource(t,e);return[o,()=>r.removeSource(o)]}n.d(e,{n:function(){return r},w:function(){return o}})},23487:function(t,e,n){n.d(e,{p:function(){return i}});var r=n(30060),o=n(27378);function i(t){let e={};return Object.keys(t).forEach(n=>{let i=t[n];if(n.endsWith("Ref"))e[n]=t[n];else{let s=(t=null,e=null)=>(0,o.isValidElement)(t)?(function(t){if("string"==typeof t.type)return;let e=t.type.displayName||t.type.name||"the component";throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}(t),function(t,e){let n=t.ref;return((0,r.k)("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n)?(0,o.cloneElement)(t,{ref:t=>{a(n,t),a(e,t)}}):(0,o.cloneElement)(t,{ref:e})}(t,e?t=>i(t,e):i)):(i(t,e),t);e[n]=()=>s}}),e}function a(t,e){"function"==typeof t?t(e):t.current=e}}}]);
//# sourceMappingURL=6737-6f7c948ed8f901ef.js.map