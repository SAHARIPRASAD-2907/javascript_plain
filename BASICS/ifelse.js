let ticketStatus = 'closed'
if (ticket === 'closed') {
 console.log('This support ticket has been closed')
}

let age = 18
if (age >= 18) {
 console.log('You are an adult')
} else {
 console.log('You are not an adult')
}

let age = 26
let isChild = age <= 7
let isSenior = age >= 65
if (isChild) {
 console.log('Welcome! You are free.')
} else if (isSenior) {
 console.log('Welcome! You get a discount.')
} else {
 console.log('Welcome!')
}

let isAccountActive = false
// This condition will pass if isAccountActive is false
if (!isAccountActive) {
 console.log('Account is locked')
}

//my name is hariprasad