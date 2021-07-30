// タグの表示からHTML文作成までの処理

var ansp ="";
var anspfinal="";
// タグの代入
var tag_num = [];
var tag_id = [];
var tag_name = [];
var tag_area = [];
var html_text1 = [];
var html_text2 = [];
var html_text3 = [];
var tag_class = [];
var stat = [];
var tagcnt = [];

var count = 0;
var html_text = "";
var idlist = "visualbox";

var target = document.getElementById('assemblybox1');

// もとからassemblybox1に入れておくタグのtag_num
var in_num=[];
in_num =[101,100];


window.onload = function (){
    // imageの取得
        $.ajax({
            url:		"./json/image.json",	// データのファイル名
            type:		"GET",			// GET or POST
            dataType:	"json",			// text  json  xml など
            success:	dataRead2		// dataがparseできた時に実行するfunction名
        });
    // タグの取得
        $.ajax({
            url:		"./json/tag.json",	// データのファイル名
            type:		"GET",			// GET or POST
            dataType:	"json",			// text  json  xml など
            success:	dataRead1		// dataがparseできた時に実行するfunction名
        });
    // シナリオの取得
        if(scenarioNo != 0){
            $.ajax({
            url:		"./json/scenario.json",	// データのファイル名
            type:		"GET",			// GET or POST
            dataType:	"json",			// text  json  xml など
            success:	sceRead		// dataがparseできた時に実行するfunction名
            });
        }

}

function dataRead1(res){
    for(var i in res){
		// 代入する配列[カウンター] = functionの引数(いんすう)に指定(してい)した変数(へんすう)[i].jsonファイルのプロパティ;
		tag_num[count] = res[i].tag_num;
		tag_id[count] = res[i].tag_id;
		tag_name[count] = res[i].tag_name;
		tag_area[count] = res[i].tag_area;
        html_text1[count] = res[i].html_text1;
        html_text2[count] = res[i].html_text2;
        html_text3[count] = res[i].html_text3;
        tag_class[count] = res[i].tag_class;
        stat[count] = res[i].status;
        tagcnt[count] = 0;
		// カウンターを増加(ぞうか)させる。
		count++;
	}
    // タグの表示(ひょうじ)
    for(var i = 0; i < count; i++){ 
        if(stat[i]) {
            var tid = tag_id[i] + ("0"+ tagcnt[i]).slice(-2);
            tagcnt[i]++;
            // tagboxの作成
            var tag = document.createElement("div");
            tag.id = tid;
            tag.className = 'tagbox drag-and-drop ' + tag_class[i];
            tag.draggable = "true";
            tag.addEventListener('dragstart',Drag,false);
            document.getElementById("toolbox1").appendChild(tag);
            // tagnameの作成
            var tag = document.createElement("div");
            tag.classList.add('tagname');
            tag.innerHTML = tag_name[i];
            document.getElementById(tid).appendChild(tag);
            
            // tagareaの作成
            var tag = document.createElement("div");
            tag.classList.add('tagarea');
            tag.innerHTML = tag_area[i];
            document.getElementById(tid).appendChild(tag);    
        }
    }
    // assemblybox1に入れる処理
    
    for(var num_cnt = 0;num_cnt < in_num.length;num_cnt++){
        for(var i = 0;i < count;i++){
            if(in_num[num_cnt] == tag_num[i]){
                var tid = tag_id[i] + ("0"+ tagcnt[i]).slice(-2);
                tagcnt[i]++;
                // tagboxの作成
                var tag = document.createElement("div");
                tag.id = tid;
                tag.className = 'tagbox ' + tag_class[i] +' tagin';
                tag.draggable = "true";
                document.getElementById("assemblybox1").appendChild(tag);
                // tagnameの作成
                var tag = document.createElement("div");
                tag.classList.add('tagname');
                tag.innerHTML = tag_name[i];
                tag.style.borderRadius ="10px 10px 0 0";
                document.getElementById(tid).appendChild(tag);
                
                // tagareaの作成
                var tag = document.createElement("div");
                tag.classList.add('tagarea');
                tag.style.display = "block";
                tag.innerHTML = tag_area[i];
                document.getElementById(tid).appendChild(tag);
            }
        }
    }
}

// htmlboxに入力するループ
function roop(target){
    html_text = "";
    ansp="";
    // console.log(target);
    roop2(target);
   

    localStorage.setItem("answer1",anspfinal[0])
    localStorage.setItem("answer2",anspfinal[1]) 
    localStorage.setItem("answer3",anspfinal[2])
    localStorage.setItem("answer4",anspfinal[3]) 


}



