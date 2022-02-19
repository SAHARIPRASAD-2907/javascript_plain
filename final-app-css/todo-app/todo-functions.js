// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON ? JSON.parse(todosJSON) : [];
  // if (todosJSON !== null) {
  //   return JSON.parse(todosJSON);
  // } else {
  //   return [];
  // }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle the compleated value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));
  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      document.querySelector("#todos").appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEL = document.createElement("p");
    messageEL.classList.add("empty-message");
    messageEL.textContent = "No todos to show";
    document.querySelector("#todos").appendChild(messageEL);
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
    saveTodos(todos);
    renderTodos(todos, filters);
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
    saveTodos(todos);
    renderTodos(todos, filters);
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
