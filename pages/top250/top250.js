// pages/top250/top250.js
var app = getApp();
Page({
  data:{},
  top250: [],
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var top250URL = app.globalData.doubanBase + app.globalData.top250 + "?start=0&count=10";
    this.getnewMovieListData(top250URL, 'top250', 'top250');
  },
  getnewMovieListData: function (url, settedKey, categoryTitle) {
    wx.showToast({
      title: "加载中",
      icon: 'loading',
      duration: 10000
    });
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json",
      },
      success: function (res) {
        that.setData({
          top250: res.data.subjects
        })
      }
    });
  },

  toast: function (e) {
    console.log(e);
    console.log(e.target);
    wx.navigateTo({
      url: "../search/list"
    })
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})