"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[714],{3714:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(7294),a=r(5749);var l=function(e){var t=(0,n.useState)(!1),r=t[0],a=t[1],l=(0,n.useState)(!1),o=l[0],c=l[1],i=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,s=e.title,m=e.poster||"hqdefault",p="&"+e.params||0,d=e.playlist?"https://i.ytimg.com/vi/"+u+"/"+m+".jpg":"https://i.ytimg.com/vi/"+i+"/"+m+".jpg",f=e.noCookie;f=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?f+"/embed/videoseries?autoplay=1&list="+i+p:f+"/embed/"+i+"?autoplay=1"+p,v=e.activatedClass||"lyt-activated",g=e.adNetwork||!1,w=e.iframeClass||"",E=e.playerClass||"lty-playbtn",h=e.wrapperClass||"yt-lite",k=e.onIframeAdded||function(){};return n.createElement(n.Fragment,null,n.createElement("link",{rel:"preload",href:d,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:f}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),g&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("div",{onPointerOver:function(){r||a(!0)},onClick:function(){o||(k(),c(!0))},className:h+" "+(o&&v),"data-title":s,style:{backgroundImage:"url("+d+")"}},n.createElement("div",{className:E}),o&&n.createElement("iframe",{className:w,title:s,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))},o=r(545),c=[10,25,50,75,90],i=function(e){var t=e.isOpen,r=e.onClose,i=(0,n.useRef)(),u=(0,n.useRef)(),s=(0,n.useCallback)((function(){var e,t="iframe-api",r={},n=function(t){if(t.data===window.YT.PlayerState.PLAYING){var n=e.getDuration();u.current=setInterval((function(){var t=e.getCurrentTime()/n*100;c.every((function(e){return!!r[e]||(t>=e&&((0,o.CQ)(e),r[e]=!0),!1)}))}),500)}else clearInterval(u.current)},a=function(){var t=i.current.querySelector(".yt-iframe");e=new window.YT.Player(t,{events:{onStateChange:n}})};if(document.getElementById(t))setTimeout(a);else{var l=document.createElement("script");l.id=t,l.src="https://www.youtube.com/iframe_api";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(l,s),window.onYouTubeIframeAPIReady=a}}),[]);return(0,n.useEffect)((function(){t?setTimeout((function(){var e,t;null===(e=i.current)||void 0===e||null===(t=e.querySelector(".lty-playbtn"))||void 0===t||t.click()})):u.current&&clearInterval(u.current)}),[t]),n.createElement(a.u_,{isCentered:!0,isOpen:t,onClose:r,size:"xl",autoFocus:!1},n.createElement(a.ZA,null),n.createElement(a.hz,null,n.createElement(a.ol,null),n.createElement(a.fe,{px:"3em",py:"2em",ref:i},n.createElement(l,{id:"CpM5f41Tbk4",iframeClass:"yt-iframe",params:"enablejsapi=1",title:"YouTube Embed",cookie:!0,onIframeAdded:s}))))}}}]);
//# sourceMappingURL=714-d0809ef8bc8a0679bc15.js.map