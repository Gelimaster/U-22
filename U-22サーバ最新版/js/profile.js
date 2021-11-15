//最後に入ったページにセットする
localStorage.setItem("path_url", "/profile.php")
//情報を取得    
var sex = document.getElementsByClassName("sex")
var sex1 = document.getElementById("sex1").value




//性別判断処理
if (sex1 == "男") {
    sex[0].checked = "true"
} else {
    sex[1].checked = "true"
}


function goback() {
    window.history.back();
}

