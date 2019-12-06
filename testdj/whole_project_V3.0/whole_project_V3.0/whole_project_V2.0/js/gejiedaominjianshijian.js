
// 基于准备好的dom，初始化echarts实例
var myChart_stack = echarts.init(document.getElementById('main-stack'));

var option_stack = {
    title: {
        text: '各街道民生事件情况',
        top: 'top',
        left: 'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        //orient: 'vertical',
        top:30,
        type: 'scroll',
        data:['安全隐患','党纪政纪','党建群团','规土城建','环保水务','交通运输','教育卫生','劳动社保','民政服务','社区管理','食药市监','市容环卫','市政设施','统一战线','文体旅游','治安维稳','专业事件采集','组织人事']
    },
    grid: {
        left: '%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['碧岭街道','坑梓街道','龙田街道','马峦街道','坪山街道','石井街道']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'安全隐患',
            type:'bar',
            barWidth : 30,
            stack: 'A',
            data:[100, 732, 701, 734, 1090, 1130]
        },
        {
            name:'党纪政纪',
            type:'bar',
            stack: 'A',
            data:[120, 132, 101, 134, 290, 230]
        },
        {
            name:'党建群团',
            type:'bar',
            stack: 'A',
            data:[60, 72, 71, 74, 190, 130]
        },
        {
            name:'规土城建',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'环保水务',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 11]
        },
        {
            name:'交通运输',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 56]
        },
        {
            name:'教育卫生',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'劳动社保',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'民政服务',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'社区管理',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'食药市监',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'市容环卫',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'市政设施',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 11]
        },
        {
            name:'统一战线',
            type:'bar',
            stack: 'A',
            data:[2, 2, 1, 4, 10, 0, 12]
        },
        {
            name:'文体旅游',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'治安维稳',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'专业事件采集',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        },
        {
            name:'组织人事',
            type:'bar',
            stack: 'A',
            data:[62, 82, 91, 84, 109, 110]
        }

    ]}
myChart_stack.setOption(option_stack);
