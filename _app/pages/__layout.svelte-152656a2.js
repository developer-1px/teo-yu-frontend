import{F as M,S as N,i as P,s as X,G as B,H as Q,e as v,t as j,k as I,c as g,a as h,h as q,d as n,m as U,b as m,f as R,I as V,g as C,J as r,K as W,L as J,M as Z,N as x,O as ee,q as se,o as te,P as ae}from"../chunks/vendor-427a5d82.js";import{b as K}from"../chunks/paths-4b3c6e7e.js";const le=()=>{const s=M("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},re={subscribe(s){return le().page.subscribe(s)}};function ie(s){let c=!1,p=()=>{c=!1},k,t,_,u,b,i,T,f,o,L,S,y,A,w,D,d,E,O,$;B(s[6]);const Y=s[5].default,l=Q(Y,s,s[4],null);return{c(){t=v("div"),_=v("div"),u=j("\uD14C\uC624\uC758 \uD504\uB860\uD2B8\uC5D4\uB4DC"),b=I(),i=v("a"),T=j("#Link"),f=I(),o=v("a"),L=j("#Talk"),S=I(),y=v("div"),A=I(),w=v("div"),D=I(),d=v("div"),l&&l.c(),this.h()},l(e){t=g(e,"DIV",{class:!0});var a=h(t);_=g(a,"DIV",{});var z=h(_);u=q(z,"\uD14C\uC624\uC758 \uD504\uB860\uD2B8\uC5D4\uB4DC"),z.forEach(n),b=U(a),i=g(a,"A",{class:!0,href:!0});var F=h(i);T=q(F,"#Link"),F.forEach(n),f=U(a),o=g(a,"A",{class:!0,href:!0});var G=h(o);L=q(G,"#Talk"),G.forEach(n),S=U(a),y=g(a,"DIV",{class:!0}),h(y).forEach(n),A=U(a),w=g(a,"DIV",{class:!0,style:!0}),h(w).forEach(n),a.forEach(n),D=U(e),d=g(e,"DIV",{});var H=h(d);l&&l.l(H),H.forEach(n),this.h()},h(){m(i,"class","hover:underline pointer .active:bb(4px/hsl(100,75%,75%))"),m(i,"href",""+(K+"/")),m(o,"class","hover:underline pointer .active:bb(4px/hsl(100,75%,75%))"),m(o,"href",""+(K+"/talk")),m(y,"class","flex"),m(w,"class","w(32) h(32) r(100%) clip cover"),R(w,"background-image","url(https://avatars.githubusercontent.com/u/66650330?s=400&u=f7e0583060061b825231e6aa0e23bcca76dc31c6&v=4)"),m(t,"class","hbox font(20) p(20) gap(20) bold .isUp:sticky-top bg(#fff) z(99999)"),V(t,"isUp",s[1]),V(d,"isUp",s[1])},m(e,a){C(e,t,a),r(t,_),r(_,u),r(t,b),r(t,i),r(i,T),r(t,f),r(t,o),r(o,L),r(t,S),r(t,y),r(t,A),r(t,w),C(e,D,a),C(e,d,a),l&&l.m(d,null),E=!0,O||($=[W(window,"scroll",()=>{c=!0,clearTimeout(k),k=setTimeout(p,100),s[6]()}),J(s[2].call(null,i)),J(s[2].call(null,o))],O=!0)},p(e,[a]){a&1&&!c&&(c=!0,clearTimeout(k),scrollTo(window.pageXOffset,e[0]),k=setTimeout(p,100)),a&2&&V(t,"isUp",e[1]),l&&l.p&&(!E||a&16)&&Z(l,Y,e,e[4],E?ee(Y,e[4],a,null):x(e[4]),null),a&2&&V(d,"isUp",e[1])},i(e){E||(se(l,e),E=!0)},o(e){te(l,e),E=!1},d(e){e&&n(t),e&&n(D),e&&n(d),l&&l.d(e),O=!1,ae($)}}}function oe(s,c,p){let{$$slots:k={},$$scope:t}=c;const _=f=>{re.subscribe(o=>{f.classList.toggle("active",location.origin+o.url.pathname===f.href)})};let u=0,b=0,i=!1;function T(){p(0,u=window.pageYOffset)}return s.$$set=f=>{"$$scope"in f&&p(4,t=f.$$scope)},s.$$.update=()=>{s.$$.dirty&9&&u>=0&&(p(1,i=u<b),p(3,b=u))},[u,i,_,b,t,k,T]}class ue extends N{constructor(c){super();P(this,c,oe,ie,X,{})}}export{ue as default};
