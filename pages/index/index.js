var app = getApp()
Page({
    data: {
        picture: [
            { url: '../../image/scenery/1.jpg'},
            { url: '../../image/scenery/2.jpg'},
            { url: '../../image/scenery/3.jpg'}
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
