import { getTodos, removeTodo, toggleTodo } from "./todos";
import { getFilters } from "./filters";

// Render application todos based on filters
const renderTodos = () => {
  const todoEl = document.querySelector("#todos");
  const filters = getFilters();
  const filteredTodos = getTodos().filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });

  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDOM(incompleteTodos));
  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEL = document.createElement("p");
    messageEL.classList.add("empty-message");
    messageEL.textContent = "There are no to-dos to show";
    todoEl.appendChild(messageEL);
  }
};

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkBox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  // Setup todo checkbox
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = todo.completed;
  containerEl.appendChild(checkBox);
  checkBox.addEventListener("change", function () {
    toggleTodo(todo.id);
    renderTodos();
  });

  // setup the todo text
  todoText.textContent = todo.text;
  containerEl.appendChild(todoText);

  // setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // Setup the remove button
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    removeTodo(todo.id);
    renderTodos();
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  const plural = incompleteTodos.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
};

export { generateSummaryDOM, generateTodoDOM, renderTodos };
