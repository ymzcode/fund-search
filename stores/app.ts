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
                key: 'CrownOutlined',
                icon: () => h(CrownOutlined),
                label: '会员中心',
                title: '会员中心',
                children: [
                    {
                        key: '3',
                        label: 'Option 3',
                        title: 'Option 3',
                    },
                    {
                        key: '4',
                        label: 'Option 4',
                        title: 'Option 4',
                    },
                    {
                        key: 'sub1-2',
                        label: 'Submenu',
                        title: 'Submenu',
                        children: [
                            {
                                key: '5',
                                label: 'Option 5',
                                title: 'Option 5',
                            },
                            {
                                key: '6',
                                label: 'Option 6',
                                title: 'Option 6',
                            },
                        ],
                    },
                ],
            }
        ],
        activeMenuItem: ['home']
    }),
    getters: {},
    actions: {
        clickMenuItem(item: any) {
            useRouter().push({
                path: item.item.path
            })
        }
    },
})
