const deleteLink = document.querySelectorAll('.deleteLink');
const msgConfirmDelete = document.querySelector('.msgConfirmDelete');
const confirmDeleteBtn = document.querySelector('.confirmDeleteBtn');
const cancelDeleteBtn = document.querySelector('.cancelDeleteBtn');

deleteLink.forEach((link) =>{
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
