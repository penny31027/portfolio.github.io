var shoplist={};
shoplist.name="MyBuyList 購物清單";
shoplist.time="2022/11/03";
shoplist.list=[
  {name:"吹風機",price:300},
  {name:"麥克筆",price:90},
  {name:"筆記型電腦",price:50000},
  {name:"iphone 9",price:35000},
  {name:"投影機",price:5000}
];

var item_html="<li class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{id}} data-num={{dnum}} class='del_btn'>X刪除</div></li>"; //id={{del_id}} data-delid={{del_item_id}}
var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

function showlist(){
  $("#items_list").html("");
  var total_price=0;
  for (var i=0;i<shoplist.list.length;i++){
    var item=shoplist.list[i];    
    var item_id="buyitem_"+i;
    total_price+=parseInt(item.price); //parseInt轉換成純數字
    // console.log(total_price);
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{id}}",item_id)
                 .replace("{{dnum}}",i)
                 .replace("{{price}}",item.price);  
    $("#items_list").append(current_item_html);
    $("#"+item_id).click(function(){
      remove_item($(this).attr("data-num"));
    });
  };
  var current_total_html=
      total_html.replace("{{price}}",total_price);
  $("#items_list").append(current_total_html);
};
showlist();


$(".addbtn").click(function(){
  shoplist.list.push({
    name:$("#input_name").val(),
    price:$("#input_price").val()
  });
  $("#input_name").val(""); //新增完自動歸零
  $("#input_price").val("");
  showlist();
});



function remove_item(id){
  shoplist.list.splice(id,1); // splice(slice強化版 刪除第幾&刪除幾個
  showlist();
};