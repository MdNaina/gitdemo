const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};V();function d(){}function N(e){return e()}function w(){return Object.create(null)}function y(e){e.forEach(N)}function j(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function I(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function B(){return T(" ")}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return Array.from(e.childNodes)}let E;function p(e){E=e}const a=[],D=[],g=[],L=[],q=Promise.resolve();let b=!1;function F(){b||(b=!0,q.then(P))}function x(e){g.push(e)}const $=new Set;let m=0;function P(){const e=E;do{for(;m<a.length;){const t=a[m];m++,p(t),K(t.$$)}for(p(null),a.length=0,m=0;D.length;)D.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];$.has(n)||($.add(n),n())}g.length=0}while(a.length);for(;L.length;)L.pop()();b=!1,$.clear(),p(e)}function K(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const z=new Set;function G(e,t){e&&e.i&&(z.delete(e),e.i(t))}function H(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:l,after_update:f}=e.$$;r&&r.m(t,n),i||x(()=>{const u=o.map(N).filter(j);l?l.push(...u):y(u),e.$$.on_mount=[]}),f.forEach(x)}function J(e,t){const n=e.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(a.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,i,r,o,l,f=[-1]){const u=E;p(e);const c=e.$$={fragment:null,ctx:null,props:o,update:d,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};l&&l(c.root);let k=!1;if(c.ctx=n?n(e,t.props||{},(s,v,...O)=>{const A=O.length?O[0]:v;return c.ctx&&r(c.ctx[s],c.ctx[s]=A)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](A),k&&Q(e,s)),v}):[],c.update(),k=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const s=U(t.target);c.fragment&&c.fragment.l(s),s.forEach(S)}else c.fragment&&c.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),P()}p(u)}class X{$destroy(){J(this,1),this.$destroy=d}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let t,n,i,r,o;return{c(){t=_("main"),n=_("div"),i=_("h2"),i.textContent=`Version: ${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_VERSION}`,r=B(),o=_("p"),o.textContent=`Updated Date: ${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_UPDATED_DATE}`,M(t,"class","container svelte-16x49jc")},m(l,f){R(l,t,f),h(t,n),h(n,i),h(n,r),h(n,o)},p:d,i:d,o:d,d(l){l&&S(t)}}}class Z extends X{constructor(t){super(),W(this,t,null,Y,C,{})}}new Z({target:document.getElementById("app")});
