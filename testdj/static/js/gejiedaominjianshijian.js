 $("#gjdm_submit").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/homepage/gjdm/post/",
        dataType: "json",
        data: {
            csrfmiddlewaretoken:'{{csrf_token}}',
            date_gjdm_begin: $("#begin_gjdm").val(),
            date_gjdm_end: $("#end_gjdm").val(),
        },
        async: true,
        success: function (result) {
         

// 基于准备好的dom，初始化echarts实例
var myChart_stack = echarts.init(document.getElementById('main-stack'));
var gejiedao_names = new Array('安全隐患','党纪政纪','党建群团','规土城建','环保水务','交通运输','教育卫生','劳动社保','民政服务','社区管理','食药市监','市容环卫','市政设施','统一战线','文体旅游','治安维稳','专业事件采集','组织人事');
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
            data:[result[gejiedao_names[0]]['碧岭街道'],result[gejiedao_names[0]]['坑梓街道'],result[gejiedao_names[0]]['龙田街道'],result[gejiedao_names[0]]['马峦街道'],result[gejiedao_names[0]]['坪山街道'],result[gejiedao_names[0]]['石井街道']]
        },
        {
            name:'党纪政纪',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[1]]['碧岭街道'],result[gejiedao_names[1]]['坑梓街道'],result[gejiedao_names[1]]['龙田街道'],result[gejiedao_names[1]]['马峦街道'],result[gejiedao_names[1]]['坪山街道'],result[gejiedao_names[1]]['石井街道']]
        },
        {
            name:'党建群团',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[2]]['碧岭街道'],result[gejiedao_names[2]]['坑梓街道'],result[gejiedao_names[2]]['龙田街道'],result[gejiedao_names[2]]['马峦街道'],result[gejiedao_names[2]]['坪山街道'],result[gejiedao_names[2]]['石井街道']]
        },
        {
            name:'规土城建',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[3]]['碧岭街道'],result[gejiedao_names[3]]['坑梓街道'],result[gejiedao_names[3]]['龙田街道'],result[gejiedao_names[3]]['马峦街道'],result[gejiedao_names[3]]['坪山街道'],result[gejiedao_names[3]]['石井街道']]
        },
        {
            name:'环保水务',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[4]]['碧岭街道'],result[gejiedao_names[4]]['坑梓街道'],result[gejiedao_names[4]]['龙田街道'],result[gejiedao_names[4]]['马峦街道'],result[gejiedao_names[4]]['坪山街道'],result[gejiedao_names[4]]['石井街道']]
        },
        {
            name:'交通运输',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[5]]['碧岭街道'],result[gejiedao_names[5]]['坑梓街道'],result[gejiedao_names[5]]['龙田街道'],result[gejiedao_names[5]]['马峦街道'],result[gejiedao_names[5]]['坪山街道'],result[gejiedao_names[5]]['石井街道']]
        },
        {
            name:'教育卫生',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[6]]['碧岭街道'],result[gejiedao_names[6]]['坑梓街道'],result[gejiedao_names[6]]['龙田街道'],result[gejiedao_names[6]]['马峦街道'],result[gejiedao_names[6]]['坪山街道'],result[gejiedao_names[6]]['石井街道']]
        },
        {
            name:'劳动社保',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[7]]['碧岭街道'],result[gejiedao_names[7]]['坑梓街道'],result[gejiedao_names[7]]['龙田街道'],result[gejiedao_names[7]]['马峦街道'],result[gejiedao_names[7]]['坪山街道'],result[gejiedao_names[7]]['石井街道']]
        },
        {
            name:'民政服务',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[8]]['碧岭街道'],result[gejiedao_names[8]]['坑梓街道'],result[gejiedao_names[8]]['龙田街道'],result[gejiedao_names[8]]['马峦街道'],result[gejiedao_names[8]]['坪山街道'],result[gejiedao_names[8]]['石井街道']]
        },
        {
            name:'社区管理',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[9]]['碧岭街道'],result[gejiedao_names[9]]['坑梓街道'],result[gejiedao_names[9]]['龙田街道'],result[gejiedao_names[9]]['马峦街道'],result[gejiedao_names[9]]['坪山街道'],result[gejiedao_names[9]]['石井街道']]
        },
        {
            name:'食药市监',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[10]]['碧岭街道'],result[gejiedao_names[10]]['坑梓街道'],result[gejiedao_names[10]]['龙田街道'],result[gejiedao_names[10]]['马峦街道'],result[gejiedao_names[10]]['坪山街道'],result[gejiedao_names[10]]['石井街道']]
        },
        {
            name:'市容环卫',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[11]]['碧岭街道'],result[gejiedao_names[11]]['坑梓街道'],result[gejiedao_names[11]]['龙田街道'],result[gejiedao_names[11]]['马峦街道'],result[gejiedao_names[11]]['坪山街道'],result[gejiedao_names[11]]['石井街道']]
        },
        {
            name:'市政设施',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[12]]['碧岭街道'],result[gejiedao_names[12]]['坑梓街道'],result[gejiedao_names[12]]['龙田街道'],result[gejiedao_names[12]]['马峦街道'],result[gejiedao_names[12]]['坪山街道'],result[gejiedao_names[12]]['石井街道']]
        },
        {
            name:'统一战线',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[13]]['碧岭街道'],result[gejiedao_names[13]]['坑梓街道'],result[gejiedao_names[13]]['龙田街道'],result[gejiedao_names[13]]['马峦街道'],result[gejiedao_names[13]]['坪山街道'],result[gejiedao_names[13]]['石井街道']]
        },
        {
            name:'文体旅游',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[14]]['碧岭街道'],result[gejiedao_names[14]]['坑梓街道'],result[gejiedao_names[14]]['龙田街道'],result[gejiedao_names[14]]['马峦街道'],result[gejiedao_names[14]]['坪山街道'],result[gejiedao_names[14]]['石井街道']]
        },
        {
            name:'治安维稳',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[15]]['碧岭街道'],result[gejiedao_names[15]]['坑梓街道'],result[gejiedao_names[15]]['龙田街道'],result[gejiedao_names[15]]['马峦街道'],result[gejiedao_names[15]]['坪山街道'],result[gejiedao_names[15]]['石井街道']]
        },
        {
            name:'专业事件采集',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[16]]['碧岭街道'],result[gejiedao_names[16]]['坑梓街道'],result[gejiedao_names[16]]['龙田街道'],result[gejiedao_names[16]]['马峦街道'],result[gejiedao_names[16]]['坪山街道'],result[gejiedao_names[16]]['石井街道']]
        },
        {
            name:'组织人事',
            type:'bar',
            stack: 'A',
            data:[result[gejiedao_names[17]]['碧岭街道'],result[gejiedao_names[17]]['坑梓街道'],result[gejiedao_names[17]]['龙田街道'],result[gejiedao_names[17]]['马峦街道'],result[gejiedao_names[17]]['坪山街道'],result[gejiedao_names[17]]['石井街道']]
        }

    ]}
    myChart_stack.setOption(option_stack);
        },
        error: function (err) {
            alert(XMLHttpRequest.readyState);
        }
    })
})

