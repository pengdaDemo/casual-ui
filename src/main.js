// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import qs from 'qs'
import echarts from 'echarts'
import { Message } from 'element-ui';
import Pagination from "@/components/common/Pagination.vue";
import StockCurve from "@/components/common/stockCurve";
import common from "@/components/common/Common.js";

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.prototype.qs = qs;
Vue.prototype.$echarts = echarts
Vue.prototype.common = common
Vue.component("pagination",Pagination);
Vue.component("stockCurve",StockCurve);

axios.interceptors.request.use(
  config => {
    if(config.url.indexOf('/api')!==-1) {
      if(!VueCookies.get('userId')){
        Message.info({message:"请登陆后操作！",offset:60});
        router.push({path:'/login'})
      }else {
        return config;
      }
    } else {
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