function roop2(target){
    var child = target.children;
    var childcnt = target.childElementCount;
    // タグに対応したhtml_textを入れる変数
    // nameに自分自身(じぶんじしん)を入れる。
    // idの抜き出し
    // console.log(child);
    // console.log(childcnt);
    // console.log(id);
    // console.log(count);
    // console.log(cnt); 
    
    localStorage.setItem("answer1","")
    localStorage.setItem("answer2","") 
    localStorage.setItem("answer3","")
    localStorage.setItem("answer4","") 


     

    for(var i = 0; i < childcnt;i++){
        var cnt = 0;
        
        // divのidと一致(いっち)するものをjsonから探(さが)す
        for(var c = 0; c < count && child[i].id.slice(0,-2) != tag_id[c]; c++){
            cnt++;

        }
        //開始(かいし)タグの入力
        html_text = html_text + html_text1[cnt];
        ansp=ansp+child[i].id.slice(0,-2)
        // console.log(child[i].id);
        // console.log(child[i].lastElementChild.firstElementChild.childElementCount);
        // console.log(child[i].lastElementChild);
        if(idlist.includes(child[i].id +"0")){
            // console.log("重複回避");
        }else{
            idlist = idlist +"," + child[i].id +"0";
        }
        // tagarea内の要素がひとつだった場合、<p><img><div><main><nav><header>などの処理
        if(child[i].lastChild.childElementCount == 1){
            html_text = html_text + "id = \"" + child[i].id + "0" + "\" ";
            html_text = html_text + html_text2[cnt];
            // <p>タグなどの中身にテキストを入れるものの処理
            if(child[i].lastElementChild.firstElementChild.childElementCount == 0){
                html_text = html_text + child[i].lastElementChild.firstElementChild.textContent;


                //ラファエルサカエが触った部分  
                ansp=ansp+child[i].nodeName+child[i].lastElementChild.firstElementChild.textContent+"/";
                anspfinal = ansp.split("/")
                
                
                   
       


                
                     
                
    

              
                //ローカルストレージに答えを入れる
                
                // localStorage.setItem("playerasnwer",child[i].lastElementChild.firstElementChild.textContent);
                // localStorage.setItem('playertag',tag_id[c]);

            // <img>タグの場合の写真の挿入処理
            }else if(child[i].lastElementChild.firstElementChild.classList.contains('imgflg') == true){
                html_text = html_text + child[i].lastElementChild.firstElementChild.textContent;
                html_text = html_text + imgin(child[i].lastElementChild.firstElementChild.firstElementChild);

                

            // <div>タグなどの中にまだ要素が含まれる場合
            }else{
                roop2(child[i].lastElementChild.firstElementChild);
            }
        // tagarea内の要素が二つだった場合、<a>などの処理
        }else if(child[i].lastChild.childElementCount == 2){
            if(child[i].lastElementChild.firstElementChild.classList.contains('imgflg') == true){
                html_text = html_text + child[i].lastElementChild.firstElementChild.textContent + "\" ";
                html_text = html_text + "id = \"" + child[i].id + "0" + "\" ";
                html_text = html_text + html_text2[cnt];
                if(child[i].lastElementChild.lastElementChild.childElementCount == 0){
                }else{
                    roop2(child[i].lastElementChild.lastElementChild);
                }
            }else{
                roop2(child[i].lastElementChild.lastElementChild);
            }
        }
        // roop2(child[i].lastElementChild.firstElementChild);
        // 終了(しゅうりょう)タグの入力
        html_text = html_text + html_text3[cnt];
        
    }
    
    // console.log(idArray);
}

// タグの移動(いどう)の際(さい)、複製(ふくせい)する為(ため)のもの
function inputid(target){
    var cou = 0;
    var inchild = document.getElementById(target);
    var newc;
    if(inchild.tagName == "IMG"){
        for(var c = 0;c < count2 && target.slice(0,-2) != image_id[c];c++){
            cou++;
        }
        newc = inchild.cloneNode(true);
        image_cnt[cou]++;
        return newc;
    }
    // console.log(tag_id[0]);
    // console.log(target.slice(0,-2));
    for(var c = 0; c < count && target.slice(0,-2) != tag_id[c]; c++){
        cou++;
        // console.log(count);
    }
    newc = inchild.cloneNode(true);
    newc.id = target.slice(0,-2) + ("0"+ tagcnt[cou]).slice(-2);
    newc.classList.add('tagiri');
    newc.firstChild.classList.add('intagname');
    newc.lastChild.classList.add('tagin');
    newc.addEventListener('dragstart',Drag,false);
    tagcnt[cou]++;
    // console.log(tagcnt[cou]);
    return newc;
}
