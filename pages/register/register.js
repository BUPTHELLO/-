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


})    