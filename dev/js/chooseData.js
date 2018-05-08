/**
 * Created by captain on 2016/12/19.
 */
$(function () {
    $('.data-item').on('click',function (event) {
        $(this).siblings('.data-toggle').fadeToggle(function () {
            // ajax POST 后端写具体id
            $('.id1').on('click',function () {
                window.location.href='./chooseIndicator.html';
            })
        });
    });
    // loading
    $('#loadMore').on('click', function () {
        //同chooseTemplate.js
        var index = layer.load(2, {
            shade: false
        });
    });


});