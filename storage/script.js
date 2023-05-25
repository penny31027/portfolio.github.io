var num=12;
check();

function click(num_var){
  num=num+num_var;
  $(".num").text(num);
}

function check(){
  if (num<10){
    $(".text").text("數量極少!");
    $(".text").css("border-color","#FF6505")
    $(".text").css("color","#FF6505")
    $(".fill_stock").addClass("fill_stock_open")
  }else if (num<20){
    $(".text").text("賣得不錯喔!");
    $(".text").css("border-color","#FFCD05")
    $(".text").css("color","#FFCD05")
    $(".fill_stock").removeClass("fill_stock_open") 
  }else{
    $(".text").text("還剩很多!");
    $(".text").css("border-color","#FFf")
    $(".text").css("color","#FFf")
    $(".fill_stock").removeClass("fill_stock_open")
  }
}


$(".minus").click(
  function(){
    click(-1);
    
    check();
  }
);

$(".add").click(
  function(){
    click(1);
    
    check();
  }
);
var isCounting=false
var waittime=0;
$(".fill_stock").click(
  function(){
    if (isCounting==false){
      setInterval(
      function(){
        waittime+=1;
        $(".fill_stock").text("☎聯絡中..."+waittime);
      },1000);
      isCounting=true;
    }
    
  }
);