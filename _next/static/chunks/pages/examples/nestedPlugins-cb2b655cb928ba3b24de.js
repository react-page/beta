_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"1I1l":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var o=n("z7pX"),a=n("cpVT"),r=n("mXGw"),i=n.n(r),l=n("LSll"),c=n("33kk"),d=n("deX4"),s=n("atfL"),p=n("Z3vd"),u=i.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(c.b)(),h=Object(c.b)((function(e){return m(m({},e),{},{title:"reduced slate",plugins:{headings:{h3:e.plugins.headings.h3((function(e){return m(m({},e),{},{getStyle:function(){return{color:"red"}}})}))},paragraphs:e.plugins.paragraphs,emphasize:e.plugins.emphasize}})})),f={id:"some-other-plugin",title:"Some plugin",description:"Some plugin that is only available inside another plugin",Renderer:function(e){return u("div",null,u("p",null,"Helloooo"))},version:1},y={id:"some-plugin",title:"Some plugin with different cellPlugins",Renderer:function(e){return u("div",{style:{border:"5px solid black"}},e.children)},cellPlugins:[h,f],version:1,cellStyle:{padding:0}},v={id:"some-plugin-2",title:"Some plugin that extends the parent plugins",Renderer:function(e){return u("div",{style:{border:"5px solid black"}},e.children)},cellPlugins:function(e){return[h,f].concat(Object(o.a)(e.filter((function(e){return"some-plugin-2"!==e.id}))))},version:1,cellStyle:{padding:0}},x=[g,d.a,y,v];function O(){var e=Object(r.useState)(null),t=e[0],n=e[1],o=Object(r.useState)(!1),a=o[0],i=o[1];return u(s.a,null,u(p.a,{onClick:function(){return i(!a)}},a?"read only":"editable"),u(l.b,{cellPlugins:x,value:t,onChange:n,readOnly:a}))}},Agws:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/nestedPlugins",function(){return n("1I1l")}])},Z3vd:function(e,t,n){"use strict";var o=n("Ff2n"),a=n("wx14"),r=n("mXGw"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),c=n("ye/S"),d=n("VD++"),s=n("NqtD"),p=r.forwardRef((function(e,t){var n=e.children,l=e.classes,c=e.className,p=e.color,u=void 0===p?"default":p,b=e.component,m=void 0===b?"button":b,g=e.disabled,h=void 0!==g&&g,f=e.disableElevation,y=void 0!==f&&f,v=e.disableFocusRipple,x=void 0!==v&&v,O=e.endIcon,S=e.focusVisibleClassName,w=e.fullWidth,j=void 0!==w&&w,k=e.size,C=void 0===k?"medium":k,z=e.startIcon,E=e.type,R=void 0===E?"button":E,P=e.variant,N=void 0===P?"text":P,I=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=z&&r.createElement("span",{className:Object(i.a)(l.startIcon,l["iconSize".concat(Object(s.a)(C))])},z),T=O&&r.createElement("span",{className:Object(i.a)(l.endIcon,l["iconSize".concat(Object(s.a)(C))])},O);return r.createElement(d.a,Object(a.a)({className:Object(i.a)(l.root,l[N],c,"inherit"===u?l.colorInherit:"default"!==u&&l["".concat(N).concat(Object(s.a)(u))],"medium"!==C&&[l["".concat(N,"Size").concat(Object(s.a)(C))],l["size".concat(Object(s.a)(C))]],y&&l.disableElevation,h&&l.disabled,j&&l.fullWidth),component:m,disabled:h,focusRipple:!x,focusVisibleClassName:Object(i.a)(l.focusVisible,S),ref:t,type:R},I),r.createElement("span",{className:l.label},L,n,T))}));t.a=Object(l.a)((function(e){return{root:Object(a.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},deX4:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var o=n("4uDH"),a=n("mXGw"),r=n.n(a),i=Object(o.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(76)]).then(n.t.bind(null,"c5OO",7))})),l={Controls:function(){return r.a.createElement(r.a.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return r.a.createElement(r.a.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"I have a URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link location (url)",openNewWindow:"Open in new window",srcPlaceholder:"http://example.com/image.png"},icon:r.a.createElement(i,null)},c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(e){var t=c(c({},l),e),n=t.Controls;return{controls:{type:"custom",Component:function(e){return r.a.createElement(n,c({},e,{translations:t.translations,imageUpload:t.imageUpload}))}},Renderer:t.Renderer,id:"ory/editor/core/content/image",version:1,icon:t.icon,title:t.translations.pluginName,isInlineable:!0,description:t.translations.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},p=Object(o.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.t.bind(null,"f5QF",7))})),u=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.src,o=null===t||void 0===t?void 0:t.openInNewWindow,a=r.a.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:n});return n?r.a.createElement("div",null,(null===t||void 0===t?void 0:t.href)?r.a.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===t||void 0===t?void 0:t.href,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0},a):a):r.a.createElement("div",null,r.a.createElement("div",{className:"react-page-plugins-content-image-placeholder"},r.a.createElement(p,{style:s})))},b=function(){return(b=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=Object(o.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(10),n.e(50)]).then(n.bind(null,"t/Zn"))})),g=function(e){return d(b({Renderer:u,Controls:m},e))},h=g();t.a=h},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("6FTQ");var a=n("8rE2");function r(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["Agws",3,1,0,2,5,4,7,6,8,9]]]);