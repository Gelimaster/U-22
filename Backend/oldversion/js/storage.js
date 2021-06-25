


// クエストテキストをjsonから取得処理
fetch("sample.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  document.querySelector("#quest").innerText = data[storedInput]//クラスquestにテキストを表示する
})




const storedInput = localStorage.getItem('stage');//ローカルストレージ
const box = document.querySelector('.stage');//ステージの番号表示するpタグ



//ローカルストレージにアプデ






if(storedInput){
  box.textContent ="stage   " + storedInput　　　　//現在のステージを表示する
}





