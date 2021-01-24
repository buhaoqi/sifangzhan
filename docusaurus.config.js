module.exports = {
  title: '私房站',
  //tagline: 'The tagline of my site',
  url: 'https://buhaoqi.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'buhaoqi', // Usually your GitHub org/user name.
  projectName: 'sifangzhan', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-187715343-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: '私房站',
      logo: {
        alt: '私房站-设计师网址导航',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'QQ群:767209047',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 私房站 Built with Docusaurus.`,
    },
  },
  scripts: [
    {
      src:
        'https://www.googletagmanager.com/gtag/js?id=UA-187715343-1',
      async: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/buhaoqi/sifangzhan/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
