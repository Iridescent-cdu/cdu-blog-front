import { ElMessage } from 'element-plus'
export const validateUsername = (val) => {
  if (val && val.trim()) {
    return true
  }
  ElMessage({
    message: 'Username is required.',
    type: 'warning',
  })
}
export const validatePassword = (val) => {
  if (val && val.trim()) {
    return true
  }
  ElMessage({
    message: 'Password is required.',
    type: 'warning',
  })
  return 'Password is required'
}
