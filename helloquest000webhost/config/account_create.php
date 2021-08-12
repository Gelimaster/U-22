<?php
//データに接続する
  include("db_ini.php");
  //キー変数を受け取る
  $key= $_POST["key"];
  //アカウント登録
  $sql = "insert into user_table(user_name,user_key,user_coin,user_stage,user_sex)values('村人','$key',1000,11,'男')";
  $query = mysqli_query($conn,$sql);  
//ユーザー情報を取得する
$sql1 = "select * from user_table where user_key= '$key' ";
$db_result = mysqli_query($conn,$sql1);
if($db_result){
    echo "done";
}else{
    echo "error";
}


$db_row= mysqli_fetch_array($db_result);


//データベースのデータを変数に保存
$username= $db_row["user_name"];
$coin= $db_row["user_coin"];
$stage= $db_row["user_stage"];
$id= $db_row["user_id"];
$sex= $db_row["user_sex"];
$html = "<img id = \"logo0000\" class = \"logo\" alt=\"ロゴ\" src=\"images/mypage/logo.png\">
<a href=\"profile.php\" id = \"link1000\" class = \"button\">プロフィール </a>
<a href=\"list.php\" id = \"link2000\" class = \"button\">アイテム </a>
<a href=\"shop.php\" id = \"link3000\" class = \"button\">ショップ </a>
<a href=\"custom.php\" id = \"link4000\" class = \"button\">カスタマイズ </a>
<a href=\"koukai.php\" id = \"link5000\" class = \"button\">公開ページ一覧 </a>
<a href=\"quest1.php\" id = \"link6000\" class = \"quest\">クエスト </a>";

$sql = "insert into custom_table(custom_user_id,htmldata)values('$id','$html')";
$query = mysqli_query($conn,$sql); 









//情報を手放す
mysqli_free_result($db_result);//clear information
  ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>      
      <input id="username" type="hidden" name="key" value="<?php print $username ?>">
      <input id="stage" type="hidden" name="key" value="<?php print $stage ?>">
      <input id="id" type="hidden" name="key" value="<?php print $id ?>">
      <input id="coin" type="hidden" name="key" value="<?php print $coin ?>">
      <input id="sex" type="hidden" name="key" value="<?php print $sex ?>">
    </form>
    <script src="../js/account_create.js"></script>
    <script>
        var id1  = document.getElementById("id").value
        var id2 =document.cookie="user_id ="+ id1 + ";" +  ";domain=;path=/";
        console.log(id2)
        window.location.replace('../profile.php');
      </script>
</body>

</html>