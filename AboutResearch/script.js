// var s = skrollr.init();
skrollr.init({
  mobileCheck: function() {
    //hack - forces mobile version to be off
    return false;
  }
});

$(window).scroll(function(event){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
});
