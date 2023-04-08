import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const time = ref(0);
  const changeTime = (t) => {
    time.value = t;
  };

  return { time, changeTime };
});
