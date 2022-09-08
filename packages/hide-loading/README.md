# hideLoading 提示

### 介绍

参照wx.hideLoading

### 引入

```js

import { hideLoading } from 'wx-web-sdk';

```

## 代码演示

### 基础用法

```js

  hideLoading()

```

### 回调

```js

  hideLoading({
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

### 参照wx.hideLoading
