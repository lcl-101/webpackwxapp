//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '用例',
    list: [
      {
        title:'节流函数',
        url: '/pages/throttle/throttle',
        time: '2019-01-07'
      },
      {
        title:'小程序瀑布流',
        url: '/pages/waterfall/waterfall',
        time: '2019-01-08'
      }
    ]
  },
  onLoad: function () {

  }
})
