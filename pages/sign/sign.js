// pages/sign/sign.js
const util = require("../../utils/util.js");
const Config = require("../../config.js");
const Storage = require("../../storage.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      signText:"签到",
      isShow:true
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
  bind: function(){
      
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
  bindHome:function(){
    wx.redirectTo({
      url: '../home/home'
    })
  },
  bindVote: function () {
    wx.redirectTo({
      url: '../vote/vote'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  formSubmitScan(e) {
    var _this = this;
    var openId = Storage.get("openId");
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log('扫码结果===' + res.result)
        var signResult = {};

        if (Storage.get('sign')) {
          signResult = Storage.get('sign');
        } 
        if (!signResult[res.result]){
          wx.request({
            url: Config.appurl + '/user/signCode',
            data: {
              openId: openId,
              signType: res.result
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (r) {
              console.log(r.data)
              if (r.data == 1) {
                //设置storage的secondSign值
                signResult[res.result] = true;
                Storage.set('sign', signResult);
                _this.setData({
                  signText:"签到成功"
                })
                console.log('第' + res.result + '次签到成功!!!')
              } else if (r.data == 2){
                _this.setData({
                  signText: "您已签到"
                })
                console.log('第' + res.result + '次已经签到过了！')
              } else {
                _this.setData({
                  signText: "请扫描正确的签到二维码"
                })
                console.log("签到失败");
              }
            }
          })
        } else {
          _this.setData({
            signText: "您已签到"
          })
          console.log('第' + res.result + '次已经签到过了！')
        }
      }
    });
  }
})