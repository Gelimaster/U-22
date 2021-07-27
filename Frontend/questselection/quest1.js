  const Mstage = localStorage.getItem("stage")
  var   stage1 = document.getElementById("stage1").style.display="none"
  var   stage2 = document.getElementById("stage2").style.display="none"
  var   stage3 = document.getElementById("stage3").style.display="none"
  var  hint = document.getElementById("hint_box")
  hint.style.display="none"
  var n =0


function select(){
  var  q1=document.getElementById("quest1")
  q1.style.opacity ="1"
}

function unselected(){
    var  q1=document.getElementById("quest1")
    q1.style.opacity ="0"
}

function select1(){
    var  mp1=document.getElementById("mypagebox1")
    mp1.style.opacity ="1"
  }
  
  function unselected1(){
      var  mp1=document.getElementById("mypagebox1")
      mp1.style.opacity ="0"
  }


  while(n< Mstage[1] ){
      n++;
      document.getElementById("stage"+n).style.display=""
  }


function openhint(){
    hint_box.style.display="block"
}
function closehint(){
    hint_box.style.display="none"
}



