import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//1.引入mint-ui库中所有组件：完整引入
import MintUI from "mint-ui"
//2.单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//3.将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);
//4.引入axios.js
import axios from './axios'

Vue.config.productionTip = false
//让axios的请求携带验证信息到服务端
//axios.defaults.withCredentials=true;
//Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
