

import { Toast } from 'vant'
import 'vant/es/toast/style'
import ToastCallback from '../callback/toast'

export const showOptions = {
  title: '',
  icon: 'success',
  image: '',
  duration: 1500,
  mask: false,
  success: () => {},
  fail: () => {},
  complete: () => {}
}

export const hideOptions = {
  success: () => {},
  fail: () => {},
  complete: () => {}
}

// 提示类型
export const typeOptions = {
  success: 'success',
  error: 'fail',
  loading: 'loading',
  none: 'text'
}

// 重新设置toast参数，全局
export const setDefaultOptions = (e) => Toast.setDefaultOptions(e)

// 创建并返回一个toast实例
export function xToast(ops) {
  ops = { ...showOptions, ...ops }
  
  let toast = null
  const callback = new ToastCallback({
    errMsg: 'showToast:ok'
  })

  return new Promise(resolve => {
    toast = Toast({
      message: ops.title,
      type: typeOptions[ops.icon],
      duration: ops.duration,
      icon: ops.image,
      forbidClick: ops.mask,
      onOpened() {
        ops.success(callback)
      }
    })
    resolve(toast)
  })
    .catch(() => {
      callback.errMsg = 'showToast: fail'
      ops.success(callback)
    })
    .finally(() => {
      ops.complete(callback)
    })
}
