"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[160],{9019:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(7294));t.default=function(e){var t=u.useState(0),n=t[0],r=t[1],a=e.transitionDuration||400,i=e.delay||50,l=e.wrapperTag||"div",o=e.childTag||"div",c=void 0===e.visible||e.visible;return u.useEffect((function(){var t=u.default.Children.count(e.children);if(c||(t=0),t==n){var l=setTimeout((function(){e.onComplete&&e.onComplete()}),a);return function(){return clearTimeout(l)}}var o=t>n?1:-1,f=setTimeout((function(){r(n+o)}),i);return function(){return clearTimeout(f)}}),[u.default.Children.count(e.children),i,n,c,a]),u.default.createElement(l,{className:e.className},u.default.Children.map(e.children,(function(t,r){return u.default.createElement(o,{className:e.childClassName,style:{transition:"opacity "+a+"ms, transform "+a+"ms",transform:n>r?"none":"translateY(20px)",opacity:n>r?1:0}},t)})))}},160:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(9019);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})}}]);
//# sourceMappingURL=160-4ac201853e40faed223e.js.map