// Utilities
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', {
    state: () => ({
        //
        menuItem: [
            {
                title: '首页',
                value: 1,
                props: {
                    prependIcon: 'mdi-home',
                },
                url: '/userCenter'
            },
            {
                title: '安全中心',
                value: 2,
                props: {
                    prependIcon: 'mdi-lock-outline',
                },
                url: '/secureCenter'
            },
            {
                title: '我的邀请',
                value: 3,
                props: {
                    prependIcon: 'mdi-account-plus',
                },
                url: '/myInvite'
            },
            {
                title: '我的发票',
                value: 4,
                props: {
                    prependIcon: 'mdi-invoice-fast',
                },
                url: '/myInvoice'

            }
        ],
        activeMenuItem: [1]
    }),
    getters: {},
    actions: {
        clickMenuItem(item: any) {
            // console.log(item)
            this.activeMenuItem = [item.value]
            if (item.url) {
                useRouter().push({
                    path: item.url
                })
            }
        }
    },
})
