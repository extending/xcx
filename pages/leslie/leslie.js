// pages/leslie/leslie.js
var wxDraw = require("../../utils/wxdraw.min.js").wxDraw;
var Shape = require("../../utils/wxdraw.min.js").Shape;

var context = wx.createCanvasContext('first')
var rect = new Shape('rect', { x: 80, y: 80, w: 60, h: 60, fillStyle: "#2FB8AC", rotate: Math.PI / 2 }, 'mix', true);
var line = new Shape('line',)

