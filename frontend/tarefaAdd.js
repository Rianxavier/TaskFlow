const addTarefaBtn = document.querySelector('#addTarefaButton');
const containerTarefa = document.querySelector('.container');

const main = document.querySelector('.main');

let contadorTarefa = 1;

addTarefaBtn.addEventListener('click', () => {
    const divTarefa =  document.createElement('div');
    divTarefa.classList.add('box');

    const inputTarefa = document.createElement('input');
    inputTarefa.type = 'text';
    inputTarefa.name = `tarefa[${contadorTarefa}]`;
    inputTarefa.required = true;
    inputTarefa.autocomplete = 'off';
    inputTarefa.placeholder = 'Tarefa:';

    const labelTarefa = document.createElement('label');
    labelTarefa.htmlFor = 'nome';
    labelTarefa.textContent = 'Tarefa:';

    divTarefa.appendChild(inputTarefa);
    divTarefa.appendChild(labelTarefa);

    containerTarefa.appendChild(divTarefa);

    
    contadorTarefa++;

});