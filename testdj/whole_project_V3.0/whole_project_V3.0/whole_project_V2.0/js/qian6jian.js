
var myChart_qian6 = echarts.init(document.getElementById('zhuzhuangtu'));
options_qian6 = {
    title: {
        text: '当日投诉数前六社区',
        subtext: '请相关部门注意',
		y:'top'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['马峦社区','江岭社区','沙坣社区','金龟社区','田头社区','和平社区']
    },
    series: [
        {
            /*name: '2012年',*/
            type: 'bar',
            data: [19, 23, 31, 12, 13, 6]
        }
    ]
};
myChart_qian6.setOption(options_qian6);
