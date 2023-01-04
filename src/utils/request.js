import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
})

request.interceptors.response.use((response) => {
  const {
    data: { success, code, message, data },
  } = response
  if (success && code === 200) {
    return data
  } else {
    ElMessage.error(message)
  }
})
export default request
