/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Animalia DS',
  tagline: 'Dinosaurs are cool',
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
  organizationName: 'nicoleoliveira', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.
  url: 'https://nicoleoliveira.github.io.',
  baseUrl: '/homepage/',
  themeConfig: {
    navbar: {
      title: 'Animalia DS',
      logo: {
        alt: 'Animalia DS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'components/button',
          position: 'left',
          label: 'Components',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/animaliads',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'Community',
          position: 'right', // or 'right'
          items: [
            {
              label: 'Facebook',
              href: '...',
            },
            {
              label: 'GitHub',
              href: '...',
            },
            // ... more items
          ],
        },
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
