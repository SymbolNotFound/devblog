import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base: '/devblog/',
  lang: 'en-US',
  title: 'Symbol Not Found',
  description: 'Updates on project progress and game releases!',
  lastUpdated: true,
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
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SymbolNotFound/' }
    ]
  }
})
