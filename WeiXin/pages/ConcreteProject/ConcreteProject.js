// pages/ConcreteProject1/ConcreteProject1.js
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
      location: '南京大学体育馆'
    },
    mention: {
      info: "请大家自备换洗衣服、饮料等。适当锻炼、切勿盲目锻炼。安全第一！注意爱惜器材！",
      person: "李蕊"
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
    },{url:'../image/add2.png'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '活动详情',
    })
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})