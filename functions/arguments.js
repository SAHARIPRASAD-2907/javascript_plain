let add = function (x, y, z) {
    return x + y + z
   }
   let result = add(1, 12, 3)
   console.log(result)


let getScoreText = function (name = 'Anonymous', score = 0) {
    return `${name} Score: ${score}`
   }
let text = getScoreText(undefined, 11)
   console.log(text)