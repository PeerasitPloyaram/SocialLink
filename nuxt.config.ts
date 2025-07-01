import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  app: {
  head: {
    title: 'HiddenEarth | Hyperlink', // default fallback title
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  
})