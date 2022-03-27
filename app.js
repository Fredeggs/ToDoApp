const todoList = document.querySelector('#todo-list');
const addTodo = document.querySelector('form button');

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  const newButton = document.createElement('button');
  const completed = document.createElement('input');
  completed.setAttribute('type', 'checkbox');
  newButton.innerText = "Remove";
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  newTodo.prepend(completed);
  newTodo.appendChild(newButton);
  todoList.appendChild(newTodo);
}


todoList.addEventListener('click', function(e){
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    } else if (e.target.type === 'checkbox'){
        e.target.parentElement.classList.toggle('toggleComplete');
        console.dir(e.target);
    };
})

addTodo.addEventListener('click', function(e){
    e.preventDefault();
    const newTodo = document.querySelector('#new-todo');
    const newLi = document.createElement('li');
    const newButton = document.createElement('button');
    const completed = document.createElement('input');
    

    newLi.innerText = newTodo.value; 
    newButton.innerText = "Remove";
    completed.setAttribute('type', 'checkbox');
    // save to localStorage
    savedTodos.push({ task: newLi.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    newLi.append(newButton);
    newLi.prepend(completed);
    todoList.append(newLi);    
})