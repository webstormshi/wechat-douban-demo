 // pages/welcome/welcome.js
var app = getApp();
Page({
  data:{
    comingSoon:[],
    inTheaters:[],
    top250:[],
    star:[]
  },
  onLoad:function(options){
    var inTheatersURL = app.globalData.doubanBase + app.globalData.inTheaters + "?start=0&count=10";
     var comingSoonURL = app.globalData.doubanBase + app.globalData.comingSoon+ "?start=0&count=10";
     var top250URL = app.globalData.doubanBase + app.globalData.top250 + "?start=0&count=10";
      // console.log(inTheatersURL);
    //  console.log(comingSoonURL);
    //  console.log(top250URL);
    // 页面初始化 options为页面跳转所带来的参数
    this.getMovieListData(inTheatersURL,'inTheaters','热门电影');
    this.getComingSoonListData(comingSoonURL,'comingSoon','近期上映');
     this.getnewMovieListData(top250URL,'top250','top250');
  },
  getMovieListData:function(url,settedKey,categoryTitle){
      wx.showToast({
        title:"加载中",
        icon:'loading',
        duration:2000
      });
      var that = this;
      wx.request({
        url:url,
        method:'GET',
        header:{
          "Content-Type":"json",
        },
           success:function(res){
             //console.log(res.data);
              that.setData({
              inTheaters:res.data.subjects
            })
          }
      });
  },
    getnewMovieListData:function(url,settedKey,categoryTitle){
      wx.showToast({
        title:"加载中",
        icon:'loading',
        duration:10000
      });
      var that = this;
      wx.request({
        url:url,
        method:'GET',
        header:{
          "Content-Type":"json",
        },
           success:function(res){
              that.setData({
              top250:res.data.subjects
            })
          }
      });
  },
    getComingSoonListData:function(url,settedKey,categoryTitle){
      wx.showToast({
        title:"加载中",
        icon:'loading',
        duration:10000
      });
      var that = this;
      wx.request({
        url:url,
        method:'GET',
        header:{
          "Content-Type":"json",
        },
           success:function(res){
              that.setData({
                comingSoon:res.data.subjects,
            })
          }
      });
  },

   toast: function(e) {
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
