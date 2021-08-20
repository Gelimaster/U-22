


// クエストテキストをjsonから取得処理
fetch("json/quest/hint.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
    if(typeof storedInput === undefined){
        location.reload()
    }
   console.log(data[storedInput])//ログで確認
  document.querySelector("#hint_text").innerText = data[storedInput]//クラスquestにテキストを表示する
})
