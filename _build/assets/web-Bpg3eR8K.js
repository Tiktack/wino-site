const u={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return be(this.context.count)},getNextContextId(){return be(this.context.count++)}};function be(e){const t=String(e),n=t.length-1;return u.context.id+(n?String.fromCharCode(96+n):"")+t}function I(e){u.context=e}function Ge(){return{...u.context,id:u.getNextContextId(),count:0}}const Ke=(e,t)=>e===t,ee=Symbol("solid-proxy"),$e=typeof Proxy=="function",Ye=Symbol("solid-track"),te={equals:Ke};let Y=null,Le=_e;const j=1,X=2,ve={owned:null,cleanups:null,context:null,owner:null},le={};var g=null;let c=null,Xe=null,w=null,N=null,C=null,ie=0;function G(e,t){const n=w,s=g,r=e.length===0,i=t===void 0?s:t,o=r?ve:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>A(()=>_(o)));g=o,w=null;try{return P(l,!0)}finally{w=n,g=s}}function M(e,t){t=t?Object.assign({},te,t):te;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(c&&c.running&&c.sources.has(n)?r=r(n.tValue):r=r(n.value)),Ve(n,r));return[He.bind(n),s]}function pe(e,t,n){const s=J(e,t,!0,j);K(s)}function F(e,t,n){const s=J(e,t,!1,j);K(s)}function je(e,t,n){Le=nt;const s=J(e,t,!1,j),r=B&&we(B);r&&(s.suspense=r),(!n||!n.render)&&(s.user=!0),C?C.push(s):K(s)}function O(e,t,n){n=n?Object.assign({},te,n):te;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,K(s),He.bind(s)}function We(e){return e&&typeof e=="object"&&"then"in e}function Qe(e,t,n){let s,r,i;arguments.length===1?(s=!0,r=e,i={}):(s=e,r=t,i={});let o=null,l=le,f=null,d=!1,h=!1,a="initialValue"in i,y=typeof s=="function"&&O(s);const m=new Set,[p,E]=(i.storage||M)(i.initialValue),[$,L]=M(void 0),[k,T]=M(void 0,{equals:!1}),[v,H]=M(a?"ready":"unresolved");u.context&&(f=u.getNextContextId(),i.ssrLoadFrom==="initial"?l=i.initialValue:u.load&&u.has(f)&&(l=u.load(f)));function V(b,x,S,R){return o===b&&(o=null,R!==void 0&&(a=!0),(b===l||x===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(R,{value:x})),l=le,c&&b&&d?(c.promises.delete(b),d=!1,P(()=>{c.running=!0,me(x,S)},!1)):me(x,S)),x}function me(b,x){P(()=>{x===void 0&&E(()=>b),H(x!==void 0?"errored":a?"ready":"unresolved"),L(x);for(const S of m.keys())S.decrement();m.clear()},!1)}function re(){const b=B&&we(B),x=p(),S=$();if(S!==void 0&&!o)throw S;return w&&!w.user&&b&&pe(()=>{k(),o&&(b.resolved&&c&&d?c.promises.add(o):m.has(b)||(b.increment(),m.add(b)))}),x}function oe(b=!0){if(b!==!1&&h)return;h=!1;const x=y?y():s;if(d=c&&c.running,x==null||x===!1){V(o,A(p));return}c&&o&&c.promises.delete(o);const S=l!==le?l:A(()=>r(x,{value:p(),refetching:b}));return We(S)?(o=S,"value"in S?(S.status==="success"?V(o,S.value,void 0,x):V(o,void 0,ce(S.value),x),S):(h=!0,queueMicrotask(()=>h=!1),P(()=>{H(a?"refreshing":"pending"),T()},!1),S.then(R=>V(S,R,void 0,x),R=>V(S,void 0,ce(R),x)))):(V(o,S,void 0,x),S)}return Object.defineProperties(re,{state:{get:()=>v()},error:{get:()=>$()},loading:{get(){const b=v();return b==="pending"||b==="refreshing"}},latest:{get(){if(!a)return re();const b=$();if(b&&!o)throw b;return p()}}}),y?pe(()=>oe(!1)):oe(!1),[re,{refetch:oe,mutate:E}]}function Vt(e){return P(e,!1)}function A(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function _t(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let d=0;d<e.length;d++)l[d]=e[d]()}else l=e();if(i)return i=!1,o;const f=A(()=>t(l,r,o));return r=l,f}}function Dt(e){je(()=>A(e))}function W(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Je(e,t){Y||(Y=Symbol("error")),g=J(void 0,void 0,!0),g.context={...g.context,[Y]:[t]},c&&c.running&&c.sources.add(g);try{return e()}catch(n){z(n)}finally{g=g.owner}}function ue(){return g}function ze(e,t){const n=g,s=w;g=e,w=null;try{return P(t,!0)}catch(r){z(r)}finally{g=n,w=s}}function Ft(e){if(c&&c.running)return e(),c.done;const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let s;return B&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),P(e,!1),w=g=null,s?s.done:void 0})}const[Bt,xe]=M(!1);function Ze(e){C.push.apply(C,e),e.length=0}function Ie(e,t){const n=Symbol("context");return{id:n,Provider:st(n),defaultValue:e}}function we(e){let t;return g&&g.context&&(t=g.context[e.id])!==void 0?t:e.defaultValue}function Me(e){const t=O(e),n=O(()=>ae(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let B;function et(){return B||(B=Ie())}function He(){const e=c&&c.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===j)K(this);else{const t=N;N=null,P(()=>se(this),!1),N=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function Ve(e,t,n){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(c){const r=c.running;(r||!n&&c.sources.has(e))&&(c.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&P(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=c&&c.running;o&&c.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?N.push(i):C.push(i),i.observers&&De(i)),o?i.tState=j:i.state=j)}if(N.length>1e6)throw N=[],new Error},!1)}return t}function K(e){if(!e.fn)return;_(e);const t=ie;Se(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,t),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{P(()=>{c&&(c.running=!0),w=g=e,Se(e,e.tValue,t),w=g=null},!1)})}function Se(e,t,n){let s;const r=g,i=w;w=g=e;try{s=e.fn(t)}catch(o){return e.pure&&(c&&c.running?(e.tState=j,e.tOwned&&e.tOwned.forEach(_),e.tOwned=void 0):(e.state=j,e.owned&&e.owned.forEach(_),e.owned=null)),e.updatedAt=n+1,z(o)}finally{w=i,g=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ve(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=j,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return c&&c.running&&(i.state=0,i.tState=s),g===null||g!==ve&&(c&&c.running&&g.pure?g.tOwned?g.tOwned.push(i):g.tOwned=[i]:g.owned?g.owned.push(i):g.owned=[i]),i}function ne(e){const t=c&&c.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===X)return se(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);){if(t&&c.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(c.disposed.has(r))return}if((t?e.tState:e.state)===j)K(e);else if((t?e.tState:e.state)===X){const r=N;N=null,P(()=>se(e,n[0]),!1),N=r}}}function P(e,t){if(N)return e();let n=!1;t||(N=[]),C?n=!0:C=[],ie++;try{const s=e();return tt(n),s}catch(s){n||(C=null),N=null,z(s)}}function tt(e){if(N&&(_e(N),N=null),e)return;let t;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,r=c.disposed;C.push.apply(C,c.effects),t=c.resolve;for(const i of C)"tState"in i&&(i.state=i.tState),delete i.tState;c=null,P(()=>{for(const i of r)_(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)_(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}xe(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,C),C=null,xe(!0);return}}const n=C;C=null,n.length&&P(()=>Le(n),!1),t&&t()}function _e(e){for(let t=0;t<e.length;t++)ne(e[t])}function nt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ne(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}I()}for(u.effects&&(u.done||!u.count)&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects),t=0;t<n;t++)ne(e[t])}function se(e,t){const n=c&&c.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===j?r!==t&&(!r.updatedAt||r.updatedAt<ie)&&ne(r):i===X&&se(r,t)}}}function De(e){const t=c&&c.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=X:s.state=X,s.pure?N.push(s):C.push(s),s.observers&&De(s))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)_(e.tOwned[t]);delete e.tOwned}if(c&&c.running&&e.pure)Fe(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0}function Fe(e,t){if(t||(e.tState=0,c.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Fe(e.owned[n])}function ce(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ae(e,t,n){try{for(const s of t)s(e)}catch(s){z(s,n&&n.owner||null)}}function z(e,t=g){const n=Y&&t&&t.context&&t.context[Y],s=ce(e);if(!n)throw s;C?C.push({fn(){Ae(s,n,t)},state:j}):Ae(s,n,t)}function ae(e){if(typeof e=="function"&&!e.length)return ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ae(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function st(e,t){return function(s){let r;return F(()=>r=A(()=>(g.context={...g.context,[e]:s.value},Me(()=>s.children))),void 0),r}}const it=Symbol("fallback");function Ce(e){for(let t=0;t<e.length;t++)e[t]()}function rt(e,t,n={}){let s=[],r=[],i=[],o=0,l=t.length>1?[]:null;return W(()=>Ce(i)),()=>{let f=e()||[],d=f.length,h,a;return f[Ye],A(()=>{let m,p,E,$,L,k,T,v,H;if(d===0)o!==0&&(Ce(i),i=[],s=[],r=[],o=0,l&&(l=[])),n.fallback&&(s=[it],r[0]=G(V=>(i[0]=V,n.fallback())),o=1);else if(o===0){for(r=new Array(d),a=0;a<d;a++)s[a]=f[a],r[a]=G(y);o=d}else{for(E=new Array(d),$=new Array(d),l&&(L=new Array(d)),k=0,T=Math.min(o,d);k<T&&s[k]===f[k];k++);for(T=o-1,v=d-1;T>=k&&v>=k&&s[T]===f[v];T--,v--)E[v]=r[T],$[v]=i[T],l&&(L[v]=l[T]);for(m=new Map,p=new Array(v+1),a=v;a>=k;a--)H=f[a],h=m.get(H),p[a]=h===void 0?-1:h,m.set(H,a);for(h=k;h<=T;h++)H=s[h],a=m.get(H),a!==void 0&&a!==-1?(E[a]=r[h],$[a]=i[h],l&&(L[a]=l[h]),a=p[a],m.set(H,a)):i[h]();for(a=k;a<d;a++)a in E?(r[a]=E[a],i[a]=$[a],l&&(l[a]=L[a],l[a](a))):r[a]=G(y);r=r.slice(0,o=d),s=f.slice(0)}return r});function y(m){if(i[a]=m,l){const[p,E]=M(a);return l[a]=E,t(f[a],p)}return t(f[a])}}}let Be=!1;function ot(){Be=!0}function lt(e,t){if(Be&&u.context){const n=u.context;I(Ge());const s=A(()=>e(t||{}));return I(n),s}return A(()=>e(t||{}))}function Z(){return!0}const de={get(e,t,n){return t===ee?n:e.get(t)},has(e,t){return t===ee?!0:e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function fe(e){return(e=typeof e=="function"?e():e)?e:{}}function ft(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Rt(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&ee in l,e[o]=typeof l=="function"?(t=!0,O(l)):l}if($e&&t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const f=fe(e[l])[o];if(f!==void 0)return f}},has(o){for(let l=e.length-1;l>=0;l--)if(o in fe(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(fe(e[l])));return[...new Set(o)]}},de);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const f=Object.getOwnPropertyNames(l);for(let d=f.length-1;d>=0;d--){const h=f[d];if(h==="__proto__"||h==="constructor")continue;const a=Object.getOwnPropertyDescriptor(l,h);if(!s[h])s[h]=a.get?{enumerable:!0,configurable:!0,get:ft.bind(n[h]=[a.get.bind(l)])}:a.value!==void 0?a:void 0;else{const y=n[h];y&&(a.get?y.push(a.get.bind(l)):a.value!==void 0&&y.push(()=>a.value))}}}const r={},i=Object.keys(s);for(let o=i.length-1;o>=0;o--){const l=i[o],f=s[l];f&&f.get?Object.defineProperty(r,l,f):r[l]=f?f.value:void 0}return r}function ut(e,...t){if($e&&ee in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},de));return i.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},de)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,f=0;for(const d of t)d.includes(r)&&(l=!0,o?s[f][r]=i.value:Object.defineProperty(s[f],r,i)),++f;l||(o?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function qt(e){let t,n;const s=r=>{const i=u.context;if(i){const[l,f]=M();u.count||(u.count=0),u.count++,(n||(n=e())).then(d=>{!u.done&&I(i),u.count--,f(()=>d.default),I()}),t=l}else if(!t){const[l]=Qe(()=>(n||(n=e())).then(f=>f.default));t=l}let o;return O(()=>(o=t())?A(()=>{if(!i||u.done)return o(r);const l=u.context;I(i);const f=o(r);return I(l),f}):"")};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let ct=0;function Ut(){return u.context?u.getNextContextId():`cl-${ct++}`}const Re=e=>`Stale read from <${e}>.`;function Gt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return O(rt(()=>e.each,e.children,t||void 0))}function Kt(e){const t=e.keyed,n=O(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return O(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?A(()=>r(t?s:()=>{if(!A(n))throw Re("Show");return e.when})):r}return e.fallback},void 0,void 0)}function Yt(e){let t=!1;const n=(i,o)=>(t?i[1]===o[1]:!i[1]==!o[1])&&i[2]===o[2],s=Me(()=>e.children),r=O(()=>{let i=s();Array.isArray(i)||(i=[i]);for(let o=0;o<i.length;o++){const l=i[o].when;if(l)return t=!!i[o].keyed,[o,l,i[o]]}return[-1]},void 0,{equals:n});return O(()=>{const[i,o,l]=r();if(i<0)return e.fallback;const f=l.children;return typeof f=="function"&&f.length>0?A(()=>f(t?o:()=>{if(A(r)[0]!==i)throw Re("Match");return l.when})):f},void 0,void 0)}function Xt(e){return e}let U;function Wt(){U&&[...U].forEach(e=>e())}function Qt(e){let t;u.context&&u.load&&(t=u.load(u.getContextId()));const[n,s]=M(t,void 0);return U||(U=new Set),U.add(s),W(()=>U.delete(s)),O(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?A(()=>i(r,()=>s())):i}return Je(()=>e.children,s)},void 0,void 0)}const at=Ie();function Jt(e){let t=0,n,s,r,i,o;const[l,f]=M(!1),d=et(),h={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:l,effects:[],resolved:!1},a=ue();if(u.context&&u.load){const p=u.getContextId();let E=u.load(p);if(E&&(typeof E!="object"||E.status!=="success"?r=E:u.gather(p)),r&&r!=="$$f"){const[$,L]=M(void 0,{equals:!1});i=$,r.then(()=>{if(u.done)return L();u.gather(p),I(s),L(),I()},k=>{o=k,L()})}}const y=we(at);y&&(n=y.register(h.inFallback));let m;return W(()=>m&&m()),lt(d.Provider,{value:h,get children(){return O(()=>{if(o)throw o;if(s=u.context,i)return i(),i=void 0;s&&r==="$$f"&&I();const p=O(()=>e.children);return O(E=>{const $=h.inFallback(),{showContent:L=!0,showFallback:k=!0}=n?n():{};if((!$||r&&r!=="$$f")&&L)return h.resolved=!0,m&&m(),m=s=r=void 0,Ze(h.effects),p();if(k)return m?E:G(T=>(m=T,s&&(I({id:s.id+"F",count:0}),s=void 0),e.fallback),a)})})}})}const dt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ht=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...dt]),gt=new Set(["innerHTML","textContent","innerText","children"]),yt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function mt(e,t){const n=wt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const bt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),pt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),xt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function St(e,t,n){let s=n.length,r=t.length,i=s,o=0,l=0,f=t[r-1].nextSibling,d=null;for(;o<r||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const h=i<s?l?n[l-1].nextSibling:n[i-l]:f;for(;l<i;)e.insertBefore(n[l++],h)}else if(i===l)for(;o<r;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[r-1]){const h=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],h),t[r]=n[i]}else{if(!d){d=new Map;let a=l;for(;a<i;)d.set(n[a],a++)}const h=d.get(t[o]);if(h!=null)if(l<h&&h<i){let a=o,y=1,m;for(;++a<r&&a<i&&!((m=d.get(t[a]))==null||m!==h+y);)y++;if(y>h-l){const p=t[o];for(;l<h;)e.insertBefore(n[l++],p)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Ee="_$DX_DELEGATE";function Oe(e,t,n,s={}){let r;return G(i=>{r=i,t===document?e():ge(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function zt(e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>A(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function At(e,t=window.document){const n=t[Ee]||(t[Ee]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,qe))}}function he(e,t,n){D(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ct(e,t,n,s){D(e)||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function Et(e,t,n){D(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Ot(e,t){D(e)||(t==null?e.removeAttribute("class"):e.className=t)}function kt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Nt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,o;for(i=0,o=r.length;i<o;i++){const l=r[i];!l||l==="undefined"||t[l]||(ke(e,l,!1),delete n[l])}for(i=0,o=s.length;i<o;i++){const l=s[i],f=!!t[l];!l||l==="undefined"||n[l]===f||!f||(ke(e,l,!0),n[l]=f)}return n}function Tt(e,t,n){if(!t)return n?he(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function Pt(e,t={},n,s){const r={};return s||F(()=>r.children=Q(e,t.children,r.children)),F(()=>typeof t.ref=="function"&&$t(t.ref,e)),F(()=>Lt(e,t,n,!0,r,!0)),r}function $t(e,t,n){return A(()=>e(t,n))}function ge(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Q(e,t,s,n);F(r=>Q(e,t(),r,n),s)}function Lt(e,t,n,s,r={},i=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=Ne(e,o,null,r[o],n,i,t)}for(const o in t){if(o==="children")continue;const l=t[o];r[o]=Ne(e,o,l,r[o],n,i,t)}}function vt(e,t,n={}){if(globalThis._$HY.done)return Oe(e,t,[...t.childNodes],n);u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=s=>globalThis._$HY.r[s],u.has=s=>s in globalThis._$HY.r,u.gather=s=>Pe(t,s),u.registry=new Map,u.context={id:n.renderId||"",count:0};try{return Pe(t,n.renderId),Oe(e,t,[...t.childNodes],n)}finally{u.context=null}}function jt(e){let t,n;return!D()||!(t=u.registry.get(n=Mt()))?e():(u.completed&&u.completed.add(t),u.registry.delete(n),t)}function Zt(e){let t=e,n=0,s=[];if(D(e))for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="$")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function en(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;if(t){for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),qe(s)}u.done&&(u.events=_$HY.events=null,u.completed=_$HY.completed=null)}}),u.events.queued=!0)}function D(e){return!!u.context&&!u.done&&(!e||e.isConnected)}function It(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ke(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Ne(e,t,n,s,r,i,o){let l,f,d,h,a;if(t==="style")return Tt(e,n,s);if(t==="classList")return Nt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const y=t.slice(3);s&&e.removeEventListener(y,s,typeof s!="function"&&s),n&&e.addEventListener(y,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const y=t.slice(10);s&&e.removeEventListener(y,s,!0),n&&e.addEventListener(y,n,!0)}else if(t.slice(0,2)==="on"){const y=t.slice(2).toLowerCase(),m=bt.has(y);if(!m&&s){const p=Array.isArray(s)?s[0]:s;e.removeEventListener(y,p)}(m||n)&&(kt(e,y,n,m),m&&At([y]))}else if(t.slice(0,5)==="attr:")he(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Et(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(d=gt.has(t))||!r&&((h=mt(t,e.tagName))||(f=ht.has(t)))||(l=e.nodeName.includes("-")||"is"in o)){if(a)t=t.slice(5),f=!0;else if(D(e))return n;t==="class"||t==="className"?Ot(e,n):l&&!f&&!d?e[It(t)]=n:e[h||t]=n}else{const y=r&&t.indexOf(":")>-1&&xt[t.split(":")[0]];y?Ct(e,y,t,n):he(e,yt[t]||t,n)}return n}function qe(e){if(u.registry&&u.events&&u.events.find(([f,d])=>d===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),o=()=>{const f=t[n];if(f&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?f.call(t,d,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),u.registry&&!u.done&&(u.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();i(f[0]);for(let d=0;d<f.length-2&&(t=f[d],!!o());d++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(s)}function Q(e,t,n,s,r){const i=D(e);if(i){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const h=n[d];h.nodeType===8&&h.data.slice(0,2)==="!$"?h.remove():f.push(h)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(i||o==="number"&&(t=t.toString(),t===n))return n;if(l){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=q(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(i)return n;n=q(e,n,s)}else{if(o==="function")return F(()=>{let f=t();for(;typeof f=="function";)f=f();n=Q(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(ye(f,t,n,r))return F(()=>n=Q(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let h=f[0];if(h.parentNode!==e)return n;const a=[h];for(;(h=h.nextSibling)!==s;)a.push(h);return n=a}if(f.length===0){if(n=q(e,n,s),l)return n}else d?n.length===0?Te(e,f,s):St(e,n,f):(n&&q(e),Te(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=q(e,n,s,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ye(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],f=n&&n[e.length],d;if(!(l==null||l===!0||l===!1))if((d=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=ye(e,l,f)||r;else if(d==="function")if(s){for(;typeof l=="function";)l=l();r=ye(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||r}else e.push(l),r=!0;else{const h=String(l);f&&f.nodeType===3&&f.data===h?e.push(f):e.push(document.createTextNode(h))}}return r}function Te(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function q(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const f=l.parentNode===e;!i&&!o?f?e.replaceChild(r,l):e.insertBefore(r,n):f&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function Pe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!u.registry.has(i)&&u.registry.set(i,r)}}function Mt(){return u.getNextContextId()}const tn=()=>{},nn=!1,Ht="http://www.w3.org/2000/svg";function Ue(e,t=!1){return t?document.createElementNS(Ht,e):document.createElement(e)}const sn=(...e)=>(ot(),vt(...e));function rn(e){const{useShadow:t}=e,n=document.createTextNode(""),s=()=>e.mount||document.body,r=ue();let i,o=!!u.context;return je(()=>{o&&(ue().user=o=!1),i||(i=ze(r,()=>O(()=>e.children)));const l=s();if(l instanceof HTMLHeadElement){const[f,d]=M(!1),h=()=>d(!0);G(a=>ge(l,()=>f()?a():i(),null)),W(h)}else{const f=Ue(e.isSVG?"g":"div",e.isSVG),d=t&&f.attachShadow?f.attachShadow({mode:"open"}):f;Object.defineProperty(f,"_$host",{get(){return n.parentNode},configurable:!0}),ge(d,i),l.appendChild(f),e.ref&&e.ref(f),W(()=>l.removeChild(f))}},void 0,{render:!o}),n}function on(e){const[t,n]=ut(e,["component"]),s=O(()=>t.component);return O(()=>{const r=s();switch(typeof r){case"function":return A(()=>r(n));case"string":const i=pt.has(r),o=u.context?jt():Ue(r,i);return Pt(o,n,i),o}})}export{ee as $,Ie as A,ut as B,ze as C,F as D,Qt as E,Gt as F,Ft as G,Vt as H,nn as I,tn as J,Wt as K,je as L,Xt as M,Nt as N,$t as O,rn as P,on as Q,Ot as R,Kt as S,O as a,lt as b,Me as c,G as d,M as e,W as f,ue as g,At as h,jt as i,Pt as j,ge as k,qt as l,Rt as m,Zt as n,_t as o,he as p,we as q,en as r,u as s,zt as t,A as u,Ut as v,Dt as w,Jt as x,sn as y,Yt as z};