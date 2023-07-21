const deleteTarefaTotal = document.querySelectorAll('.deleteTarefaTotal');
const msgConfirmDelete = document.querySelector('.msgConfirmDelete');
const confirmDeleteBtn = document.querySelector('.confirmDeleteBtn');
const cancelDeleteBtn = document.querySelector('.cancelDeleteBtn');

deleteTarefaTotal.forEach((link) =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
    
        msgConfirmDelete.setAttribute('style', 'display:block;');
        const tarefaId = this.getAttribute('href').split('/').pop(); // Obtém o ID da tarefa

        confirmDeleteBtn.addEventListener('click', function(){
            window.location.href = `/tarefa/delete/${tarefaId}`;
        });

        cancelDeleteBtn.addEventListener('click', function(){
            msgConfirmDelete.setAttribute('style', 'display:none;');
        });
    })
})


const tarefas = document.querySelectorAll(".card-back");
const estadoInicialCheckboxes = [];

tarefas.forEach(tarefa => {
  const contaTarefa = tarefa.querySelector('.conta-tarefas');
  const contadorTarefa = parseInt(contaTarefa.textContent);
  console.log(contadorTarefa);

  if (contadorTarefa > 6) {
    tarefa.setAttribute('style', 'overflow-y: auto;');
  }
  const checkboxes = tarefa.querySelectorAll(".checkbox");
  const estadoInicialTarefa = [];

  checkboxes.forEach(checkbox => {
    const id = checkbox.dataset.id;
    const checked = checkbox.checked;
    estadoInicialTarefa.push({ id, checked });

    checkbox.addEventListener("click", () => {
      verificarMudanca(tarefa);
    });
  });

  estadoInicialCheckboxes.push(estadoInicialTarefa);
});

function verificarMudanca(tarefa) {
  const checkboxes = tarefa.querySelectorAll(".checkbox");
  const botoesSalvar = tarefa.querySelector(".btn-salvar");

  let algumMudou = false;

  checkboxes.forEach((checkbox, index) => {
    const id = checkbox.dataset.id;
    const estadoInicialCheckbox = estadoInicialCheckboxes.find(tarefa => tarefa.find(item => item.id === id));



    if (checkbox.checked !== estadoInicialCheckbox[index].checked) {
      algumMudou = true;
    }
  });

  if (algumMudou) {
    botoesSalvar.style.display = "block";
  } else {
    botoesSalvar.style.display = "none";
  }
}
