<?php
 $key= microtime(false);
  ?>


<!DOCTYPE html>

<html>

  <head>

    <meta charset="utf-8">

    <title>Hello!! WebQuest</title>

    <link rel="stylesheet" type="text/css" href="/css/reset.css">
    <link rel="stylesheet" type="text/css" href="/css/homepage.css">

  </head>

  <body>

    <header>

      <img src="/images/home/logo.png" class="logo">
      <form  action="/config/account_create.php" method="post">
      <input type="hidden" name="key" value="<?php print $key ?>">
      <input class="signin" type="image"src="/images/home/signin.png"></input>
    </form>


    </header>

    <img src="/images/home/main.png" class="main">

    <footer>
      Copyright &copy; 2021 . HelloQuest Rights Reserved.
    </footer>


</body>



</html>
