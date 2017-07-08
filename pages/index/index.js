var app = getApp()
Page({
    data: {
        picture: [
          { url: 'http://www.bupt.edu.cn/upload/image/201411/%E5%8C%97%E9%82%AE%E9%A3%8E%E5%85%89_20141125_%E6%98%8E%E4%BF%A1%E7%89%87%E7%AC%AC%E4%B8%80%E5%A5%97_12.jpg'},
          { url: 'http://www.bupt.edu.cn/upload/image/201411/%E5%8C%97%E9%82%AE%E9%A3%8E%E5%85%89_20141125_%E6%98%8E%E4%BF%A1%E7%89%87%E7%AC%AC%E4%B8%80%E5%A5%97_05.jpg'},
          { url: 'http://www.bupt.edu.cn/upload/image/201411/%E5%8C%97%E9%82%AE%E9%A3%8E%E5%85%89_20141125_%E6%98%8E%E4%BF%A1%E7%89%87%E7%AC%AC%E4%B8%80%E5%A5%97_02.jpg'},
          { url:'http://www.bupt.edu.cn/upload/image/201704/2%20%E6%95%99%E4%B8%89%E6%A5%BC%20%E6%AD%A3%E9%9D%A2.jpg'},
          { url: 'http://www.bupt.edu.cn/upload/image/201704/%E6%A0%A1%E5%9B%AD%E6%96%87%E5%8C%9601.jpg' },
          { url: 'http://www.bupt.edu.cn/upload/image/201704/%E6%A0%A1%E5%9B%AD%E6%96%87%E5%8C%9602.jpg' },
          { url: 'http://www.bupt.edu.cn/upload/image/201704/%E6%A0%A1%E5%9B%AD%E6%96%87%E5%8C%9603.jpg' },
          { url: 'http://www.bupt.edu.cn/upload/image/201704/%E6%A0%A1%E5%9B%AD%E6%96%87%E5%8C%9605.jpg' },
          { url: 'http://www.bupt.edu.cn/upload/image/201704/%E6%A0%A1%E5%9B%AD%E6%96%87%E5%8C%9606.jpg' },
        ]
    },
    register: function () {
        wx.navigateTo({
            url: '../register/register'
        })
    },
    prepare: function () {
        wx.navigateTo({
            url: '../prepare/prepare'
        })
    },
    nearby: function () {
        wx.navigateTo({
            url: '../nearby/nearby'
        })
    },
    onLoad: function () {
    }
    
})    
