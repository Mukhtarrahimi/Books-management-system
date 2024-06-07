const inputText = document.querySelector('#add-book input');
const link = document.querySelector('.btn');
const ul = document.querySelector('ul');
const spanDelete = `<span class = 'delete'>حذف</span>`;
const checkbox = document.querySelector('#hide input');
const inputSearch = document.querySelector('#search-book input');

link.addEventListener('click', function(e){
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);

    StoreTolocalStorage(inputText.value);

    inputText.value = '';
    e.preventDefault();
})
// Function for hide ul and li...............
checkbox.addEventListener('click', function(e){
    if(checkbox.checked){
        ul.style.display = 'none';
    }
    else{
        ul.style.display = 'block';
    }
})



// Function for remove li
ul.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.
        children[0].textContent);

    }
})

function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i] == tasks){
            tasks.splice(i, 1);
        }
    }
    if(tasks.length ==0){
        localStorage.clear();
    }
    else{
        localStorage.setItem('tasks', tasks)
    }
}

document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(let item of tasks){
        const spanName = document.createElement('span');
        spanName.className = 'name';
        spanName.textContent = inputText.value;

        const li = document.createElement('li');
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
    }
})

function  StoreTolocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }
    else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    tasks.push(task);
    localStorage.setItem('tasks', tasks);
}

// For Searching book in ul and li
inputSearch.addEventListener('keyup', function(e){
    for(let search of ul.children){
        if(search.firstElementChild.textContent.indexOf(inputSearch.value) !==-1){
            search.style.display = 'block';
        }
        else{
            search.style.display = 'none';
        }
    }
})

