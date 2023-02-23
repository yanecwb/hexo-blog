// 动态心跳
$(document).ready(function(e){
    // $('.copyright').html('©2021 <i class="fa-fw fas fa-heart card-announcement-animation cc_pointer"></i> By 花猪');

    // FPS
    (function(){
        var requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000/60);
            };
        var fps,last,offset,step,appendFps;

        fps = 0;
        last = Date.now();
        step = function(){
            offset = Date.now() - last;
            fps += 1;
            if( offset >= 1000 ){
            last += offset;
            appendFps(fps);
            fps = 0;
            }
            requestAnimationFrame( step );
        };
        appendFps = function(fps){
            document.querySelector('#fps').innerHTML = fps+'FPS'
        };
        step();
    })();
    $('.footer')[0].style.position = 'absolute'
    $('.footer')[0].style.bottom = '-150px'
    $('.footer')[0].style.width = '100%'
})

$(document).ready(function(e){
    $('.footer-inner').append('<p id="span_dt_dt" style="color: #999;">000</p>');
    show_date_time();
})

//本站运行时间
function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("1/05/2022 00:00:00");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
$('#span_dt_dt')[0].innerText=`本站已运行：${daysold}天${hrsold}时${minsold}分${seconds}秒`
}