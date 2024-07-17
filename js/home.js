let wMassege=document.getElementById('welcomeMassege')
let logOutBtn=document.getElementById('logOutBtn')
if(localStorage.getItem('username')!=null){
    wMassege.innerHTML=`welcome  `+localStorage.getItem('username')+``
}




function logOut(){
     window.location.href="index.html"
}



logOutBtn.addEventListener('click',logOut)