"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[285],{7285:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(7294),i=n(1279),o=n(5892),a=n(9735),l=n(6299),s=n(2543),c=n(5587),u=n(4667),m=n(908),d=n(466),f=n(1783);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h={exit:{duration:.15,ease:f.YI.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},v={exit:function(e){var t,n=e.direction,r=e.transition,i=e.transitionEnd,o=e.delay;return p({},(0,f.HB)({direction:n}).exit,{transition:null!=(t=null==r?void 0:r.exit)?t:f.p$.exit(h.exit,o),transitionEnd:null==i?void 0:i.exit})},enter:function(e){var t,n=e.direction,r=e.transitionEnd,i=e.transition,o=e.delay;return p({},(0,f.HB)({direction:n}).enter,{transition:null!=(t=null==i?void 0:i.enter)?t:f.p$.enter(h.enter,o),transitionEnd:null==r?void 0:r.enter})}},g=r.forwardRef((function(e,t){var n=e.direction,i=void 0===n?"right":n,o=e.style,a=e.unmountOnExit,l=e.in,s=e.className,u=e.transition,h=e.transitionEnd,g=e.delay,E=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"]),b=(0,f.HB)({direction:i}),y=Object.assign({position:"fixed"},b.position,o),x=!a||l&&a,O=l||a?"enter":"exit",w={transitionEnd:h,transition:u,direction:i,delay:g};return r.createElement(m.M,{custom:w},x&&r.createElement(d.E.div,p({ref:t,initial:"exit",className:(0,c.cx)("chakra-slide",s),animate:O,exit:"exit",custom:w,variants:v,style:y},E)))}));u.Ts&&(g.displayName="Slide");var E=n(8308),b=n(4054);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var O=(0,E.k)(),w=(0,o.Z)(O,2),k=w[0],C=w[1];function Z(e){var t,n=e.isOpen,i=e.onClose,o=e.placement,l=void 0===o?"right":o,s=e.children,c=x(e,["isOpen","onClose","placement","children"]),u=null==(t=(0,a.Fg)().components)?void 0:t.Drawer;return r.createElement(k,{value:{placement:l}},r.createElement(b.u_,y({isOpen:n,onClose:i,styleConfig:u},c),s))}var _=(0,l.m$)(g),j=(0,s.G)((function(e,t){var n=e.className,i=e.children,o=x(e,["className","children"]),s=(0,b.vR)(),u=s.getDialogProps,m=s.getDialogContainerProps,d=s.isOpen,f=u(o,t),p=m(),h=(0,c.cx)("chakra-modal__content",n),v=(0,a.yK)(),g=y({display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0},v.dialog),E=y({display:"flex",width:"100vw",height:"100vh",position:"fixed",left:0,top:0},v.dialogContainer),O=C().placement;return r.createElement(l.m$.div,y({},p,{className:"chakra-modal__content-container",__css:E}),r.createElement(b.MI,null,r.createElement(_,y({direction:O,in:d,className:h},f,{__css:g}),i)))}));u.Ts&&(j.displayName="DrawerContent");var N=n(7262),T=n(4846),P=n(132),R=n(2349),H=n(3941),S=n(7004),z=n(4774),B=n(1160),U=n(545),D=[{name:"投資關鍵",to:"ESG-green"},{name:"永續三贏",to:"section-subject"},{name:"基金檔案",to:"section-fund"}],G=function(e){var t,n,o=e.dark,a=e.modalonOpen,l=(0,B.Z)(),s=(0,r.useMemo)((function(){var e;return(null===(e=l.data)||void 0===e?void 0:e.filter((function(e){return"header-vid"===e.id})))||[]}),[l]),c=(0,N.q)(),u=c.isOpen,m=c.onOpen,d=c.onClose;return r.createElement(r.Fragment,null,r.createElement(z.pU,{greaterThanOrEqual:"tablet"},r.createElement(T.k,{color:o?"custom.headerTextGreen":"white",alignItems:"center"},s.length>0&&r.createElement(H.Z,{mx:"1.875em"},r.createElement(S.Z.Transparent,{onClick:function(){var e;a(),(0,U.ob)(null===(e=s[0])||void 0===e?void 0:e.name)},fontSize:"1.125em",py:"0",px:"0"},null===(t=s[0])||void 0===t?void 0:t.name)),D.map((function(e,t){var n=e.name,i=e.to;return r.createElement(H.Z.Relative,{cursor:"pointer",fontSize:"1.125em",fontWeight:"bold",mx:"1.875em",key:t},r.createElement(R.rU,{onClick:function(){(0,U.ob)(n)},smooth:!0,to:i,offset:-78},n))})),r.createElement(H.Z,{mx:"1.875em"},r.createElement(S.Z.Orange,{as:R.rU,cursor:"pointer",smooth:!0,to:"section-buy",fontSize:"1.125em",borderRadius:"1.25em",offset:-78,onClick:function(){return(0,U.ob)("申購請洽")}},"申購請洽")))),r.createElement(z.pU,{lessThan:"tablet"},r.createElement(H.Z.Relative,{as:S.Z,borderRadius:"0",bg:u?"custom.blue":"transparent",color:u?"white":o?"custom.blue":"white",_hover:{bg:"custom.blue",color:"white"},_focus:{bg:"transparent",color:o?"custom.blue":"white"},onClick:m,height:z.ZP.headerHeight,width:z.ZP.headerHeight,px:"0","aria-label":"選單"},r.createElement(P.J,{as:u?i.oHP:i.qTj,w:(0,z.jW)("1.25rem","2rem"),h:(0,z.jW)("1.25rem","2rem")})),r.createElement(Z,{isOpen:u,placement:"right",onClose:d,size:"md",preserveScrollBarGap:!0},r.createElement(j,{bg:"custom.blue",style:{top:z.ZP.headerHeight},height:"auto"},r.createElement(b.fe,{height:"100%"},s.length>0&&r.createElement(H.Z,null,r.createElement(S.Z.Transparent,{width:"100%",py:"1.5rem",borderBottom:"1px solid white",borderRadius:"0",onClick:function(){var e;a(),(0,U.ob)(null===(e=s[0])||void 0===e?void 0:e.name)}},null===(n=s[0])||void 0===n?void 0:n.name)),D.map((function(e,t){var n=e.name,i=e.to;return r.createElement(H.Z,{key:t},r.createElement(S.Z.Transparent,{width:"100%",offset:-78,py:"1.5rem",as:R.rU,smooth:!0,to:i,borderBottom:"1px solid white",borderRadius:"0",onClick:function(){(0,U.ob)(n),d()}},n))}))),r.createElement(b.mz,null,r.createElement(S.Z.Orange,{as:R.rU,smooth:!0,to:"section-buy",width:"100%",fontSize:"1em",py:"1rem",offset:-78,onClick:function(){(0,U.ob)("申購請洽"),d()}},"申購請洽"))))))}}}]);
//# sourceMappingURL=285-921b2f2e945fcda9cf01.js.map