import{a as h,e as g,C as l,u as v,f as A}from"./web-NOoGXgWu.js";var o=n=>typeof n=="function"?n():n,E=n=>{const c=h(()=>{const e=o(n.element);if(e)return getComputedStyle(e)}),m=()=>c()?.animationName??"none",[s,i]=g(o(n.show)?"present":"hidden");let d="none";return l(e=>{const t=o(n.show);return v(()=>{if(e===t)return t;const r=d,a=m();t?i("present"):a==="none"||c()?.display==="none"?i("hidden"):i(e===!0&&r!==a?"hiding":"hidden")}),t}),l(()=>{const e=o(n.element);if(!e)return;const t=a=>{a.target===e&&(d=m())},r=a=>{const f=m().includes(a.animationName);a.target===e&&f&&s()==="hiding"&&i("hidden")};e.addEventListener("animationstart",t),e.addEventListener("animationcancel",r),e.addEventListener("animationend",r),A(()=>{e.removeEventListener("animationstart",t),e.removeEventListener("animationcancel",r),e.removeEventListener("animationend",r)})}),{present:()=>s()==="present"||s()==="hiding",state:s,setState:i}},N=E,L=N;export{o as a,L as s};