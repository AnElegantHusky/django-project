
$(document).ready(function() {
    $("#box").niceScroll("#box .wrapper",{boxzoom:true});  // hw acceleration enabled when using wrapper
});
var box_gundong = document.getElementById('box')

var parent_gundong = document.getElementById('list1')

var parent2_gundong = document.getElementById('list2')

parent2_gundong.innerHTML = parent_gundong.innerHTML

/*启动定时器*/

var timer = setInterval(autoScrollLine,30)

/*单行向上滚动效果*/

function autoScrollLine() {

    /*判断滚动内容是否已经滚完，滚完了则滚动的值重新设置到0

      否则就每隔30毫秒向上滚动1px*/

    if(box_gundong.scrollTop>=parent_gundong.offsetHeight){

        box_gundong.scrollTop=0;

    }else{

        box_gundong.scrollTop++;

    }

    /*判断滚动的距离刚好为一条公告的高度时停掉定时器，

       隔1s之后重新启动定时器即可实现公告滚动停留效果 */

    if(box_gundong.scrollTop%box_gundong.offsetHeight==0){

        clearInterval(timer)

        setTimeout(()=>{

            timer = setInterval(autoScrollLine,80)

        },1000)

    }

}

