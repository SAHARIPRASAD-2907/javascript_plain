// Global scope (add)
 // Local scope (a, b, result)
 let add = function (a, b) {
    let result = a + b
    return result
   }
   console.log(add(2, 4))
   // Unable to access a, b, or result. They are not in scope in the global
   