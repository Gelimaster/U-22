//最後に入ったページにセットする
localStorage.setItem("path_url","/mypage.php")
    var shop = document.getElementById("link3000")
    var custom = document.getElementById("link4000")


if(parseInt(localStorage.getItem("user_stage"))< 13){
    shop.href="javascript:void(0)"
    custom.href="javascript:void(0)"
    shop.style.backgroundColor="gray"
    custom.style.backgroundColor="gray"
}