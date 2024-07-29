<script setup lang="ts">
const headers = [
  { title: '序号', value: 'name' },
  { title: '姓名', value: 'location' },
  { title: '职称', value: 'constructionDate' },
  { title: '单位名称', value: 'height' },
]

const items = [
  {
    name: 'Great Pyramid of Giza',
    location: 'Egypt',
    height: '146.6',
    base: '230.4',
    volume: '2583285',
    constructionDate: 'c. 2580–2560 BC',
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Egypt',
    height: '136.4',
    base: '215.3',
    volume: '1477485',
    constructionDate: 'c. 2570 BC',
  },
  {
    name: 'Red Pyramid',
    location: 'Egypt',
    height: '104',
    base: '220',
    volume: '1602895',
    constructionDate: 'c. 2590 BC',
  },
  {
    name: 'Bent Pyramid',
    location: 'Egypt',
    height: '101.1',
    base: '188.6',
    volume: '1200690',
    constructionDate: 'c. 2600 BC',
  },
  {
    name: 'Pyramid of the Sun',
    location: 'Mexico',
    height: '65',
    base: '225',
    volume: '1237097',
    constructionDate: 'c. 200 CE',
  },
]
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>
        DAI(分布的人工智能)
      </v-card-title>

      <v-card-text>
        <div class="cpa-mt-20 text-indigo cpa-font-16 cpa-weight-blod">基本信息</div>

        <v-row class="detail" style="margin-top: 4px">
          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">批准号</div>
              <div>68773033</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">项目状态</div>
              <div>已结题</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">批准年份</div>
              <div>1987</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">项目类别</div>
              <div>面上项目</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">结题年份</div>
              <div>1990</div>
            </div>
          </v-col>

        </v-row>

        <div class="cpa-mt-20 text-indigo cpa-font-16 cpa-weight-blod">依托单位</div>

        <v-row class="detail" style="margin-top: 4px">
          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">中文名</div>
              <div>浙江大学</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">英文名</div>
              <div>Zhejiang University</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">城市</div>
              <div>杭州市</div>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="cpa-flex cpa-align-center">
              <div class="left-text">邮编</div>
              <div>310058</div>
            </div>
          </v-col>


        </v-row>

        <div class="cpa-mt-20 text-indigo cpa-font-16 cpa-weight-blod">参与人</div>

        <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            items-per-page="5"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.detail {
  font-size: 15px;
}

.left-text {
  margin-right: 30px;
  color: #3e3f43;
  font-weight: bold;
  font-size: 15px;
}
</style>
