// class.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var number = 0; //课程数据数据已获取数量
var teacherNumber = 0; //课程总数量
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["小班课", "公开课", "设计课"],
    state: ["报名中", "人数已满", "已结课"],
    color: ["red", "yellow", "#7F7F7F"],
    activeIndex: app.activeIndex,
    sliderOffset: 0,
    sliderLeft: 30
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          activeIndex: app.activeIndex
        });
      }
    });
  },
  
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  gosearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },


  //页面加载时获取课程信息

  onLoad: function () {
    var query = Bmob.Query('Class_profiles');
    query.limit(6);
    number = number + 6;

    query.count().then(res => {
      teacherNumber = res;
    });
    query.order("-score", "state");

    query.find().then(res => {
      this.setData({
        classlist: res,
      });
    }).catch(err => {
      console.log(err)
    })
  },

  onReachBottom: function () {
    if (number <= teacherNumber) {
      var query = Bmob.Query('Class_profiles');
      query.skip(number);
      var classlist = new Array();
      query.find().then(res => {
        console.log(res);
        number = number + res.length;
        classlist = this.data.classlist.concat(res);
        this.setData({
          classlist: classlist,
        });
      }).catch(err => {
        console.log(err)
      })
    } else {
      this.setData({
        finalLine: false,
      });
    }
  },

  getPinkelist: function (relevantPinkeId) {
    let query = Bmob.Query('Pinke_list');
    query.get(relevantPinkeId).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  },

})