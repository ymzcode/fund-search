import {defineStore} from 'pinia'
import {CrownOutlined, StarOutlined, HistoryOutlined, HomeOutlined} from "@ant-design/icons-vue";
import server from "~/api/server";

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
        init() {
            useCookie('token').value = localStorage.getItem('token') || ''
            this.token = useCookie('token').value
        },
        login() {

        },
        wxLogin(code) {
            server.loginByWxWeb({
                code: code
            }).then(res => {
                // console.log(res)
                this.setToken(res['x-haiyanai-token'])
            })
        },
        logout() {
            server.logout()

            this.token = ''
            useRouter().push({
                path: '/'
            })
            useCookie('token').value = ''
            localStorage.removeItem('token')
        },
        setToken(token: string) {
            this.token = token
            useCookie('token').value = token
            localStorage.setItem('token', token)
        }
    },
})