window.onload = function() {

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
            data:List_gjdm[0]
        },
        {
            name:'党纪政纪',
            type:'bar',
            stack: 'A',
            data:List_gjdm[1]
        },
        {
            name:'党建群团',
            type:'bar',
            stack: 'A',
            data:List_gjdm[2]
        },
        {
            name:'规土城建',
            type:'bar',
            stack: 'A',
            data:List_gjdm[3]
        },
        {
            name:'环保水务',
            type:'bar',
            stack: 'A',
            data:List_gjdm[4]
        },
        {
            name:'交通运输',
            type:'bar',
            stack: 'A',
            data:List_gjdm[5]
        },
        {
            name:'教育卫生',
            type:'bar',
            stack: 'A',
            data:List_gjdm[6]
        },
        {
            name:'劳动社保',
            type:'bar',
            stack: 'A',
            data:List_gjdm[7]
        },
        {
            name:'民政服务',
            type:'bar',
            stack: 'A',
            data:List_gjdm[8]
        },
        {
            name:'社区管理',
            type:'bar',
            stack: 'A',
            data:List_gjdm[9]
        },
        {
            name:'食药市监',
            type:'bar',
            stack: 'A',
            data:List_gjdm[10]
        },
        {
            name:'市容环卫',
            type:'bar',
            stack: 'A',
            data:List_gjdm[11]
        },
        {
            name:'市政设施',
            type:'bar',
            stack: 'A',
            data:List_gjdm[12]
        },
        {
            name:'统一战线',
            type:'bar',
            stack: 'A',
            data:List_gjdm[13]
        },
        {
            name:'文体旅游',
            type:'bar',
            stack: 'A',
            data:List_gjdm[14]
        },
        {
            name:'治安维稳',
            type:'bar',
            stack: 'A',
            data:List_gjdm[15]
        },
        {
            name:'专业事件采集',
            type:'bar',
            stack: 'A',
            data:List_gjdm[16]
        },
        {
            name:'组织人事',
            type:'bar',
            stack: 'A',
            data:List_gjdm[17]
        }

    ]}
myChart_stack.setOption(option_stack);

}