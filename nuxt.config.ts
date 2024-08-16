// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "node:path";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', "@ant-design-vue/nuxt"],
    antd: {
        extractStyle: false
    },
    experimental: {
        payloadExtraction: false
    },
    app: {
        baseURL: '/fund-search/',
        buildAssetsDir: 'nuxt_assets',
    },
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs'),
        }
    }
})
