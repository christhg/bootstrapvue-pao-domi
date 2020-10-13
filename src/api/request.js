/* eslint-disable */ 
import axios from 'axios'
import { getToken } from '@/common/auth'

// axios實例service,process.env.BASE_API,
const service = axios.create({
  baseURL: 'http://localhost:3000', // 後台API的BASE URL地址
  timeout: 30000
  // responseType: 'json',
  // headers: {
  //   'Content-Type': 'application/json;charset=utf-8'
  // }
})

// request攔截器:加上headers[]
service.interceptors.request.use(config => {
    if (getToken()) {
      config.headers['Authorization'] = "bearer " + getToken()    
    }
    return config
},
error => {
    return error
})

// response攔截器:先行判斷response的訊息
service.interceptors.response.use( response => {
    return response
},
error => {
    return error
})

export default service
//module.exports = service;