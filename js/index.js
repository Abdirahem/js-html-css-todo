const addBtn = document.querySelector('.btn');
const task = document.querySelector('#task');
const todo = document.querySelector('.todo');

addBtn.addEventListener('click',add);

function add(e){
    // list-group
    const ul = document.createElement('ul');
    ul.className = 'list-group';
    // list-item
    const li = document.createElement('li');
    li.className = 'list-item'

    // task
    li.innerText = task.value;
  
    // icons
    const doneIcon = document.createElement('i');
    doneIcon.className = 'fa-solid fa-square-check check';
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash-can trash';
   
    ul.appendChild(li);
    ul.appendChild(deleteIcon);
    ul.appendChild(doneIcon);
    todo.appendChild(ul);
   
 
   
    event.preventDefault(e);
}


// animations

