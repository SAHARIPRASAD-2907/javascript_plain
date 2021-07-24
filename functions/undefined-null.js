let name2
console.log(name2) // Will print undefined

let double = function (x) {
    if (x === undefined) {
    console.log('Please provide x') // This will print
    } else {
    console.log(x)
    }
   }
double()


let name1 = 'Andrew'
name1 = null
if (name1 === null) {
 console.log('No name is set!')
}