function webpackJsonp(){require("./../../common.js"),wx.webpackJsonp.apply(null,arguments)}webpackJsonp([5],{39:function(e,s,o){"use strict";var a=getApp();Page({data:{name:"可惜没有如果～R",posts:"全部",about:"归档",project:"PROJECTS",tags:"标签",demo:"用例",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo")},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},onLoad:function(){var e=this;wx.showShareMenu({withShareTicket:!0}),a.globalData.userInfo?this.setData({userInfo:a.globalData.userInfo,hasUserInfo:!0}):this.data.canIUse?a.userInfoReadyCallback=function(s){e.setData({userInfo:s.userInfo,hasUserInfo:!0})}:wx.getUserInfo({success:function(s){a.globalData.userInfo=s.userInfo,e.setData({userInfo:s.userInfo,hasUserInfo:!0})}})},getUserInfo:function(e){console.log(e),a.globalData.userInfo=e.detail.userInfo,this.setData({userInfo:e.detail.userInfo,hasUserInfo:!0})}})}},[39]);