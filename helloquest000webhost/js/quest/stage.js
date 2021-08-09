
//ここはコメントかお願いします。
// localStorage.setItem('stage',11)

const storedInput = localStorage.getItem('user_stage');//ローカルストレージ
const box = document.querySelector('.stage');//ステージの番号表示するpタグ
// console.log(storedInput)
//前のクエストに移動すする





//ステージの表示
if(storedInput){
  box.textContent ="stage   " + storedInput[0]  +"-"+ storedInput[1]　　　　//現在のステージを表示する
}
