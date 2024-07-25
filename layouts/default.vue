<script setup lang="ts">

const goHome = () => {
  useRouter().push({
    path: '/'
  })
}

</script>

<template>
  <v-app class="bg-grey-lighten-4">
    <v-app-bar :elevation="2">
      <v-app-bar-title>
        <div class="cpa-flex cpa-row cpa-align-center">
          <div>
            <v-btn variant="text" @click="goHome">
              LOGO名称
            </v-btn>
          </div>
          <div>|</div>
          <div>
            <v-btn variant="text" @click="goHome">
              海外科学基金
            </v-btn>
          </div>
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="cpa-mr-20">
        <v-btn variant="text">
          项目成果统计
        </v-btn>

        <v-btn variant="text" class="cpa-mr-20">
          分析报告
        </v-btn>
        <login-user />
      </div>


    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

  </v-app>
</template>

<style scoped>

</style>
