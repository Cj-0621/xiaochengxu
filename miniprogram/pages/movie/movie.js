// pages/movie/movie.js
const db = wx.cloud.database();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],//查询电影列表
    
  },
  // 我喜欢
  joinLike(event) {
    var t = event.target.dataset.title;
    var img = event.target.dataset.img;
    var id = event.target.dataset.id;
    db.collection("mylove")
      .add({
        data: { img, id, title: t }
      })
      .then(res => {
        wx.showToast({
          title: '加入我的喜欢',
        })
      })
      .catch(err => { console.log(err) })
  },
  // 搜索框
  onSearch() {
    wx.showToast({
      title: '抱歉.暂未开放搜索功能',
    })
  },
  // 
  getMovieList: function() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'movielist',
      data: {
        start: this.data.movieList.length,
        count: 10
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        movieList: this.data.movieList.concat(JSON.parse(res.result).subjects)
      });
      wx.hideLoading();
    }).catch(err => {
      console.error(err);
      wx.hideLoading();
    });
  },
  gotoComment: function(event) {
    wx.navigateTo({
      url: `../comment/comment?movieid=${event.target.dataset.movieid}`,
    });

  },
  
  gotoBuy: function (event) {
    wx.navigateTo({
      url: `../buy/buy?movieid=${event.target.dataset.movieid}`,

    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMovieList();
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
    this.getMovieList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})