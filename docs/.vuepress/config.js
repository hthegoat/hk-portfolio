const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')


module.exports = {
  title: "Harrison Kugler",
  description: "Freelance Performance Marketing",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/mtobeiyf/vuepress-homepage" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/', '/about', '/guide', './projects' ],
          {
            // options
          }
        ),
      ]
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: true,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

