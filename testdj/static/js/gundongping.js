// setInterval(loaddata,3000);
// setInterval(alarm_1,3000);
// function loaddata() {
//         $.ajax({
//             type: "GET",
//             url: "/homepage/scroll/post/",
//             dataType: "json",
//             async: true,
//             // data: {
//             //    // csrfmiddlewaretoken: '{{csrf_token}}',
//             // },
//             // cache: false,
//             // async: false,
//             success: function (result) {
//                     $("#box").niceScroll();  // hw acceleration enabled when using wrapper
//                     document.getElementById("time1").innerHTML = "<span style='background: red'>"+result[0].start_time+"</span>";
//                     document.getElementById("time2").innerHTML = "<span style='background: red'>"+result[1].start_time+"</span>";
//                     document.getElementById("time3").innerHTML = "<span style='background: red'>"+result[2].start_time+"</span>";
//                     document.getElementById("time4").innerHTML = "<span style='background: red'>"+result[3].start_time+"</span>";
//                     document.getElementById("time5").innerHTML = "<span style='background: red'>"+result[4].start_time+"</span>";
//                     document.getElementById("time6").innerHTML = "<span style='background: red'>"+result[5].start_time+"</span>";
//                     document.getElementById("time7").innerHTML = "<span style='background: red'>"+result[6].start_time+"</span>";
//                     document.getElementById("time8").innerHTML = "<span style='background: red'>"+result[7].start_time+"</span>";
//                     document.getElementById("time9").innerHTML = "<span style='background: red'>"+result[8].start_time+"</span>";
//                     document.getElementById("time10").innerHTML = "<span style='background: red'>"+result[9].start_time+"</span>";
//                     document.getElementById("time11").innerHTML = "<span style='background: red'>"+result[10].start_time+"</span>";
//                     document.getElementById("time12").innerHTML = "<span style='background: red'>"+result[11].start_time+"</span>";
//                     document.getElementById("street1").innerHTML = "<span style='background: yellow'>"+result[0].location+"</span>";
//                     document.getElementById("street2").innerHTML = "<span style='background: yellow;'>"+result[1].location+"</span>";
//                     document.getElementById("street3").innerHTML = "<span style='background: yellow;'>"+result[2].location+"</span>";
//                     document.getElementById("street4").innerHTML = "<span style='background: yellow;'>"+result[3].location+"</span>";
//                     document.getElementById("street5").innerHTML = "<span style='background: yellow;'>"+result[4].location+"</span>";
//                     document.getElementById("street6").innerHTML = "<span style='background: yellow;'>"+result[5].location+"</span>";
//                     document.getElementById("street7").innerHTML = "<span style='background: yellow;'>"+result[6].location+"</span>";
//                     document.getElementById("street8").innerHTML = "<span style='background: yellow;'>"+result[7].location+"</span>";
//                     document.getElementById("street9").innerHTML = "<span style='background: yellow;'>"+result[8].location+"</span>";
//                     document.getElementById("street10").innerHTML ="<span style='background: yellow;'>"+result[9].location+"</span>";
//                     document.getElementById("street11").innerHTML = "<span style='background: yellow;'>"+result[10].location+"</span>";
//                     document.getElementById("street12").innerHTML = "<span style='background: yellow;'>"+result[11].location+"</span>";
//                     document.getElementById("type1").innerHTML = "<span style='background: orange;'>"+result[0].event+"</span>";
//                     document.getElementById("type2").innerHTML = "<span style='background: orange;'>"+result[1].event+"</span>";
//                     document.getElementById("type3").innerHTML = "<span style='background: orange;'>"+result[2].event+"</span>";
//                     document.getElementById("type4").innerHTML = "<span style='background: orange;'>"+result[3].event+"</span>";
//                     document.getElementById("type5").innerHTML = "<span style='background: orange;'>"+result[4].event+"</span>";
//                     document.getElementById("type6").innerHTML = "<span style='background: orange;'>"+result[5].event+"</span>";
//                     document.getElementById("type7").innerHTML = "<span style='background: orange;'>"+result[6].event+"</span>";
//                     document.getElementById("type8").innerHTML = "<span style='background: orange;'>"+result[7].event+"</span>";
//                     document.getElementById("type9").innerHTML = "<span style='background: orange;'>"+result[8].event+"</span>";
//                     document.getElementById("type10").innerHTML ="<span style='background: orange;'>"+result[9].event+"</span>";
//                     document.getElementById("type11").innerHTML = "<span style='background: orange;'>"+result[10].event+"</span>";
//                     document.getElementById("type12").innerHTML = "<span style='background: orange;'>"+result[11].event+"</span>";
                    
