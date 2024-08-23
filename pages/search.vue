<script setup lang="ts">
definePageMeta({
  layout: 'default-search'
})

const searchQuery = reactive({
  // 已结项
  complete: true,
  // 未结项
  uncomplete: false,
  // 是否显示摘要
  isShowAbstract: false,
  // 搜索内容
  searchVal: '',
  // 作者名称
  authorName: '',
  // 发布日期
  pushTime: [],
  // 结项时间
  completedTime: [],
  // 项目领域名称
  projectFieldName: ''
})

const isAdvancedSearch = ref(false)
const projectFieldNameInput = ref(false)
const userStore = useUserStore()

const projectFieldList = ref([
  {
    id: 1,
    more: false,
    data: [
      {id: 1001, name: '医药卫生'},
      {id: 1001, name: '公共卫生与预防医学'},
      {id: 1001, name: '卫生毒理学'},
      {id: 1001, name: '劳动卫生'},
      {id: 1001, name: '劳动卫生1'},
      {id: 1001, name: '劳动卫生2'},
      {id: 1001, name: '劳动卫生3'},
      {id: 1001, name: '劳动卫生4'},
      {id: 1001, name: '劳动卫生5'},
      {id: 1001, name: '劳动卫生6'},
      {id: 1001, name: '劳动卫生7'},
      {id: 1001, name: '劳动卫生8'},
      {id: 1001, name: '劳动卫生9'},
    ]
  },
  {
    id: 2,
    more: false,
    data: [
      {id: 1001, name: '农业学科'},
      {id: 1001, name: '农业学科2'},
      {id: 1001, name: '农业学科3'},
      {id: 1001, name: '农业学科4'},
    ]
  },
  {
    id: 3,
    more: false,
    data: [
      {id: 1001, name: '一般工业学科'},
      {id: 1001, name: '一般工业学科2'},
      {id: 1001, name: '一般工业学科3'},
      {id: 1001, name: '一般工业学科4'},
    ]
  }
])

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '论文成果',
    dataIndex: 'achievement',
    key: 'achievement',
  },
  {
    title: '专利成果',
    dataIndex: 'patent',
    key: 'patent',
  },
  {
    title: '资助机构',
    key: 'institution',
    dataIndex: 'institution',
  },
  {
    title: '资助金额',
    key: 'fundingAmount',
    dataIndex: 'fundingAmount',
  },
  {
    title: '发布日期',
    key: 'startTime',
    dataIndex: 'startTime',
  },
  {
    title: '结项日期',
    key: 'endTime',
    dataIndex: 'endTime',
  }
];

const data = [
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
  {
    name: '标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1',
    projectLeader: 'Jan Blue',
    complete: true,
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要',
    achievement: 3,
    patent: 2,
    institution: '资助机构1',
    fundingAmount: '1,000,000',
    startTime: '2024-01-01',
    endTime: '2024-08-01'
  },
];

onMounted(() => {
  // console.log(useRoute().params)
  searchQuery.searchVal = useRoute().query?.keyword || ''
  isAdvancedSearch.value = useRoute().query.isAdvancedSearch


  document.addEventListener('scroll', scrollEvent)
})

onUnmounted(() => {
  document.removeEventListener('scroll', scrollEvent)
})

const changeAdvancedSearch = () => {
  isAdvancedSearch.value = true
}

const closeAdvancedSearch = () => {
  isAdvancedSearch.value = false
}

const projectFieldNameFocus = (event) => {
  // console.log(event)
  projectFieldNameInput.value = true
}

const projectFieldNameBlur = (event) => {
  // console.log(event)
  projectFieldNameInput.value = false

}

const gotoDetails = () => {
  useRouter().push({
    path: '/details'
  })
}


// 是否收起高级搜索
const isRetract = ref(false)

// 滚动监听
const scrollEvent = (event) => {
  if (isAdvancedSearch.value) {
    // console.log(event)
    isRetract.value = true

    const scroll = document.documentElement.scrollTop || document.body.scrollTop

    console.log(scroll)
    if (scroll === 0) {
      isRetract.value = false
    }
  }
}

const extendRetract = () => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

const gotoUser = () => {
  useRouter().push({
    path: '/setting'
  })
}

const onClickLogin = () => {
  useAppStore().openLoginDialog()
}

</script>

