import{e as u,D as i,w as k,O as m,o as I,f as y,b as r,m as c,S,v as B,a as T,n as E,p as N,i as U,j as A,r as H,t as j}from"./web-Cfx9MWSs.js";import{c as C}from"./index-C708Qsti.js";import{c as q}from"./E53DB7BS-nV7pOAUf.js";import{B as F}from"./UKTBL2JL-BAf851Gh.js";import{c as L,a as G}from"./JNCCF6MP-CctMGUSO.js";import{_ as W,m as D,P,a as Z,d as z,c as J}from"./5WXHJDCZ-B9JQyimU.js";import{s as K}from"./index-Dqrt4mis.js";var Q={};W(Q,{Collapsible:()=>V,Content:()=>h,Root:()=>v,Trigger:()=>_});var R=E();function $(){const o=N(R);if(o===void 0)throw new Error("[kobalte]: `useCollapsibleContext` must be used within a `Collapsible.Root` component");return o}function h(o){const[e,n]=u(),t=$(),p=D({id:t.generateId("content")},o),[l,f]=i(p,["ref","id","style"]),{present:s}=K({show:t.shouldMount,element:()=>e()??null}),[d,b]=u(0),[g,M]=u(0);let x=t.isOpen()||s();return k(()=>{const a=requestAnimationFrame(()=>{x=!1});y(()=>{cancelAnimationFrame(a)})}),m(I(s,()=>{if(!e())return;e().style.transitionDuration="0s",e().style.animationName="none";const a=e().getBoundingClientRect();b(a.height),M(a.width),x||(e().style.transitionDuration="",e().style.animationName="")})),m(I(t.isOpen,a=>{!a&&e()&&(e().style.transitionDuration="",e().style.animationName="")},{defer:!0})),m(()=>y(t.registerContentId(l.id))),r(S,{get when(){return s()},get children(){return r(P,c({as:"div",ref(a){var O=Z(n,l.ref);typeof O=="function"&&O(a)},get id(){return l.id},get style(){return L({"--kb-collapsible-content-height":d()?`${d()}px`:void 0,"--kb-collapsible-content-width":g()?`${g()}px`:void 0},l.style)}},()=>t.dataset(),f))}})}function v(o){const e=`collapsible-${B()}`,n=D({id:e},o),[t,p]=i(n,["open","defaultOpen","onOpenChange","disabled","forceMount"]),[l,f]=u(),s=q({open:()=>t.open,defaultOpen:()=>t.defaultOpen,onOpenChange:g=>t.onOpenChange?.(g)}),d=T(()=>({"data-expanded":s.isOpen()?"":void 0,"data-closed":s.isOpen()?void 0:"","data-disabled":t.disabled?"":void 0})),b={dataset:d,isOpen:s.isOpen,disabled:()=>t.disabled??!1,shouldMount:()=>t.forceMount||s.isOpen(),contentId:l,toggle:s.toggle,generateId:z(()=>p.id),registerContentId:G(f)};return r(R.Provider,{value:b,get children(){return r(P,c({as:"div"},d,p))}})}function _(o){const e=$(),[n,t]=i(o,["onClick"]);return r(F,c({get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return T(()=>!!e.isOpen())()?e.contentId():void 0},get disabled(){return e.disabled()},onClick:l=>{J(l,n.onClick),e.toggle()}},()=>e.dataset(),t))}var V=Object.assign(v,{Content:h,Trigger:_});const X="_collapsibleTrigger_11p9f_1",Y="_collapsibleTriggerIcon_11p9f_7",ee="_collapsibleContent_11p9f_18",te="_slideUp_11p9f_1",oe="_slideDown_11p9f_1",w={collapsibleTrigger:X,collapsibleTriggerIcon:Y,collapsibleContent:ee,slideUp:te,slideDown:oe};var ne=j("<div>");const ge=v,ue=o=>{const[e,n]=i(o,["class"]);return r(_,c({get class(){return C(w.collapsibleTrigger,e.class)}},n))},fe=o=>{const[e,n]=i(o,["class"]);return(()=>{var t=U(ne);return A(t,c({get class(){return C(w.collapsibleTriggerIcon,e.class)}},n),!1,!1),H(),t})()},be=o=>{const[e,n]=i(o,["class"]);return r(h,c({get class(){return C(w.collapsibleContent,e.class)}},n))},me='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>';export{ue as C,fe as a,me as b,be as c,ge as d};
