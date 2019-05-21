import request from '@/utils/request'

// {
//   "type": "39",
//   "page": 1,
//   "pageSize": 10,
//   "orderBy": [
//     [
//       "price",
//       "desc"
//     ]
//   ]
// }
// 2019-05-19
export function getProdsList(data) {
  return request({
    url: '/v1/api/goods/list',
    method: 'post',
    data: data
  })
}

// 商品分类管理相关接口
// 获取顶级分类
export function getTopClass(data) {
  return request({
    url: '/v1/api/goods/topClass',
    method: 'post',
    data
  })
}

// 获取商品二级分类
export function getSecondClass(data) {
  return request({
    url: '/v1/api/goods/secondClass',
    method: 'post',
    data
  })
}

// 2019-05-21
// http://yapi.maiyidesan.cn:3000/project/24/interface/api/423
// 商品库中新建商品
export function addProdToRepo(data) {
  return request({
    url: '/v1/api/goods/add',
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

