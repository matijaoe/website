import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/device',
    '@morev/vue-transitions/nuxt',
    'motion-v/nuxt',
  ],

  css: [
    '~/assets/css/tailwind.css',
  ],

  devtools: { enabled: import.meta.dev },

  sourcemap: {
    server: false,
    client: false,
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  experimental: {
    typedPages: true,
    viewTransition: true,
  },

  imports: {
    dirs: [
      'composables/**',
    ],
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
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
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'], subsets: ['latin'] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: [300, 400], subsets: ['latin', 'latin-ext'] },
    ],
  },

  content: {

  },

  app: {
    head: {
      titleTemplate: '%s • matijao',
      title: 'Matija Osrečki',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  compatibilityDate: '2025-01-24',

  routeRules: {
    // CV
    '/cv': { redirect: '/cv.pdf' },
    '/cv-2024': { redirect: '/cv-2024.pdf' },
    // CV aliases
    '/resume': { redirect: '/cv.pdf' },
    '/resume-2024': { redirect: '/cv-2024.pdf' },
    // Old site
    '/2023': { redirect: 'https://2023.matijao.com/' },
    // External links
    '/github': { redirect: 'https://github.com/matijaoe' },
    '/linkedin': { redirect: 'https://www.linkedin.com/in/matijao' },
  },
})
