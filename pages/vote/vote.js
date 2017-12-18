// pages/vote/vote.js
const util = require("../../utils/util.js");
const Config = require("../../config.js");
const Storage = require("../../storage.js");
Page({

  /**
   * 页面的初始数据
   */

  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    // users1:[],
    // users2:[],
    // users3:[]
    users1: [
      {
        time:"上午",
        userInfo: [{ issue: '人力资源管理中心', userName: '李晓炬', id: "123123123", image: "../../imag/user.png"}]
      }, {
        time: "下午",
        userInfo: [{ issue: '财务及行政管理中心', userName: '张颖', image: "../../imag/user.png"}, {
          issue: '采购管理中心', userName: '葛静燕', image: "../../imag/user.png"}, {
            issue: '保密委员会及质量管理中心', name: '时泂', image: "../../imag/user.png"
        }, {
            issue: '总裁办公室', userName: '潘文靓', image: "../../imag/user.png"
        }]
      }
    ],
    users2: [
      {
        time: "上午",
        userInfo: [{ issue: '人力资源管理中心', userName: '杨安荣', image: "../../imag/user.png"}]
      }, {
        time: "下午",
        userInfo: [{ issue: '人力资源管理中心', userName: '李四', image: "../../imag/user.png"}, {
          issue: '人力资源管理中心', userName: '李四', image: "../../imag/user.png"
        }]
      }
    ],
    users3: [
      {
        time: "上午",
        userInfo: [{ issue: '人力资源管理中心', userName: '王五', image: "../../imag/user.png"}]
      }, {
        time: "下午",
        userInfo: [{ issue: '人力资源管理中心', userName: '王五', image: "../../imag/user.png" }, {
          issue: '人力资源管理中心', userName: '王五', image: "../../imag/user.png"
        }, {
            issue: '人力资源管理中心', userName: '王五', image: "../../imag/user.png"
        }, {
            issue: '人力资源管理中心', userName: '王五', image: "../../imag/user.png"
        }]
      }
    ]
    },
  /**
   * 生命周期函数--监听页面加载
   */
  tabFun: function (e) {
    //获取触发事件组件的dataset属性  
    var _datasetId = e.currentTarget.dataset.current;
    console.log("----" + _datasetId + "----");
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  },
  bindMetting:function(e){
    wx.redirectTo({
      url: '../home/home'
    })
  },
  bindSign:function(){
    wx.redirectTo({
      url: '../sign/sign'
    })
  },
  bindCount:function(){
    wx.navigateTo({
      url: '../count/count'
    })
  },
  onLoad: function (options) {
    //会议投票讲师显示
    var that = this;
    var date1 = new Date();
    // wx.request({
    //   url: Config.appurl + '/userInfo/queryUserInfo',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     // that.setData({
    //     //   userInfo: res.data
    //     // })
    //     console.log("会议投票讲师后台返回数据" + res.data);
    //     that.setData({
    //       users1: res.data.userInfo1,
    //       users2: res.data.userInfo2,
    //       users3: res.data.userInfo3
    //     })
    //     var date2 = new Date();
    //     var ss = date2 - date1;
    //     console.log("date:"+ss)
    //   }
    // })
  },
  scrollToTop: function (e) {
    this.setAction({
      scrollTop: 0
    })
  },
  bindUrl:function(e){
   // Storage.set('userId', e.currentTarget.dataset.current);
    var id = e.currentTarget.dataset.current; 
    wx.navigateTo({
      //url: '../items/items?userId='+ id
      url:'../items/items'
    })
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