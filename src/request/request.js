import axios from 'axios';

//创建axios请求服务
const service = axios.create({
    withCredentials: false,
    baseURL: '',
    timeout: 10000
})

// 请求拦截
service.interceptors.request.use((config) => {
    if (window.localStorage.getItem('ACCESS_TOKEN')) {
      config.headers['Authorization'] = `Bearer ${ window.localStorage.getItem('ACCESS_TOKEN') }`;
    }
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截 
service.interceptors.response.use((response) => {
    const res = response.data; //拦截的响应体
})

let flag = 0;
axiosRetry(service, {
  retries: 3, // 设置自动发送请求次数
  retryDelay: (retryCount) => {
    return retryCount * 1000; // 重复请求延迟
  },
  shouldResetTimeout: true, //  重置超时时间
  retryCondition: (error) => {
    flag = flag + 1;
    if (flag == 3) {
      flag = 0;
    }
    if (error.message.includes('timeout')) {
      //true为打开自动发送请求，false为关闭自动发送请求
      return true;
    } else {
      return false;
    }
  }
});

export default service;