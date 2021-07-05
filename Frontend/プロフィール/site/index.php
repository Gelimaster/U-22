<!DOCTYPE html>

<html lang="ja">

  <head>

    <meta charset="utf-8">

    <title>Hello Web Quest</title>

    <link rel="stylesheet" type="text/css" href="css/index.css">

  </head>

  <body>

      <header>
          <img src="images/logo.png" alt="ロゴ" class="logo">
          <h1><font size="20">プロフィール</font></h1>
      </header>



    <form action="#" method="post">
	    <p><font size="5">ユーザー名：</font>
	      <input type="text" name="name" placeholder="ユーザー名"></p>
      <p><font size="5">性別：</font>
        <input type="radio" name="q1" value="男性"> 男
        <input type="radio" name="q1" value="女性"> 女
      </p>
      <p><font size="5">コメント：</font>
    	  <textarea name="comment" cols="40" rows="8" placeholder="コメント"></textarea >
    	</p>
    </form>


    <a href="index.php"><button class="button1">決定</button></a>
    <a href="index.php"><button class="button2">戻る</button></a>

  </body>

</html>