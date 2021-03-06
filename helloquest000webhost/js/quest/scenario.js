var scebox = document.getElementById("scebox");
var shadow = document.getElementById("shadow");
var chabox = document.getElementById("chabox");
var charabox = document.getElementById("charabox");
var serifubox = document.getElementById("serifubox");
var clearbox = document.getElementById("clearbox");
var hintbox = document.getElementById("hintbox");

// 1にするとシナリオが入る。0の場合は表示されない
var scenarioIn = 1;

var msgCnt = 1;

// シナリオNo シナリオが進めば数値も変化する
var scenarioNo = localStorage.getItem("stage");

var chara = [];
var charClass = [];
var charaName = [];
var selifu = [];
var sceCnt = 0;
var c = 0;
var x = 0;
var keep_x = 0;
var tc = 0; //チュートリアルカウント
var scenario_sc_num = 0;

var user_sex = localStorage.getItem("user_sex")

const stagenum = localStorage.getItem('stage');

//　シナリオデータ読込
function sceRead(res) {
    for (var i in res) {
        if (scenarioNo == res[i].sceNo) {
            chara[sceCnt] = res[i].chara;
            if (chara[sceCnt] == "char_1.png,char_2.png") {
                if (user_sex == "男") {
                    chara[sceCnt] = "char11.png,char_2.png"
                } else {
                    chara[sceCnt] = "char12.png,char_2.png"
                }


            }
            if (chara[sceCnt] == "char_1.png") {
                if (user_sex == "男") {
                    chara[sceCnt] = "char11.png"
                } else {
                    chara[sceCnt] = "char12.png"
                }


            }


            charClass[sceCnt] = res[i].charClass;
            charaName[i] = res[i].charaName;
            //主人公をユーザ名にかえる処理
            if (charaName[i] == "主人公") {
                charaName[i] = localStorage.getItem("user_name")
            }
            x = charaName.length - sceCnt - 1
            selifu[sceCnt] = res[i].selifu;
            sceCnt++;
        }
    }
    if (sceCnt != 0) {
        scenario();
    }
}
// console.log(message.substr(0,3));

// シナリオがあるかを確認し、あればシナリオ用のdivが表示される
function scenario() {
    if (scenarioIn == 1) {
        shadow.style.visibility = "visible";
        tutorialimg.style.visibility = "hidden";
        scebox.style.display = "block";
        let stageimgnum = Math.floor(stagenum / 10);
        
        let stageimg = "\"images/st_sc" + stageimgnum + ".png\"";
        document.getElementById("shadow").style.backgroundImage = "url(" + stageimg + ")";
    }
}

// 画面クリック時実行  シナリオ進行
function move() {
    
    if (scenarioIn == 0) {
    } else {
        serifu();
        charaIn();
    }
}

// セリフ表示処理
async function serifu() {
    serifubox.innerHTML = "";
    // １文字ずつ表示する処理
    if (c < sceCnt) {
        for (var i = 0; i <= selifu[c].length; i++) {
            serifubox.innerHTML = charaName[x] + "<br>" + selifu[c].substr(0, i);
            await wait(3);

            
        }
        // serifubox.innerHTML = selifu[c];
        c++;
        x++;
    } else {
        // c = 0;
        keep_x = x;
        scenarioIn = 0;
        // console.log("終了");
    }
    // シナリオ表示後、非表示にする処理
    if (scenarioIn == 0) {
        if (scenario_sc_num == 0) {
            shadow.style.visibility = "hidden";
            scebox.style.display = "none";
        } else {
            var stagenum2 = Math.floor(stagenum / 10);
            var stageurl = '../quest' + stagenum2 + '.php';
            window.location.href = stageurl;
        }
    }
}
// 画像表示処理
function charaIn() {
    charabox.innerHTML = "";
    if (c < sceCnt) {
        var cha = chara[c].split(',');
        var chaCls = charClass[c].split(',');
        for (var i in cha) {
            if (!(cha[i] == "")) {
                var tag = document.createElement("img");
                tag.classList.add(chaCls[i]);
                tag.src = "images/" + cha[i];
                charabox.appendChild(tag);
            }
        }
    }
}

// 待ち処理
function sleepByPromise(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 10));
}
async function wait(sec) {
    // await句を使って、Promiseの非同期処理が完了するまで待機します。
    await sleepByPromise(sec);
}

// チュートリアル画面遷移
function tutmove() {
    tutorialimg.style.visibility = "visible";
    tc++;
    if (stagenum == "11") {
        if (tc < 3) {
            
            tutorialimgin.src = "./images/tut11" + tc + ".png";
        } else {
            tutorialimg.style.visibility = "hidden";
        }
    }
    // 2-1チュートリアル
    if (stagenum == "21") {
        if (tc < 4) {
            
            tutorialimgin.src = "./images/tut21" + tc + ".png";
        } else {
            tutorialimg.style.visibility = "hidden";
        }
    }
}

function scenario_stage_clear() {
    switch (parseInt(scenarioNo)) {
        case 12:
            scenario_sc_num = 01;
            break;
        case 22:
            scenario_sc_num = 02;
            break;
        case 43:
            scenario_sc_num = 03;
            break;
        default:
            
    }
    if ((scenario_sc_num != 0)) {

        scenarioIn = 1;

        $.ajax({
            url: "./json/quest/scenario.json",	// データのファイル名
            type: "GET",			// GET or POST
            dataType: "json",			// text  json  xml など
            success: scenario_sc_text		// dataがparseできた時に実行するfunction名
        });

        // scebox表示
        clearbox.style.visibility = "hidden";
        scebox.style.display = "inline";
        // scebox.onclick = scenario_sc_text();
        shadow.style.visibility = "visible";
        tutorialimg.style.visibility = "hidden";
        scebox.style.display = "block";
        hintbox.style.zIndex = 1;
        let stageimgnum = Math.floor(stagenum / 10);
        
        let stageimg = "\"images/st_sc" + stageimgnum + ".png\"";
        document.getElementById("shadow").style.backgroundImage = "url(" + stageimg + ")";
    }
}

function scenario_sc_text(res) {
    // chara.length = 0;
    // charClass.length = 0;
    // charaName.length = 0;
    // selifu.length = 0;

    for (var i in res) {
        if (scenario_sc_num == res[i].sceNo) {
            chara[sceCnt] = res[i].chara;
            if (chara[sceCnt] == "char_1.png,char_2.png") {
                if (user_sex == "男") {
                    chara[sceCnt] = "char11.png,char_2.png"
                } else {
                    chara[sceCnt] = "char12.png,char_2.png"
                }


            }
            if (chara[sceCnt] == "char_1.png") {
                if (user_sex == "男") {
                    chara[sceCnt] = "char11.png"
                } else {
                    chara[sceCnt] = "char12.png"
                }


            }


            charClass[sceCnt] = res[i].charClass;
            charaName[i] = res[i].charaName;
            //主人公をユーザ名にかえる処理
            if (charaName[i] == "主人公") {
                charaName[i] = localStorage.getItem("user_name")
            }
            
            x = charaName.length - sceCnt - 1 + keep_x;
            selifu[sceCnt] = res[i].selifu;
            sceCnt++;
        }

        x = keep_x;
        scenario();
    }

}
