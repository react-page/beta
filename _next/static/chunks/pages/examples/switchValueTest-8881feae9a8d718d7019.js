_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"3pai":function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return u}));var t=o("LSll"),n=o("mXGw"),i=o.n(n),r=o("aEiD"),l=o("atfL"),d=o("Z3vd"),c=i.a.createElement,s=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}],p={id:"2390df",version:1,rows:[{id:"4c7d90",cells:[{id:"95d678",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{children:[{text:"Next Level Content Editing"}],type:"HEADINGS/HEADING-TWO",data:{align:"center"}},{children:[{text:"ReactPage"}],type:"HEADINGS/HEADING-ONE",data:{align:"center"}}]}},rows:[],inline:null}]}]},b={id:"2590df",version:1,rows:[{id:"4c7d90",cells:[{id:"95d678",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{children:[{text:"Another text"}],type:"HEADINGS/HEADING-TWO",data:{align:"center"}},{children:[{text:"Something"}],type:"HEADINGS/HEADING-ONE",data:{align:"center"}}]}},rows:[],inline:null}]}]};function u(){var e=Object(n.useState)(p),a=e[0],o=e[1];return c(l.a,null,c(d.a,{onClick:function(){return o(p)}},"switch to 1"),c(d.a,{onClick:function(){return o(b)}},"switch to 2"),c(t.b,{cellPlugins:r.a,value:a,lang:s[0].lang,onChange:o,languages:s}))}},"7BZi":function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/switchValueTest",function(){return o("3pai")}])},Z3vd:function(e,a,o){"use strict";var t=o("Ff2n"),n=o("wx14"),i=o("mXGw"),r=(o("17x9"),o("iuhU")),l=o("H2TA"),d=o("ye/S"),c=o("VD++"),s=o("NqtD"),p=i.forwardRef((function(e,a){var o=e.children,l=e.classes,d=e.className,p=e.color,b=void 0===p?"default":p,u=e.component,h=void 0===u?"button":u,m=e.disabled,g=void 0!==m&&m,x=e.disableElevation,y=void 0!==x&&x,S=e.disableFocusRipple,v=void 0!==S&&S,f=e.endIcon,w=e.focusVisibleClassName,C=e.fullWidth,k=void 0!==C&&C,z=e.size,O=void 0===z?"medium":z,E=e.startIcon,N=e.type,j=void 0===N?"button":N,I=e.variant,R=void 0===I?"text":I,T=Object(t.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),D=E&&i.createElement("span",{className:Object(r.a)(l.startIcon,l["iconSize".concat(Object(s.a)(O))])},E),_=f&&i.createElement("span",{className:Object(r.a)(l.endIcon,l["iconSize".concat(Object(s.a)(O))])},f);return i.createElement(c.a,Object(n.a)({className:Object(r.a)(l.root,l[R],d,"inherit"===b?l.colorInherit:"default"!==b&&l["".concat(R).concat(Object(s.a)(b))],"medium"!==O&&[l["".concat(R,"Size").concat(Object(s.a)(O))],l["size".concat(Object(s.a)(O))]],y&&l.disableElevation,g&&l.disabled,k&&l.fullWidth),component:h,disabled:g,focusRipple:!v,focusVisibleClassName:Object(r.a)(l.focusVisible,w),ref:a,type:j},T),i.createElement("span",{className:l.label},D,o,_))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)}},[["7BZi",2,0,1,3,4,6,7]]]);