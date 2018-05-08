var option = {
	tooltip: {
		trigger: 'axis',
		position: function (pt) {
			return [pt[0], '10%'];
		}
	},
	toolbox: {
        show : true,
        feature : {
        	dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false}

        }
    },
	title: {
		left: 'center',
		text: '趋势图',
	},
	legend: {
		top: 'bottom',
		data:['意向']
	},
	dataZoom : [
        {
            type: 'slider',
            show: true,
            start: 1,
            end: 200
        }
    ],
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: []
	},
	yAxis: {
		type: 'value',
		boundaryGap: [0, '100%']
	},
	series: [
		{
			name:'模拟数据',
			type:'line',
			itemStyle: {
				normal: {
					color: 'rgb(255, 70, 131)'
				}
			},
			data: []
		}
	]
};

var option2 = {
	tooltip: {
		trigger: 'axis',
		position: function (pt) {
			return [pt[0], '10%'];
		}
	},
	title: {
		left: 'center',
		text: '趋势图',
	},
	legend: {
		top: 'bottom',
		data:['意向']
	},
	dataZoom : {
		y:200,
		show : false,
		realtime: true,
		start: 0,
		end: 100
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: []
	},
	yAxis: {
		type: 'value',
		boundaryGap: [0, '100%']
	},
	series: [
		{
			name:'模拟数据',
			type:'line',
			itemStyle: {
				normal: {
					color: 'rgb(255, 70, 131)'
				}
			},
			data: []
		}
	]
};

var option3 = {
	tooltip: {
		trigger: 'axis',
		position: function (pt) {
			return [pt[0], '10%'];
		}
	},
	title: {
		left: 'center',
		text: '趋势图',
	},
	grid: {
		bottom:100
	},
	legend: {
		top: 'bottom',
		data:['意向']
	},
	dataZoom : {
		y:230,
		show : true,
		realtime: true,
		start: 0,
		end: 100
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: []
	},
	yAxis: {
		type: 'value',
		boundaryGap: [0, '100%']
	},
	series: [
		{
			name:'模拟数据',
			type:'bar',
			itemStyle: {
				normal: {
					color: 'rgb(255, 70, 131)'
				}
			},
			data: []
		}
	]
};