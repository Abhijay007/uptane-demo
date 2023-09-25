"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[1804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=n,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,title:"Getting Started"},o="Getting Started with Uptane",s={unversionedId:"learn-more/getting-started",id:"version-2.0.0/learn-more/getting-started",title:"Getting Started",description:"Welcome to the \"Getting Started\" guide for Uptane, the standard framework designed to secure software updates for vehicles. Whether you're a developer, security professional, or just a curious individual, this guide will provide you with a foundational understanding of Uptane and how it's revolutionizing automotive software security.",source:"@site/versioned_docs/version-2.0.0/learn-more/getting-started.md",sourceDirName:"learn-more",slug:"/learn-more/getting-started",permalink:"/uptane-demo/docs/2.0.0/learn-more/getting-started",draft:!1,tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"LearnMoreSidebar",next:{title:"Threat Model",permalink:"/uptane-demo/docs/2.0.0/learn-more/threat"}},p={},l=[{value:"1. What is Uptane?",id:"1-what-is-uptane",level:2},{value:"2. Why Uptane?",id:"2-why-uptane",level:2},{value:"3. Key Features of Uptane",id:"3-key-features-of-uptane",level:2},{value:"4. Getting Started with Implementation",id:"4-getting-started-with-implementation",level:2},{value:"5. Resources",id:"5-resources",level:2},{value:"6. FAQs",id:"6-faqs",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-uptane"},"Getting Started with Uptane"),(0,n.kt)("p",null,"Welcome to the \"Getting Started\" guide for Uptane, the standard framework designed to secure software updates for vehicles. Whether you're a developer, security professional, or just a curious individual, this guide will provide you with a foundational understanding of Uptane and how it's revolutionizing automotive software security."),(0,n.kt)("h2",{id:"1-what-is-uptane"},"1. What is Uptane?"),(0,n.kt)("p",null,"Uptane is an open-source framework that ensures the security of software updates for vehicles. Given the increasing complexity of modern vehicles, which often rely on numerous software components, ensuring that these updates are secure and tamper-proof is crucial. Uptane addresses potential vulnerabilities and threats that can arise during the software update process."),(0,n.kt)("h2",{id:"2-why-uptane"},"2. Why Uptane?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Security"),": Uptane provides a multi-layered defense against various types of attacks, including those by nation-states.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Flexibility"),": It's designed to work seamlessly with existing software update systems.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Community-Driven"),": Being open-source, Uptane benefits from the collective expertise of the global developer community."))),(0,n.kt)("p",null,"Learn more in ",(0,n.kt)("a",{parentName:"p",href:"/uptane-demo/docs/learn-more/threat"},"Uptane Theat Model")," section."),(0,n.kt)("h2",{id:"3-key-features-of-uptane"},"3. Key Features of Uptane"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Director Repository"),": Determines which updates should be sent to each vehicle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Image Repository"),": Stores the metadata about the available images (software updates).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"End-to-end Security"),": Ensures that vehicles only install updates from legitimate sources.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Compromise Resilience"),": Even if an attacker compromises one part of the update system, other parts remain secure."))),(0,n.kt)("p",null,"Learn more in the ",(0,n.kt)("a",{parentName:"p",href:"/uptane-demo/docs/learn-more/design"},"Uptane Design")," section."),(0,n.kt)("h2",{id:"4-getting-started-with-implementation"},"4. Getting Started with Implementation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Understand the Uptane Standard"),": Familiarize yourself with the ",(0,n.kt)("a",{parentName:"p",href:"/uptane-demo/docs/standard/uptane-standard"},"Uptane Standard")," to understand its specifications and guidelines.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Define Implementation Requirements"),": ",(0,n.kt)("a",{parentName:"p",href:"/uptane-demo/docs/enhancements/pouf/pouf-main"},"Protocols, Operations, Usage, and Formats (POUFs)")," precisely specifies the wireline format and operations that any implementation using it must obey. Hence, implementations that use the same POUF are able to interoperate. An automotive OEM would establish a POUF definition for their particular Uptane update strategy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Set Up Repositories"),": Establish the Director and Image repositories.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Integrate with Your Update System"),": Modify your existing software update system to work with Uptane's repositories and verification processes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test"),": Before deploying, rigorously test the system to ensure it works as expected."))),(0,n.kt)("p",null,"Learn more in the ",(0,n.kt)("a",{parentName:"p",href:"/uptane-demo/docs/deployment/best-practices"},"Uptane Deployment Best Practices")," section."),(0,n.kt)("h2",{id:"5-resources"},"5. Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/uptane"},"Uptane GitHub Repositories")),": Access the source code and contribute to the project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/uptane-demo/docs/deployment/best-practices"},"Uptane Deployment Best Practices")),": A guide to help you deploy Uptane effectively.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/learn-more/participate"},"Uptane Community")),": Join the community, participate in discussions, and stay updated with the latest developments.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://uptane.github.io/papers/uptane_first_whitepaper_7821.pdf"},"Uptane First Whitepaper")),": A basic breakdown of what Uptane is and how it works."))),(0,n.kt)("h2",{id:"6-faqs"},"6. FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: Is Uptane only for vehicles?")),(0,n.kt)("p",null,"A: While Uptane was primarily designed for vehicles, its principles can be adapted for other IoT devices. The community is already aware of applications in robotics, industrial systems, medical and health care equipment, mart city devices, and aviation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: How does Uptane differ from other update security systems?")),(0,n.kt)("p",null,"A: Uptane offers a unique multi-layered defense approach, ensuring that even if one part is compromised, the entire system remains secure. It's a modular approach, in which features can be added in stages. In this way, it can offer improved protection to legacy systems."))}m.isMDXComponent=!0}}]);