<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const useApp = useAppStore()
useApp.activeMenuItem = [4]


const headers: any = [
  {title: '内容', align: 'start', sortable: false, key: 'name'},
  {title: '发票类型', align: 'end', key: 'light'},
  {title: '金额', align: 'end', key: 'height'},
  {title: '状态', align: 'end', key: 'petFriendly'},
  {title: '交易日期', align: 'end', key: 'price'},
  {title: '操作', align: 'end', key: 'actions'},
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
          <v-card-title>发票列表</v-card-title>

          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="plants"
                item-key="name"
            >

              <template v-slot:item.actions="{ item }">
                <v-icon
                    class="me-2"
                    size="small"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                    size="small"
                >
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn
                    color="primary"
                >
                  Reset
                </v-btn>
              </template>

            </v-data-table>
          </v-card-text>
        </v-card>

      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>
