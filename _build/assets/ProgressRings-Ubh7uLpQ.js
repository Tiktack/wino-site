import{e as z,L as E,i as M,D as B,p as s,N as j,t as D,O as N,n as a,k as l,b as o,f as q}from"./web-U1AJjSeD.js";import{T as F}from"./index-CB4VMv_N.js";const G="_progressRing_21egw_17",H="_indeterminate_21egw_34",J="_progressRingIndeterminate_21egw_1",k={progressRing:G,indeterminate:H,progressRingIndeterminate:J};var K=D('<svg tabIndex=-1 viewBox="0 0 16 16"><circle cx=50% cy=50% r=7 stroke-dasharray=3>');const v=n=>{let _,r;const[g,f]=z(0);E(()=>{r&&f(Math.PI*(r.r.baseVal.value*2))});const c=()=>typeof n.value>"u"||n.value===null||Number.isNaN(n.value),i=()=>{if(typeof n.value=="number")return Math.max(0,Math.min(100,n.value))},w=()=>{const t=i();return t!==void 0?(100-t)/100*g():void 0};return(()=>{var t=M(K),u=t.firstChild,x=_;typeof x=="function"?N(x,t):_=t;var d=r;return typeof d=="function"?N(d,u):r=u,B(e=>{var b=`${k.progressRing} ${n.class||""}`,h={[k.indeterminate]:c()},S=n.size||32,y=n.size||32,$=c()?"status":"progressbar",R=c()?void 0:0,I=c()?void 0:100,m=i(),P=w();return b!==e.e&&s(t,"class",e.e=b),e.t=j(t,h,e.t),S!==e.a&&s(t,"width",e.a=S),y!==e.o&&s(t,"height",e.o=y),$!==e.i&&s(t,"role",e.i=$),R!==e.n&&s(t,"aria-valuemin",e.n=R),I!==e.s&&s(t,"aria-valuemax",e.s=I),m!==e.h&&s(t,"aria-valuenow",e.h=m),P!==e.r&&s(u,"stroke-dashoffset",e.r=P),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),t})()};var Q=D("<main><!$><!/><div><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>");function X(){const[n,_]=z(0);return E(()=>{const r=setInterval(()=>{_(g=>g>=100?0:g+1)},25);q(()=>clearInterval(r))}),(()=>{var r=M(Q),g=r.firstChild,[f,c]=a(g.nextSibling),i=f.nextSibling,w=i.firstChild,[t,u]=a(w.nextSibling),x=t.nextSibling,[d,e]=a(x.nextSibling),b=d.nextSibling,[h,S]=a(b.nextSibling),y=h.nextSibling,[$,R]=a(y.nextSibling),I=$.nextSibling,[m,P]=a(I.nextSibling),L=m.nextSibling,[C,O]=a(L.nextSibling),T=C.nextSibling,[V,A]=a(T.nextSibling);return l(r,o(F,{children:"Progress Ring"}),f,c),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),i.style.setProperty("gap","1rem"),l(i,o(v,{}),t,u),l(i,o(v,{value:25}),d,e),l(i,o(v,{value:50}),h,S),l(i,o(v,{value:75}),$,R),l(i,o(v,{value:100}),m,P),l(i,o(v,{size:100}),C,O),l(i,o(v,{get value(){return n()}}),V,A),r})()}export{X as default};
