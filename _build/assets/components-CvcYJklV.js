import{m as c,B as u,a as v,i as m,j as h,r as d,t as g}from"./web-CwqXaN1j.js";import{h as C,i as L,j as P,l}from"./routing-DDMiRylW.js";var _=g("<a>");function x(t){t=c({inactiveClass:"inactive",activeClass:"active"},t);const[,i]=u(t,["href","state","class","activeClass","inactiveClass","end"]),n=C(()=>t.href),o=L(n),f=P(),r=v(()=>{const e=n();if(e===void 0)return[!1,!1];const a=l(e.split(/[?#]/,1)[0]).toLowerCase(),s=decodeURI(l(f.pathname).toLowerCase());return[t.end?a===s:s.startsWith(a+"/")||s===a,a===s]});return(()=>{var e=m(_);return h(e,c(i,{get href(){return o()||t.href},get state(){return JSON.stringify(t.state)},get classList(){return{...t.class&&{[t.class]:!0},[t.inactiveClass]:!r()[0],[t.activeClass]:r()[0],...i.classList}},link:"",get"aria-current"(){return r()[1]?"page":void 0}}),!1,!1),d(),e})()}export{x as A};