webpackJsonp([2],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//logs.js
var util = __webpack_require__(43);

Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
});

/***/ })

},[42]); function webpackJsonp() { require("./../../common.js"); wx.webpackJsonp.apply(null, arguments); };
//# sourceMappingURL=logs.js.map