/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Animalia DS',
  tagline: 'Design System da TOTVS',
  onBrokenLinks: 'log',
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
      }
    }
  },
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ajtot', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.
  url: 'https://ajtot.github.io.',
  baseUrl: '/',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Animalia DS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'foundation/intro',
          position: 'right',
          label: 'Sobre',
        },
        {
          type: 'doc',
          docId: 'components/button',
          position: 'right',
          label: 'Componentes',
        },
        {
          type: 'doc',
          docId: 'foundation/intro',
          position: 'right',
          label: 'Fundamentos',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Design Tokens',
        },
   
      
       
     
        //{to: '/blog', label: 'Blog', position: 'left'},
        
            // ... more items
          ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
