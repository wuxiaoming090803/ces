/**
 * 缓存同步操作工具类
 */


var storage = {
  set: function(key, value) {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {
      console.log("缓存设置失败：" + key);
    }
  },
  get: function(key) {
    try {
      return wx.getStorageSync(key);
    } catch (e) {
      console.log("缓存获取失败：" + key);
      return null;
    }
  },
  remove: function(key) {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      console.log("缓存删除失败：" + key);
    }
  }
};

module.exports = storage;
