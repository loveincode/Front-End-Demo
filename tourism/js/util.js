$(function(){
	if($('.auth-box .ui-form-item .ui-password')) {
		$('.auth-box .ui-form-item .ui-password > input').change(function(){
			$(this).siblings('input').val($(this).val());
		});
		$('.auth-box .ui-form-item .ui-password .ui-switch input[type="checkbox"]').click(function(){
			var obj = $(this);
			setTimeout(function(){
				if (obj.attr('checked')) {
					obj.parent().siblings('input[type=text]').show();
					obj.parent().siblings('input[type=password]').hide();
				} else {
					obj.parent().siblings('input[type=text]').hide();
					obj.parent().siblings('input[type=password]').show();
				}
			}, 1)
			
		});
	}
})