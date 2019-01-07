//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '节流函数',
    preData: 0,
    afterData: 0,
    scrollTop:''
  },
  onLoad: function () {

  },
  /**
   * [节流函数]
   * @param  {[type]} method [方法]
   * @param  {[type]} delay  [时间]
   * @return {[type]}        [description]
   */
  throttle: function(method,delay){
    var content = this, args = arguments;
    clearTimeout(method.Id);
    method.Id= setTimeout(function(){
        method.apply(content,args);
    },delay);
  },
  throttlePre: function(){
    this.setData({
      preData: this.data.scrollTop
    })
  },
  throttleAfter: function(){
    this.setData({
      afterData: this.data.scrollTop
    })
  },
  onPageScroll: function(e){
    this.setData({
      scrollTop: e.scrollTop
    })
    this.throttlePre();
    this.throttle(this.throttleAfter,300)
  }
})
