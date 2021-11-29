<?php
//Postを受け取る
$id = $_COOKIE['user_id'];
//サーバに接続
  include("config/db_ini.php");
  //ユーザー情報を取得する
$sql1 = "select * from user_table where user_id= '$id' ";
$db_result = mysqli_query($conn,$sql1);
$db_row= mysqli_fetch_array($db_result);

//データベースのデータを変数に保存
$username= $db_row["user_name"];
$id1= $db_row["user_id"];
$comment=$db_row["user_comment"];
$sex = $db_row["user_sex"];






?>

<!DOCTYPE html>

<html lang="ja">

  <head>

    <meta charset="utf-8">

    <title>Hello Web Quest</title>
    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" type="text/css" href="/css/profile.css">

  </head>

  <body>

      <header>
          <img src="/images/profile/logo.png" alt="ロゴ" class="logo">
          <h1><font size="20">プロフィール</font></h1>
      </header>



    <form action="/config/update_account.php" method="post">
    <input type="hidden" id="userid" name="userid" value="<?php echo $id1 ?>">
    <input type="hidden" id="sex1"  value="<?php echo $sex ?>">
	    <p><font size="5">ユーザー名：</font>
	      <input id="name" type="text" name="name" value="<?php print $db_row["user_name"]?>" maxlength = "20"></p>
      <p><font size="5">性別：</font>
        <input class="sex" type="radio" name="q1" value="男"> 男
        <input class="sex" type="radio" name="q1" value="女"> 女
      </p>
      <p><font size="5">コメント：</font>
    	  <textarea id="comment" name="comment" cols="40" rows="8"  value="<?php echo $db_row["user_comment"]?>" maxlength = "300"><?php echo $db_row["user_comment"]?></textarea >
    	</p>
      <button id="sub" type="submit" class="button1">決定</button>
    </form>
    <button onclick="goback()" class="button2">戻る</button>
    
  <script src="/js/profile.js"></script>
  <script src="/js/disabletab.js"></script>
  <?php
  
//情報を手放す
mysqli_free_result($db_result);//clear information
  ?>
  </body>

</html>