"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[5906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,title:"ChangeLog"},i="Changelog",l={unversionedId:"standard/changelog",id:"version-1.2.0/standard/changelog",title:"ChangeLog",description:"All notable changes to this project will be documented in this file.",source:"@site/versioned_docs/version-1.2.0/standard/changelog.md",sourceDirName:"standard",slug:"/standard/changelog",permalink:"/uptane-demo/docs/1.2.0/standard/changelog",draft:!1,tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"ChangeLog"},sidebar:"StandardSidebar ",previous:{title:"Uptane Standard 1.2.0",permalink:"/uptane-demo/docs/1.2.0/standard/uptane-standard"}},s={},d=[{value:"1.2.0 - 2021-07-16",id:"120---2021-07-16",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Removed",id:"removed",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,a.kt)("p",null,"The format is based on ",(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,a.kt)("h2",{id:"120---2021-07-16"},"[1.2.0]"," - 2021-07-16"),(0,a.kt)("p",null,"As this is the second minor release issued in 2021, the short list of changes made to the Uptane Standard between January 8 and July 2 of this year were primarily wordsmithing corrections to improve clarity."),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'A "SHOULD" requirement to the Standard that recommends including vehicle identifiers to targets metadata in order to avoid replay attacks. The sentence "Targets metadata from the Director repository SHOULD include a vehicle identifier if there are no images included in the targets metadata" was added to Section 5.2.3.1.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The word "unique" wherever the Standard mentions key thresholds. This is to clarify that multiple signatures from the same key do not count as a threshold.'))),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The location of the "Terminology" section. All definitions have been moved to the Glossary section of the Deployment Best Practices document.')),(0,a.kt)("h3",{id:"removed"},"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The use of the phrase "secondary storage," because this usage was very unclear. Instead, the Standard now refers to secondaries with "limited storage to receive an image."')))}u.isMDXComponent=!0}}]);