  //ステージに関するもの
  const Mstage = localStorage.getItem("user_stage")
  var   stage1 = document.getElementById("stage1").style.display="none"


  var next_stage= document.getElementById("next_button")
  //ヒント
  var  hint = document.getElementById("hint_box")
  hint.style.display="none"
  var n =0

//ステージ選択
function select(obj){
  localStorage.setItem("stage",10+parseInt(obj.id[5]))
  var  q1=document.getElementById("quest3")
  q1.style.opacity ="1"
}

function unselected(){
    var  q1=document.getElementById("quest3")
    q1.style.opacity ="0"
}

//ステージの表示
while(n< Mstage[1]){
  n++;
  if(Mstage < 40){
    document.getElementById("stage"+n).style.display=""
  }else{
    document.getElementById("stage1").style.display=""
  }  
  if(Mstage <30){
    document.getElementById("stage1").style.display="none"
  }
}


//ヒント表示
function openhint(){
    hint_box.style.display="block"
}
function closehint(){
    hint_box.style.display="none"
}

//次の町を表示する判断
next_stage.style.display="none"
if(Mstage[0]>3){
  next_stage.style.display=""
}

