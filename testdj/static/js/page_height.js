var window_height=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if(window_height<=538){
    window_height = 538;
}
if(window_height>=800)
{
    window_height = 800;
}

function adjust_page(){
    var pages = document.getElementsByClassName("page_box");
    for(var i=0; i<pages.length; i++){
        pages[i].style.height = window_height + 'px';
    }
    
}
adjust_page();