/**
 * Created by Administrator on 2016/10/21.
 */
window.onload = all;
function all(){
    myRadarChart();

}
function myRadarChart(){
    // 基于准备好的dom，初始化echarts实例
    var myRadarChart = echarts.init(document.getElementById('chart-show'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {},
        radar: {
            indicator: [
                { name: '品牌形象', max: 6500},
                { name: '不良行为', max: 14000},
                { name: '消防隐患', max: 30000},
                { name: '污染指数', max: 38000},
                { name: '危险特性', max: 52000}
            ]
        },
        series: [{
            type: 'radar',
            data : [
                {
                    value : [6500, 12000, 32000, 38000, 53000]
                },
                {
                    value : [5800, 14000, 30000, 40000, 54000]
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myRadarChart.setOption(option);
    setTimeout(function (){
    	window.onresize = function () {
    		myRadarChart.resize();
    	}
		},200);
}
