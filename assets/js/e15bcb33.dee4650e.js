"use strict";(self.webpackChunkuptane=self.webpackChunkuptane||[]).push([[8326],{5374:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.1.0","label":"1.1.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.1.0","isLast":false,"docsSidebars":{"LearnMoreSidebar":[{"type":"link","label":"Getting Started","href":"/uptane-demo/docs/1.1.0/LearnMore/gettingStarted","docId":"LearnMore/gettingStarted"},{"type":"link","label":"Threat Model","href":"/uptane-demo/docs/1.1.0/LearnMore/threat","docId":"LearnMore/threat"},{"type":"link","label":"Uptane Design","href":"/uptane-demo/docs/1.1.0/LearnMore/design","docId":"LearnMore/design"},{"type":"link","label":"Audio-Visuals","href":"/uptane-demo/docs/1.1.0/LearnMore/audio","docId":"LearnMore/audio"},{"type":"link","label":"Contributing","href":"/uptane-demo/docs/1.1.0/LearnMore/Participate","docId":"LearnMore/Participate"},{"type":"link","label":"Publications","href":"/uptane-demo/docs/1.1.0/LearnMore/publications","docId":"LearnMore/publications"},{"type":"link","label":"Security Audits","href":"/uptane-demo/docs/1.1.0/LearnMore/audits","docId":"LearnMore/audits"},{"type":"link","label":"Press","href":"/uptane-demo/docs/1.1.0/LearnMore/press","docId":"LearnMore/press"},{"type":"link","label":"Adoptions","href":"/uptane-demo/docs/1.1.0/LearnMore/adoptions","docId":"LearnMore/adoptions"},{"type":"link","label":"History","href":"/uptane-demo/docs/1.1.0/LearnMore/history","docId":"LearnMore/history"},{"type":"link","label":"About Us","href":"/uptane-demo/docs/1.1.0/LearnMore/About","docId":"LearnMore/About"}],"EnhancementsSidebar":[{"type":"category","label":"POUF","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"POUF Purpose and Guidelines","href":"/uptane-demo/docs/1.1.0/Enhancements/POUF/PoufMain","docId":"Enhancements/POUF/PoufMain"},{"type":"link","label":"Uptane Reference Implementation POUF","href":"/uptane-demo/docs/1.1.0/Enhancements/POUF/Pouf1","docId":"Enhancements/POUF/Pouf1"}]},{"type":"category","label":"PUREs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PURE Purpose and Guidelines","href":"/uptane-demo/docs/1.1.0/Enhancements/PUREs/pure1","docId":"Enhancements/PUREs/pure1"},{"type":"link","label":"Offline Updates","href":"/uptane-demo/docs/1.1.0/Enhancements/PUREs/pure2","docId":"Enhancements/PUREs/pure2"},{"type":"link","label":"Scudo: Addressing Software Supply Chain Security in Uptane","href":"/uptane-demo/docs/1.1.0/Enhancements/PUREs/pure3","docId":"Enhancements/PUREs/pure3"}]}],"StandardSidebar ":[{"type":"link","label":"Uptane Standard 1.1.0","href":"/uptane-demo/docs/1.1.0/Standard/uptaneStandard","docId":"Standard/uptaneStandard"},{"type":"link","label":"ChangeLog","href":"/uptane-demo/docs/1.1.0/Standard/changelog","docId":"Standard/changelog"},{"type":"link","label":"Download","href":"pathname:///papers/uptane-standard.1.1.0.pdf"}],"DeploymentConsiderationSidebar":[{"type":"link","label":"Best Practices 1.1.0","href":"/uptane-demo/docs/1.1.0/Deployment/BestPractices","docId":"Deployment/BestPractices"},{"type":"link","label":"Download","href":"pathname:///papers/uptane-deployment-best-practices-1.1.0.pdf"}]},"docs":{"Deployment/BestPractices":{"id":"Deployment/BestPractices","title":"Best Practices 1.1.0","description":"Companion Document to Uptane Standard for Design and Implementation V.1.1.0","sidebar":"DeploymentConsiderationSidebar"},"Enhancements/POUF/Pouf1":{"id":"Enhancements/POUF/Pouf1","title":"Uptane Reference Implementation POUF","description":"- POUF: 1","sidebar":"EnhancementsSidebar"},"Enhancements/POUF/PoufMain":{"id":"Enhancements/POUF/PoufMain","title":"POUF Purpose and Guidelines","description":"- Title: POUF Purpose and Guidelines","sidebar":"EnhancementsSidebar"},"Enhancements/PUREs/pure1":{"id":"Enhancements/PUREs/pure1","title":"PURE Purpose and Guidelines","description":"- PURE: 1","sidebar":"EnhancementsSidebar"},"Enhancements/PUREs/pure2":{"id":"Enhancements/PUREs/pure2","title":"Offline Updates","description":"- PURE: 2","sidebar":"EnhancementsSidebar"},"Enhancements/PUREs/pure3":{"id":"Enhancements/PUREs/pure3","title":"Scudo: Addressing Software Supply Chain Security in Uptane","description":"- PURE: 3","sidebar":"EnhancementsSidebar"},"LearnMore/About":{"id":"LearnMore/About","title":"About Us","description":"Uptane is an open software update strategy that was initially conceived and developed in partnership with OEMs and suppliers within the automotive industry. Today, the Standard continues to evolve based on the direct input of current users and new adopters, from automakers to newer implementers in fields like robotics, industrial controls, and more.","sidebar":"LearnMoreSidebar"},"LearnMore/adoptions":{"id":"LearnMore/adoptions","title":"Adoptions","description":"--------------------------------------------------------------------------------","sidebar":"LearnMoreSidebar"},"LearnMore/audio":{"id":"LearnMore/audio","title":"Audio-Visuals","description":"The basic principles of Uptane, and the framework\'s development over time, are addressed in some detail in a series of Powerpoint presentations originally put together for Uptane industry workshops and conferences. Links to these slides appear below, including two slide decks from its most recent programs targeted to international audiences. These include a virtual program held in October 2022, and an in-person program held in December 2022\\\\.","sidebar":"LearnMoreSidebar"},"LearnMore/audits":{"id":"LearnMore/audits","title":"Security Audits","description":"Both Uptane and TUF, the secure framework on which it was based, have undergone a number of security audits. Given the proprietary nature of the automotive industry, some links to these reports are not publicly listed. To request the full text of an omitted audit, please reach out to us.","sidebar":"LearnMoreSidebar"},"LearnMore/design":{"id":"LearnMore/design","title":"Uptane Design","description":"Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system works. The connected components on the right hand side of the diagram are on the vehicle, while the components on the left hand-side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks, and so may use an external source to provide a secure source of time.","sidebar":"LearnMoreSidebar"},"LearnMore/gettingStarted":{"id":"LearnMore/gettingStarted","title":"Getting Started","description":"","sidebar":"LearnMoreSidebar"},"LearnMore/history":{"id":"LearnMore/history","title":"History","description":"2010: A predecessor technology of Uptane, The Update Framework (TUF), which","sidebar":"LearnMoreSidebar"},"LearnMore/Participate":{"id":"LearnMore/Participate","title":"Contributing","description":"We welcome questions, feedback, and suggestions on any aspect of this project. Feel free to email feedback to .","sidebar":"LearnMoreSidebar"},"LearnMore/press":{"id":"LearnMore/press","title":"Press","description":"- Now Your Car is a Cybersecurity Risk, Too-May 21, 2021","sidebar":"LearnMoreSidebar"},"LearnMore/publications":{"id":"LearnMore/publications","title":"Publications","description":"- Survivable Key Compromise in Software Update Systems: Presented at the 17th ACM Conference on Computer and Communications Security (CCS\'10) in Chicago, Illinois, in 2010\\\\. This paper introduced the TUF design concept on which Uptane is based.","sidebar":"LearnMoreSidebar"},"LearnMore/threat":{"id":"LearnMore/threat","title":"Threat Model","description":"Electronic control units, or ECUs first appeared in mass-produced cars sometime in the early 1970s. Over the intervening decades, the number of these units has multiplied rapidly. A USA Today article from 2016 estimated that the average family vehicle may have up to 10 million lines of code (LOC). For high-end luxury sedans, the number comes closer to 100 million LOC, or \\"about 14 times more than even a Boeing 787 Dreamliner jet.\\"","sidebar":"LearnMoreSidebar"},"Standard/changelog":{"id":"Standard/changelog","title":"ChangeLog","description":"All notable changes to this project will be documented in this file.","sidebar":"StandardSidebar "},"Standard/uptaneStandard":{"id":"Standard/uptaneStandard","title":"Uptane Standard 1.1.0","description":"uptane-standard-design","sidebar":"StandardSidebar "}}}')}}]);