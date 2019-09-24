Page({

  data: {
    swiperList: [],
    catitems:[],
    Floordata:[]
  },

  onLoad(){
    this.getSwiperList();
    this.getCatitems();
    this.getFloordata();
  },
  // 轮播图
  getSwiperList() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        // console.log(res);
        this.setData({
          swiperList: res.data.message
        })
      }
    })
  },
  // 导航栏
  getCatitems(){
    wx.request({
      url:"https://api.zbztb.cn/api/public/v1/home/catitems",
      success:(res) => {
        // console.log(res);
        this.setData({
          catitems:res.data.message
        })
      }
    })
  },
  // 楼层
  getFloordata (){
    wx.request({
      url:"https://api.zbztb.cn/api/public/v1/home/floordata",
      success: (res) => {
        // console.log(res);
        this.setData({
          Floordata:res.data.message
        })
      }
    })
  }
})