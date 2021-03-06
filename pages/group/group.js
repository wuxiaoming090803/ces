// pages/group/group.js
const Storage = require("../../storage.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    toView: "scrollId",
    groups: [
      {
        group: "第一组",
        user: [{ name: "张曙华" }, { name: "黄海清" },{ name: "徐云蔚" }, { name: "陈海舟" }, { name: "张左平" }, { name: "刘晓乐" }, { name: "柴哲树" }, { name: "陈若初" }, { name: "金晓东" }, { name: "廖百成" }]
      }, {
        group: "第二组",
        user: [{ name: "杨安荣" }, { name: "潘文靓" }, { name: "方巍森" }, { name: "吴春磊" }, { name: "张永杰" }, { name: "李晓冬" }, { name: "牟波" }, { name: "水洪江" }, { name: "施政" }, { name: "彭广兵" }]
      }, {
        group: "第三组",
        user: [{ name: "郭永" }, { name: "王丽" }, { name: "闫月" }, { name: "滕建芸" }, { name: "袁锋" },  { name: "王宝勤" },{ name: "汪柳" }, { name: "郭淑芬" }, { name: "秦超" }, { name: "王韵隽" }]
      },
      {
        group: "第四组",
        user: [{ name: "刘理洲" }, { name: "李晓炬" }, { name: "路斌" }, { name: "季力" }, { name: "严浩" }, { name: "王雪" }, { name: "董欣" }, { name: "陆佩洁" }, { name: "姚宇华" }, { name: "朱贇磊" }]
      },
      {
        group: "第五组",
        user: [{ name: "李志卿" }, { name: "朱宜海" }, { name: "杨木春" }, { name: "包士杰" }, { name: "徐文影" }, { name: "冯毅" }, { name: "郭晓平" }, { name: "曾霞" }, { name: "方译殊" }, { name: "陈亮" }]
      }, {
        group: "第六组",
        user: [{ name: "张元利" }, { name: "时泂" }, { name: "周杰" }, { name: "周锷" }, { name: "王晶珊" }, { name: "左养泽" }, { name: "陈延" }, { name: "宋慧德" }, { name: "金旭东" }, { name: "张杰" }]
      }, {
        group: "第七组",
        user: [{ name: "杨虹" }, { name: "单良" }, { name: "宗忆陈" }, { name: "何丞栩" }, { name: "黄元俊" }, { name: "姜瑞强" }, { name: "周小萍" }, { name: "梁学超" }, { name: "乐婉婷" }, { name: "梁华聪" }]
      }, {
        group: "第八组",
        user: [{ name: "张颖" }, { name: "孔凡强" }, { name: "季德超" }, { name: "王华" }, { name: "黄美生" }, { name: "朱道明" }, { name: "赵文浩" }, { name: "王蔚薇" }, { name: "谢妍" }, { name: "钱景伟" }]
      }, {
        group: "第九组",
        user: [{ name: "石富义" }, { name: "张雷" }, { name: "孔庆武" }, { name: "李建英" }, { name: "顾雪凤" }, { name: "潘国强" }, { name: "胡晓春" }, { name: "郭廷利" }, { name: "汪丽" }, { name: "刘丹玫" }]
      }, {
        group: "第十组",
        user: [{ name: "葛静燕" }, { name: "易江南" }, { name: "袁林" }, { name: "林超" }, { name: "孙金凤" }, { name: "周伟涛" }, { name: "王一寅" }, { name: "刘洪辉" }, { name: "徐天晓" }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ userId: Storage.get("currentUserName") });
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