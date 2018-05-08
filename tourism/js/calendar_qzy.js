var CQ = {

	curTime: '', // 当前时间对象
	showTime: '', // 显示时间对象
	curYear: '', // 年
	curMonth: '', // 月
	curDate: '', // 日
	curDay: '', // 周几
	offsetMonth: 0, // 月的偏移量
	isLeapYear: false, // 闰年
	calendar: '',

	init: function(obj){

		CQ.initDate();

		CQ.calendar = $(obj);

		CQ.fillDays();

		CQ.calendar.find('.ca-head .ca-prev').click(function(){
			CQ.offsetMonth --;
			CQ.fillDays();
		});
		CQ.calendar.find('.ca-head .ca-next').click(function(){
			CQ.offsetMonth ++;
			CQ.fillDays();
		});
		CQ.calendar.on('click', '.ca-body .ca-table > tbody td', function(){
			var f = $(CQ.calendar.data('link-target'));
			CQ.showTime.setDate($(this).text());
			if (!$(this).hasClass('disabled')) {
				var y = CQ.showTime.getYear() + 1900,
					m = CQ.showTime.getMonth() + 1,
					d = CQ.showTime.getDate();
				f.val(y + '-' + m + '-' + d);	
			}
		});



		console.log(CQ);
	},

	initDate: function(){
		CQ.curTime = new Date();
		CQ.curYear = CQ.curTime.getYear() + 1900;
		CQ.curMonth = CQ.curTime.getMonth() + 1;
		CQ.curDate = CQ.curTime.getDate();
		CQ.curDay = CQ.curTime.getDay();
		CQ.isLeapYear = CQ.leapYear(CQ.curYear);
	},

	getDays: function(showTime){
		var i, days = new Array(), m = showTime.getMonth() + 1;

		for (i = 1; i <= (showTime.getDay() - showTime.getDate() % 7 + 8) % 7; i ++) {
			days.push('');
		}
		if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
			// 31天
			for (i = 1; i <= 31; i ++) {
				days.push(i);
			}
		} else if (m == 2) {
			for (i = 1; i <= 28; i ++) {
				// 28天
				days.push(i);
			}
			if (CQ.leapYear(showTime.getYear() + 1900)) {
				// 闰年加一天
				days.push(29);
			}
		} else {
			// 30天
			for (i = 1; i <= 30; i ++) {
				days.push(i);
			}
		}
		return days;
	},

	fillDays: function(){
		if (CQ.calendar.length <= 0) {
			return null;
		}
		// 计算当前显示的时间对象
		CQ.initDate();
		CQ.showTime = CQ.curTime;
		CQ.showTime.setDate(1);
		CQ.showTime.setMonth(CQ.curMonth + CQ.offsetMonth - 1);

		console.log(CQ.curTime);

		var days = CQ.getDays(CQ.showTime);

		var tr, html, tbody = CQ.calendar.find('.ca-body table tbody');

		CQ.calendar.find('.ca-head .ca-cur-m').text(CQ.showTime.getYear() + 1900 + '年 ' + lang_month[CQ.showTime.getMonth()]);
		tbody.html('');
		for (var i = 0; i < days.length; i ++) {
			if (i % 7 == 0) {
				tbody.append(tr);
				tr = document.createElement('tr');
			}

			if (CQ.offsetMonth == 0 && days[i] < CQ.curDate) {
				$(tr).html($(tr).html() + '<td class="disabled">' + days[i] + '</td>');
			} else if (CQ.offsetMonth == 0 && days[i] == CQ.curDate) {
				$(tr).html($(tr).html() + '<td class="current">' + days[i] + '</td>');
			} else if (CQ.offsetMonth < 0) {
				$(tr).html($(tr).html() + '<td class="disabled">' + days[i] + '</td>');
			} else {
				$(tr).html($(tr).html() + '<td>' + days[i] + '</td>');
			}
		}
		tbody.append(tr);
	},

	leapYear: function(y){
		if (y % 100 == 0) {
			if((y / 100) % 4 == 0) {
				return true;
			} else {
				return false;
			}
		} else if (y % 4 == 0) {
			return true;
		} else {
			return false;
		}
	},

}

var lang_month = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

// var CQ_MONTHS = [
// 	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
// 	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
// ]






