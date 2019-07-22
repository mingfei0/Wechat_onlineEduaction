//app.js
var Bmob = require('./dist/Bmob-1.7.1.min.js');
var activeIndex = 0;
//初始化Bomb
Bmob.initialize("000684453c7f1fe769c9c19b71f76672", "dc31b731d148777efaaaa20bb781ee47");
App({
  activeIndex: 0 ,
  version: 'v3.0.0', //版本号
  onLaunch: function () {
    var that = this;
    Bmob.User.auth().then(res => {
      console.log("一键登录成功")
      console.log(res);
    })
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 展示本地存储能力
    // Bmob.User.login('mingfei', 'sjk123456').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // });
    //   var user = new Bmob.User(); //注册用户

    //   var newOpenid = wx.getStorageSync('openid');
    //   if (!newOpenid) {

    //     wx.login({
    //       success: function (res) {
    //         user.loginWithWeapp(res.code).then(function (user) {
    //           var openid = user.get("authData").weapp.openid;
    //           console.log(user, 'user', user.id, res);

    //           if (user.get("nickName")) {
    //             //二次访问
    //             console.log(user.get("nickName"), 'res.get("nickName")');

    //             wx.setStorageSync('openid', openid)
    //           } else {
    //             //保存用户其他信息
    //             wx.getUserInfo({
    //               success: function (result) {
    //                 var userInfo = result.userInfo;
    //                 var nickName = userInfo.nickName;
    //                 var avatarUrl = userInfo.avatarUrl;

    //                 var u = Bomb.Object.extend("_User");
    //                 var query = new Bomb.Query(u);
    //                 //这个id是要修改条目的id，你在生成这个存储并成功时可以获取到，请看文档
    //                 query.get(user.id, {
    //                   success: function (result) {
    //                     //自动绑定之前的账号
    //                     result.set('nickName', nickName);
    //                     result.set('userPic', avatarUrl);
    //                     result.set('openid', openid);
    //                     result.save();

    //                   }
    //                 });

    //               }
    //             });

    //           }
    //         }, function (err) {
    //           console.log(err);
    //         });
    //       }
    //     })
    //   }
  },

})
//   var logs = wx.getStorageSync('logs') || []
//   logs.unshift(Date.now())
//   wx.setStorageSync('logs', logs)

//   // 登录
//   wx.login({
//     success: res => {
//       // 发送 res.code 到后台换取 openId, sessionKey, unionId
//     }
//   })
//   // 获取用户信息
//   wx.getSetting({
//     success: res => {
//       if (res.authSetting['scope.userInfo']) {
//         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//         wx.getUserInfo({
//           success: res => {
//             // 可以将 res 发送给后台解码出 unionId
//             this.globalData.userInfo = res.userInfo

//             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//             // 所以此处加入 callback 以防止这种情况
//             if (this.userInfoReadyCallback) {
//               this.userInfoReadyCallback(res)
//             }
//           }
//         })
//       }
//     }
//   })
// },
// globalData: {
//   userInfo: null
// },