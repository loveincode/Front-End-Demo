
$(function(){

	$('ul.nav.navbar-nav li').hover(function(){
		console.log($(this).index());
		$(this).siblings('.top-active').addClass('position-' + $(this).index());
	}, function(){
		$(this).siblings('.top-active').removeClass('position-' + $(this).index());
	});


	// 切换自定义select
	$('.select').on('click','.select-face',function(e){
		e.stopPropagation();
		var s = $(this);
		var b = $(this).siblings("ul.select-options");
		var _show = function(){b.slideDown(200);s.toggleClass('active');};
        var _hide = function(){b.slideUp(200);s.removeClass("active");};
        b.is(":hidden")?_show():_hide();
        b.find('li').on('click',function(){
        	var txt = $(this).text();
        	$(this).parent('ul').siblings('.select-face').find('.select-val').text(txt);
        	_hide();
        	$('.select').children("ul.select-options").slideUp(200).removeClass("active");
        });
	});
	
	
	$(document).click(function(){
		$('.select').children("ul.select-options").slideUp(200).removeClass("active");
	});

	
	// 绑定自定义radio btn功能
	if ($('.radio-btn').length > 0) {
		$('.radio-btn').click(function() {
			$('.radio-btn[name=' + $(this).attr('name') + ']').removeClass('checked');
			$(this).addClass('checked');
			if ($(this).attr('link-input')) {
				if ($('#' + $(this).attr('link-input')).length > 0) {
					$('#' + $(this).attr('link-input')).val($(this).attr("value"));
				}
			}
		});
	}


    // 自定义checkbox
    $('body').on('click', '.btn-checkbox', function(){
    	$(this).toggleClass('checked');
    });


    // 回到顶部按钮
    $(window).scroll(function(e){
    	toggleRocket();
    });
    $(window).resize(function(e){
    	toggleRocket();
    });
    $('.btn-back-top').click(function(){
    	scrollRocket();
    });
});

function toggleRocket () {
	var top = $(window).scrollTop();
	if (top > $(window).height()) {
		$('.btn-back-top').fadeIn(300);
	} else {
		$('.btn-back-top').fadeOut(300);
	}
}

function scrollRocket () {
	var v = 50;
	var minV = 1;
	var top = $(window).scrollTop();
	var scroll = setInterval(function(){
		if (top > v) {
			if (top < 800) {
				// v -= 1;
				v *= 0.94;
				if (v < minV) {
					v = minV;
				}
			}
			top -= v;
		} else {
			top = 0;
			clearInterval(scroll);
		}
		$(window).scrollTop(top);
	}, 10);
}

/*
Ajax 三级省市联动
settings 参数说明
-----
url:省市数据josn文件路径
prov:默认省份
city:默认城市
dist:默认地区（县）
nodata:无数据状态
required:必选项
------------------------------ */
(function($){
	$.fn.citySelect=function(settings){
		if(this.length<1){return;};

		// 默认值
		settings=$.extend({
			url:"../js/city.min.js",
			prov:null,
			city:null,
			dist:null,
			nodata:null,
			required:false,
		},settings);

		var box_obj=this;
		var prov_obj=box_obj.find(".prov");
		var city_obj=box_obj.find(".city");
		var dist_obj=box_obj.find(".dist");
		var prov_val=settings.prov;
		var city_val=settings.city;
		var dist_val=settings.dist;
		var select_prehtml=(settings.required) ? "" : "<option value=''>请选择</option>";
		var city_json;

		// 赋值市级函数
		var cityStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
			};
			city_obj.empty().attr("disabled",true);
			dist_obj.empty().attr("disabled",true);

			if(prov_id<0||typeof(city_json.citylist[prov_id].c)=="undefined"){
				if(settings.nodata=="none"){
					city_obj.css("display","none");
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					city_obj.css("visibility","hidden");
					dist_obj.css("visibility","hidden");
				};
				return;
			};
			
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c,function(i,city){
				temp_html+="<option value='"+city.n+"'>"+city.n+"</option>";
			});
			city_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
			distStart();
		};

		// 赋值地区（县）函数
		var distStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
				city_id--;
			};
			dist_obj.empty().attr("disabled",true);

			if(prov_id<0||city_id<0||typeof(city_json.citylist[prov_id].c[city_id].a)=="undefined"){
				if(settings.nodata=="none"){
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					dist_obj.css("visibility","hidden");
				};
				return;
			};
			
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c[city_id].a,function(i,dist){
				temp_html+="<option value='"+dist.s+"'>"+dist.s+"</option>";
			});
			dist_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
		};

		var init=function(){
			// 遍历赋值省份下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist,function(i,prov){
				temp_html+="<option value='"+prov.p+"'>"+prov.p+"</option>";
			});
			prov_obj.html(temp_html);

			// 若有传入省份与市级的值，则选中。（setTimeout为兼容IE6而设置）
			setTimeout(function(){
				if(settings.prov!=null){
					prov_obj.val(settings.prov);
					cityStart();
					setTimeout(function(){
						if(settings.city!=null){
							city_obj.val(settings.city);
							distStart();
							setTimeout(function(){
								if(settings.dist!=null){
									dist_obj.val(settings.dist);
								};
							},1);
						};
					},1);
				};
			},1);

			// 选择省份时发生事件
			prov_obj.bind("change",function(){
				cityStart();
			});

			// 选择市级时发生事件
			city_obj.bind("change",function(){
				distStart();
			});
		};

		// 设置省市json数据
		if(typeof(settings.url)=="string"){
			$.getJSON(settings.url,function(json){
				city_json=json;
				init();
			});
		}else{
			city_json=settings.url;
			init();
		};
	};
})(jQuery)


// 建立一个input file的文件的url返回
function getFileURL(obj) {
	var file = obj.files[0];
	var url = null ; 
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}


function getInputFileSize(obj){  
    obj = $(obj)[0];
    var fileLenth = -1, objValue = obj.value;  
    alert(objValue);
    if (objValue == "") return fileLenth;  
    try {  
        //对于IE判断要上传的文件的大小  
        var fso = new ActiveXObject("Scripting.FileSystemObject"); 
        fileLenth = parseInt(fso.getFile(objValue).size);  
    } catch (e){  
        try{  
            //对于非IE获得要上传文件的大小  
            fileLenth = parseInt(obj.files[0].size);  
        }catch (e) {  
            fileLenth = -1;  
        }  
    }  
    return fileLenth;  
}  

function getInputFileName (obj) {
    obj = $(obj)[0];
    var result = '', objValue = obj.value;  
    if(objValue == "") return result;  
    try {  
        //对于IE判断要上传的文件的名字 
        var fso = new ActiveXObject("Scripting.FileSystemObject"); 
        result = fso.getFile(objValue).name;  
    } catch (e){  
        try{  
            //对于非IE获得要上传文件的名字 
            result = obj.files[0].name;
        }catch (e) {  
            result = '';  
        }  
    }  
    return result;  
}
