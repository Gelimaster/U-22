/*
  簡単な説明

   storageInputはInputタグからデータを取り出してbuttonが押されたらsaveLocalStorageのfunctionを起動する

   saveLocalStorageはlocalStorage.setItem(これがローカルストレージの関数)を起動してテーブル(key)にデータ(value)を保存する仕組み

*/




const storageInput = document.querySelector('.storage');//データ
const button = document.querySelector('.button');
//storedInput = localStorage.getItem('key');
const storedInput = localStorage.getItem('textinput');//ローカルストレージ


//local storage（ローカルストレージに保存
const saveLocalStorage = () => {
  // localStogage.setItem("key",value)
  localStorage.setItem('name',storageInput.value)
}
//Buttonのクリックした場合
button.addEventListener('click',saveLocalStorage)







//コンソールで確認するためはここから下


//listener イベント（データ発生）
storageInput.addEventListener('input',letter =>{
  // console.log(letter.target.value)
  console.log(storageInput.value)//inputタグから情報を確認する
  text.textContent = letter.target.value
}) 