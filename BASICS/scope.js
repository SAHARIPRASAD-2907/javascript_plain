// java uses lexical scoping 
// Golobal scope - defined outside of all code blocks
// Local scopr - Defined inside a code block

//In a scope yo can access variables defined in that scopre or 
// in any parent or ansistor scope
let name1 = 'Andrew'
let getName = function () {
 console.log(name1)
 let age = 26
 if (2 > 0) {
 console.log(name1)
 console.log(age)
 let location = 'Philadelphia'
 }
}
getName()
console.log(age)
if (1 < 2) {
 console.log(name1)
 let height = 72
 getName()
}