/**
 * Created by captain on 2016/12/16.
 */
$(function () {
    $('#chooseTemplate').on('click',function () {
       window.location.href='chooseTemplate.html';
    });
    function deleteDashboadr(ele,dash) {
        ele = $('.panel-delete');
        ele.on('click',function () {
            dash = $(this).parents('.parentPanel');
            layer.confirm('确认要删除报表吗？', {
                btn: ['确认','取消'] //按钮
            }, function(){
//                视图层
                layer.msg('删除成功', {icon: 1});
                dash.remove();
//                ajax

            }, function(){
            });
        })
    }


    deleteDashboadr();
});