
    var myChart_shijianjieban = echarts.init(document.getElementById('main-yyn'));

    // 指定图表的配置项和数据
        var option_shijianjieban = {
            title: {
                text: '事件结办分析',
                top: 'top',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['处置中', '超期结办', '按期结办', '处置中-问题类型', '超期结办-问题类型', '按期结办-问题类型'],
                selected: {'处置中-问题类型': false, '超期结办-问题类型': false, '按期结办-问题类型': false}
            },
            series: [
                {
                    center: ["50%", "65%"],
                    name: '当前状态',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '18%'],
    
                    label: {
                        normal: {
                            position: 'outside'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 3,
                            length2: 3
                        }
                    },
                    data: [
                        {value: List_sjjb[0][0] + List_sjjb[0][1] + List_sjjb[0][2] + List_sjjb[0][3], name: '处置中'},
                        {value: List_sjjb[1][0] + List_sjjb[1][1] + List_sjjb[1][2] + List_sjjb[1][3], name: '超期结办'},
                        {value: List_sjjb[2][0] + List_sjjb[2][1] + List_sjjb[2][2] + List_sjjb[2][3], name: '按期结办'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                {
                    center: ["50%", "65%"],
                    name: '处置中-问题类型',
                    type: 'pie',
                    radius: ['28%', '38%'],
                    animationType: 'scale',
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 16,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: List_sjjb[0][0], name: '市容环卫'},
                        {value: List_sjjb[0][1], name: '环保水务'},
                        {value: List_sjjb[0][2], name: '市政设施'},
                        {value: List_sjjb[0][3], name: '其他'}
                    ]
                },
                {
                    center: ["50%", "65%"],
                    name: '超期结办-问题类型',
                    type: 'pie',
                    radius: ['28%', '38%'],
                    animationType: 'scale',
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 16,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: List_sjjb[1][0], name: '市容环卫'},
                        {value: List_sjjb[1][1], name: '环保水务'},
                        {value: List_sjjb[1][2], name: '市政设施'},
                        {value: List_sjjb[1][3], name: '其他'}
                    ]
                },
                {
                    center: ["50%", "65%"],
                    name: '按期结办-问题类型',
                    type: 'pie',
                    radius: ['28%', '38%'],
                    animationType: 'scale',
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 16,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: List_sjjb[2][0], name: '市容环卫'},
                        {value: List_sjjb[2][1], name: '环保水务'},
                        {value: List_sjjb[2][2], name: '市政设施'},
                        {value: List_sjjb[2][3], name: '其他'}
                    ]
                },
            ]
        };
    
        myChart_shijianjieban.on('click', function (params) {
            if (params.componentType === 'series') {
                if (params.seriesIndex === 0) {
                    if (params.dataIndex === 0) {
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendSelect',
                                // 图例名称
                                name: '处置中-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
    
                                type: 'legendUnSelect',
                                name: '超期结办-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendUnSelect',
                                name: '按期结办-问题类型'
                            }
                        );
                    } else if (params.dataIndex === 1) {
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendUnSelect',
                                // 图例名称
                                name: '处置中-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
    
                                type: 'legendSelect',
                                name: '超期结办-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendUnSelect',
                                name: '按期结办-问题类型'
                            }
                        );
                    } else if (params.dataIndex === 2) {
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendUnSelect',
                                // 图例名称
                                name: '处置中-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
    
                                type: 'legendUnSelect',
                                name: '超期结办-问题类型'
                            }
                        );
                        myChart_shijianjieban.dispatchAction({
                                type: 'legendSelect',
                                name: '按期结办-问题类型'
                            }
                        );
                    }
                }
            }
        });
    
    // 使用刚指定的配置项和数据显示图表。
        myChart_shijianjieban.setOption(option_shijianjieban);
    
