<template>
  <a-extract-style>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </a-extract-style>
</template>


<script setup lang="ts">
import 'assets/common.css'
import {CrownOutlined, StarOutlined, HistoryOutlined, HomeOutlined} from "@ant-design/icons-vue";

onMounted(() => {
  const menu = [
    {
      key: 'home',
      label: '首页',
      path: '/',
      icon: h(HomeOutlined),
      noLogin: true
    },
    {
      key: 'history',
      icon: () => h(HistoryOutlined),
      label: '历史游览',
    },
    {
      key: 'collection',
      icon: () => h(StarOutlined),
      label: '我的收藏',
    },
    {
      key: 'member',
      icon: () => h(CrownOutlined),
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
  ]
  useAppStore().setMenu(menu)
})
</script>
