// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "node:path";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', "@ant-design-vue/nuxt"],
    antd: {
        extractStyle: true
    },
    experimental: {
        payloadExtraction: false
    },
    app: {
        baseURL: '/',
        buildAssetsDir: 'nuxt_assets',
    },
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs'),
        }
    },
    runtimeConfig: {
        public: {
            VITE_API_HOST: 'http://118.31.247.58:5664'
        }
    }
})
