/**
 * Created by captain on 2016/12/19.
 */
$(function () {
    $('.panel-check').on('click', function () {
       var check = $('.panel-check');
       check.removeClass('checked');
       check.children('i').removeClass('fa-check-circle-o');
       $(this).addClass('checked');
       $(this).children('i').addClass('fa-check-circle-o');
    });


   // loading
   $('#loadTemplate').on('click', function () {
       // 此处后端写ajax GET Echarts模板
       //  下段代码为loading
        var index = layer.load(2, {
            shade: false
        });

   });
});