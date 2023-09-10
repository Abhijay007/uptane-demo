// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uptane',
  tagline: 'Securing Software Updates for Automobiles',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Abhijay007.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/uptane-demo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Abhijay007', // Usually your GitHub org/user name.
  projectName: 'uptane-demo', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    //Add Font Awesome stylesheets
    '/fonts/font-awesome/fontawesome.css',
    '/fonts/font-awesome/solid.css',
    '/fonts/font-awesome/regular.css',
    '/fonts/font-awesome/brands.css'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          path: 'blog', // The directory containing your blog posts
          routeBasePath: 'blog', // The base path for the blog pages
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement_bar',
        content:
          `Dont Forget to Register for Upcoming Uptane workshop`,
        backgroundColor: 'var(--theme-card)',
        textColor: 'black',
        isCloseable: true,
      },

      image: 'img/docusaurus-social-card.jpg',

      algolia: {
        apiKey: "#",
        appId: "#",
        indexName: "#",
      },
      navbar: {
        logo: {
          alt: 'Uptane Logo',
          src: 'img/Uptane_logo.png',
        },
        items: [

          {
            to: '/docs/AboutUs/governance-merge', label: 'About Us', position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Standard',
            position: 'left',
            items: [
              {
                label: 'Uptane Standard (Latest)',
                to: '/docs/Standard/latest',
              },
              {
                label: 'Uptane Standard (Previous Versions)',
                to: '/docs/Standard/standardref',
              },
            ],
          },
          {
            label: 'Best Practices ',
            to: '/Deployment Considerations',
          },
          {
            type: 'dropdown',
            label: 'Enhancements',
            position: 'left',
            items: [
              {
                label: 'POUF',
                to: 'docs/Enhancements/POUF/PoufMain',
              },
              {
                label: 'PUREs',
                to: 'docs/Enhancements/PUREs/pure1',
              },
            ],
          },
          { to: '/docs/LearnMore/audio', label: 'Learn More', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '#',
            label: ' ',
            position: 'right',
            target: '_blank',
            className: 'fab fa-lg fa-github',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/uptane',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uptane.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
