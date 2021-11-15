<?php
//データに接続する
  include("db_ini.php");
  //キー変数を受け取る
  $user_id= $_POST['user_id'];
  $id_name= $_POST["id_name"];
  $width= $_POST["width"];
  $height= $_POST["height"];
  $background_c= $_POST["background_c"];
  $background_i= $_POST["background_i"];
  $color= $_POST["color"];
  $fonts= $_POST["fonts"];
  $textd= $_POST["textd"];
  $position= $_POST["position"];
  $left= $_POST["left"];
  $top= $_POST["top"];
  $listt= $_POST["listt"];
  $borders= $_POST["borders"];
  $borderc= $_POST["borderc"];
  $borderw= $_POST["borderw"];
  $borderlr= $_POST["borderlr"];
  $borderrr= $_POST["borderrr"];
  $borderbr= $_POST["borderbr"];
  $mypagedata= $_POST["htmlbox"];
  $mypagecss= $_POST["cssbox"];


  $sql1 = "select * from custom_table where custom_user_id= '$user_id' ";
  $db_result = mysqli_query($conn,$sql1);
  $db_cnt = mysqli_num_rows($db_result);
  $db_row= mysqli_fetch_array($db_result);

  if($db_cnt == 0){
    $sql = "insert into custom_table(custom_user_id,custom_id_name,custom_width,custom_height,custom_background_color,custom_background_image,custom_color,custom_FontSize,custom_TextDecoration,custom_position,custom_left,custom_Top,custom_ListStyleType,custom_BorderStyle,custom_BorderColor,custom_BorderWidth,custom_BorderTopLeftRadiu,custom_BorderTopRightRadius,custom_BorderBottomLeftRadius,htmldata,csshtml)values('$user_id','$id_name','$width','$height','$background_c','$background_i','$color','$fonts','$textd','$position','$left','$top','$listt','$borders','$borderc','$borderw','$borderlr','$borderrr','$borderbr','$mypagedata','$mypagecss')";
    $query = mysqli_query($conn,$sql);
  }else{
    $sql = "update custom_table set custom_id_name ='$id_name',custom_width = '$width',custom_height = '$height',custom_background_color = '$background_c',custom_background_image = '$background_i',custom_color = '$color',custom_FontSize = '$fonts',custom_TextDecoration = '$textd',custom_position = '$position',custom_left = '$left',custom_Top = '$top',custom_ListStyleType = '$listt',custom_BorderStyle ='$borders',custom_BorderColor = '$borderc',custom_BorderWidth = '$borderw',custom_BorderTopLeftRadiu = '$borderlr',custom_BorderTopRightRadius = '$borderrr',custom_BorderBottomLeftRadius = '$borderbr',htmldata = '$mypagedata' , csshtml = '$mypagecss' where custom_user_id = '$user_id';";
    $query = mysqli_query($conn,$sql);
  }





//情報を手放す
mysqli_free_result($db_result);//clear information
  ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script>
        window.location.replace('../mypage.php');
      </script>
</body>

</html>
