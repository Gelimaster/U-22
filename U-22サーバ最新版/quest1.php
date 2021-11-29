<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello Web Quest</title>
    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/button.css" />
    <link rel="stylesheet" type="text/css" href="css/quest.css" />
    <link rel="stylesheet" type="text/css" href="css/quest1.css" />
  </head>

  <body>
    <div id="hint_box">
      <button id="hint_button" onclick="closehint()" >x</button>
       <!-- ヒントはここに書く -->

    </div>
   
    
    <div class="nav">
      <div class="logo">
        <a href=""><img src="/images/quest/logo.png" alt="ホームページへ" /></a>
      </div>
      <div class="village_name">
        <p>最初の村</p>
      </div>
      <ul>
        <li ><a id="stage1" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">1-1</a></li>
        <li><a id="stage2" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">1-2</a></li>
        <li><a id="stage3" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">1-3</a></li>
        <li><a onclick="goback()" onmouseover="select1()" onmouseleave="unselected1()" href="/mypage.php" class="button mypage_button">マイページ</a></li>
      </ul>
      <div class="vill_hint">
          <!-- <div class="vill_hint_button">
            <p>ヒント！</p>
          </div> -->
          <img src="/images/quest/usagi.png" alt="ヒント" />
      </div>
      <div class="stage_nav">
        <a id="back_button" class="button next_stage_button">前の町</a>
        <a id="next_button" href="/quest2.php" class="button next_stage_button">次の町</a>
      </div>
    </div>
    <div class="village">
      <img src="/images/quest/stage1.png" alt="stage1" class="stage1" />
      <div id="mypagebox1"　onmouseover="select1()" onmouseleave="unselected1()" class="mypagebox">
        <a href="/mypage.php">
          <div class="quest_button">
            <p>マイページ</p>
          </div>
          <img src="/images/quest/house1.png" alt="house1" class="house1" />
        </a>
      </div>
      <div id="quest1"　onmouseover="select()" onmouseleave="unselected()" class="q1">
        <a href="/quest.php">
          <div class="quest_button">
            <p>クエスト</p>
          </div>
          <img onclick="setstage()" src="/images/quest/house2.png" alt="house2" class="house2" />
        </a>
      </div>
    </div>
    <script src="/js/quest1.js"></script>  
    <script src="/js/disabletab.js"></script>
  </body>
</html>
