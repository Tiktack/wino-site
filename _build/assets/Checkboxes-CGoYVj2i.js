import{D as _,b as o,m as f,e as y,S as J,O as L,o as q,v as Q,a as A,c as V,n as W,p as X,A as Y,M as B,i as ee,q as P,k as F,t as te}from"./web-Cfx9MWSs.js";import{T as ne}from"./index-CtGoWPIj.js";import{c as re}from"./index-C708Qsti.js";import{F as N}from"./FluentIcon-CjWP5YtC.js";import{u as R,F as oe,c as ce,a as se,b as ae,d as ie,e as le,f as de,g as ue,h as he,i as ge}from"./VI7QYH27-DsFwFX96.js";import{_ as fe,m as v,P as I,a as S,v as be,b as K,i as Ce,c as x,E as pe,d as ke}from"./5WXHJDCZ-B9JQyimU.js";import{s as xe}from"./index-Dqrt4mis.js";import{c as me}from"./JNCCF6MP-CctMGUSO.js";import"./stylex-_HEqwSgu.js";const T='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>';var _e={};fe(_e,{Checkbox:()=>ve,Control:()=>D,Description:()=>j,ErrorMessage:()=>U,Indicator:()=>$,Input:()=>E,Label:()=>Z,Root:()=>M});var H=W();function m(){const t=X(H);if(t===void 0)throw new Error("[kobalte]: `useCheckboxContext` must be used within a `Checkbox` component");return t}function D(t){const r=R(),e=m(),c=v({id:e.generateId("control")},t),[n,s]=_(c,["onClick","onKeyDown"]);return o(I,f({as:"div",onClick:a=>{x(a,n.onClick),e.toggle(),e.inputRef()?.focus()},onKeyDown:a=>{x(a,n.onKeyDown),a.key===pe.Space&&(e.toggle(),e.inputRef()?.focus())}},()=>r.dataset(),()=>e.dataset(),s))}function j(t){const r=m();return o(ue,f(()=>r.dataset(),t))}function U(t){const r=m();return o(he,f(()=>r.dataset(),t))}function $(t){const r=R(),e=m(),[c,n]=y(),s=v({id:e.generateId("indicator")},t),[d,g]=_(s,["ref","forceMount"]),{present:a}=xe({show:()=>d.forceMount||e.indeterminate()||e.checked(),element:()=>c()??null});return o(J,{get when(){return a()},get children(){return o(I,f({as:"div",ref(b){var h=S(n,d.ref);typeof h=="function"&&h(b)}},()=>r.dataset(),()=>e.dataset(),g))}})}function E(t){let r;const e=R(),c=m(),n=v({id:c.generateId("input")},t),[s,d,g]=_(n,["ref","style","onChange","onFocus","onBlur"],oe),{fieldProps:a}=ce(d),[b,h]=y(!1),p=i=>{if(x(i,s.onChange),i.stopPropagation(),!b()){const u=i.target;c.setIsChecked(u.checked),u.checked=c.checked()}h(!1)},C=i=>{x(i,s.onFocus),c.setIsFocused(!0)},w=i=>{x(i,s.onBlur),c.setIsFocused(!1)};return L(q([()=>c.checked(),()=>c.value()],()=>{h(!0),r?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),r?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),L(q([()=>r,()=>c.indeterminate(),()=>c.checked()],([i,u])=>{i&&(i.indeterminate=u)})),o(I,f({as:"input",ref(i){var u=S(l=>{c.setInputRef(l),r=l},s.ref);typeof u=="function"&&u(i)},type:"checkbox",get id(){return a.id()},get name(){return e.name()},get value(){return c.value()},get checked(){return c.checked()},get required(){return e.isRequired()},get disabled(){return e.isDisabled()},get readonly(){return e.isReadOnly()},get style(){return me(be,s.style)},get"aria-label"(){return a.ariaLabel()},get"aria-labelledby"(){return a.ariaLabelledBy()},get"aria-describedby"(){return a.ariaDescribedBy()},get"aria-invalid"(){return e.validationState()==="invalid"||void 0},get"aria-required"(){return e.isRequired()},get"aria-disabled"(){return e.isDisabled()},get"aria-readonly"(){return e.isReadOnly()},onChange:p,onFocus:C,onBlur:w},()=>e.dataset(),()=>c.dataset(),g))}function Z(t){const r=m();return o(ge,f(()=>r.dataset(),t))}function M(t){let r;const e=`checkbox-${Q()}`,c=v({value:"on",id:e},t),[n,s,d]=_(c,["ref","children","value","checked","defaultChecked","indeterminate","onChange","onPointerDown"],se),[g,a]=y(),[b,h]=y(!1),{formControlContext:p}=ae(s),C=ie({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:l=>n.onChange?.(l),isDisabled:()=>p.isDisabled(),isReadOnly:()=>p.isReadOnly()});le(()=>r,()=>C.setIsSelected(n.defaultChecked??!1));const w=l=>{x(l,n.onPointerDown),b()&&l.preventDefault()},i=A(()=>({"data-checked":C.isSelected()?"":void 0,"data-indeterminate":n.indeterminate?"":void 0})),u={value:()=>n.value,dataset:i,checked:()=>C.isSelected(),indeterminate:()=>n.indeterminate??!1,inputRef:g,generateId:ke(()=>K(s.id)),toggle:()=>C.toggle(),setIsChecked:l=>C.setIsSelected(l),setIsFocused:h,setInputRef:a};return o(de.Provider,{value:p,get children(){return o(H.Provider,{value:u,get children(){return o(I,f({as:"div",ref(l){var O=S(z=>r=z,n.ref);typeof O=="function"&&O(l)},role:"group",get id(){return K(s.id)},onPointerDown:w},()=>p.dataset(),i,d,{get children(){return o(ye,{state:u,get children(){return n.children}})}}))}})}})}function ye(t){const r=V(()=>{const e=t.children;return Ce(e)?e(t.state):e});return A(r)}var ve=Object.assign(M,{Control:D,Description:j,ErrorMessage:U,Indicator:$,Input:E,Label:Z});const Ie="_checkboxContainer_ey4n4_1",we="_checkboxInner_ey4n4_16",Pe="_checkboxIndicator_ey4n4_23",Fe="_input_ey4n4_39",Re="_control_ey4n4_41",Se="_icon_ey4n4_91",De="_checkboxGlyph_ey4n4_108",$e="_pathCheckmark_ey4n4_116",Ee="_checkbox_ey4n4_1",k={checkboxContainer:Ie,checkboxInner:we,checkboxIndicator:Pe,input:Fe,control:Re,icon:Se,checkboxGlyph:De,pathCheckmark:$e,checkbox:Ee},G=t=>{const[r,e]=_(t,["class"]);return o(M,f({get class(){return re(k.checkboxInner,r.class)}},e,{get children(){return[o(E,{get class(){return k.input}}),o(D,{get class(){return k.control},get children(){return o($,{get class(){return k.checkboxIndicator},get children(){return o(Y,{get children(){return[o(B,{get when(){return!e.indeterminate},get children(){return o(N,{icon:T,get class(){return k.icon}})}}),o(B,{get when(){return e.indeterminate},get children(){return o(N,{icon:T,get class(){return k.icon}})}})]}})}})}})]}}))};var Me=te("<main><!$><!/><div><!$><!/><!$><!/>");function He(){return(()=>{var t=ee(Me),r=t.firstChild,[e,c]=P(r.nextSibling),n=e.nextSibling,s=n.firstChild,[d,g]=P(s.nextSibling),a=d.nextSibling,[b,h]=P(a.nextSibling);return F(t,o(ne,{children:"Checkboxes"}),e,c),n.style.setProperty("display","flex"),n.style.setProperty("flex-direction","row"),n.style.setProperty("gap","1rem"),F(n,o(G,{}),d,g),F(n,o(G,{disabled:!0}),b,h),t})()}export{He as default};