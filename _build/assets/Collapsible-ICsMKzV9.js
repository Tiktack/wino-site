import{e as u,B as l,x as N,C,o as I,f as $,b as i,m as c,S,w as T,a as k,A as j,q as B,i as q,j as A,r as E,t as F}from"./web-NOoGXgWu.js";import{a as h}from"./stylex-lfbtzg0Y.js";import{c as H}from"./E53DB7BS-DqCLO6aj.js";import{B as z}from"./UKTBL2JL-DWmBOj33.js";import{c as L,a as G}from"./JNCCF6MP-DWNd54kF.js";import{_ as U,m as P,P as R,a as W,d as X,c as Y}from"./5WXHJDCZ-Cv7SIjPi.js";import{s as Z}from"./index-lOGEzFrt.js";const ie='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>';var J={};U(J,{Collapsible:()=>K,Content:()=>b,Root:()=>x,Trigger:()=>v});var _=j();function M(){const n=B(_);if(n===void 0)throw new Error("[kobalte]: `useCollapsibleContext` must be used within a `Collapsible.Root` component");return n}function b(n){const[e,o]=u(),t=M(),d=P({id:t.generateId("content")},n),[a,m]=l(d,["ref","id","style"]),{present:s}=Z({show:t.shouldMount,element:()=>e()??null}),[p,f]=u(0),[g,D]=u(0);let w=t.isOpen()||s();return N(()=>{const r=requestAnimationFrame(()=>{w=!1});$(()=>{cancelAnimationFrame(r)})}),C(I(s,()=>{if(!e())return;e().style.transitionDuration="0s",e().style.animationName="none";const r=e().getBoundingClientRect();f(r.height),D(r.width),w||(e().style.transitionDuration="",e().style.animationName="")})),C(I(t.isOpen,r=>{!r&&e()&&(e().style.transitionDuration="",e().style.animationName="")},{defer:!0})),C(()=>$(t.registerContentId(a.id))),i(S,{get when(){return s()},get children(){return i(R,c({as:"div",ref(r){var O=W(o,a.ref);typeof O=="function"&&O(r)},get id(){return a.id},get style(){return L({"--kb-collapsible-content-height":p()?`${p()}px`:void 0,"--kb-collapsible-content-width":g()?`${g()}px`:void 0},a.style)}},()=>t.dataset(),m))}})}function x(n){const e=`collapsible-${T()}`,o=P({id:e},n),[t,d]=l(o,["open","defaultOpen","onOpenChange","disabled","forceMount"]),[a,m]=u(),s=H({open:()=>t.open,defaultOpen:()=>t.defaultOpen,onOpenChange:g=>t.onOpenChange?.(g)}),p=k(()=>({"data-expanded":s.isOpen()?"":void 0,"data-closed":s.isOpen()?void 0:"","data-disabled":t.disabled?"":void 0})),f={dataset:p,isOpen:s.isOpen,disabled:()=>t.disabled??!1,shouldMount:()=>t.forceMount||s.isOpen(),contentId:a,toggle:s.toggle,generateId:X(()=>d.id),registerContentId:G(m)};return i(_.Provider,{value:f,get children(){return i(R,c({as:"div"},p,d))}})}function v(n){const e=M(),[o,t]=l(n,["onClick"]);return i(z,c({get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return k(()=>!!e.isOpen())()?e.contentId():void 0},get disabled(){return e.disabled()},onClick:a=>{Y(a,o.onClick),e.toggle()}},()=>e.dataset(),t))}var K=Object.assign(x,{Content:b,Trigger:v}),Q=F("<div>");const le=x,ce=n=>{const[e,o]=l(n,["style"]);return i(v,c(()=>h(y.trigger,e.style),o))},de=n=>{const[e,o]=l(n,["style"]);return(()=>{var t=q(Q);return A(t,c(()=>h(y.triggerIcon,e.style),o),!1,!1),E(),t})()},pe=n=>{const[e,o]=l(n,["style"]);return i(b,c(()=>h(y.triggerContent,e.style),o))},y={trigger:{display:"x3nfvp2",justifyContent:"x1qughib",alignItems:"x6s0dn4",$$css:!0},triggerContent:{overflow:"xb3r6kr",overflowX:null,overflowY:null,animationName:"x1fs8cbi",animationDuration:"x4afe7t",animationTimingFunction:"xa3vuyk",":is([data-expanded])_animationName":"x3096zi",$$css:!0},triggerIcon:{display:"x78zum5",justifyContent:"xl56j7k",alignItems:"x6s0dn4",$$css:!0}};export{ce as C,de as a,ie as b,pe as c,le as d};
