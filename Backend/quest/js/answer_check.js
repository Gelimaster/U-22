


var asnwer;
var asnwertag;




// クエストの答えを取得処理
fetch("json/answer.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  asnwer = data[storedInput]//クラスquestにテキストを表示する
})

// 答えのタグを取得処理
fetch("json/answertag.json")//ファイル指定
.then(response => response.json())//ファイルのタイプを教える
.then(data => {
  // console.log(data[storedInput])//ログで確認
  asnwertag = data[storedInput]//クラスquestにテキストを表示する
})
//答えの比較処理
function checkanswer(){
  const test = document.getElementById("selifudiv00") //HTMLからセリフBoxの中身を取得
  var text = test.innerHTML;//Stringに変換して比較できるようにします
  console.log(text)//中身の確認
  const playerasnwer = localStorage.getItem('playerasnwer');//ローカルストレージ
  const playertag = localStorage.getItem('playertag');//ローカルストレージ
  //正しい要素を使ってるかどうかの確認
  if(text ==  '<div class="tagname" style="border-radius: 10px 10px 0px 0px;">セリフ</div><div class="tagarea" style="display: block;"><div class="divbox" ondrop="Drop( event);"><div id="p01" class="tagbox drag-and-drop ptag tagiri" draggable="true"><div class="tagname intagname">テキスト入力</div><div class="tagarea tagin"><div class="textbox" contenteditable="true">111</div></div></div></div></div>'){
    //要素の中の要素の確認
    if(playertag == asnwertag ){
      //答えが合ってるの確認
      if(playerasnwer == asnwer){
        console.log("正解");
        document.querySelector("#answer").innerText = "正解";
        //答えと一致しない場合
      }else{
        console.log("ハズレ");
        document.querySelector("#answer").innerText = "ハズレ";
      }
    }else{
      console.log("ハズレ");
      document.querySelector("#answer").innerText = "ハズレ";
    }
  }else{
    console.log("ハズレ");
      document.querySelector("#answer").innerText = "ハズレ";
  }
  
}
