import {defineStore} from 'pinia'
import {CrownOutlined, StarOutlined, HistoryOutlined, HomeOutlined} from "@ant-design/icons-vue";

export const useAppStore = defineStore('app', {
    state: () => ({
        //
        menuItem: [
            {
                key: 'home',
                icon: () => h(HomeOutlined),
                label: '首页',
                title: '首页',
                path: '/'
            },
            {
                key: 'history',
                icon: () => h(HistoryOutlined),
                label: '历史游览',
                title: '历史游览',
            },
            {
                key: 'collection',
                icon: () => h(StarOutlined),
                label: '我的收藏',
                title: '我的收藏',
            },
            {
                key: 'member',
                icon: () => h(CrownOutlined),
                label: '会员中心',
                title: '会员中心',
                children: [
                    {
                        key: 'setting',
                        label: '用户设置',
                        title: '用户设置',
                        path: '/setting'
                    },
                    {
                        key: 'order',
                        label: '我的订单',
                        title: '我的订单',
                        path: '/order'
                    }
                ],
            }
        ],
        activeMenuItem: ['home']
    }),
    getters: {},
    actions: {
        clickMenuItem(item: any) {
            // console.log(item)
            useRouter().push({
                path: item.item.path
            })
        }
    },
})
