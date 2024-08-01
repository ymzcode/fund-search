<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const useApp = useAppStore()
useApp.activeMenuItem = [2]


onMounted(() => {
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card
            class="mx-auto pa-2"
            max-width="300"
        >
          <v-list selectable v-model:selected="useApp.activeMenuItem">
            <v-list-item
                v-for="(item, i) in useApp.menuItem"
                :key="item.value"
                :value="item.value"
                color="primary"
                rounded="xl"
                @click="useApp.clickMenuItem(item)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.props?.prependIcon"></v-icon>
              </template>

              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card>
          <v-card-title>
            重置账号密码
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-card variant="outlined">
              <v-card-text class="cpa-flex cpa-justify-between cpa-align-center">
                <div class="cpa-flex cpa-align-center cpa-font-14 cpa-weight-blod">
                  <v-icon size="30" icon="mdi-lock-reset" color="indigo" class="cpa-mr-10"></v-icon>
                  通过密码验证
                </div>

                <v-btn variant="tonal">立即重置</v-btn>
              </v-card-text>
            </v-card>

            <v-card variant="outlined" class="cpa-mt-20">
              <v-card-text class="cpa-flex cpa-justify-between cpa-align-center">
                <div class="cpa-flex cpa-align-center cpa-font-14 cpa-weight-blod">
                  <v-icon size="30" icon="mdi-message-bulleted" color="indigo" class="cpa-mr-10"></v-icon>
                  通过短信验证
                </div>

                <v-btn variant="tonal">立即重置</v-btn>
              </v-card-text>
            </v-card>
          </v-card-text>

        </v-card>


        <v-card class="cpa-mt-20">
          <v-card-title>
            修改绑定手机号：183****5506
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-card variant="outlined">
              <v-card-text class="cpa-flex cpa-justify-between cpa-align-center">
                <div class="cpa-flex cpa-align-center cpa-font-14 cpa-weight-blod">
                  <v-icon size="30" icon="mdi-lock-reset" color="indigo" class="cpa-mr-10"></v-icon>
                  通过密码验证
                </div>

                <v-btn variant="tonal">立即重置</v-btn>
              </v-card-text>
            </v-card>

            <v-card variant="outlined" class="cpa-mt-20">
              <v-card-text class="cpa-flex cpa-justify-between cpa-align-center">
                <div class="cpa-flex cpa-align-center cpa-font-14 cpa-weight-blod">
                  <v-icon size="30" icon="mdi-message-bulleted" color="indigo" class="cpa-mr-10"></v-icon>
                  通过短信验证
                </div>

                <v-btn variant="tonal">立即重置</v-btn>
              </v-card-text>
            </v-card>
          </v-card-text>

        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<style scoped>

</style>
