// pages/ConcreteActivity/ConcreteActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    project: {
      url: '../image/gym.jpg',
      name: '健身馆流汗',
      time: '2019.12.12',
      location: '南京大学体育馆',
      category:'篮球'
    },
    
    members: [{
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }],
    comments:[{
      author:'王二狗',
      content:'太棒了，下次一定再来'
    },
      {
        author: '王二狗',
        content: '太棒了，下次一定再来'
      },
      {
        author: '王二狗',
        content: '太棒了，下次一定再来'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '历史活动',
    })
    console.log(options)
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