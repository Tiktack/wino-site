import{M as i}from"./index-C3gjEJgQ.js";import{b as n,m as r}from"./web-C1wPh4FY.js";const d={title:"Introducing Wino Mail 1.7.6",metaTitle:"Release 1.7.6",description:"This version brings bunch of UI improvements and bugfixes on top of the added features thanks to our community members.",thumbnail:"blog-resources/release-1-7-6/thumbnail.webp",date:"11/12/2024",author:"Tiktack"};function o(t){const e={a:"a",h2:"h2",img:"img",p:"p",...i(),...t.components};return[n(e.p,{children:"This version brings bunch of UI improvements and bugfixes on top of the added features thanks to our community members."}),`
`,n(e.h2,{children:"Separated UI Zones"}),`
`,n(e.p,{get children(){return["Community liked the proposed designs for separated UI parts and it's implemented now thanks to ",n(e.a,{href:"https://github.com/Tiktack",children:"Tiktack"})]}}),`
`,n(e.p,{get children(){return n(e.img,{src:"blog-resources/release-1-7-6/separatedzones.png",alt:"Separated UI Zones"})}}),`
`,n(e.h2,{children:"Including Conversation History for Replies and Forwards"}),`
`,n(e.p,{get children(){return["Previously when you replied to an e-mail conversation history was not included into new draft. This was a limitation due to Quill editor we use as a composer editor but now thanks to ",n(e.a,{href:"https://github.com/Tiktack",children:"Tiktack"})," Wino now uses Jodit editor as a composer. It's able to render HTML as it is better."]}}),`
`,n(e.h2,{children:"HTML Signatures"}),`
`,n(e.p,{children:"You can now copy your signature as HTML and paste directly into signature editor. This was asked by community and now is possible with the new Jodit composer."}),`
`,n(e.h2,{children:"Reworked Menu System"}),`
`,n(e.p,{children:"Merged accounts will not list individual accounts below instead of inside the More folder menu item."}),`
`,n(e.h2,{children:"New IMAP and Gmail Folder Synchronization"}),`
`,n(e.p,{children:"IMAP and Gmail folder synchronization mechanism is reworked. New code works faster and fixed couple parent-child relation issues with the folder. I hope this will also resolve a lot of people complaining some Gmail folders are not visible for them after the initial sync."}),`
`,n(e.h2,{children:"New Languages"}),`
`,n(e.p,{children:"Thanks to our amazing community members Wino has more languages supported in this version with the help of Crowdin contributors."}),`
`,n(e.p,{get children(){return n(e.img,{src:"blog-resources/release-1-7-6/contributors.png",alt:"Crowdin Contributors"})}}),`
`,n(e.p,{children:"Some of the translations are not completed yet, and Wino will fallback to English strings in case of the translation has not been translated yet."})]}function l(t={}){const{wrapper:e}={...i(),...t.components};return e?n(e,r(t,{get children(){return n(o,t)}})):o(t)}export{l as default,d as frontmatter};
