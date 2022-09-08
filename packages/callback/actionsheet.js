import { GeneralCallbackResult } from "./index";

export default class ActionSheetCallback extends GeneralCallbackResult {
  constructor(props) {
    super(props)
    this.tapIndex = props.tapIndex
  }
}