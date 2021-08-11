<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />

    <title>ステージ3</title>

    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/button.css" />
    <link rel="stylesheet" type="text/css" href="css/quest.css" />
    <link rel="stylesheet" type="text/css" href="css/quest3.css" />
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
        <p>工場の町</p>
      </div>
      <ul>
        <li><a id="stage1" onmouseover="select(this)" onmouseleave="unselected()" href="/quest.php" class="button">3-1</a></li>
      </ul>
      <div onclick="openhint()" class="vill_hint">
          <div class="vill_hint_button">
            <p>ヒント！</p>
          </div>
          <img src="/images/quest/usagi.png" alt="ヒント" />
      </div>
      <div class="stage_nav">
        <a id="back_button" href="/quest2.php" class="button next_stage_button">前の町</a>
        <a id="next_button" href="/quest4.php" class="button next_stage_button">次の町</a>
      </div>
    </div>
    <div class="village">
      <img src="/images/quest/stage3.png" alt="stage3" class="stage3" />
      <div id="quest3" class="q3">
        <a href="">
          <div class="quest_button">
            <p>クエスト</p>
          </div>
          <img src="/images/quest/laboratory.png" alt="laboratory" class="laboratory" />
        </a>
      </div>
    </div>
    <script src="js/quest3.js"></script>
  </body>
</html>
