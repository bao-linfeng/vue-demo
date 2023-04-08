import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';

const pinia = createPinia();
// 5. 创建并挂载根实例
const app = createApp(App);
app.config.errorHandler = (err, instance, info) => {
  // 向追踪服务报告错误
  console.log(err, instance, info);
};
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);
app.use(pinia);

app.mount('#app');