$("#sjjb_submit").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/homepage/sjjb/post/",
        dataType: "json",
        data: {
            csrfmiddlewaretoken: '{{csrf_token}}',
            date_sjjb_begin: $("#begin_sjjb").val(),
            date_sjjb_end: $("#end_sjjb").val(),
        },
        async: true,
        success: function (List_sjjb) {
          
// 基于准备好的dom，初始化echarts实例
var myChart_shijianjieban = echarts.init(document.getElementById('main-yyn'));

// 指定图表的配置项和数据
var option_shijianjieban = {
    title: {
        text: '事件结办分析',
        subtext: List_sjjb[3][0],
        top: 'top',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['处置中','超期结办','按期结办','处置中-问题类型','超期结办-问题类型','按期结办-问题类型'],
        selected:{'处置中-问题类型':false,'超期结办-问题类型':false,'按期结办-问题类型':false}
    },
    series: [
        {
            center: ["50%", "65%"],
            name:'当前状态',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '18%'],

            label: {
                normal: {
                    position: 'outside'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 3,
                    length2:3
                }
            },
            data:[
                {value:List_sjjb[0][0]+List_sjjb[0][1]+List_sjjb[0][2]+List_sjjb[0][3], name:'处置中'},
                {value:List_sjjb[1][0]+List_sjjb[1][1]+List_sjjb[1][2]+List_sjjb[1][3], name:'超期结办'},
                {value:List_sjjb[2][0]+List_sjjb[2][1]+List_sjjb[2][2]+List_sjjb[2][3], name:'按期结办'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            center: ["50%", "65%"],
            name:'处置中-问题类型',
            type:'pie',
            radius: ['28%', '38%'],
            animationType:'scale',
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 16,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:List_sjjb[0][0], name:'市容环卫'},
                {value:List_sjjb[0][1], name:'环保水务'},
                {value:List_sjjb[0][2], name:'市政设施'},
                {value:List_sjjb[0][3], name:'其他'}
            ]
        },
        {
            center: ["50%", "65%"],
            name:'超期结办-问题类型',
            type:'pie',
            radius: ['28%', '38%'],
            animationType:'scale',
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 16,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:List_sjjb[1][0], name:'市容环卫'},
                {value:List_sjjb[1][1], name:'环保水务'},
                {value:List_sjjb[1][2], name:'市政设施'},
                {value:List_sjjb[1][3], name:'其他'}
            ]
        },
        {
            center: ["50%", "65%"],
            name:'按期结办-问题类型',
            type:'pie',
            radius: ['28%', '38%'],
            animationType:'scale',
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 16,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:List_sjjb[2][0], name:'市容环卫'},
                {value:List_sjjb[2][1], name:'环保水务'},
                {value:List_sjjb[2][2], name:'市政设施'},
                {value:List_sjjb[2][3], name:'其他'}
            ]
        },
    ]
};

myChart_shijianjieban.on('click', function (params){
    if(params.componentType === 'series'){
        if (params.seriesIndex === 0) {
            if (params.dataIndex === 0) {
                myChart_shijianjieban.dispatchAction({
                        type: 'legendSelect',
                        // 图例名称
                        name: '处置中-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({

                        type: 'legendUnSelect',
                        name: '超期结办-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({
                        type: 'legendUnSelect',
                        name: '按期结办-问题类型'
                    }
                );
            }
            else if(params.dataIndex === 1){
                myChart_shijianjieban.dispatchAction({
                        type: 'legendUnSelect',
                        // 图例名称
                        name: '处置中-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({

                        type: 'legendSelect',
                        name: '超期结办-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({
                        type: 'legendUnSelect',
                        name: '按期结办-问题类型'
                    }
                );
            }
            else if(params.dataIndex === 2){
                myChart_shijianjieban.dispatchAction({
                        type: 'legendUnSelect',
                        // 图例名称
                        name: '处置中-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({

                        type: 'legendUnSelect',
                        name: '超期结办-问题类型'
                    }
                );
                myChart_shijianjieban.dispatchAction({
                        type: 'legendSelect',
                        name: '按期结办-问题类型'
                    }
                );
            }
        }
    }
});

// 使用刚指定的配置项和数据显示图表。
myChart_shijianjieban.setOption(option_shijianjieban);
       },
        error: function (err) {
            alert(XMLHttpRequest.readyState);
        }
    })
})

