const checkbox= document.getElementById("check_box_check")
const bought =document.getElementById("bought")
checkbox.style.display="none"
//ユーザーのコイン
const user_coin = document.getElementById("user_coin")
user_coin.innerHTML = localStorage.getItem("user_coin")


function clickhtml() {
    console.log("Html クリック");
}
function clickcss() {
    console.log("css クリック");
}
function clickPurchase() {
    checkbox.style.display="block"

}
