import{O as E,f as P,D as A,w as He,o as je,b as m,m as I,n as Ee,p as Pe,e as T,v as we,a as oe,S as N,P as Ke,i as U,k,q as $,B as Ye,t as H}from"./web-Cfx9MWSs.js";import{T as ze}from"./index-CtGoWPIj.js";import{B as J}from"./Button-BFmKRz6v.js";import{g as M,b as F,E as Ve,n as Xe,e as L,f as qe,h as ae,P as V,a as X,j,k as C,r as le,v as Ge,l as Je,o as Ze,_ as Qe,m as q,d as et,c as re}from"./5WXHJDCZ-B9JQyimU.js";import{c as tt}from"./E53DB7BS-nV7pOAUf.js";import{B as Oe}from"./UKTBL2JL-BAf851Gh.js";import{c as nt,a as Z}from"./JNCCF6MP-CctMGUSO.js";import{a as x,s as ce}from"./index-Dqrt4mis.js";import{T as xe}from"./TextBlock-D_DQy0FE.js";import"./stylex-_HEqwSgu.js";var z="data-kb-top-layer",Se,te=!1,_=[];function W(e){return _.findIndex(t=>t.node===e)}function ot(e){return _[W(e)]}function rt(e){return _[_.length-1].node===e}function De(){return _.filter(e=>e.isPointerBlocking)}function st(){return[...De()].slice(-1)[0]}function se(){return De().length>0}function Te(e){const t=W(st()?.node);return W(e)<t}function it(e){_.push(e)}function at(e){const t=W(e);t<0||_.splice(t,1)}function lt(){for(const{node:e}of _)e.style.pointerEvents=Te(e)?"none":"auto"}function ct(e){if(se()&&!te){const t=M(e);Se=document.body.style.pointerEvents,t.body.style.pointerEvents="none",te=!0}}function ut(e){if(se())return;const t=M(e);t.body.style.pointerEvents=Se,t.body.style.length===0&&t.body.removeAttribute("style"),te=!1}var w={layers:_,isTopMostLayer:rt,hasPointerBlockingLayer:se,isBelowPointerBlockingLayer:Te,addLayer:it,removeLayer:at,indexOf:W,find:ot,assignPointerEventToLayers:lt,disableBodyPointerEvents:ct,restoreBodyPointerEvents:ut};function dt(e){const t=n=>{n.key===Ve.Escape&&e.onEscapeKeyDown?.(n)};E(()=>{if(F(e.isDisabled))return;const n=e.ownerDocument?.()??M();n.addEventListener("keydown",t),P(()=>{n.removeEventListener("keydown",t)})})}var ue="interactOutside.pointerDownOutside",de="interactOutside.focusOutside";function ft(e,t){let n,i=Xe;const c=()=>M(t()),a=r=>e.onPointerDownOutside?.(r),f=r=>e.onFocusOutside?.(r),p=r=>e.onInteractOutside?.(r),d=r=>{const o=r.target;return!(o instanceof HTMLElement)||o.closest(`[${z}]`)||!L(c(),o)||L(t(),o)?!1:!e.shouldExcludeElement?.(o)},l=r=>{function o(){const v=t(),s=r.target;if(!v||!s||!d(r))return;const g=ae([a,p]);s.addEventListener(ue,g,{once:!0});const y=new CustomEvent(ue,{bubbles:!1,cancelable:!0,detail:{originalEvent:r,isContextMenu:r.button===2||qe(r)&&r.button===0}});s.dispatchEvent(y)}r.pointerType==="touch"?(c().removeEventListener("click",o),i=o,c().addEventListener("click",o,{once:!0})):o()},u=r=>{const o=t(),v=r.target;if(!o||!v||!d(r))return;const s=ae([f,p]);v.addEventListener(de,s,{once:!0});const g=new CustomEvent(de,{bubbles:!1,cancelable:!0,detail:{originalEvent:r,isContextMenu:!1}});v.dispatchEvent(g)};E(()=>{F(e.isDisabled)||(n=window.setTimeout(()=>{c().addEventListener("pointerdown",l,!0)},0),c().addEventListener("focusin",u,!0),P(()=>{window.clearTimeout(n),c().removeEventListener("click",i),c().removeEventListener("pointerdown",l,!0),c().removeEventListener("focusin",u,!0)}))})}var ke=Ee();function gt(){return Pe(ke)}function vt(e){let t;const n=gt(),[i,c]=A(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),a=new Set([]),f=r=>{a.add(r);const o=n?.registerNestedLayer(r);return()=>{a.delete(r),o?.()}};ft({shouldExcludeElement:r=>t?i.excludedElements?.some(o=>L(o(),r))||[...a].some(o=>L(o,r)):!1,onPointerDownOutside:r=>{!t||w.isBelowPointerBlockingLayer(t)||!i.bypassTopMostLayerCheck&&!w.isTopMostLayer(t)||(i.onPointerDownOutside?.(r),i.onInteractOutside?.(r),r.defaultPrevented||i.onDismiss?.())},onFocusOutside:r=>{i.onFocusOutside?.(r),i.onInteractOutside?.(r),r.defaultPrevented||i.onDismiss?.()}},()=>t),dt({ownerDocument:()=>M(t),onEscapeKeyDown:r=>{!t||!w.isTopMostLayer(t)||(i.onEscapeKeyDown?.(r),!r.defaultPrevented&&i.onDismiss&&(r.preventDefault(),i.onDismiss()))}}),He(()=>{if(!t)return;w.addLayer({node:t,isPointerBlocking:i.disableOutsidePointerEvents,dismiss:i.onDismiss});const r=n?.registerNestedLayer(t);w.assignPointerEventToLayers(),w.disableBodyPointerEvents(t),P(()=>{t&&(w.removeLayer(t),r?.(),w.assignPointerEventToLayers(),w.restoreBodyPointerEvents(t))})}),E(je([()=>t,()=>i.disableOutsidePointerEvents],([r,o])=>{if(!r)return;const v=w.find(r);v&&v.isPointerBlocking!==o&&(v.isPointerBlocking=o,w.assignPointerEventToLayers()),o&&w.disableBodyPointerEvents(r),P(()=>{w.restoreBodyPointerEvents(r)})},{defer:!0}));const u={registerNestedLayer:f};return m(ke.Provider,{value:u,get children(){return m(V,I({as:"div",ref(r){var o=X(v=>t=v,i.ref);typeof o=="function"&&o(r)}},c))}})}var Q="focusScope.autoFocusOnMount",ee="focusScope.autoFocusOnUnmount",fe={bubbles:!1,cancelable:!0},ge={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=le(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=le(this.stack,e),this.active()?.resume()}};function pt(e,t){const[n,i]=T(!1),c={pause(){i(!0)},resume(){i(!1)}};let a=null;const f=s=>e.onMountAutoFocus?.(s),p=s=>e.onUnmountAutoFocus?.(s),d=()=>M(t()),l=()=>{const s=d().createElement("span");return s.setAttribute("data-focus-trap",""),s.tabIndex=0,Object.assign(s.style,Ge),s},u=()=>{const s=t();return s?Ze(s,!0).filter(g=>!g.hasAttribute("data-focus-trap")):[]},r=()=>{const s=u();return s.length>0?s[0]:null},o=()=>{const s=u();return s.length>0?s[s.length-1]:null},v=()=>{const s=t();if(!s)return!1;const g=j(s);return!g||L(s,g)?!1:Je(g)};E(()=>{const s=t();if(!s)return;ge.add(c);const g=j(s);if(!L(s,g)){const h=new CustomEvent(Q,fe);s.addEventListener(Q,f),s.dispatchEvent(h),h.defaultPrevented||setTimeout(()=>{C(r()),j(s)===g&&C(s)},0)}P(()=>{s.removeEventListener(Q,f),setTimeout(()=>{const h=new CustomEvent(ee,fe);v()&&h.preventDefault(),s.addEventListener(ee,p),s.dispatchEvent(h),h.defaultPrevented||C(g??d().body),s.removeEventListener(ee,p),ge.remove(c)},0)})}),E(()=>{const s=t();if(!s||!F(e.trapFocus)||n())return;const g=h=>{const S=h.target;S?.closest(`[${z}]`)||(L(s,S)?a=S:C(a))},y=h=>{const D=h.relatedTarget??j(s);D?.closest(`[${z}]`)||L(s,D)||C(a)};d().addEventListener("focusin",g),d().addEventListener("focusout",y),P(()=>{d().removeEventListener("focusin",g),d().removeEventListener("focusout",y)})}),E(()=>{const s=t();if(!s||!F(e.trapFocus)||n())return;const g=l();s.insertAdjacentElement("afterbegin",g);const y=l();s.insertAdjacentElement("beforeend",y);function h(D){const b=r(),G=o();D.relatedTarget===b?C(G):C(b)}g.addEventListener("focusin",h),y.addEventListener("focusin",h);const S=new MutationObserver(D=>{for(const b of D)b.previousSibling===y&&(y.remove(),s.insertAdjacentElement("beforeend",y)),b.nextSibling===g&&(g.remove(),s.insertAdjacentElement("afterbegin",g))});S.observe(s,{childList:!0,subtree:!1}),P(()=>{g.removeEventListener("focusin",h),y.removeEventListener("focusin",h),g.remove(),y.remove(),S.disconnect()})})}var mt="data-live-announcer";function yt(e){E(()=>{F(e.isDisabled)||P(ht(F(e.targets),F(e.root)))})}var B=new WeakMap,O=[];function ht(e,t=document.body){const n=new Set(e),i=new Set,c=d=>{for(const o of d.querySelectorAll(`[${mt}], [${z}]`))n.add(o);const l=o=>{if(n.has(o)||o.parentElement&&i.has(o.parentElement)&&o.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const v of n)if(o.contains(v))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},u=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,{acceptNode:l}),r=l(d);if(r===NodeFilter.FILTER_ACCEPT&&a(d),r!==NodeFilter.FILTER_REJECT){let o=u.nextNode();for(;o!=null;)a(o),o=u.nextNode()}},a=d=>{const l=B.get(d)??0;d.getAttribute("aria-hidden")==="true"&&l===0||(l===0&&d.setAttribute("aria-hidden","true"),i.add(d),B.set(d,l+1))};O.length&&O[O.length-1].disconnect(),c(t);const f=new MutationObserver(d=>{for(const l of d)if(!(l.type!=="childList"||l.addedNodes.length===0)&&![...n,...i].some(u=>u.contains(l.target))){for(const u of l.removedNodes)u instanceof Element&&(n.delete(u),i.delete(u));for(const u of l.addedNodes)(u instanceof HTMLElement||u instanceof SVGElement)&&(u.dataset.liveAnnouncer==="true"||u.dataset.reactAriaTopLayer==="true")?n.add(u):u instanceof Element&&c(u)}});f.observe(t,{childList:!0,subtree:!0});const p={observe(){f.observe(t,{childList:!0,subtree:!0})},disconnect(){f.disconnect()}};return O.push(p),()=>{f.disconnect();for(const d of i){const l=B.get(d);if(l==null)return;l===1?(d.removeAttribute("aria-hidden"),B.delete(d)):B.set(d,l-1)}p===O[O.length-1]?(O.pop(),O.length&&O[O.length-1].observe()):O.splice(O.indexOf(p),1)}}var ne=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},K=new Map,bt=e=>{E(()=>{const t=x(e.style)??{},n=x(e.properties)??[],i={};for(const a in t)i[a]=e.element.style[a];const c=K.get(e.key);c?c.activeCount++:K.set(e.key,{activeCount:1,originalStyles:i,properties:n.map(a=>a.key)}),Object.assign(e.element.style,e.style);for(const a of n)e.element.style.setProperty(a.key,a.value);P(()=>{const a=K.get(e.key);if(a){if(a.activeCount!==1){a.activeCount--;return}K.delete(e.key);for(const[f,p]of Object.entries(a.originalStyles))e.element.style[f]=p;for(const f of a.properties)e.element.style.removeProperty(f);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},ve=bt,Et=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Pt=(e,t)=>{const n=getComputedStyle(e),i=t==="x"?n.overflowX:n.overflowY;return i==="auto"||i==="scroll"||e.tagName==="HTML"&&i==="visible"},wt=(e,t,n)=>{const i=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let c=e,a=0,f=0,p=!1;do{const[d,l,u]=Et(c,t),r=u-d-i*l;(l!==0||r!==0)&&Pt(c,t)&&(a+=r,f+=l),c===(n??document.documentElement)?p=!0:c=c._$host??c.parentElement}while(c&&!p);return[a,f]},[pe,me]=T([]),Ot=e=>pe().indexOf(e)===pe().length-1,xt=e=>{const t=I({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=we();let i=[0,0],c=null,a=null;E(()=>{x(t.enabled)&&(me(l=>[...l,n]),P(()=>{me(l=>l.filter(u=>u!==n))}))}),E(()=>{if(!x(t.enabled)||!x(t.hideScrollbar))return;const{body:l}=document,u=window.innerWidth-l.offsetWidth;if(x(t.preventScrollbarShift)){const r={overflow:"hidden"},o=[];u>0&&(x(t.preventScrollbarShiftMode)==="padding"?r.paddingRight=`calc(${window.getComputedStyle(l).paddingRight} + ${u}px)`:r.marginRight=`calc(${window.getComputedStyle(l).marginRight} + ${u}px)`,o.push({key:"--scrollbar-width",value:`${u}px`}));const v=window.scrollY,s=window.scrollX;ve({key:"prevent-scroll",element:l,style:r,properties:o,cleanup:()=>{x(t.restoreScrollPosition)&&u>0&&window.scrollTo(s,v)}})}else ve({key:"prevent-scroll",element:l,style:{overflow:"hidden"}})}),E(()=>{!Ot(n)||!x(t.enabled)||(document.addEventListener("wheel",p,{passive:!1}),document.addEventListener("touchstart",f,{passive:!1}),document.addEventListener("touchmove",d,{passive:!1}),P(()=>{document.removeEventListener("wheel",p),document.removeEventListener("touchstart",f),document.removeEventListener("touchmove",d)}))});const f=l=>{i=ye(l),c=null,a=null},p=l=>{const u=l.target,r=x(t.element),o=St(l),v=Math.abs(o[0])>Math.abs(o[1])?"x":"y",s=v==="x"?o[0]:o[1],g=he(u,v,s,r);let y;r&&ne(r,u)?y=!g:y=!0,y&&l.cancelable&&l.preventDefault()},d=l=>{const u=x(t.element),r=l.target;let o;if(l.touches.length===2)o=!x(t.allowPinchZoom);else{if(c==null||a===null){const v=ye(l).map((g,y)=>i[y]-g),s=Math.abs(v[0])>Math.abs(v[1])?"x":"y";c=s,a=s==="x"?v[0]:v[1]}if(r.type==="range")o=!1;else{const v=he(r,c,a,u);u&&ne(u,r)?o=!v:o=!0}}o&&l.cancelable&&l.preventDefault()}},St=e=>[e.deltaX,e.deltaY],ye=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],he=(e,t,n,i)=>{const c=i!==null&&ne(i,e),[a,f]=wt(e,t,c?i:void 0);return!(n>0&&Math.abs(a)<=1||n<0&&Math.abs(f)<1)},Dt=xt,Tt=Dt,Y={};Qe(Y,{CloseButton:()=>Le,Content:()=>_e,Description:()=>$e,Dialog:()=>kt,Overlay:()=>Ie,Portal:()=>Fe,Root:()=>Ae,Title:()=>Re,Trigger:()=>Ne});var Ce=Ee();function R(){const e=Pe(Ce);if(e===void 0)throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return e}function Le(e){const t=R(),[n,i]=A(e,["aria-label","onClick"]);return m(Oe,I({get"aria-label"(){return n["aria-label"]||t.translations().dismiss},onClick:a=>{re(a,n.onClick),t.close()}},i))}function _e(e){let t;const n=R(),i=q({id:n.generateId("content")},e),[c,a]=A(i,["ref","onOpenAutoFocus","onCloseAutoFocus","onPointerDownOutside","onFocusOutside","onInteractOutside"]);let f=!1,p=!1;const d=o=>{c.onPointerDownOutside?.(o),n.modal()&&o.detail.isContextMenu&&o.preventDefault()},l=o=>{c.onFocusOutside?.(o),n.modal()&&o.preventDefault()},u=o=>{c.onInteractOutside?.(o),!n.modal()&&(o.defaultPrevented||(f=!0,o.detail.originalEvent.type==="pointerdown"&&(p=!0)),L(n.triggerRef(),o.target)&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&p&&o.preventDefault())},r=o=>{c.onCloseAutoFocus?.(o),n.modal()?(o.preventDefault(),C(n.triggerRef())):(o.defaultPrevented||(f||C(n.triggerRef()),o.preventDefault()),f=!1,p=!1)};return yt({isDisabled:()=>!(n.isOpen()&&n.modal()),targets:()=>t?[t]:[]}),Tt({element:()=>t??null,enabled:()=>n.contentPresent()&&n.preventScroll()}),pt({trapFocus:()=>n.isOpen()&&n.modal(),onMountAutoFocus:c.onOpenAutoFocus,onUnmountAutoFocus:r},()=>t),E(()=>P(n.registerContentId(a.id))),m(N,{get when(){return n.contentPresent()},get children(){return m(vt,I({ref(o){var v=X(s=>{n.setContentRef(s),t=s},c.ref);typeof v=="function"&&v(o)},role:"dialog",tabIndex:-1,get disableOutsidePointerEvents(){return oe(()=>!!n.modal())()&&n.isOpen()},get excludedElements(){return[n.triggerRef]},get"aria-labelledby"(){return n.titleId()},get"aria-describedby"(){return n.descriptionId()},get"data-expanded"(){return n.isOpen()?"":void 0},get"data-closed"(){return n.isOpen()?void 0:""},onPointerDownOutside:d,onFocusOutside:l,onInteractOutside:u,get onDismiss(){return n.close}},a))}})}function $e(e){const t=R(),n=q({id:t.generateId("description")},e),[i,c]=A(n,["id"]);return E(()=>P(t.registerDescriptionId(i.id))),m(V,I({as:"p",get id(){return i.id}},c))}function Ie(e){const t=R(),[n,i]=A(e,["ref","style","onPointerDown"]),c=a=>{re(a,n.onPointerDown),a.target===a.currentTarget&&a.preventDefault()};return m(N,{get when(){return t.overlayPresent()},get children(){return m(V,I({as:"div",ref(a){var f=X(t.setOverlayRef,n.ref);typeof f=="function"&&f(a)},get style(){return nt({"pointer-events":"auto"},n.style)},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onPointerDown:c},i))}})}function Fe(e){const t=R();return m(N,{get when(){return t.contentPresent()||t.overlayPresent()},get children(){return m(Ke,e)}})}var be={dismiss:"Dismiss"};function Ae(e){const t=`dialog-${we()}`,n=q({id:t,modal:!0,translations:be},e),[i,c]=T(),[a,f]=T(),[p,d]=T(),[l,u]=T(),[r,o]=T(),[v,s]=T(),g=tt({open:()=>n.open,defaultOpen:()=>n.defaultOpen,onOpenChange:b=>n.onOpenChange?.(b)}),y=()=>n.forceMount||g.isOpen(),{present:h}=ce({show:y,element:()=>l()??null}),{present:S}=ce({show:y,element:()=>r()??null}),D={translations:()=>n.translations??be,isOpen:g.isOpen,modal:()=>n.modal??!0,preventScroll:()=>n.preventScroll??D.modal(),contentId:i,titleId:a,descriptionId:p,triggerRef:v,overlayRef:l,setOverlayRef:u,contentRef:r,setContentRef:o,overlayPresent:h,contentPresent:S,close:g.close,toggle:g.toggle,setTriggerRef:s,generateId:et(()=>n.id),registerContentId:Z(c),registerTitleId:Z(f),registerDescriptionId:Z(d)};return m(Ce.Provider,{value:D,get children(){return n.children}})}function Re(e){const t=R(),n=q({id:t.generateId("title")},e),[i,c]=A(n,["id"]);return E(()=>P(t.registerTitleId(i.id))),m(V,I({as:"h2",get id(){return i.id}},c))}function Ne(e){const t=R(),[n,i]=A(e,["ref","onClick"]);return m(Oe,I({ref(a){var f=X(t.setTriggerRef,n.ref);typeof f=="function"&&f(a)},"aria-haspopup":"dialog",get"aria-expanded"(){return t.isOpen()},get"aria-controls"(){return oe(()=>!!t.isOpen())()?t.contentId():void 0},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onClick:a=>{re(a,n.onClick),t.toggle()}},i))}var kt=Object.assign(Ae,{CloseButton:Le,Content:_e,Description:$e,Overlay:Ie,Portal:Fe,Title:Re,Trigger:Ne}),Ct=H("<div><!$><!/><!$><!/>"),Lt=H("<footer>"),_t=H("<div>");const $t=e=>m(N,{get when(){return e.open},get children(){return m(Y.Root,{get open(){return e.open},onOpenChange:t=>!t&&e.onClose?.(),get children(){return m(Y.Portal,{get children(){var t=U(_t);return t.style.setProperty("position","fixed"),t.style.setProperty("inset","0"),t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("justify-content","center"),t.style.setProperty("z-index","101"),k(t,m(Y.Content,{get style(){return{position:"fixed","box-sizing":"border-box","max-width":"calc(100% - 24px)","border-radius":"var(--overlay-corner-radius)","background-color":"var(--solid-background-base)","background-clip":"padding-box","box-shadow":"var(--shadow-dialog)",border:"1px solid var(--surface-stroke-default)",overflow:"hidden",width:e.size==="min"?"320px":e.size==="max"?"540px":"448px"}},get children(){return[(()=>{var n=U(Ct),i=n.firstChild,[c,a]=$(i.nextSibling),f=c.nextSibling,[p,d]=$(f.nextSibling);return n.style.setProperty("padding","24px"),n.style.setProperty("background-color","var(--layer-background-default)"),n.style.setProperty("color","var(--text-primary)"),k(n,m(N,{get when(){return e.title},get children(){return m(xe,{variant:"subtitle",style:{display:"block","margin-bottom":"12px",color:"var(--text-primary)"},get children(){return e.title}})}}),c,a),k(n,()=>e.children,p,d),n})(),m(N,{get when(){return e.footer},get children(){var n=U(Lt);return n.style.setProperty("padding","24px"),n.style.setProperty("display","grid"),n.style.setProperty("grid-auto-rows","1fr"),n.style.setProperty("grid-auto-flow","column"),n.style.setProperty("gap","8px"),n.style.setProperty("border-top","1px solid var(--card-stroke-default)"),n.style.setProperty("white-space","nowrap"),k(n,()=>e.footer),n}})]}})),Ye(n=>(n=e.darken?"var(--smoke-background-default)":"")!=null?t.style.setProperty("background-color",n):t.style.removeProperty("background-color")),t}})}})}});var It=H("<main><!$><!/><div><!$><!/><!$><!/><!$><!/>"),Ft=H("<div><!$><!/><!$><!/>");function Yt(){const[e,t]=T(!1),[n,i]=T(""),c=()=>{t(!1),i("Confirmed")},a=()=>{t(!1),i("Closed")};return(()=>{var f=U(It),p=f.firstChild,[d,l]=$(p.nextSibling),u=d.nextSibling,r=u.firstChild,[o,v]=$(r.nextSibling),s=o.nextSibling,[g,y]=$(s.nextSibling),h=g.nextSibling,[S,D]=$(h.nextSibling);return k(f,m(ze,{children:"Content Dialog"}),d,l),u.style.setProperty("display","flex"),u.style.setProperty("flex-direction","column"),u.style.setProperty("gap","1rem"),k(u,m(J,{style:{width:"150px"},onClick:()=>t(!0),children:"Open dialog"}),o,v),k(u,m($t,{get open(){return e()},onClose:a,size:"standard",darken:!0,title:"Dialog Title",closable:!1,get footer(){return(()=>{var b=U(Ft),G=b.firstChild,[ie,Me]=$(G.nextSibling),Be=ie.nextSibling,[Ue,We]=$(Be.nextSibling);return b.style.setProperty("width","100%"),b.style.setProperty("display","flex"),b.style.setProperty("flex-direction","row"),b.style.setProperty("gap","0.5rem"),k(b,m(J,{style:{flex:"1"},variant:"accent",onClick:c,children:"Accept"}),ie,Me),k(b,m(J,{style:{flex:"1"},onClick:a,children:"Cancel"}),Ue,We),b})()},children:"Dialog Backdrops The default behavior of a dialog is to open with a backdrop (“smoke”) layer which prevents user interaction and darkens the contents of the page behind the dialog. You can disable backdrop darkening by setting the darken property to false. You can configure the backdrop to close the dialog when it is clicked using the on:backdropclick and on:backdropmousedown events dispatched from the component."}),g,y),k(u,m(xe,{variant:"body",get children(){return["Result: ",oe(()=>n())]}}),S,D),f})()}export{Yt as default};
