function webpackJsonp(){require("./../../common.js"),wx.webpackJsonp.apply(null,arguments)}webpackJsonp([3],{44:function(t,a,s){"use strict";var e=getApp();Page({data:{title:"全部",loading:!0,label:"",list:"",typeData:""},onLoad:function(){var t=this;wx.showShareMenu({withShareTicket:!0}),e.globalData.listDatas?(t.setData({loading:!1,list:e.globalData.listDatas}),t.getList(e.globalData.listDatas)):(wx.showLoading({title:"加载中"}),this.sendQuest(function(a){t.setData({list:a.data,loading:!1}),t.getList(a.data)}))},onPullDownRefresh:function(){var t=this;t.setData({list:"",loading:!0,typeData:""}),wx.showNavigationBarLoading(),this.sendQuest(function(a){t.setData({list:a.data,loading:!1}),t.getList(a.data),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()})},getList:function(t){for(var a=[],s=0;s<t.length;s++)a.push(t[s].labels[0].name);this.setData({label:Array.from(new Set(a))}),this.getlistType()},getlistType:function(){var t={};console.log(this);for(var a=0;a<this.data.label.length;a++){t[a]=[];for(var s=0;s<this.data.list.length;s++)this.data.label[a]==this.data.list[s].labels[0].name&&t[a].push(this.data.list[s])}console.log(t),this.setData({typeData:t})},sendQuest:function(t){wx.request({url:"https://lcl101.cn/api/getList",method:"GET",dataType:"json",success:function(a){wx.hideLoading(),200==a.statusCode?(e.globalData.listDatas=a.data,t&&t(a)):console.log(a.errMsg)}})}})}},[44]);