// pages/search/list.js
var app = getApp();
Page({
  data:{
    movieList: [],
    list: [],
  },
  inferIndex:"none",
  activeIndex:"block",
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  InputTap:function(e){
    var keyword = e.detail.value;
    var searchURL = app.globalData.doubanBase + app.globalData.search + "?q=" + keyword;
    this.getSearchListData(searchURL, 'list', '电影搜索');
    console.log(searchURL);
  },

  getSearchListData: function (url, settedKey, categoryTitle) {
    wx.showToast({
      title: "加载中",
      icon: 'loading',
      duration: 2000
    });
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json",
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          movieList: res.data.subjects,
          list:res.data
        })
      }
    });
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