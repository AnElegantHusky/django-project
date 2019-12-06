
var map = new BMap.Map("container_relitu_hwc");          // 创建地图实例
var point = new BMap.Point(114.36,22.6693);
map.centerAndZoom(point, 13);             // 初始化地图,设置中心点坐标和地图级别
var marker = new BMap.Marker(point);
map.setCurrentCity("深圳");		//设置当前显示城市
map.enableScrollWheelZoom(); // 允许滚轮缩放
map.addOverlay(marker);
var points =[
    {"lng":"114.367638","lat":"22.74885","count":List_rlt[0],"branch":"坪环社区"},
    {"lng":"114.330338","lat":"22.692444","count":List_rlt[1],"branch":"六联社区"},
    {"lng":"114.289124","lat":"22.667711","count":List_rlt[2],"branch":"碧岭社区"},
    {"lng":"114.310036","lat":"22.669346","count":List_rlt[3],"branch":"汤坑社区"},
    {"lng":"114.320023","lat":"22.673258","count":List_rlt[4],"branch":"沙湖社区"},
    {"lng":"114.331726","lat":"22.638508","count":List_rlt[5],"branch":"马峦社区"},
    {"lng":"114.355347","lat":"22.685249","count":List_rlt[6],"branch":"江岭社区"},
    {"lng":"114.362282","lat":"22.685459","count":List_rlt[7],"branch":"沙坣社区"},
    {"lng":"114.399948","lat":"22.657915","count":List_rlt[8],"branch":"金龟社区"},
    {"lng":"114.380348","lat":"22.691509","count":List_rlt[9],"branch":"石井社区"},
    {"lng":"114.401871","lat":"22.691526","count":List_rlt[10],"branch":"田头社区"},
    {"lng":"114.415359","lat":"22.694683","count":List_rlt[11],"branch":"田心社区"},
    {"lng":"114.391357","lat":"22.709625","count":List_rlt[12],"branch":"竹坑社区"},
    {"lng":"114.368431","lat":"22.698362","count":List_rlt[13],"branch":"南布社区"},
    {"lng":"114.363579","lat":"22.749115","count":List_rlt[14],"branch":"坪山社区"},
    {"lng":"114.34523","lat":"22.701197","count":List_rlt[15],"branch":"六和社区"},
    {"lng":"114.34396","lat":"22.688491","count":List_rlt[16],"branch":"和平社区"},
    {"lng":"114.383545","lat":"22.746918","count":List_rlt[17],"branch":"坑梓社区"},
    {"lng":"114.362869","lat":"22.728525","count":List_rlt[18],"branch":"老坑社区"},
    {"lng":"114.365944","lat":"22.751028","count":List_rlt[19],"branch":"龙田社区"},
    {"lng":"114.374771","lat":"22.740631","count":List_rlt[20],"branch":"秀新社区"},
    {"lng":"114.400459","lat":"22.753141","count":List_rlt[21],"branch":"金沙社区"},
    {"lng":"114.397934","lat":"22.755907","count":List_rlt[22],"branch":"沙田社区"},

];
if(!isSupportCanvas()){
    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
}
heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":40,"visible":true});
map.addOverlay(heatmapOverlay);
heatmapOverlay.setDataSet({data:points,max:100});
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function setGradient(){
    var gradient = {};
    var colors = document.querySelectorAll("input[type='color']");
    colors = [].slice.call(colors,0);
    colors.forEach(function(ele){
        gradient[ele.getAttribute("data-key")] = ele.value;
    });
    heatmapOverlay.setOptions({"gradient":gradient});
}
function openHeatmap(){
    heatmapOverlay.show();
}
function closeHeatmap(){
    heatmapOverlay.hide();
}
function markerFun (points_now,label,infoWindows) {// 函数 创建多个标注
    var markers = new BMap.Marker(points_now);
    map.addOverlay(markers);
    markers.setLabel(label);
    markers.addEventListener("click",function (event) {
        console.log("0001");
        map.openInfoWindow(infoWindows,points_now);//参数：窗口、点  根据点击的点出现对应的窗口
    });
}

