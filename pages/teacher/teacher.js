var Bmob = require('../../dist/Bmob-1.7.1.min.js');
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
    /**
   * 页面的初始数据
   */
  data: {
    //跳转携带的教师链接ID
    relevantTeacherId:"",

    tabs: ["基本信息", "相关课程", "学生评价"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  

  onLoad: function (options) {
    //将链接的教师ID保存
    this.setData({
      relevantTeacherId: options.relevantTeacherId
    })


    var query = Bmob.Query('Teacher_list');
    query.get(this.data.relevantTeacherId).then(res => {
       console.log(res);
      this.setData({
        image:res.image,
        Name:res.name,
        type:res.type,
        major:res.major,
        country:res.country,
        resume:res.resume,
        education:res.education,
        workExperience:res.workExperience,
        works:res.works,
        relevantClassId:res.relevantClassId,
        rate:res.rate,
        scorers:res.scorers,
        characteristics:res.characteristics,
        studentEvaluation:res.studentEvaluation
      })
    }).catch(err => {
      console.log(err)
    })
  },
  
})