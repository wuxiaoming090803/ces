// pages/hotel/hotel.js
const util = require("../../utils/util.js");
const Config = require("../../config.js");
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
        user: [{ name: "张曙华" }]
      }, {
        user: [{ name: "黄海清" },{ name: "杨安荣" }, { name: "刘理洲" }, { name: "郭永" }, { name: "张元利" }, { name: "杨虹" }, { name: "李志卿" }, { name: "石富义" }, { name: "徐云蔚" }, { name: "陈海舟" },{ name: "张左平" }, { name: "时泂" }]	
      }
    ],
    groups1: [
      {
        user: [{ name: "葛静燕" }, { name: "张颖" }]
      }, {
        user: [{ name: "潘文靓" }, { name: "李晓炬" }]
      },{
        user: [{ name: "王丽" }, { name: "徐文影" }]
      },{
        user: [{ name: "滕建芸" }, { name: "郭淑芬" }]
      }, {
        user: [{ name: "周小萍" }, { name: "王韵隽" }]
      }, {
        user: [{ name: "孙金凤" }, { name: "曾霞" }]
      },
      {
        user: [{ name: "陆佩洁" }, { name: "姚宇华" }]
      }, {
        user: [{ name: "顾雪凤" }, { name: "李建英" }]
      },
      {
        user: [{ name: "乐婉婷" }, { name: "方译殊" }]
      },
      {
        user: [{ name: "谢妍" }, { name: "王蔚薇" }]
      },
      {
        user: [{ name: "王雪" }, { name: "徐天晓" }]
      },
      {
        user: [{ name: "刘晓乐" }, { name: "柴哲树" }]
      },
      {
        user: [{ name: "路斌"}]
      },
      {
        user: [{ name: "孔凡强" }, { name: "廖百成" }]
      },
      {
        user: [{ name: "易江南" }, { name: "黄元俊" }]
      },{
        user: [{ name: "方巍森" }, { name: "姜瑞强" }]
      },
      {
        user: [{ name: "单良" }, { name: "包士杰" }]
      },
      {
        user: [{ name: "朱宜海" }, { name: "牟波" }]
      },
      {
        user: [{ name: "陈若初" }, { name: "梁学超" }]
      },{
        user: [{ name: "吴春磊" }, { name: "冯毅" }]
      },
      {
        user: [{ name: "宋慧德" }, { name: "彭广兵" }]
      },
      {
        user: [{ name: "陈延" }, { name: "金旭东" }]
      },
      {
        user: [{ name: "宗忆陈" }, { name: "王国栋" }]
      },
      {
        user: [{ name: "严浩" }, { name: "季德超" }]
      }, {
        user: [{ name: "何丞栩" }, { name: "李晓冬" }]
      },
      {
        user: [{ name: "张永杰" }, { name: "杨木春" }]
      },
      {
        user: [{ name: "张雷" }, { name: "周杰" }]
      },
      {
        user: [{ name: "季力" }, { name: "周锷" }]
      },{
        user: [{ name: "金晓东" }, { name: "左养泽" }]
      },
      {
        user: [{ name: "黄美生" }, { name: "施政" }]
      },
      {
        user: [{ name: "王华" }, { name: "王宝勤" }]
      },
      {
        user: [{ name: "水洪江" }, { name: "袁峰" }]
      },
      {
        user: [{ name: "闫月" }, { name: "秦超" }]
      }, {
        user: [{ name: "袁林" }, { name: "汪柳" }]
      },
      {
        user: [{ name: "林超" }, { name: "王晶珊" }]
      },
      {
        user: [{ name: "周伟涛" }, { name: "王一寅" }]
      },
      {
        user: [{ name: "胡晓春" }, { name: "郭廷利" }]
      },
      {
        user: [{ name: "汪丽" }, { name: "刘丹玫" }]
      }, {
        user: [{ name: "朱道明" }, { name: "郭晓平" }]
      },
      {
        user: [{ name: "孔庆武" }, { name: "陈亮" }]
      },
      {
        user: [{ name: "潘国强" }, { name: "梁华聪" }]
      },
      {
        user: [{ name: "董欣" }, { name: "钱景伟" }]
      }, {
        user: [{ name: "朱贇磊" }, { name: "赵文浩" }]
      },
      {
        user: [{ name: "叶炯" }, { name: "张杰" }]
      },
      {
        user: [{ name: "刘洪辉" }, { name: "朱龙青" }]
      }, 
      {
        user: [{ name: "徐愔婷" }, { name: "马俞萍" }]
      }
    ]
  },	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ userId: Storage.get("currentUserName") });
    // this.setData({
    //   userId: Storage.get("currentUserName")
    // })
    // var data = Storage.get("currentUserName");
    // console.log(data)
    // var that = this;
    // wx.request({
    //   url: Config.appurl + '/user/queryCurrentUserName',
    //   data: {
    //     openId: Storage.get("openId")
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     that.setData({
    //       userId: '路斌',
    //       toView:'scrollId'
    //     })
    //     console.log("住宿安排当前登录名为:" + res.data);
    //   }
    // })
  
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