var mapPoints =[

    {x:114.367638,y:22.74885,title:"负责人：陈沐希",con:"手机号：138808854096;办公室：T2-601",branch:"坪环社区"},
    {x:114.330338,y:22.692444,title:"负责人：黄文昌",con:"手机号：135678854096;办公室：T3-601",branch:"六联社区"},
    {x:114.289124,y:22.667711,title:"负责人：陈昕",con:"手机号：138808854096;办公室：T4-301",branch:"碧岭社区"},
    {x:114.310036,y:22.669346,title:"负责人：高晓宇",con:"手机号：134808854096;办公室：T5-401",branch:"汤坑社区"},
    {x:114.320023,y:22.673258,title:"负责人：杨一诺",con:"手机号：133808854096;办公室：T6-501",branch:"沙湖社区"},
    {x:114.331726,y:22.638508,title:"负责人：黄文昌",con:"手机号：132808854096;办公室：T2-601",branch:"马峦社区"},
    {x:114.355347,y:22.685249,title:"负责人：陈沐希",con:"手机号：133455854096;办公室：H308",branch:"江岭社区"},
    {x:114.362282,y:22.685459,title:"负责人：黄文昌",con:"手机号：138808854096;办公室：H408",branch:"沙坣社区"},
    {x:114.399948,y:22.657915,title:"负责人：高晓宇",con:"手机号：138808854096;办公室：T2-602",branch:"金龟社区"},
    {x:114.380348,y:22.691509,title:"负责人：黄文昌",con:"手机号：138808854096;办公室：T2-603",branch:"石井社区"},
    {x:114.401871,y:22.691526,title:"负责人：陈昕",con:"手机号：134808854096;办公室：T2-604",branch:"田头社区"},
    {x:114.415359,y:22.694683,title:"负责人：陈沐希",con:"手机号：135808854099;办公室：T2-605",branch:"田心社区"},
    {x:114.391357,y:22.709625,title:"负责人：陈昕",con:"手机号：138808854099;办公室：T2-606",branch:"竹坑社区"},
    {x:114.368431,y:22.698362,title:"负责人：陈沐希",con:"手机号：137808854090;办公室：T2-607",branch:"南布社区"},
    {x:114.363579,y:22.749115,title:"负责人：陈昕",con:"手机号：135608854096;办公室：T2-608",branch:"坪山社区"},
    {x:114.34523,y:22.701197,title:"负责人：高晓宇",con:"手机号：134508854096;办公室：T2-609",branch:"六和社区"},
    {x:114.34396,y:22.688491,title:"负责人：高晓宇",con:"手机号：133408854096;办公室：T2-610",branch:"和平社区"},
    {x:114.383545,y:22.746918,title:"负责人：陈沐希",con:"手机号：131208854096;办公室：T2-611",branch:"坑梓社区"},
    {x:114.362869,y:22.728525,title:"负责人：杨一诺",con:"手机号：138808854096;办公室：T2-612",branch:"老坑社区"},
    {x:114.365944,y:22.751028,title:"负责人：陈沐希",con:"手机号：136608854096;办公室：T2-613",branch:"龙田社区"},
    {x:114.374771,y:22.740631,title:"负责人：杨一诺",con:"手机号：137708854096;办公室：T2-614",branch:"秀新社区"},
    {x:114.400459,y:22.753141,title:"负责人：杨一诺",con:"手机号：139908854096;办公室：T2-615",branch:"金沙社区"},
    {x:114.397934,y:22.755907,title:"负责人：陈沐希",con:"手机号：130008854096;办公室：T2-616",branch:"沙田社区"}
];
var i = 0;
for (;i<mapPoints.length;i++) {
    var points_now = new BMap.Point(mapPoints[i].x,mapPoints[i].y);//创建坐标点
    var opts = {
        width:250,
        height: 100,
        title:mapPoints[i].title
    };
    var label = new BMap.Label(mapPoints[i].branch,{
        offset:new BMap.Size(25,5)
    });
    var infoWindows = new BMap.InfoWindow(mapPoints[i].con,opts);
    markerFun(points_now,label,infoWindows);
}
map.setMapStyleV2({
  /*styleId: '7cdad4552aa93f346c95d7c3acf844d3' //黑夜模式*/
	/*styleId: 'b2d5751b7680dd6687727fcebaa18ed0'  //白色*/
	styleId: 'e7435cff79891bb0fbb208450338999b' //茶田
});

