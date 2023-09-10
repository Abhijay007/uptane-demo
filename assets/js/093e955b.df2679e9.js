"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[2938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),c=i,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,title:"POUF Purpose and Guidelines"},r=void 0,s={unversionedId:"Enhancements/POUF/PoufMain",id:"Enhancements/POUF/PoufMain",title:"POUF Purpose and Guidelines",description:"- Title: POUF Purpose and Guidelines",source:"@site/docs/Enhancements/POUF/PoufMain.md",sourceDirName:"Enhancements/POUF",slug:"/Enhancements/POUF/PoufMain",permalink:"/uptane-demo/docs/Enhancements/POUF/PoufMain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Enhancements/POUF/PoufMain.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"POUF Purpose and Guidelines"},sidebar:"EnhancementsSidebar",next:{title:"Uptane Reference Implementation POUF",permalink:"/uptane-demo/docs/Enhancements/POUF/Pouf1"}},l={},d=[{value:"What is a POUF?",id:"what-is-a-pouf",level:2},{value:"Adding POUFs",id:"adding-poufs",level:2},{value:"POUF Contents",id:"pouf-contents",level:3},{value:"Preamble",id:"preamble",level:4},{value:"Abstract",id:"abstract",level:4},{value:"Protocols",id:"protocols",level:4},{value:"Operations",id:"operations",level:4},{value:"Usage",id:"usage",level:4},{value:"Formats",id:"formats",level:4},{value:"Copyright",id:"copyright",level:4},{value:"Workflow",id:"workflow",level:3},{value:"Posting a POUF",id:"posting-a-pouf",level:4},{value:"Updating a POUF",id:"updating-a-pouf",level:4},{value:"Using POUFs",id:"using-poufs",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Title: POUF Purpose and Guidelines"),(0,i.kt)("li",{parentName:"ul"},"Version: 1.0.0"),(0,i.kt)("li",{parentName:"ul"},"Last-Modified: 17-06-2019"),(0,i.kt)("li",{parentName:"ul"},"Author: Marina Moore"),(0,i.kt)("li",{parentName:"ul"},"Created: 14-03-2019")),(0,i.kt)("h1",{id:"uptane-implementation-poufs"},"Uptane Implementation POUFs"),(0,i.kt)("p",null,"This repository will contain links to Uptane POUFs."),(0,i.kt)("h2",{id:"what-is-a-pouf"},"What is a POUF?"),(0,i.kt)("p",null,"A guiding principle of the Uptane framework is to give each implementer as much design flexibility as possible, acknowledging that Uptane needs to run on existing, often customized, software and hardware systems. For this reason, the framework does not specify data binding formats. Yet, this means Uptane can not guarantee interoperability. To provide a way for two or more Uptane implementations to work together, the framework employs a mechanism to describe the protocols, operations, usage, and formats (POUF). A POUF precisely specifies the wireline format and operations that any implementation using it must obey. Hence, implementations that use the same POUF are able to interoperate. In particular, this can be important for ECU suppliers, so that they can have a detailed specification to work with."),(0,i.kt)("p",null,"A POUF contains all the information needed for a third party to design a compatible Uptane implementation. This includes the protocols and contents of all data transmitted on the wire as well as design choices that impact the functionality of the system. The POUF functions like a layer placed over the existing Uptane specification, so certain requirements, such as filenames, file contents, and signatures, do not need to be restated in the POUF. The only restriction placed upon the creation of any POUF is that it MUST NOT alter or violate anything defined in the Uptane Standard."),(0,i.kt)("h2",{id:"adding-poufs"},"Adding POUFs"),(0,i.kt)("p",null,"Each POUF is effectively under the control of its author, and its contents will not be subject to the level of scrutiny or analysis the community provides to the Uptane specification. Instead, the main role of the Uptane community in the POUF process will be to provide a common repository with links to external POUFs."),(0,i.kt)("p",null,"The format of POUFs and this document are inspired by TAPs (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/theupdateframework/taps/blob/master/tap1.md"},"https://github.com/theupdateframework/taps/blob/master/tap1.md"),")."),(0,i.kt)("h3",{id:"pouf-contents"},"POUF Contents"),(0,i.kt)("p",null,"A POUF should include the following sections:"),(0,i.kt)("h4",{id:"preamble"},"Preamble"),(0,i.kt)("p",null,"RFC 822 style headers containing metadata about the POUF, including the POUF number, a short descriptive title (limited to a maximum of 44 characters), optionally the names and contact info for each author, etc. The header should include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"POUF: POUF number"),(0,i.kt)("li",{parentName:"ul"},"Title: Title of the POUF"),(0,i.kt)("li",{parentName:"ul"},"Version: POUF Version (Note: It is recommended that the major POUF version matches the major version of the Uptane Standard, but any versioning scheme is permitted.)"),(0,i.kt)("li",{parentName:"ul"},"Last-Modified: in dd-mmm-yyyy format"),(0,i.kt)("li",{parentName:"ul"},"Author: optional list of authors' real names and email addresses"),(0,i.kt)("li",{parentName:"ul"},"Status: Draft / Accepted / Obsolete"),(0,i.kt)("li",{parentName:"ul"},"Uptane Version: The Uptane version(s) this POUF implements (for example 1.0.0 or 2.0.3-2.0.6)"),(0,i.kt)("li",{parentName:"ul"},"Created: date created on, in dd-mmm-yyyy format")),(0,i.kt)("h4",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The abstract provides a short overview of what the POUF contains. This SHOULD include the overarching design philosophy. If the POUF has been updated, the abstract SHOULD explain what is changed in the new version."),(0,i.kt)("h4",{id:"protocols"},"Protocols"),(0,i.kt)("p",null,"The protocols section will describe the communications over the network. This will include the protocols used to transmit data. If relevant, the version of the protocol and any customizations SHOULD be explained so that any implementer will have a bitwise-identical use of the protocol. In addition, all messages that will be transmitted MUST be explained using a Message Handler Table. This table will include all messages that will be transmitted by the implementation. Each entry SHALL include at least the sender, receiver, data (including signatures), and the expected response."),(0,i.kt)("h4",{id:"operations"},"Operations"),(0,i.kt)("p",null,"The operations section contains a description of any design elements that differ from the Uptane Standard. This section will not include the format of data, but will include all other elements of the POUF. Any MAYs and SHOULDs from the Uptane Standard SHALL be described here. In particular, any optional features (MAYs) or recommendations (SHOULDs) from the specification SHALL be mentioned with justification for why the feature was or was not used. In addition, any feature added to the specification that is needed for compatibility MUST be explained."),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The usage section will contain a description of how the operators of the Uptane implementation manage keys and responsibilities of the system. This will include a description of how online and offline keys are managed and rotated, how the supply chain is managed, and how images are generated. In addition, it MUST include a Data Table that describes all data stored on each Uptane entity. This includes which keys are stored on each entity as well as any other required data. At a minimum, data stored on Primary ECUs, Secondary ECUs, the director repository, and the image repository MUST be described in the Data Table."),(0,i.kt)("h4",{id:"formats"},"Formats"),(0,i.kt)("p",null,"Data formats contain details about the encoding and format of Uptane data as it is stored. The encoding MUST describe how data is formatted when it is stored on repositories and ECUs. Data that is not transmitted does not need to be included in a POUF. Descriptions of formats SHALL include the order of fields to allow for bitwise identical implementations. Every bit of transmitted data MUST be accounted for in the POUF. This section MAY include common formatting used by all metadata files to avoid redundancy. At a minimum, this section will include the format for the following data, including all fields required by the Uptane specification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Root"),(0,i.kt)("li",{parentName:"ul"},"Snapshot"),(0,i.kt)("li",{parentName:"ul"},"Targets"),(0,i.kt)("li",{parentName:"ul"},"Delegated targets"),(0,i.kt)("li",{parentName:"ul"},"Timestamp"),(0,i.kt)("li",{parentName:"ul"},"Vehicle version manifest")),(0,i.kt)("p",null,"Each file that is transmitted should be described. In addition to the required files, the following MAY be included:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time server communication"),(0,i.kt)("li",{parentName:"ul"},"Repository mapping metadata")),(0,i.kt)("h4",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Each POUF MAY either be explicitly labeled as placed in the public domain or licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://opencontent.org/openpub/"},"Open Publication License"),"."),(0,i.kt)("h3",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"A POUF may be authored by any Uptane implementer and is the responsibility of that implementer. The Uptane community does not vet POUFs, so conformance with the requirements in this document are left up to the POUF implementer."),(0,i.kt)("p",null,"The Uptane community does not endorse POUFs, but does store links to external POUFs so that they can be found by the community. Links to POUFs will be stored on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/uptane/POUFs"},"Uptane POUF repository"),". This allows a POUF to be publicly found and implemented. To get a POUF onto the Uptane POUF repository, a link to the POUF will be submitted using the Github pull request process. If an implementer wishes to post a POUF anonymously, they MAY ask an Uptane maintainer to post a POUF link on their behalf."),(0,i.kt)("h4",{id:"posting-a-pouf"},"Posting a POUF"),(0,i.kt)("p",null,"A POUF SHALL be posted to the Uptane repository by submitting a pull request. The pull request SHALL contain a link to a POUF written in the format specified in ",(0,i.kt)("a",{parentName:"p",href:"#pouf-contents"},"POUF Contents"),". This link will be added to POUF-links file. A POUF SHALL contain a complete description of the data transmitted, SHALL not duplicate an existing POUF, and MUST be technically sound."),(0,i.kt)("p",null,"Once a link to a POUF is included on the Uptane POUF repository, it will be assigned a POUF number. The POUF number will be unique, but will remain the same for any subsequent changes to the POUF. The POUF number will be listed in the POUF and in the POUF-links file."),(0,i.kt)("p",null,"A posted POUF SHOULD be implemented. This implementation MAY be open or closed source. If the implementation is closed source, the author SHOULD attest that the POUF can be implemented in the abstract."),(0,i.kt)("p",null,"The link posted on the Uptane POUF repository MAY be a direct link to the POUF document or MAY be a link to a repository or directory that contains the POUF. If the link posted points to a directory or repository, old versions of the POUF MAY be maintained by the POUF author. If the author instead links directly to a POUF pdf, this link will have to be updated on the Uptane POUF repository to contain the updated POUF."),(0,i.kt)("h4",{id:"updating-a-pouf"},"Updating a POUF"),(0,i.kt)("p",null,"If a change is made to an accepted POUF, the POUF version SHALL be updated. The old version of the POUF MAY continue to be stored and used. Maintaining old POUF versions is the responsibility of the POUF author. If any update to a POUF eliminates the need for an old POUF version, the old POUF SHOULD be marked as Obsolete."),(0,i.kt)("p",null,"An updated POUF might fix a bug or add a feature that is not included in the Uptane Standard. The abstract of the updated POUF SHOULD explain why the POUF is being updated and which sections have changed. This will allow any implementer who used the previous version of the POUF to update their implementation to the new POUF."),(0,i.kt)("p",null,"Every time the Uptane Standard has a major change (as indicated by the first number in the version), a POUF MUST be updated to support the new standard version. A major change to the Uptane Standard is not backwards compatible, so the POUF MUST be updated to include any new or updated features. Once the changes are added to the POUF, the POUF version and Uptane Version in the preamble MUST be updated as well. The old version of the POUF may be maintained for implementations that have not updated to the new version of the Uptane Standard."),(0,i.kt)("p",null,"If a minor change is made to the Uptane Standard, the POUF SHOULD be updated if the change affects any aspect of the POUF contents. The decision about whether a minor change will cause the POUF to update is left up to the POUF maintainer. If a change is not made but the POUF still complies with the most recent Uptane Standard, the Uptane Version in the Preamble SHOULD be updated."),(0,i.kt)("h2",{id:"using-poufs"},"Using POUFs"),(0,i.kt)("p",null,"When an Uptane implementation uses a POUF, it should list the POUF number (or numbers) in its documentation. If the implementation is updated to a new POUF version, the POUF number should also be updated in the documentation."))}u.isMDXComponent=!0}}]);