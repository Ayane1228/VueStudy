// 配置组件
<template>
    <div>
        <h1>我是首页</h1>
        <p>我是首页内容</p>
        <router-link to='/Home/news'>新闻</router-link>
        <router-link to='/Home/info'>消息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"Home",
    created(){
        document.title = '首页'
    },
    beforeRouteLeave (to, from, next) {
        console.log(this.$route.path);
        this.path = this.$route.path;  
        next()
    },
    created() {
    console.log("created");
  },
  destroyed() {
    console.log('directory');
  },

}
</script>
<style lang="">
    
</style>