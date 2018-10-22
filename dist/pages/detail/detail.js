webpackJsonp([5],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = getApp();
Page({
  data: {
    listId: '',
    loading: true,
    listData: '',
    artileDate: ''
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
      that.getList(that.options.id, res.data);
    } else {
      that.getList(that.options.id, app.globalData.listDatas);
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var that = this;
    that.setData({
      listData: '',
      loading: true
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    this.sendQuest(function (res) {
      that.getList(that.options.id, res.data);
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
    });
  },
  getList: function getList(id, data) {
    var that = this;
    that.setData({
      listId: id,
      listData: data
    });
    for (var i = 0; i < data.length; i++) {
      if (that.options.id == data[i].id) {
        wx.setNavigationBarTitle({
          title: data[i].title
        });
        var articles = data[i].body;
        //将markdown内容转换为towxml数据
        var articdata = app.towxml.toJson(articles, 'markdown');
        //设置文档显示主题，默认'light'
        articdata.theme = 'light';
        that.setData({
          artileDate: articdata,
          loading: false
        });
      }
    }
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
          if (callback) {
            callback(res);
          }
        } else {
          console.log(res.errMsg);
        }
      }
    });
  }
});

/***/ })

},[41]); function webpackJsonp() { require("./../../common.js"); wx.webpackJsonp.apply(null, arguments); };
//# sourceMappingURL=detail.js.map