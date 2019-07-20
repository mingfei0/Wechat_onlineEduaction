// pages/classInfo/classInfo.js
Page({
  data: {
    //拼课弹窗
    showModal: false,
    // 计时器
    targetTime: 0,
    targetTime1: 0,
    myFormat: ['时', '分', '秒'],
    myFormat1: ['天', '时', '分', '秒'],
    status: '进行中...',
    clearTimer: false
  },
  //计时器函数
  onLoad() {
    this.setData({
      targetTime: new Date().getTime() + 6430000,
      targetTime1: new Date().getTime() + 86430000,
      // targetTime2: new Date().getTime() + 10000
    });
    console.log(Date());
  },
  onUnload() {
    this.setData({
      clearTimer: true
    });
  },
  myLinsterner(e) {
    this.setData({
      status: '结束'
    });
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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