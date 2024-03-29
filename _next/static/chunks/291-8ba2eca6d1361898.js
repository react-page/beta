"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{62854:function(t,e,n){var r=n(25773),o=n(30808),i=n(27378),a=n(42802),l=n(24150),s=n(48751),u=n(50128),c=n(24246);let f=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(t){return`scale(${t}, ${t**2})`}let d={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},h="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),m=i.forwardRef(function(t,e){let{addEndListener:n,appear:m=!0,children:v,easing:g,in:Z,onEnter:y,onEntered:E,onEntering:x,onExit:P,onExited:b,onExiting:z,style:w,timeout:R="auto",TransitionComponent:C=a.ZP}=t,k=(0,o.Z)(t,f),H=i.useRef(),T=i.useRef(),j=(0,l.Z)(),M=i.useRef(null),A=(0,u.Z)(M,v.ref,e),N=t=>e=>{if(t){let n=M.current;void 0===e?t(n):t(n,e)}},O=N(x),D=N((t,e)=>{let n;(0,s.n)(t);let{duration:r,delay:o,easing:i}=(0,s.C)({style:w,timeout:R,easing:g},{mode:"enter"});"auto"===R?(n=j.transitions.getAutoHeightDuration(t.clientHeight),T.current=n):n=r,t.style.transition=[j.transitions.create("opacity",{duration:n,delay:o}),j.transitions.create("transform",{duration:h?n:.666*n,delay:o,easing:i})].join(","),y&&y(t,e)}),S=N(E),$=N(z),_=N(t=>{let e;let{duration:n,delay:r,easing:o}=(0,s.C)({style:w,timeout:R,easing:g},{mode:"exit"});"auto"===R?(e=j.transitions.getAutoHeightDuration(t.clientHeight),T.current=e):e=n,t.style.transition=[j.transitions.create("opacity",{duration:e,delay:r}),j.transitions.create("transform",{duration:h?e:.666*e,delay:h?r:r||.333*e,easing:o})].join(","),t.style.opacity=0,t.style.transform=p(.75),P&&P(t)}),L=N(b),W=t=>{"auto"===R&&(H.current=setTimeout(t,T.current||0)),n&&n(M.current,t)};return i.useEffect(()=>()=>{clearTimeout(H.current)},[]),(0,c.jsx)(C,(0,r.Z)({appear:m,in:Z,nodeRef:M,onEnter:D,onEntered:S,onEntering:O,onExit:_,onExited:L,onExiting:$,addEndListener:W,timeout:"auto"===R?null:R},k,{children:(t,e)=>i.cloneElement(v,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:p(.75),visibility:"exited"!==t||Z?void 0:"hidden"},d[t],w,v.props.style),ref:A},e))}))});m.muiSupportAuto=!0,e.Z=m},90291:function(t,e,n){n.d(e,{ZP:function(){return j}});var r=n(25773),o=n(30808),i=n(27378),a=n(38944),l=n(82267),s=n(95147),u=n(93596),c=n(9124),f=n(22307),p=n(91629),d=n(50128),h=n(62854),m=n(62983),v=n(80252),g=n(44124),Z=n(6749);function y(t){return(0,Z.Z)("MuiPopover",t)}(0,g.Z)("MuiPopover",["root","paper"]);var E=n(24246);let x=["onEntering"],P=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function b(t,e){let n=0;return"number"==typeof e?n=e:"center"===e?n=t.height/2:"bottom"===e&&(n=t.height),n}function z(t,e){let n=0;return"number"==typeof e?n=e:"center"===e?n=t.width/2:"right"===e&&(n=t.width),n}function w(t){return[t.horizontal,t.vertical].map(t=>"number"==typeof t?`${t}px`:t).join(" ")}function R(t){return"function"==typeof t?t():t}let C=t=>{let{classes:e}=t;return(0,l.Z)({root:["root"],paper:["paper"]},y,e)},k=(0,s.ZP)(m.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),H=(0,s.ZP)(v.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),T=i.forwardRef(function(t,e){let n=(0,u.Z)({props:t,name:"MuiPopover"}),{action:l,anchorEl:s,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:v,anchorReference:g="anchorEl",children:Z,className:y,container:T,elevation:j=8,marginThreshold:M=16,open:A,PaperProps:N={},transformOrigin:O={vertical:"top",horizontal:"left"},TransitionComponent:D=h.Z,transitionDuration:S="auto",TransitionProps:{onEntering:$}={}}=n,_=(0,o.Z)(n.TransitionProps,x),L=(0,o.Z)(n,P),W=i.useRef(),B=(0,d.Z)(W,N.ref),I=(0,r.Z)({},n,{anchorOrigin:m,anchorReference:g,elevation:j,marginThreshold:M,PaperProps:N,transformOrigin:O,TransitionComponent:D,transitionDuration:S,TransitionProps:_}),X=C(I),Y=i.useCallback(()=>{if("anchorPosition"===g)return v;let t=R(s),e=t&&1===t.nodeType?t:(0,f.Z)(W.current).body,n=e.getBoundingClientRect();return{top:n.top+b(n,m.vertical),left:n.left+z(n,m.horizontal)}},[s,m.horizontal,m.vertical,v,g]),q=i.useCallback(t=>({vertical:b(t,O.vertical),horizontal:z(t,O.horizontal)}),[O.horizontal,O.vertical]),F=i.useCallback(t=>{let e={width:t.offsetWidth,height:t.offsetHeight},n=q(e);if("none"===g)return{top:null,left:null,transformOrigin:w(n)};let r=Y(),o=r.top-n.vertical,i=r.left-n.horizontal,a=o+e.height,l=i+e.width,u=(0,p.Z)(R(s)),c=u.innerHeight-M,f=u.innerWidth-M;if(o<M){let d=o-M;o-=d,n.vertical+=d}else if(a>c){let h=a-c;o-=h,n.vertical+=h}if(i<M){let m=i-M;i-=m,n.horizontal+=m}else if(l>f){let v=l-f;i-=v,n.horizontal+=v}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:w(n)}},[s,g,Y,q,M]),[G,J]=i.useState(A),K=i.useCallback(()=>{let t=W.current;if(!t)return;let e=F(t);null!==e.top&&(t.style.top=e.top),null!==e.left&&(t.style.left=e.left),t.style.transformOrigin=e.transformOrigin,J(!0)},[F]),Q=(t,e)=>{$&&$(t,e),K()},U=()=>{J(!1)};i.useEffect(()=>{A&&K()}),i.useImperativeHandle(l,()=>A?{updatePosition:()=>{K()}}:null,[A,K]),i.useEffect(()=>{if(!A)return;let t=(0,c.Z)(()=>{K()}),e=(0,p.Z)(s);return e.addEventListener("resize",t),()=>{t.clear(),e.removeEventListener("resize",t)}},[s,A,K]);let V=S;"auto"!==S||D.muiSupportAuto||(V=void 0);let tt=T||(s?(0,f.Z)(R(s)).body:void 0);return(0,E.jsx)(k,(0,r.Z)({BackdropProps:{invisible:!0},className:(0,a.default)(X.root,y),container:tt,open:A,ref:e,ownerState:I},L,{children:(0,E.jsx)(D,(0,r.Z)({appear:!0,in:A,onEntering:Q,onExited:U,timeout:V},_,{children:(0,E.jsx)(H,(0,r.Z)({elevation:j},N,{ref:B,className:(0,a.default)(X.paper,N.className)},G?void 0:{style:(0,r.Z)({},N.style,{opacity:0})},{ownerState:I,children:Z}))}))}))});var j=T}}]);
//# sourceMappingURL=291-8ba2eca6d1361898.js.map