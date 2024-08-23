import {defineStore} from 'pinia'
import { message } from 'ant-design-vue';

export const useAppStore = defineStore('app', {
    state: () => ({
        //
        menuItem: [
            {
                key: 'home',
                label: '首页',
                path: '/',
                icon: '',
                noLogin: true
            },
            {
                key: 'history',
                label: '历史游览',
            },
            {
                key: 'collection',
                label: '我的收藏',
            },
            {
                key: 'member',
                label: '会员中心',
                children: [
                    {
                        key: 'setting',
                        label: '用户设置',
                        path: '/setting'
                    },
                    {
                        key: 'order',
                        label: '我的订单',
                        path: '/order'
                    }
                ],
            }
        ],
        activeMenuItem: ['home'],
        openDialog: false
    }),
    getters: {

    },
    actions: {
        clickMenuItem(item: any) {
            console.log(item)
            if (item.item.noLogin) {
                useRouter().push({
                    path: item.item.path
                })
            } else {
                if (useUserStore().isLogin) {
                    useRouter().push({
                        path: item.item.path
                    })
                } else {
                    message.warning('请登录之后访问页面');
                    this.openLoginDialog()
                }
            }

        },

        setMenu(menu) {
          this.menuItem = menu
        },
        openLoginDialog() {
            this.openDialog = true
        },
        closeLoginDialog() {
            this.openDialog = false
        }
    },
})
