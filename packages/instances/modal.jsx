import { ref } from 'vue'
import { Dialog, Field } from 'vant'
import 'vant/es/dialog/style'
import 'vant/es/field/style'
import ModalCallback from '../callback/modal.js'

export const modalOptions = {
  title: '',
  content: '',
  showCancel: true,
  cancelText: '取消',
  cancelColor: '#000000',
  confirmText: '确定',
  confirmColor: '#576B95',
  editable: false,
  placeholderText: '',
  success: () => {},
  fail: () => {},
  complete: () => {}
}

export function xModal(ops) {
  ops = { ...modalOptions, ...ops }

  const v = ref(ops.content)
  const callback = new ModalCallback({
    errMsg: 'showModal:ok',
    confirm: false,
    cancel: false,
    content: ops.editable ? v.value : null
  })

  const inputRender = <Field vModel={v.value} border placeholder={ops.placeholderText}></Field>

  Dialog({
    title: ops.title,
    message: ops.editable ? inputRender : ops.content,
    showCancelButton: ops.showCancel,
    cancelButtonText: ops.cancelText,
    cancelButtonColor: ops.cancelColor,
    confirmButtonText: ops.confirmText,
    confirmButtonColor: ops.confirmColor
  })
    .then(() => {
      callback.confirm = true
      callback.content = v.value
      ops.success(callback)
    })
    .catch(() => {
      callback.cancel = true
      delete callback.content
      ops.fail(callback)
    })
    .finally(() => {
      ops.complete(callback)
    })
}