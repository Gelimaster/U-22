


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
function checkanswer() {
  //正しい要素を使ってるかどうかの確認

  if (answer == playeranswer) {
    document.querySelector("#answer").innerText = "正解";
    
    // クリア画面の表示
    clearbox.style.visibility = "visible";
    rewarddis();
    
    // コントロール
    control();

  } else {
    document.querySelector("#answer").innerText = "ハズレ";
  }



}

// クエスト選択画面へ戻る
function moveqc() {
  window.history.back();
}

function rewarddis() {
  // クエストテキストをjsonから取得処理
  const qestnum = [];
  const reward_coin = [];
  const reward_item = [];
  $.getJSON('json/quest/reward.json', (data) => {
    // console.log(data);

    for (i = 0; i < data.length; i++) {
      if (data[i] != null) {
        qestnum.push(data[i].qestnum);
        reward_coin.push(data[i].reward_coin);
        reward_item.push(data[i].reward_item);
      }
    }
    const index = qestnum.indexOf(Number(now_stage));
    if (!(index === -1)) {
      // 報酬のデータを入れる
      reward.innerHTML = "コイン×" + reward_coin[index] + "<br>" + reward_item[index];
    }

  });
}

function control() {
  var nstage = parseInt(now_stage[1]);
  var nstage0 = parseInt(now_stage[0]);
  if (nstage == 3) {
    localStorage.setItem("stage", parseInt(now_stage) + 10 - 2);
  } else {
    localStorage.setItem("stage", parseInt(now_stage) + 1);
  }
  location.reload();
  console.log(now_stage);
}