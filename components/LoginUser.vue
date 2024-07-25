<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const userStore = useUserStore()
const user = userStore.userInfo

</script>

<template>
  <v-menu
      min-width="200px"
      rounded
  >
    <template v-slot:activator="{ props }">
      <v-btn
          icon
          v-bind="props"
      >
        <v-avatar
            color="brown"
        >
          <span class="text-h5">{{ user.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar
              color="brown"
          >
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
          <h3>{{ user.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn
              variant="text"
              rounded
          >
            个人中心
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn
              variant="text"
              rounded
          >
            退出登录
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style scoped>

</style>
