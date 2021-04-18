/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Report Bot",
  tagline: "Бот для отчетов",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Report Bot", // Usually your GitHub org/user name.
  projectName: "Report Bot Docs", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en"],
  },
  themeConfig: {
    navbar: {
      title: "Report Bot",
      logo: {
        alt: "Report Bot Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Документация",
        },
        {
          href: "https://github.com/plutalov/report-bot",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Telegram",
          items: [
            {
              label: "@hackathon_report_bot",
              href: "https://t.me/hackathon_report_bot",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "Проект",
              href: "https://github.com/plutalov/report-bot",
            },
            {
              label: "Документация",
              href: "https://github.com/I-Atlas/report-bot-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Report Bot Docs, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/I-Atlas/report-bot-docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
