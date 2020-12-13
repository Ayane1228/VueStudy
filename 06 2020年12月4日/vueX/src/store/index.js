import Vue from 'vue'
import Vuex from 'vuex'
import {
	increment
} from './mutation-type'
// 安装插件
Vue.use(Vuex)
const modulesA = {
    state:{},
    mutations:{},
    actions:{},
    getters:{}
};
// 创建store对象 store时vuex中的一个属性
const store = new Vuex.Store({
    state:{
        counter:1000,
        students:[
            {id:110,age:18,name:'佐仓'},
            {id:111,age:20,name:'钉宫'},
            {id:112,age:23,name:'早见'},
            {id:113,age:24,name:'东山'}
        ]
    },
    mutations:{
// 定义方法 传递的参数就是state
        [increment](state){
            state.counter++
        },
        decrment(state){
            state.counter--
        },
        addCount(state,number){
            state.counter += number
        },
        // addStudent(state,studentmsg){
        //     state.students.push(studentmsg)
        // }
        addStudent(state,studentmsg){
            state.students.push(studentmsg)
            // Vue.set(state.students[0],'address','tokyo')
            // Vue.delete(state.students[0],'age')
        }
    },
    actions:{
        aAddstudent(context,studentmsg){
            return new Promise((resolce,reject) => {
                setTimeout(()=>{
                    context.commit('addStudent',studentmsg)
                    console.log('异步操作完成'+ studentmsg.name + '唱歌好听');
                },1000)
            })
        }
    },
    getters:{
        powerCounter(state){
            return state.counter * state.counter
        },
        studentlove(state){
            return state.students.filter(s => s.age <20)
        }
    },
    modules:{
        a:modulesA
    }
})
// 导出store对象
export default store