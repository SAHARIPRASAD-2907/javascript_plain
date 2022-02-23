const todo = {
  id: "asdfpoijwermasdf",
  text: "Pay the bills",
  completed: false,
};
const {
  text: todoText,
  completed,
  details = "No details provided",
  ...others
} = todo;
console.log(todoText); // Will print: "Pay the bills"
console.log(completed); // Will print: false
console.log(details); // Will print: "No details provided"
console.log(others); // Will print: { id: "asdfpoijwermasdf" }

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodo(todo);

const age = [65, 0, 13];
const [firstAge, ...otherAges] = age;
console.log(firstAge); // Will print: 65
console.log(otherAges); // Will print: [0, 13]
