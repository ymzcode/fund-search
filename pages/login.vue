<script setup lang="ts">
import {computed, getCurrentInstance, onBeforeUnmount, reactive, ref} from "vue";
import {asyncValidator} from "~/utils";


definePageMeta({
  layout: 'custom'
})

const tab = ref('1')

const phoneFormRef = ref()
const codeFormRef = ref()


const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]

// 验证码倒计时
const CODE_SECOND = 60
const userStore = useUserStore()

const data = reactive({
  phone: '',
  code: ''
})

const codeData = reactive({
  // 是否正在发送验证码
  isSendLoading: false,
  second: 60,
  interval: null,
  isSend: false
})


const phoneRules = ref([
  v => !!v || '请输入手机号',
  v => asyncValidator(v) || '手机号格式不正确',
])

const codeRules = ref([
  v => !!v || '请输入验证码',
])


const showCodeText = computed(() => {
  return `${codeData.second}秒后重新发送`
})

onBeforeUnmount(() => {
  clearInterval(codeData.interval)
})

const createCountDown = () => {
  codeData.isSend = true
  codeData.second = CODE_SECOND
  codeData.interval = setInterval(() => {
    if (codeData.second <= 0) {
      codeData.second = CODE_SECOND
      codeData.isSend = false
      clearInterval(codeData.interval)
      return
    }
    codeData.second--
  }, 1000)
}

const sendCode = async () => {

}

async function validate() {
  const {valid: phoneValid} = await phoneFormRef.value.validate()
  const {valid: codeValid} = await codeFormRef.value.validate()

  if (phoneValid && codeValid) {
    console.log('登录成功')
  }
}

const changeTab = (val: any) => {
  tab.value = val
}



</script>

<template>
  <v-row style="margin: 0">
    <v-col style="padding: 0" cols="8" class="cpa-relative">
      <v-carousel
          height="100%"
          show-arrows="hover"
          cycle
          hide-delimiter-background
      >
        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
        >

        </v-carousel-item>
      </v-carousel>

    </v-col>
    <v-col cols="4">
        <div class="cpa-w-full cpa-h-full cpa-flex cpa-column cpa-justify-center cpa-align-center">
          <v-card style="width: 94%;height: 40vh;">
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="1">

                <div class="tab-top-right-btn" @click="changeTab('2')">
                  <div class="half-mask"></div>

                  <v-tooltip text="手机号验证码登录">
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props" size="40" icon="mdi-cellphone-dock" />
                    </template>
                  </v-tooltip>

                </div>

                <v-card-text>
                  <div class="cpa-flex cpa-justify-center">
                    <v-btn variant="flat">LOGO名称</v-btn>
                  </div>

                  <div class="cpa-flex cpa-justify-center cpa-font-16 cpa-weight-blod">
                    微信扫描登录/注册
                  </div>

                  <div class="cpa-flex cpa-row cpa-justify-center">
                    <v-img
                        src="https://pic.imgdb.cn/item/66a79f8ed9c307b7e93b9415.webp"
                        width="300"
                        height="300"
                    ></v-img>
                  </div>

                </v-card-text>
              </v-tabs-window-item>

              <v-tabs-window-item value="2">

                <div class="tab-top-right-btn" @click="changeTab('1')">
                  <div class="half-mask"></div>

                  <v-tooltip text="微信扫码登录">
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props" size="40" icon="mdi-qrcode" />
                    </template>
                  </v-tooltip>

                </div>

                <v-card-text>
                  <div class="cpa-flex cpa-justify-center">
                    <v-btn variant="flat">LOGO名称</v-btn>
                  </div>

                  <div class="cpa-flex cpa-justify-center cpa-font-16 cpa-weight-blod cpa-mb-20">
                    欢迎登录XXXXXX
                  </div>

                  <v-form ref="phoneFormRef" @submit.prevent>
                    <v-text-field
                        v-model="data.phone"
                        :rules="phoneRules"
                        label="手机号"
                        placeholder="请输入手机号"
                        required
                        clearable
                        type="tel"
                        prepend-inner-icon="mdi-cellphone"
                        variant="outlined"
                    ></v-text-field>
                  </v-form>

                  <v-form ref="codeFormRef" @submit.prevent>
                    <v-text-field
                        style="margin-top: 10px"
                        v-model="data.code"
                        :rules="codeRules"
                        label="验证码"
                        placeholder="请输入验证码"
                        required
                        type="text"
                        clearable
                        :loading="codeData.isSendLoading"
                        prepend-inner-icon="mdi-message-processing-outline"
                        variant="outlined"
                    >
                      <template #append-inner>
                        <v-btn
                            color="primary"
                            block
                            :disabled="codeData.isSend"
                            @click="sendCode"
                            size="small"
                            variant="outlined"
                        >
                          {{ codeData.isSend ? showCodeText : '发送验证码' }}
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-form>


                  <v-btn
                      color="success"
                      class="cpa-mt-10"
                      block
                      @click="validate"
                  >
                    登录
                  </v-btn>
                </v-card-text>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card>
        </div>
    </v-col>
  </v-row>
</template>

<style scoped>

.tab-top-right-btn {
  position: absolute;
  right: 0;
  top: 0;
  background: #3c9cff;
  color: #fff;
  padding: 8px 8px 20px 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .half-mask {
    background: linear-gradient(225deg, transparent 45px, #fff 0);
    width: 65px;
    height: 65px;
    position: absolute;
    top: -3px;
    right: 0;
  }
}
</style>
