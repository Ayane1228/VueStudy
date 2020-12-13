import Vue from 'vue'
import App from './App'
import router from './router'
// 导入axios
import axios from 'axios'
Vue.config.productionTip = false
import {request} from "./components/network/reque.js";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:'post'
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res =>{
//     console.log(res);
// })
// 在使用全局的网络请求
axios.defaults.baseURL = 'http://123.207.32.32:8000',
axios.defaults.timeout = 5000
axios.all([
  axios({
    url:'/home/multidata',
    params:{
    type:'pop',
    page:1
  }
  }),
  axios({
    url:'/home/data',
  })
]).then(axios.spread((res1,res2) =>{
  console.log(res1);
  console.log(res2)
}))

request({
	url:'/home/multidata'
}).then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})