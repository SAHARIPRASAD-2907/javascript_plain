let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017,
};
let clone = {
  ...house,
};
console.log(house); // Will print the same as clone
console.log(clone); // Will print the same as house

const person = {
  name: "Andrew",
  age: 27,
};
const location = {
  city: "Philadelphia",
  country: "USA",
};
const overview = {
  ...person,
  ...location,
  name: "Mike",
};
console.log(overview);
// The above code will print the following
// {
// age: 27,
// city: "Philadelphia",
// country: "USA",
// name: "Mike"
// }
