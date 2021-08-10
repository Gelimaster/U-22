


var asnwer;




// クエストの答えを取得処理
fetch("json/quest/answer.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  answer = data[storedInput]//クラスquestにテキストを表示する
  console.log(answer)
})

var playeranswer = localStorage.getItem("playeranswer")




//答えの比較処理
function checkanswer(){
    //正しい要素を使ってるかどうかの確認

  if(answer == playeranswer){
    document.querySelector("#answer").innerText = "正解";
  }else{
    document.querySelector("#answer").innerText = "ハズレ";
  }

  
  
}
