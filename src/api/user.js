import request from '@/utils/request.js'
import { useUserStore } from '@/store/user.js'

/**
 * 注册
 */
export const signUp = (data) => {
  return request({
    url: '/register',
    method: 'post',
    data: {
      ...data,
    },
  })
}
/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      ...data,
    },
  })
}
/**
 * 退出登录
 */
export const signOut = () => {
  return request({
    url: '/login',
    method: 'get',
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = (userId) => {
  // const userStore = useUserStore()
  return request({
    url: '/profile',
    method: 'get',
    params: {
      // sessionId: userStore.token,
      userId,
    },
  })
}

/**
 * 获取OSS上传凭证
 */
export const getStsToken = () => {
  const userStore = useUserStore()
  return request({
    method: 'get',
    url: '/sts',
    params: {
      sessionId: userStore.token,
    },
  })
}

/**
 * 更新profile 中用户头像 avatar 数据
 */
export const postProfileAvatar = (avatar) => {
  const userStore = useUserStore()
  return request({
    url: '/profile',
    method: 'put',
    params: {
      sessionId: userStore.token,
      userId: userStore.userId,
    },
    data: {
      avatar,
    },
  })
}
/**
 * 提交profile中表单数据
 */
export const postProfile = (data) => {
  const userStore = useUserStore()
  return request({
    url: '/profile',
    method: 'post',
    params: {
      userId: userStore.userId,
      sessionId: userStore.token,
    },
    data: {
      ...data,
    },
  })
}
