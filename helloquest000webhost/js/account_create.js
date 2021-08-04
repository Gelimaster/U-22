//account_create.php
    var username = document.getElementById("username").value
    var id  = document.getElementById("id").value
    var stage  = document.getElementById("stage").value
    var user_coin  = document.getElementById("coin").value
    
    localStorage.setItem('user_id',id)
    localStorage.setItem('user_name',username)
    localStorage.setItem('user_stage',stage)
    localStorage.setItem('user_coin',user_coin)
  