import Vue from 'vue'
import Router from 'vue-router'
// 懒加载组件
const home = () => import('../view/home/home.vue');
const cart = () => import('../view/cart/cart.vue');
const category = () => import('../view/category/category.vue');
const profile = () => import('../view/profile/profile.vue');
Vue.use(Router)

export default new Router({
  routes: [
    // 默认路由
    {
    path:'',
    redirect:'/home'
  },{
    path:'/cart',
    component:cart
  },{
    path:'/category',
    component:category
  },{
    path:'/profile',
    component:profile
  },{
    path:'/home',
    component:home
  }
  ],
  //改为history模式
  mode:'history'
})
