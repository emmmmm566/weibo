// miniprogram/pages/chatPage/chatPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0, // 当前选中标签的索引
    tabList: ['自行车', '电动车'], // 标签名称集合
    typeList: [
      { typeName: '童车', url: '获取童车类型配件的数据接口'},
      { typeName: '26', url: '获取26类型配件的数据接口'},
      { typeName: '28', url: '获取28类型配件的数据接口'},
      { typeName: '死飞', url: '获取死飞类型配件的数据接口'},
    ],
    activeKey: 0,
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
  // 侧边导航栏切换处理器
  sidebarOnChangeHandler(event) {
    const { typeList } = this.data
    console.log('event', event)
    console.log('this', this)
    this.setData({ activeKey: event.detail, active: 1})
    console.log('此时调用后端接口的地址是',typeList[event.detail].url)
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