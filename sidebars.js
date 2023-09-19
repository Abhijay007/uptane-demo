/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  LearnMoreSidebar: [{ type: 'autogenerated', dirName: 'LearnMore' }],
  EnhancementsSidebar: [{ type: 'autogenerated', dirName: 'Enhancements' }],
  StandardSidebar: [{ type: 'autogenerated', dirName: 'Standard' }, {
    type: 'link',
    label: 'Download', // The link label
    href: 'pathname:///papers/', // The external URL
  }],

  DeploymentConsiderationSidebar: [{ type: 'autogenerated', dirName: 'Deployment' }, {
    type: 'link',
    label: 'Download', // The link label
    href: "pathname:///papers/V2.1.0_uptane_deploy.pdf"
  }],
  // But you can create a sidebar manually

};

module.exports = sidebars;
