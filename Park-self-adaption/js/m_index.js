/**
 * 智能园区首页
 */
$(function() {
	
	initIndex();
    
    /**
     * 点击显示热门搜索
     */
    $('.search-box input').click(function(e){
		$(".search-box .search-hot").show();
		// 阻止时间冒泡
    	e.stopPropagation();
    });
	$(document).click(function(){
		$(".search-box .search-hot").hide();
	});
	
	// 搜索
	$(".search").click(function(){
		var keyWord = $("input[name=keyWord]").val();
		if($.trim(keyWord)){
			searchByKeyWord(keyWord);
		}
	});
	
	$(".search-hot ul").on("click", "li", function(){
		$("input[name=keyWord]").val($(this).text())
	});
	
	
	// 热门推荐
	
	// 推荐服务
})


function initIndex(){
	getRecommendService();
	getPopularCompany();
	// 加载搜索历史
	getHotSearchWord();
	
}

/**
 * 热门搜索
 */
var getHotSearchWord = function() {
	$.ajax({
        type: "GET",
        url: "/iparkguide/mIndex/hotSearch",
//        dataType: "json",
        cache: false,//false时，会自动添加时间戳
        //timeout: 1000,
        success: function (data) {
            if(data){
            	
            	var dataJson = JSON.parse(data);
//            	console.log(dataJson);
            	if(dataJson['ret'] == true){
            		var array = dataJson["content"];
            		var item = "";
            		$.each(array, function(index, attr){
            			item += "<li>" + attr + "</li>"
            		})
            		console.log(item);
            		$(".search-hot ul").html(item)
            	}
            }
        },
        error: function (xhr) {
            console.log(xhr)
            alert(xhr.responseText);
        }
	 });
}

/**
 * 搜索
 */
var searchByKeyWord = function (keyWord) {
    $.ajax({
        type: "GET",
        url: "/iparkguide/mIndex/search/"+keyWord,
//        dataType: "json",
        cache: false,//false时，会自动添加时间戳
        //timeout: 1000,
        success: function (data) {
            if(data){
//            	console.log(data);
            	var dataJson = JSON.parse(data);
            	if(dataJson["ret"] == true){
//            		var content = "";
	            	var list = dataJson["content"];
	            	var itemContent = "";
	            	$.each(list, function(index, attr){
	            		itemContent += "<li><a href='/iparkguide/company/detail/" + attr['companyid'] + "'>";
	            		itemContent += "<h5>" + attr['name'] + "</h5>";
	            		itemContent += "<p class='ui-nowrap-multi'>" + attr['service'] + "</p>";
	            		itemContent += "</a></li>";
	            		
	            	})
	            	$(".module-1 .result-title").text("搜索结果")
	            	$(".module-1 .result-list").html(itemContent);
            	} else {
            		$(".module-1 .result-title").text("搜索结果")
	            	$(".module-1 .result-list").html("<li><div class='ui-tips ui-tips-info'><i></i><span>"+dataJson['content']+"</span></div></li>");
            	}
            }
        },
        error: function (xhr) {
            console.log(xhr)
            alert(xhr.responseText);
        }
    });
}

/**
 * 加载推荐服务
 */
var getRecommendService = function () {
    $.ajax({
        type: "GET",
        url: "/iparkguide/mIndex/recommend/service",
//        dataType: "json",
        cache: false,//false时，会自动添加时间戳
        //timeout: 1000,
        success: function (data) {
            if(data){
            	var dataJson = JSON.parse(data);
            	if(dataJson["ret"] == true){
	            	var content = "";
	            	var list = dataJson["content"];
	            	var itemContent = "";
	            	$.each(list, function(index, attr){
	            		
	        			var href = "http://www.yunmailuo.com/hsshare/project/detail?id=" + attr['id'];
	        			var bgurl = "http://www.yunmailuo.com/hsshare/image/readImage?name=" + attr['poster'];
	        			itemContent += "";
	        			itemContent += "<li>";
	        			itemContent += "<a href='" + href + "' class='pannel-box'>";
	        			itemContent += "<div class='p-img' style='background-image:url(" + bgurl + ")'></div>";
	        			itemContent += "<p>" + attr['name'] + "</p>";
	        			itemContent += "</a>";
	        			itemContent += "</li>";
	        			
	        			if((index % 4 == 3) || (index == list.length-1 && itemContent != "")){
	        				content += "<li><ul class='pannel-list p-4'>";
	            			content += itemContent;
	            			content += "</ul></li>";
	            			itemContent = "";
	            		}
	            	})
	            	
	//            	console.log(content)
	            	$(".module-1 .ui-slider-content").html("");
	            	$(".module-1 .ui-slider-content").html(content);
	            	initSlider();
            	} else {
            		$(".services").remove();
            	}
            }
        },
        error: function (xhr) {
            console.log(xhr)
//            alert(xhr.responseText);
        }
    });
}

/**
 * 加载热门企业
 */
var getPopularCompany = function () {
    $.ajax({
        type: "GET",
        url: "/iparkguide/mIndex/popular/company",
//        dataType: "json",
        cache: false,//false时，会自动添加时间戳
        //timeout: 1000,
        success: function (data) {
            if(data){
            	var dataJson = JSON.parse(data);
//            	console.log(dataJson)
            	if(dataJson["ret"] == true){
	            	var content = "";
	            	var list = dataJson["content"];
	            	$.each(list, function(index, attr){
	            		
	        			var href = "/iparkguide/company/detail/" + attr['companyid'];
	        			content += "";
	        			content += "<li>";
	        			content += "<h5>" + attr['name'] + "</h5>";
	        			content += "<a href='" + href + "'>";
	        			content += "<p class='ui-nowrap-multi'>" + attr['service'] + "</p>";
	        			content += "</a>";
	        			content += "</li>";
	        			
	            	})
	            	
	//            	console.log(content)
	            	$(".popular .popular-company").html("");
	            	$(".popular .popular-company").html(content);
            	} else {
            		
            	}
            }
        },
        error: function (xhr) {
            console.log(xhr)
//            alert(xhr.responseText);
        }
    });
}

/**
 * 获取位置
 */
var getAddressByLocation = function(latitude, longitude, type){
	$.ajax({
        type: "POST",
        url: "/iparkguide/mIndex/getAddressByLocation",
        cache: false,//false时，会自动添加时间戳
        data:{
        	latitude:latitude,
        	longitude:longitude,
        	type:type
        	
		},
        success: function (data) {
            if(data){
            	var dataJson = JSON.parse(data);
            	if(dataJson["ret"] && dataJson["content"] != ""){
            		$(".ui-header .header").html(dataJson["content"]);
            	} else {
            		$(".ui-header .header").html("无法定位");
            	}
            }
        },
        error: function (xhr) {
            console.log(xhr)
            $(".ui-header .header").html("无法定位");
        }
	 });
}

function initSlider () {
	var slider = new fz.Scroll('.ui-slider', {
        role: 'slider',
        indicator: true,
        autoplay: false,
    });
    /* 滑动开始前 */
    slider.on('beforeScrollStart', function(from, to) {
        // from 为当前页，to 为下一页
    })
    /* 滑动结束 */
    slider.on('scrollEnd', function(curPage) {
        // curPage 当前页
    });
}

