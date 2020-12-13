import axios from 'axios'
export function request(config){
        //创建axios的实例
        const instance = axios.create({
            baseUrl:'http://123.207.32.32:8000',
            timeout:5000
        })
        //拦截器
        // request:拦截请求
        //response:拦截响应
        //使用：instance.interceptors.request/response.use(config =>{},err =>{}) use中传入的是两个函数参数，二个函数的参数分别是成功信息和失败信息（一般是使用config和err）
        instance.interceptors.request.use( config=>{
            console.log('请求拦截' + config)
            console.log(config);
            return config
        },err =>{
            console.log(err)
        })
        instance.interceptors.response.use(
            res =>{
                console.log('响应拦截' + res.data)
                return res.data
            },
            err => {
                console.log(err)
            }
        );
        //调用的时候发送请求
        return instance(config)
}