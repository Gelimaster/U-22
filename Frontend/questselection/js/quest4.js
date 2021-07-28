  //ステージに関するもの
  const Mstage = localStorage.getItem("stage")
  var   stage1 = document.getElementById("stage1").style.display="none"
  var   stage2 = document.getElementById("stage2").style.display="none"
  var   stage3 = document.getElementById("stage3").style.display="none"


  var next_stage= document.getElementById("next_button")
  //ヒント
  var  hint = document.getElementById("hint_box")
  hint.style.display="none"
  var n =0

//ステージ選択
function select(){
  var  q1=document.getElementById("quest4")
  q1.style.opacity ="1"
}

function unselected(){
    var  q1=document.getElementById("quest4")
    q1.style.opacity ="0"
}

//ステージの表示
while(n< Mstage[1]){
  n++;
  if(Mstage < 50){
    document.getElementById("stage"+n).style.display=""
  }else{
    document.getElementById("stage1").style.display=""
    document.getElementById("stage2").style.display=""
    document.getElementById("stage3").style.display=""
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
if(Mstage[0]>4){
  next_stage.style.display=""
}

