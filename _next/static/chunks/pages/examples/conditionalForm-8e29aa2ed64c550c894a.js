_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"2g8O":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var i=e("mXGw"),o=e.n(i),u=e("LSll"),r=e("atfL"),a=o.a.createElement,l=[{id:"mycustomplugin",title:"my custom plugin with conditional form",Renderer:function(n){var t=n.data;return a("div",null,t.withImage?a("p",null,"with image: ",a("img",{src:t.imageUrl})):a("p",null,"without image"))},version:1,controls:{type:"autoform",schema:{properties:{withImage:{type:"boolean"},imageUrl:{type:"string",uniforms:{showIf:function(n){return n.withImage}}}}}}}];function c(){var n=Object(i.useState)(null),t=n[0],e=n[1];return a(r.a,null,a(u.b,{cellPlugins:l,value:t,onChange:e}))}},kToi:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/conditionalForm",function(){return e("2g8O")}])}},[["kToi",2,1,0,5,4,6,8,9,10,11]]]);