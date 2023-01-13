
let User = "";
let Numero = "";

// function api() {

    fetch("https://api.airtable.com/v0/appZq2F4YYkLgYbQJ/Accounts", {

        headers: {
            Authorization: 'Bearer keyDZqZcB5vKRI8xb',
        }
    }).then((resp) => {
        return resp.json()
    }).then((data) => {
        alunos = data.records

        alunos.map((aluno) => {

            User = aluno.fields.Usuario;
            Numero = aluno.fields.Numero;

            console.log(User + "api " + Numero)

        })
    }

    )
// }


function Logar(event) {

    event.preventDefault();

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value

    if (user == "") {
        userEmpty = document.querySelector(".userempty").innerHTML = "Insira Seu Usuario"
    }

    if (password == "") {
        passwordErr = document.querySelector(".passwordempty").innerHTML = "Insira Seu Usuario"
    }

    // if (user != User || password != Numero) {
    //     alert('usuario Incorreto')

    // }
    if (user == User && password == Numero) {
        localStorage.setItem("Liberado" , user)
        redirectTime();

    }
    if (user != User || password != Numero) {
        alert(' USUARIO SEM AUTORIZACAO')

    }

    console.log(user + "input" + password)

}

function redirectTime() {

    window.location.href = "./acesso-ao-monitoramento.html"
}



