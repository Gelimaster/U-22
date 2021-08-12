


var asnwer;
var playeranswercss;
var playeranswer;

var clearbox = document.getElementById("clearbox");
var reward = document.getElementById("reward");
const now_stage = localStorage.getItem("stage");


// クエストの答えを取得処理
fetch("json/quest/answer.json")//ファイル指定
  .then(response => response.json())//ファイルのタイプを教える
  .then(data => {
    // console.log(data[storedInput])//ログで確認
    answer = data[storedInput]//クラスquestにテキストを表示する
    
  })


var currentstage = localStorage.getItem("stage")
    parseInt(currentstage)

//答えの比較処理
function checkanswer() {
    playeranswer = localStorage.getItem("playeranswer")
    playeranswercss = localStorage.getItem("answercss")
    cleartext = document.getElementById("cleartext")

    console.log(answer)
    console.log(playeranswer)
  //正しい要素を使ってるかどうかの確認

  if(currentstage == 22 || currentstage ==  31){
    if (answer == playeranswercss) {
      document.querySelector("#answer").innerText = "正解";
      
      // クリア画面の表示
      clearbox.style.visibility = "visible";
       if(localStorage.getItem("user_stage") <= localStorage.getItem("stage")){
         cleartext.innerHTML="報酬"
        rewarddis();
      }
      
      // コントロール
      if(localStorage.getItem("user_stage") <= localStorage.getItem("stage")){
      control();    
      }

    } else {
      document.querySelector("#answer").innerText = "ハズレ";
    }
  }else{
    if (answer == playeranswer) {
      document.querySelector("#answer").innerText = "正解";
      
      // クリア画面の表示
      clearbox.style.visibility = "visible";
      
      if(localStorage.getItem("user_stage") <= localStorage.getItem("stage")){
        cleartext.innerHTML="報酬"
        rewarddis();
      }
      // コントロール
      if(localStorage.getItem("user_stage") <= localStorage.getItem("stage")){
      control();    
      }
  
    } else {
      document.querySelector("#answer").innerText = "ハズレ";
    }
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
      
    let user_coin = localStorage.getItem("user_coin"); 
    user_coin = user_coin + 10;

  });
}

function control() {
  var nstage = parseInt(now_stage[1]);
  var nstage0 = parseInt(now_stage[0]);
  if(nstage0 == 2){
    if (nstage == 2) {
      localStorage.setItem("user_stage", parseInt(now_stage) + 10 - 1);
    } else {
      localStorage.setItem("user_stage", parseInt(now_stage) + 1);
    }
  }
  if(nstage0 == 3){
    if (nstage == 1) {
      localStorage.setItem("user_stage", parseInt(now_stage) + 10);
    } else {
      localStorage.setItem("user_stage", parseInt(now_stage) + 1);
    }
  }
  if(nstage0 == 1 || nstage0 == 4){
    if (nstage == 3) {
      localStorage.setItem("user_stage", parseInt(now_stage) + 10 - 2);
    } else {
      localStorage.setItem("user_stage", parseInt(now_stage) + 1);
    }
  } 
}