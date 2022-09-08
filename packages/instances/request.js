// import 'yet-another-abortcontroller-polyfill'
// import { fetch } from 'whatwg-fetch'

// const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch

// const controller = new AbortController()

// export function request(ops) {
//   if (!ops.url) return
//   abortableFetch(ops.url, {
//     signal: controller.signal,
//     method: ops.method,
//     body: ops.data,
//     headers: ops.header,
//   })
// }