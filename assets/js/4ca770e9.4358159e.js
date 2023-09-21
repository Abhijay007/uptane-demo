"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[1752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,title:"Threat Model"},i="Why Uptane is needed",s={unversionedId:"learn-more/threat",id:"version-1.1.0/learn-more/threat",title:"Threat Model",description:'Electronic control units, or ECUs first appeared in mass-produced cars sometime in the early 1970s. Over the intervening decades, the number of these units has multiplied rapidly. A USA Today article from 2016 estimated that the average family vehicle may have up to 10 million lines of code (LOC). For high-end luxury sedans, the number comes closer to 100 million LOC, or "about 14 times more than even a Boeing 787 Dreamliner jet."',source:"@site/versioned_docs/version-1.1.0/learn-more/threat.md",sourceDirName:"learn-more",slug:"/learn-more/threat",permalink:"/uptane-demo/docs/1.1.0/learn-more/threat",draft:!1,tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Threat Model"},sidebar:"LearnMoreSidebar",previous:{title:"Getting Started",permalink:"/uptane-demo/docs/1.1.0/learn-more/getting-started"},next:{title:"Uptane Design",permalink:"/uptane-demo/docs/1.1.0/learn-more/design"}},l={},c=[{value:"Why Updates are Vulnerable",id:"why-updates-are-vulnerable",level:2},{value:"Potential Attacks",id:"potential-attacks",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-uptane-is-needed"},"Why Uptane is needed"),(0,n.kt)("p",null,"Electronic control units, or ECUs ",(0,n.kt)("a",{parentName:"p",href:"https://www.theglobeandmail.com/globe-drive/how-cars-have-become-rolling-computers/article29008154/"},"first appeared")," in mass-produced cars sometime in the early 1970s. Over the intervening decades, the number of these units has multiplied rapidly. A ",(0,n.kt)("a",{parentName:"p",href:"https://www.usatoday.com/story/tech/columnist/2016/06/28/your-average-car-lot-more-code-driven-than-you-think/86437052/"},"USA Today article"),' from 2016 estimated that the average family vehicle may have up to 10 million lines of code (LOC). For high-end luxury sedans, the number comes closer to 100 million LOC, or "about 14 times more than even a Boeing 787 Dreamliner jet."'),(0,n.kt)("p",null,'These connected and often "smart" units offer a multitude of benefits to the operation of automobiles, but they also create a huge new attack surface. A malicious broadcast to an ECU connected to the Internet, or the introduction of malware delivered through any type of software update mechanism brings with it a host of potential threats, including the ability to interfere with basic automotive operations. At its worst, in the hands of nation-state level actors, the threats generated by compromised ECUs could include such worst-case scenarios as tampering with the brakes of an entire fleet of police cars, or causing wide-spread engine failures on a highway during rush hour.'),(0,n.kt)("h2",{id:"why-updates-are-vulnerable"},"Why Updates are Vulnerable"),(0,n.kt)("p",null,"Software updates are routinely performed on computing units for a ",(0,n.kt)("a",{parentName:"p",href:"https://www.scientificamerican.com/article/why-installing-software-updates-makes-us-wannacry/"},"number of reasons,")," including the addition of new functionality, and upgrades to improve productivity. But, the primary reason for updating software is to address existing flaws in the code itself that potentially could be exploited, causing the chaos described above. Increasingly, these updates are done using ",(0,n.kt)("a",{parentName:"p",href:"https://ihsmarkit.com/research-analysis/remote-software-update-future-growth-business.html"},'"software-over-the-air"')," or SOTA strategies, in which revised versions of programs are sent directly to computing units through broadcasts over the Internet. The strategy is growing in popularity because it is a much quicker and more cost-effective delivery mechanism than traditional methods, such as distributing flash drives or requiring customers to bring in their vehicles for servicing. Even established OEMs are recognizing the potential of this strategy, with both ",(0,n.kt)("a",{parentName:"p",href:"https://www.consumerreports.org/automotive-technology/automakers-embrace-over-the-air-updates-can-we-trust-digital-car-repair/"},"Ford and GM")," recently announcing they would allow access to SOTA updates in some models by 2020."),(0,n.kt)("p",null,"However, connecting ECUs to the Internet make them ",(0,n.kt)("a",{parentName:"p",href:"https://www.theverge.com/2018/2/13/17007332/fiat-chrysler-uconnect-update-reboot-problem-broken"},"vulnerable")," to a wide range of attacks, some of which introduce malware masquerading as legitimate updates. The potential consequences of such attacks could be costly indeed, not only in terms of recalls or lost sales, but also potentially, in loss of life."),(0,n.kt)("h2",{id:"potential-attacks"},"Potential Attacks"),(0,n.kt)("p",null,"The types of attacks which Uptane is designed to defend against can be organized into four categories, presented here in order of increasing severity."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read updates"),": The goal here is intellectual property theft, so these attackers aim to read the contents of software updates. This is generally achieved with an Eavesdrop attack, where attackers can read unencrypted updates sent from the repository to the vehicles."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deny updates"),": In this group of attacks, the goal is to prevent vehicles from fixing software problems by using one of several attack strategies to deny access to updates."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Drop-request attack"),": blocks network traffic outside or inside the vehicle to prevent an ECU from receiving any updates."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Slow retrieval attack"),": slows delivery time of updates to ECUs so a known security vulnerability can be exploited before a corrective patch is received."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Freeze attack"),": continues to send the last known update to an ECU, even if a newer update exists."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partial bundle installation attack"),": Allows only part of an update to install by dropping traffic to selected ECUs.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deny functionality"),": This grouping ups the threat ante a bit further by causing vehicles to fail to function in one of the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rollback attack"),": tricks an ECU into installing outdated software with known vulnerabilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Endless data attack"),": causes an ECU to crash by sending it an infinite amount of data until it runs out of storage."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mixed-bundles attack"),": shuts down an ECU by causing it to install incompatible versions of software updates that must not be installed at the same time. Attackers can accomplish this by showing different bundles to different ECUs at the same time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mix-and-match attack"),": If attackers have compromised repository keys, they can use these keys to release arbitrary combinations of new versions of images.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Control"),": The last and most severe threat is if an ECU can be forced to install software of the attacker's choosing, thus ceding control of that unit. This means an attacker can arbitrarily modify the vehicle's performance through an arbitrary software attack, in which the software on an ECU is overwritten with a malicious software program."))}d.isMDXComponent=!0}}]);