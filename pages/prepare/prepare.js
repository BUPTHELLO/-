var app = getApp()
Page({
    data: {
        //滑动标签
        currentTab: 0,
        /**
            物品清单部分
        **/
        //物品清单数据
        list: [],
        //物品清单内物品序号
        list_id: -1,
        //物品清单名称
        ltype: 'type1',
        //中继物品清单数据
        change_list: [],
        /**
            备忘录部分
        **/
        //备忘录数据
        piece: [],
        //备忘录数据标签
        piece_id: -1,
        //保存输入框内的填写内容
        piece_article: '', 
        //输入框窗口默认不显示
        modalHidden: true,
        //输入框窗口内无填写内容
        flagSubmit: false,
        //操作框窗口默认不显示
        actionHidden: true,
        //操作框窗口设置
        actionSheetItems: ['编辑', '删除'],
    },
    onLoad: function () {
        var prepare = this;
        wx.getStorage({
            key: 'piece',
            success: function (res) {
                console.log('读取piece成功')
                prepare.setData({
                    piece: res.data,
                })
            }
        })
        wx.getStorage({
            key: this.data.ltype,
            success: function (res) {
                console.log('读取list成功')
                prepare.setData({
                    list: res.data,
                })
            }
        })
    },
    onUnload: function () {
        wx.setStorage({
            key: 'piece',
            data: this.data.piece,
            success: function (res) {
                console.log('退出保存成功')
            }
        })
    },
    //点击type改变内容
    type1: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type1',
            success: function (res) {
                console.log('读取type1成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type1'
                })
            }
        })
    },
    type2: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type2',
            success: function (res) {
                console.log('读取type2成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type2'
                })
            }
        })
    },
    type3: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type3',
            success: function (res) {
                console.log('读取type3成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type3'
                })
            }
        })
    },
    type4: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type4',
            success: function (res) {
                console.log('读取type4成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type4'
                })
            }
        })
    },
    type5: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type5',
            success: function (res) {
                console.log('读取type5成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type5'
                })
            }
        })
    },
    type6: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type6',
            success: function (res) {
                console.log('读取type6成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type6'
                })
            }
        })
    },
    type7: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type7',
            success: function (res) {
                console.log('读取type7成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type7'
                })
            }
        })
    },
    type8: function (e) {
        var prepare = this;
        wx.getStorage({
            key: 'type8',
            success: function (res) {
                console.log('读取type8成功')
                prepare.setData({
                    list: res.data,
                    ltype: 'type8'
                })
            }
        })
    },
    //添加物品按钮
    chooseItem: function (e) {
        var index = parseInt(e.currentTarget.dataset.index);
        var hidden = this.data.list[index].hidden;
        var list = this.data.list;
        list[index].hidden = !hidden;
        this.setData({
            piece: [].concat(this.data.piece, {
                id: this.data.list[index].id,
                ltype: this.data.list[index].ltype,
                color: 0,
                selected: false,
                article: this.data.list[index].article
            })
        })
        this.setData({
            list: list
        })
        wx.setStorage({
            key: this.data.ltype,
            data: this.data.list,
            success: function (res) {
                console.log('修改list成功')
            }
        })
    },
    //滑动切换tab
    bindChange: function (e) {
        var that = this;
        that.setData({ currentTab: e.detail.current });
    },
    //点击tab切换
    swichNav: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    //点击图标选中、取消
    bindCheckbox: function (e) {
        var index = parseInt(e.currentTarget.dataset.index);
        var selected = this.data.piece[index].selected;
        var color = this.data.piece[index].color;
        var piece = this.data.piece;
        // 对勾选状态取反
        piece[index].selected = !selected;
        //同时修改条目背景
        piece[index].color = !color;
        // 写回经点击修改后的数组
        this.setData({
            piece: piece,
        });  
    },
    //点击“添加”按钮响应事件
    addHandle: function (e) {
        this.setData({
            textShow: true,
            modalHidden: false,
            piece_id: -1
        })
    },
    //输入框响应事件
    modalChange: function (e) {
        if (this.data.flagSubmit && this.data.piece_article != '') {
            if (this.data.piece_id == -1) {
                this.setData({
                    modalHidden: true,
                    piece: [].concat(this.data.piece, {
                        id: -1,
                        ltype: -1,
                        color: 0,
                        selected: false,
                        article: this.data.piece_article
                    })
                })
            }
            else {
                var piece = this.data.piece;
                var id = this.data.piece_id;
                piece[id].article = this.data.piece_article
                this.setData({
                    modalHidden: true,
                    piece: piece
                })
            }
            this.setData({
                piece_article: ''
            })
        }
        else{
            this.setData({
                modalHidden: true
            })
        }
    },
    //监测输入框内是否输入信息
    inputChange: function (e) {
        var val = e.detail.value
        if (val.length != 0) {
            this.setData({
                flagSubmit: true,
                piece_article: e.detail.value,
                value:''
            })
        }
    },
    //条目操作-选中
    bindViewTap: function (e) {
        var index = parseInt(e.currentTarget.dataset.index);
        this.setData({
            actionHidden: false,
            piece_id: index
        })
    },
    //条目操作-取消
    cancelPiece: function (e) {
        this.setData({
            actionHidden: true,
            piece_id: 0
        })
    },
    //条目操作-编辑/删除
    itemPiece: function (e) {
        var index = e.target.dataset.index;
        var uid = this.data.piece_id;
        var itemchange = false;
        switch (index) {
            //编辑操作
            case 0:
                this.setData({
                    actionHidden: true,
                    modalHidden: false
                })
                break;
            //删除操作
            case 1:
                var piece = this.data.piece;
                this.setData({
                    list_id: this.data.piece[uid].id,
                    ltype: this.data.piece[uid].ltype,
                })
                var n_piece = piece.splice(uid, 1);
                this.setData({
                    piece: piece,
                    actionHidden: true
                })
                itemchange = true;
                break;
        }
        //若删除的条目来自物品清单，则重设物品清单
        if(itemchange)
        {
            var id = this.data.list_id;
            var prepare = this;
            if (id != -1) {
                wx.getStorage({
                    key: this.data.ltype,
                    success: function (res) {
                        console.log('读取list成功')
                        prepare.setData({
                            change_list: res.data
                        })
                        var hidden = prepare.data.change_list[id].hidden;
                        var list = prepare.data.change_list;
                        list[id].hidden = !hidden;
                        console.log(prepare.data.change_list[id])
                        prepare.setData({
                            list: list
                        })
                        wx.setStorage({
                            key: prepare.data.ltype,
                            data: prepare.data.list,
                            success: function (res) {
                                console.log('删除后保存list成功')
                            }
                        })
                    }
                })
            }
        }
    }
})  