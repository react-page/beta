_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"56Rm":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u}));var r=e("4uDH"),i=Object(r.a)((function(){return Promise.all([e.e(1),e.e(0),e.e(10)]).then(e.bind(null,"s3X+"))})),u=Object(r.a)((function(){return Promise.all([e.e(1),e.e(0),e.e(10),e.e(15),e.e(87)]).then(e.bind(null,"UHGO"))}))},GcRk:function(n,t,e){"use strict";e.d(t,"g",(function(){return u})),e.d(t,"f",(function(){return o})),e.d(t,"d",(function(){return l})),e.d(t,"e",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return d})),e.d(t,"b",(function(){return f})),e.d(t,"n",(function(){return s})),e.d(t,"m",(function(){return v})),e.d(t,"k",(function(){return p})),e.d(t,"l",(function(){return b})),e.d(t,"j",(function(){return g})),e.d(t,"i",(function(){return m})),e.d(t,"h",(function(){return E}));var r=e("zfhL"),i=function(){return(i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},u="CELL_UPDATE_IS_DRAFT",o="CELL_UPDATE_DATA",l="CELL_REMOVE",c="CELL_RESIZE",a="CELL_FOCUS",d="CELL_BLUR",f="CELL_BLUR_ALL",s=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e=null),{type:u,ts:new Date,id:n,isDraft:t,lang:e}},v=function(n){return function(t,e){return i({type:o,ts:new Date,id:n,data:t},e)}},p=function(n,t){return void 0===t&&(t=null),{type:l,ts:new Date,id:n,ids:t||Object(r.a)()}},b=function(n){return function(t){return void 0===t&&(t=1),{type:c,ts:new Date,id:n,size:t}}},g=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e=void 0),{type:a,ts:new Date,id:n,scrollToCell:t,source:e}},m=function(n){return{type:d,ts:new Date,id:n}},E=function(){return{type:f,ts:new Date}}},MMOE:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("NMHk"),i=e("Qi3f"),u=e("fCHa"),o=function(n,t){var e,o;return{id:n.id||Object(u.a)(),rows:null!==(o=null===(e=n.rows)||void 0===e?void 0:e.map((function(n){return Object(r.i)(n,t)})))&&void 0!==o?o:[],version:i.a}}},NMHk:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"d",(function(){return v})),e.d(t,"g",(function(){return p})),e.d(t,"h",(function(){return b})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return m})),e.d(t,"c",(function(){return E})),e.d(t,"b",(function(){return O})),e.d(t,"i",(function(){return _})),e.d(t,"m",(function(){return I})),e.d(t,"k",(function(){return h})),e.d(t,"r",(function(){return w})),e.d(t,"o",(function(){return N})),e.d(t,"n",(function(){return j})),e.d(t,"q",(function(){return C})),e.d(t,"l",(function(){return D})),e.d(t,"p",(function(){return S})),e.d(t,"j",(function(){return R}));var r=e("fCHa"),i=e("oSnv"),u=e("5W9F"),o=e("UyZT"),l=e("PNiC"),c=e("zfhL"),a=e("GcRk"),d=function(){return(d=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},f=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e},s="CELL_INSERT_ABOVE",v="CELL_INSERT_BELOW",p="CELL_INSERT_LEFT_OF",b="CELL_INSERT_RIGHT_OF",g="CELL_INSERT_INLINE_LEFT",m="CELL_INSERT_INLINE_RIGHT",E="CELL_INSERT_AT_END",O="CELL_INSERT_AS_NEW_ROW",_=function(n,t){var e;return Array.isArray(n)?{id:Object(r.a)(),cells:n.map((function(n){return y(n,t)}))}:Object(o.a)(d(d({id:Object(r.a)()},n),{cells:null===(e=n.cells)||void 0===e?void 0:e.map((function(n){return y(n,t)}))}))},y=function(n,t){var e,l,c,a,f,s,v,p,b,g,m,E=t.cellPlugins,O=t.lang,y=n.plugin&&("string"==typeof n.plugin?n.plugin:n.plugin.id),L=y&&E.find((function(n){return n.id===y})),I=(null===(l=n.rows)||void 0===l?void 0:l.length)>0?n.rows:null!==(a=null===(c=null===L||void 0===L?void 0:L.createInitialChildren)||void 0===c?void 0:c.call(L))&&void 0!==a?a:[],h=d(((e={})[O]=null!==(b=null!==(v=null!==(f=null===n||void 0===n?void 0:n.data)&&void 0!==f?f:null===(s=null===L||void 0===L?void 0:L.createInitialData)||void 0===s?void 0:s.call(L,n))&&void 0!==v?v:null===(p=null===L||void 0===L?void 0:L.createInitialState)||void 0===p?void 0:p.call(L,n))&&void 0!==b?b:null,e),null!==(g=n.dataI18n)&&void 0!==g?g:{});return Object(o.a)({id:null!==(m=n.id)&&void 0!==m?m:Object(r.a)(),isDraft:n.isDraft,isDraftI18n:n.isDraftI18n,inline:n.inline,size:n.size||12,hasInlineNeighbour:n.hasInlineNeighbour,plugin:L?{id:L.id,version:L.version}:void 0,rows:null===I||void 0===I?void 0:I.map((function(n){return _(n,{lang:O,cellPlugins:Object(i.b)(E,{pluginId:y,data:Object(u.a)({dataI18n:h},O)})})})),dataI18n:h})},L=function(n){return function(t){return function(e,r,i,u){var o,d,f=r.id,g=r.inline,m=r.hasInlineNeighbour,E=r.ancestorIds;void 0===u&&(u=null);var O=null!==(o=null===i||void 0===i?void 0:i.level)&&void 0!==o?o:0,_=O,L=y(e,t);switch(n){case s:case v:(g||m)&&O<1&&(_=1);break;case p:case b:(g||m)&&O<1&&(_=1)}var I={type:n,ts:new Date,item:L,hoverId:0===O?f:null!==(d=E[Math.max(O-1)])&&void 0!==d?d:f,level:_,ids:u||Object(c.a)()};return function(n){n(I),(!e.id||(null===i||void 0===i?void 0:i.focusAfter))&&(n(Object(l.j)()),setTimeout((function(){n(Object(a.j)(I.ids.item,!0))}),0))}}}},I=L(v),h=L(s),w=L(b),N=L(p),j=L(g),C=L(m),D=L(E),S=L(O),T=function(n){n.id;var t=f(n,["id"]);return d(d({},t),{dataI18n:t.dataI18n?JSON.parse(JSON.stringify(t.dataI18n)):{},id:Object(r.a)(),rows:t.rows?t.rows.map((function(n){return d(d({},n),{id:Object(r.a)(),cells:n.cells?n.cells.map(T):void 0})})):void 0})},R=function(n){return function(t){var e;return I(n)(T(t),{ancestorIds:[],id:t.id,hasInlineNeighbour:t.hasInlineNeighbour,inline:t.inline,levels:null,pluginId:null===(e=t.plugin)||void 0===e?void 0:e.id},{level:0,focusAfter:!0})}}},PNiC:function(n,t,e){"use strict";e.d(t,"i",(function(){return r})),e.d(t,"h",(function(){return i})),e.d(t,"e",(function(){return u})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return c})),e.d(t,"f",(function(){return a})),e.d(t,"g",(function(){return d})),e.d(t,"a",(function(){return f})),e.d(t,"k",(function(){return v})),e.d(t,"l",(function(){return p})),e.d(t,"j",(function(){return b})),e.d(t,"m",(function(){return g}));var r="SET_DISPLAY_REFERENCE_NODE_ID",i="SET_DISPLAY_MODE",u="preview",o="layout",l="edit",c="insert",a="resizing",d="DISPLAY_SET_ZOOM",f=l,s=function(n,t){return function(){return{type:i,ts:new Date,mode:n,referenceNodeId:t}}},v=function(n){return{type:r,ts:new Date,referenceNodeId:n}},p=function(n,t){return{type:i,ts:new Date,mode:n,referenceNodeId:t}},b=(s(c),s(l)),g=(s(u),s(o),s(a),function(n){return{type:d,zoom:n}})},"XQ+0":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return v}));var r=e("mXGw"),i=e.n(r),u=e("MMOE"),o=e("LSll"),l=e("33kk"),c=e("atfL"),a=e("iQEo"),d=i.a.createElement,f=[Object(l.b)(),a.a],s=Object(u.a)({rows:[[{plugin:a.a}]]},{cellPlugins:f,lang:"default"});function v(){var n=Object(r.useState)(s),t=n[0],e=n[1];return d(c.a,null,d(o.b,{cellPlugins:f,value:t,onChange:e}))}},YHaA:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/multicontrols",function(){return e("XQ+0")}])},iQEo:function(n,t,e){"use strict";var r=e("56Rm"),i=e("mXGw"),u=e.n(i).a.createElement,o={Renderer:function(n){var t,e,r,i=n.data;return u("div",{style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.backgroundColor,color:null===i||void 0===i||null===(e=i.style)||void 0===e?void 0:e.textColor,padding:null===i||void 0===i||null===(r=i.style)||void 0===r?void 0:r.padding}},u("h3",null,i.title),u("p",null,"Firstname: ",i.firstName),u("p",null,"Lastname: ",i.lastName),u("p",null,"Age: ",i.age))},id:"custom-content-plugin",title:"Custom content plugin",description:"Some custom content plugin with multiple controls",version:1,controls:[{title:"Default config",controls:{type:"autoform",schema:{properties:{title:{type:"string",default:"I am a custom plugin with multiple controls, this is my configuration"},firstName:{type:"string"},lastName:{type:"string"},age:{title:"Age in years",type:"integer",minimum:0}},required:["firstName","lastName"]}}},{title:"Styling",controls:{type:"autoform",schema:{type:"object",required:[],properties:{style:{type:"object",required:[],properties:{backgroundColor:{type:"string",default:"white",uniforms:{component:r.b}},textColor:{type:"string",default:"black",uniforms:{component:r.b}},padding:{type:"number",default:10}}}}}}}]};t.a=o},zfhL:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("fCHa"),i=function(){return{cell:Object(r.a)(),item:Object(r.a)(),others:[Object(r.a)(),Object(r.a)(),Object(r.a)()]}}}},[["YHaA",2,1,0,3,4,5,6,7,8,9]]]);