// Utilities
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => ({
        //
        token: '',
        userInfo: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        }
    }),
    getters: {},
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo
        },
        logout() {
            this.token = ''
            useRouter().push({
                path: '/login'
            })
        }
    },
})
