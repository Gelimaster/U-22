 var b= document.getElementById("b")
var stage = document.getElementById("stage")
const now_stage=localStorage.getItem("user_stage")
var nstage = parseInt(now_stage[1])
var nstage0 =parseInt(now_stage[0])
stage.innerHTML=now_stage[0] + "-" + now_stage[1]

if(nstage == 1 && nstage0==1){
  b.style.display="none"
}else{
  b.style.display=""
}
function back(){
  if(nstage ==1){
 b.style.display=""
    localStorage.setItem("user_stage",parseInt(now_stage)-10+2)
  }else{
    localStorage.setItem("user_stage",parseInt(now_stage)-1)
  }
location.reload()
}

function next(){
if(nstage==3){
  localStorage.setItem("user_stage",parseInt(now_stage)+10-2)
}else{
  localStorage.setItem("user_stage",parseInt(now_stage)+1)
}
  location.reload()
}