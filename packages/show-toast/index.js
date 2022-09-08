import { xToast, setDefaultOptions, hideOptions } from '../instances/toast'

let toast = null

export default async function showToast(options) {
  toast = await xToast(options)
  return toast
}

export function hideToast(ops) {
  ops = { ...hideOptions, ...ops }

  setDefaultOptions({
    success: ops.success,
    fail: ops.fail,
    complete: ops.complete
  })
  
  toast.clear()
}