<template>
  <demo-block title="基础用法">
    <van-button @click="onClick">普通提示</van-button>
    <van-button @click="onClickLoading">关闭</van-button>

  </demo-block>
</template>

<script setup>
import showLoading from '../../show-loading/index'
import hideLoading from '..'

function onClick() {
  showLoading({
    title: '加载中',
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
  hideLoading()
}
</script>
