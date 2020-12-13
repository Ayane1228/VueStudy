<template>
  <div id="app">
    <!-- router-link 属性
          to:用于指定跳转的路径
          tag：router-link 默认会将内容渲染成a标签  tag属性可以修改渲染的类型
          replace：禁止用户可以使用浏览器上的replace，这个属性不需要穿值
          点击之后会自动给当前的标签添加类名 router-link-active，可以借这个类名添加属性
          同时也可以修改这个类名 在其中加上 active-class=“新类名”即可
          可以在router中的index.js中统一修改
       -->
    <router-link to="/home"  active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active" tag='button'>关于</router-link>
    <router-link :to="'/user/' +userId">我的</router-link>
    <router-link :to="{path:'/profile',query:{name:'name',age:18,height:1.88}}">档案</router-link>
    <button @click='btnClick'>首页</button>
    <keep-alive>
            <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'zhangsan'
    }
  },
  methods:{
    btnClick(){
      this.$router.push('/home') }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .router-link-active{
  color:#f00;
} */
.active{
  color:green
}

</style>
