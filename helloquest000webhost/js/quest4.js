  //ステージに関するもの
  const Mstage = localStorage.getItem("user_stage")
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
function set(obj){
  localStorage.setItem("stage",40+parseInt(obj.id[5]))
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
  if(Mstage <40){
    document.getElementById("stage1").style.display="none"
    document.getElementById("stage2").style.display="none"
    document.getElementById("stage3").style.display="none"
  }
}


//ヒント表示
function openhint(){
    hint_box.style.display="block"
}
function closehint(){
    hint_box.style.display="none"
}



