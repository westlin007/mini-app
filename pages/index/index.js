Page({

  data: {
    swiperList: [],
  },

  onLoad(){
    this.getswiperList()
  },

  getswiperList() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        console.log(res);
        this.setData({
          swiperList: res.data.message
        })
      }
    })
  }
})