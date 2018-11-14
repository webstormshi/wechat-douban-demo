// pages/mine/mine.js
var app = getApp();
Page({
  data:{},
  status:' ',
  displayInfo:'',
  doLogin: function () {
    var that = this;
    wx.showModal({
      title: '登录',
      content: '是否允许微信授权登录',
      success: function (res) {
        if (res.confirm) {
          app.login(function (user) {
            console.log(user);
            that.setData({
              userText: user,
              status: '退出',
              displayInfo: 'block',
              hiddenInfo: 'none'
            })
          })
        }
      }
    })
  },
  doLogout:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['退出', '重新登录'],
      success: function (res) {
        if (!res.cancel) {
          that.setData({
            userText: '',
            status: '登录',
            displayInfo: 'none',
            hiddenInfo: 'block'
          })
        }
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      status: '登录',
      displayInfo: 'none',
      hiddenInfo: 'block'
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