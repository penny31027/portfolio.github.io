var s = skrollr.init();

$(window).scroll(function(event){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
});