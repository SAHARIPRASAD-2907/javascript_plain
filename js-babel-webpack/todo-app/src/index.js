import { v4 as uuidv4 } from "uuid";
import { renderTodos, saveTodos, getSavedTodos } from "./todo-function";
let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  if (text.length > 0) {
    e.preventDefault();
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
  }
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
