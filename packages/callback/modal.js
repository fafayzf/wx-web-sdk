import { GeneralCallbackResult } from "./index";

export default class ModalCallback extends GeneralCallbackResult {
  constructor(props) {
    super(props)
    this.cancel = props.cancel
    this.confirm = props.confirm
    this.content = props.content
  }
}