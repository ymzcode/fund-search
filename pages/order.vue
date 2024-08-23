<script setup lang="ts">

const columns = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '订单金额',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '下单时间',
    key: 'createTime',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
  },
];

const data = [
  {
    id: 1,
    name: '年度会员',
    price: '419.00',
    status: 0,
    createTime: '2024-08-18  10:30'
  },
  {
    id: 2,
    name: '月度会员',
    price: '69.00',
    status: 1,
    createTime: '2024-08-18  10:30'
  },
  {
    id: 3,
    name: '月度会员',
    price: '69.00',
    status: 3,
    createTime: '2024-08-18  10:30'
  }
];

onMounted(() => {
  const appStore = useAppStore()

  appStore.activeMenuItem = ['order']
})
</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <router-link to="/">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <router-link to="/setting">会员中心</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>我的订单</a-breadcrumb-item>
  </a-breadcrumb>


  <a-card class="cpa-mt-10">
    <a-table :columns="columns" :data-source="data">

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'status'">
          <div v-if="record.status === 0" class="cpa-flex cpa-align-center">
            <div class="cpa-mr-10" style="background: #165DFF;width: 10px;height: 10px;border-radius: 50%"></div>
            未支付
          </div>
          <div v-else-if="record.status === 1" class="cpa-flex cpa-align-center">
            <div class="cpa-mr-10" style="background: #2DC24F;width: 10px;height: 10px;border-radius: 50%"></div>
            已支付
          </div>
          <div v-else-if="record.status === 3" class="cpa-flex cpa-align-center">
            <div class="cpa-mr-10" style="background: #BBBBBB;width: 10px;height: 10px;border-radius: 50%"></div>
            已过期
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <div v-if="record.status === 0">
            <a>立即支付</a>
          </div>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<style scoped>

</style>
