"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[8601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={title:"Scudo: Addressing Software Supply Chain Security in Uptane"},r=void 0,s={unversionedId:"enhancements/pures/pure3",id:"version-1.2.0/enhancements/pures/pure3",title:"Scudo: Addressing Software Supply Chain Security in Uptane",description:"- PURE: 3",source:"@site/versioned_docs/version-1.2.0/enhancements/pures/pure3.md",sourceDirName:"enhancements/pures",slug:"/enhancements/pures/pure3",permalink:"/uptane-demo/docs/1.2.0/enhancements/pures/pure3",draft:!1,tags:[],version:"1.2.0",frontMatter:{title:"Scudo: Addressing Software Supply Chain Security in Uptane"},sidebar:"EnhancementsSidebar",previous:{title:"Offline Updates",permalink:"/uptane-demo/docs/1.2.0/enhancements/pures/pure2"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Reasoning",id:"reasoning",level:2},{value:"Specification",id:"specification",level:2},{value:"Modifications to the Repositories and Vehicle Interactions",id:"modifications-to-the-repositories-and-vehicle-interactions",level:3},{value:"Full Verification ECUs",id:"full-verification-ecus",level:3},{value:"Resource Constrained ECUs",id:"resource-constrained-ecus",level:3},{value:"Security Analysis",id:"security-analysis",level:2},{value:"Prototype",id:"prototype",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:2},{value:"Copyright",id:"copyright",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"References",id:"references",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PURE: 3"),(0,i.kt)("li",{parentName:"ul"},"Title: Scudo: Addressing Software Supply Chain Security in Uptane"),(0,i.kt)("li",{parentName:"ul"},"Version: 1"),(0,i.kt)("li",{parentName:"ul"},"Last-Modified: 2023-02-28"),(0,i.kt)("li",{parentName:"ul"},"Authors: Marina Moore ",(0,i.kt)("a",{parentName:"li",href:"mailto:marinamoore@nyu.edu"},"marinamoore@nyu.edu"),", Aditya Sirish ",(0,i.kt)("a",{parentName:"li",href:"mailto:aditya.sirish@nyu.edu"},"aditya.sirish@nyu.edu"),", Lois Anne Delong ",(0,i.kt)("a",{parentName:"li",href:"mailto:lad278@nyu.edu"},"lad278@nyu.edu")),(0,i.kt)("li",{parentName:"ul"},"Status: Accepted"),(0,i.kt)("li",{parentName:"ul"},"Content-Type: <text/markdown>"),(0,i.kt)("li",{parentName:"ul"},"Created: 2022-03-30")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Software supply chain attacks are on the rise. A 2022 Sonatype report found a\n742% increase in the last three years. As a result, companies across all\nindustry sectors have turned their attention to software supply chain security.\nThe need to find solutions quickly is further fueled by rapidly increasing\nregulations and standards, including President Biden\u2019s U.S.Executive Order 14028."),(0,i.kt)("p",null,"In this PURE, we propose Scudo, a framework that combines the compromise\nresilience and secure delivery protection of Uptane and the end-to-end software\nsupply chain security guarantees offered by in-toto. It describes how in-toto\nmetadata can be integrated into an automotive software supply chain that already\nuses Uptane. It further establishes verification responsibilities for ECUs based\non the resources they possess and presents a stop-gap option for automobiles\nwith no sufficiently capable ECUs."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Software supply chain attacks are on the rise with the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.sonatype.com/state-of-the-software-supply-chain/introduction"},"2022 State of the Software Supply Chain report"),",\nnoting a 742% increase over the course of the last three years. But, it was the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.cynet.com/attack-techniques-hands-on/sunburst-backdoor-c2-communication-protocol/"},"2020 Sunburst attack"),"\nthat really made both government and corporate CISOs take action. Affecting more\nthan 100 companies and nine government agencies, the cause of the attack was\nSunburst malware that had been uploaded via a routine update from Orion software\nproduced by SolarWinds. The attack taught both public and private concerns some\nhard lessons, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The very thing designed to protect the security of software-patches and\nupdates that fix routine vulnerabilities-can also be used to deliver malware\nthat can damage or corrupt."),(0,i.kt)("li",{parentName:"ul"},"As software products contain third-party components, program developers are\nnot in complete control of the contents of their products."),(0,i.kt)("li",{parentName:"ul"},"Malware can linger undetected for extended periods of time, allowing it to\ninfect every system that touches it. The Sunburst malicious code was part of\nan update released by SolarWinds in the spring of 2020, yet it was not\nreported until December of that year.")),(0,i.kt)("p",null,"Automotive software supply chains are particularly tempting targets for\nattackers. This is because automotive software runs on a large number of\nvehicles and updating all of them to recover quickly from an attack is a\nslow and difficult proposition. As such, a successful software supply chain\nattack means that thousands (or more) of vehicles are impacted. Any attack that\ntargets a large number of vehicles on roads can do immeasurable damage. Further,\nwhile Uptane can securely deliver updates to vehicles to recover from the\nattack, ensuring every vehicle on the road receives the update immediately is\nvery difficult given the circumstances of use of these vehicles. Therefore,\nstrategies that can secure automotive software supply chains are vital to\n",(0,i.kt)("em",{parentName:"p"},"avoid")," such attacks altogether."),(0,i.kt)("p",null,"Governments around the world have recognized this fact. Regulations are\nforthcoming from the United Nations and other governing bodies, and standards\nhave been published that specify how software running on automobiles must be\nsecured. President Biden of the United States of America issued an Executive\nOrder describing the need to improve the nation's cybersecurity. This EO, in\nparticular, pushes for solutions like Software Bills of Materials (SBOMs) that\nlist the components of software artifacts. This information is vital in ensuring\ndevelopers are aware of the components in their supply chain so that they can\nfix vulnerabilities as and when they are discovered. For example, an SBOM would\nhelp developers react quickly to situations like 2021's log4j incident by\ninforming them of the software products that require patches or updates."),(0,i.kt)("p",null,"Unfortunately, SBOMs do not provide end-to-end software supply chain security.\nThey do not guarantee the integrity of either the operations performed as part\nof the software supply chain, or the artifacts they consume and produce. An SBOM\nalso cannot help with verifying that each operation was performed by authorized\nactors, or indeed that all required operations were in fact performed. So, the\nuse of SBOMs will not prevent attacks like that against SolarWinds, which used a\ncompromised build server. A more comprehensive framework is necessary and is\ndescribed in this document."),(0,i.kt)("h2",{id:"reasoning"},"Reasoning"),(0,i.kt)("p",null,"in-toto is a comprehensive framework that secures each step in the software\nsupply chain. With in-toto, software supply chain owners can enforce policies\npertaining to the flow of artifacts through the supply chain, and provide proof\nthat authorized people or bots made changes to artifacts at any given step.\nThus, in-toto can be used to secure software from the very first step all the\nway through the development pipeline. Furthermore, the framework plays well with\nother systems and tools that attempt to secure specific aspects of the software\nsupply chain. in-toto is integrated into build tools and systems like Jenkins\nand Tekton, and is compatible with complementary software supply chain security\nefforts such as SLSA, Grafeas, Sigstore, and SBOMs."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Note: The reader is expected to be familiar with the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/in-toto/docs/blob/master/in-toto-spec.md"},"in-toto Specification"),"."),(0,i.kt)("p",null,"We describe how in-toto can be used to achieve software supply chain security\nalongside the Uptane deployment. In such a model, in-toto can be backed by\nthe Uptane root of trust, and use Uptane's delegation structure to distribute\nall of in-toto's metadata. Essentially, in-toto metadata is used to attest to\nthe steps performed in the software supply chain itself, while Uptane is used\nto securely distribute that metadata alongside the ECU images. This combination\nof in-toto for software supply chain guarantees and Uptane for secure\ndistribution of ECU images and in-toto metadata is called Scudo."),(0,i.kt)("h3",{id:"modifications-to-the-repositories-and-vehicle-interactions"},"Modifications to the Repositories and Vehicle Interactions"),(0,i.kt)("p",null,"To implement Scudo, Uptane's Image repository will need to be updated to enable\nit to store in-toto metadata alongside the images. While the Director repository\ncan also be used, the Image repository is recommended as its contents are\ntypically signed for using offline keys."),(0,i.kt)("p",null,"When an image is submitted to the Image repository, it MUST be accompanied by\nits in-toto metadata. The in-toto layout and link metadata for every image are\nnoted in the opaque \"custom\" field of the image's entry in Targets metadata.\nThis way, there is no ambiguity about the in-toto metadata to be used when an\nimage is fetched and verified. Further, as it MAY not be practical for the top\nlevel Targets role to issue new metadata for every update, Uptane's delegations\nmodel can be used to make this entire process more scalable. Instead, delegated\nroles can be used to sign for the image itself and its in-toto link metadata.\nHowever, in-toto layouts and the key artifacts used to verify them SHOULD be\nsigned for by roles that use ",(0,i.kt)("em",{parentName:"p"},"offline")," keys. An example of such a role\nin typical deployments is the top level Targets role."),(0,i.kt)("p",null,"As the Image repository handles in-toto metadata for the images, the Director\nrepository has no additional responsibilities than those specified in the Uptane\nstandard. Once the Director repository decides which images are required and\nsigns Targets metadata for them, the vehicle MUST fetch the images and all the\ncorresponding metadata using the interfaces provided by both the repositories.\nFrom the Director repository, the automobile receives Uptane metadata only. From\nthe Image repository, the automobile receives Uptane metadata, the image itself,\nand its corresponding in-toto metadata."),(0,i.kt)("h3",{id:"full-verification-ecus"},"Full Verification ECUs"),(0,i.kt)("p",null,"The Primary ECU receives images and metadata from the repositories, and sends\nthem on to the other ECUs that it updates. Each Full Verification ECU is\nextended to perform independent in-toto verification that will be secure even\nif the Primary ECU is compromised. Some Full Verification ECUs, for example the\nPrimary, are also expected to perform in-toto verification on behalf of Partial\nVerification ECUs that are resource constrained."),(0,i.kt)("p",null,"For every target image the client needs to install, the corresponding in-toto\nlayout, links, and keys are identified via the custom field of the existing\nUptane metadata. These files are available as targets on the Image repository.\nTherefore, for each installable target, the updater will need to download and\nverify the Uptane metadata that signs for the in-toto metadata, either the\nTargets role or a delegated role. If verification passes, the actual in-toto\nmetadata files\u2014layout, links, and public keys\u2014MUST be downloaded and their\nhashes MUST be compared with the Uptane metadata. With these two checks,\nUptane\u2019s secure delivery properties are extended to the in-toto files. These\nfiles can then be used with confidence by the client to perform in-toto\nverification."),(0,i.kt)("h3",{id:"resource-constrained-ecus"},"Resource Constrained ECUs"),(0,i.kt)("p",null,'There are a number of different types of resource constraints that accompany the\naddition of in-toto metadata. Some automobiles MAY have no ECUs capable of\nproviding even a basic level of software supply chain security due to bandwidth\nor memory constraints. Therefore, this PURE presents a "stop-gap" option. In\nthis configuration, the repository verifies the software supply chain of the\nimage and signs an in-toto ',(0,i.kt)("em",{parentName:"p"},"summary link")," with the keys used to sign either the\ntop level Targets or delegated signer role. This way, the key used to sign the\nsummary link metadata is securely bootstrapped and can be rotated in case of a\ncompromise."),(0,i.kt)("p",null,"For each target image, the ",(0,i.kt)("em",{parentName:"p"},"custom")," field points to the summary link rather than\nall the in-toto metadata. The client MUST download and verify the Targets\nmetadata for the summary link and, if this passes, download and verify the hash\nand signature on the summary link. Once the authenticity of the summary link is\nestablished, the client MUST verify that the hashes in the products field of the\nsummary link match those of the image."),(0,i.kt)("p",null,"The summary link does offer some evidence that the repository performed in-toto\nverification on behalf of the automobile, but it is ",(0,i.kt)("strong",{parentName:"p"},"not")," a sufficiently\nstrong replacement for actual verification on the vehicle. A key issue with the\nstop-gap option is that it turns the Image repository into a single point of\nfailure and therefore can only be trusted as long as the repository remains\nsecure. As such, this model MUST only be adopted as a stop-gap option until the\nupdate system can be transitioned to the full model in which in-toto\nverification happens on individual vehicles."),(0,i.kt)("p",null,"Another resource that MAY be constrained is the amount of in-vehicle bandwidth\navailable to transfer data between the different ECUs. The addition of in-toto\nmetadata greatly increases the amount of information communicated between the\nPrimary ECU and the other ECUs. In such vehicles, the Primary ECU MUST receive\nthe pertinent in-toto metadata in addition to the ECU image, perform in-toto\nverification, and then forward the image and (optionally) the relevant Uptane\nmetadata. If the vehicle is configured such that the Uptane metadata is\nforwarded to the target ECU, then the ECU can perform just the Uptane\nverification workflow, either the full or partial variant depending on the\nresources it possesses. However, as the Primary ECU MUST use the Uptane metadata\nto verify the in-toto metadata it received for the image, it might be sufficient\nto have it perform both Uptane and in-toto verification on behalf of the target\nECU. All non-primary ECUs can then perform just the partial verification\nworkflow. This is an implementation detail left to adopters to decide."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type of ECU"),(0,i.kt)("th",{parentName:"tr",align:null},"Uptane Responsibility"),(0,i.kt)("th",{parentName:"tr",align:null},"in-toto Responsibility"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Primary ECU"),(0,i.kt)("td",{parentName:"tr",align:null},"Full Uptane verification for its images, for all in-toto metadata, and (optionally) other ECU images"),(0,i.kt)("td",{parentName:"tr",align:null},"All in-toto verification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secondary Full Verification ECU"),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional) Full / partial Uptane verification for its images"),(0,i.kt)("td",{parentName:"tr",align:null},"No in-toto verification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resource Constrained ECU"),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional) Partial Uptane verification for its images"),(0,i.kt)("td",{parentName:"tr",align:null},"No in-toto verification")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table:")," Comparison of responsibilities expected of different ECUs deployed\nwith limited in-vehicle bandwidth. The in-toto verification process used can be\neither the full workflow or the stop-gap option, as this choice does not affect\nindividual ECUs, but only the setup as a whole."),(0,i.kt)("p",null,"Finally, even if the additional in-vehicle bandwidth overhead is not a concern,\na subset of ECUs MAY lack the resources to perform all of Scudo's verification\nworkflows. Note that in the stop-gap option, ",(0,i.kt)("em",{parentName:"p"},"all")," ECUs lacked the necessary\nresources. Uptane already accounts for such secondary ECUs by providing a\nseparate Partial Verification workflow. Scudo assumes that these Partial\nVerification ECUs are also incapable of performing in-toto verification.\nIn addition, there MAY be Uptane Full Verification ECUs that also lack the\nresources to perform the added in-toto verification."),(0,i.kt)("p",null,"For these ECUs, Scudo specifies that other capable ECUs, perhaps the Primary\nECU, MUST perform in-toto verification on behalf of the resource constrained\nECUs. In this model, while every ECU MAY NOT be verifying the software supply\nchain of the images it is expected to install, verification is still happening\non the individual automobile. Essentially, there is no difference in the update\nworkflow of resource constrained ECUs but they are more robust because of by the\nsupply chain verification happening on the automobile."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type of ECU"),(0,i.kt)("th",{parentName:"tr",align:null},"Uptane Responsibility"),(0,i.kt)("th",{parentName:"tr",align:null},"in-toto Responsibility"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Primary ECU (Full Verification)"),(0,i.kt)("td",{parentName:"tr",align:null},"Full Uptane verification for its images and all secondaries"),(0,i.kt)("td",{parentName:"tr",align:null},"in-toto verification of its images as well as images of resource constrained ECUs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Secondary Full Verification ECU"),(0,i.kt)("td",{parentName:"tr",align:null},"Full Uptane verification for its images"),(0,i.kt)("td",{parentName:"tr",align:null},"in-toto verification for its images")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resource Constrained ECU"),(0,i.kt)("td",{parentName:"tr",align:null},"Partial Uptane verification for its images"),(0,i.kt)("td",{parentName:"tr",align:null},"No in-toto verification")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table:")," Comparison of responsibilities expected of different ECUs where\nin-vehicle communication bandwidth is not constrained. As before, the in-toto\nverification process used can be either the full workflow or the stop-gap\noption, as this choice does not affect individual ECUs, but only the setup as a\nwhole."),(0,i.kt)("p",null,"Note that the stop-gap option can be employed in conjunction with the solutions\nfor the other constraints. A vehicle MAY simultaneously have no ECUs capable of\nfull in-toto verification ",(0,i.kt)("em",{parentName:"p"},"and")," limited bandwidth for in-vehicle communication.\nSimilarly, a vehicle MAY have no ECUs capable of full in-toto verification ",(0,i.kt)("em",{parentName:"p"},"and"),"\nsome of these ECUs MAY be incapable of any in-toto verification at all."),(0,i.kt)("h2",{id:"security-analysis"},"Security Analysis"),(0,i.kt)("p",null,"Scudo is an extension for Uptane that adds in-toto's software supply chain\nsecurity properties. Therefore, its threat model is a combination of the threat\nmodels of Uptane for the delivery of the software artifacts, and in-toto for the\ndevelopment of the image as it passes through the software supply chain."),(0,i.kt)("h2",{id:"prototype"},"Prototype"),(0,i.kt)("p",null,"in-toto has previously been deployed with Uptane's parent project, The Update\nFramework (TUF), as described here in Datadog's pipelines. This deployment has\nbeen documented as two in-toto Enhancements (ITEs), ","[ITE-2]"," and ","[ITE-3]",". Datadog\nhas also published a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/"},"blog post"),"\ndescribing their setup and released\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DataDog/integrations-core/tree/master/datadog_checks_downloader"},"open source tooling"),"\nthat combines in-toto's and TUF's verification workflows."),(0,i.kt)("h2",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.kt)("p",null,"Backwards compatibility is a key factor when introducing in-toto to an existing\nUptane deployment. Merely adding in-toto metadata to Uptane Targets metadata\ndoes not change Uptane's verification workflow. Older Uptane clients can\ncontinue to performing just Uptane's verification workflow for the images and\nsafely ignore references to in-toto metadata."),(0,i.kt)("p",null,"In addition, adopters MUST be careful with how they switch their devices over\nfrom performing only Uptane verification to also including in-toto verification\nfor their ECU images. This is because there MAY be older images without in-toto\nmetadata that are still the latest for their respective ECUs. In these cases,\nthe workflow MUST NOT expect in-toto metadata. Similarly, the workflow MUST NOT\nbe fooled into skipping in-toto verification for newer images that actually have\nin-toto metadata."),(0,i.kt)("p",null,"Finally, as always, in-toto and Uptane implementations SHOULD NOT make\nbackward-incompatible changes to how signatures are generated. This will ensure\nthat previous package managers are able to continue to install new packages.\nNote that Uptane can otherwise be used to safely rotate the keys for the entire\nsystem, including those using different key types, key sizes, signature schemes,\nand cryptographic hashes. Any backwards incompatible changes that are\nunavoidable SHOULD be handled with a clear plan."),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"This document has been placed in the public domain."),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"This PURE was inspired by two in-toto Enhancements, ITE-2 and ITE-3, that\ndescribe how TUF, Uptane's parent project, and in-toto can be combined."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/in-toto/docs/blob/master/in-toto-spec.md"},"in-toto Specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uptane.github.io/papers/uptane-standard.2.0.0.html"},"Uptane v2.0.0 Standard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uptane.github.io/papers/scudo-whitepaper.pdf"},"Scudo Whitepaper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/in-toto/ITE/blob/master/ITE/2/README.adoc"},"ITE-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/in-toto/ITE/blob/master/ITE/3/README.adoc"},"ITE-3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sonatype.com/state-of-the-software-supply-chain/introduction"},"Sonatype's 2022 State of the Software Supply Chain report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cynet.com/attack-techniques-hands-on/sunburst-backdoor-c2-communication-protocol/"},"2020 Sunburst attack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.datadoghq.com/blog/engineering/secure-publication-of-datadog-agent-integrations-with-tuf-and-in-toto/"},"Secure Publication of Datadog Agent Integrations with TUF and in-toto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DataDog/integrations-core/tree/master/datadog_checks_downloader"},"Datadog's Verification of TUF and in-toto metadata"))))}d.isMDXComponent=!0}}]);