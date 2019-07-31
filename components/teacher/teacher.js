// components/teacher/teacher.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    relevantTeacherId: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  ready: function () {
    var info = this.data.relevantTeacherId;
    console.log(info);
    var query = Bmob.Query('Teacher_list');
    query.get(info).then(res => {
      // console.log(res.relevantTeacherId);
      console.log(res);
      this.setData({
        image:res.image,
        Name:res.Name,
        experience:res.experience,
      })
    }).catch(err => {
      console.log(err)
    })
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})