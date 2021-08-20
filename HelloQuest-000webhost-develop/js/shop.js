const checkbox= document.getElementById("check_box_check")
const bought =document.getElementById("bought")


checkbox.style.display="none"
//ユーザーのコイン
 user_coin = document.getElementById("user_coin")
user_coin.innerHTML = localStorage.getItem("user_coin")


 var obj1 = document.getElementById("shopitem1")
 var x1 = localStorage.getItem(obj1.id)
   if(x1 =="1"){
        obj1.style.display="none"
        
    }
 var obj2 = document.getElementById("shopitem2")
 var x2 = localStorage.getItem(obj2.id)
   if(x2 =="1"){
        obj2.style.display="none"
        
    }

 
 var obj3 = document.getElementById("shopitem3")
 var x3 = localStorage.getItem(obj3.id)
   if(x3 =="1"){
        obj3.style.display="none"
        
    }
 var obj4 = document.getElementById("shopitem4")
 var x4 = localStorage.getItem(obj4.id)
   if(x4 =="1"){
        obj4.style.display="none"
        
    }
 var obj5 = document.getElementById("shopitem5")
 var x5 = localStorage.getItem(obj5.id)
   if(x5 =="1"){
        obj5.style.display="none"
        
    }
    // var x = localStorage.getItem(obj.id)
    // console.log(x)
   



function clickhtml() {
    console.log("Html クリック");
}
function clickcss() {
    console.log("css クリック");
}
function clickPurchase(obj,obj2) {
    var shopdesname = document.getElementById("shop_item_name")
    shopdesname.innerHTML= obj2
    var itemid = obj
    document.getElementById("itemid1").value = itemid
    
    var ximg=document.getElementById("itemimg1")
    ximg.src="../images/shop/" + itemid+".png"
    console.log(ximg)
    checkbox.style.display="block"

}
