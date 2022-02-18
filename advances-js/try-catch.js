const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Argument must be a number");
  }
};
try {
  const result = getTip(4);
  console.log(result);
} catch (e) {
  console.log("catch block is running");
}

let gradeCalculator = function (studentScore, totalPossibleScore) {
  if (typeof studentScore === "number" && typeof studentScore === "number") {
    percentage = (studentScore / totalPossibleScore) * 100;
    if (percentage > 90 && percentage < 100) return "A";
    if (percentage > 80 && percentage < 89) return "B";
    if (percentage > 70 && percentage < 79) return "C";
    if (percentage > 60 && percentage < 69) return "D";
    if (percentage > 0 && percentage < 59) return "F";
  } else {
    throw Error("Please provide numbers only");
  }
};

//students score , total possible score
try {
  let grade = gradeCalculator(null, 20);
  console.log(`The grade of the student is ${grade}`);
} catch (e) {
  console.log(e);
}
