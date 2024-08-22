import {defineStore} from 'pinia'
import {CrownOutlined, StarOutlined, HistoryOutlined, HomeOutlined} from "@ant-design/icons-vue";

export const useUserStore = defineStore('user', {
    state: () => ({
        //
        token: '',
        userInfo: {}
    }),
    getters: {
        isLogin: state => !!state.token
    },
    actions: {
        login() {

        },
        logout() {
            this.token = ''
        }
    },
})
