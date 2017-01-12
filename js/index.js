var shoplist={};

shoplist.name="我的購物清單";
shoplist.time="2016/12/12";
shoplist.list=[
  {
    name: "鬥陣特攻",
    price: 1900
  },
  {
    name: "Acer Swift 5",
    price: 32900
  },
  {
    name: "筆記型探針",
    price: 3000
  },
  {
    name: "黃蜂離子式手套",
    price: 5990
  },
  {
    name: "全覆蓋透光風沙套裝",
    price: 7990
  },
];

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='delbtn'>X</div></li>";

var total_html="<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

function showlist(){
  $("#item_list").html("");
  var total_price = 0;
  for(var i=0; i<shoplist.list.length;i++){
    var item=shoplist.list[i];
    var item_id = "buy_item_"+i;
    var del_item_id="del_buyitem_"+i;
    
    total_price+= parseInt(item.price);
    var current_item_html = item_html.replace("{{num}}",i+1)
                                     .replace("{{item}}", item.name)
                                     .replace("{{id}}", item_id)
                                     .replace("{{del_id}}",del_item_id)
                                     .replace("{{price}}", item.price)
                                     .replace("{{del_item_id}}",i)
    ;
    $("#item_list").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        remove_item(parseInt($(this).attr("data-delid")));
      }
    );
  }
  var current_total_html = total_html.replace("{{price}}", total_price);
  $("#item_list").append(current_total_html);
}

showlist(); 
  
$(".addbtn").click(
  function()
  {
    shoplist.list.push(
      {
        name:$("#input_name").val(),
        price:$("#input_price").val()
    });
    $("#input_name").val("");
    $("#input_price").val("");
    showlist();
  
});

function remove_item(id){
  shoplist.list.splice(id, 1);
  showlist();
}