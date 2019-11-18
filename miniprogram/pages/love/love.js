// pages/mymovie/mymovie.js
const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
   list:[],
  },
  skip:function(event){
    wx.navigateTo({
      url: `../comment/comment?movieid=${event.target.dataset.movieid}`,
    });
  },

  select() {
    db.collection("mylove")
      .get()
      .then(res => {
        this.setData({
          list: res.data //属性：云数据库数据
        });
        // this.onLoad();
      })
      .catch(err => {
        console.log(err)
      });
  },
  selectCom() {
    db.collection("mylove")
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          comment: res.data //属性：云数据库数据
        });
      })
      .catch(err => {
        console.log(err)
      });
  },
  onLoad: function (options) {
    this.select();
    this.selectCom();
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