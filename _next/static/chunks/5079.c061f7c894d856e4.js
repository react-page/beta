"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5079],{75079:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(43800),i=n.n(r),o=n(59746),l=n(23337),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},u=function(e){var t=e.plugins,r=function(e){var l,u,d,v,s,f,p=e.nodeName.toUpperCase();if(3===e.nodeType)return e.textContent;if(1!==e.nodeType)return null;if("BR"===p)return"\n";var c=e.nodeName,y=e,m=i()(Array.from(y.childNodes).map(r));if("BODY"===p)return(0,o.tZ)("fragment",{},m);var g=t.find((function(e){var t;return"component"===e.pluginType&&(null===(t=e.deserialize)||void 0===t?void 0:t.tagName)===c.toLowerCase()}));if(g&&"component"===g.pluginType){var b=e;if(b.style||(b.style=new(n(50883).s),b.style.cssText=b.getAttribute("style")),"mark"===g.object){var h=((l={})[g.type]=null===(v=null===(d=null===(u=null===g||void 0===g?void 0:g.deserialize)||void 0===u?void 0:u.getData)||void 0===d?void 0:d.call(u,b))||void 0===v||v,l);return m.map((function(e){return(0,o.tZ)("text",h,e)}))}var w=null===(f=null===(s=null===g||void 0===g?void 0:g.deserialize)||void 0===s?void 0:s.getData)||void 0===f?void 0:f.call(s,b),N=a({type:g.type},w?{data:w}:{});return(0,o.tZ)("element",N,m)}return m};return function(e){var t,n=(t="<body>"+e+"</body>",(new l.DOMParser).parseFromString(t,"text/html")),i=r(n.documentElement);return{slate:(Array.isArray(i)?i:[i]).filter((function(e){var t,n;return null===(n=""!==(null===(t=e.text)||void 0===t?void 0:t.trim()))||void 0===n||n}))}}}}}]);