// slide
setInterval(function(){
    $(".slide ul").delay(1000);
    $(".slide ul").animate({
        marginLeft: '-460px'
    })
    $(".slide ul").delay(1000);
    $(".slide ul").animate({
        marginLeft: '-920px'
    })
    $(".slide ul").delay(1000);
    $(".slide ul").animate({
        marginLeft: '-460px'
    })
    $(".slide ul").delay(1000);
    $(".slide ul").animate({
        marginLeft: '0px'
    })
    $(".slide ul").animate({
        marginLeft: '0px'
    })
});
// tab
$("#board li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});
const vibration = (target) => {
    target.classList.add("vibration");
  
    setTimeout(function() {
      target.classList.remove("vibration");
    }, 400);
  }