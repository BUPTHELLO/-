Page({
  data: {
    "longitute": "",
    "latitude": "",
    "name": "",
    "address": ""
  },
  chooseLocation: function (e) {
    var that = this;
    console.log(e);
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        that.setData({
          "longitude": res.longitude + "",
          "latitude": res.latitude + "",
          "name": res.name,
          "address": res.address
        })
      },
      complete: function (res) {
        wx.openLocation({
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          name: that.data.name,
          address: that.data.address
        })
      }
    })
  },

  Location0: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.964725",
      longitude: "116.357108",
      name: "寄存行李处",
      address: "学生活动中心"
    })
  },
  info0: function () {
    wx.showModal({
      title: '寄存行李',
      content: '校本部南侧30米的学生活动中心',
      showCancel:false,
      confirmText:'我知道了'
    })
  },

  Location1: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.962007",
      longitude: "116.359254",
      name: "体育馆签到",
      address: "北邮体育馆"
    })
  },

  info1: function () {
    wx.showModal({
      title: '体育馆签到',
      content: '领取表格并填写，准备好户口本复印件，转户口证明，团员证',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  Location2: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.960321",
      longitude: "116.356829",
      name: "领取体检表",
      address: "教三楼"
    })
  },

  info2: function () {
    wx.showModal({
      title: '教三楼',
      content: '体检表表格，注射疫苗填写;进行体重身高等测量和外科检查;需要准备1寸照片',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  Location3: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.959766",
      longitude: "116.357102",
      name: "体检",
      address: "校医院"
    })
  },

  info3: function () {
    wx.showModal({
      title: '校医院',
      content: '完成体检表其他项检查，注射疫苗等',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  Location4: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.962122",
      longitude: "116.357226",
      name: "补交学费",
      address: "教一楼西北侧"
    })
  },

  info4: function () {
    wx.showModal({
      title: '补交学费',
      content: '未交学费的新生可在教一楼西北侧交学费',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  Location5: function (e) {
    var that = this;
    console.log(e);
    wx.openLocation({
      latitude: "39.961769",
      longitude: "116.357237",
      name: "乘车处",
      address: "时光广场主干道"
    })
  },

  info5: function () {
    wx.showModal({
      title: '乘车处',
      content: '时光广场主干道乘坐校车',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

})    