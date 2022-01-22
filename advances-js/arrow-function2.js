const add = function () {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

// arguments exists in normal function and dosent exists
// in arrow function
// Local functions do not bind arguments
// arrow functions do not bind this methods

// arrow functions do not bind this method
const car = {
  color: "red",
  getSummary: () => {
    return `This car is ${this.color}`;
  },
};

console.log(car.getSummary());
