/*
  簡単な説明

   storedInputから情報を取り出す

   textで表示する

*/


const storageInput = document.querySelector('.storage');//データ
const text = document.querySelector('.text');
//storedInput = localStorage.getItem('key');
const storedInput = localStorage.getItem('name');//ローカルストレージ




//データをローカルストレージから取り出す
if(storedInput){
  text.textContent = storedInput
}