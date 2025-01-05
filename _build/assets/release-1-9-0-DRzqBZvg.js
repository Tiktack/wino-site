import{M as a}from"./index-B3SlypjZ.js";import{b as n,m as o}from"./web-DOvYsQZW.js";const s={title:"Wino Mail 1.9.0",description:"Finally another big release for Wino Mail is ready! This release contains fundamental changes for Wino's architecture. Therefore you must re-add your accounts once again unfortunately. Once again, this release is packed with a lot of improvements. Make sure to check them all and let us know about your feedback!",thumbnail:"blog-resources/wino-blog-init/windows-11-protobloom-not-ai-upscaled-v0-63ej7xvcnw2e1.webp",date:"12/12/2024",author:"Tiktack"};function t(i){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return[n(e.h1,{children:"🚀 Welcome to Wino Mail 1.9.0"}),`
`,n(e.p,{children:"Finally another big release for Wino Mail is ready! This release contains fundamental changes for Wino's architecture. Therefore you must re-add your accounts once again unfortunately."}),`
`,n(e.p,{children:"Once again, this release is packed with a lot of improvements. Make sure to check them all and let us know about your feedback!"}),`
`,n(e.h2,{children:"Background Synchronization Improvements and System Tray"}),`
`,n(e.p,{children:"Background synchronization is completely reworked. All synchronization will be done by this process. Double clicking to tray icon will launch the actual application. Your accounts will be synchronized every 3 minutes."}),`
`,n(e.p,{children:"Make sure 'Start minimized on Windows startup' is enabled and 'Application close behavior' is set to 'Minimize to system tray' or 'Run in the background' to keep recieving notifications."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/backgroundsync2.png",alt:"System Tray"})}}),`
`,n(e.p,{children:"Wino keeps running on system tray even after closing the page. Closing Wino will not close it completely, but keep small separate process running on the system tray. You can configure this behavior in the page described above."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/backgroundsync1.png",alt:"System Tray"})}}),`
`,n(e.h2,{children:"E-mail Aliases"}),`
`,n(e.p,{children:"Alias support is here! Gmail accounts will synchronize aliases automatically. Outlook will not synchronize them automatically due to limitations on the Microsoft side yet, but you can manually register them from account settings."}),`
`,n(e.p,{children:"Please note that your alises are local to Wino Mail only, meaning that if your provider does not allow sending e-mails for an alias your mails won't be delivered. Please only add aliases that you have permission to send mails from by your mail provider."}),`
`,n(e.p,{children:"For IMAP, make sure your SMTP server allows sending e-mails from registered aliases as well."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/alias1.png",alt:"Aliases Settings"})}}),`
`,n(e.p,{children:"Your root e-mail address will always be verified after adding an account and will be marked as primary. You can change your primary alias in this page to change your default alias for draft mails."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/alias2.png",alt:"Manage Aliases"})}}),`
`,n(e.p,{children:"To pick an account to send mails from use the picker in the composer."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/alias3.png",alt:"Picking Alias"})}}),`
`,n(e.h2,{children:"Sender Avatars"}),`
`,n(e.p,{children:"Wino Mail now synchronizes your account picture for Outlook and Gmail! This is the ground work for supporting another Wino component 'Wino Contacts' for managing contacts. Unfortunately Wino Mail does not have contact management system yet, but it is in my backlog as a separate application for later."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/avatars1.png",alt:"Picking Alias"})}}),`
`,n(e.h2,{children:"UI Improvements"}),`
`,n(e.h3,{get children(){return["Mail list splitter (by ",n(e.a,{href:"https://github.com/Tiktack",children:"Tiktack"}),")"]}}),`
`,n(e.p,{children:"You can now adjust mail list width by dragging the separator between mails and rendered content. Contributed by @TikTack"}),`
`,n(e.h3,{get children(){return["Removed action toolbar (by ",n(e.a,{href:"https://github.com/Tiktack",children:"Tiktack"}),")"]}}),`
`,n(e.p,{children:"We got rid of the toolbar items at the top of the mail list by default to save space for desktop users."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/ui1.png",alt:"Toolbar"})}}),`
`,n(e.p,{children:"You can still enable them in Settings -> Mail List menu. It was mostly used by tablet users."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/ui2.png",alt:"Enable Toolbar"})}}),`
`,n(e.h3,{children:"New conversation thread view"}),`
`,n(e.p,{children:"Conversation threads now look more like Mail & Calendars. Also fixed couple issues around hover actions which were caused by old control."}),`
`,n(e.p,{get children(){return n(e.img,{src:"https://www.winomail.app/patchNotes/190/ui3.png",alt:"Threads"})}}),`
`,n(e.h2,{children:"Bugfixes"}),`
`,n(e.p,{children:"As always, this major release has a lot of overall bugfixes for the application. I'm listing some of the most significants here:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Improve mailto links handling by @Tiktack in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/310",children:"https://github.com/bkaankose/Wino-Mail/pull/310"})]}}),`
`,n(e.li,{get children(){return["Embedded images replaced with cid linked resources.  by @Tiktack in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/313",children:"https://github.com/bkaankose/Wino-Mail/pull/313"})]}}),`
`,n(e.li,{get children(){return["Fix account signature preferences during draft creation by @Tiktack in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/314",children:"https://github.com/bkaankose/Wino-Mail/pull/314"})]}}),`
`,n(e.li,{children:"Fixed an issue where re-opening draft message with attachment breaks the attachment content."}),`
`,n(e.li,{children:"Fixed an issue where compose page were not disposed properly when leaving the page, causing drafts to be not updated."}),`
`,n(e.li,{get children(){return["Fixed sharing logs by @bkaankose in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/328",children:"https://github.com/bkaankose/Wino-Mail/pull/328"})]}}),`
`,n(e.li,{get children(){return["Make Jodit fill all available height of webview by @Tiktack in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/330",children:"https://github.com/bkaankose/Wino-Mail/pull/330"})]}}),`
`,n(e.li,{get children(){return["Code Quality: TabbedCommandBar by @Tiktack in ",n(e.a,{href:"https://github.com/bkaankose/Wino-Mail/pull/335",children:"https://github.com/bkaankose/Wino-Mail/pull/335"})]}}),`
`,n(e.li,{get children(){return["Enabled protocol logs for active usage for all imap accounts. If you experience any server errors for imap accounts now they will be logged together with app logs to diagnose issues. Sharing logs will automatically share protocol logs as well. ",n(e.strong,{children:"Protocol logs won't share any credentials or sensitive information."})]}}),`
`,n(e.li,{children:"Fixed an issue with folder loading sometimes causing mails that belong to different folder to show up in the last clicked folder."}),`
`,n(e.li,{children:"Fixed an issue with account re-ordering where moving merged accounts always ends up last item regardless of the assigned order."}),`
`,n(e.li,{children:"Fixed an issue where account sync progress shows up on the first account instead of the synchronized account for merged accounts."}),`
`,n(e.li,{children:"Fixed a UI issue with multiple to,cc,bcc items are not properly displayed for small layouts. Now they will be wrapped and aligned properly to the screen size."}),`
`,n(e.li,{children:"Fixed a potential crash for the devices that don't support task bar pinning option."}),`
`,n(e.li,{children:"Fixed an issue where applying folder configuration does not re-load the folders if the configuration is done for the selected account."}),`
`,n(e.li,{children:"Improved editor focus in composer page. Moving focus from Subject field now properly focuses the first line of the editor. Clicking on the editor also behaves the same."}),`
`,n(e.li,{children:"Fixed an issue with deleting mails from Gmail's' Sent folder."}),`
`,n(e.li,{children:"Fixed Outlook message sending issues due to MIME header sizes."}),`
`]}})]}function c(i={}){const{wrapper:e}={...a(),...i.components};return e?n(e,o(i,{get children(){return n(t,i)}})):t(i)}export{c as default,s as frontmatter};
