// slide
setInterval(function(){
    $(".slide ul").delay(2500);
    $(".slide ul").animate({
        marginLeft: '-1920px'
    })
    $(".slide ul").delay(2500);
    $(".slide ul").animate({
        marginLeft: '-3840px'
    })
    $(".slide ul").delay(2500);
    $(".slide ul").animate({
        marginLeft: '-5760px'
    },0)
    $(".slide ul").animate({
        marginLeft: '0px'
    })
});
// tab
$("#board li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});