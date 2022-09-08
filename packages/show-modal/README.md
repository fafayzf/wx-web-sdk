# showModal 提示

### 介绍

参照wx.showModal

### 引入

```js

import { showModal } from 'wx-web-sdk';

```

## 代码演示

### 基础用法

```js

  showModal({
    title: '提示',
    content: '这是提示内容',
    editable: true,
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

### 输入内容

```js

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

```

## API

### 参照wx.showModal
