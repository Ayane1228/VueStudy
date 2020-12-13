<template>
  <div id="app">
    <router-view></router-view>
      <main-tab-bar/>
     
  </div>
</template>

<script>
// 导入组件
import MainTabBar from'./components/tabbar/MainTabBar';
export default {
  name: 'App',
  // 注册组件
  components:{
    MainTabBar
  }
}
</script>

<style>
  @import'./assets/css/base.css'

</style>
