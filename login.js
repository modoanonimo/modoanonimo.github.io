
let users = [];


fetch("https://api.airtable.com/v0/appZq2F4YYkLgYbQJ/Accounts", {

    headers: {
        Authorization: 'Bearer keyDZqZcB5vKRI8xb',
    }

}).then((resp) => {
    return resp.json()
}).then((data) => {
    alunos = data.records
    alunos.map((aluno) => {
        return users.push(aluno.fields);
    })
   
}

)



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

    const userData = users.find(item => item.Email == user);


    if (!userData) {
        // return alert("Usuário e/ou senha inválidos!");
        document.querySelector(".errorUser").style.display = "block";
    }

    if (password == userData.Senha & user == userData.Email) {
        localStorage.setItem("Liberado", user)
        localStorage.setItem("Senha", password)
        redirectTime();

    } else {
        // return alert("Usuário e/ou senha inválidos!");
        document.querySelector(".errorUser").style.display = "block";
    }

}

function redirectTime() {

    window.location.href = "./acesso-ao-monitoramento.html"
}


function closeAlert() {
    document.querySelector(".errorUser").style.display = "none";
}


