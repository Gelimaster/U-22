<?php

//変更された情報を取得する
$username = $_POST["name"];
$user_id = $_POST["userid"] + 0;
$sex = $_POST["q1"];
$comment = $_POST["comment"];

//データベースに接続
include("db_ini.php");


//アカウント更新
$sql = "update user_table set user_name = '$username' where user_id = $user_id";
$query = mysqli_query($conn, $sql);
$sql1 = "update user_table set user_sex = '$sex' where user_id = $user_id";
$query = mysqli_query($conn, $sql1);
$sql2 = "update user_table set user_comment = '$comment' where user_id = $user_id";
$query = mysqli_query($conn, $sql2);

?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
</head>

<body>
  <input type="hidden" id="name" value="<?php print $username ?>">
  <input type="hidden" id="sex" value="<?php print $sex ?>">
  <script src="../js/update_account.js"></script>
  <script>
    if (parseInt(localStorage.getItem('user_stage')) == 11) {
      // アカウントを最初に作った場合
      localStorage.setItem("stage",11)
      
      window.location.href = '../quest.php';
    } else if (!(parseInt(localStorage.getItem('user_stage')) == 11)) {
      // 通常
      
      window.location.replace('../mypage.php');
    }
  </script>
</body>

</html>