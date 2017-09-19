Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var parame=[
      {
      date:"Agu 30 2017",
      authord_img:"/images/touxiang.png",
      view_img:"/images/s4.jpg",
      img_condiction:true,
      title: "带领我走出困境的究竟是你还是根本我自己",
      content: "《异次元通讯》系列是一款体验新颖的文字AVG游戏，采用模拟手机通讯的方式达成玩家和故事主角的实时互动。故事主角Miko无意中通过聊天软件和玩家相遇，在逃亡过程中只能跟玩家联系。玩家在与Miko的交流过程中逐步了解事件、协助解谜，熟悉Miko的性格，深入Miko的世界。",
      collect: "90",
      comment: "100"
    },
      {
        date: "Agu 30 2017",
        authord_img: "/images/touxiang.png",
        view_img: "/images/s4.jpg",
        img_condiction: true,
        title: "带领我走出困境的究竟是你还是根本我自己",
        content: "《异次元通讯》系列是一款体验新颖的文字AVG游戏，采用模拟手机通讯的方式达成玩家和故事主角的实时互动。故事主角Miko无意中通过聊天软件和玩家相遇，在逃亡过程中只能跟玩家联系。玩家在与Miko的交流过程中逐步了解事件、协助解谜，熟悉Miko的性格，深入Miko的世界。",
        collect: "90",
        comment: "100"
      }
    ]
    this.setData({posts_key:parame});
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