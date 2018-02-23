// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "lvyao",
    courses: [
      { item: 'math', teacher: 'Li', time: 'am' },
      { item: 'chinese', teacher: 'Zhang', time: 'pm'},
    ],
    location: {
      latitude: '无',
      longitude: '无'
    },
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
    var app = getCurrentPages();
    console.log(app)
    console.log(this)
    var page = getApp();
    console.log(page)
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
    console.log(/down/)
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
    let obj = {
      title: '怪你过分美丽',
      path: ""
    };
    return obj;
  },
  changeName: function (e) {
    console.log(/getCurrentPages/, getCurrentPages());
    console.log(/e/, e)
    this.setData({
      name: "xiaoming",
    }, function() {
      console.log(/cb/)
    })
  },
  getLocation: function (e) {
    wx.getLocation({
      success: (res) => {
        var latitude = res.latitude;
        var longitude = res.longitude;
        this.setData({
          "location.latitude": latitude,
          "location.longitude": longitude
        })
        console.log(latitude, longitude)
      },
    })
  },
  makeCall: (e) => {
    wx.makePhoneCall({
      phoneNumber: '15905193395'
    })
  },
  openPage: () => {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})