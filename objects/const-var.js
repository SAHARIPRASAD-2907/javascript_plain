const isRaining = true
isRaining = false
console.log(isRaining)

var name = 'Andrew'
name = 'Vikram'
console.log(name)

if (true) {
    var name = 'Andrew'
    let age = 26
   }
   console.log(name) // Will print: Andrew
   console.log(age) // Will print: ReferenceError

   const setupVariables = () => {
    var name = 'Andrew'
    let age = 26
   }
   setupVariables()
   console.log(name) // Will print: ReferenceError
   console.log(age) // Will print: ReferenceError

   var name = 'Andrew'
var name = 'Mike'
console.log(name) // Will print: Mike

age = 6
console.log(age) // Will print: 6
var age


var age
age = 6
console.log(age) // Will print: 6


