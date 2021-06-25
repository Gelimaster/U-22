// ドラッグアンドドロップ用JS

var flag = 0;
function AllowDrop(ev) {
    ev.preventDefault();
}

function Drag(ev) {
    flag = 0;
    // console.log(ev.target.parentElement.id);
    ev.dataTransfer.setData("text", ev.target.id);
    // ツールボックスから移動(いどう)する場合(ばあい)、複製(ふくせい)するフラグをたてる
    if(ev.target.parentElement.id.match(/toolbox/)){
        flag = 1;
        // console.log("ok");
    }else{
        flag = 0;
        // console.log("no");
    }
    // console.log(flag);
}

function Drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // フラグが建(た)っていた場合(ばあい)、タグを複製(ふくせい)してidを変(か)える
    if(flag == 1){
        var inchild = inputid(data);
        ev.target.appendChild(inchild);
        // console.log(1);
    }else if(flag == 0){
        // フラグが建(た)っていない場合(ばあい)、タグは移動(いどう)のみを行う。
        // console.log(data);
        ev.target.appendChild(document.getElementById(data));
        // console.log(0);
    }
    flag = 2;
}
function Delete(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(flag == 0){
        var del = document.getElementById(data);
        delid(data);
        del.remove();
    }
}