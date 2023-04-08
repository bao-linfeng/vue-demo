<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '../store/global.js';
import { background } from '../util/api';

const global = useGlobalStore();
const { time } = storeToRefs(global);
const { changeTime } = global;

const getBackgroundRandom = async (f = true) => {
  const result = await background.getBackgroundRandom('9003249130');
  if (result.status == 200) {
    console.log(result.data);
  } else {
    // createMsg(result.msg);
  }
};

defineProps({
  msg: String,
});

const count = ref(0);
const changeCount = (i) => {
  count.value = i;
};
</script>

<template>
  <div class="home-wrap">
    <h3>引导页</h3>
    <button @click="changeCount(count + 1)">开始计数</button>
    <p>{{ count }}</p>
    <button @click="changeTime(Date.now())">获取时间</button>
    <p>{{ time }}</p>
    <img src="../assets/vue.svg" alt="" />
    <button @click="getBackgroundRandom">获取背景</button>
  </div>
</template>

<style scoped>
.home-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ddd;
  min-width: 400px;
  min-height: 300px;
}
</style>
