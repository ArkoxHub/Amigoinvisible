// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-09-06',
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/_variables.css',
    '~/assets/css/_global.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Amigo invisible online 🎁 Sorteo amigo invisible gratis 💗 Regalos amigo invisible ✅ Lista de deseos amigo invisible',
      meta: [
        { name: 'description', content: 'Organiza tu amigo invisible online de forma gratuita. Sorteo automático, listas de deseos y más. ¡La mejor herramienta para tu intercambio de regalos!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.css" as *;'
        }
      }
    }
  },
  ssr: true,
  nitro: {
    prerender: {
      routes: [
        '/',
        '/regalos-amigo-invisible',
        '/lista-de-deseos',
        '/amigo-invisible',
        '/politica-cookies',
        '/politica-privacidad'
      ]
    }
  }
})
