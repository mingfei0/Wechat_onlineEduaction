// components/pinke/pinke.js
var Bmob = require('../../dist/Bmob-1.7.1.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //定义传入的关联PinkeID
    relevantPinkeId:{
        type:String,
        value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },



  ready() {
    var query = Bmob.Query('Pinke_list');

    query.get(this.data.relevantPinkeId).then(res => {
      let info = res;
      console.log(info.results[0].userImage);
      this.setData({
        image : res.results[0].userImage,
        remNumber : res.results[0].limitNumber-res.results[0].curNumber
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