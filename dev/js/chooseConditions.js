/**
 * Created by captain on 2016/12/20.
 */
$(function () {

	    $(document).on('change','.box-input', function () {
		    var val = $(this).val();
		    var addTr = $('.addTr');
		    $(this).hide();
		    $(this).parent('.boxInput').next('.boxValue').text(val).show();
         });

		$(document).on('click', '.boxValue', function () {
			$(this).hide();
			$(this).prev('.boxInput').children('input').show();
		});

	    $(document).on('change', '.appendTr', function () {
		    // 判断 tbody 的 tr 是否有 addTr class, 并且 this 子元素 input 是否有值
		    // 如果有值，并且下一级已经有addTr class 则 return false
		    var getVal = $(this).children('.box-input').val();
		    var addTr = $(this).parents('tr').next().hasClass('addTr');
		    if(getVal != "" && addTr){
		    	return  false;
		    }else {
			       $(this).parents('tbody').append('<tr class="addTr">'+
			           '<td>'+
			           '<div class="boxInput">'+
			           '<input type="text" class="box-input" value="">'+
			           '</div>'+
			           '<div class="boxValue"></div>'+
			           '</td>'+
			           '<td>'+
			           '<div class="boxInput appendTr">'+
			           '<input type="text" class="box-input" value="">'+
			           '</div>'+
			           '<div class="boxValue"></div>'+
			           '</td>'+
			           '</tr>');
		    }
	    });
});