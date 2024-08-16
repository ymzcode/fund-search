<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const useApp = ref({})

const gotoHome = () => {
  useRouter().push({
    path: `/`
  })
}

onMounted(() => {
  useApp.value = useAppStore()
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
          <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg"/>
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
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<style scoped>

</style>
