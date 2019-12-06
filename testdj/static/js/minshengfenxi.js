
var myChart_minshengfenxi_alt = echarts.init(document.getElementById('minshengfenxi'));
var option_minshengfenxi_alt = {
    title: {
        text: '民生分析',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '3%',
        top: '2%',
        data: ['投诉', '建议', '咨询']
    },
    series: [
        {
            name: '问题性质',
            type: 'pie',
            radius: '55%',
            center: ['30%', '60%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 4,
                    length2: 4
                }
            },
            data: [
                {value: List_msfx[0], name: '投诉'},
                {value: List_msfx[1], name: '建议'},
                {value: List_msfx[2], name: '咨询'}

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
myChart_minshengfenxi_alt.setOption(option_minshengfenxi_alt);


$("#msfx_submit").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/homepage/msfx/post/",
        dataType: "json",
        data: {
            csrfmiddlewaretoken:'{{csrf_token}}',
            date_msfx_begin: $("#begin_msfx").val(),
            date_msfx_end: $("#end_msfx").val(),
        },
        async: true,
        success: function (result) {
            var myChart_minshengfenxi = echarts.init(document.getElementById('minshengfenxi'));
            var option_minshengfenxi = {
                title: {
                    text: '民生分析',
                    subtext:result[3],
                    top: 'top',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: '3%',
                    top: '2%',
                    data: ['投诉', '建议', '咨询']
                },
                series: [
                    {
                        name: '问题性质',
                        type: 'pie',
                        radius: '55%',
                        center: ['30%', '60%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 4,
                                length2: 4
                            }
                        },
                        data: [
                            {value: result[0], name: '投诉'},
                            {value: result[1], name: '建议'},
                            {value: result[2], name: '咨询'}

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
        },
        error: function (err) {
            alert(XMLHttpRequest.readyState);
        }
    })
})
