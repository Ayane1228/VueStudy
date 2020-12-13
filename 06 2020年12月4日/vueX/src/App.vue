<template>
  <div id="app">
   <div>
     <h1>{{$store.state.counter}}</h1>
     <button @click="add()">+</button>
     <button @click="sub()">-</button>
     <button @click="addCount(5)">+5 传递参数</button>
     <button @click="addStudent()">提交多个参数：提交学生信息</button>
     <button @click="aAddstudent()">vuex中的异步操作</button>
     <h1>-----HeLLO Vuex------</h1>
     <hellovuex/>
     <h1>------getters使用-------</h1>
     <h1>
       {{$store.getters.powerCounter}}
     </h1>
     <h1> age &lt; 18:
       {{$store.getters.studentlove}}
     </h1>
     <h1>------filter使用-------</h1>
     <h1>{{$store.state.students.filter(s => s.age >= 20)}}</h1>
     <h1>id >=112 :{{more20stu}}</h1>
   </div>
  </div>
</template>

<script>
// 导入Hellovue组件
import hellovuex from './components/hellovux'
import {
	increment
} from './store/mutation-type'
// import increment from './store/mutation-type' 
// 这种方式只有在导出方式为defalut的时候才能使用：export default store

export default {
  name: 'App',
  components: {
    /* 挂载组件 */
    hellovuex
  },
  data() {
    return {
    }
  },
  methods: {
    //点击之后调用方法
    add(){
      // 提交到store 语法this.$store.commit('mutations中定义的方法名')
        this.$store.commit(increment)
    },
    sub(){
      this.$store.commit('decrment')
    },
    addCount(number){
      this.$store.commit('addCount',number)
    },
    addStudent(){
      const studentmsg = {id:115,age:20,name:'小仓唯'}
      this.$store.commit('addStudent',studentmsg)
    },
    aAddstudent(){
      const studentmsg = {id:115,age:20,name:'小仓唯'}
      this.$store.dispatch('aAddstudent',studentmsg).then(console.log('异步操作的回调函数'))
    }
  },
  computed:{
    more20stu(){
      return this.$store.state.students.filter( s => s.id >= 112)
    }
  }
}
</script>

<style>
</style>