"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5557],{344:function(e,n,r){r.d(n,{U:function(){return t}});var t=(0,r(7256).Z)(function(){return Promise.all([r.e(5240),r.e(4512),r.e(6561),r.e(8854),r.e(4079)]).then(r.bind(r,44497))})},5557:function(e,n,r){r.r(n),r.d(n,{default:function(){return R}});var t,o,a,i,l,d=r(27378),p=r(9741),s=r(58438),c=r(2867),h=r(31187),u=r(9068),g=r(29277),v=r(36644),C=r(97011),f=r(23904),m=r(217),y=r(12742),P=(t=function(e,n){return(t=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),w=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleChangePickerBackgroundColor=function(e){return n.props.onChangeBackgroundColorPreview&&n.props.onChangeBackgroundColorPreview(e)},n.handleChangePickerBackgroundColorComplete=function(e){n.props.onChangeBackgroundColorPreview&&n.props.onChangeBackgroundColorPreview(void 0),n.props.onChange({backgroundColor:e})},n}return P(n,e),n.prototype.render=function(){var e=this.props,n=e.backgroundColorPreview,r=e.data.backgroundColor,t=void 0===r?this.props.defaultBackgroundColor:r;return d.createElement("div",{style:{display:"flex"}},d.createElement(y.zH,{color:n||t,onChange:this.handleChangePickerBackgroundColor,onDialogOpen:this.props.ensureModeOn,onChangeComplete:this.handleChangePickerBackgroundColorComplete,style:{margin:"auto"}}))},n}(d.Component),O=r(59816),E=r(344),_=(o=function(e,n){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),b=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleChangeBackground=function(e){n.props.ensureModeOn(),n.props.onChange({background:e.target.value})},n.handleChangeIsParallax=function(e){n.props.ensureModeOn(),n.props.onChange({isParallax:void 0!==n.props.data.isParallax&&!n.props.data.isParallax})},n.handleImageLoaded=function(e){n.props.ensureModeOn(),n.props.onImageLoaded(e)},n.handleImageUploaded=function(e){n.props.onImageUploaded(),n.props.onChange({background:e.url})},n}return _(n,e),n.prototype.render=function(){var e,n,r,t,o,a=this.props.data,i=a.isParallax,l=a.background;return d.createElement("div",null,d.createElement("div",{style:{display:"flex"}},this.props.imageUpload&&d.createElement(d.Fragment,null,d.createElement(E.U,{translations:this.props.translations,imageUpload:this.props.imageUpload,imageLoaded:this.handleImageLoaded,imageUploaded:this.handleImageUploaded}),d.createElement(g.Z,{variant:"body1",style:{margin:"20px 16px 0 16px"}},null===(e=this.props.translations)||void 0===e?void 0:e.or)),d.createElement(O.Z,{placeholder:null===(n=this.props.translations)||void 0===n?void 0:n.srcPlaceholder,label:this.props.imageUpload?null===(r=this.props.translations)||void 0===r?void 0:r.haveUrl:null===(t=this.props.translations)||void 0===t?void 0:t.imageUrl,style:{width:"256px"},value:void 0===l?"":l,onChange:this.handleChangeBackground}),d.createElement(p.Z,{control:d.createElement(c.Z,{onChange:this.handleChangeIsParallax,checked:void 0===i||i}),label:null===(o=this.props.translations)||void 0===o?void 0:o.isParallax})))},n}(d.Component),G=r(3833),k=r(25833),M=r(16655),D=(a=function(e,n){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),x=function(){return(x=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},I=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,a=r.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=a.next()).done;)i.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},L=function(e,n,r){if(r||2==arguments.length)for(var t,o=0,a=n.length;o<a;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))},A=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.addGradient=function(){n.props.ensureModeOn(),n.props.onChange({gradients:(n.props.data.gradients?n.props.data.gradients:[]).concat({deg:45,opacity:1})})},n.handleChangeDeg=function(e,r){return function(){n.props.onChangeGradientDegPreview&&n.props.onChangeGradientDegPreview(void 0,void 0),n.props.onChange({gradients:(n.props.data.gradients?n.props.data.gradients:[]).map(function(n,t){return t===e?x(x({},n),{deg:r}):n})})}},n.handleChangeDegPreview=function(e){return function(r,t){n.props.onChangeGradientDegPreview&&n.props.onChangeGradientDegPreview(t,e)}},n.handleChangeOpacity=function(e,r){return function(){n.props.onChangeGradientOpacityPreview&&n.props.onChangeGradientOpacityPreview(void 0,void 0),n.props.onChange({gradients:(n.props.data.gradients?n.props.data.gradients:[]).map(function(n,t){return t===e?x(x({},n),{opacity:r}):n})})}},n.handleChangeOpacityPreview=function(e){return function(r,t){n.props.onChangeGradientOpacityPreview&&n.props.onChangeGradientOpacityPreview(t,e)}},n.handleChangeGradientColor=function(e,r){return function(t){var o;n.props.onChangeGradientColorPreview&&n.props.onChangeGradientColorPreview(void 0,void 0,void 0),n.props.onChange({gradients:(null!==(o=n.props.data.gradients)&&void 0!==o?o:[]).map(function(n,o){return o===e?x(x({},n),{colors:(n.colors?n.colors:[]).map(function(e,n){return n===r?x(x({},e),{color:t}):e})}):n})})}},n.handleChangeGradientColorPreview=function(e,r){return function(t){n.props.onChangeGradientColorPreview&&n.props.onChangeGradientColorPreview(t,e,r)}},n.addColor=function(e){return function(){var r;n.props.ensureModeOn(),n.props.onChange({gradients:null===(r=n.props.data.gradients)||void 0===r?void 0:r.map(function(r,t){return t===e?x(x({},r),{colors:L(L([],I(r.colors?r.colors:[]),!1),[{color:(r.colors?r.colors:[]).length%2==e%2?n.props.defaultGradientColor:n.props.defaultGradientSecondaryColor}],!1)}):r})})}},n.removeColor=function(e,r){return function(){var t;n.props.onChange({gradients:null===(t=n.props.data.gradients)||void 0===t?void 0:t.map(function(n,t){return t===e?x(x({},n),{colors:(n.colors?n.colors:[]).filter(function(e,n){return n!==r})}):n})})}},n.removeGradient=function(e){return function(){var r;n.props.onChange({gradients:null===(r=n.props.data.gradients)||void 0===r?void 0:r.filter(function(n,r){return r!==e})})}},n}return D(n,e),n.prototype.render=function(){var e,n=this,r=this.props,t=r.gradientDegPreview,o=r.gradientDegPreviewIndex,a=r.gradientOpacityPreview,i=r.gradientOpacityPreviewIndex,l=r.gradientColorPreview,p=r.gradientColorPreviewIndex,c=r.gradientColorPreviewColorIndex,h=r.data.gradients,u=void 0===h?[]:h;return d.createElement("div",null,u.map(function(e,r){var h,u,v,C,f=e.colors?e.colors:[],m=r===o&&void 0!==t?t:e.deg,P=r===i&&void 0!==a?a:e.opacity;return d.createElement("div",{key:r},d.createElement("div",{style:{display:"flex",maxWidth:"96%"}},d.createElement("div",{style:{flex:1}},d.createElement(g.Z,{variant:"body1",id:"linear-gradient-degree-label"},null===(h=n.props.translations)||void 0===h?void 0:h.gradientRotation," (",m,null===(u=n.props.translations)||void 0===u?void 0:u.degrees,")"),d.createElement(s.ZP,{"aria-labelledby":"linear-gradient-degree-label",value:m,onChange:n.handleChangeDegPreview(r),onChangeCommitted:n.handleChangeDeg(r,m),step:5,min:0,max:360})),d.createElement("div",{style:{flex:1,marginLeft:16}},d.createElement(g.Z,{variant:"body1",id:"linear-gradient-opacity-label"},null===(v=n.props.translations)||void 0===v?void 0:v.gradientOpacity," (",(100*P).toFixed(0),"%)"),d.createElement(s.ZP,{"aria-labelledby":"linear-gradient-opacity-label",value:P,onChange:n.handleChangeOpacityPreview(r),onChangeCommitted:n.handleChangeOpacity(r,P),step:.01,min:0,max:1}))),d.createElement("div",{style:{marginBottom:32}},f.map(function(e,t){var o=r===p&&t===c&&void 0!==l?l:e.color;return d.createElement(d.Fragment,{key:t},d.createElement(y.zH,{buttonContent:"Select color "+t,style:{marginLeft:"8px"},color:o,onChange:n.handleChangeGradientColorPreview(r,t),onChangeComplete:n.handleChangeGradientColor(r,t)}),d.createElement(k.Z,{"aria-label":"Delete",onClick:n.removeColor(r,t)},d.createElement(M.Z,null)))}),d.createElement(G.Z,{variant:"contained",onClick:n.addColor(r),style:{marginLeft:"8px"}},null===(C=n.props.translations)||void 0===C?void 0:C.addColor),d.createElement(k.Z,{"aria-label":"Delete",onClick:n.removeGradient(r)},d.createElement(M.Z,null))))}),d.createElement(G.Z,{style:{margin:"auto"},variant:"outlined",onClick:this.addGradient,disabled:u.length>5},null===(e=this.props.translations)||void 0===e?void 0:e.addGradient))},n}(d.Component),F=(i=function(e,n){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),S=function(){return(S=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},Z=function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,a=r.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=a.next()).done;)i.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},H=function(e,n,r){if(r||2==arguments.length)for(var t,o=0,a=n.length;o<a;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))},j=function(e){function n(n){var r=e.call(this,n)||this;return r.renderModeSwitch=function(){var e,n=r.props.data.modeFlag,t=void 0===n?r.props.defaultModeFlag:n;return d.createElement(p.Z,{style:{marginBottom:16},control:d.createElement(c.Z,{onChange:r.props.handleChangeModeSwitch(r.state.mode,t),checked:Boolean(t&&r.state.mode&&t&r.state.mode)}),label:null===(e=r.props.translations)||void 0===e?void 0:e.onOff})},r.renderUI=function(){switch(r.state.mode){case m.H.COLOR_MODE_FLAG:return d.createElement(d.Fragment,null,r.renderModeSwitch(),d.createElement(w,S({},r.props,{ensureModeOn:r.ensureModeOn(m.H.COLOR_MODE_FLAG),onChangeBackgroundColorPreview:r.props.handleChangeBackgroundColorPreview,backgroundColorPreview:r.props.backgroundColorPreview})));case m.H.GRADIENT_MODE_FLAG:return d.createElement(d.Fragment,null,r.renderModeSwitch(),d.createElement(A,S({},r.props,{ensureModeOn:r.ensureModeOn(m.H.GRADIENT_MODE_FLAG),gradientDegPreview:r.props.gradientDegPreview,gradientDegPreviewIndex:r.props.gradientDegPreviewIndex,gradientOpacityPreview:r.props.gradientOpacityPreview,gradientOpacityPreviewIndex:r.props.gradientOpacityPreviewIndex,gradientColorPreview:r.props.gradientColorPreview,gradientColorPreviewIndex:r.props.gradientColorPreviewIndex,gradientColorPreviewColorIndex:r.props.gradientColorPreviewColorIndex,onChangeGradientDegPreview:r.props.handleChangeGradientDegPreview,onChangeGradientOpacityPreview:r.props.handleChangeGradientOpacityPreview,onChangeGradientColorPreview:r.props.handleChangeGradientColorPreview})));case m.H.IMAGE_MODE_FLAG:default:return d.createElement(d.Fragment,null,r.renderModeSwitch(),d.createElement(b,S({},r.props,{onImageLoaded:r.props.handleImageLoaded,onImageUploaded:r.props.handleImageUploaded,ensureModeOn:r.ensureModeOn(m.H.IMAGE_MODE_FLAG)})))}},r.ensureModeOn=function(e){return function(){var n=r.props.data.modeFlag,t=void 0===n?r.props.defaultModeFlag:n;t&&(t&e)==0&&r.props.handleChangeModeSwitch(e,t)()}},r.handleChangeMode=function(e,n){r.setState({mode:n})},r.state={mode:n.defaultMode},r}return F(n,e),n.prototype.render=function(){var e,n,r,t,o,a,i=this,l=this.props.data,y=l.hasPadding,P=void 0===y?this.props.defaultHasPadding:y,w=l.modeFlag,O=void 0===w?this.props.defaultModeFlag:w,E=l.darken,_=void 0===E?this.props.defaultDarken:E,b=l.lighten,G=void 0===b?this.props.defaultLighten:b,k=void 0!==this.props.darkenPreview?this.props.darkenPreview:null!=_?_:0,M=void 0!==this.props.lightenPreview?this.props.lightenPreview:null!=G?G:0,D=this.props.enabledModes?H(H(H([],Z((this.props.enabledModes&m.H.IMAGE_MODE_FLAG)>0?[d.createElement(h.Z,{icon:d.createElement(f.default,{color:O&&(O&m.H.IMAGE_MODE_FLAG)>0?"secondary":void 0}),label:null===(e=this.props.translations)||void 0===e?void 0:e.imageMode,value:m.H.IMAGE_MODE_FLAG,key:m.H.IMAGE_MODE_FLAG})]:[]),!1),Z((this.props.enabledModes&m.H.COLOR_MODE_FLAG)>0?[d.createElement(h.Z,{icon:d.createElement(v.Z,{color:O&&(O&m.H.COLOR_MODE_FLAG)>0?"secondary":void 0}),label:null===(n=this.props.translations)||void 0===n?void 0:n.colorMode,value:m.H.COLOR_MODE_FLAG,key:m.H.COLOR_MODE_FLAG})]:[]),!1),[(this.props.enabledModes&m.H.GRADIENT_MODE_FLAG)>0?[d.createElement(h.Z,{icon:d.createElement(C.Z,{color:O&&(O&m.H.GRADIENT_MODE_FLAG)>0?"secondary":void 0}),label:null===(r=this.props.translations)||void 0===r?void 0:r.gradientMode,value:m.H.GRADIENT_MODE_FLAG,key:m.H.GRADIENT_MODE_FLAG})]:[]],!1):[];return d.createElement("div",null,this.props.enabledModes?d.createElement(u.Z,{style:{marginBottom:16},value:this.state.mode,onChange:this.handleChangeMode,centered:!0},D):null,this.renderUI(),d.createElement("br",null),d.createElement("div",{style:{display:"flex"}},d.createElement("div",{style:{flex:1}},d.createElement(g.Z,{variant:"body1",id:"linear-gradient-darken-label"},null===(t=this.props.translations)||void 0===t?void 0:t.darken," (",(100*k).toFixed(0),"%)"),d.createElement(s.ZP,{"aria-labelledby":"linear-gradient-darken-label",value:k,onChange:function(e,n){return i.props.handleChangeDarkenPreview(n instanceof Array?n[0]:n)},onChangeCommitted:this.props.handleChangeDarken,step:.01,min:0,max:1})),d.createElement("div",{style:{flex:1,marginLeft:16}},d.createElement(g.Z,{variant:"body1",id:"linear-gradient-lighten-label"},null===(o=this.props.translations)||void 0===o?void 0:o.lighten," (",(100*M).toFixed(0),"%)"),d.createElement(s.ZP,{"aria-labelledby":"linear-gradient-lighten-label",value:M,onChange:function(e,n){return i.props.handleChangeLightenPreview(n instanceof Array?n[0]:n)},onChangeCommitted:this.props.handleChangeLighten,step:.01,min:0,max:1})),d.createElement("div",{style:{flex:1,marginLeft:16}},d.createElement(p.Z,{control:d.createElement(c.Z,{onChange:this.props.handleChangeHasPadding,checked:P}),label:null===(a=this.props.translations)||void 0===a?void 0:a.usePadding}))))},n}(d.Component),B=(l=function(e,n){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}l(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),U=function(){return(U=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},R=function(e){function n(n){var r=e.call(this,n)||this;return r.handleChangeDarken=function(){r.props.onChange({darken:r.state.darkenPreview}),r.setState({darkenPreview:void 0})},r.handleChangeDarkenPreview=function(e){r.setState({darkenPreview:e})},r.handleChangeLighten=function(){r.props.onChange({lighten:r.state.lightenPreview}),r.setState({lightenPreview:void 0})},r.handleChangeLightenPreview=function(e){r.setState({lightenPreview:e})},r.handleChangeHasPadding=function(){r.props.onChange({hasPadding:void 0===r.props.data.hasPadding?!r.props.defaultHasPadding:!r.props.data.hasPadding})},r.handleChangeBackgroundColorPreview=function(e){return r.setState({backgroundColorPreview:e})},r.handleChangeGradientDegPreview=function(e,n){return r.setState({gradientDegPreview:e,gradientDegPreviewIndex:n})},r.handleChangeGradientOpacityPreview=function(e,n){return r.setState({gradientOpacityPreview:e,gradientOpacityPreviewIndex:n})},r.handleChangeGradientColorPreview=function(e,n,t){return r.setState({gradientColorPreview:e,gradientColorPreviewIndex:n,gradientColorPreviewColorIndex:t})},r.handleImageLoaded=function(e){return r.setState({imagePreview:e})},r.handleImageUploaded=function(){return r.setState({imagePreview:void 0})},r.handleChangeModeSwitch=function(e,n){return function(){e&&n&&(n^=e),r.props.onChange({modeFlag:n})}},r.state={},r}return B(n,e),n.prototype.render=function(){return d.createElement(j,U({},this.props,{handleChangeDarken:this.handleChangeDarken,handleChangeDarkenPreview:this.handleChangeDarkenPreview,handleChangeLighten:this.handleChangeLighten,handleChangeLightenPreview:this.handleChangeLightenPreview,handleChangeHasPadding:this.handleChangeHasPadding,handleChangeModeSwitch:this.handleChangeModeSwitch,handleChangeBackgroundColorPreview:this.handleChangeBackgroundColorPreview,handleChangeGradientDegPreview:this.handleChangeGradientDegPreview,handleChangeGradientOpacityPreview:this.handleChangeGradientOpacityPreview,handleChangeGradientColorPreview:this.handleChangeGradientColorPreview,handleImageLoaded:this.handleImageLoaded,handleImageUploaded:this.handleImageUploaded},this.state))},n}(d.Component)}}]);
//# sourceMappingURL=5557.07aab705c4fbb29e.js.map