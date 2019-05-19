import request from '@/utils/request'
// 登录接口 2019-05-17
export function loginByUsername(name, pwd) {
  const data = {
    name,
    pwd
  }
  return request({
    url: '/v1/api/user/adminLogin',
    method: 'post',
    data
  })
}
// 登出接口 2019-05-19
export function logout() {
  return request({
    url: '/v1/api/user/adminLogout',
    method: 'post'
  })
}

// export function getUserInfo(userId) {
//   return request({
//     url: '/user/info',
//     method: 'post',
//     params: { userId }
//   })
// }

