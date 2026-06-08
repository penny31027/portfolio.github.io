var button_audio=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");
$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
  button_audio.play();
})
$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","420px");
  $(".phonename").text($(this).text());
  button_audio.play();
})
$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phonename").text($(this).text());
  button_audio.play();
})
$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();
})

var screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");
// 畫面左移右移
var page=0;
$(".screen").click(function(){
  page+=1; 
  if (page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
  screen_audio.play();
});
  
var home_audio=new Audio("https://monoame.com/awi_class/ballsound/click23.wav");
$(".button").click(function(){
  page=0;
  $(".pages").css("left","-"+page*100+"%");
  home_audio.play();
});

var rotatetime=0;
$(".turn").click(function(){
  rotatetime+=1;
  console.log(rotatetime);
  $(".phone").css("transform","rotate("+360*rotatetime+"deg)");
});

var wiggle_audio=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");
$(".wiggle").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});

var wiggletime=21;
setInterval(function(){
  if (wiggletime<=20){
    wiggletime+=1;
    console.log(wiggletime);
    if (wiggletime%2==0){
      $(".phone").css("left","-30px");
    }else{
      $(".phone").css("left","30px");
    }
  }else{
    $(".phone").css("left","");
  }
},60);