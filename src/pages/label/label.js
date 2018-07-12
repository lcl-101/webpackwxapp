const app = getApp();

Page({
  data:{
    title:'全部',
    loading:true,
    label:'',
    list:'',
    typeData:''
  },
  onLoad: function(){
    var that = this;
    if(!app.globalData.listDatas){
      wx.showLoading({
        title: '加载中',
      });
      this.sendQuest(function(res){
        that.setData({
          list:res.data,
          loading:false
        });
        that.getList(res.data);
      });
    }else {
      that.setData({
        loading:false,
        list:app.globalData.listDatas
      });
      that.getList(app.globalData.listDatas);
    }
  },
  onPullDownRefresh: function(){
    var that = this;
    that.setData({
      list:'',
      loading:true,
      typeData:""
    });
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.sendQuest(function(res){
      that.setData({
        list:res.data,
        loading:false
      });
      that.getList(res.data);
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    });
  },
  //获取列表分类名
  getList: function(data){
    var that = this;
    var lableData = [];
    for(var i=0;i<data.length;i++){
      lableData.push(data[i].labels[0].name);
    }
    that.setData({
      label:Array.from(new Set(lableData))
    });
    that.getlistType();
  },
  //对数据进行分类存储
  getlistType: function(){
    var that = this;
    var data = {};
    console.log(this);
    for(var i=0;i<this.data.label.length;i++){
      data[i]  = [];
      for(var j=0;j<this.data.list.length;j++){
        if(this.data.label[i] == this.data.list[j].labels[0].name){
          data[i].push(this.data.list[j]);
        }
      }
    }
    console.log(data);
    that.setData({
      typeData:data,
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
          app.globalData.listDatas = res.data;
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
