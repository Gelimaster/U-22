// ドラッグアンドドロップ用JS
// ツールボックスから複製するフラグになる変数
var flag = 2;
var txtflag = 0;
var imgflag = 0;


function AllowDrop(ev) {
    ev.preventDefault();
}

function Drag(ev) {
    flag = 0;
    txtflag = 0;
    imgflag = 0;
    var data = ev.target.id;
    // console.log(data);
    // console.log(document.getElementById(data).tagName);
    ev.dataTransfer.setData("text", ev.target.id);
    // ツールボックスから移動(いどう)する場合(ばあい)、複製(ふくせい)するフラグをたてる
    if(ev.target.parentElement.id.match(/toolbox/)){
        flag = 1;
        // console.log("ok");
    }else{
        flag = 0;
        // console.log("no");
    }
    // テキストの移動の場合のフラグをたてる
    if(ev.target.parentElement.id == "toolbox3"){
        txtflag = 1;
        // console.log("text");
    }else{
        txtflag = 0;
    }
    //写真の移動の場合のフラグをたてる
    if(document.getElementById(data).tagName == "IMG"){
        imgflag = 1;
        // console.log("text");
    }else{
        imgflag = 0;
    }
    
    // console.log(flag);
}

function Drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // console.log(ev.target.childElementCount);
    // console.log(document.getElementById(data).tagName);
    // console.log(ev.target.className);
    // if(txtflag == 1){
    //     if(flag == 1){
    //         if(ev.target.className == "textbox"){
    //             ev.target.innerHTML = document.getElementById(data).textContent;
    //         }
    //     }else if(flag == 0){
            
    //     }
    // }else if(imgflag == 1){
    //     if(flag == 1){
    //         if(ev.target.className == "imgs imgflg"){
    //             var inchild = inputid(data);
    //             ev.target.appendChild(inchild);
    //         }
    //         // console.log(1);
    //     }else if(flag == 0){
    //         // フラグが建(た)っていない場合(ばあい)、タグは移動(いどう)のみを行う。
    //         // console.log(data);
    //         ev.target.appendChild(document.getElementById(data));
    //         // console.log(0);
    //     }
    // }else{
    // フラグが建(た)っていた場合(ばあい)、タグを複製(ふくせい)してidを変(か)える
    // console.log(ev.target.classList.contains('imgs'));
        if(flag == 1){
            if(txtflag == 1){
                // テキストの場合、テキストタグの中にのみ複製可能にする
                if(ev.target.className == "textbox"){
                    ev.target.innerHTML = document.getElementById(data).textContent;
                }
            }else if(imgflag == 1){
                // 写真の場合、写真タグにのみ複製可能にする
                if(ev.target.className == "imgs imgflg"){
                    //写真タグに既に写真が入っている場合は、入らないようにする。
                    if(ev.target.childElementCount == 0){
                        var inchild = inputid(data);
                        ev.target.appendChild(inchild);
                    }
                }
            }else{
                // カーソルが白枠に入っているかの確認
                if(ev.target.classList.contains('tagarea') || ev.target.classList.contains('textbox') || ev.target.classList.contains('imgs') || ev.target.classList.contains('imgwide') || ev.target.classList.contains('tagname') || ev.target.classList.contains('tagbox')){
                }else{
                    var inchild = inputid(data);
                    ev.target.appendChild(inchild);
                }
            }        
            // console.log(1);
        }else if(flag == 0){
            // フラグが建(た)っていない場合(ばあい)、タグは移動(いどう)のみを行う。
            // console.log(data);
            if(imgflag == 1){
                // 写真の場合、写真タグにのみ移動可能にする
                if(ev.target.className == "imgs imgflg"){
                    ev.target.appendChild(document.getElementById(data));
                }
            }else{
                // カーソルが白枠に入っているかの確認
                if(ev.target.classList.contains('tagarea') || ev.target.classList.contains('textbox') || ev.target.classList.contains('imgs') || ev.target.classList.contains('imgwide') || ev.target.classList.contains('tagname') || ev.target.classList.contains('tagbox')){
                }else{
                    ev.target.appendChild(document.getElementById(data));
                }
            }
            // ev.target.appendChild(document.getElementById(data));
            // console.log(0);
        }
        flag = 2;
    // }
}
    
// タグをツールボックスに入れると削除する
function Delete(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // console.log(document.getElementById(data).lastChild.firstChild.textContent);
    if(flag == 0){
        var del = document.getElementById(data);
        delid(data);
        del.remove();
    }
    // flag = 2;
}