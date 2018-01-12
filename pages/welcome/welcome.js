// pages/welcome/welcome.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 20,//备注最多字数
    noteNowLen: 0,//备注当前字数
    stars: [
      { id: 0, url: '../../assets/imgs/star-1.svg', status: 'unselect' },
      { id: 1, url: '../../assets/imgs/star-1.svg', status: 'unselect' },
      { id: 2, url: '../../assets/imgs/star-1.svg', status: 'unselect' },
      { id: 3, url: '../../assets/imgs/star-1.svg', status: 'unselect' },
      { id: 4, url: '../../assets/imgs/star-1.svg', status: 'unselect' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(()=>{
    //   wx.switchTab({
    //     url: '../index/index',
    //   })
    // },3000)



  },
  clickStar: function(e) {
    let id = e.currentTarget.dataset.id,
        status = e.currentTarget.dataset.status,
        list = this.data.stars,
        idx = parseInt(id, 10) + 1;

    list.forEach((item)=>{
        if(item.id < id) {
          this.setPrevStars(item, status);
        }
        if(item.id == id) {
          this.setStar(item, status);
        }
        if(item.id > id) {
          this.setNextStars(item, status);
        }
    })


    this.setData({
      stars: list
    });

  },
  setPrevStars: function (currStar, status) {
    if (status === 'unselect' || status == 'selectHalf') {
      currStar.status = 'selected';
      currStar.url = '../../assets/imgs/star-2.svg';
    } 
  },
  setNextStars: function (currStar, status) {
    currStar.status = 'unselect'
    currStar.url = '../../assets/imgs/star-1.svg';
  },

  setStar: function (currStar, status) {
    if (status === 'unselect') {
      currStar.status = 'selected';
      currStar.url = '../../assets/imgs/star-2.svg';
    } else if (status == 'selected') {
      currStar.status = 'selectHalf'
      currStar.url = '../../assets/imgs/star-3.svg';
    } else {
      currStar.status = 'unselect'
      currStar.url = '../../assets/imgs/star-1.svg';
    }
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