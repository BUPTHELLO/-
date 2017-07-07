Page({
    data: {
        markers: [],
        param: {},
        keyword: "",
        ty: "",
    },

    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文 
        this.mapCtx = wx.createMapContext('myMap')
    },

    getSchoolMarkers() {
        let markers = [];
        for (let i = 0; i <= 9; i++) {
            let marker = this.createMarker(this.data.param[i]);
            markers.push(marker)
        }
        return markers;
    },

    //传入参数为object类型
    createMarker(point) {
        let marker = {
            iconPath: "/image/scenery/location.png",
            id: point.id,
            name: point.name + point.tel,
            latitude: point.latitude,
            longitude: point.longitude,
            width: 25,
            height: 48
        };
        return marker;
    },

    bindKeyInput: function (e) {
        //console.log(e);
        this.setData({
            ty: e.detail.value
        })
    },

    bindbtn: function (e) {
        var that = this;
        this.setData({
            keyword: this.data.ty
        })

        // 引入SDK核心类
        var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');

        // 实例化API核心类
        var demo = new QQMapWX({
            key: 'REGBZ-2TXHJ-O56FN-FMEIL-HJHC3-MZBTM' // 必填
        });

        var param = [];
        var object = {};
        // 调用接口
        demo.search({
            keyword: that.data.ty,
            success: function (res) {
                for (var index = 0; index <= 9; index++) {
                    object = {
                        "name": res.data[index].title,
                        "address": res.data[index].address,
                        "id": index + 1,
                        "latitude": res.data[index].location.lat + "",
                        "longitude": res.data[index].location.lng + "",
                        "tel": res.data[index].tel
                    }
                    param[index] = object;
                }
                that.setData({ param });
                that.setData({ markers: that.getSchoolMarkers() });
            }
        });
    }
})

