import { ref, getCurrentInstance, watch } from 'vue'
import { mountComponent } from '../utils'
import { ActionSheet as VantActionSheet } from 'vant'
import 'vant/es/action-sheet/style'
import ActionSheetCallback from '../callback/actionsheet'

export const actionSheetOptions = {
  alertText: '',
  itemList: [],
  itemColor: true,
  success: () => {},
  fail: () => {},
  complete: () => {}
}

const allowMultiple = false

let queue = []


function createInstance(options) {
  console.log(options)
  const { instance, unmount } = mountComponent({
    setup() {

      const show = ref(true)
      
      watch(show, (val) => {
        if (!val) {
          queue = queue.filter((item) => item !== instance)
          unmount()
        }
      
      })
      const render = () => 
        <VantActionSheet
          {...options}
          vModel:show={show.value}
          cancelText="取消"
          closeOnClickAction={true}
          onCancel={options.cancel}
        />
      
      getCurrentInstance().render = render
    }
  })

  return instance
}

function getInstance(options) {
  if (!queue.length || allowMultiple) {
    const instance = createInstance(options)
    queue.push(instance)
  }

  return queue[queue.length - 1]
}



export function ActionSheet(ops) {
  
  const callback = new ActionSheetCallback({
    errMsg: 'showActionSheet:ok'
  })

  const successCallback = (event) => {
    callback.tapIndex = event.tapIndex
    ops.success(callback)
  }

  ops = { ...actionSheetOptions, ...ops }

  // 改写itemList 数据源， 小程序action不是一个基本类型的数组，actionsheet组件action是一个对象数组
  ops.itemList = ops.itemList.length 
    ? ops.itemList.map((name, tapIndex) => ({ name, tapIndex, color: ops.itemColor || '', callback: successCallback })) 
    : []

  const actionSheet = getInstance({
    title: ops.alertText,
    actions: ops.itemList,
    cancel: () => {
      callback.errMsg = 'showActionSheet:fail cancel'
      ops.fail(callback)
    }
  })

  return actionSheet
}