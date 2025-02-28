 var istatus=document.querySelector("h5")
 var adds=document.querySelector("#add")
 var check=0;

 adds.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="friend"
        istatus.style.color="green"
        adds.innerHTML="remover friend"
        check=1
    }else{
        istatus.innerHTML="stranger"
        istatus.style.color="red"
        adds.innerHTML="add friend"
        check=0
    }

 })