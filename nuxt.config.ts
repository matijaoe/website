// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
  ],

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
  },

  imports: {
    dirs: [
      'composables/**',
    ],
  },

  unocss: {
    preflight: true
  },

  colorMode: {
    classSuffix: '',
  },

  app: {
    head: {
      title: 'Matija Osrečki',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        {
          name: 'description',
          content: 'Matija Osrečki is a frontend software engineer from Croatia.',
        }
      ]
    },
  },
})
