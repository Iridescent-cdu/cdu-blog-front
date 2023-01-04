import request from '@/utils/request.js'

/**
 * 获取首页文章数据
 */
export const getHome = () => {
  return request({
    url: '/home',
    method: 'get',
  })
}

/**
 * 获取tags数据
 */
export const getTags = () => {
  return request({
    url: '/tags',
    method: 'get',
  })
}
