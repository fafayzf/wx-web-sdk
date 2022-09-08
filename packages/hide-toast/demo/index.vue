<template>
  <demo-block title="基础用法">
    <van-button @click="onClick">普通提示</van-button>
    <van-button @click="onClickLoading">关闭</van-button>

  </demo-block>
</template>

<script setup>
import showToast from '../../show-toast/index'
import hideToast from '..'

function onClick() {
  showToast({
    title: '成功',
    icon: 'success',
    mask: false,
    success(res) {
      console.log('success ===', res)
    },
    fail(err) {
      console.log('fail === ', err)
    },
    complete(comp) {
      console.log('complete === ', comp)
    }
  })
}

function onClickLoading() {
  hideToast()
}
</script>
