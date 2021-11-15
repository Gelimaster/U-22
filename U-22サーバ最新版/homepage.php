<?php
 $key= microtime(false);
  ?>


<!DOCTYPE html>

<html>

  <head>

    <meta charset="utf-8">

    <title>Hello Web Quest</title>
    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

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

    <div class="cp_cssslider">
      <div class="cp_slidewrapper">
        <div class="cp_slide_item"><img src="./images/home/homepage1.png" /></div>
        <div class="cp_slide_item"><img src="./images/home/homepage2.png" /></div>
        <div class="cp_slide_item"><img src="./images/home/homepage3.png" /></div>
      </div>
    </div>

    <footer>
      Copyright &copy; 2021 . HelloQuest Rights Reserved.
    </footer>


</body>



</html>
