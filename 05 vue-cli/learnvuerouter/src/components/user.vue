<template>
    <div>
        <h1>我的</h1>
        <p>我是用户内容</p>
        <h1>{{userId}}</h1>
    </div>
</template>
<script>
export default {
    name:"user",
    computed: {
        userId(){
            return this.$route.params.userId
        }
    },

}
</script>
<style lang="">
    
</style>