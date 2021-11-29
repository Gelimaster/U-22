//最後に入ったページにセットする
localStorage.setItem("path_url", "/profile.php")
//情報を取得    
var sex = document.getElementsByClassName("sex")
var sex1 = document.getElementById("sex1").value



//ユーザー名が空白の場合確定ボタン処理
document.getElementById("name").addEventListener("keyup",function(event){
    if (!event.key=="") {
      if (!document.getElementById("name").value =="") {
        document.getElementById("sub").disabled=""
        document.getElementById("sub").style.backgroundColor="#ffd153"
      }else {
        document.getElementById("sub").disabled="disabled"
        document.getElementById("sub").style.backgroundColor="gray"
        }
    }
  })


//性別判断処理
if (sex1 == "男") {
    sex[0].checked = "true"
} else {
    sex[1].checked = "true"
}


function goback() {
    window.history.back();
}

