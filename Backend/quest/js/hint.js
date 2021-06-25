// hint.htmlようのテスト処理。クエスト画面には今は関係なし。

var page = 1;
var left = document.getElementById('left');
var right = document.getElementById('right');
var page_cnt = 3;


function hintIn(hint){
    if(hint == 0){
        page--;
    }else{
        page++;
    }
    if(page == 1){
        left.style.display = "none";
        right.style.display = "block";
    }else if (page < page_cnt){
        right.style.display = "block";
        left.style.display = "block";
    }else{
        right.style.display = "none";
        left.style.display = "block";
    }
    // console.log(page);
    var hint_cnt = document.querySelectorAll('[id^="hint_"]');
    // console.log(hint_cnt[page-1].id);
    for(var i = 0;i < hint_cnt.length;i++){
        document.getElementById(hint_cnt[i].id).style.display = "none";
    }
    var hint_id = document.getElementById("hint_"+page);
    // console.log(hint_id);
    hint_id.style.display = "block";
}