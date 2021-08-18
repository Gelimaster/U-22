<?php
include("config/db_ini.php");

//ショップテーブルの中にデータを入れる処理↓↓↓↓↓↓↓
//例→→→"insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('箱の杖','hakonotsue.pnh','1000','この杖を使うことで箱（divタグ）を使えるようになります')";
//ショップアイテム１
$sql ="insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('全体タグ','body.png',10,'表示させる部分を囲うタグです。')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "ショップデータ一失敗 \n";
}else{
  echo "ショップデータ1成功 \n";
}
//ショップアイテム2
$sql ="insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('リストタグ','list.png',10,'リストの項目を表示するために使用するタグです。')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "ショップデータ一失敗  \n";
}else{
  echo "ショップデータ2成功 \n";
}
//ショップアイテム3
$sql ="insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('レイアウトタグ','layout.png',10,'レイアウト表示に使用するタグです。')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "ショップデータ一失敗  \n";
}else{
  echo "ショップデータ3成功 \n";
}
//ショップアイテム4
$sql ="insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('ボタンタグ','button.png',10,'フォームの中で汎用的にボタンを作成することができるタグです。')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "ショップデータ一失敗  \n";
}else{
  echo "ショップデータ3成功 \n";
}
//ショップアイテム5
$sql ="insert into shop_table(shop_name,shop_img,shop_price,shop_des)values('テーブルタグ','table.png',10,'表を作成するためのタグです。')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "ショップデータ一失敗  \n";
}else{
  echo "ショップデータ3成功 \n";
}



//報酬でもらえるアイテムテーブルの中にデータを入れる処理
//上と同じですただ値段がついてない
//報酬1
$sql ="insert into reward_table(reward_name,reward_img,reward_des)values('文字の杖','mojinotue.png','この杖を使うことでテキスト入力（pタグ）を使えるようになります')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "報酬データ一失敗  \n";
}else{
  echo "報酬データ3成功 \n";
}
//報酬2
$sql ="insert into reward_table(reward_name,reward_img,reward_des)values('リンクの杖','rinkunotue.png','この杖を使うことでリンク（aタグ）を使えるようになります')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "報酬データ一失敗  \n";
}else{
  echo "報酬データ3成功 \n";
}
//報酬3
$sql ="insert into reward_table(reward_name,reward_img,reward_des)values('画像の杖','gazounotue.png','この杖を使うことで写真表示（imgタグ）を使えるようになります')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "報酬データ一失敗  \n";
}else{
  echo "報酬データ3成功 \n";
}
//報酬3
$sql ="insert into reward_table(reward_name,reward_img,reward_des)values('箱の杖','hakonotue.png','この杖を使うことで箱（divタグ）を使えるようになります')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "報酬データ一失敗  \n";
}else{
  echo "報酬データ3成功 \n";
}
//報酬3
$sql ="insert into reward_table(reward_name,reward_img,reward_des)values('送信の杖','sousinnnotue.png','この杖を使うことで入力、文章入力（inputタグ、textareaタグ）を使えるようになります')";//←←←←データ
$query = mysqli_query($conn,$sql);  //sql文を実行する
if(!$query){
  echo  "報酬データ一失敗  \n";
}else{
  echo "報酬データ3成功 \n";
}


//もっとデータを入れたい時は$sql,$queryとif文をコピーして使う

//このふぁいるをpublic_htmlのどっかに入れて、ブラウザで https://helloquest.000webhostapp.com/itemandshop.php　に接続する（一回だけはいる、何回も入ったらその分増えるのご注意ください
//成功かしたのかはページに表示されるようにしてます
 ?>
