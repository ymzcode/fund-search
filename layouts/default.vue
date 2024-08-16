<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const openKeys = ref<string[]>(['sub1']);
const searchVal = ref('')
const useApp = ref({})

const gotoSearch = (flag) => {
  let query = {
    keyword: searchVal.value
  }
  if (flag) {
    query.isAdvancedSearch = 1
  }
  useRouter().push({
    path: `/search`,
    query
  })
}

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
    <!--  顶部导航栏  -->
    <a-layout-header class="app-header">
      <div class="cpa-flex cpa-row cpa-align-center">
        <div style="min-width: 120px;cursor: pointer;" @click="gotoHome">
          <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg"/>
          <span>海研文库</span>
        </div>

        <!--   搜索栏   -->
        <div class="cpa-ml-60 search-input">
          <a-input
              v-model:value="searchVal"
              placeholder="请输入项目名/摘要/作者/批准号"
              :bordered="false"
              style="width: 25vw"
              allowClear
          >

          </a-input>
          <a-button style="background: #12D2AC" type="primary" @click="gotoSearch(false)">
            <template #icon><SearchOutlined /></template>
            搜索
          </a-button>
        </div>


        <!--   高级搜索按钮   -->
        <div class="cpa-flex cpa-row cpa-align-center cpa-ml-20" @click="gotoSearch(true)">
          <a-button type="text">
            <template #icon><FileSearchOutlined /></template>
            高级搜索
          </a-button>
        </div>
      </div>


      <div class="cpa-flex cpa-align-center">
        <a-button type="text" class="cpa-mr-20">
          <template #icon><CrownOutlined /></template>
          会员中心
        </a-button>


        <a-dropdown>
          <a-avatar style="cursor: pointer;" src="https://zebj-app.oss-cn-beijing.aliyuncs.com/2024/07/29/a7dea35a63f748caaa56d016618681e4.jpg"/>

          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  1st menu item
                </a>
              </a-menu-item>
              <a-menu-item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  2nd menu item
                </a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-layout-header>


    <div class="cpa-flex" style="min-height: 100vh">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            v-model:selectedKeys="useApp.activeMenuItem"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            @click="useApp.clickMenuItem"
            :items="useApp.menuItem"
        >
        </a-menu>
      </a-layout-sider>

      <a-layout style="padding: 20px 24px 20px 24px;background: transparent">
<!--        <a-breadcrumb style="margin: 16px 0">-->
<!--          <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--        </a-breadcrumb>-->
        <a-layout-content
            :style="{ margin: 0, minHeight: '280px' }"
        >
          <slot/>
        </a-layout-content>
      </a-layout>
    </div>
  </a-config-provider>
</template>

<style scoped>

</style>
