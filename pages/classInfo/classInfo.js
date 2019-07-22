// pages/classInfo/classInfo.js

var Bmob = require('../../dist/Bmob-1.7.1.min.js');

Page({
  data: {
    //跳转携带的课程链接ID
    relevantClassId:"",
    //保存拼课表的链接ID
    relevantPinkeId:"",
    //保存教师的链接ID
    relevantTeacherId:"",
    //课程总体信息
    classInfo:"",
    showModal: false,
  },
  

  onLoad(options) {
    //将链接获取的课程ID保存
    this.setData({
      relevantClassId: options.relevantClassId
    })

    //链接课程详细数据表
    var query = Bmob.Query('Class_list');
    query.get(this.data.relevantClassId).then(res => {
      
      this.setData({
        classInfo:res,
        relevantPinkeId:res.relevantPinkeId,
        relevantTeacherId:res.relevantTeacherId
        
      })
      console.log(this.data.relevantPinkeId)
    }).catch(err => {
      console.log(err)
    })
  },


  //拼课弹窗函数
  openConfirm: function () {
    wx.showModal({
      title: '拼课提示',
      content: '参与此次拼课最少需要188 '+' '+' 若拼团失败会在截止时自动退回',
      confirmText: "确认支付",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.showToast({
            title: '拼课成功',
            icon: 'success',
            duration: 3000
          });
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})