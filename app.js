//app.js
var wilddog = require('wilddog-weapp-all')
App({
  onLaunch: function () {

    var config = {
      syncURL : "https://sywx.wilddogio.com",
      authDomain:'sywx.wilddog.com'
    }
    wilddog.initializeApp(config)
    this.ref = wilddog.sync().ref('todo')
  },
  login:function(callback){
    console.log(callback);
    wilddog.auth().signInWeapp().then(function(user){
      callback(user);
      wx.showToast({
        title: '登录成功',
      })
    }).catch(function(err){
        wx.showToast({
          title: '登录失败',
        })
    })
  },
  globalData:{
    userInfo:null,
    doubanBase:"https://api.douban.com",
    inTheaters:"/v2/movie/in_theaters",
    comingSoon:"/v2/movie/coming_soon",
    top250:"/v2/movie/top250",
    detail:"/v2/movie/subject/",
    search:"/v2/movie/search"
  }
})
