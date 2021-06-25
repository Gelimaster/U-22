


var asnwer;
var asnwertag;




// クエストの答えを取得処理
fetch("asnwer.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  asnwer = data[storedInput]//クラスquestにテキストを表示する
})

// 答えのタグを取得処理
fetch("asnwertag.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  asnwertag = data[storedInput]//クラスquestにテキストを表示する
})

function checkanswer(){
  const playerasnwer = localStorage.getItem('playerasnwer');//ローカルストレージ
  const playertag = localStorage.getItem('playertag');//ローカルストレージ
  if(playertag == asnwertag ){
    if(playerasnwer == asnwer){
      console.log("正解");
    }else{
      console.log("ハズレ");
    }
  }else{
    console.log("ハズレ");
  }   
}