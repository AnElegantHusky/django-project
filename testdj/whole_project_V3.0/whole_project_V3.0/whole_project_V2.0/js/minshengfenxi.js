
var myChart_minshengfenxi = echarts.init(document.getElementById('minshengfenxi'));
var option_minshengfenxi = {
    title: {
        text: '民生分析',
        top: 'top',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '20%',
        top:'50%',
        data: ['投诉','建议','咨询']
    },
    series : [
        {
            name: '问题性质',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data:[
                {value:335, name:'投诉'},
                {value:310, name:'建议'},
                {value:234, name:'咨询'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart_minshengfenxi.setOption(option_minshengfenxi);
