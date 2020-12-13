import Vue from 'vue'
import App from './App'
// 导入store
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //挂载store
  store,
  render: h => h(App)
})
