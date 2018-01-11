// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSaved: false,
    form: {
      contactTel:  '',
      contact: '',
      moble: '',
      idcard:  '',
      name:  ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();
    new app.ToastPannel();

    let that = this;
    wx.getStorage({
      key: 'form',
      success: function (res) {
        console.log(res.data)
        that.setData({
          form: res.data
        })

      }
    })
  },

  formSubmit: function (e) {
    console.log(e)
    let value = e.detail.value,
        name = value.name,
        idcard = value.idcard,
        moble = value.moble,
        contact = value.contact,
        contactTel = value.contactTel;

    let idcardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        mobleRegex = /\d{11}/;


    if (!name) {
      //输入姓名
      this.show("请输入真实姓名");
      return;
    }
    if (!idcard || !(idcardRegex.test(idcard))) {
      //输入有效的身份证
      this.show("请输入有效的身份证");
      return;
    }
    if (!moble || !(mobleRegex.test(moble))) {
      //输入有效的手机号
      this.show("请输入有效的手机号");
      return;
    }
    if (!contact) {
      //输入紧急联系人姓名
      this.show("请输入有效的手机号");
      return;
    }
    if (!contactTel || !(mobleRegex.test(contactTel)) ) {
      //输入有效的手机号
      this.show("请输入有效的手机号");
      return;
    }


    let obj = Object.assign({}, this.data.form, {
      name: name,
      idcard: idcard,
      moble: moble,
      contact: contact,
      contactTel: contactTel
    })

    wx.setStorage({
      key: "form",
      data: obj
    })

    this.setData({
      form: obj
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