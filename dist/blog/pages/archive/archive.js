function webpackJsonp(){require("./../../common.js"),wx.webpackJsonp.apply(null,arguments)}webpackJsonp([6],{13:function(t,a,s){"use strict";var i=getApp();Page({data:{title:"全部",loading:!0,date:"",list:"",typeData:""},onLoad:function(){var t=this;i.globalData.listDatas?(t.setData({loading:!1,list:i.globalData.listDatas}),t.getList(i.globalData.listDatas)):(wx.showLoading({title:"加载中"}),this.sendQuest(function(a){t.setData({list:a.data,loading:!1}),t.getList(a.data)}))},onPullDownRefresh:function(){var t=this;t.setData({list:"",loading:!0,typeData:""}),wx.showNavigationBarLoading(),this.sendQuest(function(a){t.setData({list:a.data,loading:!1}),t.getList(a.data),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()})},getList:function(t){for(var a=[],s=0;s<t.length;s++)a.push(t[s].created_at.substring(0,4));this.setData({date:Array.from(new Set(a))}),console.log(this),this.getlistType()},getlistType:function(){var t={};console.log(this);for(var a=0;a<this.data.date.length;a++){t[a]=[];for(var s=0;s<this.data.list.length;s++)this.data.date[a]==this.data.list[s].created_at.substring(0,4)&&t[a].push(this.data.list[s])}console.log(t),this.setData({typeData:t})},sendQuest:function(t){wx.request({url:"https://lcl101.cn/api/getList",method:"GET",dataType:"json",success:function(a){wx.hideLoading(),200==a.statusCode?(i.globalData.listDatas=a.data,t&&t(a)):console.log(a.errMsg)}})}})}},[13]);