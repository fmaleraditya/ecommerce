// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
    link: [
    { rel: "stylesheet", href:
    "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
    ],
    }
    },
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },


  pwa: {
    manifest: {
      name: "smkcoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      description: "ecommercial website",
      "icons": [
        {
          "src": "images/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});