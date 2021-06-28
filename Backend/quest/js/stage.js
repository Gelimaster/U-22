
const storedInput = localStorage.getItem('stage');//ローカルストレージ
const box = document.querySelector('.stage');//ステージの番号表示するpタグ
console.log(storedInput)

function beforestage(){
  localStorage.setItem('stage',parseInt(storedInput)-1) 
  window.location.reload();
}

function nextstage(){
  localStorage.setItem('stage',parseInt(storedInput)+1) 
  window.location.reload();
}






if(storedInput){
  box.textContent ="stage   " + storedInput[0]  +"-"+ storedInput[1]　　　　//現在のステージを表示する
}
