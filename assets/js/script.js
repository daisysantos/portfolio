// Variaveis de Escopo Global

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");

const cep = documente.querySelector("#CEP")

let nomeOk = false;
let emailOk = false;

function validarNome(){
    
    // Variável de Escopo Local
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome muito curto"
        txtNome.style.color = "red"
        nomeOk = false
    
    }else{
        txtNome.innerHTML = "✔"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

    function validarEmail(){

        let txtEmail = document.querySelector("#txtEmail")
    
        if(email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
            txtEmail.innerHTML = "Email inválido"
            txtEmail.style.color = "red"
            emailOk = false
        
        }else{
            txtEmail.innerHTML = "✔"
            txtEmail.style.color = "green"
            emailOk = true
        }
    }
    function validarEmailRegEx(){

        let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        let txtEmail = document.querySelector("#txtEmail")
    
        if(email.value.match(regex)){
            txtEmail.innerHTML = "✔"
            txtEmail.style.color = "green"
            emailOk = true
        
        }else{
            txtEmail.innerHTML = "Email inválido"
            txtEmail.style.color = "red"
            emailOk = false
        }
    }   
    
    function enviarFormulario(){
        if(nomeOk === true && emailOk === true){
            alert(nome.value+ " ,obrigado pela mensagem!❣️")
        } else {
            alert("POR FAVOR, PREENCHA O FORMULÁRIO CORRETAMENTE. ")
        }
        
}

function consultarCep(){

    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        document.getElementById("dados").innerHTML = 
            jsonBody.logradouro +
            "\n" +
            jsonBody.bairro +
            "\n" +
            jsonBody.localidade +
            "\n" +
            jsonBody.uf
    })
    .catch((error) => {
        alert("CEP não encontrado!")
    });
}