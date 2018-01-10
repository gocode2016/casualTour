//index.js
const app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    toView: 'red',
    scrollTop: 100,
    activeList:[
      {
        text:"滑雪",
        classType:"ski",
        icon:"icon-huaxue"
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
    ],
    sightList:[
      {
        id:1,
        caption:"周边游",
        title:"牛背山看日出",
        days:3,
        date:"01.12-01.14",
        price:580
      },
      {
        id: 2,
        caption: "周边游1",
        title: "牛背山看日出1",
        days: 3,
        date: "01.12-01.14",
        price: 590
      },
      {
        id: 3,
        caption: "周边游2",
        title: "牛背山看日出2",
        days: 3,
        date: "01.12-01.14",
        price: 600
      }
    ]
  },
  loadMore(){
    let sightList= [...this.data.sightList,
    {
      id: 4,
      caption: "周边游22",
      title: "牛背山看日出2",
      days: 32,
      date: "01.12-01.14",
      price: 5806
    }]
    this.setData({sightList})
    },
  onLoad(options) {
    let that = this;
    //获取系统的参数，scrollHeight数值,微信必须要设置style:height才能监听滚动事件
    wx.getSystemInfo({
      success(res){
        that.setData({
          scrollHeight: parseInt(res.windowHeight) + 200
        })
      }
    })
  },
  turnDetail(e){
    let index= e.currentTarget.id
    wx.navigateTo({ url: '/pages/activityDetail/activityDetail?id='+index}) 
  }
})