  //ステージに関するもの
  const Mstage = localStorage.getItem("user_stage")
  var   stage1 = document.getElementById("stage1").style.display="none"
  var   stage2 = document.getElementById("stage2").style.display="none"
  var   stage3 = document.getElementById("stage3").style.display="none"
  var back_button =document.getElementById("back_button")
  back_button.style.backgroundColor="gray"

  var next_stage= document.getElementById("next_button")
  //ヒント
  var  hint = document.getElementById("hint_box")
  hint.style.display="none"
  var n =0

//ステージ選択
function select(){
  var  q1=document.getElementById("quest1")
  q1.style.opacity ="1"
}

function unselected(){
    var  q1=document.getElementById("quest1")
    q1.style.opacity ="0"
}
function set(obj){
  localStorage.setItem("stage",10+parseInt(obj.id[5]))
}

//mypage選択
function select1(){
    var  mp1=document.getElementById("mypagebox1")
    mp1.style.opacity ="1"
  }
  
  function unselected1(){
      var  mp1=document.getElementById("mypagebox1")
      mp1.style.opacity ="0"
  }

  //画像の選択処理
function setstage(){
  localStorage.setItem("stage",localStorage.getItem("user_stage"))
}
 


//ステージの表示
  while(n< Mstage[1]){
    n++;
    if(Mstage < 21){
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
if(Mstage[0]>1){
  next_stage.style.display=""
}

