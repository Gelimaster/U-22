<?php
//データベースに接続
include("config/db_ini.php");
?>

<!DOCTYPE html>

<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>ショップ</title>
    <link rel="stylesheet" type="text/css" href="/css/shop.css">
  </head>

  <nav>
    <button type="button" onclick="clickhtml()" id="button1">html</button>
    <button type="button" onclick="clickcss()" id="button2">css</button>
  </nav>

  <body>
    <a href="/mypage.php"><img src="/images/shop/modoru.png" alt="戻る" id="modoru"></a>
    <p><img src="/images/shop/name.png" alt="名前" id="name"></p>
    <p><img src="/images/shop/kajiya.png" alt="鍛冶屋" id="kajiya"></p>

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
        $db_row= mysqli_fetch_array($db_result);
        while($db_row= mysqli_fetch_array($db_result)){
        ?>

        <div class="item_box">
          <input type="hidden" id="itemid" value="shopitem"+<?php print $db_row["shop_id"]?>>
          <p class="item_name"><?php print $db_row["shop_name"]?></p>
          <img class="item_photo" src="/images/shop/<?php print $db_row["shop_img"]?>"></img>
          <div class="koin">
            <img src="/images/shop/koin.png" alt="コイン" class="koin_photo">
            <p class="koin_number"><?php print $db_row["shop_price"]?></p>
          </div>
          <button class="Purchase" onclick="clickPurchase()"><img src="/images/shop/button4.png" id="Pur_bu"></button>
        </div>
        <?php
        }
        mysqli_free_result($db_result);//clear information
        ?>
        <!-- loop stop -->


      </div>
    </div>
    <?php
      include("shop1.php")
    ?>

<script src="/js/shop.js"></script>
  </body>
</html>
