_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"8rvR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/stretchCells",function(){return e("Zkiy")}])},GcRk:function(n,t,e){"use strict";e.d(t,"g",(function(){return u})),e.d(t,"f",(function(){return o})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return a})),e.d(t,"c",(function(){return l})),e.d(t,"a",(function(){return d})),e.d(t,"b",(function(){return f})),e.d(t,"n",(function(){return s})),e.d(t,"m",(function(){return v})),e.d(t,"k",(function(){return p})),e.d(t,"l",(function(){return h})),e.d(t,"j",(function(){return g})),e.d(t,"i",(function(){return E})),e.d(t,"h",(function(){return _}));var r=e("zfhL"),i=function(){return(i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},u="CELL_UPDATE_IS_DRAFT",o="CELL_UPDATE_DATA",c="CELL_REMOVE",a="CELL_RESIZE",l="CELL_FOCUS",d="CELL_BLUR",f="CELL_BLUR_ALL",s=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e=null),{type:u,ts:new Date,id:n,isDraft:t,lang:e}},v=function(n){return function(t,e){return i({type:o,ts:new Date,id:n,data:t},e)}},p=function(n,t){return void 0===t&&(t=null),{type:c,ts:new Date,id:n,ids:t||Object(r.a)()}},h=function(n){return function(t){return void 0===t&&(t=1),{type:a,ts:new Date,id:n,size:t}}},g=function(n,t,e){return void 0===t&&(t=!1),void 0===e&&(e=void 0),{type:l,ts:new Date,id:n,scrollToCell:t,source:e}},E=function(n){return{type:d,ts:new Date,id:n}},_=function(){return{type:f,ts:new Date}}},MMOE:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("NMHk"),i=e("Qi3f"),u=e("fCHa"),o=function(n,t){var e,o;return{id:n.id||Object(u.a)(),rows:null!==(o=null===(e=n.rows)||void 0===e?void 0:e.map((function(n){return Object(r.i)(n,t)})))&&void 0!==o?o:[],version:i.a}}},NMHk:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"d",(function(){return v})),e.d(t,"g",(function(){return p})),e.d(t,"h",(function(){return h})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return E})),e.d(t,"c",(function(){return _})),e.d(t,"b",(function(){return O})),e.d(t,"i",(function(){return b})),e.d(t,"m",(function(){return w})),e.d(t,"k",(function(){return y})),e.d(t,"r",(function(){return j})),e.d(t,"o",(function(){return N})),e.d(t,"n",(function(){return D})),e.d(t,"q",(function(){return C})),e.d(t,"l",(function(){return T})),e.d(t,"p",(function(){return S})),e.d(t,"j",(function(){return R}));var r=e("fCHa"),i=e("oSnv"),u=e("5W9F"),o=e("UyZT"),c=e("PNiC"),a=e("zfhL"),l=e("GcRk"),d=function(){return(d=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},f=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e},s="CELL_INSERT_ABOVE",v="CELL_INSERT_BELOW",p="CELL_INSERT_LEFT_OF",h="CELL_INSERT_RIGHT_OF",g="CELL_INSERT_INLINE_LEFT",E="CELL_INSERT_INLINE_RIGHT",_="CELL_INSERT_AT_END",O="CELL_INSERT_AS_NEW_ROW",b=function(n,t){var e;return Array.isArray(n)?{id:Object(r.a)(),cells:n.map((function(n){return L(n,t)}))}:Object(o.a)(d(d({id:Object(r.a)()},n),{cells:null===(e=n.cells)||void 0===e?void 0:e.map((function(n){return L(n,t)}))}))},L=function(n,t){var e,c,a,l,f,s,v,p,h,g,E,_=t.cellPlugins,O=t.lang,L=n.plugin&&("string"==typeof n.plugin?n.plugin:n.plugin.id),I=L&&_.find((function(n){return n.id===L})),w=(null===(c=n.rows)||void 0===c?void 0:c.length)>0?n.rows:null!==(l=null===(a=null===I||void 0===I?void 0:I.createInitialChildren)||void 0===a?void 0:a.call(I))&&void 0!==l?l:[],y=d(((e={})[O]=null!==(h=null!==(v=null!==(f=null===n||void 0===n?void 0:n.data)&&void 0!==f?f:null===(s=null===I||void 0===I?void 0:I.createInitialData)||void 0===s?void 0:s.call(I,n))&&void 0!==v?v:null===(p=null===I||void 0===I?void 0:I.createInitialState)||void 0===p?void 0:p.call(I,n))&&void 0!==h?h:null,e),null!==(g=n.dataI18n)&&void 0!==g?g:{});return Object(o.a)({id:null!==(E=n.id)&&void 0!==E?E:Object(r.a)(),isDraft:n.isDraft,isDraftI18n:n.isDraftI18n,inline:n.inline,size:n.size||12,hasInlineNeighbour:n.hasInlineNeighbour,plugin:I?{id:I.id,version:I.version}:void 0,rows:null===w||void 0===w?void 0:w.map((function(n){return b(n,{lang:O,cellPlugins:Object(i.b)(_,{pluginId:L,data:Object(u.a)({dataI18n:y},O)})})})),dataI18n:y})},I=function(n){return function(t){return function(e,r,i,u){var o,d=r.id,f=r.inline,g=r.hasInlineNeighbour,E=r.ancestorIds;void 0===i&&(i=0),void 0===u&&(u=null);var _=i,O=L(e,t);switch(n){case s:case v:(f||g)&&i<1&&(_=1);break;case p:case h:(f||g)&&i<1&&(_=1)}var b={type:n,ts:new Date,item:O,hoverId:0===i?d:null!==(o=E[Math.max(i-1)])&&void 0!==o?o:d,level:_,ids:u||Object(a.a)()};return function(n){n(b),(!e.id||t.focusAfter)&&(n(Object(c.i)()),setTimeout((function(){n(Object(l.j)(b.ids.item,!0))}),300))}}}},w=I(v),y=I(s),j=I(h),N=I(p),D=I(g),C=I(E),T=I(_),S=I(O),m=function(n){n.id;var t=f(n,["id"]);return d(d({},t),{dataI18n:t.dataI18n?JSON.parse(JSON.stringify(t.dataI18n)):{},id:Object(r.a)(),rows:t.rows?t.rows.map((function(n){return d(d({},n),{id:Object(r.a)(),cells:n.cells?n.cells.map(m):void 0})})):void 0})},R=function(n){return function(t){var e;return w(n)(m(t),{ancestorIds:[],id:t.id,hasInlineNeighbour:t.hasInlineNeighbour,inline:t.inline,levels:null,pluginId:null===(e=t.plugin)||void 0===e?void 0:e.id})}}},PNiC:function(n,t,e){"use strict";e.d(t,"h",(function(){return r})),e.d(t,"g",(function(){return i})),e.d(t,"e",(function(){return u})),e.d(t,"d",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"f",(function(){return l})),e.d(t,"a",(function(){return d})),e.d(t,"j",(function(){return s})),e.d(t,"k",(function(){return v})),e.d(t,"i",(function(){return p}));var r="SET_DISPLAY_REFERENCE_NODE_ID",i="SET_DISPLAY_MODE",u="preview",o="layout",c="edit",a="insert",l="resizing",d=c,f=function(n,t){return function(){return{type:i,ts:new Date,mode:n,referenceNodeId:t}}},s=function(n){return{type:r,ts:new Date,referenceNodeId:n}},v=function(n,t){return{type:i,ts:new Date,mode:n,referenceNodeId:t}},p=(f(a),f(c));f(u),f(o),f(l)},Zkiy:function(n,t,e){"use strict";e.r(t);var r=e("xvhg"),i=e("mXGw"),u=e.n(i),o=e("MMOE"),c=e("LSll"),a=e("33kk"),l=e("atfL"),d=u.a.createElement,f={id:"stretch",title:"stretching cell",version:1,controls:{type:"autoform",schema:{properties:{stretch:{type:"boolean",default:!0}}}},Renderer:function(n){return d("div",{style:{height:n.data.stretch?"100%":"auto",border:"2px solid red",padding:5}},n.data.stretch?"stretch":"no stretch")}},s=Object(a.b)(),v=[s,f],p=Object(o.a)({rows:[{cells:[{plugin:s.id,data:s.createData((function(n){return{children:[{plugin:n.plugins.headings.h1,children:["hello"]},{plugin:n.plugins.paragraphs.paragraph,children:["Cells can stretch using height: 100%"]},{plugin:n.plugins.paragraphs.paragraph,children:["They will even out the current row"]}]}}))},{plugin:f.id,data:{stretch:!0}},{plugin:f.id,data:{stretch:!0}},{plugin:f.id,data:{stretch:!1}}]}]},{cellPlugins:v,lang:"default"});t.default=function(){var n=u.a.useState(p),t=Object(r.a)(n,2),e=t[0],i=t[1];return d(l.a,null,d(c.b,{cellPlugins:v,value:e,onChange:i}))}},zfhL:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("fCHa"),i=function(){return{cell:Object(r.a)(),item:Object(r.a)(),others:[Object(r.a)(),Object(r.a)(),Object(r.a)()]}}}},[["8rvR",2,1,0,3,4,5,7,6,8,9]]]);