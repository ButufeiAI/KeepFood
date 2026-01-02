// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    baseURL: '/nuxtjs/template/',
    // Remove the buildAssetsDir line
    // buildAssetsDir: '/dist/_nuxt/', // Remove this line
    meta: [
      { name: 'keywords', content: 'admin dashboard bootstrap, admin dashboard template,admin dashboard ui,admin panel bootstrap template,bootstrap admin template,bootstrap dashboard template,bootstrap template admin panel,dashboard bootstrap template,dashboard design template,nuxt admin dashboard,nuxt admin panel,nuxt admin template,nuxt bootstrap,nuxt dashboard,nuxt ui framework' }
    ],
    head: {
      title: 'Dreams POS - Inventory Management & Admin Dashboard Template',
      link: [
        // Update favicon path to be relative to baseURL if it's in the public dir
        { rel: 'icon', type: 'image/x-icon', href: "/nuxtjs/template/favicon.png" },
        // OR, if favicon.png is placed directly in the /nuxt/template/ folder (the app's root), you can use:
        // { rel: 'icon', type: 'image/x-icon', href: "/favicon.png" },
      ]
    },
  },

  // SPA / Static
  ssr: false,

  alias: {
    moment: 'moment/moment.js'
  },

  // Dev server for remote access
  devServer: {
    host: 'localhost',
    port: 3006
  },

  // ✅ Static export
  nitro: {
    preset: 'static'
  },

  // ✅ SPA fallback to index.html on manual refresh / deep links
  generate: {
    fallback: true // This should create a 200.html or similar fallback if needed
  }
})