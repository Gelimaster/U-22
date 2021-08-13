<!DOCTYPE html>

<html lang="ja">
  <div id="bought">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="/css/shop2.css">
    </head>
    <body>

      <div class="Trans1">
        <div class="confirmation11">
          <div class="confirmation22">
            <div class="confirmation33">
              <div class="confirmation1">
                <div><img src="/images/shop/kakutei.png" class="kakuninn1"></div>
                <p>　　　　　</p>
                
                <input type="hidden" id="itemprice" value="<?php print $price?>">
                    <p class="koin_txt11">コイン×<?php print $price?>を使用して</p>
                    <p class="koin_txt22">アイテムを購入しました。</p>
                    <div class="koin_box1">
                      <div class="koin_k1">
                        <img src="/images/shop/koin.png" alt="コイン" class="koin_photo1">
                        <p class="k1">所持コイン</p>
                        <p id="con1"></p>
                      </div>
                    </div>
                    <button class="Purchase11" onclick="clickok1()"><img src="/images/shop/OK.png" id="Pur_bu11"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </body>
 </div>
</html>