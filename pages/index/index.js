//index.js
//初始化后端接口实例

var Bmob = require('../../dist/Bmob-1.7.1.min.js');
var app = getApp();
var number = 0;             //教师数据已获取数量
var teacherNumber = 0;           //教师总数量
Page({

  data: {
    //轮播图信息
    indicatorDots: true,
    indicatorcolor: "#9BD7FF",
    indicatoractivecolor: "#CCEAFD",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    finalLine:false,
    iconType: [
      'success', 'success_no_circle', 'info'
    ],
  },

  onLoad: function () {
    //获取首页轮播图,图片地址与对应的课程ID用于跳转
    var query = Bmob.Query('Index_recommend');
    
    query.find().then(res => {
      var result = res;

      var url = new Array();
      var classId = new Array();

      for (let i = 0; i < result.length; i++) {
        url[i] = result[i].url;
        classId[i] = result[i].relevant_classId;
      }
      this.setData({
        imgUrls: url,
        classId: classId,
      });
    }).catch(err => {
      console.log(err)
    })

    //获取教师的基本信息
    query = Bmob.Query('Teacher_profiles');
    query.limit(6);
    number = number + 6;
    var teacherlist = new Array();
    
    query.count().then(res => {
      teacherNumber = res;
    });

    query.find().then(res => {
      console.log(res);
      teacherlist = res;
      this.setData({
        teacherlist: teacherlist,
      });
    }).catch(err => {
      console.log(err)
    })
  },

  //设置活动栏
  toclass: function (e) {
    let a = e.currentTarget.index;
    app.activeIndex = a;
    wx.switchTab({
      url: '../class/class'
    })
  },

  setActiveIndex: function (e) {

  },




  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(number <= teacherNumber){
      var query = Bmob.Query('Teacher_profiles');
    query.skip(number);
    var teacherlist = new Array();
    query.find().then(res => {
      console.log(res);
      number = number + res.length;
      teacherlist = this.data.teacherlist.concat(res);
      this.setData({
        teacherlist: teacherlist,
      });
    }).catch(err => {
      console.log(err)
    })
    }else{
      this.setData({
        finalLine: false,
      });
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})