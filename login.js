


function Logar (event) {

    event.preventDefault();

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value

    if(user == "") {
        userEmpty = document.querySelector(".userempty").innerHTML = "Insira Seu Usuario"
    }

    if(password == "") {
        passwordErr = document.querySelector(".passwordempty").innerHTML = "Insira Seu Usuario"
    }

    if(user != "" & password != "")  {
        redirectTime();
    }

}

function redirectTime(){
    alert("logando")
    window.location = "https://modoanonimo.github.io/home/acesso-ao-monitoramento.html"
 }