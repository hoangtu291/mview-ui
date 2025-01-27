export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    'swiper/swiper-bundle.css',
  ],
  modules: [
    '@nuxtjs/color-mode',
    'v-wave/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-phosphor-icons',
  ],
  // plugins: ['~/plugins/flyonui.client.ts'],
  googleFonts: {
    families: {
      Manrope: [100, 200, 300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
  },
  ssr: false,
})
