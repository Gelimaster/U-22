<?php

//変更された情報を取得する
$username=$_POST["name"];
$user_id=$_POST["userid"];
$sex = $_POST["q1"];
$comment=$_POST["comment"];

//データベースに接続
include("config/db_ini.php");


  //アカウント更新
  $sql = "update user_table set user_name = '$username' where user_id = $user_id";
  $query = mysqli_query($conn,$sql); 
  $sql1 = "update user_table set user_sex = '$sex' where user_id = $user_id";
  $query = mysqli_query($conn,$sql1); 
  $sql2 = "update user_table set user_comment = '$comment' where user_id = $user_id";
  $query = mysqli_query($conn,$sql2); 

?>


<!DOCTYPE html>

<html lang="ja">

  <head>

    <meta charset="utf-8">

    <title>Hello Web Quest</title>

    <link rel="stylesheet" type="text/css" href="/css/profile.css">

  </head>

  <body>

      <header>
          <img src="/images/profile/logo.png" alt="ロゴ" class="logo">
          <h1><font size="20">変更完了</font></h1>
      </header>

    <form action="/profile.php" method="POST" >
        <input  type="hidden" id="name" value="<?php print $username ?>">
        <input  type="hidden" id="userid" name="userid" value="<?php print $user_id ?>">
        <input type="submit" class="button1" value="次へ">
    </form>



    <script src="/js/update_account.js"></script>
  </body>

</html>

