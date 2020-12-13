<template>
        <div class="tab-bar-item" @click="btnClick">
            <!-- 首页
            <img src="../assets/img/tabbar/home.svg" alt="" srcset=""> -->
            <slot v-if="isActive"  name="item-icon-active"></slot>
            <slot v-else name="item-icon"></slot>
            <div :style = "activeStyle">
                <slot name="item-text"></slot>
            </div>
        </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props: {
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
  computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive ?{color:this.activeColor} :{}
      }

  },
  methods: {
    btnClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>
<style lang="">
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size:14px
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
  }
</style>