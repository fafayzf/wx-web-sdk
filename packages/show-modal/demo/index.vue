<template>
  <demo-block title="基础用法">
    <van-button @click="onClick">普通modal</van-button>
  </demo-block>
  <demo-block title="可输入内容">
    <van-button @click="onClickInput">输入modal</van-button>
  </demo-block>

</template>

<script setup>
import showModal from '..'

function onClick() {
  showModal({
    title: '提示',
    content: '这是提示内容',
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

function onClickInput() {
  showModal({
    title: '请输入内容',
    content: '',
    editable: true,
    placeholderText: '这是输入内容的placholder提示',
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
</script>
