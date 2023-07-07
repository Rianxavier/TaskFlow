// const { async } = require('regenerator-runtime');

const formCadastro = document.querySelector(".cadastro");
const inputNome = formCadastro.querySelector("#nome");
const inputEmail = formCadastro.querySelector("#email");
const inputSenha = formCadastro.querySelector("#senha");
const inputConfirmarSenha = formCadastro.querySelector("#confirmSenha");

const btnVerSenha = document.querySelector("#vSenha");
const btnVerConfSenha = document.querySelector("#eye");

//  Mensagens de Erros - variaveis
const errorEmail = document.querySelector(".alert-danger");
const errorNome = document.querySelector(".error-nome");
const errorSenha = document.querySelector(".error-senha");
const errorSenhaTamanho = document.querySelector(".error-senhaTamanho");



formCadastro.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (inputNome.value.length < 2) {
    errorNome.setAttribute("style", "display: flex");
  }
  else if (inputSenha.value.length < 4 || inputSenha.value.length > 30) {
    errorNome.setAttribute("style", "display: none");
    errorSenhaTamanho.setAttribute("style", "display: flex");
  } else if (inputSenha.value !== inputConfirmarSenha.value) {
    errorNome.setAttribute("style", "display: none");
    errorSenhaTamanho.setAttribute("style", "display: none");
    errorSenha.setAttribute("style", "display: flex");
  } else {
    errorSenhaTamanho.setAttribute("style", "display: none");
    errorSenha.setAttribute("style", "display: none");
    errorNome.setAttribute("style", "display: none");

    formCadastro.submit();
  }
});



btnVerSenha.addEventListener("click", verSenha);
btnVerConfSenha.addEventListener("click", verConfirmarSenha);

function verSenha() {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
}

function verConfirmarSenha() {
  if (inputConfirmarSenha.getAttribute("type") == "password") {
    inputConfirmarSenha.setAttribute("type", "text");
  } else {
    inputConfirmarSenha.setAttribute("type", "password");
  }
}
