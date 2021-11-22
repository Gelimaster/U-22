<?php
$user_id =  $_GET['user_id'];;
include('config/db_ini.php');
$sql1 = "select * from custom_table where custom_user_id= '$user_id' ";
$db_result = mysqli_query($conn,$sql1);
$db_row= mysqli_fetch_array($db_result);

$id_name= $db_row["custom_id_name"];
$width=  $db_row["custom_width"];
$height=  $db_row["custom_height"];
$background_c=  $db_row["custom_background_color"];
$background_i=  $db_row["custom_background_image"];
$color=  $db_row["custom_color"];
$fonts=  $db_row["custom_FontSize"];
$textd=  $db_row["custom_TextDecoration"];
$position=  $db_row["custom_position"];
$left=  $db_row["custom_left"];
$top=  $db_row["custom_Top"];
$listt=  $db_row["custom_ListStyleType"];
$borders=  $db_row["custom_BorderStyle"];
$borderc=  $db_row["custom_BorderColor"];
$borderw=  $db_row["custom_BorderWidth"];
$borderlr=  $db_row["custom_BorderTopLeftRadiu"];
$borderrr=  $db_row["custom_BorderTopRightRadius"];
$borderbr=  $db_row["custom_BorderBottomLeftRadius"];
$data=  $db_row["htmldata"];
$css=  $db_row["csshtml"];


?>

<!DOCTYPE html>

<html lang="ja">

  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Web Quest</title>
    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/mypage.css">
    <style id="style" type="text/css"><?php print $css?></style>

  </head>

  <body>
         <!-- styleinデータ -->

         <input type="hidden" id="user_id" value=" <?php print $user_id ;?> ">
         <input type="hidden" id="idname1" value=" <?php print $id_name ;?> ">
        <input type="hidden" id="width1" value="<?php print $width ;?>">
        <input type="hidden" id="height1" value="<?php print $height ;?>">
        <input type="hidden" id="background_c1" value="<?php print $background_c ;?>">
        <input type="hidden" id="background_i1" value="<?php print $background_i ;?>">
        <input type="hidden" id="color1" value="<?php print $color ;?>">
        <input type="hidden" id="fonts1" value="<?php print $fonts ;?>">
        <input type="hidden" id="textd1" value="<?php print $textd ;?>">
        <input type="hidden" id="position1" value="<?php print $position ;?>">
        <input type="hidden" id="left1" value="<?php print $left ;?>">
        <input type="hidden" id="top1" value="<?php print $top  ;?>">
        <input type="hidden" id="listt1" value="<?php print $listt ;?>">
        <input type="hidden" id="borders1" value="<?php print $borders ;?>">
        <input type="hidden" id="borderc1" value="<?php print $borderc ;?>">
        <input type="hidden" id="borderw1" value="<?php print $borderw ;?>">
        <input type="hidden" id="borderlr1" value="<?php print $borderlr ;?>">
        <input type="hidden" id="borderrr1" value="<?php print $borderrr ;?>">
        <input type="hidden" id="borderbr1" value="<?php print $borderbr ;?>">
        <?php print $data ;?>




  <script src="/js/mypage.js"></script>
  <script src="/js/disabletab.js"></script>
  </body>

</html>
