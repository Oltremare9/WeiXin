// pages/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow:false,
      number:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      type:['跑步','健身','篮球','足球','羽毛球','乒乓球','网球','游泳','爬山','逛街','看流星雨','其他'],
      long:['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h'],
      index1:0,
      index2:0,
      index3:0,
      date:'2019-12-13',
      time:'05:00',     
  },
  bindNumChange:function(e){
    console.log('人数选择改变')
    console.log(e.detail.value)
    this.setData({
      index1:e.detail.value
    })
  },
  bindTypeChange: function (e) {
    console.log('活动类型选择改变')
    console.log(e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  bindDateChange:function(e){
    console.log('日期发生改变')
    console.log(e.detail.value)
    this.setData({
      date:e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('时间发生改变')
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindLongChange: function (e) {
    console.log('时长发生改变')
    console.log(e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  // 点击发布按钮实现页面跳转 wx.navigateTo()不能调回tabbar页面
  gotoPage:function(){
    wx.navigateBack({
      // 返回上一级页面
       delta:1
    })
  },
  // 向服务器提交表单数据
  formsubmit:function(e){
    var that=this
    var formData=e.detail.value;//获取表单中的所有数据
    wx:wx.request({
      url: '',//服务器接口地址
      data: formData,//服务器需要的参数 
      header: { 'Content-Type': 'application/json' }, //设置请求的 header，GET请求可以不填 
      method: 'GET',//声明GET请求
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("返回发送成功的数据:" + res.data) 
      },
      fail: function(res) {
        console.log('error')
      },
      complete: function(res) {
        console.log('complete')
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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