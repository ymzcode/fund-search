<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const useApp = useAppStore()
useApp.activeMenuItem = [3]

const headers: any = [
  { title: '手机号', align: 'start', sortable: false, key: 'name' },
  { title: '绑定时间', align: 'end', key: 'light' },
  { title: '我的收益', align: 'end', key: 'height' },
]

const plants = [
  {
    name: 'Fern',
    light: 'Low',
    height: '20cm',
    petFriendly: 'Yes',
    price: 20,
  },
  {
    name: 'Snake Plant',
    light: 'Low',
    height: '50cm',
    petFriendly: 'No',
    price: 35,
  },
  {
    name: 'Monstera',
    light: 'Medium',
    height: '60cm',
    petFriendly: 'No',
    price: 50,
  },
  {
    name: 'Pothos',
    light: 'Low to medium',
    height: '40cm',
    petFriendly: 'Yes',
    price: 25,
  },
  {
    name: 'ZZ Plant',
    light: 'Low to medium',
    height: '90cm',
    petFriendly: 'Yes',
    price: 30,
  },
  {
    name: 'Spider Plant',
    light: 'Bright, indirect',
    height: '30cm',
    petFriendly: 'Yes',
    price: 15,
  },
  {
    name: 'Air Plant',
    light: 'Bright, indirect',
    height: '15cm',
    petFriendly: 'Yes',
    price: 10,
  },
  {
    name: 'Peperomia',
    light: 'Bright, indirect',
    height: '25cm',
    petFriendly: 'Yes',
    price: 20,
  },
  {
    name: 'Aloe Vera',
    light: 'Bright, direct',
    height: '30cm',
    petFriendly: 'Yes',
    price: 15,
  },
  {
    name: 'Jade Plant',
    light: 'Bright, direct',
    height: '40cm',
    petFriendly: 'Yes',
    price: 25,
  },
]
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
          <v-card-title>邀请好友</v-card-title>

          <v-card-text>
            <v-row>
              <v-col :cols="4">
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
              </v-col>
              <v-col :cols="4">
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
              </v-col>
              <v-col :cols="4">
                <div class="cpa-flex cpa-column bg-grey-lighten-4 cpa-radius-10 cpa-p-10 cpa-flex-1 cpa-mb-10">
                  <div class="cpa-flex cpa-justify-between">
                    <div class="cpa-flex cpa-column">
                      <v-icon color="indigo" size="30" icon="mdi-hand-coin-outline"></v-icon>
                      <div class="cpa-my-10 cpa-color-info">我的积分</div>
                    </div>

<!--                    <v-btn elevation="0" color="indigo">绑定</v-btn>-->
                  </div>

                  <div class="cpa-weight-blod cpa-font-20">0</div>

                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>


        <v-card>
          <v-card-title>我邀请的朋友</v-card-title>

          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="plants"
                item-key="name"
            ></v-data-table>
          </v-card-text>
        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<style scoped>

</style>
