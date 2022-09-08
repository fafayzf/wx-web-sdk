export default {
  name: 'wx-web-sdk',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/wx-web-sdk/',
    },
    srcDir: './packages'
  },
  site: {
    title: 'wx-web-sdk',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '交互',
        items: [
          {
            path: 'show-toast',
            title: 'showToast'
          },
          {
            path: 'show-modal',
            title: 'showModal'
          },
          {
            path: 'show-loading',
            title: 'showLoading'
          },
          {
            path: 'show-action-sheet',
            title: 'showActionSheet'
          },
          {
            path: 'hide-toast',
            title: 'hideToast'
          },
          {
            path: 'hide-loading',
            title: 'hideLoading'
          },
        ],
      },
    ],
  },
};
