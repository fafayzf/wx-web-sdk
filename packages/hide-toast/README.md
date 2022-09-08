# hideToast 提示

### 介绍

参照wx.hideToast

### 引入

```js

import { hideToast } from 'wx-web-sdk';

```

## 代码演示

### 基础用法

```js

  hideToast()

```

### 回调

```js

  hideToast({
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
