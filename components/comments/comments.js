// components/comments/comments.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    studentEvaluation: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached() {
    var query = Bmob.Query('Student_comments');
    query.get(this.data.studentEvaluation).then(res => {
      console.log(res);
      let info = res.results[0];
      console.log(info);
      this.setData({
        image : info.image,
        type : info.type,
        student : info.student,
        comments : info.comments
      });
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