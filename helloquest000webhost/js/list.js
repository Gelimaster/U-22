const describe = document.getElementById("describe")
describe.style.display="none"
//ユーザーのコイン
const user_coin = document.getElementById("user_coin")
user_coin.innerHTML = localStorage.getItem("user_coin")

var shopitem1 = document.getElementById("shopitem1")
var x1 = localStorage.getItem(shopitem1.id)
if(x1 != "1"){
    shopitem1.style.display="none"
}
var shopitem2 = document.getElementById("shopitem2")
var x2 = localStorage.getItem(shopitem2.id)
if(x2 != "1"){
    shopitem2.style.display="none"
}
var shopitem3 = document.getElementById("shopitem3")
var x3 = localStorage.getItem(shopitem3.id)
if(x3 != "1"){
    shopitem3.style.display="none"
}
var shopitem4 = document.getElementById("shopitem4")
var x4 = localStorage.getItem(shopitem4.id)
if(x4 != "1"){
    shopitem4.style.display="none"
}
var shopitem5 = document.getElementById("shopitem5")
var x5 = localStorage.getItem(shopitem5.id)
if(x5 != "1"){
    shopitem5.style.display="none"
}





var reward4 = document.getElementById("reward4")
var x6 = localStorage.getItem(reward4.id)
if(x6 != "1"){
  document.getElementById("rewardimg4").src="../images/shop/mystery.png";
  document.getElementById("btn4").style.display="none";
}
var reward5 = document.getElementById("reward5")
var x7 = localStorage.getItem(reward5.id)
if(x7 != "1"){
  document.getElementById("rewardimg5").src="../images/shop/mystery.png";
  document.getElementById("btn5").style.display="none";
}
var reward6 = document.getElementById("reward6")
var x8 = localStorage.getItem(reward6.id)
if(x8 != "1"){
  document.getElementById("rewardimg6").src="../images/shop/mystery.png";
  document.getElementById("btn6").style.display="none";
}
var reward7 = document.getElementById("reward7")
var x9 = localStorage.getItem(reward7.id)
if(x9 != "1"){
  document.getElementById("rewardimg7").src="../images/shop/mystery.png";
  document.getElementById("btn7").style.display="none";
}
var reward8 = document.getElementById("reward8")
var x10 = localStorage.getItem(reward8.id)
if(x10 != "1"){
  document.getElementById("rewardimg8").src="../images/shop/mystery.png";
  document.getElementById("btn8").style.display="none";
}


function clickhtml() {
    console.log("Html クリック");
}
function clickcss() {
    console.log("css クリック");
}
function clickDetails(obj,obj1) {
    var des = document.getElementById("itemdescribe")
    des.innerHTML="アイテム説明 <br>" + obj1
    var itemid = obj
    console.log(obj)
    var ximg=document.getElementById("itemimg1")
    ximg.src="../images/shop/" + itemid+".png"
    console.log(ximg)
    
    describe.style.display="block"
}
function clickDetails1(obj,obj1) {
    var des = document.getElementById("itemdescribe")
    des.innerHTML="アイテム説明 <br>" + obj1
    var itemid = obj
    console.log(obj)
    var ximg=document.getElementById("itemimg1")
    ximg.src="../images/shop/r" + itemid+".png"
    console.log(ximg)
    
    describe.style.display="block"
}
