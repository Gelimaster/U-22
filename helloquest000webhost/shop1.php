<!DOCTYPE html>

<html lang="ja">
  <div id="check_box_check">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="/css/shop1.css">
    </head>

    <body>



      <div class="Trans">
        <div class="confirmation1">
          <div class="confirmation2">
            <div class="confirmation3">
              <div class="confirmation">
                <div><img src="/images/shop/kauninn.png" class="kakuninn"></div>
                <p>　　　　　</p>
                <input type="hidden" id="itemprice" value="<?php print $price?>">
                <input type="hidden" id="itemid1">
                <p id="shop_item_name" class="itemname_k"></p>
                    <div class="item_photok"><img class="item_photok" id="itemimg1" src="" ></div>
                    <p id="itemtxt1" class="koin_txt">コイン×<?php print$price ?>を使用して</p>
                    <p id="itemtxt2" class="koin_txt">アイテムを購入しますか？</p>
                    <div class="koin_box">
                      <div class="koin_k">
                        <img src="/images/shop/koin.png" alt="コイン" class="koin_photo">
                        <p class="k">所持コイン</p>
                        <p id="con"></p>
                    </div>
                  </div>
                    <button class="Purchase1" onclick="clickcancel()"><img src="/images/shop/cancel.png" id="Pur_bu1"></button>
                    <button id="buyitem1" class="Purchase1" onclick="clickok(<?php print $db_row["shop_id"] ?>)"><img src="/images/shop/OK.png" id="Pur_bu1"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  <?php
      include("shop2.php")
  ?>
  
</html>