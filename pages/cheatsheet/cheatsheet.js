// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "xiaoming"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(/onload/)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(/onready/)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(/onshow/)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(/onhide/)
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
    console.log(/onPullDownRefresh/)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(/onreachbottom/)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(1+2)
  }
})