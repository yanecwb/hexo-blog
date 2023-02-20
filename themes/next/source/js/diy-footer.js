// 动态心跳
$(document).ready(function(e){
    // $('.copyright').html('©2021 <i class="fa-fw fas fa-heart card-announcement-animation cc_pointer"></i> By 花猪');
    console.log($('.footer'));
    $('.footer')[0].style.position = 'absolute'
    $('.footer')[0].style.bottom = '-130px'
    $('.footer')[0].style.width = '100%'
})

$(document).ready(function(e){
    $('.footer-inner').append('<p id="span_dt_dt" style="color: #999;">000</p>');
    show_date_time();
})

//本站运行时间
function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("1/20/2021 0:0:0");
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