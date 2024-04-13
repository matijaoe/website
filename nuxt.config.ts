// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt', // todo remove uno
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxt/fonts',
  ],

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    viewTransition: true,
  },

  imports: {
    dirs: [
      'composables/**',
    ],
  },

  colorMode: {
    classSuffix: '',
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  fonts: {
    families: [
      { name: 'Satoshi', provider: 'fontshare', weights: [400, 500, 600, 700] },
      { name: 'Clash Display', provider: 'fontshare', weights: [300, 400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: [300, 400], subsets: ['latin'] },
    ],
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
        },
      ],
    },
  },
})
