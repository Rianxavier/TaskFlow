const btnVerSenha = document.querySelector('#verSenha');
const inputSenha = document.querySelector("#senha");

btnVerSenha.addEventListener("click", verSenha);

function verSenha() {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
}
