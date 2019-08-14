// class.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var number = 0; //小班课课程数据数据已获取数量
var number2 = 0; //公开课课程数据数据已获取数量
var number3 = 0; //竞赛课课程数据数据已获取数量
var classNumber = 0; //小班课课程总数量
var classNumber2 = 0; //公开课课程总数量
var classNumber3 = 0; //竞赛课课程总数量

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["小班课", "公开课", "竞赛课"],
    state: ["报名中", "人数已满", "已结课"],
    state2: [],
    state3: ["参赛报名中", "参赛已截止"],
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

    var query = Bmob.Query('Class_profiles');
    query.limit(5);
    number = number + 5;

    //确定课程数据总条数
    query.count().then(res => {
      classNumber = res;
    });
    query.order("-score", "state");

    //获取限制的信息条数
    query.find().then(res => {
      this.setData({
        classlist: res,
      });
    }).catch(err => {
      console.log(err)
    });

    var query = Bmob.Query('Class_profiles3');
    query.limit(5);
    number3 = number3 + 5;

    query.count().then(res => {
      classNumber3 = res;
      console.log(classNumber3);
    });
    query.order("-score", "state");

    query.find().then(res => {
      console.log(res);
      this.setData({
        classlist3: res,
      });
    }).catch(err => {
      console.log(err)
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

  // onLoad: function () {
  //   var query = Bmob.Query('Class_profiles');
  //   query.limit(6);
  //   number = number + 6;

  //   query.count().then(res => {
  //     classNumber = res;
  //   });
  //   query.order("-score", "state");

  //   query.find().then(res => {
  //     this.setData({
  //       classlist: res,
  //     });
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },

  onReachBottom: function () {
    if (number <= classNumber) {
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