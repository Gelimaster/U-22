<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <title>Hello Web Quest</title>

    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/box.css">
    <link rel="stylesheet" href="css/tag.css">
    <link rel="stylesheet" href="css/input.css">
    <link rel="stylesheet" href="css/scenario.css">
    <link rel="stylesheet" href="css/eachquest.css" />
    <link rel="stylesheet" href="css/clear.css" />
    <style id="style" type="text/css"></style>
</head>

<body>
    <!-- シナリオ画面 -->
    <div id="scebox" onclick="move()">
        <div id="chabox">
            <div id="shadow"></div>
            <div id="shadow2"></div>
            <div id="charabox"></div>
            <div id="serifubox" class="serifu1"></div>
        </div>
    </div>
    
    <!-- チュートリアル -->
    <div id="tutorialimg" onclick="tutmove()">
      <img alt="チュートリアル" id="tutorialimgin" />
    </div>

    <!-- ゲーム画面 -->
    <button id="stylebutton" onclick="cssin()">CSS</button>
    <div id="visualbox"></div>
    <div id="hintbox">
        <!-- ヒントのテキスト -->
        <div id="hint_text"></div>
        <!-- 答えの表示 -->
        <p id="answer">あなたの答えは。。。</p>
        <button onclick="checkanswer()">答え</button>
        <br>
        <!-- ステージの確認 -->
        <!-- <p class="stage"></p> -->


        <!-- ヒントの表示 -->
        <button id="close" onclick="closeHint()">とじる</button>

        <!-- 報酬、クリア画面 -->
        <div id="clearbox" onclick="moveqc()">
            <div id="clearboxdiv">
                <h2>クリア！！</h2>
                <p id="cleartext"></p>
                <p id="reward"></p>
            </div>
        </div>
    </div>

    <button id="bt1" onclick="inButton(1)">タグ一覧</button>
    <button id="bt2" onclick="inButton(2)">写真一覧</button>
    <button id="bt3" onclick="inButton(3)">テキスト一覧</button>

    <div id="toolbox1" class="toolbox" ondragover="AllowDrop( event );" ondrop="Delete( event, this ); ">
    </div>
    <div id="toolbox2" class="toolbox" ondragover="AllowDrop( event );" ondrop="Delete( event, this ); ">
    </div>
    <div id="toolbox3" class="toolbox" ondragover="AllowDrop( event );" ondrop="Delete( event, this ); ">
        <div id="txt1" class="drag-and-drop" draggable="true" ondragstart="Drag(event)">あいうえお</div>
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
            <p><label>うえ： <input type="number" name="number" max="100" min="1" onchange="idStyleOut(this)" id="Top"></label></p>

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

    <div id="assemblybox1" ondrop="Drop( event, this ); " ondragover="AllowDrop( event );" ondragleave="" class="assemblybox">
    </div>
    <div id="assemblybox2" class="assemblybox"></div>
    <div id="assemblybox3" class="assemblybox"></div>


    <button id="hint" onclick="inHint()">ヒント</button>
</body>
<script src="js/quest/jquery-1.10.2.min.js"></script>
<script src="js/quest/stage.js"></script>
<script src="js/quest/drag.js"></script>
<script src="js/quest/inputtag.js"></script>
<script src="js/quest/inputimage.js"></script>
<script src="js/quest/stylein.js"></script>
<script src="js/quest/surveillance.js"></script>
<script src="js/quest/scenario.js"></script>
<script src="js/quest/hint_text.js"></script>
<script src="js/quest/answer_check.js"></script>

<script>
    var hintbox = document.getElementById('hintbox');
    var sty = document.getElementById('styledialog');
    var stflf = 0;

    function inHint() {
        hintbox.style.display = "block";
    }

    function closeHint() {
        hintbox.style.display = "none";
    }

    function cssin() {
        if (stflf == 0) {
            sty.style.display = "block";
            stflf = 1;
        } else {
            sty.style.display = "none";
            stflf = 0;
        }
    }

    function inButton(num) {
        toolbox1.style.display = "none";
        toolbox2.style.display = "none";
        toolbox3.style.display = "none";
        var a = document.getElementById("toolbox" + num);
        a.style.display = "block";
    }

    function inButton2(num) {
        assemblybox1.style.display = "none";
        assemblybox2.style.display = "none";
        assemblybox3.style.display = "none";

        var b = document.getElementById("assemblybox" + num);
        b.style.display = "block";
    }
</script>

</html>