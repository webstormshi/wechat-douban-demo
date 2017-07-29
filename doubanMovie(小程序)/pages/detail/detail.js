// pages/welcome/welcome.js
var app = getApp();
Page({
  data:{
    details:{},
    directors:[],
    actors:[]
  },
  onLoad:function(options){
      var that = this;
      wx.showToast({
        title:"加载中",
        icon:'loading',
        duration:100
      });
      console.log(options);
      var detailURL = app.globalData.doubanBase + app.globalData.detail + options.id;
      console.log(detailURL);
     this.getdetailData(detailURL,'details','电影详情');
  },
  playTap:function() {
    wx.navigateTo({
      url:'../video/video'
    })
  },
  getdetailData:function(url,settedKey,categoryTitle){
      wx.showToast({
        title:"加载中",
        icon:'loading',
        duration:10000
      });
      var that = this;
      wx.request({
        url:url,
        data:{},
        method:'GET',
        header:{
          "Content-Type":"json",
        },
           success:function(res){
             console.log(res.data);
              that.setData({
                details:res.data,
                directors:res.data.directors,
                actors:res.data.casts
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