let logUserName=document.getElementById('logEmailInput')
let logUPassName=document.getElementById('logPasInput')
let logBtn=document.getElementById("logInBtn")
let alertMassage = document.getElementById("alertmassge")
let usersData = [];
if (localStorage.getItem('user') != null) {
    usersData = JSON.parse(localStorage.getItem('user'))
}






function logIn(){
    if(checkInputs()==true){
        alertMassge('all inputs are required','red')
    }else{
        if(checkInput()==true){
            window.location.href="home.html"
        }
        else{
            alertMassge('email or pasword are not correct', 'red')
        }
    }
}



function alertMassge(text, color) {
    alertMassage.classList.replace('d-none','d-block')
    alertMassage.innerHTML = text
    alertMassage.style.color = color
}


function checkInput(){
    for(let j=0;j<usersData.length;j++){
        if(usersData[j].uEmail==logUserName.value&&usersData[j].uPas==logUPassName.value){
            localStorage.setItem("username",usersData[j].uName)
            return true
        }else{
            return false
        }
    }
}




function checkInputs() {
    if (logUserName.value == '' || logUPassName.value == '')
        return true;
    else
        return false;
}



logBtn.addEventListener('click',logIn)