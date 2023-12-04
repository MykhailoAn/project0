const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  alert('New TODO button clicked!');
}

function deleteTodo(todoId) {
  const todoElement = document.getElementById(todoId);

  if (todoElement) {
    list.removeChild(todoElement);

    updateTodoCounts();
  }
}

function newTodo() {
  const todoText = document.getElementById('todo-text-input').value;

  if (!todoText) {
    alert('Please enter TODO text!');
    return;
  }

  const todoId = `todo-${Date.now()}`;
  const todoElement = document.createElement('li');
  todoElement.id = todoId;
  todoElement.className = classNames.TODO_ITEM;

  todoElement.innerHTML = `
    <input type="checkbox" class="${classNames.TODO_CHECKBOX}" onchange="updateTodoCounts()">
    <span class="${classNames.TODO_TEXT}">${todoText}</span>
    <button class="${classNames.TODO_DELETE}" onclick="deleteTodo('${todoId}')">Delete</button>
  `;

  list.appendChild(todoElement);

  document.getElementById('todo-text-input').value = '';

  updateTodoCounts();
}

function updateTodoCounts() {
  const todos = document.getElementsByClassName(classNames.TODO_ITEM);

  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = [...todos].filter(
    (todo) => !todo.querySelector(`.${classNames.TODO_CHECKBOX}`).checked,
  ).length;
}
