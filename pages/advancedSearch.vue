<script setup lang="ts">

const tab = ref(null)

</script>

<template>
  <v-container>
    <v-card>
      <v-tabs
          v-model="tab"
      >
        <v-tab value="1">国自然项目</v-tab>
        <v-tab value="2">国自然成功</v-tab>
        <v-tab value="3">地方基金项目</v-tab>
        <v-tab value="4">欧洲基金项目</v-tab>
        <v-tab value="5">美国基金项目</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="1">
            <div class="search-wrapper cpa-flex cpa-align-center cpa-mt-10">
              <v-sheet :width="170"></v-sheet>
              <v-select
                  class="common-select"
                  label="项目名称"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="outlined"
                  density="compact"
                  clearable
              ></v-select>
              <v-text-field class="cpa-ml-20" label="请输入" variant="outlined" density="compact"></v-text-field>
            </div>

            <div class="search-wrapper cpa-flex cpa-align-center">
              <v-select
                  class="relation-select cpa-mr-20"
                  label="关系"
                  :items="['AND', 'OR', 'NOT']"
                  variant="outlined"
                  clearable
                  density="compact"

              ></v-select>
              <v-select
                  class="common-select"
                  label="项目名称"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="outlined"
                  clearable
                  density="compact"
              ></v-select>
              <v-text-field class="cpa-ml-20" label="请输入" variant="outlined" density="compact"></v-text-field>
            </div>

            <div class="search-wrapper cpa-flex cpa-align-center">
              <v-select
                  class="relation-select cpa-mr-20"
                  label="关系"
                  :items="['AND', 'OR', 'NOT']"
                  variant="outlined"
                  clearable
                  density="compact"
              ></v-select>
              <v-select
                  class="common-select"
                  label="项目名称"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  variant="outlined"
                  clearable
                  density="compact"
              ></v-select>
              <v-text-field class="cpa-ml-20" label="请输入" variant="outlined" density="compact"></v-text-field>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="2">
            Two
          </v-tabs-window-item>

          <v-tabs-window-item value="3">
            Three
          </v-tabs-window-item>
          <v-tabs-window-item value="4">
            Three
          </v-tabs-window-item>
          <v-tabs-window-item value="5">
            Three
          </v-tabs-window-item>
        </v-tabs-window>

        <div class="cpa-flex cpa-justify-center">
          <v-btn variant="tonal" width="300px">开始搜索</v-btn>
        </div>
      </v-card-text>
    </v-card>


    <v-card class="cpa-mt-20">
      <v-card-title>检索记录</v-card-title>
    </v-card>
  </v-container>
</template>

<style scoped>
.search-wrapper {
  padding: 0 50px;
}
.common-select {
  max-width: 200px;
}

.relation-select {
  max-width: 150px;
}
</style>
