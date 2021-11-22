<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8" />

  <title>Hello Web Quest</title>

  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <link rel="stylesheet" type="text/css" href="css/reset.css" />
  <link rel="stylesheet" type="text/css" href="css/button.css" />
  <link rel="stylesheet" type="text/css" href="css/quest.css" />
  <link rel="stylesheet" type="text/css" href="css/quest2.css" />
</head>

<body>
  <div id="hint_box">
    <button id="hint_button" onclick="closehint()">x</button>
    <!-- ヒントはここに書く -->

  </div>
  <div class="nav">
    <div class="logo">
      <a href=""><img src="/images/quest/logo.png" alt="ホームページへ" /></a>
    </div>
    <div class="village_name">
      <p>商売の町</p>
    </div>
    <ul>
      <li><a id="stage1" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">2-1</a></li>
      <li><a id="stage2" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">2-2</a></li>
    </ul>
    <div onclick="openhint()" class="vill_hint">
      <!-- <div class="vill_hint_button">
            <p>ヒント！</p>
          </div> -->
      <a href="./mypage.php">
        <img src="./images/quest/usagi_mypage.png" alt="ヒント" /></a>
    </div>
    <div class="stage_nav">
      <a id="back_button" href="/quest1.php" class="button next_stage_button">前の町</a>
      <a id="next_button" href="/quest3.php" class="button next_stage_button">次の町</a>
    </div>
  </div>
  <div class="village">
    <img src="/images/quest/stage2.png" alt="stage2" class="stage2" />
    <div id="quest2" class="q2">
      <a href="/quest.php">
        <div class="quest_button">
          <p>クエスト</p>
        </div>
        <img src="/images/quest/shop1.png" alt="shop1" class="shop1" />
      </a>
    </div>
  </div>

  <script src="/js/quest2.js"></script>
  <script src="/js/disabletab.js"></script>
</body>

</html>