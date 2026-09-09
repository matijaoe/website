import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/device',
    'motion-v/nuxt',
    '@vercel/analytics/nuxt',
  ],

  css: [
    '~/assets/css/tailwind.css',
  ],

  devtools: { enabled: false },

  sourcemap: {
    server: false,
    client: false,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'class-variance-authority',
        'radix-vue',
        '@radix-icons/vue',
        'clsx',
        'tailwind-merge',
      ],
    },
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
    fallback: 'dark',
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

  // Self-hosted in public/fonts so production builds do not fetch Google/Fontshare
  fonts: {
    provider: 'local',
    families: [
      { name: 'Satoshi', weights: [400, 500, 700], styles: ['normal'] },
      {
        name: 'Instrument Serif',
        weights: [400],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
        // Serif metrics; without this the local provider falls back to Arial/system-ui
        fallbacks: ['Times New Roman'],
        // Hero italic "sleek" is a second face; default preload is only the first
        preload: true,
      },
      { name: 'JetBrains Mono', provider: 'none' },
    ],
  },

  app: {
    head: {
      titleTemplate: '%s • matijao',
      title: 'Matija Osrečki',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        // Read before any CSS, so the very first frame the compositor paints is
        // already the right surface instead of the default white one. Hoisted
        // next to charset because it only helps ahead of the stylesheet.
        { name: 'color-scheme', content: 'dark light', tagPriority: -1 },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Hero italic is a second @font-face; nuxt/fonts only preloads one face per family
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/instrument-serif-italic.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/jetbrains-mono.woff2', crossorigin: 'anonymous' },
      ],
    },
  },

  compatibilityDate: '2025-01-24',

  routeRules: {
    // CV
    '/cv': { redirect: '/cv.pdf' },
    '/cv/2024': { redirect: '/cv-2024.pdf' },
    // CV aliases for US audience
    '/resume': { redirect: '/cv.pdf' },
    '/resume/2024': { redirect: '/cv-2024.pdf' },
    // Old site
    '/2023': { redirect: 'https://2023.matijao.com/' },
    // External links
    '/github': { redirect: 'https://github.com/matijaoe' },
    '/linkedin': { redirect: 'https://www.linkedin.com/in/matijao' },
    '/x': { redirect: 'https://x.com/matijaoe' },
  },
})
