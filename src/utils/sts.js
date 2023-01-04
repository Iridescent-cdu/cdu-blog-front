import OSS from 'ali-oss'
import { getStsToken } from '@/api/user.js'
import { BUCKET, REGION } from '@/constants'

export const getOSSClient = async () => {
  const res = await getStsToken()

  return new OSS({
    // bucket所在区域
    region: REGION,
    // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey ID
    accessKeyId: res.accessKeyId,
    // 阿里云账号、RAM用户或者临时访问凭证STS的AccessKey Secret
    accessKeySecret: res.accessKeySecret,
    // 从STS服务获取的安全令牌（SecurityToken）
    stsToken: res.stsToken,
    // bucket
    bucket: BUCKET,
    // 刷新token，在token过期后自动调用
    refreshSTSToken: async () => {
      const res = await getStsToken()
      return {
        // id
        accessKeyId: res.accessKeyId,
        // secret
        accessKeySecret: res.accessKeySecret,
        // token
        stsToken: res.stsToken,
      }
    },
    refreshSTSTokenInterval: 5 * 1000,
  })
}
