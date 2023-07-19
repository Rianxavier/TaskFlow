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

const checkboxes = document.querySelectorAll(".checkbox");
const botaoSalvar = document.querySelector(".btn-salvar");

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        botaoSalvar.setAttribute('style', 'display:block');
      });
  });
