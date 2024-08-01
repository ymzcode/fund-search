<script setup lang="ts">

import {useAppStore} from "~/stores/app";

const useApp = useAppStore()
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
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-card-subtitle>
                <div class="cpa-flex cpa-align-center cpa-py-20">
                  <v-avatar color="info">
                    <v-icon icon="mdi-account-circle"></v-icon>
                  </v-avatar>
                  <v-btn variant="text" append-icon="mdi-crown-outline">
                    用户1231231231
                  </v-btn>
                </div>
              </v-card-subtitle>

              <v-card-text class="cpa-flex cpa-justify-center cpa-mb-30" style="padding: 0">
                <div class="vip-tip">
                  <div class="cpa-color-white">
                    <div>
                      您暂未开通会员
                    </div>

                    <div class="cpa-font-12 cpa-mt-20" style="color: #eee">
                      数十项专属权益等你来
                    </div>
                  </div>

                  <v-btn>立即开通</v-btn>
                </div>
              </v-card-text>

            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-card-title>
                <div>邀请好友</div>
              </v-card-title>

              <v-card-text>
                <div class="cpa-flex cpa-justify-around cpa-wrap">
                  <div
                      class="cpa-flex cpa-justify-between bg-grey-lighten-4 cpa-radius-10 cpa-p-10 cpa-border-box cpa-flex-1 cpa-mb-10">
                    <div class="cpa-flex cpa-column">
                      <v-icon color="indigo" size="30" icon="mdi-sign-text"></v-icon>
                      <div class="cpa-my-10 cpa-color-info">我的邀请码</div>
                      <div class="cpa-weight-blod cpa-font-20">PNSWV</div>
                    </div>

                    <div class="cpa-flex cpa-column cpa-justify-between cpa-ml-30">
                      <v-btn elevation="0" color="indigo">分享</v-btn>
                      <v-btn elevation="0">复制</v-btn>
                    </div>
                  </div>

                  <v-sheet width="10"></v-sheet>

                  <div class="cpa-flex cpa-column bg-grey-lighten-4 cpa-radius-10 cpa-p-10 cpa-flex-1 cpa-mb-10">
                    <div class="cpa-flex cpa-justify-between">
                      <div class="cpa-flex cpa-column">
                        <v-icon color="indigo" size="30" icon="mdi-nature-people-outline"></v-icon>
                        <div class="cpa-my-10 cpa-color-info">我的邀请人</div>
                      </div>

                      <v-btn elevation="0" color="indigo">绑定</v-btn>
                    </div>

                    <div class="cpa-weight-blod cpa-font-20">暂未绑定邀请人</div>

                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>我的发票</v-card-title>
              <v-empty-state
                  action-text="刷新"
                  image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
                  text="暂无发票数据"
                  title="无数据"
              ></v-empty-state>
            </v-card>
          </v-col>
        </v-row>

      </v-col>

    </v-row>


  </v-container>
</template>

<style scoped>
.vip-tip {
  padding: 10px 20px;
  border-radius: 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #4e54c8;
  background: -webkit-linear-gradient(to right, rgb(78, 84, 200), rgb(143, 148, 251));
  background: linear-gradient(to right, rgb(78, 84, 200), rgb(143, 148, 251));
}
</style>
