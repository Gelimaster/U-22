<?php
include("config/db_ini.php");
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Web Quest</title>  
    <link rel="stylesheet" type="text/css" href="./css/koukai.css">
    <link rel="stylesheet" type="text/css" href="./css/button.css">
  </head>
  <body>
    <header>
      <a href="/mypage.php">
        <img style="float: left;" src="./images/koukai/back.png" alt="戻るボタン" class="back">
      </a>
      <p class="subtitle">公開ページ一覧</p>
    </header>
<!-- loop start -->
<?php
$sql ="select * from custom_table";
$db_result = mysqli_query($conn,$sql);
$db_cnt = mysqli_num_rows($db_result);
if($db_cnt == 0){
  echo "データがない";
}else{
  while($db_row = mysqli_fetch_array($db_result)){
    $user_id1= $db_row["custom_user_id"];
    $sql1= "select user_name from user_table where user_id= '$user_id1'";
    $db_result1 = mysqli_query($conn,$sql1);
    $db_row1= mysqli_fetch_array($db_result1);
    $user_name = $db_row1["user_name"];
 
?>
    <div class="display">
      <div class="display-inside" >
        <div class="display-content" >
          <iframe src="/mypagekoukai.php?user_id=<?php print $db_row["custom_user_id"];?>" frameborder="0" scrolling="no" style="transform:scale(0.55);-o-transform:scale(0.55);-webkit-transform:scale(0.55);-moz-transform:scale(0.55);-ms-transform:scale(0.55);transform-origin:0 0;-o-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;"></iframe>
          <div class="invisible"></div>
        </div>
      </div>
       <form class="display-username" action="" method="POST">
        <input type="hidden" value="<?php print $db_row["custom_user_id"];?>">
        <input  class="display-username button" type="submit" value="<?php print $db_row1["user_name"] ?>">
      </form>
    </div>
    <!-- loop end -->
    <?php
    }
  }
    mysqli_free_result($db_result);//clear information
    mysqli_free_result($db_result1);//clear information
    ?>
  </body>
</html>