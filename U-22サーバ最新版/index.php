<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      <script>
          //途中から出たか確認する
          const path_url =localStorage.getItem("path_url");
          if(path_url==null){ 
              //なかった場合はホームページに飛ぶ
              localStorage.setItem("path_url","/homepage.php");
              window.location.replace("/homepage.php");  
          }else{
              //あった場合はそのページのUrlに飛ぶ
            
             var id1  = localStorage.getItem("user_id")
             var id2 =document.cookie="user_id ="+ id1 + ";" +  ";domain=;path=/";
            window.location.replace(localStorage.getItem("path_url"));
          }
      </script>
        <script src="/js/disabletab.js"></script>
</body>

</html>