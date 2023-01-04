import request from '@/utils/request.js'
import { useUserStore } from '@/store/user.js'
const userStore = useUserStore()

// /**
//  * 获取dashboard看板数据
//  */
// export const getDashboard = () => {
//   return request({
//     url: '/dashboard',
//     method: 'get',
//   })
// }
// /**
//  * 获取dashboard total views数据
//  */
// export const getTotalViews = () => {
//   return request({
//     url: '/views',
//     method: 'get',
//   })
// }

/**
 * 获取指定articleId文章数据
 */
export const getModifyArticle = (articleId) => {
  return request({
    url: '/article',
    method: 'get',
    params: {
      articleId,
      isFindAll: false,
    },
  })
}

/**
 * 获取指定用户userId的所有文章信息数据
 */
export const getAllArticles = () => {
  return request({
    url: '/article',
    method: 'get',
    params: {
      isFindAll: true,
      userId: userStore.userId,
      sessionId: userStore.token,
    },
  })
}
/**
 * 新增article文章
 */
export const postArticle = (data) => {
  return request({
    url: '/article',
    method: 'post',
    params: {
      sessionId: userStore.token,
      userId: userStore.userId,
    },
    data: {
      ...data,
    },
  })
}
/**
 * 修改article文章
 */
export const updateArticle = (data) => {
  return request({
    url: '/article',
    method: 'put',
    params: {
      sessionId: userStore.token,
      userId: userStore.userId,
    },
    data: {
      ...data,
    },
  })
}
/**
 * 删除指定ID文章
 */
export const deleteArticle = (articleId) => {
  return request({
    url: '/article',
    method: 'delete',
    params: {
      sessionId: userStore.token,
    },
    data: {
      articleId,
    },
  })
}
/**
 * 获取搜索到的文章数据
 */
export const getSearch = (data) => {
  return request({
    url: '/search',
    method: 'post',
    data,
  })
}
