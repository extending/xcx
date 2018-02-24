// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 
  },
  properties: {
    navTitle: {
      type: String,
      value: "标题"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    test() {
      this.triggerEvent('cbTest')
    }
  }
})
