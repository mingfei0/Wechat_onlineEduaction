// pages/classInfo/classInfo.js

var Bmob = require('../../dist/Bmob-1.7.1.min.js');
var teacherInfo ="";
Page({
  data: {
    relevantTeacherId: "",
    showModal: false,
  },


  onLoad(options) {
    //将链接获取的课程ID保存
    this.setData({
      relevantClassId: options.relevantClassId
    })

    //链接课程详细数据表
    var query = Bmob.Query('Class_list');
    query.include('relevantTeacherId');
    query.get(this.data.relevantClassId).then(res => {
      console.log(res);
      this.setData({
        classInfo: res,
        relevantTeacherId: res.relevantTeacherId.objectId,
        relevantPinkeId: res.relevantPinkeId,
        teacherImage: res.relevantTeacherId.image,
        teacherName: res.relevantTeacherId.name,
        experience: res.relevantTeacherId.experience
      })
      // console.log(relevantTeacherId);
      // var a = getTeacher(res.relevantTeacherId);
      // console.log(teacherInfo);
    }).catch(err => {
      console.log(err)
    })

    // //链接教师表 获取信息
    // var query2 = Bmob.Query('Teacher_list');
    //  query2.get(relevantTeacherId).then(res => {
    //   console.log(res);
    //   this.setData({
    //     teacherImage:res.image,
    //     teacherName:res.name,
    //     experience:res.experience 
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })
    // var query2 = Bmob.Query('Teacher_list');
    // query2.get(relevantTeacherId).then(res => {
    //   console.log(res);
    //   this.setData({
    //     teacherImage: res.image,
    //     teacherName: res.name,
    //     experience: res.experience
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })

  },

  onShow() {
    // //链接教师表 获取信息
    // var query2 = Bmob.Query('Teacher_list');
    // query2.get(relevantTeacherId).then(res => {
    //   console.log(res);
    //   this.setData({
    //     teacherImage: res.image,
    //     teacherName: res.name,
    //     experience: res.experience
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })
  },

  //拼课弹窗函数
  // openConfirm: function () {
  //   wx.showModal({
  //     title: '拼课提示',
  //     content: '参与此次拼课最少需要188 ' + ' ' + ' 若拼团失败会在截止时自动退回',
  //     confirmText: "确认支付",
  //     cancelText: "取消",
  //     success: function (res) {
  //       if (res.confirm) {
  //         wx.showToast({
  //           title: '拼课成功',
  //           icon: 'success',
  //           duration: 3000
  //         });
  //       } else {
  //         console.log('用户点击辅助操作')
  //       }
  //     }
  //   });
  // },

})

// function getTeacher(relevantTeacherId) {
//   let query = Bmob.Query('Teacher_list');
//   query.get(relevantTeacherId).then(res => {
//     teacherInfo = res;
//     console.log(teacherInfo);
//     return teacherInfo;
//   }).catch(err => {
//     console.log(err)
//   })
// }