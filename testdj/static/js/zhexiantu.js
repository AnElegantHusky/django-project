var myChart_zhexiantu = echarts.init(document.getElementById('zhexiantu')); //记得加上这个申明
var bb_zhexiantu= ['2018年2月上旬','2018年2月下旬','2018年3月上旬','2018年3月下旬','2018年4月上旬','2018年4月下旬','2018年5月上旬','2018年5月下旬','2018年6月上旬','2018年6月下旬','2018年7月上旬','2018年7月下旬','2018年8月上旬','2018年8月下旬','2018年9月上旬','2018年9月下旬','2018年10月上旬','2018年10月下旬','2018年11月上旬','2018年11月下旬','2018年12月上旬'] ;//这是我从后端送过来的数据
//var aa = {{ aa }}
myChart_zhexiantu.setOption(option_zhexiantu = {
    title: {
        text: '各类事件变化情况分析'
    },
    legend: {
        top:40,
        data:['投诉','咨询','建议','其他']
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: bb_zhexiantu
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    toolbox: {
        left: 'center',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
        startValue: '2018年2月上旬'
    }, {
        type: 'inside'
    }],
    visualMap: {
        top: 10,
        right: 10,
        pieces: [{
            gt: 0,
            lte: 20,
            color: '#096'
        }, {
            gt: 20,
            lte: 40,
            color: '#ffde33'
        }, {
            gt: 40,
            lte: 60,
            color: '#ff9933'
        }, {
            gt: 60,
            lte: 80,
            color: '#cc0033'
        }, {
            gt: 80,
            lte: 100,
            color: '#660099'
        }, {
            gt: 100,
            color: '#7e0023'
        }],
        outOfRange: {
            color: '#999'
        }
    },
    series: [{
        name: '投诉',
        type: 'line',
        smooth: true,
        data: List_zx[0],
        markLine: {
            silent: true,
            data: [{
                yAxis: 20
            }, {
                yAxis: 40
            }, {
                yAxis: 60
            }, {
                yAxis: 80
            }, {
                yAxis: 100
            }]
        }
    },
        {
            name: '咨询',
            type: 'line',
            smooth: true,
            data: List_zx[1],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 20
                }, {
                    yAxis: 40
                }, {
                    yAxis: 60
                }, {
                    yAxis: 80
                }, {
                    yAxis: 100
                }]
            }
        },
        {
            name: '建议',
            type: 'line',
            smooth: true,
            data: List_zx[2],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 20
                }, {
                    yAxis: 40
                }, {
                    yAxis: 60
                }, {
                    yAxis: 80
                }, {
                    yAxis: 100
                }]
            }
        },
        {
            name: '其他',
            type: 'line',
            smooth: true,
            data: List_zx[3],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 20
                }, {
                    yAxis: 40
                }, {
                    yAxis: 60
                }, {
                    yAxis: 80
                }, {
                    yAxis: 100
                }]
            }
        }]
});