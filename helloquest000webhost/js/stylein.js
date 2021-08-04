// cssを適用する為の処理


var id_name = document.getElementById("idname1");
var width = document.getElementById("width1");
var height = document.getElementById("height1");
var background_color = document.getElementById("background_c1");
var background_image = document.getElementById("background_i1");
var color = document.getElementById("color1");
var FontSize = document.getElementById("fonts1");
var TextDecoration = document.getElementById("textd1");
var position = document.getElementById("position1");
var left = document.getElementById("left1");
var Top = document.getElementById("top1");
var ListStyleType = document.getElementById("listt1");
var BorderStyle = document.getElementById("borders1");
var BorderColor = document.getElementById("borderc1");
var BorderWidth = document.getElementById("borderw1");
var BorderTopLeftRadius = document.getElementById("borderlr1");
var BorderTopRightRadius = document.getElementById("borderrr1");
var BorderBottomLeftRadius = document.getElementById("borderbr1");
id_name=id_name.value.split(',')
width=width.value.split(',')
height=height.value.split(',')
background_color=background_color.value.split(',')
background_image=background_image.value.split(',')
color=color.value.split(',')
FontSize=FontSize.value.split(',')
TextDecoration=TextDecoration.value.split(',')
position=position.value.split(',')
left=left.value.split(',')
Top=Top.value.split(',')
ListStyleType=ListStyleType.value.split(',')
BorderStyle=BorderStyle.value.split(',')
BorderColor=BorderColor.value.split(',')
BorderWidth=BorderWidth.value.split(',')
BorderTopLeftRadius=BorderTopLeftRadius.value.split(',')
BorderTopRightRadius=BorderTopRightRadius.value.split(',')
BorderBottomLeftRadius=BorderBottomLeftRadius.value.split(',')



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
    var style= document.getElementById("style")
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


var custompgdata = document.getElementById("custompgdata")
function sendcustom(){
    var user_id = document.getElementById("user_id")
    var id_name1 = document.getElementById("id_name");
    var width1 = document.getElementById("width");
    var height1 = document.getElementById("height");
    var background_color1 = document.getElementById("background_color");
    var background_image1 =document.getElementById("background_image");
    var color1 = document.getElementById("color");
    var FontSize1 = document.getElementById("fontsize");
    var TextDecoration1 = document.getElementById("textdecoration");
    var position1 = document.getElementById("position");
    var left1 = document.getElementById("left");
    var Top1 = document.getElementById("top");
    var ListStyleType1 = document.getElementById("liststyletype");
    var BorderStyle1 =document.getElementById("borderstyle");
    var BorderColor1 = document.getElementById("bordercolor");
    var BorderWidth1 = document.getElementById("borderwidth");
    var BorderTopLeftRadius1 =document.getElementById("bordertopleftradius");
    var BorderTopRightRadius1 =document.getElementById("bordertoprightradius");
    var BorderBottomLeftRadius1 =document.getElementById("borderbottomleftradius");

    user_id.value= localStorage.getItem("user_id")
    id_name1.value= id_name.toString()
    width1.value= width.toString()
    height1.value= height.toString()
    background_color1.value= background_color.toString()
    background_image1.value= background_image.toString()
    color1.value= color.toString()
    FontSize1.value= FontSize.toString()
    TextDecoration1.value= TextDecoration.toString()
    position1.value= position.toString()
    left1.value= left.toString()
    Top1.value= top.toString()
    ListStyleType1.value= ListStyleType.toString()
    BorderStyle1.value= BorderStyle.toString()
    BorderColor1.value= BorderColor.toString()
    BorderWidth1.value= BorderWidth.toString()
    BorderTopLeftRadius1.value= BorderTopLeftRadius.toString()
    BorderTopRightRadius1.value= BorderTopRightRadius.toString()
    BorderBottomLeftRadius1.value= BorderBottomLeftRadius.toString()
    console.log(id_name1)
    console.log(width1)
    console.log(height1)
    console.log(background_color1)
    console.log(background_image1)
    console.log(color1)
    console.log(FontSize1)
    console.log(TextDecoration1)
    console.log(position1)
    console.log(left1)
    console.log(Top1)
    console.log(ListStyleType1)
    console.log(BorderStyle1)
    console.log(BorderColor1)
    console.log(BorderWidth1)
    console.log(BorderTopLeftRadius1)
    console.log(BorderTopRightRadius1)
    console.log(BorderBottomLeftRadius1)
    custompgdata.submit()
}