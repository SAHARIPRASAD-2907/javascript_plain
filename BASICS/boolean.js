//=== - equality operator
// !== - no equal operator
// <- less then operator
// >- greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator



//---------------
// === equal
'Andrew' === 'Andrew' // True
'Mike' === 'mike' // False
// !== not equal
'Andrew' !== 32 // True
12 !== 12 // False
// < less than
3 < 40 // True
3 < 3 // False
// <= less than or equal to
// 3 <= 3 // True
// 0 <= -23 // False
// > greater than
16 > -16 // True
-16 > 16 // False
// >= greater than or equal to
-23 >= -40 // True
100 <= -100 // False

// Task for boolean
let age = 5
if(age<=7){
    console.log("the user is a child");
}
else if(age>=65){
    console.log("the user is a senior");
}
else{
    console.log("The user is neither child or senior");
}