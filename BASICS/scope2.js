let score = 5
let getNewScoreMessage = function () {
 let score = 2
 return `Score: ${score}`
}
let result = getNewScoreMessage()
console.log(result)
console.log(score)

// Example 1: Leaked global
let getNewScoreMessage = function () {
    if (1 < 2) {
    score = 3
    }
   
    console.log(score)
   }
   getNewScoreMessage()
   console.log(score) // Prints 3
   // Example 2: No leaked global
   let getNewScoreMessage = function () {
    let score
   
    if (1 < 2) {
    score = 3
    }
   
    console.log(score)
   }
   getNewScoreMessage()
   console.log(score) // Will throw an error as score wasn't leaked to the
   //global scope