(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8411],{63861:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/sidebarPosition",function(){return r(19162)}])},8044:function(e,n,r){"use strict";r.d(n,{Z:function(){return _}});var t=r(24246),i=r(20520),o=r(80396),a=r(86847),l=r(20359),s=r(90547),c=r(20373),u=r(65136),d=r(50220),p=r(18681),m=r(54344),h=r(98375),f=r(52754),g=r(27378),x=r(38442),j=r(50755),v=r(53332),b=r(57299),Z=r(79894),y=r(67650),w=r(33218),E=(0,c.Z)((function(e){return(0,u.Z)({toolbar:e.mixins.toolbar})})),P=function(){var e=E();return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:e.toolbar}),(0,t.jsx)(x.Z,{}),(0,t.jsx)(Z.default,{passHref:!0,href:"/docs",children:(0,t.jsxs)(v.Z,{component:"a",children:[(0,t.jsx)(w.Z,{children:(0,t.jsx)(y.Z,{})}),(0,t.jsx)(b.Z,{primary:"Docs"})]})}),(0,t.jsx)(x.Z,{}),(0,t.jsx)(Z.default,{passHref:!0,href:"/",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"Demo"})})}),(0,t.jsx)(Z.default,{passHref:!0,href:"/readonly",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"Read only"})})}),(0,t.jsx)(Z.default,{passHref:!0,href:"/empty",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"Empty editor"})})}),(0,t.jsx)(Z.default,{passHref:!0,href:"/examples/reactadmin",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"React Admin example"})})}),(0,t.jsx)(x.Z,{}),(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(Z.default,{passHref:!0,href:"/old/demo",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"Old demo (v0)"})})}),(0,t.jsx)(Z.default,{passHref:!0,href:"/old/fromhtml",children:(0,t.jsx)(v.Z,{component:"a",children:(0,t.jsx)(b.Z,{primary:"Old import-from-html-Demo"})})})]}),(0,t.jsx)(x.Z,{}),(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(v.Z,{component:"a",href:"https://react-page.github.io/",children:(0,t.jsx)(b.Z,{primary:"Latest version"})}),(0,t.jsx)(v.Z,{component:"a",href:"https://react-page.github.io/beta",children:(0,t.jsx)(b.Z,{primary:"beta version"})})]})]})};function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function N(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return k(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=240,R=(0,c.Z)((function(e){return(0,u.Z)({root:{display:"flex"},drawer:N({},e.breakpoints.up("sm"),{width:O,flexShrink:0}),appBar:N({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(O,"px)"),marginLeft:O}),menuButton:N({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:O,zIndex:0},main:{flexGrow:1,padding:e.spacing(4),backgroundColor:"#eee"},content:{flexGrow:1,padding:e.spacing(4),backgroundColor:"white",maxWidth:1280,margin:"auto"}})})),_=function(e){var n=e.children,r=R(),c=(0,d.Z)(),u=C(g.useState(!1),2),x=u[0],j=u[1],v=function(){j(!x)},b=(0,t.jsx)(P,{});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{href:"//github.com/react-page/react-page",target:"_blank",position:"right",color:"black",children:"Fork me on GitHub"}),(0,t.jsxs)("div",{className:r.root,children:[(0,t.jsx)(i.Z,{position:"fixed",className:r.appBar,children:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(s.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:v,className:r.menuButton,children:(0,t.jsx)(h.Z,{})}),(0,t.jsxs)(m.Z,{variant:"h6",noWrap:!0,children:["React Page ",f.q4]})]})}),(0,t.jsxs)("nav",{className:r.drawer,children:[(0,t.jsx)(a.Z,{smUp:!0,implementation:"css",children:(0,t.jsx)(o.ZP,{variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:x,onClose:v,classes:{paper:r.drawerPaper},ModalProps:{keepMounted:!0},children:b})}),(0,t.jsx)(a.Z,{xsDown:!0,implementation:"css",children:(0,t.jsx)(o.ZP,{classes:{paper:r.drawerPaper},variant:"permanent",open:!0,children:b})})]}),(0,t.jsxs)("main",{className:r.main,children:[(0,t.jsx)("div",{className:r.toolbar}),(0,t.jsx)("div",{className:r.content,children:n})]})]})]})}},19162:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(24246),i=r(27378),o=r(52754),a=r(48650),l=r(71417),s=r(8044),c=[(0,a.ZP)(),l.Z];function u(){var e=(0,i.useState)(null),n=e[0],r=e[1],a=(0,i.useState)("rightAbsolute"),l=a[0],u=a[1];return(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)("select",{onChange:function(e){return u(e.target.value)},children:[(0,t.jsx)("option",{children:"rightAbsolute"}),(0,t.jsx)("option",{children:"rightRelative"}),(0,t.jsx)("option",{children:"leftRelative"}),(0,t.jsx)("option",{value:"leftAbsolute",children:"leftAbsolute (currently buggy and interfers with other ui elements)"})]}),(0,t.jsx)(o.ZP,{cellPlugins:c,value:n,onChange:r,sidebarPosition:l})]})}},71417:function(e,n,r){"use strict";r.d(n,{Z:function(){return f},F:function(){return h}});var t=r(7256),i=r(27378),o=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5690)]).then(r.bind(r,15217))})),a={Controls:function(){return i.createElement(i.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return i.createElement(i.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",altPlaceholder:"Image's description",altLabel:"Image's alternative description",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:i.createElement(o,null)},l=function(){return l=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)},s=function(e){var n=l(l({},a),e),r=n.Controls;return{controls:{type:"custom",Component:function(e){return i.createElement(r,l({},e,{translations:n.translations,imageUpload:n.imageUpload}))}},Renderer:n.Renderer,id:"ory/editor/core/content/image",version:1,icon:n.icon,title:n.translations.pluginName,isInlineable:!0,description:n.translations.pluginDescription}},c={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},u=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(5981)]).then(r.bind(r,2431))})),d=function(e){var n=e.data,r=null===n||void 0===n?void 0:n.src,t=null===n||void 0===n?void 0:n.alt,o=null===n||void 0===n?void 0:n.openInNewWindow,a=i.createElement("img",{className:"react-page-plugins-content-image",alt:t,src:r});return r?i.createElement("div",null,(null===n||void 0===n?void 0:n.href)?i.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===n||void 0===n?void 0:n.href,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0},a):a):i.createElement("div",null,i.createElement("div",{className:"react-page-plugins-content-image-placeholder"},i.createElement(u,{style:c})))},p=function(){return p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},p.apply(this,arguments)},m=(0,t.Z)((function(){return Promise.all([r.e(3140),r.e(7217),r.e(5530),r.e(8496),r.e(4576),r.e(919),r.e(5439),r.e(9619),r.e(8236),r.e(1740),r.e(8854),r.e(5167)]).then(r.bind(r,35213))})),h=function(e){return s(p({Renderer:d,Controls:m},e))},f=h()}},function(e){e.O(0,[3140,7217,5530,1736,3477,5381,2866,6998,3097,7868,2754,8650,9774,2888,179],(function(){return n=63861,e(e.s=n);var n}));var n=e.O();_N_E=n}]);