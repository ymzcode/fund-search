import {defineStore} from 'pinia'
import {CrownOutlined, StarOutlined, HistoryOutlined, HomeOutlined} from "@ant-design/icons-vue";
const {server} = useApi()

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
        wxLogin(code) {
            server.loginByWxWeb({
                code: code
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        logout() {
            this.token = ''
            useRouter().push({
                path: '/'
            })
        },
        setToken(token: string) {
            this.token = token
        }
    },
})
