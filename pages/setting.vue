<script setup lang="ts">

const tab = ref(1)
const changePhone = ref(false)

onMounted(() => {
  const appStore = useAppStore()

  appStore.activeMenuItem = ['setting']
})


const changeTab = (val: any) => {
  tab.value = val
}

const formState = reactive({
  username: '',
  phone: '18330335555',
  email: '',
  area: '',
  region: ''
})

const onFinish = (values: any) => {
  console.log('Success:', values);
  changePhone.value = false
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const reSet = () => {

}
</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <router-link to="/">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <router-link to="/setting">会员中心</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>用户设置</a-breadcrumb-item>
  </a-breadcrumb>



  <a-card class="cpa-mt-10">
    <div class="cpa-flex cpa-row cpa-align-center">
      <a-avatar style="cursor: pointer;width: 90px;height: 90px" src="https://zebj-app.oss-cn-beijing.aliyuncs.com/2024/07/29/a7dea35a63f748caaa56d016618681e4.jpg"/>

      <div class="cpa-flex cpa-column cpa-ml-40">
        <div class="cpa-flex cpa-align-center">
          Jane，您的会员 2024-09-15 到期
          <a-button class="cpa-ml-10" >续费</a-button>
        </div>

        <div class="cpa-flex cpa-align-center cpa-mt-20">
          <span class="cpa-color-info">账号ID</span>：2489372598
        </div>

        <div class="cpa-flex cpa-align-center cpa-mt-10">
          <span class="cpa-color-info">注册时间</span>：2021-06-30
        </div>
      </div>
    </div>
  </a-card>

  <a-card class="cpa-mt-10">
    <div class="cpa-flex cpa-row cpa-align-center">
      <div :class="{ 'active-button': tab === 1 }" class="tab-button" @click="changeTab(1)">基础信息</div>
      <div :class="{ 'active-button': tab === 2 }" class="tab-button cpa-ml-20" @click="changeTab(2)">安全设置</div>
    </div>

    <div v-if="tab === 1">
      <a-form
          :model="formState"
          :label-col="{ span: 3 }"
          :wrapper-col="{ span: 10 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          class="cpa-mt-20"
      >
        <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
            label="手机号"
            name="phone"
            :rules="[{ required: true, message: '请输入手机号' }]"
        >
          <div class="cpa-flex">
            <a-input :disabled="!changePhone" v-model:value="formState.phone" class="cpa-w-full"/>

            <a-button v-if="!changePhone" type="text" style="color: #0B71FF;margin-right: -70px;margin-left: 10px" @click="changePhone = !changePhone">修改</a-button>
          </div>
        </a-form-item>

        <a-form-item
            label="邮箱"
            name="email"
            :rules="[{ required: true, message: '请输入邮箱' }]"
        >
          <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
            label="国家/地区"
            name="area"
        >
          <a-select
              ref="select"
              v-model:value="formState.area"
          >
            <a-select-option value="中国">中国</a-select-option>
            <a-select-option value="美国">美国</a-select-option>
            <a-select-option value="荷兰">荷兰</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
            label="所在区域"
            name="region"
        >
          <a-select
              ref="select"
              v-model:value="formState.region"
          >
            <a-select-option value="区域1">区域1</a-select-option>
            <a-select-option value="区域2">区域2</a-select-option>
            <a-select-option value="区域3">区域3</a-select-option>
          </a-select>
        </a-form-item>


        <a-form-item :wrapper-col="{ offset: 2, span: 5 }">
          <a-button type="primary" html-type="submit">保存</a-button>
          <a-button class="cpa-ml-20" @click="reSet">重置</a-button>
        </a-form-item>
      </a-form>
    </div>

    <div v-if="tab === 2">
      <div class="cpa-flex cpa-row cpa-mt-20">
        <div class="cpa-color-info" style="padding-top: 5px;width: 100px">登录密码</div>
        <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between">
            <div>已设置。密码至少8位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</div>
            <a-button style="color:#165DFF;" type="text">修改</a-button>
          </div>

          <a-divider />

        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-mt-10">
        <div class="cpa-color-info" style="padding-top: 5px;width: 100px">密保问题</div>
        <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between">
            <div>您暂未设置密保问题，密保问题可以有效的保护账号的安全</div>
            <a-button style="color:#165DFF;" type="text">设置</a-button>
          </div>

          <a-divider />

        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-mt-10">
        <div class="cpa-color-info" style="padding-top: 5px;width: 100px">安全手机</div>
        <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between">
            <div>已绑定: 150******50</div>
            <a-button style="color:#165DFF;" type="text">修改</a-button>
          </div>

          <a-divider />

        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-mt-10">
        <div class="cpa-color-info" style="padding-top: 5px;width: 100px">安全邮箱</div>
        <div class="cpa-flex cpa-column cpa-ml-20 cpa-flex-1">
          <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between">
            <div>您暂未设置邮箱，绑定邮箱可以用来找回密码、接收通知等。</div>
            <a-button style="color:#165DFF;" type="text">设置</a-button>
          </div>

          <a-divider />

        </div>
      </div>

    </div>
  </a-card>
</template>

<style scoped>
.active-button {
  color: #1F63FF !important;
  border-radius: 32px;
  background-color: rgba(242,243,248,1);
}

.tab-button {
  color: #4E5969;
  font-size: 14px;
  width: 88px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
