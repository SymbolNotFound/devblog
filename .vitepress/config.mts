import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base: "/devblog/",
  title: "developer blog for Symbol Not Found",
  description: "Updates on project progress and game releases!",
  mermaid: {
    er: {
      layoutDirection: 'TD',
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 12,
      stroke: '#D5ADEE',
      fill: '#8849d4'
    },
    flowchart: {
      diagramPadding: 8,
      htmlLabels: true,
      curve: 'basis'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
