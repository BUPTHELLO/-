App({
    data:{
        piece: [],
        type1: [
            { id: 0, ltype: 'type1', article: '录取通知书', hidden: false},
            { id: 1, ltype: 'type1', article: '党团关系', hidden: false},
            { id: 2, ltype: 'type1', article: '照片', hidden: false },
            { id: 3, ltype: 'type1', article: '户口迁出相关资料', hidden: false },
        ],
        type2: [
            { id: 0, ltype: 'type2', article: '内衣', hidden: false },
            { id: 1, ltype: 'type2', article: '袜子', hidden: false },
            { id: 2, ltype: 'type2', article: '背心', hidden: false }
        ],
        type3: [
          { id: 0, ltype: 'type3', article: '笔记本电脑', hidden: false }],
        type4: [
          { id: 0, ltype: 'type4', article: '创可贴', hidden: false },
          { id: 1, ltype: 'type4', article: '眼药水', hidden: false },
          { id: 2, ltype: 'type4', article: '感冒药，中暑药，肠胃药，晕车药等', hidden: false },
        ],
        type5: [
          { id: 0, ltype: 'type5', article: '床垫', hidden: false },
          { id: 1, ltype: 'type5', article: '枕头', hidden: false },
          { id: 2, ltype: 'type5', article: '被子', hidden: false },
          { id: 3, ltype: 'type5', article: '床单', hidden: false },
          { id: 4, ltype: 'type5', article: '被单', hidden: false }
        ],
        type6: [
          { id: 0, ltype: 'type6', article: '牙刷，牙膏，口杯', hidden: false },
          { id: 1, ltype: 'type6', article: '脸盆，毛巾，浴巾', hidden: false },
          { id: 2, ltype: 'type6', article: '肥皂，香皂，洗衣粉（液）', hidden: false },
          { id: 3, ltype: 'type6', article: '洗发水，沐浴露，浴巾', hidden: false }
        ],
        type7: [
          { id: 0, ltype: 'type7', article: '作业本，笔袋', hidden: false },
          { id: 1, ltype: 'type7', article: '台灯', hidden: false }
        ],
        type8: [
          { id: 0, ltype: 'type8', article: '路由器，网卡', hidden: false },
          { id: 1, ltype: 'type8', article: '扫把，拖把，簸箕', hidden: false },
          { id: 2, ltype: 'type8', article: '垃圾桶，垃圾袋', hidden: false },
          { id: 3, ltype: 'type8', article: '衣架，晾衣杆', hidden: false },
        ],
    },
    onLaunch: function () {
        wx.setStorage({
            key: 'piece',
            data: this.data.piece,
            success: function (res) {
                console.log('保存piece成功')
            }
        })
        wx.setStorage({
            key: 'type1',
            data: this.data.type1,
            success: function (res) {
                console.log('保存type1成功')
            }
        })
        wx.setStorage({
            key: 'type2',
            data: this.data.type2,
            success: function (res) {
                console.log('保存type2成功')
            }
        })
        wx.setStorage({
            key: 'type3',
            data: this.data.type3,
            success: function (res) {
                console.log('保存type3成功')
            }
        })
        wx.setStorage({
            key: 'type4',
            data: this.data.type4,
            success: function (res) {
                console.log('保存type4成功')
            }
        })
        wx.setStorage({
            key: 'type5',
            data: this.data.type5,
            success: function (res) {
                console.log('保存type5成功')
            }
        })
        wx.setStorage({
            key: 'type6',
            data: this.data.type6,
            success: function (res) {
                console.log('保存type6成功')
            }
        })
        wx.setStorage({
            key: 'type7',
            data: this.data.type7,
            success: function (res) {
                console.log('保存type7成功')
            }
        })
        wx.setStorage({
            key: 'type8',
            data: this.data.type8,
            success: function (res) {
                console.log('保存type8成功')
            }
        })
    },
    onShow: function () {
    },
    onHide: function () {
    },
    globalData: {
    }
})