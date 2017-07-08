App({
    data:{
        piece: [],
        type1: [
            { id: 0, ltype: 'type1', article: '录取通知书', hidden: false},
            { id: 1, ltype: 'type1', article: '党团关系', hidden: false},
            { id: 2, ltype: 'type1', article: '照片', hidden: false },
            { id: 3, ltype: 'type1', article: '户口迁出相关资料', hidden: false },
            { id: 4, ltype: 'type1', article: '户口迁出相关资料', hidden: false },
            { id: 5, ltype: 'type1', article: '户口迁出相关资料', hidden: false },
        ],
        type2: [
            { id: 0, ltype: 'type2', article: '内衣', hidden: false },
            { id: 1, ltype: 'type2', article: '袜子', hidden: false },
            { id: 2, ltype: 'type2', article: '背心', hidden: false }
        ],
        type3: [],
        type4: [],
        type5: [],
        type6: [],
        type7: [],
        type8: [],
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