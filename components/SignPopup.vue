<script setup lang="ts">
import {message} from 'ant-design-vue';
import {asyncValidator, loadExternalScript} from "~/utils";
import server from "~/api/server";
import {useUserStore} from "~/stores/user";



const privacy = ref(false)
const mode = ref(1)
// 验证码倒计时
const CODE_SECOND = 60

const emit = defineEmits(['success'])


const form3 = reactive({
  phone: '',
  code: '',
  password: '',
  rePassword: '',
  username: '',
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

  if (!form3.phone) {
    message.warning('请输入手机号')
    return
  }

  if (!asyncValidator(form3.phone)) {
    message.warning('请输入正确的手机号')
    return
  }

  // 发送验证码
  codeData.isSendLoading = true
  await server.sendSmsRegister({
    phone: form3.phone
  }).then(res => {
    console.log(res)
    codeData.isSendLoading = false
    message.success('发送成功')
    createCountDown()
  })
}


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const onFinish3 = (val) => {
  if (!asyncValidator(form3.phone)) {
    message.warning('请输入正确的手机号')
    return
  }
  if (!form3.code) {
    message.warning('请输入正确的验证码')
    return
  }

  if (form3.step == 1) {
    form3.step = 2
    return
  }

  if (!form3.username) {
    message.warning('请输入用户名')
    return
  }

  if (form3.password !== form3.rePassword) {
    message.warning('两次密码不一致')
    return
  }

  console.log('success', form3)

  const props = Object.assign({}, form3)

  server.register(props).then(res => {
    console.log(res)
    message.success('注册成功')
    useUserStore().setToken(res['x-haiyanai-token'])
  })

}

</script>

<template>
  <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">

    <div class="cpa-flex cpa-column cpa-w-full cpa-mt-20">
      <a-form
          :model="form3"
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
              <a-button type="primary" @click="sendCode">{{
                  codeData.isSend ? showCodeText : '发送验证码'
                }}
              </a-button>
            </a-input-group>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" style="height: 40px" block @click="onFinish3">立即注册</a-button>
          </a-form-item>
        </template>


        <template v-if="form3.step === 2">
          <a-form-item
              name="username"
              :rules="[{ required: true, message: '请输入用户名' }]"
          >
            <a-input size="large" v-model:value="form3.username"
                     placeholder="用户名最大长度16个字符"/>
          </a-form-item>

          <a-form-item
              name="password"
              :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input size="large" v-model:value="form3.password"
                     placeholder="请输入密码"/>
          </a-form-item>

          <a-form-item
              name="rePassword"
              :rules="[{ required: true, message: '请输入验证码' }]"
          >
            <a-input size="large" v-model:value="form3.rePassword" placeholder="确认密码"/>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" style="height: 40px" block @click="onFinish3">立即注册</a-button>
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

<style scoped>

</style>
