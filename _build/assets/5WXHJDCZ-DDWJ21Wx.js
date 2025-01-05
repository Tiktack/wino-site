import{m,e as E,N as y,C as S,b as A,L}from"./web-C1Cq8qCU.js";function T(t){return(...e)=>{for(const n of t)n&&n(...e)}}var k=t=>typeof t=="function"&&!t.length?t():t;function q(t,...e){return typeof t=="function"?t(...e):t}function G(...t){return T(t)}function $(t,e){const n=[...t],o=n.indexOf(e);return o!==-1&&n.splice(o,1),n}function v(t){return Object.prototype.toString.call(t)==="[object String]"}function D(t){return typeof t=="function"}function z(t){return e=>`${t()}-${e}`}function Y(t,e){return t?t===e||t.contains(e):!1}function N(t,e=!1){const{activeElement:n}=l(t);if(!n?.nodeName)return null;if(b(n)&&n.contentDocument)return N(n.contentDocument.body,e);if(e){const o=n.getAttribute("aria-activedescendant");if(o){const r=l(n).getElementById(o);if(r)return r}}return n}function l(t){return t?t.ownerDocument||t:document}function b(t){return t.tagName==="IFRAME"}var P=(t=>(t.Escape="Escape",t.Enter="Enter",t.Tab="Tab",t.Space=" ",t.ArrowDown="ArrowDown",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.ArrowUp="ArrowUp",t.End="End",t.Home="Home",t.PageDown="PageDown",t.PageUp="PageUp",t))(P||{});function x(t){return typeof window<"u"&&window.navigator!=null?t.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function M(){return x(/^Mac/i)}function C(t,e){return e&&(D(e)?e(t):e[0](e[1],t)),t?.defaultPrevented}function J(t){return e=>{for(const n of t)C(e,n)}}function Q(t){return M()?t.metaKey&&!t.ctrlKey:t.ctrlKey&&!t.metaKey}function X(t){if(t)if(H())t.focus({preventScroll:!0});else{const e=I(t);t.focus(),V(e)}}var s=null;function H(){if(s==null){s=!1;try{document.createElement("div").focus({get preventScroll(){return s=!0,!0}})}catch{}}return s}function I(t){let e=t.parentNode;const n=[],o=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==o;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&n.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return o instanceof HTMLElement&&n.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),n}function V(t){for(const{element:e,scrollTop:n,scrollLeft:o}of t)e.scrollTop=n,e.scrollLeft=o}var U=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],g=`${U.join(":not([hidden]),")},[tabindex]:not([disabled]):not([hidden])`;function _(t,e){const o=Array.from(t.querySelectorAll(g)).filter(u);return e&&u(t)&&o.unshift(t),o.forEach((r,c)=>{if(b(r)&&r.contentDocument){const a=r.contentDocument.body,h=_(a,!1);o.splice(c,1,...h)}}),o}function u(t){return j(t)&&!R(t)}function j(t){return t.matches(g)&&w(t)}function R(t){return Number.parseInt(t.getAttribute("tabindex")||"0",10)<0}function w(t,e){return t.nodeName!=="#comment"&&F(t)&&O(t,e)&&(!t.parentElement||w(t.parentElement,t))}function F(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;const{display:e,visibility:n}=t.style;let o=e!=="none"&&n!=="hidden"&&n!=="collapse";if(o){if(!t.ownerDocument.defaultView)return o;const{getComputedStyle:r}=t.ownerDocument.defaultView,{display:c,visibility:a}=r(t);o=c!=="none"&&a!=="hidden"&&a!=="collapse"}return o}function O(t,e){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}function Z(){}function K(t,e){return m(t,e)}var i=new Map,f=new Set;function d(){if(typeof window>"u")return;const t=n=>{if(!n.target)return;let o=i.get(n.target);o||(o=new Set,i.set(n.target,o),n.target.addEventListener("transitioncancel",e)),o.add(n.propertyName)},e=n=>{if(!n.target)return;const o=i.get(n.target);if(o&&(o.delete(n.propertyName),o.size===0&&(n.target.removeEventListener("transitioncancel",e),i.delete(n.target)),i.size===0)){for(const r of f)r();f.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",e)}typeof document<"u"&&(document.readyState!=="loading"?d():document.addEventListener("DOMContentLoaded",d));var tt={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function et(t,e){const[n,o]=E(p(e?.()));return y(()=>{o(t()?.tagName.toLowerCase()||p(e?.()))}),n}function p(t){return v(t)?t:void 0}function nt(t){const[e,n]=S(t,["as"]);if(!e.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return A(L,m(n,{get component(){return e.as}}))}var B=Object.defineProperty,ot=(t,e)=>{for(var n in e)B(t,n,{get:e[n],enumerable:!0})};export{P as E,nt as P,ot as _,G as a,k as b,C as c,z as d,Y as e,Q as f,l as g,J as h,D as i,N as j,X as k,j as l,K as m,Z as n,_ as o,et as p,q,$ as r,tt as v};
