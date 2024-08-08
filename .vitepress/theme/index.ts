// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

//import JankenGame from './components/JankenGame.vue'
//import RecentPosts from './components/RecentPosts.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // app.component('janken-game', JankenGame)
    // app.component('recent-posts', RecentPosts)
    /*
    // Load all components in the theme's components directory
    const modules = import.meta.glob(
        "./components/*.vue",
        { eager: true })
    for (const path in modules) {
      const componentName = path.split("/").at(-1).split(".")[0];
      app.component(componentName, modules[path].default);
    }
    */
  }
} satisfies Theme
