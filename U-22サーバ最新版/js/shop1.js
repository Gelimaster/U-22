bought.style.display="none"
// localStorage.setItem("user_coin",1000)

const item_price = document.getElementById("itemprice").value
parseInt(item_price)
var coin_box= document.getElementById("con")
var coin_box2= document.getElementById("con1")

user_coin = localStorage.getItem("user_coin")
parseInt(user_coin)

const calculation =user_coin - item_price
coin_box.innerHTML= user_coin +"→"+　calculation　
if(calculation <0){
    var buybox = document.getElementById("itemtxt1")
    var buybox1 = document.getElementById("itemtxt2")
    var buybutton = document.getElementById("buyitem1")
    buybutton.style.display="none"
    buybox.innerHTML="コインが足りません"
    buybox1.innerHTML="  "
}


function clickcancel() {
    const checkbox= document.getElementById("check_box_check");
    checkbox.style.display="none"
}



function clickok() {
    var itemid = "shopitem" + document.getElementById("itemid1").value
    
    localStorage.setItem(itemid,1)    
    localStorage.setItem("user_coin",calculation)

    checkbox.style.display="none"
    bought.style.display="block"
    

}


