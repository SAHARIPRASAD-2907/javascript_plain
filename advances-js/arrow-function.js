const square = (num) => {
  return num * num;
};

const squareShore = (num) => num * num;
console.log(square(5));

const people = [
  { name: "Andrew", age: 27 },
  {
    name: "Vikram",
    age: 31,
  },
  {
    name: "jess",
    age: 23,
  },
];

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const person = people.find((p) => p.age === 23);

console.log(person.name);
