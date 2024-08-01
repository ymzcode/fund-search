// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import path from "node:path";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: '/fund-search/',
    buildAssetsDir: 'nuxt_assets',
  },
  experimental: {
    payloadExtraction: false
  },
  build: {
    transpile: ['vuetify'],
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs'),
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    }
  },
})
