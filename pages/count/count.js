// pages/count/count.js
var wxCharts = require('../../utils/wxcharts.js');
var pieChart = null;
const app = getApp();
const Config = require("../../config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isIni:true,
      //users:[],
      // users:[
      // { 
      //     topicTitle: "问题一：2018年如何优化人力资源管理制度", 
      //     topicId: "1" ,
      //     issue: [{ name: '方案一', data: 20 }, { name: '方案二', data: 10}]
      // }, 
      // {
      //   topicTitle: "问题二", 
      //   topicId: "2",
      //   issue: [{ name: '方案一', data: 2 }, { name: '方案二', data: 30 }] }, 
      // {
      //   topicTitle: "问题三", 
      //   topicId: "3",
      //   issue: [{ name: '方案一', data: 2 }, { name: '方案二', data: 30 }] }
      // ]
      users: [{ "topicTitle": "问题一：", "issue": [{ "name": "方案二", "data": 1 }], "topicId": "948181c46020a693016020e675e100b1", "topicCommit": "销售合同评审流程周期长\r\n" }, { "topicTitle": "问题二：", "issue": [{ "name": "同意", "data": 1 }], "topicId": "948181c46020a693016020e675e100b2", "topicCommit": "销售合同类型及模板" }, { "topicTitle": "问题三：", "issue": [{ "name": "同意", "data": 1 }], "topicId": "948181c46020a693016020e675e100b3", "topicCommit": "销售发票开具及签收--表现一：开票申请流程太复杂，oa环节过多（新增开票-保存-添加开票内容-保存提交" }, { "topicTitle": "问题三：", "issue": [{ "name": "同意", "data": 1 }], "topicId": "948181c46020a693016020e675e10bb3", "topicCommit": "销售发票开具及签收--表现二：开票信息的索取" }, { "topicTitle": "问题三：", "issue": [{ "name": "不同意", "data": 1 }], "topicId": "948181c46020a693016020e675e10bb4", "topicCommit": "销售发票开具及签收--表现三：很多工程项目需要结算后才能完成竣工验收节点的付款,但里程碑只有“验收”节点..." }, { "topicTitle": "问题四：", "issue": [{ "name": "同意", "data": 1 }], "topicId": "948181c4602a8d2001602afe9b1400b4", "topicCommit": "收款计划制定与执行--表现一、延期收款项目（数字化加工）过程中未收款问题，过程中实际加工量小于合同按比例分配加工量..." }, { "topicTitle": "问题四：", "issue": [{ "name": "保留意见", "data": 1 }], "topicId": "948181c4602a8d2001602afe9b140bb5", "topicCommit": "收款计划制定与执行--表现二、延期收款填写问题：延期收款系统延期只能填写三个月，但是很多客户的付款都是根据财政厅走..." }, { "topicTitle": "问题四：", "issue": [{ "name": "不同意", "data": 1 }], "topicId": "948181c4602a8d2001602afe9b140bb6", "topicCommit": "收款计划制定与执行--表现三、很多工程项目需要结算后才能完成竣工验收节点的付款,但里程碑只有“验收”节点..." }, { "topicTitle": "问题四：", "issue": [{ "name": "不同意", "data": 1 }], "topicId": "948181c4602a8d2001602afe9b140bb7", "topicCommit": "收款计划制定与执行--表现四、系统收款数据不准确，不知找哪个部门来解决问题。" }, { "topicTitle": "问题五：", "issue": [{ "name": "不同意", "data": 1 }], "topicId": "948181c4602a8d2001602affbd4f00b5", "topicCommit": "货款支付流程与反馈--表现一、货款支付审批流程长，审批节点繁琐" }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: Config.appurl + '/topic/getTopicVoteResult',
      data: {
        userId: app.globalData.userId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("-----投票统计后台返回结果：-------" + res.data.user);
        // that.setData({
        //   users: res.data.user
        // })
        var windowWidth = 320;
        function initPie(pieId, issue) {
          pieChart = new wxCharts({
            animation: true,
            canvasId: 'pieCanvas_' + pieId,
            type: 'pie',
            series: issue,
            width: 300,
            height: 250,
            dataLabel: true,
          });
        }
        var pies = that.data.users;
        if (pies.length == 0) {
          that.setData({
            isInit: false
          })
          return;
        } else {
          that.setData({
            isInit: true
          })
          for (var i = 0; i < pies.length; i++) {
            initPie(pies[i].topicId, pies[i].issue);
          }
        }
      }
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