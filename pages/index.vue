<script setup lang="ts">
import {ref} from "vue";

const tab = ref('')

const tabItem = [
  {label: '国自然项目', value: 1},
  {label: '国自然成果', value: 2},
  {label: '地方基金项目', value: 3},
  {label: '欧洲基金项目', value: 4},
  {label: '美国基金项目', value: 5},
]

const searchLabel = computed(() => {
  switch (tab.value) {
    case 1:
      return '请输入获批项目的标题、摘要、关键词、批准号'
    case 2:
      return '请输入国自然成果关键词'
    case 3:
      return '请输入地方基金项目关键词'
    case 4:
      return '请输入欧洲基金项目关键词'
    case 5:
      return '请输入美国基金项目关键词'
    default:
      return '请输入关键词'
  }
})

const onSearch = () => {
  useRouter().push({
    path: '/searchList'
  })
}

const onAdvancedSearch = () => {
  useRouter().push({
    path: '/advancedSearch'
  })
}

onMounted(() => {
  const interBubble:any = document.querySelector('.interactive')
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
})

</script>

<template>
  <div style="min-height: 100%;" class="cpa-flex cpa-w-full cpa-border-box cpa-justify-center cpa-align-center">

    <!--   背景 -->
    <div class="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/>
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div class="interactive"></div>
      </div>
    </div>

    <v-card color="basil" class="cpa-w-full" elevation="0" style="background: transparent">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 text-basil">
          Foundation Database
        </h1>
      </v-card-title>


      <view class="cpa-flex cpa-row cpa-justify-between">
        <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="basil"
        >
          <v-tab v-for="item in tabItem" :value="item.value" :text="item.label"></v-tab>
        </v-tabs>

        <v-btn prepend-icon="mdi-file-search" variant="text" class="cpa-mt-10" @click="onAdvancedSearch">高级搜索</v-btn>
      </view>


      <v-text-field class="cpa-mt-20 cpa-mx-10" :label="searchLabel" variant="outlined">
        <template #append-inner>
          <v-btn variant="outlined" prepend-icon="mdi-magnify" @click="onSearch">搜索</v-btn>
        </template>
      </v-text-field>

    </v-card>
  </div>
</template>

<style scoped>


@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}
@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}
.gradient-bg {
  --color-bg1: #dff9fb;
  --color-bg2: #ffffff;
  --color1: 104, 109, 224;
  --color2: 126, 214, 223;
  --color3: 223, 249, 251;
  --color4: 255, 121, 121;
  --color5: 149, 175, 192;
  --color-interactive: 140, 100, 255;
  --circle-size: 200%;
  --blending: hard-light;


  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
  top: 0;
  left: 0;
  z-index: 0;
}
.gradient-bg svg {
  display: none;
}
.gradient-bg .gradients-container {
  filter: url(#goo) blur(40px);
  width: 100%;
  height: 100%;
}
.gradient-bg .g1 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: center center;
  animation: moveVertical 30s ease infinite;
  opacity: 1;
}
.gradient-bg .g2 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(50% - 400px);
  animation: moveInCircle 20s reverse infinite;
  opacity: 1;
}
.gradient-bg .g3 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);
  transform-origin: calc(50% + 400px);
  animation: moveInCircle 40s linear infinite;
  opacity: 1;
}
.gradient-bg .g4 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(50% - 200px);
  animation: moveHorizontal 40s ease infinite;
  opacity: 0.7;
}
.gradient-bg .g5 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: moveInCircle 20s ease infinite;
  opacity: 1;
}
.gradient-bg .interactive {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  opacity: 0.7;
}
</style>
