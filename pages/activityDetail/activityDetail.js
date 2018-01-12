//activeDetail.js
const app = getApp()
Page({
  data: {
    tel: '028-88234323',
    imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    toView: 'red',
    scrollTop: 100
  },
  callPhone: function (e) {
    let tel = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: tel//仅为示例，并非真实的电话号码
    })
  }
}
)