
var map = new BMap.Map("container_relitu_hwc");          // 创建地图实例
var point = new BMap.Point(114.36,22.6693);
map.centerAndZoom(point, 13);             // 初始化地图,设置中心点坐标和地图级别
var marker = new BMap.Marker(point);
map.setCurrentCity("深圳");		//设置当前显示城市
map.enableScrollWheelZoom(); // 允许滚轮缩放
map.addOverlay(marker);
var points =[
    {"lng":"114.367638","lat":"22.74885","count":"20","branch":"坪环社区"},
    {"lng":"114.330338","lat":"22.692444","count":"80","branch":"六联社区"},
    {"lng":"114.289124","lat":"22.667711","count":"60","branch":"碧岭社区"},
    {"lng":"114.310036","lat":"22.669346","count":"60","branch":"汤坑社区"},
    {"lng":"114.320023","lat":"22.673258","count":"60","branch":"沙湖社区"},
    {"lng":"114.331726","lat":"22.638508","count":"6000","branch":"马峦社区"},
    {"lng":"114.355347","lat":"22.685249","count":"60","branch":"江岭社区"},
    {"lng":"114.362282","lat":"22.685459","count":"60","branch":"沙坣社区"},
    {"lng":"114.399948","lat":"22.657915","count":"60","branch":"金龟社区"},
    {"lng":"114.380348","lat":"22.691509","count":"80","branch":"石井社区"},
    {"lng":"114.401871","lat":"22.691526","count":"90","branch":"田头社区"},
    {"lng":"114.415359","lat":"22.694683","count":"100","branch":"田心社区"},
    {"lng":"114.391357","lat":"22.709625","count":"60","branch":"竹坑社区"},
    {"lng":"114.368431","lat":"22.698362","count":"60","branch":"南布社区"},
    {"lng":"114.363579","lat":"22.749115","count":"60","branch":"坪山社区"},
    {"lng":"114.34523","lat":"22.701197","count":"200","branch":"六和社区"},
    {"lng":"114.34396","lat":"22.688491","count":"20","branch":"和平社区"},
    {"lng":"114.383545","lat":"22.746918","count":"30","branch":"坑梓社区"},
    {"lng":"114.362869","lat":"22.728525","count":"40","branch":"老坑社区"},
    {"lng":"114.365944","lat":"22.751028","count":"50","branch":"龙田社区"},
    {"lng":"114.374771","lat":"22.740631","count":"60","branch":"秀新社区"},
    {"lng":"114.400459","lat":"22.753141","count":"70","branch":"金沙社区"},
    {"lng":"114.397934","lat":"22.755907","count":"80","branch":"沙田社区"},

];//这里面添加经纬度！通过count接收大小

if(!isSupportCanvas()){
    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
}
//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
//参数说明如下:
/* visible 热力图是否显示,默认为true
 * opacity 热力的透明度,1-100
 * radius 势力图的每个点的半径大小
 * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
 *  {
        .2:'rgb(0, 255, 255)',
        .5:'rgb(0, 110, 255)',
        .8:'rgb(100, 0, 255)'
    }
    其中 key 表示插值的位置, 0~1.
        value 为颜色值.
 */
heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":40,"visible":true});
map.addOverlay(heatmapOverlay);
heatmapOverlay.setDataSet({data:points,max:100});
//closeHeatmap();
//判断浏览区是否支持canvas
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function setGradient(){
    /*格式如下所示:
    {
        0:'rgb(102, 255, 0)',
        .5:'rgb(255, 170, 0)',
        1:'rgb(255, 0, 0)'
    }*/
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

    {x:114.367638,y:22.74885,title:"A",branch:"坪环社区"},
    {x:114.330338,y:22.692444,title:"A",branch:"六联社区"},
    {x:114.289124,y:22.667711,title:"A",branch:"碧岭社区"},
    {x:114.310036,y:22.669346,title:"A",branch:"汤坑社区"},
    {x:114.320023,y:22.673258,title:"A",branch:"沙湖社区"},
    {x:114.331726,y:22.638508,title:"A",branch:"马峦社区"},
    {x:114.355347,y:22.685249,title:"A",branch:"江岭社区"},
    {x:114.362282,y:22.685459,title:"A",branch:"沙坣社区"},
    {x:114.399948,y:22.657915,title:"A",branch:"金龟社区"},
    {x:114.380348,y:22.691509,title:"A",branch:"石井社区"},
    {x:114.401871,y:22.691526,title:"A",branch:"田头社区"},
    {x:114.415359,y:22.694683,title:"A",branch:"田心社区"},
    {x:114.391357,y:22.709625,title:"A",branch:"竹坑社区"},
    {x:114.368431,y:22.698362,title:"A",branch:"南布社区"},
    {x:114.363579,y:22.749115,title:"A",branch:"坪山社区"},
    {x:114.34523,y:22.701197,title:"A",branch:"六和社区"},
    {x:114.34396,y:22.688491,title:"A",branch:"和平社区"},
    {x:114.383545,y:22.746918,title:"A",branch:"坑梓社区"},
    {x:114.362869,y:22.728525,title:"A",branch:"老坑社区"},
    {x:114.365944,y:22.751028,title:"A",branch:"龙田社区"},
    {x:114.374771,y:22.740631,title:"A",branch:"秀新社区"},
    {x:114.400459,y:22.753141,title:"A",branch:"金沙社区"},
    {x:114.397934,y:22.755907,title:"A",branch:"沙田社区"}
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
