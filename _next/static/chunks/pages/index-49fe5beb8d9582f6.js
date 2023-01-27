(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{3833:function(e,a,o){"use strict";o.d(a,{Z:function(){return k}});var r=o(30808),t=o(25773),n=o(27378),i=o(38944),l=o(81923),s=o(82267),d=o(7818),c=o(95147),p=o(93596),h=o(25482),x=o(89090),u=o(44124),m=o(6749);function v(e){return(0,m.Z)("MuiButton",e)}let g=(0,u.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=o(4141),Z=o(24246);let f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:a,disableElevation:o,fullWidth:r,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,x.Z)(a)}`,`size${(0,x.Z)(n)}`,`${i}Size${(0,x.Z)(n)}`,"inherit"===a&&"colorInherit",o&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,x.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,x.Z)(n)}`]},c=(0,s.Z)(d,v,l);return(0,t.Z)({},l,c)},j=e=>(0,t.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,c.ZP)(h.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:o}=e;return[a.root,a[o.variant],a[`${o.variant}${(0,x.Z)(o.color)}`],a[`size${(0,x.Z)(o.size)}`],a[`${o.variant}Size${(0,x.Z)(o.size)}`],"inherit"===o.color&&a.colorInherit,o.disableElevation&&a.disableElevation,o.fullWidth&&a.fullWidth]}})(({theme:e,ownerState:a})=>{var o,r;return(0,t.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,t.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,t.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,t.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,t.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),z=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{let{ownerState:o}=e;return[a.startIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})(({ownerState:e})=>(0,t.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},j(e))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{let{ownerState:o}=e;return[a.endIcon,a[`iconSize${(0,x.Z)(o.size)}`]]}})(({ownerState:e})=>(0,t.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},j(e))),C=n.forwardRef(function(e,a){let o=n.useContext(b.Z),s=(0,l.Z)(o,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:h="primary",component:x="button",className:u,disabled:m=!1,disableElevation:v=!1,disableFocusRipple:g=!1,endIcon:j,focusVisibleClassName:C,fullWidth:k=!1,size:$="medium",startIcon:I,type:P,variant:R="text"}=d,E=(0,r.Z)(d,f),B=(0,t.Z)({},d,{color:h,component:x,disabled:m,disableElevation:v,disableFocusRipple:g,fullWidth:k,size:$,type:P,variant:R}),M=y(B),_=I&&(0,Z.jsx)(z,{className:M.startIcon,ownerState:B,children:I}),N=j&&(0,Z.jsx)(w,{className:M.endIcon,ownerState:B,children:j});return(0,Z.jsxs)(S,(0,t.Z)({ownerState:B,className:(0,i.default)(o.className,M.root,u),component:x,disabled:m,focusRipple:!g,focusVisibleClassName:(0,i.default)(M.focusVisible,C),ref:a,type:P},E,{classes:M,children:[_,c,N]}))});var k=C},4141:function(e,a,o){"use strict";var r=o(27378);let t=r.createContext({});a.Z=t},49536:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(15979)}])},8044:function(e,a,o){"use strict";o.d(a,{Z:function(){return C}});var r=o(24246),t=o(15366),n=o(59522),i=o(81267),l=o(20922),s=o(94827),d=o(11871),c=o(87949),p=o(25833),h=o(23884),x=o(29277),u=o(52754),m=o(27378),v=o(58293),g=o(82111),b=o(98269),Z=o(79894),f=o.n(Z),y=o(11386),j=o(20518),S=o(63221);let z=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/docs",children:(0,r.jsxs)(g.ZP,{component:"a",children:[(0,r.jsx)(j.Z,{children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(b.Z,{primary:"Docs"})]})}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"https://github.com/react-page/react-page",children:(0,r.jsxs)(g.ZP,{component:"a",children:[(0,r.jsx)(j.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(b.Z,{primary:"Github"})]})}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"Demo"})})}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/readonly",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"Read only"})})}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/empty",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"Empty editor"})})}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/examples/reactadmin",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"React Admin example"})})}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/old/demo",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"Old demo (v0)"})})}),(0,r.jsx)(f(),{passHref:!0,legacyBehavior:!0,href:"/old/fromhtml",children:(0,r.jsx)(g.ZP,{component:"a",children:(0,r.jsx)(b.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/",children:(0,r.jsx)(b.Z,{primary:"Latest version"})}),(0,r.jsx)(g.ZP,{component:"a",href:"https://react-page.github.io/beta",children:(0,r.jsx)(b.Z,{primary:"beta version"})})]})]}),w=e=>{let{children:a}=e,[o,v]=m.useState(!1),g=()=>{v(!o)},b=(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(z,{})]});return(0,r.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,r.jsx)(s.ZP,{}),(0,r.jsx)(i.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(240,"px)")},ml:{sm:"".concat(240,"px")}},children:(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(p.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:g,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(t.Z,{})}),(0,r.jsxs)(x.Z,{variant:"h6",noWrap:!0,component:"div",children:["React Page ",u.q4]}),(0,r.jsx)(p.Z,{href:"https://github.com/react-page/react-page",target:"_blank",color:"inherit","aria-label":"open drawer",sx:{marginLeft:"auto"},children:(0,r.jsx)(n.Z,{})})]})}),(0,r.jsxs)(l.Z,{component:"nav",sx:{width:{sm:240},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,r.jsx)(c.ZP,{variant:"temporary",open:o,onClose:g,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:b}),(0,r.jsx)(c.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{zIndex:10,boxSizing:"border-box",width:240}},open:!0,children:b})]}),(0,r.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(240,"px)")},background:e=>e.palette.grey[100]},children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(l.Z,{sx:{flexGrow:1,p:4,backgroundColor:"white",maxWidth:1280,margin:"auto"},children:a})]})]})};var C=w},15979:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return p}});var r=o(24246),t=o(3833),n=o(52754),i=o(27378),l=o(8044),s=o(49e3),d=o(89148);let c=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}];function p(){let[e,a]=(0,i.useState)(d.T),o=()=>a(d.T);return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(n.ZP,{cellPlugins:s.C,value:e,lang:c[0].lang,onChange:a,languages:c}),(0,r.jsx)(t.Z,{onClick:o,children:"Reset"})]})}}},function(e){e.O(0,[4879,5482,6597,2983,6333,1255,6948,9894,6731,5849,2754,8650,9e3,9148,9774,2888,179],function(){return e(e.s=49536)}),_N_E=e.O()}]);
//# sourceMappingURL=index-49fe5beb8d9582f6.js.map