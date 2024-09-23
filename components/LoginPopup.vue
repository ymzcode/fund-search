<script setup lang="ts">
import config from "~/utils/config";
import {message} from 'ant-design-vue';
import {Form} from 'ant-design-vue';
import {loadExternalScript} from "~/utils";


const props = defineProps({})

const useForm = Form.useForm;

const {server} = useApi()
const appStore = useAppStore()

const loginType = ref(1)

const privacy = ref(false)
const loginSuccess = ref(false)
const mode = ref(1)
// 验证码倒计时
const CODE_SECOND = 60
const wxLoginVal = ref(null)

const form1 = reactive({
  account: '',
  password: ''
})

const form2 = reactive({
  phone: '',
  code: ''
})

const form3 = reactive({
  phone: '',
  code: '',
  password: '',
  rePassword: '',
  // 步骤
  step: 1
})

const codeData = reactive({
  // 是否正在发送验证码
  isSendLoading: false,
  second: 60,
  interval: null,
  isSend: false
})


const showCodeText = computed(() => {
  return `${codeData.second}秒后重新发送`
})

onMounted(() => {
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
  if (codeData.isSend) {
    message.warning(showCodeText.value)
    return
  }

  if (!form2.phone) {
    message.warning('请输入手机号')
    return
  }

  // 发送验证码
  codeData.isSendLoading = true
  await server.sendSmsRegister({
    phone: form2.phone
  }).then(res => {
    console.log(res)
    codeData.isSendLoading = false
    message.success('发送成功')
    createCountDown()
  })
}


const open = () => {
  appStore.openLoginDialog()
}

const onFinish = async (values: any) => {
  if (!privacy.value) {
    message.warning('请勾选阅读并接受用户协议和隐私政策')
    return
  }
  console.log('Success:', values);
  const userInfo = await server.login({
    principal: form1.account,
    password: form1.password
  })
  console.log(userInfo)
  loginSuccess.value = true
  setTimeout(() => {
    useUserStore().setToken(userInfo['x-haiyanai-token'])
    appStore.closeLoginDialog()
    reSet()
  }, 500)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const onFinish3 = (val) => {
  form3.step = 2
}

const reSet = () => {
  loginSuccess.value = false
  form1.account = ''
  form1.password = ''
}

watch(() => appStore.openDialog, (val) => {
  if (val && !wxLoginVal.value) {
    import('assets/wxLogin').then(res => {
      wxLoginVal.value = new WxLogin({
        id: "login_container",
        appid: config.appid,
        scope: "snsapi_login",
        redirect_uri: encodeURI('http://www.haiyanai.com/'),
        stylelite: 1,
        state: '123',
        fast_login: 1
      });

      // console.log(obj)
    })
  }
})

defineExpose({
  open
})

</script>

<template>
  <a-modal v-model:open="appStore.openDialog" width="700px">
    <template #title>
      <div style="cursor: pointer;">
        <a-avatar :src="config.logoImg"/>
        <span class="cpa-ml-10">海研文库</span>
      </div>
    </template>

    <div class="cpa-flex cpa-row cpa-pt-10">
      <!--    左侧微信登录  -->
      <div class="cpa-flex cpa-column cpa-align-center">
        <div class="qrcode">
          <div id="login_container"/>
        </div>
        <div class="cpa-mt-20 cpa-flex">
          <div class="cpa-flex cpa-justify-center cpa-align-center cpa-radius-50 cpa-mr-10"
               style="width: 15px;height: 15px;background: #00C234;padding: 3px;color: white">
            <WechatFilled/>
          </div>
          请使用微信扫码登录
        </div>
      </div>

      <template v-if="mode === 1">
        <div v-if="loginSuccess" class="cpa-flex cpa-row cpa-ml-20 cpa-justify-center cpa-align-center cpa-w-full">
          <div>
            <CheckCircleFilled style="color: #00C234;font-size: 20px"/>
          </div>
          <div class="cpa-ml-10 cpa-font-16">登录成功</div>
        </div>

        <!--    右侧登录  -->
        <div v-else class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex cpa-row cpa-align-center">
            <div :class="{ 'cpa-weight-blod': loginType === 1 }" class="cpa-font-16" style="cursor: pointer"
                 @click="loginType = 1">账号登录
            </div>
            <div :class="{ 'cpa-weight-blod': loginType === 2 }" class="cpa-font-16 cpa-ml-40" style="cursor: pointer;"
                 @click="loginType = 2">短信登录
            </div>
          </div>

          <div v-if="loginType === 1" class="cpa-flex cpa-column cpa-w-full cpa-mt-20">
            <a-form
                :model="form1"
                name="basic"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  name="account"
                  :rules="[{ required: true, message: '请输入手机号/邮箱/用户名' }]"
              >
                <a-input size="large" v-model:value="form1.account" placeholder="手机号/邮箱/用户名"/>
              </a-form-item>

              <a-form-item
                  name="password"
                  :rules="[{ required: true, message: '请输入密码' }]"
              >
                <a-input-password size="large" v-model:value="form1.password" placeholder="密码"/>
              </a-form-item>

              <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between cpa-mb-10">
                <div class="cpa-color-info" style="cursor: pointer;">
                  忘记密码？
                </div>
                <div class="cpa-color-link" style="cursor: pointer;" @click="mode = 2">
                  立即注册
                </div>
              </div>

              <a-form-item>
                <a-button type="primary" html-type="submit" style="height: 40px" block>立即登录</a-button>
              </a-form-item>

            </a-form>

          </div>

          <div v-else-if="loginType === 2" class="cpa-flex cpa-column cpa-w-full cpa-mt-10">
            <div class="cpa-font-12 cpa-color-info">验证即登录，未注册将自动创建账号</div>
            <a-form
                :model="form2"
                name="code"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
              <a-form-item
                  name="phone"
                  :rules="[{ required: true, message: '请输入手机号' }]"
              >
                <a-input size="large" v-model:value="form2.phone" placeholder="手机号"/>
              </a-form-item>

              <a-form-item
                  name="code"
                  :rules="[{ required: true, message: '请输入验证码' }]"
              >
                <a-input-group compact size="large" style="display: flex" class="cpa-flex">
                  <a-input v-model:value="form2.code" placeholder="验证码"/>
                  <a-button type="primary" @click="sendCode">{{
                      codeData.isSend ? showCodeText : '发送验证码'
                    }}
                  </a-button>
                </a-input-group>
              </a-form-item>

              <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between cpa-mb-10">
                <div class="cpa-color-info" style="cursor: pointer;">
                  忘记密码？
                </div>
                <div class="cpa-color-link" style="cursor: pointer;" @click="mode = 2">
                  立即注册
                </div>
              </div>

              <a-form-item>
                <a-button type="primary" html-type="submit" style="height: 40px" block>立即登录</a-button>
              </a-form-item>

            </a-form>

          </div>


          <div class="cpa-flex">
            <a-checkbox v-model:checked="privacy">
              阅读并接受
              <a>用户协议</a>
              <a-divider type="vertical"/>
              <a>隐私政策</a>
            </a-checkbox>
          </div>


        </div>

      </template>

      <!--    注册右侧登录  -->
      <template v-if="mode === 2">
        <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex  cpa-row cpa-align-center">
            <div style="cursor: pointer" @click="mode = 1">
              < 返回
            </div>

            <a-divider type="vertical"/>

            <div v-if="form3.step === 1" class="cpa-font-20 cpa-weight-blod">
              欢迎注册
            </div>

            <div v-if="form3.step === 2" class="cpa-font-20 cpa-weight-blod">
              设置密码
            </div>
          </div>

          <div class="cpa-flex cpa-column cpa-w-full cpa-mt-20">
            <a-form
                :model="form3"
                autocomplete="off"
                @finish="onFinish3"
                @finishFailed="onFinishFailed"
            >

              <template v-if="form3.step === 1">
                <a-form-item
                    name="phone"
                    :rules="[{ required: true, message: '请输入手机号' }]"
                >
                  <a-input size="large" v-model:value="form3.phone" placeholder="手机号"/>
                </a-form-item>

                <a-form-item
                    name="code"
                    :rules="[{ required: true, message: '请输入验证码' }]"
                >
                  <a-input-group compact size="large" style="display: flex" class="cpa-flex">
                    <a-input v-model:value="form3.code" placeholder="验证码"/>
                    <a-button type="primary">发送验证码</a-button>
                  </a-input-group>
                </a-form-item>

                <a-form-item>
                  <a-button type="primary" html-type="submit" style="height: 40px" block>立即注册</a-button>
                </a-form-item>
              </template>


              <template v-if="form3.step === 2">
                <a-form-item
                    name="password"
                    :rules="[{ required: true, message: '请输入密码' }]"
                >
                  <a-input size="large" v-model:value="form3.password"
                           placeholder="含大小写字母和数字密码，不低于8个字符"/>
                </a-form-item>

                <a-form-item
                    name="rePassword"
                    :rules="[{ required: true, message: '请输入验证码' }]"
                >
                  <a-input size="large" v-model:value="form3.rePassword" placeholder="确认密码"/>
                </a-form-item>

                <a-form-item>
                  <a-button type="primary" html-type="submit" style="height: 40px" block>立即设置</a-button>
                </a-form-item>
              </template>


            </a-form>

          </div>

          <div v-if="form3.step !== 2" class="cpa-flex">
            <a-checkbox v-model:checked="privacy">
              阅读并接受
              <a>用户协议</a>
              <a-divider type="vertical"/>
              <a>隐私政策</a>
            </a-checkbox>
          </div>


        </div>
      </template>



    </div>


    <template #footer></template>
  </a-modal>
</template>

<style scoped>
.qrcode {
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  width: 190px;
  height: 210px;
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#login_container {
  margin-top: 60px;
  scale: 1.3;
  margin-left: 8px;
  //width: 190px;
  height: 210px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
