import{D as N,a as v,g as oe,f as ae,q as D,A as T,e as F,G as ce,o as k,H as ie,I as ue,u as le,J as fe,b as he,L as pe}from"./web-NOoGXgWu.js";function de(){let t=new Set;function e(s){return t.add(s),()=>t.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const a={to:s,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const i of t)i.listener({...a,from:i.location,retry:f=>{f&&(n=!0),i.navigate(s,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:e,confirm:r}}let $;function G(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),$=window.history.state._depth}G();function _e(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function Ie(t,e){let n=!1;return()=>{const r=$;G();const s=r==null?null:$-r;if(n){n=!1;return}s&&e(s)?(n=!0,window.history.go(-s)):t()}}const me=/^(?:[a-z0-9]+:)?\/\//i,ge=/^\/+|(\/)\/+$/g,ye="http://sr";function C(t,e=!1){const n=t.replace(ge,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function j(t,e,n){if(me.test(e))return;const r=C(t),s=n&&C(n);let o="";return!s||e.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+C(e,!o)}function ve(t,e){if(t==null)throw new Error(e);return t}function we(t,e){return C(t).replace(/\/*(\*.*)?$/g,"")+C(e)}function J(t){const e={};return t.searchParams.forEach((n,r)=>{r in e?Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]:e[r]=n}),e}function Re(t,e,n){const[r,s]=t.split("/*",2),o=r.split("/").filter(Boolean),a=o.length;return i=>{const f=i.split("/").filter(Boolean),h=f.length-a;if(h<0||h>0&&s===void 0&&!e)return null;const l={path:a?"":"/",params:{}},m=d=>n===void 0?void 0:n[d];for(let d=0;d<a;d++){const p=o[d],y=p[0]===":",w=y?f[d]:f[d].toLowerCase(),x=y?p.slice(1):p.toLowerCase();if(y&&q(w,m(x)))l.params[x]=w;else if(y||!q(w,x))return null;l.path+=`/${w}`}if(s){const d=h?f.slice(-h).join("/"):"";if(q(d,m(s)))l.params[s]=d;else return null}return l}}function q(t,e){const n=r=>r===t;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function Pe(t){const[e,n]=t.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function X(t){const e=new Map,n=oe();return new Proxy({},{get(r,s){return e.has(s)||N(n,()=>e.set(s,v(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function Q(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const s=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=e[1]),r=r.slice(e[0].length);return Q(r).reduce((o,a)=>[...o,...s.map(i=>i+a)],[])}const be=100,xe=T(),V=T(),L=()=>ve(D(xe),"<A> and 'use' router primitives can be only used inside a Route."),Ae=()=>D(V)||L().base,qe=t=>{const e=Ae();return v(()=>e.resolvePath(t()))},We=t=>{const e=L();return v(()=>{const n=t();return n!==void 0?e.renderPath(n):n})},Ce=()=>L().navigatorFactory(),Le=()=>L().location,$e=t=>{const e=L().beforeLeave.subscribe({listener:t,location:Le(),navigate:Ce()});ae(e)};function Ee(t,e=""){const{component:n,preload:r,load:s,children:o,info:a}=t,i=!o||Array.isArray(o)&&!o.length,f={key:t,component:n,preload:r||s,info:a};return Y(t.path).reduce((h,l)=>{for(const m of Q(l)){const d=we(e,m);let p=i?d:d.split("/*",1)[0];p=p.split("/").map(y=>y.startsWith(":")||y.startsWith("*")?y:encodeURIComponent(y)).join("/"),h.push({...f,originalPath:l,pattern:p,matcher:Re(p,!i,t.matchFilters)})}return h},[])}function Se(t,e=0){return{routes:t,score:Pe(t[t.length-1])*1e4-e,matcher(n){const r=[];for(let s=t.length-1;s>=0;s--){const o=t[s],a=o.matcher(n);if(!a)return null;r.unshift({...a,route:o})}return r}}}function Y(t){return Array.isArray(t)?t:[t]}function Oe(t,e="",n=[],r=[]){const s=Y(t);for(let o=0,a=s.length;o<a;o++){const i=s[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const f=Ee(i,e);for(const h of f){n.push(h);const l=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!l)Oe(i.children,h.pattern,n,r);else{const m=Se([...n],r.length);r.push(m)}n.pop()}}}return n.length?r:r.sort((o,a)=>a.score-o.score)}function W(t,e){for(let n=0,r=t.length;n<r;n++){const s=t[n].matcher(e);if(s)return s}return[]}function Be(t,e,n){const r=new URL(ye),s=v(l=>{const m=t();try{return new URL(m,r)}catch{return console.error(`Invalid path ${m}`),l}},r,{equals:(l,m)=>l.href===m.href}),o=v(()=>s().pathname),a=v(()=>s().search,!0),i=v(()=>s().hash),f=()=>"",h=k(a,()=>J(s()));return{get pathname(){return o()},get search(){return a()},get hash(){return i()},get state(){return e()},get key(){return f()},query:n?n(h):X(h)}}let R;function De(){return R}function Me(t){}function Ue(t,e,n,r={}){const{signal:[s,o],utils:a={}}=t,i=a.parsePath||(c=>c),f=a.renderPath||(c=>c),h=a.beforeLeave||de(),l=j("",r.base||"");if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!s().value&&o({value:l,replace:!0,scroll:!1});const[m,d]=F(!1);let p;const y=(c,u)=>{u.value===w()&&u.state===E()||(p===void 0&&d(!0),R=c,p=u,ie(()=>{p===u&&(x(p.value),Z(p.state),pe(),M[1](g=>g.filter(P=>P.pending)))}).finally(()=>{p===u&&ue(()=>{R=void 0,c==="navigate"&&re(p),d(!1),p=void 0})}))},[w,x]=F(s().value),[E,Z]=F(s().state),S=Be(w,E,a.queryWrapper),O=[],M=F([]),U=v(()=>typeof r.transformUrl=="function"?W(e(),r.transformUrl(S.pathname)):W(e(),S.pathname)),K=()=>{const c=U(),u={};for(let g=0;g<c.length;g++)Object.assign(u,c[g].params);return u},ee=a.paramsWrapper?a.paramsWrapper(K,e):X(K),z={pattern:l,path:()=>l,outlet:()=>null,resolvePath(c){return j(l,c)}};return ce(k(s,c=>y("native",c),{defer:!0})),{base:z,location:S,params:ee,isRouting:m,renderPath:f,parsePath:i,navigatorFactory:ne,matches:U,beforeLeave:h,preloadRoute:se,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:M};function te(c,u,g){le(()=>{if(typeof u=="number"){u&&(a.go?a.go(u):console.warn("Router integration does not support relative routing"));return}const P=!u||u[0]==="?",{replace:_,resolve:b,scroll:I,state:A}={replace:!1,resolve:!P,scroll:!0,...g},B=b?c.resolvePath(u):j(P&&S.pathname||"",u);if(B===void 0)throw new Error(`Path '${u}' is not a routable path`);if(O.length>=be)throw new Error("Too many redirects");const H=w();(B!==H||A!==E())&&(fe||h.confirm(B,g)&&(O.push({value:H,replace:_,scroll:I,state:E()}),y("navigate",{value:B,state:A})))})}function ne(c){return c=c||D(V)||z,(u,g)=>te(c,u,g)}function re(c){const u=O[0];u&&(o({...c,replace:u.replace,scroll:u.scroll}),O.length=0)}function se(c,u){const g=W(e(),c.pathname),P=R;R="preload";for(let _ in g){const{route:b,params:I}=g[_];b.component&&b.component.preload&&b.component.preload();const{preload:A}=b;u&&A&&N(n(),()=>A({params:I,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:J(c),state:null,key:""},intent:"preload"}))}R=P}}function Ke(t,e,n,r){const{base:s,location:o,params:a}=t,{pattern:i,component:f,preload:h}=r().route,l=v(()=>r().path);f&&f.preload&&f.preload();const m=h?h({params:a,location:o,intent:R||"initial"}):void 0;return{parent:e,pattern:i,path:l,outlet:()=>f?he(f,{params:a,location:o,data:m,get children(){return n()}}):n(),resolvePath(p){return j(s.path(),p,l())}}}export{xe as R,Ue as a,Ke as b,Oe as c,V as d,G as e,de as f,De as g,Le as h,qe as i,We as j,_e as k,C as l,ye as m,Ie as n,Me as s,$e as u};
