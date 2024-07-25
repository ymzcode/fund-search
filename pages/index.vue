<script setup lang="ts">
import {ref} from "vue";

const tab = ref('')

const tabItem = [
  {label: '国自然项目', value: 1},
  {label: '国自然成果', value: 2},
  {label: '地方基金项目', value: 3},
  {label: '欧洲基金项目', value: 4},
  {label: '美国基金项目', value: 5},
]

const searchLabel = computed(() => {
  switch (tab.value) {
    case 1:
      return '请输入获批项目的标题、摘要、关键词、批准号'
    case 2:
      return '请输入国自然成果关键词'
    case 3:
      return '请输入地方基金项目关键词'
    case 4:
      return '请输入欧洲基金项目关键词'
    case 5:
      return '请输入美国基金项目关键词'
    default:
      return '请输入关键词'
  }
})

</script>

<template>
  <div style="min-height: 100%;" class="cpa-flex cpa-w-full cpa-border-box cpa-justify-center cpa-align-center">
    <v-card color="basil" class="cpa-w-full">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 text-basil">
          Foundation Database
        </h1>
      </v-card-title>



      <view class="cpa-flex cpa-row cpa-justify-between">
        <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="basil"
        >
          <v-tab v-for="item in tabItem" :value="item.value" :text="item.label"></v-tab>
        </v-tabs>

        <v-btn prepend-icon="mdi-file-search" variant="text" class="cpa-mt-10">高级搜索</v-btn>
      </view>


      <v-text-field class="cpa-mt-20 cpa-mx-10" :label="searchLabel" variant="outlined">
        <template #append-inner>
          <v-btn variant="outlined" prepend-icon="mdi-magnify">搜索</v-btn>
        </template>
      </v-text-field>

    </v-card>
  </div>
</template>

<style scoped>

</style>
