<script setup lang="ts">
import {useAppStore} from "~/stores/app";
import config from "~/utils/config";
import LoginPopup from "~/components/LoginPopup.vue";

const useApp = useAppStore()

const gotoHome = () => {
  useRouter().push({
    path: `/`
  })
}

onMounted(() => {
})

useHead({
  title: '海研文库'
})
</script>

<template>
  <a-config-provider>
    <a-layout has-sider style="background: transparent">
      <a-layout-sider
          :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
          style="background: #fff"
      >

        <div class="cpa-flex cpa-align-center cpa-pl-20" style="min-width: 120px;height: 60px;cursor: pointer;" @click="gotoHome">
          <a-avatar :src="config.logoImg"/>
          <span class="cpa-font-16">海研文库</span>
        </div>

        <a-menu v-model:selectedKeys="useApp.activeMenuItem" :items="useApp.menuItem" mode="inline" @click="useApp.clickMenuItem">
        </a-menu>
      </a-layout-sider>

      <a-layout :style="{ marginLeft: '200px', background: 'transparent' }">
        <a-layout-content>
          <div :style="{ background: '#fff' }">
            <slot />
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center', background: 'transparent' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>

    <login-popup ref="loginRef"/>

  </a-config-provider>
</template>

<style scoped>

</style>
