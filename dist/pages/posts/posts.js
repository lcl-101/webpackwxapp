webpackJsonp([1],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = getApp();

Page({
  data: {
    title: '全部',
    loading: true,
    list: ''
  },
  onLoad: function onLoad() {
    var that = this;
    //微信转发功能
    wx.showShareMenu({
      withShareTicket: true
    });
    if (!app.globalData.listDatas) {
      wx.showLoading({
        title: '加载中',
        mask: true
      });
      this.sendQuest();
    } else {
      that.setData({
        loading: false,
        list: app.globalData.listDatas
      });
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.setData({
      list: '',
      loading: true
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    this.sendQuest(function () {
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
    });
  },
  sendQuest: function sendQuest(callback) {
    var that = this;
    //涉及到域名问题正式项目
    wx.request({
      url: 'https://lcl101.cn/api/getList',
      method: 'GET',
      dataType: 'json',
      success: function success(res) {
        wx.hideLoading();
        if (res.statusCode == 200) {
          that.setData({
            list: res.data,
            loading: false
          });
          app.globalData.listDatas = res.data;
          if (callback) {
            callback();
          }
        } else {
          console.log(res.errMsg);
        }
      }
    });
  }
});

/***/ })

},[40]); function webpackJsonp() { require("./../../common.js"); wx.webpackJsonp.apply(null, arguments); };
//# sourceMappingURL=posts.js.map