
const formCadastro = document.querySelector('.cadastro');
const inputNome = formCadastro.querySelector('#nome')
const inputEmail = formCadastro.querySelector('#email');
const inputSenha = formCadastro.querySelector('#senha');
const inputConfirmarSenha = formCadastro.querySelector('#confirmSenha');

const btnVerSenha = document.querySelector('#vSenha');
const btnVerConfSenha = document.querySelector('#eye');
let senhaVerifica = false;

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    if(senhaVerifica) {
        formCadastro.submit();
    } else{
        alert('Senha incorreta');
    }
    


})

inputSenha.addEventListener("keyup", passwordIsWrong);
inputConfirmarSenha.addEventListener("keyup", passwordIsWrong);

function passwordIsWrong(){
    if (inputSenha.value !== inputConfirmarSenha.value){
        inputConfirmarSenha.setAttribute('style', 'color: red');
        inputConfirmarSenha.setAttribute('style', ': red');
        inputConfirmarSenha.setAttribute('style', 'border-color: red');
        senhaVerifica = false;
    }else{
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #FF0000');
        senhaVerifica = true;
    }
    if(inputConfirmarSenha.value.length == 0){
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #FF0000');
        senhaVerifica = false;
    }
};



btnVerSenha.addEventListener("click", verSenha);
btnVerConfSenha.addEventListener("click", verConfirmarSenha);

function verSenha() {    
    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }   
}

function verConfirmarSenha() {
    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text')
    }else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
}