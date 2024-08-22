<script setup lang="ts">
const columns = [
  {
    title: '项目名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '论文成果',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '专利成果',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '资助机构',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '资助金额',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '发布日期',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '结项日期',
    key: 'tags',
    dataIndex: 'tags',
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

</script>

<template>
  <div class="cpa-flex cpa-column">
    <a-row :gutter="20">
      <a-col :span="18">
        <a-card>
          <div class="cpa-flex cpa-row  cpa-align-center">
            <div class="cpa-flex cpa-column cpa-align-center">
              <a-avatar :size="64" style="cursor: pointer;"
                        src="https://zebj-app.oss-cn-beijing.aliyuncs.com/2024/07/29/a7dea35a63f748caaa56d016618681e4.jpg"/>

              <div class="cpa-mt-20">👏 欢迎回来，Jane</div>

              <a-button class="cpa-mt-20" type="primary" style="background-color: #12D2AC;width: 250px">限时 99
                元开通VIP
              </a-button>
            </div>

            <div class="cpa-ml-30">
              <img style="width: 100%;height: 200px;object-fit: contain"
                   src="https://pic.imgdb.cn/item/66bc74ccd9c307b7e99d7c5c.webp"/>
            </div>

          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card class="cpa-flex cpa-column cpa-justify-center" style="height: 254px">
          <div class="cpa-flex cpa-column">
            <div class="cpa-flex cpa-row cpa-align-center">
              <AppstoreTwoTone class="cpa-font-24"/>
              <div class="cpa-flex cpa-column cpa-ml-20">
                <div class="cpa-font-14 cpa-weight-blod">总项目数</div>
                <div class="">
                  <span class="cpa-font-20 cpa-weight-blod">373.5w+</span>个
                </div>
              </div>
            </div>

            <a-divider/>

            <div class="cpa-flex cpa-row cpa-align-center">
              <FundTwoTone class="cpa-font-24"/>
              <div class="cpa-flex cpa-column cpa-ml-20">
                <div class="cpa-font-14 cpa-weight-blod">距离上次登陆新增</div>
                <div class="">
                  <span class="cpa-font-20 cpa-weight-blod">280+</span>个
                </div>
              </div>
            </div>

          </div>
        </a-card>
      </a-col>
    </a-row>

    <a-row class="cpa-mt-20">
      <a-col :span="24">
        <a-card>
          <div class="cpa-font-20 cpa-weight-blod cpa-mb-20">以下是海研智能助手推荐</div>
          <a-table :columns="columns" :data-source="data">

          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>

</style>
