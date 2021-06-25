


// クエストテキストをjsonから取得処理
fetch("sample.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  console.log(data[storedInput])//ログで確認
  document.querySelector("#quest").innerText = data[storedInput]//クラスquestにテキストを表示する
})



const button = document.querySelector('.button');//次のステージボタン
const button1 = document.querySelector('.button1');//前のステージボタン
const storedInput = localStorage.getItem('stage');//ローカルストレージ
const box = document.querySelector('.stage');//ステージの番号表示するpタグ


//Buttonのクリックした場合
button1.addEventListener('click',goBackStage)
button.addEventListener('click',saveNextStage)



//ローカルストレージにアプデ



//ステージクリアの場合の処理
const saveNextStage = () => {//functionと同じ物
  // localStogage.setItem("key",value)


  localStorage.setItem('stage',Number(storedInput)+1)//ローカルストレージのステージ＋１
  localStorage.setItem('Mstage',Number(storedInput)+1)//現在どこまで進んだのをカウントする

  location.reload();//ページリロード
}

//前のクエストにもどる
const goBackStage = () => {
  // localStogage.setItem("key",value)
  localStorage.setItem('stage',Number(storedInput)-1)//ローカルストレージのステージ-1（前に戻すため)
  localStorage.setItem('Mstage',Number(storedInput)-1)//これは後で消す（既にクリアしてあるステージに”次のステージに進”ボタンは存在しない場合だから

    location.reload();
}


if(storedInput){
  box.textContent ="stage   " + storedInput　　　　//現在のステージを表示する
}
