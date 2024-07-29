<script setup lang="ts">
const filterParams = reactive({
  approvalYear: []
})

const searchVal = ref('人工智能')
const page = ref(0)

const gotoArticle = (item:any) => {
  const { href } = useRouter().resolve({
    path: '/articleDetails',
    query: {
      id: item
    },
  })

  window.open(href, '_blank')

}
</script>

<template>
  <v-container>

    <v-row>
      <v-col cols="12">

        <v-text-field v-model="searchVal" label="搜索" variant="outlined">
          <template #append-inner>
            <v-btn variant="outlined" prepend-icon="mdi-magnify">搜索</v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="4">
        <v-card title="筛选条件">
          <v-card-text>
            <v-expansion-panels elevation="0">
              <v-expansion-panel title="批准年份">
                <v-expansion-panel-text>
                  <v-checkbox
                      v-model="filterParams.approvalYear"
                      label="2023"
                      value="2023"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="filterParams.approvalYear"
                      label="2024"
                      value="2024"
                  ></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>


              <v-expansion-panel title="结题年份">
                <v-expansion-panel-text>
                  <v-checkbox
                      v-model="filterParams.approvalYear"
                      label="2023"
                      value="2023"
                  ></v-checkbox>
                  <v-checkbox
                      v-model="filterParams.approvalYear"
                      label="2024"
                      value="2024"
                  ></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col :cols="8">

        <v-card elevation="0">
          <v-card-subtitle>
            <div class="cpa-flex cpa-row cpa-justify-between cpa-align-center cpa-py-20">
              <div>检索结果共4,367条记录</div>

              <div>
                <v-btn class="cpa-mr-20" size="small" variant="text" prepend-icon="mdi-align-vertical-bottom">统计图
                </v-btn>

                <v-btn
                    variant="outlined"
                    append-icon="mdi-menu-down"
                    size="small"
                >
                  默认排序

                  <v-menu activator="parent">
                    <v-list selectable density="compact">
                      <v-list-item>
                        <v-list-item-subtitle>默认排序</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-subtitle>批准年份</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-subtitle>结题年份</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-subtitle>资助经费</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
              </div>
            </div>

            <v-card class="cpa-mb-20" v-for="item in 10" @click="gotoArticle(item)">
              <v-card-title>DAI(分布的人工智能)</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4">批准号: 68773033</v-col>
                  <v-col cols="4">项目类别: 面上项目</v-col>
                  <v-col cols="4">负责人: 高济</v-col>
                  <v-col cols="4">批准年份: 1987</v-col>
                  <v-col cols="4">资助经费: 3.0（万元）</v-col>
                  <v-col cols="4">依托单位: 浙江大学</v-col>
                  <v-col cols="4">结题年份: 1990</v-col>
                  <v-col cols="4">学部学科: F06 人工智能</v-col>
                </v-row>
              </v-card-text>
            </v-card>


            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                        v-model="page"
                        :length="15"
                        class="my-4"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>

            <div style="height: 10vh"></div>

          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>

</style>
