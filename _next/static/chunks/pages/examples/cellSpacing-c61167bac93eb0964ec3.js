_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{deX4:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));var i=n("4uDH"),l=n("mXGw"),r=n.n(l),o=Object(i.a)((function(){return n.e(91).then(n.t.bind(null,"Yipg",7))})),a={Controls:function(){return r.a.createElement(r.a.Fragment,null," Controls for this plugin were not provided")},Renderer:function(){return r.a.createElement(r.a.Fragment,null,"Renderer; for this plugin was not provided ")},translations:{pluginName:"Image",pluginDescription:"Loads an image from an url.",or:"OR",haveUrl:"Existing image URL",imageUrl:"Image URL",hrefPlaceholder:"http://example.com",hrefLabel:"Link to open upon image click",openNewWindow:"Open link in new window",srcPlaceholder:"http://example.com/image.png",buttonContent:"Choose for upload",noFileError:"No file selected",badExtensionError:"Wrong file type",tooBigError:"Image file > 5MB",uploadingError:"Error while uploading",unknownError:"Unknown error"},icon:r.a.createElement(o,null)},c=function(){return(c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},d=function(e){var t=c(c({},a),e),n=t.Controls;return{controls:{type:"custom",Component:function(e){return r.a.createElement(n,c({},e,{translations:t.translations,imageUpload:t.imageUpload}))}},Renderer:t.Renderer,id:"ory/editor/core/content/image",version:1,icon:t.icon,title:t.translations.pluginName,isInlineable:!0,description:t.translations.pluginDescription}},s={width:"100%",height:"auto",padding:"0",color:"#aaa",textAlign:"center",minWidth:64,minHeight:64,maxHeight:256},u=Object(i.a)((function(){return n.e(13).then(n.t.bind(null,"q8G3",7))})),p=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.src,i=null===t||void 0===t?void 0:t.openInNewWindow,l=r.a.createElement("img",{className:"react-page-plugins-content-image",alt:"",src:n});return n?r.a.createElement("div",null,(null===t||void 0===t?void 0:t.href)?r.a.createElement("a",{onClick:e.isEditMode?function(e){return e.preventDefault()}:void 0,href:null===t||void 0===t?void 0:t.href,target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0},l):l):r.a.createElement("div",null,r.a.createElement("div",{className:"react-page-plugins-content-image-placeholder"},r.a.createElement(u,{style:s})))},g=function(){return(g=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},m=Object(i.a)((function(){return Promise.all([n.e(0),n.e(13),n.e(66)]).then(n.bind(null,"t/Zn"))})),f=function(e){return d(g({Renderer:p,Controls:m},e))},y=f();t.a=y},fymO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/cellSpacing",function(){return n("pJre")}])},pJre:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var i=n("m6w3"),l=n("uEoR"),r=n("mXGw"),o=n.n(r),a=n("cIEp"),c=n("IrE9"),d=n("LSll"),s=n("33kk"),u=n("deX4"),p=o.a.createElement,g={Renderer:function(e){var t=e.children,n=e.data;return p("div",{style:{height:"100%",boxSizing:"border-box",backgroundColor:n.backgroundColor,padding:"".concat(n.paddingY,"px ").concat(n.paddingX,"px")}},t)},cellSpacing:function(e){return e.cellSpacingOverride?{x:e.cellSpacingX,y:e.cellSpacingY}:null},createInitialData:function(){return{backgroundColor:"#ffeeaa",paddingX:12,paddingY:12,cellSpacingOverride:!1,cellSpacingX:10,cellSpacingY:10}},id:"custom-layout-plugin-with-cell-spacing",title:"Background with Cell Spacing",description:"Custom layout plugin with cell spacing support",version:1,controls:{type:"autoform",schema:{required:["backgroundColor"],properties:{backgroundColor:{type:"string",title:"Background Color"},paddingX:{type:"number",title:"Horizontal Padding"},paddingY:{type:"number",title:"Vertical Padding"},cellSpacingOverride:{type:"boolean",title:"Override Cell Spacing"},cellSpacingX:{type:"number",title:"Horizontal Cell Spacing"},cellSpacingY:{type:"number",title:"Vertical Cell Spacing"}}}}},m=n("atfL"),f={id:"c1uxgo",version:1,rows:[{id:"l09c73",cells:[{id:"3pkvwh",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Top level layout that uses global cell spacing settings"}]}]}},rows:[]},{id:"y0zafy",size:6,rows:[{id:"slc8rh",cells:[{id:"mmjkz1",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"qe32q9",cells:[{id:"dl80vv",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]},{id:"8xymvk",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"v55yqx",cells:[{id:"ha4hiq",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]}]}]},{id:"0ni7v8",cells:[{id:"umiqg2",size:12,plugin:{id:"custom-layout-plugin-with-cell-spacing",version:1},dataI18n:{default:{backgroundColor:"#ffeeaa",paddingX:12,paddingY:12,cellSpacingOverride:!0,cellSpacingX:20,cellSpacingY:20}},rows:[{id:"bx0cd7",cells:[{id:"tagh46",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Layout plugin with custom padding and cell spacing overrides"}]}]}},rows:[]},{id:"fvrrm1",size:6,rows:[{id:"zvjmqy",cells:[{id:"759xh9",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"o5nku6",cells:[{id:"gss6fg",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]},{id:"q5vmp1",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"plcf90",cells:[{id:"rc3y65",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]}]}]},{id:"w7lf7g",cells:[{id:"adxf4r",size:12,plugin:{id:"custom-layout-plugin-with-cell-spacing",version:1},dataI18n:{default:{backgroundColor:"#f7cf2e",paddingX:0,paddingY:0,cellSpacingOverride:!0,cellSpacingX:30,cellSpacingY:30}},rows:[{id:"hkelwj",cells:[{id:"tv3lki",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Nested layout plugin with no padding and its own cell spacing overrides"}]}]}},rows:[]},{id:"1afdrz",size:6,rows:[{id:"hqghus",cells:[{id:"9kxp9i",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"j9barl",cells:[{id:"oswsvd",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]},{id:"yv3say",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]},{id:"c2jgv8",cells:[{id:"gbddws",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{default:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Lorem Ipsum"}]}]}},rows:[]}]}]}]}]}]}]}]}]},y=o.a.createElement;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=[Object(s.b)(),u.a,g];function h(e){var t=".react-page-cell-inner-leaf { padding: 0; }";return e.outlineCells&&(t+=".react-page-cell-inner { outline: 1px solid red !important; }"),e.outlineEditor&&(t+=".editor { outline: 2px solid green; }"),t}function R(){var e=o.a.useState({value:f,outlineEditor:!0,outlineCells:!0,cellSpacingX:10,cellSpacingY:10}),t=Object(l.a)(e,2),n=t[0],i=t[1],r=o.a.useMemo((function(){return y("style",{dangerouslySetInnerHTML:{__html:h(n)}})}),[n.outlineCells,n.outlineEditor]),s=Object(a.a)({properties:{outlineEditor:{type:"boolean",title:"Outline the Editor in Green"},outlineCells:{type:"boolean",title:"Outline Cells in Red"},readOnly:{type:"boolean",title:"Read Only"},cellSpacingX:{type:"integer",title:"Horizontal Cell Spacing"},cellSpacingY:{type:"integer",title:"Vertical Cell Spacing"}}});return y(m.a,null,r,y("div",{style:{padding:"20px",marginBottom:"20px",outline:"1px solid #E0E0E0"}},y(c.b,{model:n,autosave:!0,schema:s,onSubmit:function(e){return i((function(t){return v(v({},t),e)}))}},y("div",{style:{display:"flex",maxWidth:600}},y(c.a,{fields:["readOnly","outlineEditor","outlineCells"]}),y(c.a,{fields:["cellSpacingX","cellSpacingY"]})))),y("div",{className:"editor",style:{display:"flex",flexDirection:"column"}},y(d.b,{readOnly:n.readOnly,cellPlugins:P,value:n.value,onChange:function(e){return i((function(t){return v(v({},t),{},{value:e})}))},cellSpacing:{x:n.cellSpacingX,y:n.cellSpacingY}})))}}},[["fymO",2,1,0,3,5,4,7,6,8,9,10,11]]]);