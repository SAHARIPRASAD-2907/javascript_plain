import { v4 as uuidv4 } from "uuid";
let todos = [];

// Fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// getting todo's
const getTodos = () => todos;

// create todos
const createTodo = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  });
  saveTodos();
};

const removeTodo = (id) => {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
  }
};

const toggleTodo = (id) => {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
  }
};

loadTodos();

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo };
