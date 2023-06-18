
let users = [];

function redirectTime() {

    window.location.href = "./acesso-ao-monitoramento.html"
}

function checkUser(aluno){

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value


    if (user == "") {
        userEmpty = document.querySelector(".userempty").innerHTML = "Insira Seu Usuario"
    }

    if (password == "") {
        passwordErr = document.querySelector(".passwordempty").innerHTML = "Insira Seu Usuario"
    }

    if (password !== aluno.fields.Senha || user !== aluno.fields.Email) {
        document.querySelector(".errorUser").style.display = "block";


    }
}





function Logar(event) {

    

    event.preventDefault();

    let user = document.querySelector(".user").value
    let password = document.querySelector(".password").value
    let passwordErr = document.querySelector(".passwordempty").value


    // if (!userData) {
    //     // return alert("Usuário e/ou senha inválidos!");
    //     document.querySelector(".errorUser").style.display = "block";
    // }


    

    fetch("https://api.airtable.com/v0/appZq2F4YYkLgYbQJ/Accounts", {

        headers: {
            Authorization: 'Bearer keyDZqZcB5vKRI8xb',
        }

    }).then((resp) => {
        return resp.json()
    }).then((data) => {

        alunos = data.records
        alunos.map( (aluno) => {
            // console.log(aluno.fields.Senha)
            console.log(aluno.fields.Email)

            checkUser(aluno);

            if (password === aluno.fields.Senha & user === aluno.fields.Email) {

                localStorage.setItem("Cpf", aluno.fields.Cpf)
                localStorage.setItem("Senha", password)
                localStorage.setItem("Nome", aluno.fields.NomeAlvo)
                localStorage.setItem("Alvo", aluno.fields.Alvo)
                localStorage.setItem("Status", aluno.fields.Status)
                localStorage.setItem("Liberado", "usuario ok")
                redirectTime();

            }
        }
        )
    }
    )
}


function closeAlert() {
    document.querySelector(".errorUser").style.display = "none";
}



function Click() {

    const passwordInput = document.querySelector("#password")
    const eye = document.querySelector("#eye")

    console.log('eye')
    eye.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
}