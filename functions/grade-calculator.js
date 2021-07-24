let gradeCalculator = function(studentScore,totalPossibleScore){
    percentage = (studentScore/totalPossibleScore)*100
    if(percentage >90 && percentage <100) return "A"
    if(percentage >80 && percentage <89) return "B"
    if(percentage >70 && percentage <79) return "C"
    if(percentage >60 && percentage <69) return "D"
    if(percentage >0 && percentage <59) return "F"
}

//students score , total possible score
let grade = gradeCalculator(15,20)
console.log(`The grade of the student is ${grade}`);