function webpackJsonp(){require("./../../common.js"),wx.webpackJsonp.apply(null,arguments)}webpackJsonp([1],{40:function(t,a,s){"use strict";var i=getApp();Page({data:{title:"全部",loading:!0,list:""},onLoad:function(){wx.showShareMenu({withShareTicket:!0}),i.globalData.listDatas?this.setData({loading:!1,list:i.globalData.listDatas}):(wx.showLoading({title:"加载中"}),this.sendQuest())},onPullDownRefresh:function(){this.setData({list:"",loading:!0}),wx.showNavigationBarLoading(),this.sendQuest(function(){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()})},sendQuest:function(t){var a=this;wx.request({url:"https://lcl101.cn/api/getList",method:"GET",dataType:"json",success:function(s){wx.hideLoading(),200==s.statusCode?(a.setData({list:s.data,loading:!1}),i.globalData.listDatas=s.data,t&&t()):console.log(s.errMsg)}})}})}},[40]);