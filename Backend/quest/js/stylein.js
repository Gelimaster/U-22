// cssを適用する為の処理
var id_name = [];
var width = [];
var height = [];
var background_color = [];
var background_image = [];
var color = [];
var FontSize = [];

var wi = document.getElementById('width');
var he = document.getElementById('height');
var ba_co = document.getElementById('background_color');
var ba_im = document.getElementById('background_image');
var co = document.getElementById('color');
var fosi = document.getElementById('FontSize');

var proper = ['id_name','width','height','background_color','color','FontSize'];
var pro1 = ['#','width:','height:','background-color:','color:','font-size:'];
var pro2 = [' {<br>','0px;<br>','0px;<br>',';<br>',';<br>','rem;<br>'];

var idsub = "";
var idsubcnt = 0;
var idcnt2 = 0;
var csstext ="";
var choice = document.getElementById('choiceid');
var idArray = [];



// idの一覧
function idlistin(){
    idArray = idlist.split(',');
    idcnt2 = 0;
    var stylelist = document.getElementById('stylelist');
    stylelist.innerHTML = "";
    for(var idcnt = 0;idcnt < idArray.length;idcnt++){
        id_name[idcnt] = idArray[idcnt];
        if(idArray[idcnt] != "null"){
            var tag = document.createElement("div");
            tag.innerHTML = idArray[idcnt];
            tag.style.width = "100%";
            tag.style.fontSize = "1rem";
            tag.addEventListener('mouseover',hovertag);
            tag.addEventListener('mouseout',tagout);
            tag.addEventListener('click',idstyle);
            document.getElementById("stylelist").appendChild(tag);
            
        }
        idcnt2++;
    }
    // console.log(id_name);
}

// タグにカーソルを合わせて行う処理
function hovertag(event){
    // console.log(event.currentTarget.textContent);
    event.currentTarget.style.backgroundColor = "#90ee90";
    // console.log(document.getElementById(event.currentTarget.textContent));
    document.getElementById(event.currentTarget.textContent).style.backgroundColor = "#90ee90";
}
function tagout(event){
    event.currentTarget.style.backgroundColor = "";
    document.getElementById(event.currentTarget.textContent).style.backgroundColor = "";

}



// cssboxにcssを表記する処理
function idStyleIn(){
    csstext ="";
    for(var i = 0;i < idcnt2;i++){
        if(id_name[i] == null || id_name[i] == "null"){
        }else{
            var cnt = 1;
            for(var c = 1;c < proper.length && eval(proper[c])[i] != null ;c++){
                cnt++;
                // console.log(eval(proper[c])[i]);
                // console.log(cnt);
            }
            if(cnt != 1){
                for(var c = 0;c < proper.length;c++){
                    if(eval(proper[c])[i] != null){
                        csstext = csstext + pro1[c] + eval(proper[c])[i] + pro2[c];
                    }
                }    
            csstext = csstext + "}<br>";
            }

        }
    }
}

// 
function idStyleOut(out){
    // console.log(out.id);
    // console.log(out.value);
    // console.log(eval(out.id));
    // console.log(cssbox.textContent);
    eval(out.id)[idsubcnt] = out.value;
    idStyleIn();
    cssbox.innerHTML = csstext;
    style.innerHTML =cssbox.textContent;
}

// 削除されたタグのid削除
function delid(data){
    var data1 = data + "0";
    // console.log(data1);
    // console.log(idlist.indexOf(data1));
    // console.log(data1.length);
    idlist = idlist.replace(data1,null);
    idlistin();
    idStyleIn();
}

// id一覧を選択した場合に行う処理
function idstyle(event){
    idsubcnt = 0;
    choice.innerHTML ="";
    idsub = event.currentTarget.textContent;
    choice.innerHTML = event.currentTarget.textContent;
    for(var sub = 0;sub < id_name.length && idsub != id_name[sub];sub++){
        idsubcnt++;
    }
    wi.value = "";
    he.value = "";
    ba_co.value = "#000000";
    co.value = "#000000";
    fosi.value = "";
    if(width[idsubcnt] != null){
        wi.value = width[idsubcnt];
    }
    if(height[idsubcnt] != null){
        he.value = height[idsubcnt];
    }
    if(background_color[idsubcnt] != null){
        ba_co.value = background_color[idsubcnt];
    }
    if(color[idsubcnt] != null){
        co.value = color[idsubcnt];
    }
    if(FontSize[idsubcnt] != null){
        fosi.value = FontSize[idsubcnt];
    }
    // ba_im.value = background_image[idcnt];
}