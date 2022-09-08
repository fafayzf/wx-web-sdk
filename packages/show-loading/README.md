# showLoading 提示

### 介绍

参照wx.showLoading

### 引入

```js


import { showLoading } from'wx-web-sdk';


```

## 代码演示

### 基础用法

```js


  showLoading({

    title:'基础用法',

    mask:true,

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
