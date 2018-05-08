/**
 * Created by captain on 2016/12/20.
 */

$(function () {
    // 可拖动元素和可放置区域
    var dragLabel = $('.drag-label');
    var dropX = $('.drop-itemX');
    var dropY = $('.drop-itemY');

    // 让区域可放置
    dropX.droppable({
        accept : ".drag-label",
        hoverClass:'hint-bg',
        drop: function (event, ui) {
            appendX(ui.draggable);
        }
    });

    dropY.droppable({
        accept : ".drag-label",
        hoverClass:'hint-bg',
        drop: function (event, ui) {
            appendY(ui.draggable);
        }
    });

    // 让元素可拖动
    dragLabel.draggable({
        revert : "invalid",
        containment : [".drop-itemX",".drop-itemY"],
        helper : "clone",
        cursor : "move"
    });

    function appendX($item) {
        // $item 指向 btn
        dropX.append($item.clone());
    }
    function appendY($item) {
        dropY.append($item.clone());
    }

    // 撤回, 删除最后一个dom元素
    function revoke() {
        $('.revoke').on('click', function () {
            $(this).parent()
                   .prev()
                   .find('.drag-label')
                   .remove();
        });
    }

    // 弹出modal
    function customize() {
        layer.open({
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            shadeClose: true, //开启遮罩关闭
            content: '内容'
        });
    }

    //弹出iframe
    function ifr() {
        layer.open({
            type: 2,
            title: 'layer mobile页',
            shadeClose: true,
            shade: 0.8,
            area: ['380px', '90%'],
            content: 'http://layer.layui.com/mobile/' //iframe的url
        });
    }

    //点击预览调用
    $('.preview').on('click', function () {
        customize();
        ifr();
    });

    revoke();
});
