
import { BASEURL } from '../config/constant.js';
import axios from 'axios';
axios.defaults.headers['Content-Type'] = 'multipart/form-data';
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: BASEURL,
    // 超时
    timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
    let formDate = new FormData();
    const flie = document.getElementById(config.data.imgDomId).files[0];
    formDate.append('file', flie);
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    const code = res.data.code || 200;
    if (code === 401) {
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
        return Promise.reject(new Error(msg))
    } else if (code === 601) {
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        ElNotification.error({ title: msg })
        return Promise.reject('error')
    } else {
        return Promise.resolve(res.data)
    }
},
    error => {
        console.log('err' + error)
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        return Promise.reject(error)
    }
)
export default service;

