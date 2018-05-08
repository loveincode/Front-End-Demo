/**
 * Created by caoseason on 2016/12/25.
 */

$(function () {
	$('.delete').on('click', function () {
		$(this).parents('tr').remove();
	});
	$('.zoom').on('click',function () {
		window.location.href= '要打开的页面的相对链接';
	})
});