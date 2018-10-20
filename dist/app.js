webpackJsonp([8],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//app.js
var Towxml = __webpack_require__(2);
App({
  onLaunch: function onLaunch() {
    var _this = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function success(res) {
              // 可以将 res 发送给后台解码出 unionId
              _this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  towxml: new Towxml(), //创建towxml对象，供小程序页面使用
  onShow: function onShow(options) {

    // Do something when show.
  },
  onHide: function onHide() {

    // Do something when hide.
  },
  onError: function onError(msg) {
    console.log(msg);
  },
  globalData: {
    userInfo: null,
    listDatas: ''
  }
});

/***/ })
],[1]); function webpackJsonp() { require("./common.js"); wx.webpackJsonp.apply(null, arguments); };
//# sourceMappingURL=app.js.map