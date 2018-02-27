// pages/leslie/leslie.js
var wxDraw = require("../../utils/wxdraw.min.js").wxDraw;
var Shape = require("../../utils/wxdraw.min.js").Shape;

var context = wx.createCanvasContext('first')
var rect = new Shape('rect', { x: 50, y: 50, w: 40, h: 40, fillStyle: "#2FB8AC", rotate: Math.PI / 2 }, 'mix', true);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxCanvas: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wxCanvas = new wxDraw(context, 0, 0, 100, 100);
    this.wxCanvas.add(rect);//添加到canvas上面
    rect.animate("rotate", Math.PI * 5, { duration: 5000 }).start(3)
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
  
  },
  bindtouchstart: function (e) {
    // 检测手指点击开始事件
    this.wxCanvas.touchstartDetect(e);
  },
  bindtouchmove: function (e) {
    // 检测手指点击 之后的移动事件
    this.wxCanvas.touchmoveDetect(e);
  },
  bindtouchend: function () {
    //检测手指点击 移出事件
    this.wxCanvas.touchendDetect();
    console.log(/44444/)
  },
  bindtap: function (e) {
    // 检测tap事件
    console.log(/bindtap/)
    rect.updateOption({ fillStyle: "#E6324B" });
    this.wxCanvas.tapDetect(e);
  },
  bindlongpress: function (e) {
    // 检测longpress事件
    this.wxCanvas.longpressDetect(e);
  },
  madeLine: function (e) {
    let ellipse = new Shape('ellipse', { x: 100, y: 400, a: 40, b: 100, fillStyle: "red", rotate: Math.PI / 7 }, 'mix', true)
    this.wxCanvas.add(ellipse)
  }
})