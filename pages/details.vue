<script setup lang="ts">
const activeKey = ref('1')

const columns = [
  {
    title: '论文名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '作者',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '发布日期',
    dataIndex: 'time',
    key: 'time',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    time: '2024-01-01',
    abstract: '论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要论文摘要',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    time: '2024-01-01',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    time: '2024-01-01',
    tags: ['cool', 'teacher'],
  },
];

const gotoThesis = () => {
  useRouter().push({
    path: '/thesis'
  })
}

</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="/search">搜索结果</a></a-breadcrumb-item>
    <a-breadcrumb-item>查看项目</a-breadcrumb-item>
  </a-breadcrumb>
  <a-card class="cpa-mt-10">
    <div class="cpa-flex cpa-column">
      <div class="cpa-font-12 cpa-color-info">批准号: MR/S021140/1</div>
      <div class="cpa-flex cpa-row cpa-mt-10">
        <CheckCircleOutlined class="cpa-font-20" style="color: #12D2AC"/>
        <span style="margin-left: 10px">
          论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题论文标题
        </span>
      </div>
      <div class="cpa-font-12 cpa-color-info cpa-mt-10">
        Jan Frayne, derico Antonioli, Simone Severini, Mauro Vigani
      </div>

      <div class="cpa-flex cpa-font-12 cpa-mt-10 cpa-row">
        <div>发布日期：2024-01-01</div>
        <a-divider type="vertical"/>
        <div>结项日期：2024-08-01</div>
      </div>

      <div class="cpa-flex cpa-font-12 cpa-color-info cpa-mt-10 cpa-row">
        摘要：Thalassemia syndromes and sickle cell disease (SCD) represent a significant global health problem and
        financial burden to health services. Studying these diseases is severely impeded by paucity of suitable and
        adequate quantities of material from patients, and lack of suitable cell lines.
      </div>

      <div class="cpa-flex cpa-mt-10 cpa-align-center cpa-row">
        <FireFilled />
        <span>资助机构：</span>
        <span class="cpa-weight-blod">Biochemistry</span>
      </div>

      <div class="cpa-flex cpa-mt-10 cpa-align-center cpa-row">
        <AccountBookFilled />
        <span>资助金额：</span>
        <span class="cpa-weight-blod" style="color: orange">$1,000,000</span>
      </div>
    </div>
  </a-card>

  <a-card class="cpa-mt-20">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="项目详情">项目详情</a-tab-pane>
      <a-tab-pane key="2" tab="论文（10）">
        <a-table :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">

              <div>
                <a @click="gotoThesis">{{ record.name }}</a>
                <div class="cpa-font-12 cpa-color-info" >
                  摘要：{{ record.abstract || '--' }}
                </div>
              </div>

            </template>

          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="3" tab="专利（3）">专利（3）</a-tab-pane>
    </a-tabs>
  </a-card>

</template>

<style scoped>

</style>
