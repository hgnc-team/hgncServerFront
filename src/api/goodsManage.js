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
