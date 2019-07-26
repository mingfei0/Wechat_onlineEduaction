// components/class/class.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    relevantId:{
      type:String,
        value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classState:["报名中", "人数已满", "已结课"],
  },

  attached() {
    console.log(this.data.relevantId);
    var id = this.data.relevantId;
    var query = Bmob.Query('Class_profiles');
    query.get(id).then(res => {
      this.setData({
        image : res.classImage,
        Name : res.Name,
        rate: res.rate,
        state: res.state,
        classId : res.relevantClassId
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
