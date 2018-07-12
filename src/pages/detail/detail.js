const app = getApp();
Page({
  data:{
    listId:'',
    loading:true,
    listData:'',
    artileDate:''
  },
  onLoad: function(){
    var that = this;
    if(!app.globalData.listDatas){
      wx.showLoading({
        title: '加载中',
      });
      that.getList(that.options.id,res.data);
    }else {
      that.getList(that.options.id,app.globalData.listDatas);
    }
  },
  onPullDownRefresh: function(){
    var that = this;
    that.setData({
      listData:'',
      loading:true,
    });
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.sendQuest(function(res){
      that.getList(that.options.id,res.data);
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    });
  },
  getList: function(id,data){
    console.log(data);
    var that = this;
    that.setData({
      listId:id,
      loading:false,
      listData:data
    });
    for(var i=0;i<data.length;i++){
      if(that.options.id == data[i].id){
          var articles = data[i].body;
          //将markdown内容转换为towxml数据
          let articdata = app.towxml.toJson(articles,'markdown');
          //设置文档显示主题，默认'light'
          articdata.theme = 'light';
          that.setData({
            artileDate:articdata
          });
      }
    }
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
          if(callback){
            callback(res);
          }
        }else {
          console.log(res.errMsg)
        }
      }
    })
  }
})
