
//ここはコメントかお願いします。
// localStorage.setItem('stage',11)

const storedInput = localStorage.getItem('stage');//ローカルストレージ
const box = document.querySelector('.stage');//ステージの番号表示するpタグ
console.log(storedInput)
//前のクエストに移動すする
function beforestage(){
  localStorage.setItem('stage',parseInt(storedInput)-1) 
  window.location.reload();
}
//次のクエストに移動する
function nextstage(){
  localStorage.setItem('stage',parseInt(storedInput)+1) 
  window.location.reload();
}





//ステージの表示
if(storedInput){
  box.textContent ="stage   " + storedInput[0]  +"-"+ storedInput[1]　　　　//現在のステージを表示する
}

