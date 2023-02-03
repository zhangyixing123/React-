import request from './request';
import upload from './upload';

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
    return request({
      url: '/getInfo',
      method: 'get'
    })
  }


// 上传文件
export function updaload() {
    return upload({
      url: '/upload',
      method: 'post',
      data: data
    })
  }