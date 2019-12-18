//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: [{ url: '../image/basketball.png', name: '篮球' }, { url: '../image/swim.png', name: '游泳' }, { url: '../image/exercise.png', name: '健身' }, { url: '../image/more.png', name: '更多' }],
    projects: [{ url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12' }, { url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12' }, { url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12' }]
  },

  toConcrete:function(e){
    var id=e.target.id
    console.log(id);
    wx.navigateTo({
      url: '../ConcreteProject/ConcreteProject?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '线下活动组织',
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