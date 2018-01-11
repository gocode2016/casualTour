// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeList: [
      {
        text: "滑雪",
        classType: "ski",
        icon: "icon-huaxue"
      },
      {
        text: "徒步",
        classType: "onfoot",
        icon: "icon-tubulvxing"
      },
      {
        text: "攀岩",
        classType: "rock",
        icon: "icon-panyan"
      },
      {
        text: "登山",
        classType: "mountain",
        icon: "icon-dengshan01"
      },
      {
        text: "自驾",
        classType: "drive",
        icon: "icon-zijia"
      },
      {
        text: "赛事",
        classType: "match",
        icon: "icon-saishi"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      wx.switchTab({
        url: '../index/index',
      })
    },3000)
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