<template>
  <div class="cpa-flex cpa-column" style="min-height: 90vh">

    <!--  顶部  -->
    <div class="app-header" style="background: #ffffff;padding-inline: 0;padding-right: 20px;box-shadow: none">

      <div class="cpa-flex cpa-row cpa-align-center">
        <!--   搜索栏   -->
        <div v-if="!isAdvancedSearch" class="search-input">
          <a-input
              v-model:value="searchQuery.searchVal"
              placeholder="请输入项目名/摘要/作者/批准号"
              :bordered="false"
              style="width: 25vw"
              allowClear
          >

          </a-input>
          <a-button style="background: #12D2AC" type="primary">
            <template #icon>
              <SearchOutlined/>
            </template>
            搜索
          </a-button>
        </div>

        <!--   高级搜索按钮   -->
        <div v-if="!isAdvancedSearch" class="cpa-flex cpa-row cpa-align-center cpa-ml-20">
          <a-button type="text" @click="changeAdvancedSearch">
            <template #icon>
              <FileSearchOutlined/>
            </template>
            高级搜索
          </a-button>
        </div>

        <!--    返回普通搜索按钮    -->
        <div v-if="isAdvancedSearch">
          <a-button style="color: #12D2AC" type="text" @click="closeAdvancedSearch">
            <template #icon>
              <SearchOutlined/>
            </template>
            普通搜索
          </a-button>
        </div>
      </div>


      <div class="cpa-flex cpa-align-center">
        <a-button type="text" class="cpa-mr-20" @click="gotoUser">
          <template #icon>
            <CrownOutlined/>
          </template>
          会员中心
        </a-button>


        <a-dropdown v-if="userStore.isLogin">
          <a-avatar style="cursor: pointer;" src="https://zebj-app.oss-cn-beijing.aliyuncs.com/2024/07/29/a7dea35a63f748caaa56d016618681e4.jpg"/>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0" @click="gotoUser">
                个人信息
              </a-menu-item>
              <a-menu-item key="1" @click="userStore.logout">
                退出登录
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>


        <a-button v-else type="text" @click="onClickLogin">登录/注册</a-button>
      </div>
    </div>

    <!--  高级搜索  -->
    <div v-if="isAdvancedSearch && !isRetract" class="cpa-flex cpa-column cpa-px-20">

      <div class="cpa-flex cpa-row cpa-align-center">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            包含（且）
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">包含（或）</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">排除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <div class="cpa-flex cpa-column cpa-ml-10" style="width: 280px">
          <a-input v-model:value="searchQuery.searchVal" placeholder="请输入项目/论文/专利关键词"/>
        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-align-center cpa-mt-10">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            包含（且）
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">包含（或）</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">排除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <div class="cpa-flex cpa-column cpa-ml-10" style="width: 280px">
          <a-input v-model:value="searchQuery.authorName" placeholder="请输入作者名称"/>
        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-align-center cpa-mt-10">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            包含（且）
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">包含（或）</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">排除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10" style="width: 350px">
          <span>发布时间：</span>

          <a-range-picker v-model:value="searchQuery.pushTime" :placeholder="['开始日期', '结束日期']"/>
        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-align-center cpa-mt-10">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            包含（且）
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">包含（或）</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">排除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10" style="width: 350px">
          <span>结项时间：</span>

          <a-range-picker v-model:value="searchQuery.completedTime" :placeholder="['开始日期', '结束日期']"/>
        </div>
      </div>

      <div class="cpa-flex cpa-row cpa-align-center cpa-mt-10">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            包含（且）
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">包含（或）</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">排除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10">
          <a-checkbox>国家自然项目</a-checkbox>
          <a-divider type="vertical"/>
          <a-checkbox>地方基金项目</a-checkbox>
          <a-divider type="vertical"/>
          <a-checkbox>欧洲基金项目</a-checkbox>

        </div>
      </div>

      <a-card :bordered="projectFieldNameInput" class="cpa-mt-10" :style="{
        width: projectFieldNameInput ? '100%':  '350px'
      }">
        <a-input v-model:value="searchQuery.projectFieldName" placeholder="请输入项目领域名称"
                 @focus="projectFieldNameFocus"/>

        <div v-show="projectFieldNameInput" class="cpa-flex cpa-column">
          <div>
            <a-button type="link">项目领域</a-button>
            》 全部
          </div>

          <div v-for="item in projectFieldList" class="cpa-flex cpa-row">
            <div class="custom-z-btn" @click="item.more = !item.more">{{ item.more ? '-' : '+' }}</div>

            <div class="cpa-flex cpa-column">
              <a-checkbox>{{ item.data[0].name }}</a-checkbox>

              <div v-if="item.more" class="cpa-flex cpa-row cpa-wrap">
                <a-checkbox v-for="item2 in item.data.slice(1)">{{ item2.name }}</a-checkbox>
              </div>
            </div>


          </div>
        </div>

      </a-card>


      <!--   搜索按钮   -->
      <div class="cpa-flex cpa-row cpa-align-center cpa-mt-10">
        <a-button type="primary" @click="projectFieldNameBlur">
          <template #icon>
            <SearchOutlined/>
          </template>
          查询
        </a-button>

        <a-divider type="vertical"/>

        <a-button>
          <template #icon>
            <SearchOutlined/>
          </template>
          重置
        </a-button>
      </div>

      <a-divider/>

    </div>

    <!--  高级搜索收起状态  -->
    <a-affix v-else-if="isAdvancedSearch && isRetract" :offset-top="0">
      <div class="cpa-flex cpa-column cpa-px-20 cpa-bg-white cpa-pt-20">
        <div class="cpa-flex cpa-row cpa-align-center">
          <div class="cpa-flex cpa-row cpa-align-center cpa-flex-1">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                包含（且）
                <DownOutlined/>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">包含（或）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">排除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <div class="cpa-flex cpa-column cpa-ml-10 cpa-flex-1">
              <a-input v-model:value="searchQuery.searchVal" placeholder="请输入项目/论文/专利关键词"/>
            </div>
          </div>

          <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10 cpa-flex-1">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                包含（且）
                <DownOutlined/>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">包含（或）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">排除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <div class="cpa-flex cpa-column cpa-ml-10 cpa-flex-1">
              <a-input v-model:value="searchQuery.searchVal" placeholder="请输入作者名称"/>
            </div>
          </div>

          <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10 cpa-flex-1">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                包含（且）
                <DownOutlined/>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">包含（或）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">排除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <div class="cpa-flex cpa-column cpa-ml-10 cpa-flex-1">
              <a-input v-model:value="searchQuery.searchVal" placeholder="项目范围"/>
            </div>
          </div>

          <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10 cpa-flex-1 cpa-md-none">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                包含（且）
                <DownOutlined/>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">包含（或）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">排除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <div class="cpa-flex cpa-column cpa-ml-10 cpa-flex-1">
              <a-input v-model:value="searchQuery.searchVal" placeholder="项目范围"/>
            </div>
          </div>


          <div class="cpa-flex cpa-row cpa-align-center cpa-ml-10 cpa-flex-1 cpa-md-2-none">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                包含（且）
                <DownOutlined/>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">包含（或）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">排除</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

            <div class="cpa-flex cpa-column cpa-ml-10 cpa-flex-1">
              <a-input v-model:value="searchQuery.searchVal" placeholder="项目范围"/>
            </div>
          </div>

        </div>

        <a-divider>
          <a-button @click="extendRetract" type="text">{{ isRetract ? '展开' : '收起' }}</a-button>
        </a-divider>

      </div>
    </a-affix>


    <!--  搜索栏  -->
    <div class="cpa-flex cpa-row cpa-align-center cpa-justify-between cpa-mb-20 cpa-mt-20 cpa-px-20">

      <div class="cpa-flex cpa-row cpa-align-center">
        <a-button :type="searchQuery.complete ? 'primary' : 'default'"
                  @click="searchQuery.complete = !searchQuery.complete">
          <template #icon>
            <CheckCircleOutlined/>
          </template>
          已结项
        </a-button>

        <a-divider type="vertical"/>

        <a-button :type="searchQuery.uncomplete ? 'primary' : 'default'"
                  @click="searchQuery.uncomplete = !searchQuery.uncomplete">
          <template #icon>
            <HourglassOutlined/>
          </template>
          未结项
        </a-button>
      </div>

      <div class="cpa-flex cpa-row cpa-align-center">

        <div class="cpa-mr-20">
          <a-switch v-model:checked="searchQuery.isShowAbstract"/>
          <span class="cpa-ml-10">是否显示摘要</span>
        </div>

        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <a-button>
              <template #icon>
                <FunnelPlotOutlined/>
              </template>
              最新发布
            </a-button>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">最新结项</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">资助金额</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

      </div>

    </div>


    <div class="cpa-px-20">
      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">

            <div style="max-width: 400px;">
              <div class="cpa-flex cpa-row">
                <HourglassOutlined class="cpa-font-20" style="color: orange" v-if="!record.complete"/>
                <CheckCircleOutlined class="cpa-font-20" style="color: #12D2AC" v-if="record.complete"/>
                <a style="margin-left: 10px" @click="gotoDetails">
                  {{ record.name }}
                </a>
              </div>

              <div class="cpa-font-12 cpa-color-info">
                项目负责人：{{ record.projectLeader || '--' }}
              </div>

              <div v-if="searchQuery.isShowAbstract" class="cpa-font-12 cpa-color-info">
                摘要：{{ record.abstract || '--' }}
              </div>
            </div>

          </template>

          <template v-if="column.key === 'achievement'">

            <a-button>
              {{ record.achievement }}
            </a-button>

          </template>


          <template v-if="column.key === 'patent'">

            <a-button>
              {{ record.patent }}
            </a-button>

          </template>

        </template>
      </a-table>
    </div>


  </div>
</template>

<style scoped>
.custom-z-btn {
  min-width: 20px;
  height: 20px;
  border: 1px solid #909399;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
}
</style>
