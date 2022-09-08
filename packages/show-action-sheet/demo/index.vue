<template>
  <demo-block title="基础用法">
    <van-button @click="onClick">普通提示</van-button>
  </demo-block>
</template>

<script setup>
import showActionSheet from '..'

function onClick() {
  showActionSheet({
    alertText: '请选择',
    itemList: ['选项一', '选项二', '选项三'],
    success: (e) => {
      console.log(e)
    },
    fail: (e) => {
      console.log(e)
    },
    complete: () => {}
  })
}

</script>
