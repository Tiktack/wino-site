const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/(home)-DZ4y4POy.js","assets/web-D7WVA_Al.js","assets/index-BfE_jzrC.js","assets/Button-1eDpC7an.js","assets/stylex-DhyWn_Hl.js","assets/UKTBL2JL-adhvi73U.js","assets/5WXHJDCZ-Cq8IOArU.js","assets/TextBlock-Dutp1zpM.js","assets/FluentIcon-Bj4TusFl.js","assets/context-4fNtUbkD.js","assets/components-B-0MSZus.js","assets/routing-BCbDmERP.js","assets/Privacy-CsfLCF0O.js","assets/index-BzsL_Dxk.js","assets/_...404_-CNiPgsT6.js","assets/HttpStatusCode-DjTx85av.js","assets/about-BWPLD84d.js","assets/blog(list)-EaCd4ExX.js","assets/wino-website-CYe1-ieE.js","assets/config-ffZtf3Z6.js","assets/blog-xzpi7WoE.js","assets/components-0x74myZO.js","assets/news_24_regular-Bi3Wh5Cn.js","assets/SidebarLayout-aCw9a1w5.js","assets/Collapsible-Cy-IUWB8.js","assets/E53DB7BS-BVpEDGAS.js","assets/JNCCF6MP-CmZ7cGBk.js","assets/index-DSVcBtKu.js","assets/ListItem-BvwDUj2n.js","assets/ListItem-BCQlbRr_.css","assets/docs-4ObbFfGd.js","assets/release-1-7-6-CUaf2u1G.js","assets/release-1-9-0-Dj8aVBp9.js","assets/test-blog-2-DdOUl4SS.js","assets/test-blog-3-DKB08FZa.js","assets/wino-website-B1wOQst6.js","assets/Buttons-CJ5N6ae2.js","assets/Checkboxes-CLASU8Fr.js","assets/VI7QYH27-Z5Qc0pEc.js","assets/Checkboxes-D_cdgn4S.css","assets/Collapsibles-DKU3fT67.js","assets/ContentDialogs-DoJMOYQS.js","assets/IconButtons-B-vZFwit.js","assets/IconButton-B_C36r_3.js","assets/ListItems-BVNFLVG0.js","assets/ProgressBars-DO1dDxgs.js","assets/ProgressBars-CCIzKGQm.css","assets/ProgressRings-e_ZlX3vv.js","assets/ProgressRings-YwJPs3gr.css","assets/TextBlocks-Bl1-7zov.js","assets/ToggleSwitches-C5ya-FTy.js","assets/ToggleSwitches-KhPbM11W.css","assets/install-BhI0ohRJ.js","assets/overview-CUtuT4IO.js"])))=>i.map(i=>d[i]);
import{M as ye,T as Pe}from"./index-BfE_jzrC.js";import{c as Ae,a as R,b as p,g as Ie,u as K,S as de,o as Re,d as Ce,e as X,f as pe,s as W,h as Oe,$ as Le,i as T,j as k,m as $,k as w,r as y,t as S,l as Ne,n as E,p as he,q as me,F as Me,v as De,w as ze,x as Fe,E as Be,y as Ve}from"./web-D7WVA_Al.js";import{a as je,p as qe}from"./stylex-DhyWn_Hl.js";import{T as Q}from"./context-4fNtUbkD.js";import{f as We,D as Ue,c as Ze}from"./config-ffZtf3Z6.js";import{B}from"./Button-1eDpC7an.js";import{T as M}from"./TextBlock-Dutp1zpM.js";import{A as I}from"./components-B-0MSZus.js";import{N as He}from"./news_24_regular-Bi3Wh5Cn.js";import{S as re,I as U}from"./IconButton-B_C36r_3.js";import{F as q}from"./FluentIcon-Bj4TusFl.js";import{c as Ke,a as Ge,R as Je,s as oe,g as Ye,b as Xe,d as Qe,m as et,k as tt,e as nt,f as rt,n as ot}from"./routing-BCbDmERP.js";import{H as st}from"./HttpStatusCode-DjTx85av.js";import"./UKTBL2JL-adhvi73U.js";import"./5WXHJDCZ-Cq8IOArU.js";const Z="Invariant Violation",{setPrototypeOf:it=function(e,t){return e.__proto__=t,e}}=Object;class ee extends Error{framesToPop=1;name=Z;constructor(t=Z){super(typeof t=="number"?`${Z}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),it(this,ee.prototype)}}function H(e,t){if(!e)throw new ee(t)}const lt=/^[A-Za-z]:\//;function ct(e=""){return e&&e.replace(/\\/g,"/").replace(lt,t=>t.toUpperCase())}const at=/^[/\\]{2}/,ut=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,dt=/^[A-Za-z]:$/,pt=function(e){if(e.length===0)return".";e=ct(e);const t=e.match(at),n=G(e),o=e[e.length-1]==="/";return e=ht(e,!n),e.length===0?n?"/":o?"./":".":(o&&(e+="/"),dt.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!G(e)?`/${e}`:e)},fe=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":pt(t.replace(/\/\/+/g,"/"))};function ht(e,t){let n="",o=0,r=-1,s=0,a=null;for(let i=0;i<=e.length;++i){if(i<e.length)a=e[i];else{if(a==="/")break;a="/"}if(a==="/"){if(!(r===i-1||s===1))if(s===2){if(n.length<2||o!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const d=n.lastIndexOf("/");d===-1?(n="",o=0):(n=n.slice(0,d),o=n.length-1-n.lastIndexOf("/")),r=i,s=0;continue}else if(n.length>0){n="",o=0,r=i,s=0;continue}}t&&(n+=n.length>0?"/..":"..",o=2)}else n.length>0?n+=`/${e.slice(r+1,i)}`:n=e.slice(r+1,i),o=i-r-1;r=i,s=0}else a==="."&&s!==-1?++s:s=-1}return n}const G=function(e){return ut.test(e)};function mt(e){return`virtual:${e}`}function ft(e){return e.handler?.endsWith(".html")?G(e.handler)?e.handler:fe(e.root,e.handler):`$vinxi/handler/${e.name}`}const gt=new Proxy({},{get(e,t){return H(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:mt(ft({name:t})),baseURL:"/wino-site/_build",chunks:new Proxy({},{get(n,o){H(typeof o=="string","Chunk expected");let r=fe("/wino-site/_build",o+".mjs");return{import(){return import(r)},output:{path:r}}}}),inputs:new Proxy({},{get(n,o){H(typeof o=="string","Input must be string");let r=window.manifest[o].output;return{async import(){return import(r)},async assets(){return window.manifest[o].assets},output:{path:r}}}})}}});globalThis.MANIFEST=gt;const xt=e=>t=>{const{base:n}=t,o=Ae(()=>t.children),r=R(()=>Ke(o(),t.base||""));let s;const a=Ge(e,r,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),p(Je.Provider,{value:a,get children(){return p(bt,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[R(()=>(s=Ie())&&null),p($t,{routerState:a,get branches(){return r()}})]}})}})};function bt(e){const t=e.routerState.location,n=e.routerState.params,o=R(()=>e.preload&&K(()=>{oe(!0),e.preload({params:n,location:t,intent:Ye()||"initial"}),oe(!1)}));return p(de,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>p(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function $t(e){const t=[];let n;const o=R(Re(e.routerState.matches,(r,s,a)=>{let i=s&&r.length===s.length;const d=[];for(let l=0,c=r.length;l<c;l++){const u=s&&s[l],g=r[l];a&&u&&g.route.key===u.route.key?d[l]=a[l]:(i=!1,t[l]&&t[l](),Ce(_=>{t[l]=_,d[l]=Xe(e.routerState,d[l-1]||e.routerState.base,se(()=>o()[l+1]),()=>e.routerState.matches()[l])}))}return t.splice(r.length).forEach(l=>l()),a&&i?a:(n=d[0],d)}));return se(()=>o()&&n)()}const se=e=>()=>p(de,{get when(){return e()},keyed:!0,children:t=>p(Qe.Provider,{value:t,get children(){return t.outlet()}})});function _t([e,t],n,o){return[e,r=>t(o(r))]}function wt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=_t(X(n(e.get()),{equals:(r,s)=>r.value===s.value&&r.state===s.state}),void 0,r=>(!t&&e.set(r),W.registry&&!W.done&&(W.done=!0),r));return e.init&&pe(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),xt({signal:o,create:e.create,utils:e.utils})}function kt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function vt(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Et=new Map;function Tt(e=!0,t=!1,n="/_server",o){return r=>{const s=r.base.path(),a=r.navigatorFactory(r.base);let i,d;function l(m){return m.namespaceURI==="http://www.w3.org/2000/svg"}function c(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const h=m.composedPath().find(j=>j instanceof Node&&j.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const f=l(h),x=f?h.href.baseVal:h.href;if((f?h.target.baseVal:h.target)||!x&&!h.hasAttribute("state"))return;const A=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||A&&A.includes("external"))return;const C=f?new URL(x,document.baseURI):new URL(x);if(!(C.origin!==window.location.origin||s&&C.pathname&&!C.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,C]}function u(m){const h=c(m);if(!h)return;const[f,x]=h,z=r.parsePath(x.pathname+x.search+x.hash),A=f.getAttribute("state");m.preventDefault(),a(z,{resolve:!1,replace:f.hasAttribute("replace"),scroll:!f.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function g(m){const h=c(m);if(!h)return;const[f,x]=h;o&&(x.pathname=o(x.pathname)),r.preloadRoute(x,f.getAttribute("preload")!=="false")}function _(m){clearTimeout(i);const h=c(m);if(!h)return d=null;const[f,x]=h;d!==f&&(o&&(x.pathname=o(x.pathname)),i=setTimeout(()=>{r.preloadRoute(x,f.getAttribute("preload")!=="false"),d=f},20))}function v(m){if(m.defaultPrevented)return;let h=m.submitter&&m.submitter.hasAttribute("formaction")?m.submitter.getAttribute("formaction"):m.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const x=new URL(h,et);if(h=r.parsePath(x.pathname+x.search),!h.startsWith(n))return}if(m.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const f=Et.get(h);if(f){m.preventDefault();const x=new FormData(m.target,m.submitter);f.call({r,f:m.target},m.target.enctype==="multipart/form-data"?x:new URLSearchParams(x))}}Oe(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mousemove",_,{passive:!0}),document.addEventListener("focusin",g,{passive:!0}),document.addEventListener("touchstart",g,{passive:!0})),document.addEventListener("submit",v),pe(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mousemove",_),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",v)})}}function St(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=rt();return wt({get:t,set({value:o,replace:r,scroll:s,state:a}){r?window.history.replaceState(tt(a),"",o):window.history.pushState(a,"",o),vt(decodeURIComponent(window.location.hash.slice(1)),s),nt()},init:o=>kt(window,"popstate",ot(o,r=>{if(r&&r<0)return!n.confirm(r);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Tt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}const yt=Symbol("store-raw"),Pt=Symbol("store-node"),O=Symbol("store-has"),At=Symbol("store-self");function V(e){let t;return e!=null&&typeof e=="object"&&(e[Le]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function J(e,t=new Set){let n,o,r,s;if(n=e!=null&&e[yt])return n;if(!V(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let a=0,i=e.length;a<i;a++)r=e[a],(o=J(r,t))!==r&&(e[a]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const a=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let d=0,l=a.length;d<l;d++)s=a[d],!i[s].get&&(r=e[s],(o=J(r,t))!==r&&(e[s]=o))}return e}function It(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function ie(e,t,n){if(e[t])return e[t];const[o,r]=X(n,{equals:!1,internal:!0});return o.$=r,e[t]=o}function P(e,t,n,o=!1){if(!o&&e[t]===n)return;const r=e[t],s=e.length;n===void 0?(delete e[t],e[O]&&e[O][t]&&r!==void 0&&e[O][t].$()):(e[t]=n,e[O]&&e[O][t]&&r===void 0&&e[O][t].$());let a=It(e,Pt),i;if((i=ie(a,t,r))&&i.$(()=>n),Array.isArray(e)&&e.length!==s){for(let d=e.length;d<s;d++)(i=a[d])&&i.$();(i=ie(a,"length",s))&&i.$(e.length)}(i=a[At])&&i.$()}const Y=Symbol("store-root");function L(e,t,n,o,r){const s=t[n];if(e===s)return;const a=Array.isArray(e);if(n!==Y&&(!V(e)||!V(s)||a!==Array.isArray(s)||r&&e[r]!==s[r])){P(t,n,e);return}if(a){if(e.length&&s.length&&(!o||r&&e[0]&&e[0][r]!=null)){let l,c,u,g,_,v,m,h;for(u=0,g=Math.min(s.length,e.length);u<g&&(s[u]===e[u]||r&&s[u]&&e[u]&&s[u][r]===e[u][r]);u++)L(e[u],s,u,o,r);const f=new Array(e.length),x=new Map;for(g=s.length-1,_=e.length-1;g>=u&&_>=u&&(s[g]===e[_]||r&&s[u]&&e[u]&&s[g][r]===e[_][r]);g--,_--)f[_]=s[g];if(u>_||u>g){for(c=u;c<=_;c++)P(s,c,e[c]);for(;c<e.length;c++)P(s,c,f[c]),L(e[c],s,c,o,r);s.length>e.length&&P(s,"length",e.length);return}for(m=new Array(_+1),c=_;c>=u;c--)v=e[c],h=r&&v?v[r]:v,l=x.get(h),m[c]=l===void 0?-1:l,x.set(h,c);for(l=u;l<=g;l++)v=s[l],h=r&&v?v[r]:v,c=x.get(h),c!==void 0&&c!==-1&&(f[c]=s[l],c=m[c],x.set(h,c));for(c=u;c<e.length;c++)c in f?(P(s,c,f[c]),L(e[c],s,c,o,r)):P(s,c,e[c])}else for(let l=0,c=e.length;l<c;l++)L(e[l],s,l,o,r);s.length>e.length&&P(s,"length",e.length);return}const i=Object.keys(e);for(let l=0,c=i.length;l<c;l++)L(e[i[l]],s,i[l],o,r);const d=Object.keys(s);for(let l=0,c=d.length;l<c;l++)e[d[l]]===void 0&&P(s,d[l],void 0)}function Rt(e,t={}){const{merge:n,key:o="id"}=t,r=J(e);return s=>{if(!V(s)||!V(r))return r;const a=L(r,{[Y]:s},Y,n,o);return a===void 0?s:a}}function Ct(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var Ot=S("<style>"),Lt=S("<link>"),Nt=S("<script> "),Mt=S("<noscript>");const Dt={style:e=>(()=>{var t=T(Ot);return k(t,$(()=>e.attrs),!1,!0),w(t,()=>e.children),y(),t})(),link:e=>(()=>{var t=T(Lt);return k(t,$(()=>e.attrs),!1,!1),y(),t})(),script:e=>e.attrs.src?(()=>{var t=T(Nt);return k(t,$(()=>e.attrs,{get id(){return e.key}}),!1,!0),y(),t})():null,noscript:e=>(()=>{var t=T(Mt);return k(t,$(()=>e.attrs),!1,!0),y(),t})()};function zt(e,t){let{tag:n,attrs:{key:o,...r}={key:void 0},children:s}=e;return Dt[n]({attrs:{...r,nonce:t},key:o,children:s})}function Ft(e,t,n,o="default"){return Ne(async()=>{{const s=(await e.import())[o],i=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Ct(i),{default:l=>[...i.map(c=>zt(c)),p(s,l)]}}})}const D={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Bt(e={}){const t={options:e,rootNode:ge(),staticRoutesMap:{}},n=o=>e.strictTrailingSlash?o:o.replace(/\/$/,"")||"/";if(e.routes)for(const o in e.routes)le(t,n(o),e.routes[o]);return{ctx:t,lookup:o=>Vt(t,n(o)),insert:(o,r)=>le(t,n(o),r),remove:o=>jt(t,n(o))}}function Vt(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const o=t.split("/"),r={};let s=!1,a=null,i=e.rootNode,d=null;for(let l=0;l<o.length;l++){const c=o[l];i.wildcardChildNode!==null&&(a=i.wildcardChildNode,d=o.slice(l).join("/"));const u=i.children.get(c);if(u===void 0){if(i&&i.placeholderChildren.length>1){const g=o.length-l;i=i.placeholderChildren.find(_=>_.maxDepth===g)||null}else i=i.placeholderChildren[0]||null;if(!i)break;i.paramName&&(r[i.paramName]=c),s=!0}else i=u}return(i===null||i.data===null)&&a!==null&&(i=a,r[i.paramName||"_"]=d,s=!0),i?s?{...i.data,params:s?r:void 0}:i.data:null}function le(e,t,n){let o=!0;const r=t.split("/");let s=e.rootNode,a=0;const i=[s];for(const d of r){let l;if(l=s.children.get(d))s=l;else{const c=qt(d);l=ge({type:c,parent:s}),s.children.set(d,l),c===D.PLACEHOLDER?(l.paramName=d==="*"?`_${a++}`:d.slice(1),s.placeholderChildren.push(l),o=!1):c===D.WILDCARD&&(s.wildcardChildNode=l,l.paramName=d.slice(3)||"_",o=!1),i.push(l),s=l}}for(const[d,l]of i.entries())l.maxDepth=Math.max(i.length-d,l.maxDepth||0);return s.data=n,o===!0&&(e.staticRoutesMap[t]=s),s}function jt(e,t){let n=!1;const o=t.split("/");let r=e.rootNode;for(const s of o)if(r=r.children.get(s),!r)return n;if(r.data){const s=o.at(-1)||"";r.data=null,Object.keys(r.children).length===0&&r.parent&&(r.parent.children.delete(s),r.parent.wildcardChildNode=null,r.parent.placeholderChildren=[]),n=!0}return n}function ge(e={}){return{type:e.type||D.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function qt(e){return e.startsWith("**")?D.WILDCARD:e[0]===":"||e==="*"?D.PLACEHOLDER:D.NORMAL}const Wt="modulepreload",Ut=function(e){return"/wino-site/_build/"+e},ce={},b=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(d=>{if(d=Ut(d),d in ce)return;ce[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Wt,l||(u.as="script"),u.crossOrigin="",u.href=d,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((g,_)=>{u.addEventListener("load",g),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})},xe=[{page:!0,$component:{src:"src/routes/(home).tsx?pick=default&pick=$css",build:()=>b(()=>import("./(home)-DZ4y4POy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/(home).tsx?pick=default&pick=$css"].output.path)},path:"/(home)",filePath:"/home/runner/work/wino-site/wino-site/src/routes/(home).tsx"},{page:!0,$component:{src:"src/routes/Privacy.mdx?pick=$css",build:()=>b(()=>import("./Privacy-CsfLCF0O.js"),__vite__mapDeps([12,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/Privacy.mdx?pick=$css"].output.path)},path:"/Privacy",filePath:"/home/runner/work/wino-site/wino-site/src/routes/Privacy.mdx"},{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>b(()=>import("./_...404_-CNiPgsT6.js"),__vite__mapDeps([14,1,2,15])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/wino-site/wino-site/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>b(()=>import("./about-BWPLD84d.js"),__vite__mapDeps([16,1,2,10,11])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/wino-site/wino-site/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/blog(list).tsx?pick=default&pick=$css",build:()=>b(()=>import("./blog(list)-EaCd4ExX.js"),__vite__mapDeps([17,18,13,1,2,4,19,7,3,5,6,11,10])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog(list).tsx?pick=default&pick=$css"].output.path)},path:"/blog(list)",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog(list).tsx"},{page:!0,$component:{src:"src/routes/blog.tsx?pick=default&pick=$css",build:()=>b(()=>import("./blog-xzpi7WoE.js"),__vite__mapDeps([20,18,13,1,4,7,11])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog.tsx?pick=default&pick=$css"].output.path)},path:"/blog",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog.tsx"},{page:!0,$component:{src:"src/routes/components.tsx?pick=default&pick=$css",build:()=>b(()=>import("./components-0x74myZO.js"),__vite__mapDeps([21,22,23,1,24,4,25,26,6,5,27,8,28,29,11])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components.tsx?pick=default&pick=$css"].output.path)},path:"/components",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components.tsx"},{page:!0,$component:{src:"src/routes/docs.tsx?pick=default&pick=$css",build:()=>b(()=>import("./docs-4ObbFfGd.js"),__vite__mapDeps([30,23,1,24,4,25,26,6,5,27,8,28,29,11])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs.tsx?pick=default&pick=$css"].output.path)},path:"/docs",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs.tsx"},{page:!0,$component:{src:"src/routes/blog/release-1-7-6.mdx?pick=$css",build:()=>b(()=>import("./release-1-7-6-CUaf2u1G.js"),__vite__mapDeps([31,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/release-1-7-6.mdx?pick=$css"].output.path)},path:"/blog/release-1-7-6",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/release-1-7-6.mdx"},{page:!0,$component:{src:"src/routes/blog/release-1-9-0.mdx?pick=$css",build:()=>b(()=>import("./release-1-9-0-Dj8aVBp9.js"),__vite__mapDeps([32,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/release-1-9-0.mdx?pick=$css"].output.path)},path:"/blog/release-1-9-0",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/release-1-9-0.mdx"},{page:!0,$component:{src:"src/routes/blog/test-blog-2.mdx?pick=$css",build:()=>b(()=>import("./test-blog-2-DdOUl4SS.js"),__vite__mapDeps([33,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/test-blog-2.mdx?pick=$css"].output.path)},path:"/blog/test-blog-2",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/test-blog-2.mdx"},{page:!0,$component:{src:"src/routes/blog/test-blog-3.mdx?pick=$css",build:()=>b(()=>import("./test-blog-3-DKB08FZa.js"),__vite__mapDeps([34,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/test-blog-3.mdx?pick=$css"].output.path)},path:"/blog/test-blog-3",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/test-blog-3.mdx"},{page:!0,$component:{src:"src/routes/blog/wino-website.mdx?pick=$css",build:()=>b(()=>import("./wino-website-B1wOQst6.js"),__vite__mapDeps([35,13,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/wino-website.mdx?pick=$css"].output.path)},path:"/blog/wino-website",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/wino-website.mdx"},{page:!0,$component:{src:"src/routes/components/Buttons.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Buttons-CJ5N6ae2.js"),__vite__mapDeps([36,1,2,3,4,5,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Buttons.tsx?pick=default&pick=$css"].output.path)},path:"/components/Buttons",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Buttons.tsx"},{page:!0,$component:{src:"src/routes/components/Checkboxes.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Checkboxes-CLASU8Fr.js"),__vite__mapDeps([37,1,2,8,38,26,6,27,39])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Checkboxes.tsx?pick=default&pick=$css"].output.path)},path:"/components/Checkboxes",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Checkboxes.tsx"},{page:!0,$component:{src:"src/routes/components/Collapsibles.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Collapsibles-DKU3fT67.js"),__vite__mapDeps([40,1,24,4,25,26,6,5,27,2,8])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Collapsibles.tsx?pick=default&pick=$css"].output.path)},path:"/components/Collapsibles",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Collapsibles.tsx"},{page:!0,$component:{src:"src/routes/components/ContentDialogs.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ContentDialogs-DoJMOYQS.js"),__vite__mapDeps([41,1,2,3,4,5,6,25,26,27,7])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ContentDialogs.tsx?pick=default&pick=$css"].output.path)},path:"/components/ContentDialogs",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ContentDialogs.tsx"},{page:!0,$component:{src:"src/routes/components/IconButtons.tsx?pick=default&pick=$css",build:()=>b(()=>import("./IconButtons-B-vZFwit.js"),__vite__mapDeps([42,1,43,4,5,6,2,8])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/IconButtons.tsx?pick=default&pick=$css"].output.path)},path:"/components/IconButtons",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/IconButtons.tsx"},{page:!0,$component:{src:"src/routes/components/ListItems.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ListItems-BVNFLVG0.js"),__vite__mapDeps([44,1,2,28,29])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ListItems.tsx?pick=default&pick=$css"].output.path)},path:"/components/ListItems",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ListItems.tsx"},{page:!0,$component:{src:"src/routes/components/ProgressBars.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ProgressBars-DO1dDxgs.js"),__vite__mapDeps([45,1,2,46])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ProgressBars.tsx?pick=default&pick=$css"].output.path)},path:"/components/ProgressBars",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ProgressBars.tsx"},{page:!0,$component:{src:"src/routes/components/ProgressRings.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ProgressRings-e_ZlX3vv.js"),__vite__mapDeps([47,1,2,48])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ProgressRings.tsx?pick=default&pick=$css"].output.path)},path:"/components/ProgressRings",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ProgressRings.tsx"},{page:!0,$component:{src:"src/routes/components/TextBlocks.tsx?pick=default&pick=$css",build:()=>b(()=>import("./TextBlocks-Bl1-7zov.js"),__vite__mapDeps([49,1,2,7,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/TextBlocks.tsx?pick=default&pick=$css"].output.path)},path:"/components/TextBlocks",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/TextBlocks.tsx"},{page:!0,$component:{src:"src/routes/components/ToggleSwitches.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ToggleSwitches-C5ya-FTy.js"),__vite__mapDeps([50,1,2,38,26,6,51])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ToggleSwitches.tsx?pick=default&pick=$css"].output.path)},path:"/components/ToggleSwitches",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ToggleSwitches.tsx"},{page:!0,$component:{src:"src/routes/docs/install.tsx?pick=default&pick=$css",build:()=>b(()=>import("./install-BhI0ohRJ.js"),__vite__mapDeps([52,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs/install.tsx?pick=default&pick=$css"].output.path)},path:"/docs/install",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs/install.tsx"},{page:!0,$component:{src:"src/routes/docs/overview.tsx?pick=default&pick=$css",build:()=>b(()=>import("./overview-CUtuT4IO.js"),__vite__mapDeps([53,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs/overview.tsx?pick=default&pick=$css"].output.path)},path:"/docs/overview",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs/overview.tsx"}],Zt=Ht(xe.filter(e=>e.page));function Ht(e){function t(n,o,r,s){const a=Object.values(n).find(i=>r.startsWith(i.id+"/"));return a?(t(a.children||(a.children=[]),o,r.slice(a.id.length)),n):(n.push({...o,id:r,path:r.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,o)=>n.path.length-o.path.length).reduce((n,o)=>t(n,o,o.path,o.path),[])}function Kt(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Bt({routes:xe.reduce((e,t)=>{if(!Kt(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(o,r)=>`**:${r}`).split("/").map(o=>o.startsWith(":")||o.startsWith("*")?o:encodeURIComponent(o)).join("/");if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Gt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&Ft(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return Zt.map(e)}let ae;const Jt=()=>ae||(ae=Gt()),Yt={$$css:!0,xrcsd40:"xph554m xrcsd40"},Xt={$$css:!0,xrcsd40:"x160b71z xrcsd40"},be="/wino-site/_build/assets/logo-CbH4gWoI.png";var Qt=S("<footer><div><div><img><!$><!/></div><!$><!/></div><div><div><!$><!/><!$><!/><!$><!/><!$><!/></div><div><!$><!/><!$><!/><!$><!/>");const en=()=>(()=>{var e=T(Qt),t=e.firstChild,n=t.firstChild,o=n.firstChild,r=o.nextSibling,[s,a]=E(r.nextSibling),i=n.nextSibling,[d,l]=E(i.nextSibling),c=t.nextSibling,u=c.firstChild,g=u.firstChild,[_,v]=E(g.nextSibling),m=_.nextSibling,[h,f]=E(m.nextSibling),x=h.nextSibling,[z,A]=E(x.nextSibling),C=z.nextSibling,[j,$e]=E(C.nextSibling),F=u.nextSibling,_e=F.firstChild,[te,we]=E(_e.nextSibling),ke=te.nextSibling,[ne,ve]=E(ke.nextSibling),Ee=ne.nextSibling,[Te,Se]=E(Ee.nextSibling);return k(e,$(()=>({class:"x1rhq4ix x78zum5 x1qughib x7kqcv9 xh8yej3 x1e1m7ul x1ey2m1c"})),!1,!0),k(t,$(()=>({class:"x78zum5 xdt5ytf x13z6uf9"})),!1,!0),k(n,$(()=>({class:"x78zum5 x6s0dn4 x13z6uf9"})),!1,!0),he(o,"src",be),k(o,$(()=>({class:"x188tqju"}),{alt:"Wino Mail Logo"}),!1,!1),w(n,p(M,{variant:"title",children:"Wino Mail"}),s,a),w(t,p(M,$(()=>({class:"x1m56qbw xdba91d"}),{get children(){return["Copyright (c) ",R(()=>We(new Date,Ue.Year))," Wino"]}})),d,l),k(c,$(()=>({class:"x78zum5 x1q0g3np x1so2pcv"})),!1,!0),k(u,$(()=>({class:"x78zum5 xdt5ytf xvh977a"})),!1,!0),w(u,p(M,$(()=>({class:"xq068xy x1m56qbw"}),{children:"Contribute"})),_,v),w(u,p(B,{variant:"hyperlink",as:I,href:"https://github.com/bkaankose/Wino-Mail/issues/new/choose",target:"_blank",children:"GitHub Issue"}),h,f),w(u,p(B,{variant:"hyperlink",as:I,href:"https://github.com/bkaankose/Wino-Mail/blob/main/CONTRIBUTING.md",target:"_blank",children:"Contribution Guideline"}),z,A),w(u,p(B,{variant:"hyperlink",as:I,href:"https://crowdin.com/project/wino-mail",target:"_blank",children:"Translations"}),j,$e),k(F,$(()=>({class:"x78zum5 xdt5ytf xvh977a"})),!1,!0),w(F,p(M,$(()=>({class:"xq068xy x1m56qbw"}),{children:"Support"})),te,we),w(F,p(B,{variant:"hyperlink",as:I,href:"/Privacy",children:"Privacy"}),ne,ve),w(F,p(B,{variant:"hyperlink",as:I,href:"https://github.com/bkaankose/Wino-Mail/tree/main?tab=GPL-3.0-1-ov-file#readme",target:"_blank",children:"Licence"}),Te,Se),y(),e})(),tn='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 2C5.01 2 4 3 4 4.25v15.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V4.25C20 3.01 19 2 17.75 2H6.25ZM5.5 4.25c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75v15.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V4.25ZM7.75 6.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM7 16.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM7.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"/></svg>',nn='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.42.8 1.05.8 1.71v9.31c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75v-5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5c0 .97-.78 1.75-1.75 1.75h-3.5C3.78 21 3 20.22 3 19.25v-9.3c0-.67.3-1.3.8-1.73l6.75-5.69Zm1.93 1.15a.75.75 0 0 0-.96 0l-6.75 5.7a.75.75 0 0 0-.27.56v9.31c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-5c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v5c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-9.3c0-.23-.1-.44-.27-.58l-6.75-5.7Z"/></svg>',rn='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75Zm0 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-1.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm9.25-2.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"/></svg>';var on=S("<img>"),sn=S("<header><div><!$><!/><nav></nav><div><!$><!/><!$><!/><!$><!/>");const ln=[{href:"/",name:"Home",Icon:nn},{href:"/blog",name:"Blog",Icon:He},{href:"/docs/overview",name:"Documentation",Icon:tn},{href:"/components/buttons",name:"Components"}],cn=()=>{const{toggleTheme:e}=me(Q);return(()=>{var t=T(sn),n=t.firstChild,o=n.firstChild,[r,s]=E(o.nextSibling),a=r.nextSibling,i=a.nextSibling,d=i.firstChild,[l,c]=E(d.nextSibling),u=l.nextSibling,[g,_]=E(u.nextSibling),v=g.nextSibling,[m,h]=E(v.nextSibling);return k(t,$(()=>({class:"x78zum5 x6s0dn4 xl56j7k xixxii4 x37h64w x13vifvy x1o0tod xfo81ep xh8yej3 xbktkl8 x9f619 x1fcnkbd x1rhq4ix xx83zyx x1ip0gqz"})),!1,!0),k(n,$(()=>({class:"x78zum5 x6s0dn4 xh8yej3 xqqc7ic x19bbpc0"})),!1,!0),w(n,p(I,$({href:"/"},()=>({class:"x78zum5 xl56j7k x6s0dn4 x1hl2dhg x1n2onr6"}),{get children(){return[(()=>{var f=T(on);return he(f,"src",be),k(f,$(()=>({class:"x1my54xf x14atkfc xlrawln"}),{alt:"Wino logo"}),!1,!1),y(),f})(),p(M,{variant:"subtitle",children:"Wino Mail"})]}})),r,s),k(a,$(()=>({class:"x78zum5 x6s0dn4 x13a6bvl x1v2ro7d x12lumcd x1xk1jr8"})),!1,!0),w(a,p(Me,{each:ln,children:f=>p(I,$({get href(){return f.href},end:!0,get activeClass(){return"x1qxxjar x16mavuf"}},()=>({class:"x78zum5 x6s0dn4 xl56j7k xj3mrj8 x1n2onr6 x1hl2dhg x1ctyx1t xy6zmz0 xqy1keh x17zd0t2 xm4a2va x1vzmc5h"}),{get children(){return[R(()=>R(()=>!!f.Icon)()&&p(q,{get icon(){return f.Icon}})),p(M,{variant:"body",get children(){return f.name}})]}}))})),k(i,$(()=>({class:"x78zum5 x6s0dn4 xfex06f x3psx0u"})),!1,!0),w(i,p(U,{as:"a",href:"https://discord.com/invite/windows-apps-hub-714581497222398064",target:"_blank",get children(){return p(q,{icon:re})}}),l,c),w(i,p(U,{as:"a",href:"https://github.com/bkaankose/Wino-Mail",target:"_blank",get children(){return p(q,{icon:re})}}),g,_),w(i,p(U,{onClick:()=>e(),get children(){return p(q,{icon:rn})}}),m,h),y(),t})()};var an=S("<div><!$><!/><div></div><!$><!/><div>");const un=e=>{const{theme:t}=me(Q);return(()=>{var n=T(an),o=n.firstChild,[r,s]=E(o.nextSibling),a=r.nextSibling,i=a.nextSibling,[d,l]=E(i.nextSibling),c=d.nextSibling;return k(n,$(()=>({class:"xg6iff7 xn2ks54 x78zum5 xdt5ytf x1n2onr6"})),!1,!0),w(n,p(cn,{}),r,s),k(a,$(()=>({class:"x98rzlu"})),!1,!0),w(a,()=>e.children),w(n,p(en,{}),d,l),k(c,$(()=>je(dn.background(t()))),!1,!1),y(),n})()},dn={background:e=>[{position:"xixxii4",inset:"x10a8y8t",insetInline:null,insetInlineStart:null,insetInlineEnd:null,left:null,right:null,insetBlock:null,top:null,bottom:null,width:"xh8yej3",height:"x5yr21d",transform:"x1gz8ohu",zIndex:"xuvdrym",backgroundImage:`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`==null?null:"x14gixet",backgroundSize:"x18d0r48",backgroundPosition:"x1xsqp64",backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:"xiy17q3",backgroundAttachment:"x1nr1p0w",$$css:!0},{"--backgroundImage":`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`!=null?`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`:void 0}]};var pn=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),hn=["clear","getItem","getAll","setItem","removeItem","key","getLength"],mn=e=>(e.withOptions=t=>hn.reduce((n,o)=>(typeof e[o]=="function"&&(n[o]=(...r)=>(r[e[o].length-1]=t,e[o](...r))),n),{get length(){return e.length},withOptions:n=>e.withOptions(n)}),e),fn={domain:"Domain",expires:"Expires",path:"Path",secure:"Secure",httpOnly:"HttpOnly",maxAge:"Max-Age",sameSite:"SameSite"};function gn(e){if(!e)return"";const t=Object.entries(e).map(([n,o])=>{const r=fn[n];if(r)return o instanceof Date?`${r}=${o.toUTCString()}`:typeof o=="boolean"?o?`${r}`:void 0:`${r}=${o}`}).filter(n=>!!n);return t.length!=0?`; ${t.join("; ")}`:""}function xn(e,t){const n=e.match(`(^|;)\\s*${t}\\s*=\\s*([^;]+)`)?.pop();return n!=null?decodeURIComponent(n):null}var N=mn(pn({_read:()=>document.cookie,_write:(e,t,n)=>{document.cookie=`${e}=${t}${gn(n)}`},getItem:(e,t)=>xn(N._read(t),e),setItem:(e,t,n)=>{N._write(e,t.replace(/[\u00c0-\uffff\&;]/g,o=>encodeURIComponent(o)),n)},removeItem:(e,t)=>{N._write(e,"deleted",{...t,expires:new Date(0)})},key:(e,t)=>{let n=null,o=0;return N._read(t).replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,s)=>(!n&&s&&o++===e&&(n=s),"")),n},getLength:e=>{let t=0;return N._read(e).replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,n=>(t+=n?1:0,"")),t},get length(){return this.getLength()}}));function bn(e,t={}){const n=t.storage||globalThis.localStorage,o=t.name||`storage-${De()}`;if(!n)return[e[0],e[1],null];const r=t.storageOptions,s=t.serialize||JSON.stringify.bind(JSON),a=t.deserialize||JSON.parse.bind(JSON),i=n.getItem(o,r),d=typeof e[0]=="function"?c=>{try{const u=a(c);e[1](()=>u)}catch{}}:c=>{try{const u=a(c);e[1](Rt(u))}catch{}};let l=!0;if(i instanceof Promise?i.then(c=>l&&c&&d(c)):i&&d(i),typeof t.sync?.[0]=="function"){const c=typeof e[0]=="function"?e[0]:()=>e[0];t.sync[0](u=>{u.key!==o||(u.url||globalThis.location.href)!==globalThis.location.href||u.newValue===s(K(c))||d(u.newValue)})}return[e[0],typeof e[0]=="function"?c=>{const u=e[1](c),g=c!=null?s(u):c;return t.sync?.[1](o,g),g!=null?n.setItem(o,g,r):n.removeItem(o,r),l=!1,u}:(...c)=>{e[1](...c);const u=s(K(()=>e[0]));t.sync?.[1](o,u),n.setItem(o,u,r),l=!1},i]}var $n=S("<div>");const _n="theme",wn=e=>{const[t,n]=bn(X(),{storage:N,name:_n});ze(()=>{t()||n(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});const o=()=>t()??"dark",r=()=>{n(o()==="light"?"dark":"light")},s={light:Yt,dark:Xt};return p(Q.Provider,{value:{theme:o,toggleTheme:r},get children(){var a=T($n);return k(a,$(()=>qe(s[o()])),!1,!0),w(a,()=>e.children),y(),a}})};function kn(){return p(St,{get base(){return Ze.base},root:e=>p(ye,{get children(){return[p(Pe,{children:"Wino Mail"}),p(wn,{get children(){return p(un,{get children(){return p(Fe,{get children(){return e.children}})}})}})]}}),get children(){return p(Jt,{})}})}var vn=S("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const En=e=>{const t="Error | Uncaught Client Exception";return p(Be,{fallback:n=>(console.error(n),[(()=>{var o=T(vn);return w(o,t),o})(),p(st,{code:500})]),get children(){return e.children}})};function Tn(e,t){return Ve(e,t)}function ue(e){return e.children}function Sn(){return p(ue,{get children(){return p(ue,{get children(){return p(En,{get children(){return p(kn,{})}})}})}})}Tn(()=>p(Sn,{}),document.getElementById("app"));const jn=void 0;export{jn as default};