//                     document.getElementById("alarm1").innerHTML = "<span>"+result2[0]+"</span>";
//                     document.getElementById("alarm2").innerHTML = "<span>"+result2[1]+"</span>";
//                     document.getElementById("alarm3").innerHTML = "<span>"+result2[2]+"</span>";
//                     document.getElementById("alarm4").innerHTML = "<span>"+result2[3]+"</span>";
//                     document.getElementById("alarm5").innerHTML = "<span>"+result2[4]+"</span>";
//                     document.getElementById("alarm6").innerHTML = "<span>"+result2[5]+"</span>";
//                     document.getElementById("alarm7").innerHTML = "<span>"+result2[6]+"</span>";
//                     document.getElementById("alarm8").innerHTML = "<span>"+result2[7]+"</span>";                //});
//             },
//             error: function (err) {
//                 alert(XMLHttpRequest.readyState);
//             }
//         })
// }
// function alarm_1() {
//         $.ajax({
//             type: "GET",
//             url: "/homepage/alarm/post/",
//             dataType: "json",
//             async: true,
//             // data: {
//             //     csrfmiddlewaretoken: '{{csrf_token}}',
//             // },
//             // cache: false,
//             // async: false,
//             success: function (result2) {
//                    // alert(result2[1]);
//                     document.getElementById("alarm1").innerHTML = "<span>"+result2[0]+"</span>";
//                     document.getElementById("alarm2").innerHTML = "<span>"+result2[1]+"</span>";
//                     document.getElementById("alarm3").innerHTML = "<span>"+result2[2]+"</span>";
//                     document.getElementById("alarm4").innerHTML = "<span>"+result2[3]+"</span>";
//                     document.getElementById("alarm5").innerHTML = "<span>"+result2[4]+"</span>";
//                     document.getElementById("alarm6").innerHTML = "<span>"+result2[5]+"</span>";
//                     document.getElementById("alarm7").innerHTML = "<span>"+result2[6]+"</span>";
//                     document.getElementById("alarm8").innerHTML = "<span>"+result2[7]+"</span>";
// //            alert("hiohiuhs");
//                     // document.getElementById("alarm2").innerHTML = "rjyrfiyd8";
//                     // document.getElementById("alarm3").innerHTML = "result2[2]";
//                     // document.getElementById("alarm4").innerHTML = "result2[3]";
//                     // document.getElementById("alarm5").innerHTML = "result2[4]";
//                     // document.getElementById("alarm6").innerHTML = "result2[5]";
//                     // document.getElementById("alarm7").innerHTML = "result2[6]";
//                     // document.getElementById("alarm8").innerHTML = "result2[7]";

//            },
//             error: function (err) {
//                 alert(XMLHttpRequest.readyState);
//             }
//         })
// }


