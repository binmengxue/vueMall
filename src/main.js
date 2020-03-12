import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'// 仓库
import MintUI from 'mint-ui'
import Axios from 'axios'
import 'mint-ui/lib/style.css'
import './assets/public/css/style.css'
import './mock.js'
Vue.config.productionTip = false
Vue.use(MintUI)
/* 配置axios */
Axios.defaults.baseURL = 'http://localhost/'
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
