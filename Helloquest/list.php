<!DOCTYPE html>

<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>アイテム一覧</title>
    <link rel="stylesheet" type="text/css" href="css/list.css">
  </head>

  <nav>
    <button type="button" onclick="clickhtml()" id="button1">html</button>
    <button type="button" onclick="clickcss()" id="button2">css</button>
  </nav>

  <body>
    <a href="mypage.php"><img src="./images/shop/modoru.png" alt="戻る" id="modoru"></a>
    <p><img src="./images/shop/name.png" alt="名前" id="name"></p>

    <div class="number">
      <img src="./images/shop/koin.png" alt="コイン" class="koin_photo">
      <p class="koin_number">500,000</p>
    </div>

    <div class="back">
      <div class="box_srcollbar">

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>
        
        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>

        <div class="item_box">
          <p class="item_name">アイテム名</p>
          <div class="item_photo"></div>
          <button class="Purchase" onclick="clickDetails()"><img src="./images/shop/detail.png" id="Pur_bu"></button>
        </div>
      </div>
    </div>
    <?php
    include("list1.php");
    ?>
  <script type="text/javascript" src="js/list.js"></script>
  </body>

</html>