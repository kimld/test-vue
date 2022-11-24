//axiosInstance.js
//导入axios
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
    baseURL:'http://127.0.0.1:8080',
    timeout:2000
})
API.defaults.headers.common["Authorization"] = window.sessionStorage.getItem('token')

//通过axios拦截器添加token验证
// API.interceptors.request.use(config=>{
//     const token=window.sessionStorage.getItem('token');
//      token && (config.headers.Authorization = token);
//     return config
// })

//导出我们建立的axios实例模块，ES6 export用法
export default API
