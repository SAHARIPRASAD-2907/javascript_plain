// Both logs print the same exact thing
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
   }
   let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
   }
   addExpense(myAccount, 2000)
   console.log(myAccount)

   // Both logs print differen things
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
   }
   let addExpense = function (account, amount) {
    account = {}
    account.age = 1
    console.log(account)
   }
   addExpense(myAccount, 2000)
   console.log(myAccount)