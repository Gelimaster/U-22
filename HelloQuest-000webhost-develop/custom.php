<?php
    include("config/db_ini.php");
    $user_id = $_COOKIE['user_id'];
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
    


?>





<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello Web Quest</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/box.css">
        <link rel="stylesheet" href="css/tag.css">
        <link rel="stylesheet" href="css/input.css">
        <link rel="stylesheet" href="css/scenario.css">
        <link rel="stylesheet" href="css/mypage.css">
        <style id="style" type="text/css"></style>
    </head>
    <body>
        <!-- styleinデータ -->

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
   


        <!-- シナリオ画面 -->
        <div id="scebox" onclick="move()">
            <div id="chabox">
                <div id="shadow"></div>
                <div id="charabox"></div>
                <div id="serifubox" class="serifu1"></div>
            </div>
        </div>
        <!-- ゲーム画面 -->
        <button  id="custombtncss" onclick="cssin()">CSS</button>
        <div id="visualbox"></div>
        <div class="invisible"></div>
     
        <div id="customhintbox">
            <!-- ヒントのテキスト -->
            <p>変更を保存しますか？</p>
            <form action="/config/customupload.php" id="custompgdata" method="post">
                <input type="hidden" name="user_id" id="user_id">
                <input type="hidden" name="id_name" id="id_name2">
                <input type="hidden" name="width" id="width2">
                <input type="hidden" name="height" id="height2">
                <input type="hidden" name="background_c" id="background_color2">
                <input type="hidden" name="background_i" id="background_image2">
                <input type="hidden" name="color" id="color2">
                <input type="hidden" name="fonts" id="fontsize2">
                <input type="hidden" name="textd" id="textdecoration2">
                <input type="hidden" name="position" id="position2">
                <input type="hidden" name="left" id="left2">
                <input type="hidden" name="top" id="top2">
                <input type="hidden" name="listt" id="liststyletype2">
                <input type="hidden" name="borders" id="borderstyle2">
                <input type="hidden" name="borderc" id="bordercolor2">
                <input type="hidden" name="borderw" id="borderwidth2">
                <input type="hidden" name="borderlr" id="bordertopleftradius2">
                <input type="hidden" name="borderrr" id="bordertoprightradius2">
                <input type="hidden" name="borderbr" id="borderbottomleftradius2">
                <input type="hidden" name="htmlbox"  id="htmlbox1">
                <input type="hidden" name="cssbox"  id="cssdata">
                <button id="send" onclick="sendcustom()">はい</button>
            </form>
            <button id="notsend" onclick="resetc()">リセット</button>
            <!-- ヒントの表示 -->
            <button id="close" onclick="closeHint()">とじる</button>
        </div>
        
        <button id="bt1" onclick="inButton(1)">タグ一覧</button>
        <button id="bt2" onclick="inButton(2)">写真一覧</button>
        <button id="bt3" onclick="inButton(3)">テキスト一覧</button>
        
        <div
            id="toolbox1" class="toolbox"
            ondragover="AllowDrop( event );" ondrop="Delete( event, this ); "
        >
        </div>
        <div id="toolbox2" class="toolbox" ondragover="AllowDrop( event );" ondrop="Delete( event, this ); ">
        </div>
        <div id="toolbox3" class="toolbox" ondragover="AllowDrop( event );" ondrop="Delete( event, this ); ">
            <div id="txt1" class="drag-and-drop" draggable = "true" ondragstart="Drag(event)" >あいうえお</div>
        </div>
        <!-- タグ一覧(いちらん)をツールボックスに入れる -->

        <button id="tg1" onclick="inButton2(1)">タグ表記</button>
        <button id="tg2" onclick="inButton2(2)">HTML表記</button>
        <button id="tg3" onclick="inButton2(3)">CSS表記</button>
        
        <!-- css適用ダイアログ -->
        <div id="styledialog">
            <div id="stylelist"></div>
            <!-- cssのボタン -->
            <div id="choiceid"></div>
            <div id="stylebt">
                <button id="stbt1" onclick="inButton3(1)">サイズ</button>
                <button id="stbt2" onclick="inButton3(2)">文字</button>
                <button id="stbt3" onclick="inButton3(3)">背景</button>
                <button id="stbt4" onclick="inButton3(4)">配置</button>
                <button id="stbt5" onclick="inButton3(5)">リスト</button>
                <button id="stbt5" onclick="inButton3(6)">外枠</button>
            </div>
            <!-- それぞれの中身 -->
            <div id="stylebox1" class="stylebox">
                <p>サイズ</p>
                <p><label>横幅：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="width"></label></p>
                <p><label>高さ：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="height"></label></p>
            </div>
            <div id="stylebox2" class="stylebox">
                <p>文字</p>
                <p><label>サイズ：<input type="number" name="number" max="100" min="0" onchange="idStyleOut(this)" id="FontSize"></label></p>
                <p><label>色：<input type="color" name="color" onchange="idStyleOut(this)" id="color"></label></p>
                <p>スタイル：
                    <select name="select" id="TextDecoration" onchange="idStyleOut(this)">
                        <option value="">デフォルト</option>
                        <option value="none">なし</option>
                        <option value="underline">下線</option>
                        <option value="overline">上線</option>
                        <option value="line-through">うちけし線</option>
                        <option value="blink">???</option>
                    </select>
                </p>
            </div>
            <div id="stylebox3" class="stylebox">
                <p>背景</p>
                <input type="color" name="color" onchange="idStyleOut(this)" id="background_color">
            </div>
            <div id="stylebox4" class="stylebox">
                <p>配置</p>
                <p>ポジション：
                    <select name="position" id="position" onchange="idStyleOut(this)">
                        <option value="static">デフォルト</option>
                        <option value="absolute">絶対配置</option>
                        <option value="relative">相対配置</option>
                        <option value="fixed">ブラウザに固定</option>
                    </select>
                </p>
                <p><label>ひだり：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="left"></label></p>
                <p><label>うえ：  <input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="Top"></label></p>
                
            </div>
            <div id="stylebox5" class="stylebox">
                <p>リストスタイル：
                    <select name="liststyle" id="ListStyleType" onchange="idStyleOut(this)">
                        <option value="">デフォルト</option>
                        <option value="none">なし</option>
                        <option value="disc">黒丸</option>
                        <option value="circle">白丸</option>
                        <option value="square">四角</option>
                    </select>
                </p>
            </div>
            <div id="stylebox6" class="stylebox">
                <p>外枠</p>
                <p>スタイル：<select name="borderstyle" id="BorderStyle" onchange="idStyleOut(this)">
                    <option value="none">なし</option>
                    <option value="solid">実線</option>
                    <option value="double">二重線</option>
                    <option value="dashed">破線</option>
                    <option value="dotted">点線</option>
                </select>
            </p>
                <p><label>色：<input type="color" name="color" onchange="idStyleOut(this)" id="BorderColor"></label></p>
                <p>太さ：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="BorderWidth"></p>
                <label>角丸</label>
                <p>左上：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="BorderTopLeftRadius">
                    右上：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="BorderTopRightRadius"></p>

                <p>左下：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="BorderBottomLeftRadius">
                    右上：<input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="BorderBottomRightRadius"></p>

            </div>
        </div>
        
        <div
            id="assemblybox1"
            ondrop="Drop( event, this ); "
            ondragover="AllowDrop( event );"
            ondragleave=""
            class="assemblybox"
        >

        
        </div>
        <div id="assemblybox2" class="assemblybox"></div>
        <div id="assemblybox3" class="assemblybox"></div>
        
        
        <button id="backmypg" onclick="backmypg()">戻る</button>
        <button id="hint" onclick="inHint()">保存</button>
    </body>
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/drag.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/inputimage.js"></script>
    <script src="js/styleincustom.js"></script>
    <script src="js/surveillance.js"></script>
    <script src="js/scenario.js"></script>
    <script>
        var hintbox = document.getElementById('customhintbox');
        var sty = document.getElementById('styledialog');
        var stflf = 0;
        function inHint(){
            hintbox.style.display = "block";
        }
        function closeHint(){
            hintbox.style.display = "none";
        }
        function cssin(){
            if(stflf == 0){
                sty.style.display = "block";
                stflf = 1;
            }else{
                sty.style.display = "none";
                stflf = 0;
            }
        }
        function inButton(num){
            toolbox1.style.display = "none";
            toolbox2.style.display = "none";
            toolbox3.style.display = "none";
            var a = document.getElementById("toolbox"+num);
            a.style.display = "block";
        }
        function inButton2(num){
            assemblybox1.style.display = "none";
            assemblybox2.style.display = "none";
            assemblybox3.style.display = "none";
            
            var b = document.getElementById("assemblybox"+num);
            b.style.display = "block";
        }
        
        function backmypg(){
            window.location.href = "/mypage.php";
        }

  
        
      </script>
</html> 