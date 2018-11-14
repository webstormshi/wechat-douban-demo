// pages/inTheaters/inTheaters.js
var app = getApp();
Page({
  data:{},
  inTheaters: [],
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var inTheatersURL = app.globalData.doubanBase + app.globalData.inTheaters + "?start=0&count=10";
    console.log(inTheatersURL);
    this.getMovieListData(inTheatersURL, 'inTheaters', '热门电影');
  },

  getMovieListData: function (url, settedKey, categoryTitle) {
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
          inTheaters: res.data.subjects
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