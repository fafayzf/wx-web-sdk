# showActionSheet

### 介绍

参照wx.showActionSheet

### 引入

```js


import { showActionSheet } from'wx-web-sdk';


```

## 代码演示

### 基础用法

```js

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

```

## API

### 参照 wx.showActionSheet
