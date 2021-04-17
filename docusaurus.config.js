/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Report Bot',
  tagline: 'Бот для отчетов',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'docs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['ru', 'en'],
  },
  themeConfig: {
    navbar: {
      title: 'Report Bot',
      logo: {
        alt: 'Report Bot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/plutalov/report-bot',
          label: 'GitHub',
          position: 'right',
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
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/plutalov/report-bot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Report Bot Documentation, Inc.`,
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
            'https://github.com/I-Atlas/report-bot-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
