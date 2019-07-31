// pages/classInfo/classInfo.js

var Bmob = require('../../dist/Bmob-1.7.1.min.js');
Page({
  data: {
    relevantTeacherId: "",
    showModal: false,
    teacherInfo: "",
  },


  onLoad(options) {
    //将链接获取的课程ID保存


    // const relation = Bmob.Relation('Teacher_list') // 需要关联的表
    // const relID = relation.add(['138ccba4cf', '7f7e21f5f6']) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
    // var query = Bmob.Query('Class_list3')
    // query.get('339a1f2351').then(res => {
    //   res.set('relevantTeacherId', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
    //   res.save()
    // })

    var query = Bmob.Query('Class_list3')
    query.field('relevantTeacherId', '339a1f2351')
    query.relation('Teacher_list').then(res => {
      this.setData({
        teacherInfo: res
      })
      console.log(this.data.teacherInfo);
    })

    //链接课程详细数据表
    var query = Bmob.Query('Class_list3');
    query.get("339a1f2351").then(res => {
      console.log(res);
      this.setData({
        classInfo: res,
        relevantPinkeId: res.relevantPinkeId,
      })
    }).catch(err => {
      console.log(err)
    })

  },

  copyText: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

})




//relation查询方式及设置方法


// const relation = Bmob.Relation('Teacher_list') // 需要关联的表
//     const relID = relation.add('138ccba4cf') //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
//     var query = Bmob.Query('Class_list3')
//     query.get('339a1f2351').then(res => {
//       res.set('relevantTeacherId', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
//       res.save()
//     })

//     var query = Bmob.Query('Class_list3')
//     query.field('relevantTeacherId', '339a1f2351')
//     query.relation('Teacher_list').then(res => {
//       console.log(res);
//     })