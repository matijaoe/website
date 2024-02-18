// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-icon',
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
  }
})
