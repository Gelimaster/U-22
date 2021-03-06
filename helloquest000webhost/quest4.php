<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8" />

  <title>Hello Web Quest</title>

  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <link rel="stylesheet" type="text/css" href="css/reset.css" />
  <link rel="stylesheet" type="text/css" href="css/button.css" />
  <link rel="stylesheet" type="text/css" href="css/quest.css" />
  <link rel="stylesheet" type="text/css" href="css/quest4.css" />
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
      <p>工場の町</p>
    </div>
    <ul>
      <li><a id="stage1" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">4-1</a></li>
      <li><a id="stage2" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">4-2</a></li>
      <li><a id="stage3" onclick="set(this)" onmouseover="select()" onmouseleave="unselected()" href="/quest.php" class="button">4-3</a></li>
    </ul>
    <div onclick="openhint()" class="vill_hint">
      <!-- <div class="vill_hint_button">
            <p>ヒント！</p>
          </div> -->
      <a href="./mypage.php">
        <img src="./images/quest/usagi_mypage.png" alt="ヒント" /></a>
    </div>
    <div class="stage_nav">
      <a id="back_button" href="/quest3.php" class="button next_stage_button">前の町</a>
    </div>
  </div>
  <div class="village">
    <img src="/images/quest/stage4.png" alt="stage4" class="stage4" />
    <div id="quest4" class="q4">
      <a href="/quest.php">
        <div class="quest_button">
          <p>クエスト</p>
        </div>
        <img src="/images/quest/postoffice.png" alt="postoffice" class="postoffice" />
      </a>
    </div>
  </div>
  <script src="js/quest4.js"></script>
</body>

</html>