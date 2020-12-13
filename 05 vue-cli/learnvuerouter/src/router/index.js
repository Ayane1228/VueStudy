import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'
import About from '../components/about.vue'
import user from '../components/user.vue'
import info from '../components/HomeInfo.vue'
// 安装路由
Vue.use(Router)
// 将组件和路径配置成一一对应的关系
const news = () => import('../components/HomeNews.vue')
// 懒加载profile
const profile = () => import('../components/profile.vue')
export default new Router({
  routes: [{
    path:'',
    // 重定向,可以修改默认路径
    redirect:'/home'
  },
    {
      path: '/home',
      component: Home,
      children:[
      {
        path:'',
        redirect:'news'
      },
        {
          path:'news',
          component:news
        },{
          path:'info',
          component:info
        }
      ]
    },{
      path:'/about',
      component:About
    },{
      path:'/user/:userId',
      component:user
    },
    {
      path:'/profile',
      component:profile,
    }
  ],
  // 改变模式 将默认的hash模式修改为history模式
  mode:'history'
  // 修改活跃的类名
  // linkActiveClass:'active'

})
