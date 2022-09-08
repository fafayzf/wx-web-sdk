<template>
  <demo-block title="基础用法">
    <van-button @click="onClick">普通提示</van-button>
  </demo-block>

  <demo-block title="加载">
    <van-button @click="onClickLoading">加载提示</van-button>
  </demo-block>

  <demo-block title="成功">
    <van-button @click="onClickSuccess">成功提示</van-button>
  </demo-block>
  
  <demo-block title="失败">
    <van-button @click="onClickFail">失败提示</van-button>
  </demo-block>

</template>

<script setup>
import showToast from '..'

function onClick() {
  showToast({
    title: '基础用法',
    icon: 'none',
    duraction: 1500,
    mask: true,
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
  showToast({
    title: '加载中',
    icon: 'loading',
    duraction: 1500,
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

function onClickSuccess() {
  showToast({
    title: '提交成功',
    icon: 'success',
    duraction: 1500,
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

function onClickFail() {
  showToast({
    title: '提交失败',
    icon: 'error',
    duraction: 1500,
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
