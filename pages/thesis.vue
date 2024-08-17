<script setup lang="ts">

</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <router-link to="/">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <router-link to="/search">搜索结果</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <router-link to="/details">返回项目</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>论文详情</a-breadcrumb-item>
  </a-breadcrumb>
  <a-card class="cpa-mt-10">
    <div class="cpa-font-12 cpa-color-info">DOI：MR/S021140/1</div>
    <div class="cpa-weight-blod cpa-mt-10">Developing human model cellular systems for studying Red Blood Cell diseases
      and as screening platforms
    </div>

    <div class="cpa-font-12 cpa-color-info cpa-mt-10">Jan Frayne, derico Antonioli, Simone Severini, Mauro Vigani</div>

    <div class="cpa-font-12 cpa-mt-10">发布日期：2021-02-28</div>

    <div class="cpa-font-12 cpa-color-info cpa-mt-10">摘要：Thalassemia syndromes and sickle cell disease (SCD) represent
      a significant global health problem and financial burden to health services. Studying these diseases is severely
      impeded by paucity of suitable and adequate quantities of material from patients, and lack of suitable cell lines.
    </div>

    <div class="cpa-flex cpa-align-center cpa-row cpa-mt-40">
      <a-button type="primary" size="small" shape="circle">
        <template #icon>
          <CopyFilled class="cpa-font-12"/>
        </template>
      </a-button>

      <a-divider type="vertical"/>

      <a-button type="primary" size="small" shape="circle">
        <template #icon>
          <ShareAltOutlined class="cpa-font-12"/>
        </template>
      </a-button>

      <a-divider type="vertical"/>

      <a-button size="small" shape="circle">
        <template #icon>
          <StarOutlined class="cpa-font-12"/>
        </template>
      </a-button>

    </div>

  </a-card>
</template>

<style scoped>

</style>
