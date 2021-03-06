<?php
//データベースに接続
include("config/db_ini.php");
?>

<!DOCTYPE html>

<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>Hello Web Quest</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="/css/list.css">
  </head>

  <!-- <nav>
    <button type="button" onclick="clickhtml()" id="button1">html</button>
    <button type="button" onclick="clickcss()" id="button2">css</button>
  </nav> -->

  <body>
    <a href="/mypage.php"><img src="/images/shop/modoru.png" alt="戻る" id="modoru"></a>
    <p><img src="/images/shop/name1.png" alt="名前" id="name"></p>

    <div class="number">
      <img src="/images/shop/koin.png" alt="コイン" class="koin_photo">
      <p class="koin_number" id="user_coin"></p>
    </div>
    <div class="back">
      <div class="box_srcollbar">
        <!-- loop start -->
        <?php
        $sql1 = "select * from shop_table ";
        $db_result = mysqli_query($conn,$sql1);
        $db_cnt = mysqli_num_rows($db_result);
        while($db_row= mysqli_fetch_array($db_result)){
        ?>
        <div id="shopitem<?php print $db_row["shop_id"]?>">
        <div class="item_box">
          <p class="item_name"><?php print $db_row["shop_name"]?></p>
          <img class="item_photo" src="/images/shop/<?php print $db_row["shop_img"]?>"></img>
          <button class="Purchase" onclick="clickDetails(<?php print $db_row["shop_id"]?>,'<?php print $db_row["shop_des"]?>','<?php print $db_row["shop_name"]?>')"><img src="/images/shop/detail.png" id="Pur_bu"></button>
        </div>
        </div>
        <?php
        }
        mysqli_free_result($db_result);//clear information
        ?>
        <!-- loop stop -->
         <!-- loop start -->
         <?php
        $sql = "select * from reward_table ";
        $db_result1 = mysqli_query($conn,$sql);
        $db_cnt = mysqli_num_rows($db_result1);
        while($db_row1= mysqli_fetch_array($db_result1)){
        ?>
        <div id="reward<?php print $db_row1["reward_id"]?>">
        <div class="item_box">
          <p class="item_name"><?php print $db_row1["reward_name"]?></p>
          <img id="rewardimg<?php print $db_row1["reward_id"]?>" class="item_photo" src="/images/shop/<?php print $db_row1["reward_img"]?>"></img>
          <button id="btn<?php print $db_row1["reward_id"]?>" class="Purchase" onclick="clickDetails1(<?php print $db_row1["reward_id"]?>,'<?php print $db_row1["reward_des"]?>','<?php print $db_row1["reward_name"]?>')"><img src="/images/shop/detail.png" id="Pur_bu"></button>
        </div>
        </div>
        <?php
        }
        mysqli_free_result($db_result1);//clear information
        ?>
        <!-- loop stop -->


      </div>
    </div>
   
    <?php
    include("list1.php");
    ?>
     
    
    <script type="text/javascript" src="/js/list.js"></script>
  </body>

</html>
