let nameinput = document.getElementById('nameInput');
let emailinput = document.getElementById('emailInput');
let pasinput = document.getElementById('pasInput');
let signUpbtn = document.getElementById("sBtn");
let alertMassage = document.getElementById("alertMassge")
let usersData = [];
if (localStorage.getItem('user') != null) {
    usersData = JSON.parse(localStorage.getItem('user'))
}

function signUp() {
    let userinfo = {
        uName: nameinput.value,
        uEmail: emailinput.value,
        uPas: pasinput.value,
    }
    if (checkInputs() == true) {
        alertMassge("all inputs are required","red")
    }
    else {
        if(checkemail()==true){
            alertMassge("email is exist","red")
        }
        else{
        usersData.push(userinfo)
        localStorage.setItem("user", JSON.stringify(usersData))
        clrform()
        window.location.href="index.html"
        }
    }
}




function alertMassge(text, color) {
    alertMassage.classList.replace('d-none', 'd-block')
    alertMassage.innerHTML = text
    alertMassage.style.color = color
}




// function alertMassgeeR() {
//     alertMassage.classList.replace('d-none', 'd-block')
//     alertMassage.innerHTML = 'all inputs are required'
//     alertMassage.style.color = "red"
// }






// function alertMassgeeE() {
//     alertMassage.classList.replace('d-none', 'd-block')
//     alertMassage.innerHTML = 'email is exist'
//     alertMassage.style.color = "red"
// }







function checkInputs() {
    if (nameinput.value == '' || emailinput.value == '' || pasinput.value == '')
        return true;
    else
        return false;
}








function clrform() {
    nameinput.value = ''
    emailinput.value = ''
    pasinput.value = ''
}


function checkemail() {
    for (let i = 0; i < usersData.length; i++) 
    {
        if (usersData[i].uEmail == emailinput.value)
            return true
    }
}



signUpbtn.addEventListener('click', signUp)

