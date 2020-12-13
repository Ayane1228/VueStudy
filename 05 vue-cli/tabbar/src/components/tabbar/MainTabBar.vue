<template>
              <!-- 使用组件 -->
      <tab-bar>
        <tab-bar-item path='/home' activeColor='red'> 
          <img  slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="" srcset="">
          <img  slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category' activeColor = 'red'> 
          <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="" srcset="">
          <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path='/profile' activeColor = 'red'>
          <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="" srcset="">
          <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path='/cart' activeColor = 'red'>
          <img  slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="" srcset="">
          <img  slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
      </tab-bar>
</template>
<script>
// 导入组件
import TabBar from'./tabbar';
import TabBarItem from './TabBarItem';
export default {
  name: 'App',
  data() {
    return {
      isActive:true
    }
  },
  // 注册组件
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style lang="">
    
</style>