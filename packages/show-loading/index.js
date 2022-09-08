import { xToast, setDefaultOptions, hideOptions } from '../instances/toast'

// wx.showLoading options
export const showLoadingOptions = {
  title: '',
  mask: false,
  success: () => {},
  fail: () => {},
  complete: () => {}
}

let loading = null

export default async function showLoading(ops) {
  ops = { ...showLoadingOptions, ...ops }
  loading = await xToast({
    title: ops.title,
    icon: 'loading',
    duration: 0,
    mask: ops.mask,
    success: ops.success,
    fail: ops.fail,
    complete: ops.complete
  })
  return loading
}

// 需要手动清除loading的实例
export function hideLoading(ops) {
  ops = { ...hideOptions, ...ops }

  setDefaultOptions({
    success: ops.success,
    fail: ops.fail,
    complete: ops.complete
  })
  
  loading.clear()
}