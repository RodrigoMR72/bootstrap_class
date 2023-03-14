let task = document.getElementById('task');

console.log(task.value);

function addTask() {
    // alert(`Adicionado o item: ${task.value}`);
            
    // Peguei a lista que é componente ul
    let ul = document.getElementById('lista');

    // Inserir o que foi digitado no inpur e colocar no formato de li
    let li = `<li class="list-group-item">${task.value}</li>`

    let tasks = [];

    //if (task.value)

    tasks.push(task.value)

    ul.innerHTML = tasks;
}

