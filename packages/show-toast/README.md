# showToast 提示

### 介绍

参照wx.showToast

### 引入

```js

import { showToast } from 'wx-web-sdk';

```

## 代码演示

### 基础用法

```js

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

```

### 加载提示

```js

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

```

### 成功提示

```js

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

```

### 失败提示

```js

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

```

## API

### 参照wx.showToast
