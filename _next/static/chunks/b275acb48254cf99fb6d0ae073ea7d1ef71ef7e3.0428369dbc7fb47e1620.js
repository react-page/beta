(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"56Ss":function(e,t,o){"use strict";var a=o("wx14"),r=o("Ff2n"),n=o("mXGw"),i=(o("17x9"),o("iuhU")),l=o("H2TA"),s=o("MquD"),c=n.forwardRef((function(e,t){var o=e.classes,l=e.className,c=Object(r.a)(e,["classes","className"]),p=n.useContext(s.a);return n.createElement("div",Object(a.a)({className:Object(i.a)(o.root,l,"flex-start"===p.alignItems&&o.alignItemsFlexStart),ref:t},c))}));t.a=Object(l.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(c)},IsqK:function(e,t,o){"use strict";var a=o("wx14"),r=o("Ff2n"),n=o("mXGw"),i=(o("17x9"),o("iuhU")),l=o("H2TA"),s=o("ofer"),c=o("MquD"),p=n.forwardRef((function(e,t){var o=e.children,l=e.classes,p=e.className,d=e.disableTypography,m=void 0!==d&&d,b=e.inset,f=void 0!==b&&b,u=e.primary,y=e.primaryTypographyProps,g=e.secondary,h=e.secondaryTypographyProps,x=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=n.useContext(c.a).dense,w=null!=u?u:o;null==w||w.type===s.a||m||(w=n.createElement(s.a,Object(a.a)({variant:v?"body2":"body1",className:l.primary,component:"span",display:"block"},y),w));var S=g;return null==S||S.type===s.a||m||(S=n.createElement(s.a,Object(a.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},h),S)),n.createElement("div",Object(a.a)({className:Object(i.a)(l.root,p,v&&l.dense,f&&l.inset,w&&S&&l.multiline),ref:t},x),w,S)}));t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},ZBNC:function(e,t,o){"use strict";function a(e){return e}o.d(t,"a",(function(){return a}))},atfL:function(e,t,o){"use strict";var a=o("xvhg"),r=o("cpVT"),n=o("bXiM"),i=o("IIOH"),l=o("wx14"),s=o("Ff2n"),c=o("mXGw"),p=o.n(c),d=o("17x9"),m=o.n(d),b=o("GGlz"),f=o("tr08");function u(e){var t=e.children,o=e.only,a=e.width,r=Object(f.a)(),n=!0;if(o)if(Array.isArray(o))for(var i=0;i<o.length;i+=1){if(a===o[i]){n=!1;break}}else o&&a===o&&(n=!1);if(n)for(var l=0;l<r.breakpoints.keys.length;l+=1){var s=r.breakpoints.keys[l],c=e["".concat(s,"Up")],p=e["".concat(s,"Down")];if(c&&Object(b.c)(s,a)||p&&Object(b.b)(s,a)){n=!1;break}}return n?t:null}u.propTypes={children:m.a.node,className:m.a.string,implementation:m.a.oneOf(["js","css"]),initialWidth:m.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:m.a.bool,lgUp:m.a.bool,mdDown:m.a.bool,mdUp:m.a.bool,only:m.a.oneOfType([m.a.oneOf(["xs","sm","md","lg","xl"]),m.a.arrayOf(m.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:m.a.bool,smUp:m.a.bool,width:m.a.string.isRequired,xlDown:m.a.bool,xlUp:m.a.bool,xsDown:m.a.bool,xsUp:m.a.bool};var y=Object(b.a)()(u),g=o("rePB"),h=o("NqtD"),x=o("H2TA");var v=Object(x.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(o,a){return o["only".concat(Object(h.a)(a))]=Object(g.a)({},e.breakpoints.only(a),t),o["".concat(a,"Up")]=Object(g.a)({},e.breakpoints.up(a),t),o["".concat(a,"Down")]=Object(g.a)({},e.breakpoints.down(a),t),o}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,o=e.classes,a=e.className,r=e.only,n=(Object(s.a)(e,["children","classes","className","only"]),Object(f.a)()),i=[];a&&i.push(a);for(var l=0;l<n.breakpoints.keys.length;l+=1){var p=n.breakpoints.keys[l],d=e["".concat(p,"Up")],m=e["".concat(p,"Down")];d&&i.push(o["".concat(p,"Up")]),m&&i.push(o["".concat(p,"Down")])}return r&&(Array.isArray(r)?r:[r]).forEach((function(e){i.push(o["only".concat(Object(h.a)(e))])})),c.createElement("div",{className:i.join(" ")},t)}));var w=function(e){var t=e.implementation,o=void 0===t?"js":t,a=e.lgDown,r=void 0!==a&&a,n=e.lgUp,i=void 0!==n&&n,p=e.mdDown,d=void 0!==p&&p,m=e.mdUp,b=void 0!==m&&m,f=e.smDown,u=void 0!==f&&f,g=e.smUp,h=void 0!==g&&g,x=e.xlDown,w=void 0!==x&&x,S=e.xlUp,O=void 0!==S&&S,j=e.xsDown,k=void 0!==j&&j,D=e.xsUp,T=void 0!==D&&D,N=Object(s.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===o?c.createElement(y,Object(l.a)({lgDown:r,lgUp:i,mdDown:d,mdUp:b,smDown:u,smUp:h,xlDown:w,xlUp:O,xsDown:k,xsUp:T},N)):c.createElement(v,Object(l.a)({lgDown:r,lgUp:i,mdDown:d,mdUp:b,smDown:u,smUp:h,xlDown:w,xlUp:O,xsDown:k,xsUp:T},N))},S=o("dVkj"),O=o.n(S),j=o("PsDL"),k=o("R/WZ"),D=o("ZBNC"),T=o("lO0E"),N=o("ofer"),R=o("uniG"),U=o.n(R),C=o("LSll"),E=o("wb2y"),H=o("eD//"),M=o("tVbE"),B=o("IsqK"),z=o("YFqc"),I=o.n(z),P=o("uXem"),W=o.n(P),A=o("56Ss"),_=p.a.createElement,G=Object(k.a)((function(e){return Object(D.a)({toolbar:e.mixins.toolbar})})),X=function(){var e=G();return _("div",null,_("div",{className:e.toolbar}),_(E.a,null),_(I.a,{passHref:!0,href:"/docs"},_(M.a,{component:"a"},_(A.a,null,_(W.a,null)),_(B.a,{primary:"Docs"}))),_(E.a,null),_(I.a,{passHref:!0,href:"/"},_(M.a,{component:"a"},_(B.a,{primary:"Demo"}))),_(I.a,{passHref:!0,href:"/readonly"},_(M.a,{component:"a"},_(B.a,{primary:"Read only"}))),_(I.a,{passHref:!0,href:"/empty"},_(M.a,{component:"a"},_(B.a,{primary:"Empty editor"}))),_(I.a,{passHref:!0,href:"/examples/reactadmin"},_(M.a,{component:"a"},_(B.a,{primary:"React Admin example"}))),_(E.a,null),_(H.a,null,_(I.a,{passHref:!0,href:"/old/demo"},_(M.a,{component:"a"},_(B.a,{primary:"Old demo (v0)"}))),_(I.a,{passHref:!0,href:"/old/fromhtml"},_(M.a,{component:"a"},_(B.a,{primary:"Old import-from-html-Demo"})))),_(E.a,null),_(H.a,null,_(M.a,{component:"a",href:"https://react-page.github.io/"},_(B.a,{primary:"Latest version"})),_(M.a,{component:"a",href:"https://react-page.github.io/beta"},_(B.a,{primary:"beta version"}))))},q=p.a.createElement,L=Object(k.a)((function(e){return Object(D.a)({root:{display:"flex"},drawer:Object(r.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(r.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(r.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240,zIndex:0},main:{flexGrow:1,padding:e.spacing(4),backgroundColor:"#eee"},content:{flexGrow:1,padding:e.spacing(4),backgroundColor:"white",maxWidth:1280,margin:"auto"}})}));t.a=function(e){var t=e.children,o=L(),r=Object(f.a)(),l=p.a.useState(!1),s=Object(a.a)(l,2),c=s[0],d=s[1],m=function(){d(!c)},b=q(X,null);return q(p.a.Fragment,null,q(O.a,{href:"//github.com/react-page/react-page",target:"_blank",position:"right",color:"black"},"Fork me on GitHub"),q("div",{className:o.root},q(n.a,{position:"fixed",className:o.appBar},q(T.a,null,q(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:o.menuButton},q(U.a,null)),q(N.a,{variant:"h6",noWrap:!0},"React Page ",C.a))),q("nav",{className:o.drawer},q(w,{smUp:!0,implementation:"css"},q(i.a,{variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:c,onClose:m,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},b)),q(w,{xsDown:!0,implementation:"css"},q(i.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},b))),q("main",{className:o.main},q("div",{className:o.toolbar}),q("div",{className:o.content},t))))}},bXiM:function(e,t,o){"use strict";var a=o("wx14"),r=o("Ff2n"),n=o("mXGw"),i=(o("17x9"),o("iuhU")),l=o("H2TA"),s=o("NqtD"),c=o("kKAo"),p=n.forwardRef((function(e,t){var o=e.classes,l=e.className,p=e.color,d=void 0===p?"primary":p,m=e.position,b=void 0===m?"fixed":m,f=Object(r.a)(e,["classes","className","color","position"]);return n.createElement(c.a,Object(a.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(o.root,o["position".concat(Object(s.a)(b))],o["color".concat(Object(s.a)(d))],l,"fixed"===b&&"mui-fixed"),ref:t},f))}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p)},dVkj:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n=o("mXGw"),i=(a=n)&&a.__esModule?a:{default:a},l=o("jg5X");var s={left:[l.RibbonStyle.leftStyle,l.RibbonStyleWrapper.leftStyle],right:[l.RibbonStyle.rightStyle,l.RibbonStyleWrapper.rightStyle],"left-bottom":[l.RibbonStyle.leftBottomStyle,l.RibbonStyleWrapper.leftBottomStyle],"right-bottom":[l.RibbonStyle.rightBottomStyle,l.RibbonStyleWrapper.rightBottomStyle]},c={red:l.RibbonStyle.redColor,orange:l.RibbonStyle.orangeColor,black:l.RibbonStyle.blackColor,green:l.RibbonStyle.greenColor};t.default=e.RibbonStyle=function(e){var t=e.position,o=void 0===t?"right":t,a=e.href,n=e.target,p=e.color,d=void 0===p?"red":p,m=e.className,b=void 0===m?"":m,f=e.children,u=function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(e,["position","href","target","color","className","children"]),y=s[o]||[l.RibbonStyle.rightStyle,l.RibbonStyleWrapper.rightStyle],g=c[d]||l.RibbonStyle.redColor;y[0]===l.RibbonStyle.rightStyle&&(o="right");var h=r({},l.RibbonStyle.baseStyle,y[0],g),x=r({},l.RibbonStyleWrapper.baseStyle,y[1]);return i.default.createElement("div",r({},u,{className:"github-fork-ribbon-wrapper "+o+" "+b,style:x}),i.default.createElement("div",{className:"github-fork-ribbon",style:h},i.default.createElement("a",{href:a,target:n,style:l.RibbonStyle.urlStyle,rel:"noopener"},f)))}}).call(this,o("yLpj"))},jg5X:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RibbonStyle={baseStyle:{position:"absolute",padding:"2px 0",backgroundColor:"#a00",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))",WebkitBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",MozBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",boxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",font:'700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',zIndex:"9999",pointerEvents:"auto"},urlStyle:{color:"#fff",textDecoration:"none",textShadow:"0 -1px rgba(0, 0, 0, 0.5)",textAlign:"center",width:"200px",lineHeight:"20px",display:"inline-block",padding:"2px 0",borderWidth:"1px 0",borderStyle:"dashed",borderColor:"rgba(255, 255, 255, 0.7)"},redColor:{backgroundColor:"#a00"},orangeColor:{backgroundColor:"#f80"},blackColor:{backgroundColor:"#333"},greenColor:{backgroundColor:"#090"},leftStyle:{top:"42px",left:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"},rightStyle:{top:"42px",right:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},leftBottomStyle:{top:"80px",left:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},rightBottomStyle:{top:"80px",right:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"}},t.RibbonStyleWrapper={baseStyle:{width:"150px",height:"150px",position:"absolute",overflow:"hidden",top:0,zIndex:"9999",pointerEvents:"none"},fixedStyle:{position:"fixed"},leftStyle:{left:0},rightStyle:{right:0},leftBottomStyle:{position:"fixed",top:"inherit",bottom:0,left:0},rightBottomStyle:{position:"fixed",top:"inherit",bottom:0,right:0}}},uXem:function(e,t,o){"use strict";var a=o("TqRt"),r=o("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("mXGw")),i=(0,a(o("8/g6")).default)(n.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");t.default=i},uniG:function(e,t,o){"use strict";var a=o("TqRt"),r=o("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("mXGw")),i=(0,a(o("8/g6")).default)(n.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},xvhg:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var a=o("8rE2");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var o=[],a=!0,r=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(s){r=!0,n=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw n}}return o}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);