const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/(home)-C7nXH_a0.js","assets/web-Cfx9MWSs.js","assets/index-CtGoWPIj.js","assets/Button-BFmKRz6v.js","assets/stylex-_HEqwSgu.js","assets/UKTBL2JL-BAf851Gh.js","assets/5WXHJDCZ-B9JQyimU.js","assets/TextBlock-D_DQy0FE.js","assets/components-Cc62qxTs.js","assets/routing-Bp5AkZHs.js","assets/Privacy-C9MHt0jr.js","assets/index-D2LHNhzx.js","assets/_...404_-Cp0514tc.js","assets/HttpStatusCode-DjTx85av.js","assets/about-cR75P1Ky.js","assets/blog(list)-wprInG6o.js","assets/wino-website-DG0rjNoF.js","assets/date-DOga6MM-.js","assets/blog(list)-C5RthLQB.css","assets/blog-CM1vZRjx.js","assets/components-CWQv3wcQ.js","assets/SidebarLayout-nH98KGM4.js","assets/ListItem-J0G99uok.js","assets/ListItem-BK4keOnL.css","assets/chevron_down_24_regular-yHl9yWR1.js","assets/index-C708Qsti.js","assets/E53DB7BS-nV7pOAUf.js","assets/JNCCF6MP-CctMGUSO.js","assets/index-Dqrt4mis.js","assets/chevron_down_24_regular-B7JU5ROy.css","assets/FluentIcon-CjWP5YtC.js","assets/news_24_regular-Bi3Wh5Cn.js","assets/docs-DvAd-jYd.js","assets/release-1-7-6-B6xxk5ZL.js","assets/release-1-9-0-pu1vlljV.js","assets/test-blog-2-DBrYtMGM.js","assets/test-blog-3-CbFWsnK3.js","assets/wino-website-BMtRIuZI.js","assets/Buttons-DGtqJFt8.js","assets/Checkboxes-CGoYVj2i.js","assets/VI7QYH27-DsFwFX96.js","assets/Checkboxes-D_cdgn4S.css","assets/Collapsibles-p7Eml5SP.js","assets/Collapsibles-DUFdNoLT.css","assets/ContentDialogs-Bmms7yJJ.js","assets/IconButtons-B73psfVG.js","assets/settings_24_regular-CqZmGw-_.js","assets/ListItems-D0WI25gz.js","assets/ProgressBars-K7WvnDue.js","assets/ProgressBars-BsjjwLrV.css","assets/ProgressRings-Fk5PY5v_.js","assets/ProgressRings-ZNCjigbr.css","assets/TextBlocks-DtIFTKrC.js","assets/ToggleSwitches-DcozX5cl.js","assets/ToggleSwitches-f77HgjvN.css","assets/install-HlvtS8bz.js","assets/overview-Ctgu6o73.js"])))=>i.map(i=>d[i]);
import{M as be,T as $e}from"./index-CtGoWPIj.js";import{c as _e,a as I,b as p,g as we,u as H,S as ce,o as ke,d as ve,e as Y,f as ae,s as j,h as Ee,$ as Te,i as S,j as w,m as $,k,r as P,t as y,l as Se,n as ye,p as ue,q as E,F as Pe,v as Ae,w as Ie,x as Re,E as Ce,y as Oe}from"./web-Cfx9MWSs.js";import{T as L}from"./TextBlock-D_DQy0FE.js";import{S as ee,I as W}from"./settings_24_regular-CqZmGw-_.js";import{F as V}from"./FluentIcon-CjWP5YtC.js";import{N as Ne}from"./news_24_regular-Bi3Wh5Cn.js";import{a as Le,p as Me}from"./stylex-_HEqwSgu.js";import{A as F}from"./components-Cc62qxTs.js";import{f as De,D as Fe}from"./date-DOga6MM-.js";import{B as q}from"./Button-BFmKRz6v.js";import{c as ze,a as Be,R as Ve,s as te,g as je,b as We,d as qe,m as Ue,k as Ze,e as He,f as Ke,n as Ge}from"./routing-Bp5AkZHs.js";import{H as Je}from"./HttpStatusCode-DjTx85av.js";import"./UKTBL2JL-BAf851Gh.js";import"./5WXHJDCZ-B9JQyimU.js";const U="Invariant Violation",{setPrototypeOf:Ye=function(e,t){return e.__proto__=t,e}}=Object;class X extends Error{framesToPop=1;name=U;constructor(t=U){super(typeof t=="number"?`${U}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Ye(this,X.prototype)}}function Z(e,t){if(!e)throw new X(t)}const Xe=/^[A-Za-z]:\//;function Qe(e=""){return e&&e.replace(/\\/g,"/").replace(Xe,t=>t.toUpperCase())}const et=/^[/\\]{2}/,tt=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,nt=/^[A-Za-z]:$/,rt=function(e){if(e.length===0)return".";e=Qe(e);const t=e.match(et),n=K(e),o=e[e.length-1]==="/";return e=ot(e,!n),e.length===0?n?"/":o?"./":".":(o&&(e+="/"),nt.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!K(e)?`/${e}`:e)},de=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":rt(t.replace(/\/\/+/g,"/"))};function ot(e,t){let n="",o=0,r=-1,s=0,a=null;for(let i=0;i<=e.length;++i){if(i<e.length)a=e[i];else{if(a==="/")break;a="/"}if(a==="/"){if(!(r===i-1||s===1))if(s===2){if(n.length<2||o!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const d=n.lastIndexOf("/");d===-1?(n="",o=0):(n=n.slice(0,d),o=n.length-1-n.lastIndexOf("/")),r=i,s=0;continue}else if(n.length>0){n="",o=0,r=i,s=0;continue}}t&&(n+=n.length>0?"/..":"..",o=2)}else n.length>0?n+=`/${e.slice(r+1,i)}`:n=e.slice(r+1,i),o=i-r-1;r=i,s=0}else a==="."&&s!==-1?++s:s=-1}return n}const K=function(e){return tt.test(e)};function st(e){return`virtual:${e}`}function it(e){return e.handler?.endsWith(".html")?K(e.handler)?e.handler:de(e.root,e.handler):`$vinxi/handler/${e.name}`}const lt=new Proxy({},{get(e,t){return Z(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:st(it({name:t})),baseURL:"/wino-site/_build",chunks:new Proxy({},{get(n,o){Z(typeof o=="string","Chunk expected");let r=de("/wino-site/_build",o+".mjs");return{import(){return import(r)},output:{path:r}}}}),inputs:new Proxy({},{get(n,o){Z(typeof o=="string","Input must be string");let r=window.manifest[o].output;return{async import(){return import(r)},async assets(){return window.manifest[o].assets},output:{path:r}}}})}}});globalThis.MANIFEST=lt;const ct=e=>t=>{const{base:n}=t,o=_e(()=>t.children),r=I(()=>ze(o(),t.base||""));let s;const a=Be(e,r,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),p(Ve.Provider,{value:a,get children(){return p(at,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[I(()=>(s=we())&&null),p(ut,{routerState:a,get branches(){return r()}})]}})}})};function at(e){const t=e.routerState.location,n=e.routerState.params,o=I(()=>e.preload&&H(()=>{te(!0),e.preload({params:n,location:t,intent:je()||"initial"}),te(!1)}));return p(ce,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>p(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function ut(e){const t=[];let n;const o=I(ke(e.routerState.matches,(r,s,a)=>{let i=s&&r.length===s.length;const d=[];for(let l=0,c=r.length;l<c;l++){const u=s&&s[l],g=r[l];a&&u&&g.route.key===u.route.key?d[l]=a[l]:(i=!1,t[l]&&t[l](),ve(_=>{t[l]=_,d[l]=We(e.routerState,d[l-1]||e.routerState.base,ne(()=>o()[l+1]),()=>e.routerState.matches()[l])}))}return t.splice(r.length).forEach(l=>l()),a&&i?a:(n=d[0],d)}));return ne(()=>o()&&n)()}const ne=e=>()=>p(ce,{get when(){return e()},keyed:!0,children:t=>p(qe.Provider,{value:t,get children(){return t.outlet()}})});function dt([e,t],n,o){return[e,r=>t(o(r))]}function pt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=dt(Y(n(e.get()),{equals:(r,s)=>r.value===s.value&&r.state===s.state}),void 0,r=>(!t&&e.set(r),j.registry&&!j.done&&(j.done=!0),r));return e.init&&ae(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),ct({signal:o,create:e.create,utils:e.utils})}function ht(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function mt(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const ft=new Map;function gt(e=!0,t=!1,n="/_server",o){return r=>{const s=r.base.path(),a=r.navigatorFactory(r.base);let i,d;function l(m){return m.namespaceURI==="http://www.w3.org/2000/svg"}function c(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const h=m.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const f=l(h),x=f?h.href.baseVal:h.href;if((f?h.target.baseVal:h.target)||!x&&!h.hasAttribute("state"))return;const T=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||T&&T.includes("external"))return;const R=f?new URL(x,document.baseURI):new URL(x);if(!(R.origin!==window.location.origin||s&&R.pathname&&!R.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,R]}function u(m){const h=c(m);if(!h)return;const[f,x]=h,B=r.parsePath(x.pathname+x.search+x.hash),T=f.getAttribute("state");m.preventDefault(),a(B,{resolve:!1,replace:f.hasAttribute("replace"),scroll:!f.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function g(m){const h=c(m);if(!h)return;const[f,x]=h;o&&(x.pathname=o(x.pathname)),r.preloadRoute(x,f.getAttribute("preload")!=="false")}function _(m){clearTimeout(i);const h=c(m);if(!h)return d=null;const[f,x]=h;d!==f&&(o&&(x.pathname=o(x.pathname)),i=setTimeout(()=>{r.preloadRoute(x,f.getAttribute("preload")!=="false"),d=f},20))}function v(m){if(m.defaultPrevented)return;let h=m.submitter&&m.submitter.hasAttribute("formaction")?m.submitter.getAttribute("formaction"):m.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const x=new URL(h,Ue);if(h=r.parsePath(x.pathname+x.search),!h.startsWith(n))return}if(m.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const f=ft.get(h);if(f){m.preventDefault();const x=new FormData(m.target,m.submitter);f.call({r,f:m.target},m.target.enctype==="multipart/form-data"?x:new URLSearchParams(x))}}Ee(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mousemove",_,{passive:!0}),document.addEventListener("focusin",g,{passive:!0}),document.addEventListener("touchstart",g,{passive:!0})),document.addEventListener("submit",v),ae(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mousemove",_),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",v)})}}function xt(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=Ke();return pt({get:t,set({value:o,replace:r,scroll:s,state:a}){r?window.history.replaceState(Ze(a),"",o):window.history.pushState(a,"",o),mt(decodeURIComponent(window.location.hash.slice(1)),s),He()},init:o=>ht(window,"popstate",Ge(o,r=>{if(r&&r<0)return!n.confirm(r);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:gt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}const bt=Symbol("store-raw"),$t=Symbol("store-node"),C=Symbol("store-has"),_t=Symbol("store-self");function z(e){let t;return e!=null&&typeof e=="object"&&(e[Te]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function G(e,t=new Set){let n,o,r,s;if(n=e!=null&&e[bt])return n;if(!z(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let a=0,i=e.length;a<i;a++)r=e[a],(o=G(r,t))!==r&&(e[a]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const a=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let d=0,l=a.length;d<l;d++)s=a[d],!i[s].get&&(r=e[s],(o=G(r,t))!==r&&(e[s]=o))}return e}function wt(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function re(e,t,n){if(e[t])return e[t];const[o,r]=Y(n,{equals:!1,internal:!0});return o.$=r,e[t]=o}function A(e,t,n,o=!1){if(!o&&e[t]===n)return;const r=e[t],s=e.length;n===void 0?(delete e[t],e[C]&&e[C][t]&&r!==void 0&&e[C][t].$()):(e[t]=n,e[C]&&e[C][t]&&r===void 0&&e[C][t].$());let a=wt(e,$t),i;if((i=re(a,t,r))&&i.$(()=>n),Array.isArray(e)&&e.length!==s){for(let d=e.length;d<s;d++)(i=a[d])&&i.$();(i=re(a,"length",s))&&i.$(e.length)}(i=a[_t])&&i.$()}const J=Symbol("store-root");function O(e,t,n,o,r){const s=t[n];if(e===s)return;const a=Array.isArray(e);if(n!==J&&(!z(e)||!z(s)||a!==Array.isArray(s)||r&&e[r]!==s[r])){A(t,n,e);return}if(a){if(e.length&&s.length&&(!o||r&&e[0]&&e[0][r]!=null)){let l,c,u,g,_,v,m,h;for(u=0,g=Math.min(s.length,e.length);u<g&&(s[u]===e[u]||r&&s[u]&&e[u]&&s[u][r]===e[u][r]);u++)O(e[u],s,u,o,r);const f=new Array(e.length),x=new Map;for(g=s.length-1,_=e.length-1;g>=u&&_>=u&&(s[g]===e[_]||r&&s[u]&&e[u]&&s[g][r]===e[_][r]);g--,_--)f[_]=s[g];if(u>_||u>g){for(c=u;c<=_;c++)A(s,c,e[c]);for(;c<e.length;c++)A(s,c,f[c]),O(e[c],s,c,o,r);s.length>e.length&&A(s,"length",e.length);return}for(m=new Array(_+1),c=_;c>=u;c--)v=e[c],h=r&&v?v[r]:v,l=x.get(h),m[c]=l===void 0?-1:l,x.set(h,c);for(l=u;l<=g;l++)v=s[l],h=r&&v?v[r]:v,c=x.get(h),c!==void 0&&c!==-1&&(f[c]=s[l],c=m[c],x.set(h,c));for(c=u;c<e.length;c++)c in f?(A(s,c,f[c]),O(e[c],s,c,o,r)):A(s,c,e[c])}else for(let l=0,c=e.length;l<c;l++)O(e[l],s,l,o,r);s.length>e.length&&A(s,"length",e.length);return}const i=Object.keys(e);for(let l=0,c=i.length;l<c;l++)O(e[i[l]],s,i[l],o,r);const d=Object.keys(s);for(let l=0,c=d.length;l<c;l++)e[d[l]]===void 0&&A(s,d[l],void 0)}function kt(e,t={}){const{merge:n,key:o="id"}=t,r=G(e);return s=>{if(!z(s)||!z(r))return r;const a=O(r,{[J]:s},J,n,o);return a===void 0?s:a}}function vt(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var Et=y("<style>"),Tt=y("<link>"),St=y("<script> "),yt=y("<noscript>");const Pt={style:e=>(()=>{var t=S(Et);return w(t,$(()=>e.attrs),!1,!0),k(t,()=>e.children),P(),t})(),link:e=>(()=>{var t=S(Tt);return w(t,$(()=>e.attrs),!1,!1),P(),t})(),script:e=>e.attrs.src?(()=>{var t=S(St);return w(t,$(()=>e.attrs,{get id(){return e.key}}),!1,!0),P(),t})():null,noscript:e=>(()=>{var t=S(yt);return w(t,$(()=>e.attrs),!1,!0),P(),t})()};function At(e,t){let{tag:n,attrs:{key:o,...r}={key:void 0},children:s}=e;return Pt[n]({attrs:{...r,nonce:t},key:o,children:s})}function It(e,t,n,o="default"){return Se(async()=>{{const s=(await e.import())[o],i=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&vt(i),{default:l=>[...i.map(c=>At(c)),p(s,l)]}}})}const M={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Rt(e={}){const t={options:e,rootNode:pe(),staticRoutesMap:{}},n=o=>e.strictTrailingSlash?o:o.replace(/\/$/,"")||"/";if(e.routes)for(const o in e.routes)oe(t,n(o),e.routes[o]);return{ctx:t,lookup:o=>Ct(t,n(o)),insert:(o,r)=>oe(t,n(o),r),remove:o=>Ot(t,n(o))}}function Ct(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const o=t.split("/"),r={};let s=!1,a=null,i=e.rootNode,d=null;for(let l=0;l<o.length;l++){const c=o[l];i.wildcardChildNode!==null&&(a=i.wildcardChildNode,d=o.slice(l).join("/"));const u=i.children.get(c);if(u===void 0){if(i&&i.placeholderChildren.length>1){const g=o.length-l;i=i.placeholderChildren.find(_=>_.maxDepth===g)||null}else i=i.placeholderChildren[0]||null;if(!i)break;i.paramName&&(r[i.paramName]=c),s=!0}else i=u}return(i===null||i.data===null)&&a!==null&&(i=a,r[i.paramName||"_"]=d,s=!0),i?s?{...i.data,params:s?r:void 0}:i.data:null}function oe(e,t,n){let o=!0;const r=t.split("/");let s=e.rootNode,a=0;const i=[s];for(const d of r){let l;if(l=s.children.get(d))s=l;else{const c=Nt(d);l=pe({type:c,parent:s}),s.children.set(d,l),c===M.PLACEHOLDER?(l.paramName=d==="*"?`_${a++}`:d.slice(1),s.placeholderChildren.push(l),o=!1):c===M.WILDCARD&&(s.wildcardChildNode=l,l.paramName=d.slice(3)||"_",o=!1),i.push(l),s=l}}for(const[d,l]of i.entries())l.maxDepth=Math.max(i.length-d,l.maxDepth||0);return s.data=n,o===!0&&(e.staticRoutesMap[t]=s),s}function Ot(e,t){let n=!1;const o=t.split("/");let r=e.rootNode;for(const s of o)if(r=r.children.get(s),!r)return n;if(r.data){const s=o.at(-1)||"";r.data=null,Object.keys(r.children).length===0&&r.parent&&(r.parent.children.delete(s),r.parent.wildcardChildNode=null,r.parent.placeholderChildren=[]),n=!0}return n}function pe(e={}){return{type:e.type||M.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Nt(e){return e.startsWith("**")?M.WILDCARD:e[0]===":"||e==="*"?M.PLACEHOLDER:M.NORMAL}const Lt="modulepreload",Mt=function(e){return"/wino-site/_build/"+e},se={},b=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(d=>{if(d=Mt(d),d in se)return;se[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Lt,l||(u.as="script"),u.crossOrigin="",u.href=d,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((g,_)=>{u.addEventListener("load",g),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})},he=[{page:!0,$component:{src:"src/routes/(home).tsx?pick=default&pick=$css",build:()=>b(()=>import("./(home)-C7nXH_a0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/(home).tsx?pick=default&pick=$css"].output.path)},path:"/(home)",filePath:"/home/runner/work/wino-site/wino-site/src/routes/(home).tsx"},{page:!0,$component:{src:"src/routes/Privacy.mdx?pick=$css",build:()=>b(()=>import("./Privacy-C9MHt0jr.js"),__vite__mapDeps([10,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/Privacy.mdx?pick=$css"].output.path)},path:"/Privacy",filePath:"/home/runner/work/wino-site/wino-site/src/routes/Privacy.mdx"},{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>b(()=>import("./_...404_-Cp0514tc.js"),__vite__mapDeps([12,1,2,13])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/wino-site/wino-site/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>b(()=>import("./about-cR75P1Ky.js"),__vite__mapDeps([14,1,2,8,9])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/wino-site/wino-site/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/blog(list).tsx?pick=default&pick=$css",build:()=>b(()=>import("./blog(list)-wprInG6o.js"),__vite__mapDeps([15,16,11,1,7,4,2,3,5,6,17,9,8,18])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog(list).tsx?pick=default&pick=$css"].output.path)},path:"/blog(list)",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog(list).tsx"},{page:!0,$component:{src:"src/routes/blog.tsx?pick=default&pick=$css",build:()=>b(()=>import("./blog-CM1vZRjx.js"),__vite__mapDeps([19,16,11,1,7,4,9])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog.tsx?pick=default&pick=$css"].output.path)},path:"/blog",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog.tsx"},{page:!0,$component:{src:"src/routes/components.tsx?pick=default&pick=$css",build:()=>b(()=>import("./components-CWQv3wcQ.js"),__vite__mapDeps([20,21,1,22,23,24,25,26,27,6,5,28,29,30,4,9,31])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components.tsx?pick=default&pick=$css"].output.path)},path:"/components",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components.tsx"},{page:!0,$component:{src:"src/routes/docs.tsx?pick=default&pick=$css",build:()=>b(()=>import("./docs-DvAd-jYd.js"),__vite__mapDeps([32,21,1,22,23,24,25,26,27,6,5,28,29,30,4,9])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs.tsx?pick=default&pick=$css"].output.path)},path:"/docs",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs.tsx"},{page:!0,$component:{src:"src/routes/blog/release-1-7-6.mdx?pick=$css",build:()=>b(()=>import("./release-1-7-6-B6xxk5ZL.js"),__vite__mapDeps([33,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/release-1-7-6.mdx?pick=$css"].output.path)},path:"/blog/release-1-7-6",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/release-1-7-6.mdx"},{page:!0,$component:{src:"src/routes/blog/release-1-9-0.mdx?pick=$css",build:()=>b(()=>import("./release-1-9-0-pu1vlljV.js"),__vite__mapDeps([34,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/release-1-9-0.mdx?pick=$css"].output.path)},path:"/blog/release-1-9-0",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/release-1-9-0.mdx"},{page:!0,$component:{src:"src/routes/blog/test-blog-2.mdx?pick=$css",build:()=>b(()=>import("./test-blog-2-DBrYtMGM.js"),__vite__mapDeps([35,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/test-blog-2.mdx?pick=$css"].output.path)},path:"/blog/test-blog-2",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/test-blog-2.mdx"},{page:!0,$component:{src:"src/routes/blog/test-blog-3.mdx?pick=$css",build:()=>b(()=>import("./test-blog-3-CbFWsnK3.js"),__vite__mapDeps([36,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/test-blog-3.mdx?pick=$css"].output.path)},path:"/blog/test-blog-3",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/test-blog-3.mdx"},{page:!0,$component:{src:"src/routes/blog/wino-website.mdx?pick=$css",build:()=>b(()=>import("./wino-website-BMtRIuZI.js"),__vite__mapDeps([37,11,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/blog/wino-website.mdx?pick=$css"].output.path)},path:"/blog/wino-website",filePath:"/home/runner/work/wino-site/wino-site/src/routes/blog/wino-website.mdx"},{page:!0,$component:{src:"src/routes/components/Buttons.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Buttons-DGtqJFt8.js"),__vite__mapDeps([38,1,2,3,4,5,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Buttons.tsx?pick=default&pick=$css"].output.path)},path:"/components/Buttons",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Buttons.tsx"},{page:!0,$component:{src:"src/routes/components/Checkboxes.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Checkboxes-CGoYVj2i.js"),__vite__mapDeps([39,1,2,25,30,4,40,27,6,28,41])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Checkboxes.tsx?pick=default&pick=$css"].output.path)},path:"/components/Checkboxes",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Checkboxes.tsx"},{page:!0,$component:{src:"src/routes/components/Collapsibles.tsx?pick=default&pick=$css",build:()=>b(()=>import("./Collapsibles-p7Eml5SP.js"),__vite__mapDeps([42,1,2,24,25,26,27,6,5,28,29,30,4,43])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/Collapsibles.tsx?pick=default&pick=$css"].output.path)},path:"/components/Collapsibles",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/Collapsibles.tsx"},{page:!0,$component:{src:"src/routes/components/ContentDialogs.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ContentDialogs-Bmms7yJJ.js"),__vite__mapDeps([44,1,2,3,4,5,6,26,27,28,7])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ContentDialogs.tsx?pick=default&pick=$css"].output.path)},path:"/components/ContentDialogs",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ContentDialogs.tsx"},{page:!0,$component:{src:"src/routes/components/IconButtons.tsx?pick=default&pick=$css",build:()=>b(()=>import("./IconButtons-B73psfVG.js"),__vite__mapDeps([45,1,2,46,4,5,6,30])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/IconButtons.tsx?pick=default&pick=$css"].output.path)},path:"/components/IconButtons",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/IconButtons.tsx"},{page:!0,$component:{src:"src/routes/components/ListItems.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ListItems-D0WI25gz.js"),__vite__mapDeps([47,1,2,22,23])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ListItems.tsx?pick=default&pick=$css"].output.path)},path:"/components/ListItems",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ListItems.tsx"},{page:!0,$component:{src:"src/routes/components/ProgressBars.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ProgressBars-K7WvnDue.js"),__vite__mapDeps([48,1,2,49])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ProgressBars.tsx?pick=default&pick=$css"].output.path)},path:"/components/ProgressBars",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ProgressBars.tsx"},{page:!0,$component:{src:"src/routes/components/ProgressRings.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ProgressRings-Fk5PY5v_.js"),__vite__mapDeps([50,1,2,51])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ProgressRings.tsx?pick=default&pick=$css"].output.path)},path:"/components/ProgressRings",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ProgressRings.tsx"},{page:!0,$component:{src:"src/routes/components/TextBlocks.tsx?pick=default&pick=$css",build:()=>b(()=>import("./TextBlocks-DtIFTKrC.js"),__vite__mapDeps([52,1,2,7,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/TextBlocks.tsx?pick=default&pick=$css"].output.path)},path:"/components/TextBlocks",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/TextBlocks.tsx"},{page:!0,$component:{src:"src/routes/components/ToggleSwitches.tsx?pick=default&pick=$css",build:()=>b(()=>import("./ToggleSwitches-DcozX5cl.js"),__vite__mapDeps([53,1,2,40,27,6,54])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/components/ToggleSwitches.tsx?pick=default&pick=$css"].output.path)},path:"/components/ToggleSwitches",filePath:"/home/runner/work/wino-site/wino-site/src/routes/components/ToggleSwitches.tsx"},{page:!0,$component:{src:"src/routes/docs/install.tsx?pick=default&pick=$css",build:()=>b(()=>import("./install-HlvtS8bz.js"),__vite__mapDeps([55,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs/install.tsx?pick=default&pick=$css"].output.path)},path:"/docs/install",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs/install.tsx"},{page:!0,$component:{src:"src/routes/docs/overview.tsx?pick=default&pick=$css",build:()=>b(()=>import("./overview-Ctgu6o73.js"),__vite__mapDeps([56,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/docs/overview.tsx?pick=default&pick=$css"].output.path)},path:"/docs/overview",filePath:"/home/runner/work/wino-site/wino-site/src/routes/docs/overview.tsx"}],Dt=Ft(he.filter(e=>e.page));function Ft(e){function t(n,o,r,s){const a=Object.values(n).find(i=>r.startsWith(i.id+"/"));return a?(t(a.children||(a.children=[]),o,r.slice(a.id.length)),n):(n.push({...o,id:r,path:r.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,o)=>n.path.length-o.path.length).reduce((n,o)=>t(n,o,o.path,o.path),[])}function zt(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Rt({routes:he.reduce((e,t)=>{if(!zt(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(o,r)=>`**:${r}`).split("/").map(o=>o.startsWith(":")||o.startsWith("*")?o:encodeURIComponent(o)).join("/");if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Bt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&It(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return Dt.map(e)}let ie;const Vt=()=>ie||(ie=Bt()),jt={$$css:!0,xrcsd40:"xph554m xrcsd40"},Wt={$$css:!0,xrcsd40:"x160b71z xrcsd40"},qt='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.42.8 1.05.8 1.71v9.31c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75v-5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5c0 .97-.78 1.75-1.75 1.75h-3.5C3.78 21 3 20.22 3 19.25v-9.3c0-.67.3-1.3.8-1.73l6.75-5.69Zm1.93 1.15a.75.75 0 0 0-.96 0l-6.75 5.7a.75.75 0 0 0-.27.56v9.31c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-5c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v5c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-9.3c0-.23-.1-.44-.27-.58l-6.75-5.7Z"/></svg>',Ut='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 2C5.01 2 4 3 4 4.25v15.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V4.25C20 3.01 19 2 17.75 2H6.25ZM5.5 4.25c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75v15.5c0 .41-.34.75-.75.75H6.25a.75.75 0 0 1-.75-.75V4.25ZM7.75 6.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM7 16.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM7.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"/></svg>',Zt='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75Zm0 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-1.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm9.25-2.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"/></svg>',Ht=e=>new Proxy({},{get:()=>{throw new Error(e)}}),Q=ye(Ht("ThemeContext is used outside of its Provider"));var Kt=y("<img src=/logo.png>"),Gt=y("<header><div><!$><!/><nav></nav><div><!$><!/><!$><!/><!$><!/>");const Jt=[{href:"/",name:"Home",Icon:qt},{href:"/blog",name:"Blog",Icon:Ne},{href:"/docs/overview",name:"Documentation",Icon:Ut},{href:"/components/buttons",name:"Components"}],Yt=()=>{const{toggleTheme:e}=ue(Q);return(()=>{var t=S(Gt),n=t.firstChild,o=n.firstChild,[r,s]=E(o.nextSibling),a=r.nextSibling,i=a.nextSibling,d=i.firstChild,[l,c]=E(d.nextSibling),u=l.nextSibling,[g,_]=E(u.nextSibling),v=g.nextSibling,[m,h]=E(v.nextSibling);return w(t,$(()=>({class:"x78zum5 x6s0dn4 xl56j7k xixxii4 x37h64w x13vifvy x1o0tod xfo81ep xh8yej3 xbktkl8 x9f619 x1fcnkbd x1rhq4ix xx83zyx x1ip0gqz"})),!1,!0),w(n,$(()=>({class:"x78zum5 x6s0dn4 xh8yej3 x186ixgm xqqc7ic x19bbpc0"})),!1,!0),k(n,p(F,$({href:"/"},()=>({class:"x78zum5 xl56j7k x6s0dn4 x1hl2dhg x1n2onr6"}),{get children(){return[(()=>{var f=S(Kt);return w(f,$(()=>({class:"x1my54xf x14atkfc xlrawln"}),{alt:"Wino logo"}),!1,!1),P(),f})(),p(L,{variant:"subtitle",children:"Wino Mail"})]}})),r,s),w(a,$(()=>({class:"x78zum5 x6s0dn4 x13a6bvl x1v2ro7d x12lumcd x1xk1jr8"})),!1,!0),k(a,p(Pe,{each:Jt,children:f=>p(F,$({get href(){return f.href},end:!0,get activeClass(){return"x1qxxjar x16mavuf"}},()=>({class:"x78zum5 x6s0dn4 xl56j7k xj3mrj8 x1n2onr6 x1hl2dhg x1ctyx1t xy6zmz0 xqy1keh x17zd0t2 xm4a2va x1vzmc5h"}),{get children(){return[I(()=>I(()=>!!f.Icon)()&&p(V,{get icon(){return f.Icon}})),p(L,{variant:"body",get children(){return f.name}})]}}))})),w(i,$(()=>({class:"x78zum5 x6s0dn4 xfex06f x3psx0u"})),!1,!0),k(i,p(W,{as:"a",href:"https://discord.com/invite/windows-apps-hub-714581497222398064",target:"_blank",get children(){return p(V,{icon:ee})}}),l,c),k(i,p(W,{as:"a",href:"https://github.com/bkaankose/Wino-Mail",target:"_blank",get children(){return p(V,{icon:ee})}}),g,_),k(i,p(W,{onClick:()=>e(),get children(){return p(V,{icon:Zt})}}),m,h),P(),t})()};var Xt=y("<footer><div><div><img src=/logo.png><!$><!/></div><!$><!/></div><div><!$><!/><!$><!/><!$><!/></div><div><!$><!/><!$><!/>");const Qt=()=>(()=>{var e=S(Xt),t=e.firstChild,n=t.firstChild,o=n.firstChild,r=o.nextSibling,[s,a]=E(r.nextSibling),i=n.nextSibling,[d,l]=E(i.nextSibling),c=t.nextSibling,u=c.firstChild,[g,_]=E(u.nextSibling),v=g.nextSibling,[m,h]=E(v.nextSibling),f=m.nextSibling,[x,B]=E(f.nextSibling),T=c.nextSibling,R=T.firstChild,[D,me]=E(R.nextSibling),fe=D.nextSibling,[ge,xe]=E(fe.nextSibling);return w(e,$(()=>({class:"x1rhq4ix x78zum5 x1l1ennw xh8yej3 x1ybamxr x1e1m7ul x1ey2m1c"})),!1,!0),w(t,$(()=>({class:"x78zum5 xdt5ytf x13z6uf9"})),!1,!0),w(n,$(()=>({class:"x78zum5 x6s0dn4 x13z6uf9"})),!1,!0),w(o,$(()=>({class:"xs5h3dt"}),{alt:"Wino Mail Logo"}),!1,!1),k(n,p(L,{variant:"subtitle",children:"Wino Mail"}),s,a),k(t,p(L,$(()=>({class:"x1m56qbw xdba91d"}),{get children(){return["Copyright (c) ",I(()=>De(new Date,Fe.Year))," Wino"]}})),d,l),w(c,$(()=>({class:"x78zum5 xdt5ytf xvh977a"})),!1,!0),k(c,p(L,$(()=>({class:"xq068xy x1m56qbw"}),{children:"Contribute"})),g,_),k(c,p(q,{variant:"hyperlink",as:F,href:"https://github.com/bkaankose/Wino-Mail/issues/new/choose",target:"_blank",children:"GitHub Issue"}),m,h),k(c,p(q,{variant:"hyperlink",as:F,href:"https://github.com/bkaankose/Wino-Mail/blob/main/CONTRIBUTING.md",target:"_blank",children:"Contribution Guideline"}),x,B),w(T,$(()=>({class:"x78zum5 xdt5ytf xvh977a"})),!1,!0),k(T,p(L,$(()=>({class:"xq068xy x1m56qbw"}),{children:"Support"})),D,me),k(T,p(q,{variant:"hyperlink",as:F,href:"/Privacy",children:"Privacy"}),ge,xe),P(),e})();var en=y("<div><!$><!/><div></div><!$><!/><div>");const tn=e=>{const{theme:t}=ue(Q);return(()=>{var n=S(en),o=n.firstChild,[r,s]=E(o.nextSibling),a=r.nextSibling,i=a.nextSibling,[d,l]=E(i.nextSibling),c=d.nextSibling;return w(n,$(()=>({class:"xg6iff7 xn2ks54 x78zum5 xdt5ytf x1n2onr6"})),!1,!0),k(n,p(Yt,{}),r,s),w(a,$(()=>({class:"x98rzlu"})),!1,!0),k(a,()=>e.children),k(n,p(Qt,{}),d,l),w(c,$(()=>Le(nn.background(t()))),!1,!1),P(),n})()},nn={background:e=>[{position:"xixxii4",inset:"x10a8y8t",insetInline:null,insetInlineStart:null,insetInlineEnd:null,left:null,right:null,insetBlock:null,top:null,bottom:null,width:"xh8yej3",height:"x5yr21d",transform:"x1gz8ohu",zIndex:"xuvdrym",backgroundImage:`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`==null?null:"x14gixet",backgroundSize:"x18d0r48",backgroundPosition:"x1xsqp64",backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:"xiy17q3",backgroundAttachment:"x1nr1p0w",$$css:!0},{"--backgroundImage":`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`!=null?`url('https://fluent-svelte.vercel.app/bloom-mica-${e}.png')`:void 0}]};var rn=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),on=["clear","getItem","getAll","setItem","removeItem","key","getLength"],sn=e=>(e.withOptions=t=>on.reduce((n,o)=>(typeof e[o]=="function"&&(n[o]=(...r)=>(r[e[o].length-1]=t,e[o](...r))),n),{get length(){return e.length},withOptions:n=>e.withOptions(n)}),e),ln={domain:"Domain",expires:"Expires",path:"Path",secure:"Secure",httpOnly:"HttpOnly",maxAge:"Max-Age",sameSite:"SameSite"};function cn(e){if(!e)return"";const t=Object.entries(e).map(([n,o])=>{const r=ln[n];if(r)return o instanceof Date?`${r}=${o.toUTCString()}`:typeof o=="boolean"?o?`${r}`:void 0:`${r}=${o}`}).filter(n=>!!n);return t.length!=0?`; ${t.join("; ")}`:""}function an(e,t){const n=e.match(`(^|;)\\s*${t}\\s*=\\s*([^;]+)`)?.pop();return n!=null?decodeURIComponent(n):null}var N=sn(rn({_read:()=>document.cookie,_write:(e,t,n)=>{document.cookie=`${e}=${t}${cn(n)}`},getItem:(e,t)=>an(N._read(t),e),setItem:(e,t,n)=>{N._write(e,t.replace(/[\u00c0-\uffff\&;]/g,o=>encodeURIComponent(o)),n)},removeItem:(e,t)=>{N._write(e,"deleted",{...t,expires:new Date(0)})},key:(e,t)=>{let n=null,o=0;return N._read(t).replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,s)=>(!n&&s&&o++===e&&(n=s),"")),n},getLength:e=>{let t=0;return N._read(e).replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,n=>(t+=n?1:0,"")),t},get length(){return this.getLength()}}));function un(e,t={}){const n=t.storage||globalThis.localStorage,o=t.name||`storage-${Ae()}`;if(!n)return[e[0],e[1],null];const r=t.storageOptions,s=t.serialize||JSON.stringify.bind(JSON),a=t.deserialize||JSON.parse.bind(JSON),i=n.getItem(o,r),d=typeof e[0]=="function"?c=>{try{const u=a(c);e[1](()=>u)}catch{}}:c=>{try{const u=a(c);e[1](kt(u))}catch{}};let l=!0;if(i instanceof Promise?i.then(c=>l&&c&&d(c)):i&&d(i),typeof t.sync?.[0]=="function"){const c=typeof e[0]=="function"?e[0]:()=>e[0];t.sync[0](u=>{u.key!==o||(u.url||globalThis.location.href)!==globalThis.location.href||u.newValue===s(H(c))||d(u.newValue)})}return[e[0],typeof e[0]=="function"?c=>{const u=e[1](c),g=c!=null?s(u):c;return t.sync?.[1](o,g),g!=null?n.setItem(o,g,r):n.removeItem(o,r),l=!1,u}:(...c)=>{e[1](...c);const u=s(H(()=>e[0]));t.sync?.[1](o,u),n.setItem(o,u,r),l=!1},i]}var dn=y("<div>");const pn="theme",hn=e=>{const[t,n]=un(Y(),{storage:N,name:pn});Ie(()=>{t()||n(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});const o=()=>t()??"dark",r=()=>{n(o()==="light"?"dark":"light")},s={light:jt,dark:Wt};return p(Q.Provider,{value:{theme:o,toggleTheme:r},get children(){var a=S(dn);return w(a,$(()=>Me(s[o()])),!1,!0),k(a,()=>e.children),P(),a}})};function mn(){return p(xt,{get base(){return"/wino-site/"},root:e=>p(be,{get children(){return[p($e,{children:"Wino Mail"}),p(hn,{get children(){return p(tn,{get children(){return p(Re,{get children(){return e.children}})}})}})]}}),get children(){return p(Vt,{})}})}var fn=y("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const gn=e=>{const t="Error | Uncaught Client Exception";return p(Ce,{fallback:n=>(console.error(n),[(()=>{var o=S(fn);return k(o,t),o})(),p(Je,{code:500})]),get children(){return e.children}})};function xn(e,t){return Oe(e,t)}function le(e){return e.children}function bn(){return p(le,{get children(){return p(le,{get children(){return p(gn,{get children(){return p(mn,{})}})}})}})}xn(()=>p(bn,{}),document.getElementById("app"));const On=void 0;export{On as default};
