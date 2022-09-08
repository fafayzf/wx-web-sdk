import showToast from './api/show-toast'
import hideToast from './api/hide-toast'
import showLoading from './api/show-loading'
import hideLoading from './api/hide-loading'
import showActionSheet from './api/show-action-sheet'

const callback = (options) => options

const api = {
  // 交互
  enableAlertBeforeUnload: callback,
  disableAlertBeforeUnload: callback,
  // 导航栏
  showNavigationBarLoading: callback,
  setNavigationBarTitle: callback,
  setNavigationBarColor: callback,
  hideNavigationBarLoading: callback,
  hideHomeButton: callback,
  // 背景
  setBackgroundTextStyle: callback,
  setBackgroundColor: callback,
  // Tab Bar
  showTabBarRedDot: callback,
  showTabBar: callback,
  setTabBarStyle: callback,
  setTabBarItem: callback,
  setTabBarBadge: callback,
  removeTabBarBadge: callback,
  hideTabBarRedDot: callback,
  hideTabBar: callback,
  // 字体
  loadFontFace: callback,
  // 下拉刷新
  stopPullDownRefresh: callback,
  startPullDownRefresh: callback,
  // 滚动
  pageScrollTo: callback,
  // 动画
  createAnimation: callback,
  // 置顶
  setTopBarText: callback,
  // 自定义组件
  nextTick: callback,
  // 菜单
  getMenuButtonBoundingClientRect: callback,
  // 窗口
  setWindowSize: callback,
  onWindowResize: callback,
  offWindowResize: callback,
  // 发起请求
  request: callback,
  // 下载
  downloadFile: callback,
  // 上传
  uploadFile: callback,
  // 支付
  requestPluginPayment: callback,
  requestPayment: callback,
  // 数据缓存
  setStorageSync: callback,
  setStorage: callback,
  revokeBufferURL: callback,
  removeStorageSync: callback,
  removeStorage: callback,
  getStorageSync: callback,
  getStorageInfoSync: callback,
  getStorageInfo: callback,
  getStorage: callback,
  createBufferURL: callback,
  clearStorageSync: callback,
  clearStorage: callback,
  batchSetStorageSync: callback,
  batchSetStorage: callback,
  batchGetStorageSync: callback,
  batchGetStorage: callback,
  // 周期性更新
  setBackgroundFetchToken: callback,
  onBackgroundFetchData: callback,
  getBackgroundFetchToken: callback,
  getBackgroundFetchData: callback,
  // 缓存管理器
  createCacheManager: callback,
  // 数据分析
  reportMonitor: callback,
  reportEvent: callback,
  reportAnalytics: callback,
  getExptInfoSync: callback,
  // 画布
  createOffscreenCanvas: callback,
  createCanvasContext: callback,
  canvasToTempFilePath: callback,
  canvasPutImageData: callback,
  canvasGetImageData: callback,
  // 地图
  createMapContext: callback,
  // 图片
  saveImageToPhotosAlbum: callback,
  previewMedia: callback,
  previewImage: callback,
  getImageInfo: callback,
  editImage: callback,
  cropImage: callback,
  compressImage: callback,
  chooseMessageFile: callback,
  chooseImage: callback,
  // 视频
  saveVideoToPhotosAlbum: callback,
  openVideoEditor: callback,
  getVideoInfo: callback,
  createVideoContext: callback,
  compressVideo: callback,
  chooseVideo: callback,
  chooseMedia: callback,
  // 音频
  stopVoice: callback,
  setInnerAudioOption: callback,
  playVoice: callback,
  pauseVoice: callback,
  getAvailableAudioSources: callback,
  createWebAudioContext: callback,
  createMediaAudioPlayer: callback,
  createInnerAudioContext: callback,
  createAudioContext: callback,
  // 背景音频
  stopBackgroundAudio: callback,
  seekBackgroundAudio: callback,
  playBackgroundAudio: callback,
  pauseBackgroundAudio: callback,
  onBackgroundAudioStop: callback,
  onBackgroundAudioPlay: callback,
  onBackgroundAudioPause: callback,
  getBackgroundAudioPlayerState: callback,
  getBackgroundAudioManager: callback,
  // 实时音视频
  createLivePusherContext: callback,
  createLivePlayerContext: callback,
  // 录音
  stopRecord: callback,
  startRecord: callback,
  getRecorderManager: callback,
  // 相机
  createCameraContext: callback,
  // 音视频合成
  createMediaContainer: callback,
  // 实时语音
  updateVoIPChatMuteConfig: callback,
  subscribeVoIPVideoMembers: callback,
  setEnable1v1Chat: callback,
  onVoIPVideoMembersChanged: callback,
  onVoIPChatStateChanged: callback,
  onVoIPChatSpeakersChanged: callback,
  onVoIPChatMembersChanged: callback,
  onVoIPChatInterrupted: callback,
  offVoIPVideoMembersChanged: callback,
  offVoIPChatStateChanged: callback,
  offVoIPChatSpeakersChanged: callback,
  offVoIPChatMembersChanged: callback,
  offVoIPChatInterrupted: callback,
  joinVoIPChat: callback,
  join1v1Chat: callback,
  exitVoIPChat: callback,
  // 画面录制器
  createMediaRecorder: callback,
  // 视频解码器
  createVideoDecoder: callback
}


export default {
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showActionSheet,
  ...api
}