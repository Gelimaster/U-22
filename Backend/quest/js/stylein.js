// cssを適用する為の処理
var id_name = [];
var width = [];
var height = [];
var background_color = [];
var background_image = [];
var color = [];
var FontSize = [];
var TextDecoration = [];
var position = [];
var left = [];
var Top = [];
var ListStyleType = [];
var BorderStyle = [];
var BorderColor = [];
var BorderWidth = [];
var BorderTopLeftRadius = [];
var BorderTopRightRadius = [];
var BorderBottomLeftRadius = [];

var wi = document.getElementById('width');
var he = document.getElementById('height');
var ba_co = document.getElementById('background_color');
var ba_im = document.getElementById('background_image');
var co = document.getElementById('color');
var fosi = document.getElementById('FontSize');
var tede = document.getElementById('TextDecoration');
var po = document.getElementById('position');
var le = document.getElementById('left');
var to = document.getElementById('Top');
var lity = document.getElementById('ListStyleType');
var bost = document.getElementById('BorderStyle');
var boco = document.getElementById('BorderColor');
var bowi = document.getElementById('BorderWidth');
var btlr = document.getElementById('BorderTopLeftRadius');
var btrr = document.getElementById('BorderTopRightRadius');
var bblr = document.getElementById('BorderBottomLeftRadius');
var bbrr = document.getElementById('BorderBottomRightRadius');

var proper = ['id_name','width','height','background_color','color','FontSize','TextDecoration','position','left','Top','ListStyleType','BorderStyle','BorderColor','BorderWidth','BorderTopLeftRadius','BorderTopRightRadius','BorderBottomLeftRadius','BorderBottomRightRadius'];
var pro1 = ['#','width:','height:','background-color:','color:','font-size:','text-decoration:','position:','left:','top:','list-style-type:','border-style:','border-color:','border-width:','border-top-left-radius:','border-top-right-radius:','border-bottom-left-radius:','border-bottom-right-radius:'];
var pro2 = [' {<br>','0px;<br>','0px;<br>',';<br>',';<br>','rem;<br>',';<br>',';<br>','0px;<br>','0px;<br>',';<br>',';<br>',';<br>','px;<br>','%;<br>','%;<br>','%;<br>','%;<br>'];
var shortpro = ['wi','he','ba_co','ba_im','co','fosi','tede','po','le','to','lity','bost','boco','bowi','btlr','btrr','bblr','bbrr'];


var idsub = "";
var idsubcnt = 0;
var idcnt2 = 0;
var csstext ="";
var choice = document.getElementById('choiceid');
var idArray = [];

// ボタンクリック時にそれぞれのcss適用ボックス表示
function inButton3(num){
    if(idsub != ""){
        stylebox1.style.display = "none";
        stylebox2.style.display = "none";
        stylebox3.style.display = "none";
        stylebox4.style.display = "none";
        stylebox5.style.display = "none";
        stylebox6.style.display = "none";
        
        var b = document.getElementById("stylebox"+num);
        b.style.display = "block";
    }
}

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
                // console.log(proper[c]);
                // console.log(eval(proper[c]));
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
    // console.log(csstext);
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
    tede.value = "";
    po.value = "";
    le.value = "";
    to.value = "";
    lity.value = "";
    bost.value = "";
    boco.value = "#000000";
    bowi.value = "";
    btlr.value = "";
    btrr.value = "";
    bblr.value = "";
    bbrr.value = "";

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
    if(TextDecoration[idsubcnt] != null){
        tede.value = TextDecoration[idsubcnt];
    }
    if(position[idsubcnt] != null){
        po.value = position[idsubcnt];
    }
    if(left[idsubcnt] != null){
        le.value = left[idsubcnt];
    }
    if(Top[idsubcnt] != null){
        to.value = Top[idsubcnt];
    }
    if(ListStyleType[idsubcnt] != null){
        lity.value = ListStyleType[idsubcnt];
    }
    if(BorderStyle[idsubcnt] != null){
        bost.value = BorderStyle[idsubcnt];
    }
    if(BorderColor[idsubcnt] != null){
        boco.value = BorderColor[idsubcnt];
    }
    if(BorderWidth[idsubcnt] != null){
        bowi.value = BorderWidth[idsubcnt];
    }
    if(BorderTopLeftRadius[idsubcnt] != null){
        btlr.value = BorderTopLeftRadius[idsubcnt];
    }
    if(BorderTopRightRadius[idsubcnt] != null){
        btrr.value = BorderTopRightRadius[idsubcnt];
    }
    if(BorderBottomLeftRadius[idsubcnt] != null){
        bblr.value = BorderBottomLeftRadius[idsubcnt];
    }
    if(BorderBottomRightRadius[idsubcnt] != null){
        bbrr.value = BorderBottomRightRadius[idsubcnt];
    }
    // ba_im.value = background_image[idcnt];
}