setInterval(loaddata,500);
function loaddata() {
        $.ajax({
            type: "GET",
            url: "/homepage/scroll/post/",
            dataType: "json",
            async: true,
            // data: {
            //    // csrfmiddlewaretoken: '{{csrf_token}}',
            // },
            // cache: false,
            // async: false,
            success: function (result) {
                    $("#box").niceScroll();  // hw acceleration enabled when using wrapper
                    // alarm1.innerHTML = "<span>"+result['alarm_list'][0]+"</span>";
                    // console.log(alarm1);
                    // alarm2.innerHTML = "<span>"+result['alarm_list'][1]+"</span>";
                    // alarm3.innerHTML = "<span>"+result['alarm_list'][2]+"</span>";
                    // alarm4.innerHTML = "<span>"+result['alarm_list'][3]+"</span>";
                    // alarm5.innerHTML = "<span>"+result['alarm_list'][4]+"</span>";
                    // alarm6.innerHTML = "<span>"+result['alarm_list'][5]+"</span>";
                    // alarm7.innerHTML = "<span>"+result['alarm_list'][6]+"</span>";
                    // alarm8.innerHTML = "<span>"+result['alarm_list'][7]+"</span>"; 
                    // alarm1.innerHTML = "<span>"+result['alarm_list'][0]+"</span>";
                    //console.log(alarm1);
                    var news_div_con = document.getElementById("news_div").getElementsByTagName('span');
                    //alert( news_div_con[1].className);
                    switch(news_div_con[1].className)
                    {
                        case "alarm1": 
                            news_div_con[1].innerText = result['alarm_list'][0];
                            break;
                        case "alarm2": 
                            news_div_con[1].innerText = result['alarm_list'][1];
                            break;
                        case "alarm3": 
                            news_div_con[1].innerText = result['alarm_list'][2];
                            break;
                        case "alarm4": 
                            news_div_con[1].innerText = result['alarm_list'][3];
                            break;
                        case "alarm5":
                             news_div_con[1].innerText = result['alarm_list'][4];
                             break;
                        case "alarm6": 
                            news_div_con[1].innerText = result['alarm_list'][5];
                            break;
                        case "alarm7": 
                            news_div_con[1].innerText = result['alarm_list'][6];
                            break;
                        case "alarm8": 
                            news_div_con[1].innerText = result['alarm_list'][7];
                            break;
                    }
                    // var alarm1 = document.getElementsByClassName("alarm1")[0];
                    // var alarm2 = document.getElementsByClassName("alarm2")[0];
                    // var alarm3 = document.getElementsByClassName("alarm3")[0];
                    // var alarm4 = document.getElementsByClassName("alarm4")[0];
                    // var alarm5 = document.getElementsByClassName("alarm5")[0];
                    // var alarm6 = document.getElementsByClassName("alarm6")[0];
                    // var alarm7 = document.getElementsByClassName("alarm7")[0];
                    // var alarm8 = document.getElementsByClassName("alarm8")[0];
                    // alarm2.innerText = result['alarm_list'][1];
                    // alarm3.innerText = result['alarm_list'][2];
                    // alarm4.innerText = result['alarm_list'][3];
                    // alarm5.innerText = result['alarm_list'][4];
                    // alarm6.innerText = result['alarm_list'][5];
                    // alarm7.innerText = result['alarm_list'][6];
                    // alarm8.innerText = result['alarm_list'][7]; 
                    document.getElementById("time1").innerHTML = "<span style='background: red'>"+result['scroll_list'][0].start_time+"</span>";
                    document.getElementById("time2").innerHTML = "<span style='background: red'>"+result['scroll_list'][1].start_time+"</span>";
                    document.getElementById("time3").innerHTML = "<span style='background: red'>"+result['scroll_list'][2].start_time+"</span>";
                    document.getElementById("time4").innerHTML = "<span style='background: red'>"+result['scroll_list'][3].start_time+"</span>";
                    document.getElementById("time5").innerHTML = "<span style='background: red'>"+result['scroll_list'][4].start_time+"</span>";
                    document.getElementById("time6").innerHTML = "<span style='background: red'>"+result['scroll_list'][5].start_time+"</span>";
                    document.getElementById("time7").innerHTML = "<span style='background: red'>"+result['scroll_list'][6].start_time+"</span>";
                    document.getElementById("time8").innerHTML = "<span style='background: red'>"+result['scroll_list'][7].start_time+"</span>";
                    document.getElementById("time9").innerHTML = "<span style='background: red'>"+result['scroll_list'][8].start_time+"</span>";
                    document.getElementById("time10").innerHTML = "<span style='background: red'>"+result['scroll_list'][9].start_time+"</span>";
                    document.getElementById("time11").innerHTML = "<span style='background: red'>"+result['scroll_list'][10].start_time+"</span>";
                    document.getElementById("time12").innerHTML = "<span style='background: red'>"+result['scroll_list'][11].start_time+"</span>";
                    document.getElementById("street1").innerHTML = "<span style='background: yellow'>"+result['scroll_list'][0].location+"</span>";
                    document.getElementById("street2").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][1].location+"</span>";
                    document.getElementById("street3").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][2].location+"</span>";
                    document.getElementById("street4").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][3].location+"</span>";
                    document.getElementById("street5").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][4].location+"</span>";
                    document.getElementById("street6").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][5].location+"</span>";
                    document.getElementById("street7").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][6].location+"</span>";
                    document.getElementById("street8").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][7].location+"</span>";
                    document.getElementById("street9").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][8].location+"</span>";
                    document.getElementById("street10").innerHTML ="<span style='background: yellow;'>"+result['scroll_list'][9].location+"</span>";
                    document.getElementById("street11").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][10].location+"</span>";
                    document.getElementById("street12").innerHTML = "<span style='background: yellow;'>"+result['scroll_list'][11].location+"</span>";
                    document.getElementById("type1").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][0].event+"</span>";
                    document.getElementById("type2").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][1].event+"</span>";
                    document.getElementById("type3").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][2].event+"</span>";
                    document.getElementById("type4").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][3].event+"</span>";
                    document.getElementById("type5").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][4].event+"</span>";
                    document.getElementById("type6").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][5].event+"</span>";
                    document.getElementById("type7").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][6].event+"</span>";
                    document.getElementById("type8").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][7].event+"</span>";
                    document.getElementById("type9").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][8].event+"</span>";
                    document.getElementById("type10").innerHTML ="<span style='background: orange;'>"+result['scroll_list'][9].event+"</span>";
                    document.getElementById("type11").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][10].event+"</span>";
                    document.getElementById("type12").innerHTML = "<span style='background: orange;'>"+result['scroll_list'][11].event+"</span>";
                    // alert(result['alarm_list'][1]);
                    // var ele = document.getElementsByClassName("alarm1");
                    // if (ele == null) {
                    //     alert("null");
                    // }
                    // else {
                    //     alert("here");
                    // }
                    
                      
                    
                    // document.getElementById("alarm1").innerText = result['alarm_list'][0];
                    // document.getElementById("alarm2").innerText = result['alarm_list'][1];
                    // document.getElementById("alarm3").innerText = result['alarm_list'][2];
                    // document.getElementById("alarm4").innerText = result['alarm_list'][3];
                    // document.getElementById("alarm5").innerText = result['alarm_list'][4];
                    // document.getElementById("alarm6").innerText = result['alarm_list'][5];
                    // document.getElementById("alarm7").innerText = result['alarm_list'][6];
                    // document.getElementById("alarm8").innerText = result['alarm_list'][7];             
                //});
            },
            error: function (err) {
                alert(XMLHttpRequest.readyState);
            }
        })
}