var myChart_qian6 = echarts.init(document.getElementById('zhuzhuangtu'));
options_qian6 = {
    title: {
        text: '所选时间投诉数前六社区',
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
        data: List_six[0]
    },
    series: [
        {
            /*name: '2012年',*/
            type: 'bar',
            data: List_six[1]
        }
    ]
};
myChart_qian6.setOption(options_qian6);
$("#rlt_submit").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/homepage/six/post/",
        dataType: "json",
        data: {
            csrfmiddlewaretoken:'{{csrf_token}}',
            date_rlt_begin: $("#begin_rlt").val(),
            date_rlt_end: $("#end_rlt").val(),
        },
        async: true,
        success: function (result) {

var myChart_qian6 = echarts.init(document.getElementById('zhuzhuangtu'));

var map = new BMap.Map("container_relitu_hwc");          // 创建地图实例
var point = new BMap.Point(114.36,22.6693);
map.centerAndZoom(point, 13);             // 初始化地图,设置中心点坐标和地图级别
var marker = new BMap.Marker(point);
map.setCurrentCity("深圳");		//设置当前显示城市
map.enableScrollWheelZoom(); // 允许滚轮缩放
map.addOverlay(marker);

options_qian6 = {
    title: {
        text: '所选时间投诉数前六社区',
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
        data: [result.six['name'][0], result.six['name'][1], result.six['name'][2], result.six['name'][3], result.six['name'][4], result.six['name'][5]]
    },
    series: [
        {
            /*name: '2012年',*/
            type: 'bar',
            data: [result.six['num'][0], result.six['num'][1], result.six['num'][2], result.six['num'][3], result.six['num'][4], result.six['num'][5]]
        }
    ]
};
myChart_qian6.setOption(options_qian6);


var points =[
    {"lng":"114.367638","lat":"22.74885","count":result.rlt[0],"branch":"坪环社区"},
    {"lng":"114.330338","lat":"22.692444","count":result.rlt[1],"branch":"六联社区"},
    {"lng":"114.289124","lat":"22.667711","count":result.rlt[2],"branch":"碧岭社区"},
    {"lng":"114.310036","lat":"22.669346","count":result.rlt[3],"branch":"汤坑社区"},
    {"lng":"114.320023","lat":"22.673258","count":result.rlt[4],"branch":"沙湖社区"},
    {"lng":"114.331726","lat":"22.638508","count":result.rlt[5],"branch":"马峦社区"},
    {"lng":"114.355347","lat":"22.685249","count":result.rlt[6],"branch":"江岭社区"},
    {"lng":"114.362282","lat":"22.685459","count":result.rlt[7],"branch":"沙坣社区"},
    {"lng":"114.399948","lat":"22.657915","count":result.rlt[8],"branch":"金龟社区"},
    {"lng":"114.380348","lat":"22.691509","count":result.rlt[9],"branch":"石井社区"},
    {"lng":"114.401871","lat":"22.691526","count":result.rlt[10],"branch":"田头社区"},
    {"lng":"114.415359","lat":"22.694683","count":result.rlt[11],"branch":"田心社区"},
    {"lng":"114.391357","lat":"22.709625","count":result.rlt[12],"branch":"竹坑社区"},
    {"lng":"114.368431","lat":"22.698362","count":result.rlt[13],"branch":"南布社区"},
    {"lng":"114.363579","lat":"22.749115","count":result.rlt[14],"branch":"坪山社区"},
    {"lng":"114.34523","lat":"22.701197","count":result.rlt[15],"branch":"六和社区"},
    {"lng":"114.34396","lat":"22.688491","count":result.rlt[16],"branch":"和平社区"},
    {"lng":"114.383545","lat":"22.746918","count":result.rlt[17],"branch":"坑梓社区"},
    {"lng":"114.362869","lat":"22.728525","count":result.rlt[18],"branch":"老坑社区"},
    {"lng":"114.365944","lat":"22.751028","count":result.rlt[19],"branch":"龙田社区"},
    {"lng":"114.374771","lat":"22.740631","count":result.rlt[20],"branch":"秀新社区"},
    {"lng":"114.400459","lat":"22.753141","count":result.rlt[21],"branch":"金沙社区"},
    {"lng":"114.397934","lat":"22.755907","count":result.rlt[22],"branch":"沙田社区"},

];//这里面添加经纬度！通过count接收大小
if(!isSupportCanvas()){
    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
}
heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":40,"visible":true});
map.addOverlay(heatmapOverlay);
heatmapOverlay.setDataSet({data:points,max:100});
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function setGradient(){
    var gradient = {};
    var colors = document.querySelectorAll("input[type='color']");
    colors = [].slice.call(colors,0);
    colors.forEach(function(ele){
        gradient[ele.getAttribute("data-key")] = ele.value;
    });
    heatmapOverlay.setOptions({"gradient":gradient});
}
function openHeatmap(){
    heatmapOverlay.show();
}
function closeHeatmap(){
    heatmapOverlay.hide();
}
function markerFun (points_now,label,infoWindows) {// 函数 创建多个标注
    var markers = new BMap.Marker(points_now);
    map.addOverlay(markers);
    markers.setLabel(label);
    markers.addEventListener("click",function (event) {
        console.log("0001");
        map.openInfoWindow(infoWindows,points_now);//参数：窗口、点  根据点击的点出现对应的窗口
    });
}

var mapPoints =[

    {x:114.367638,y:22.74885,title:"负责人：陈沐希",con:"手机号：138808854096;办公室：T2-601",branch:"坪环社区"},
    {x:114.330338,y:22.692444,title:"负责人：黄文昌",con:"手机号：135678854096;办公室：T3-601",branch:"六联社区"},
    {x:114.289124,y:22.667711,title:"负责人：陈昕",con:"手机号：138808854096;办公室：T4-301",branch:"碧岭社区"},
    {x:114.310036,y:22.669346,title:"负责人：高晓宇",con:"手机号：134808854096;办公室：T5-401",branch:"汤坑社区"},
    {x:114.320023,y:22.673258,title:"负责人：杨一诺",con:"手机号：133808854096;办公室：T6-501",branch:"沙湖社区"},
    {x:114.331726,y:22.638508,title:"负责人：黄文昌",con:"手机号：132808854096;办公室：T2-601",branch:"马峦社区"},
    {x:114.355347,y:22.685249,title:"负责人：陈沐希",con:"手机号：133455854096;办公室：H308",branch:"江岭社区"},
    {x:114.362282,y:22.685459,title:"负责人：黄文昌",con:"手机号：138808854096;办公室：H408",branch:"沙坣社区"},
    {x:114.399948,y:22.657915,title:"负责人：高晓宇",con:"手机号：138808854096;办公室：T2-602",branch:"金龟社区"},
    {x:114.380348,y:22.691509,title:"负责人：黄文昌",con:"手机号：138808854096;办公室：T2-603",branch:"石井社区"},
    {x:114.401871,y:22.691526,title:"负责人：陈昕",con:"手机号：134808854096;办公室：T2-604",branch:"田头社区"},
    {x:114.415359,y:22.694683,title:"负责人：陈沐希",con:"手机号：135808854099;办公室：T2-605",branch:"田心社区"},
    {x:114.391357,y:22.709625,title:"负责人：陈昕",con:"手机号：138808854099;办公室：T2-606",branch:"竹坑社区"},
    {x:114.368431,y:22.698362,title:"负责人：陈沐希",con:"手机号：137808854090;办公室：T2-607",branch:"南布社区"},
    {x:114.363579,y:22.749115,title:"负责人：陈昕",con:"手机号：135608854096;办公室：T2-608",branch:"坪山社区"},
    {x:114.34523,y:22.701197,title:"负责人：高晓宇",con:"手机号：134508854096;办公室：T2-609",branch:"六和社区"},
    {x:114.34396,y:22.688491,title:"负责人：高晓宇",con:"手机号：133408854096;办公室：T2-610",branch:"和平社区"},
    {x:114.383545,y:22.746918,title:"负责人：陈沐希",con:"手机号：131208854096;办公室：T2-611",branch:"坑梓社区"},
    {x:114.362869,y:22.728525,title:"负责人：杨一诺",con:"手机号：138808854096;办公室：T2-612",branch:"老坑社区"},
    {x:114.365944,y:22.751028,title:"负责人：陈沐希",con:"手机号：136608854096;办公室：T2-613",branch:"龙田社区"},
    {x:114.374771,y:22.740631,title:"负责人：杨一诺",con:"手机号：137708854096;办公室：T2-614",branch:"秀新社区"},
    {x:114.400459,y:22.753141,title:"负责人：杨一诺",con:"手机号：139908854096;办公室：T2-615",branch:"金沙社区"},
    {x:114.397934,y:22.755907,title:"负责人：陈沐希",con:"手机号：130008854096;办公室：T2-616",branch:"沙田社区"}
];
var i = 0;
for (;i<mapPoints.length;i++) {
    var points_now = new BMap.Point(mapPoints[i].x,mapPoints[i].y);//创建坐标点
    var opts = {
        width:250,
        height: 100,
        title:mapPoints[i].title
    };
    var label = new BMap.Label(mapPoints[i].branch,{
        offset:new BMap.Size(25,5)
    });
    var infoWindows = new BMap.InfoWindow(mapPoints[i].con,opts);
    markerFun(points_now,label,infoWindows);
}
map.setMapStyleV2({
  /*styleId: '7cdad4552aa93f346c95d7c3acf844d3' //黑夜模式*/
	/*styleId: 'b2d5751b7680dd6687727fcebaa18ed0'  //白色*/
	styleId: 'e7435cff79891bb0fbb208450338999b' //茶田
});

        }
    
    
    })
})