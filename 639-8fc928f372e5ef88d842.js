"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[639],{9820:function(t,e,r){r.r(e),r.d(e,{default:function(){return q}});var n=r(2738),i=r(5008);function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=r(5576);function a(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}var f="function"==typeof window.WeakMap&&"function"==typeof window.Map,d=function(){if(f)return window.WeakMap;function t(t,e){var r=-1;return t.some((function(t,n){var i=t[0]===e;return i&&(r=n),i})),r}return function(){function e(){(0,n.Z)(this,e),this.__entries__=[]}return(0,i.Z)(e,[{key:"get",value:function(e){var r=t(this.__entries__,e);return this.__entries__[r][1]}},{key:"set",value:function(e,r){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=r:this.__entries__.push([e,r])}},{key:"delete",value:function(e){var r=this.__entries__,n=t(r,e);~n&&r.splice(n,1)}},{key:"has",value:function(e){return!!~t(this.__entries__,e)}}]),e}()}(),v=f?window.Map:function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,t);var e=l(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,i.Z)(r,[{key:"size",get:function(){return this.__entries__.length}},{key:"clear",value:function(){this.__entries__.splice(0,this.__entries__.length)}},{key:"entries",value:function(){return this.__entries__.slice()}},{key:"keys",value:function(){return this.__entries__.map((function(t){return t[0]}))}},{key:"values",value:function(){return this.__entries__.map((function(t){return t[1]}))}},{key:"forEach",value:function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c(this.__entries__);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.call(r,i[1],i[0])}}catch(o){n.e(o)}finally{n.f()}}}]),r}(d),p=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()};function y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m="function"==typeof window.MutationObserver,b=window.requestAnimationFrame?window.requestAnimationFrame:function(t){return setTimeout((function(){return t(p())}),1e3/60)};function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=!1;return function(){for(var n=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];!1!==r&&clearTimeout(r),r=setTimeout((function(){r=!1,t.apply(n,o)}),e)}}var w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,n.Z)(this,t),this._idleTimeout=e,this._trackHovers=r,this._cycleStartTime=-1,this._isUpdateScheduled=!1,this._repeatCycle=!1,this._hoverInitiated=!1,this._mutationsObserver=null,this._isListening=!1,this._observers=[],this.startUpdateCycle=this.startUpdateCycle.bind(this),this.scheduleUpdate=this.scheduleUpdate.bind(this),this._onMutation=this._onMutation.bind(this),this._repeatHandler=g(this.scheduleUpdate,200),this._onMouseOver=g(this.startUpdateCycle,200)}return(0,i.Z)(t,[{key:"idleTimeout",get:function(){return this._idleTimeout},set:function(t){this._idleTimeout=t}},{key:"connect",value:function(t){this.isConnected(t)||this._observers.push(t),this._isListening||this._initListeners()}},{key:"disconnect",value:function(t){var e=this._observers,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this._isListening&&this._removeListeners()}},{key:"isConnected",value:function(t){return!!~this._observers.indexOf(t)}},{key:"_updateObservers",value:function(){var t,e=!1,r=y(this._observers);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.updateObservations()&&(e=!0),n.hasEntries()&&n.notifySubscriber()}}catch(i){r.e(i)}finally{r.f()}return e}},{key:"startUpdateCycle",value:function(){this._cycleStartTime=p(),this.scheduleUpdate()}},{key:"scheduleUpdate",value:function(t){if("number"==typeof t){var e=this._updateObservers();if(this._isUpdateScheduled=!1,!this._wasCycleStarted())return;e?this.startUpdateCycle():this._hasIdleTimeEnded()?this._onCycleEnded():this.scheduleUpdate()}else this._isUpdateScheduled||(b(this.scheduleUpdate),this._isUpdateScheduled=!0)}},{key:"_hasIdleTimeEnded",value:function(){return p()-this._cycleStartTime>this._idleTimeout}},{key:"_wasCycleStarted",value:function(){return-1!==this._cycleStartTime}},{key:"_onCycleEnded",value:function(){this._cycleStartTime=-1,this._repeatCycle&&(this._cycleStartTime=0,this._repeatHandler())}},{key:"_initListeners",value:function(){this._isListening||(this._isListening=!0,window.addEventListener("resize",this.startUpdateCycle,!0),window.addEventListener("scroll",this.scheduleUpdate,!0),this._trackHovers&&this._addHoverListener(),m?(this._mutationsObserver=new MutationObserver(this._onMutation),this._mutationsObserver.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(this._repeatCycle=!0,window.addEventListener("click",this.startUpdateCycle,!0),this.startUpdateCycle()))}},{key:"_removeListeners",value:function(){this._isListening&&(window.removeEventListener("resize",this.startUpdateCycle,!0),window.removeEventListener("scroll",this.scheduleUpdate,!0),this._removeHoverListener(),m?this._mutationsObserver&&(this._mutationsObserver.disconnect(),this._mutationsObserver=null):(this._repeatCycle=!1,window.removeEventListener("click",this.startUpdateCycle,!0)),this._isListening=!1)}},{key:"enableHover",value:function(){this._trackHovers=!0,this._isListening&&this._addHoverListener()}},{key:"disableHover",value:function(){this._trackHovers=!1,this._removeHoverListener()}},{key:"isHoverEnabled",value:function(){return this._trackHovers}},{key:"_addHoverListener",value:function(){this._hoverInitiated||(window.addEventListener("mouseover",this._onMouseOver,!0),this._hoverInitiated=!0)}},{key:"_removeHoverListener",value:function(){this._hoverInitiated&&(window.removeEventListener("mouseover",this._onMouseOver,!0),this._hoverInitiated=!1)}},{key:"_onMutation",value:function(t){t.every((function(t){return"attributes"!==t.type}))?this.scheduleUpdate():this.startUpdateCycle()}}]),t}(),k=r(5892);function E(t){for(var e={},r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];e[i]={value:t[i]}}return Object.defineProperties({},e)}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{left:t,top:e,width:r,height:n,bottom:e+n,right:t+r}}function O(t){return t===document.documentElement?T(0,0,t.clientWidth,t.clientHeight):t.getBoundingClientRect()}function C(t){return t.width*t.height}var U=function t(e,r,i,o,s,a){(0,n.Z)(this,t),Object.defineProperties(this,{boundingClientRect:{value:r},intersectionRatio:{value:o},intersectionRect:{value:E(i)},rootBounds:{value:E(s)},target:{value:e},time:{value:a}})},L=T();function M(t,e){var r=Math.max(e.left,t.left),n=Math.min(e.right,t.right),i=Math.max(e.top,t.top);return T(r,i,n-r,Math.min(e.bottom,t.bottom)-i)}var R=function(){function t(e,r){(0,n.Z)(this,t),this.target=e,this.observer=r,this.prevTargetRect=L,this.prevThreshold=0,this.prevRatio=0}return(0,i.Z)(t,[{key:"updateIntersection",value:function(t,e){var r,n,i,o,s=O(this.target),a=this.getIntersectionData(t,e,s),u=+a.exists,c=a.ratio!==this.prevRatio,h=(n=s,i=this.prevTargetRect,!(n.top===i.top&&n.left===i.left&&n.right===i.right&&n.bottom===i.bottom));if(a.exists&&(0!==(o=s).height||0!==o.width)&&(u=this.observer.getThresholdGreaterThan(a.ratio)),r=u!==this.prevThreshold,this.prevTargetRect=s,this.prevThreshold=u,this.prevRatio=a.ratio,a.exists||(a.ratio=0,a.rect=L),r){var l=new U(this.target,s,a.rect,a.ratio,e,p());this.observer.queueEntry(l)}return{ratioChanged:c,thresholdChanged:r,targetRectChanged:h}}},{key:"getIntersectionData",value:function(t,e,r){var n=this.target;r||(r=O(this.target)),e||(e=O(t));var i=function(t,e){var r=document.documentElement;return t!==r&&!r.contains(t)||!t.contains(e)}(t,n),o=i?L:function(t,e,r,n){for(var i=n,o=e.parentNode,s=!1;!s;){var a=null;o===t||1!==o.nodeType?(s=!0,a=r):"visible"!==window.getComputedStyle(o).overflow&&(a=O(o)),a&&(i=M(i,a)),o=o.parentNode}return i}(t,n,e,r),s=!i&&o.width>=0&&o.height>=0;return{rect:o,ratio:C(o)/C(r)||0,exists:s}}}]),t}();function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t;return Array.isArray(t)?t.length||(e=[0]):e=[t],e.map((function(t){if(t=Number(t),!window.isFinite(t))throw new TypeError("The provided double value is non-finite.");if(t<0||t>1)throw new RangeError("Threshold values must be between 0 and 1.");return t})).sort()}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0px";if((t=(t+"").split(/\s+/)).length>4)throw new Error("Extra text found at the end of rootMargin.");t[0]=t[0]||"0px",t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1];var e=t.join(" "),r=t.map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t)||[],r=(0,k.Z)(e,3),n=r[1],i="px"===r[2];if(n=parseFloat(n),!window.isFinite(n))throw new Error("rootMargin must be specified in pixels or percent.");return i||(n/=100),{value:n,pixels:i}}));return{rawData:e,parsedData:r}}var H=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;if((0,n.Z)(this,t),"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");if("object"!=typeof r)throw new TypeError("parameter 2 is not an object.");if("root"in r&&!(r.root instanceof Element))throw new TypeError("member root is not of type Element.");var s=S(r.threshold),a=x(r.rootMargin);this.root=r.root||null,this.rootMargin=a.rawData,this.thresholds=Object.freeze(s),this._root=r.root||document.documentElement,this._callback=e,this._rootMargin=a.parsedData,this._targets=new v,this._quedEntries=[],this._publicObserver=o||this,this.controller=i}return(0,i.Z)(t,[{key:"observe",value:function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this._targets;e.has(t)||(e.set(t,new R(t,this)),this.controller.isConnected(this)||this.controller.connect(this),this.controller.startUpdateCycle())}},{key:"unobserve",value:function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this._targets;e.has(t)&&e.delete(t),e.size||this.disconnect()}},{key:"disconnect",value:function(){this._targets.clear(),this.controller.disconnect(this)}},{key:"takeRecords",value:function(){return this._quedEntries.splice(0)}},{key:"notifySubscriber",value:function(){var t=this.takeRecords(),e=this._publicObserver;t.length&&this._callback.call(e,t,e)}},{key:"queueEntry",value:function(t){this._quedEntries.push(t)}},{key:"hasEntries",value:function(){return!!this._quedEntries.length}},{key:"updateObservations",value:function(){var t=this._root,e=this.getRootRect(),r=!1;return this._targets.forEach((function(n){var i=n.updateIntersection(t,e);(i.ratioChanged||i.targetRectChanged)&&(r=!0)})),r}},{key:"getThresholdGreaterThan",value:function(t){for(var e=this.thresholds,r=e.length,n=0;n<r&&e[n]<=t;)++n;return n}},{key:"getRootRect",value:function(){return function(t,e){e=e.map((function(e,r){var n=e.value;return e.pixels||(n*=r%2?t.width:t.height),n}));var r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r}(O(this._root),this._rootMargin)}}]),t}(),j=new w,I=new d,A=function(){function t(e,r){if((0,n.Z)(this,t),!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=new H(e,r,j,this);Object.defineProperties(this,{root:{value:i.root},thresholds:{value:i.thresholds},rootMargin:{value:i.rootMargin}}),I.set(this,i)}return(0,i.Z)(t,null,[{key:"idleTimeout",get:function(){return j.idleTimeout},set:function(t){if("number"!=typeof t)throw new TypeError('type of "idleTimeout" value must be a number.');if(typeof t<0)throw new TypeError('"idleTimeout" value must be greater than 0.');j.idleTimeout=t}},{key:"trackHovers",get:function(){return j.isHoverEnabled()},set:function(t){if("boolean"!=typeof t)throw new TypeError('type of "trackHovers" value must be a boolean.');t?j.enableHover():j.disableHover()}}]),t}();["observe","unobserve","disconnect","takeRecords"].forEach((function(t){A.prototype[t]=function(){var e;return(e=I.get(this))[t].apply(e,arguments)}}));var Z=A,q="function"==typeof window.IntersectionObserver?window.IntersectionObserver:Z}}]);
//# sourceMappingURL=639-8fc928f372e5ef88d842.js.map