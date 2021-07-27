const todo = ['a','b','c','d','e']
console.log(`you have ${todo.length} todos`);

// console.log(todo);
// todo.splice(2,1)
// todo.splice(todo.length,0,"last item")
// console.log(todo);

const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work',
'Exercise']
// This will print a numbered list for each todo item
todos.forEach(function (todo, index) {
 const num = index + 1
 console.log(`${num}. ${todo}`)
})
// call back function function called inside a function

//Filtering array 
const todos = [{
    text: 'Order cat food',
    completed: false
   }, {
    text: 'Clean kitchen',
    completed: true
   }, {
    text: 'Do work',
    completed: false
   }]
   const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
    return !todo.completed
    })
   }
   // Will print an array of all todos that still need to be completed
   console.log(getThingsToDo(todos))


   //Sorting Array
   const todos = [{
    text: 'Buy food',
    completed: true
   }, {
    text: 'Do work',
    completed: false
   }, {
    text: 'Exercise',
    completed: true
   }]
   const sortTodos = function (todos) {
    todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
    return -1
    } else if (!b.completed && a.completed) {
    return 1
    } else {
    return 0
    }
    })
   }