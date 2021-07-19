<!DOCTYPE html>

<html lang="ja">
  <div id="check_box_check">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="css/shop1.css">
    </head>

    <body>



      <div class="Trans">
        <div class="confirmation1">
          <div class="confirmation2">
            <div class="confirmation3">
              <div class="confirmation">
                <div><img src="./images/kauninn.png" class="kakuninn"></div>
                <p>　　　　　</p>
                <p class="itemname_k">アイテム名</p>
                    <div class="item_photok"></div>
                    <p class="koin_txt">コイン×500.000を使用して</p>
                    <p class="koin_txt">アイテムを購入しますか？</p>
                    <div class="koin_box">
                      <div class="koin_k">
                        <img src="./images/koin.png" alt="コイン" class="koin_photo">
                        <p class="k">所持コイン</p>
                        <p id="con">　　　　　　　　　→　　　　　</p>
                    </div>
                  </div>
                    <button class="Purchase1" onclick="clickcancel()"><img src="./images/cancel.png" id="Pur_bu1"></button>
                    <button class="Purchase1" onclick="clickok()"><img src="./images/OK.png" id="Pur_bu1"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php
      include("shop2.php")
      ?>
      
      <script type="text/javascript" src="js/shop1.js"></script>
    </body>
  </div>

</html>