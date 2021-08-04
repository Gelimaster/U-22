const describe = document.getElementById("describe")
describe.style.display="none"
//ユーザーのコイン
const user_coin = document.getElementById("user_coin")
user_coin.innerHTML = localStorage.getItem("user_coin")



function clickhtml() {
    console.log("Html クリック");
}
function clickcss() {
    console.log("css クリック");
}
function clickDetails() {
    describe.style.display="block"
}
