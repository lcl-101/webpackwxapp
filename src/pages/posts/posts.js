const app = getApp();

Page({
  data:{
    title:'全部',
    loading:true,
    list:''
  },
  onLoad: function(){
    var that = this;
    if(!app.globalData.listDatas){
      wx.showLoading({
        title: '加载中',
      });
      this.sendQuest();
    }else {
      that.setData({
        loading:false,
        list:app.globalData.listDatas
      });
    }
  },
  onPullDownRefresh: function(){
    var that = this;
    that.setData({
      list:'',
      loading:true,
    });
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.sendQuest(function(){
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    });
  },
  sendQuest: function(callback){
    var that = this;
    //涉及到域名问题正式项目
    wx.request({
      url:'https://lcl101.cn/api/getList',
      method:'GET',
      dataType:'json',
      success:function(res){
        wx.hideLoading();
        if(res.statusCode == 200){
          that.setData({
            list:res.data,
            loading:false,
          });
          app.globalData.listDatas = res.data;
          if(callback){
            callback();
          }
        }else {
          console.log(res.errMsg)
        }
      }
    })
  }
})
