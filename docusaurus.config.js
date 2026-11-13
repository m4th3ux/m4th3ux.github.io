// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Tema Prism customizado — Cyber Garden Console (ver cyber-garden-design-guide.md §5.2)
const cyberGardenPrism = {
  plain: {color: '#e2e8f0', backgroundColor: '#070e1d'},
  styles: [
    {types: ['keyword', 'boolean', 'important'], style: {color: '#00ff9d'}},
    {types: ['string', 'char', 'attr-value', 'inserted'], style: {color: '#6ee7b7'}},
    {types: ['property', 'attr-name', 'class-name', 'function', 'selector'], style: {color: '#38bdf8'}},
    {types: ['number', 'constant', 'symbol', 'builtin'], style: {color: '#f59e0b'}},
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#64748b', fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: '#94a3b8'}},
    {types: ['tag', 'operator', 'deleted'], style: {color: '#f43f5e'}},
    {types: ['variable', 'parameter', 'regex'], style: {color: '#f8fafc'}},
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Techlog',
  tagline: 'O Objetivo desse site é compartilhar minhas anotações e experiências enquanto aprendo sobre tecnologia',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://m4th3ux.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm4th3ux', // Usually your GitHub org/user name.
  projectName: 'm4th3ux.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // Tema Cyber Garden é dark-only
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true, // Automatically collapse categories in the sidebar
        },
      },
      navbar: {
        title: 'm4th3ux',
        style: 'dark',
        logo: {
          alt: 'Techlog',
          src: 'img/logo_m4th3ux.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/m4th3ux',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/matheus-ulhoa/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Matheus Ulhôa. Feito com Docusaurus.`,
      },
      prism: {
        theme: cyberGardenPrism,
        darkTheme: cyberGardenPrism,
      },
    }),
};

export default config;
