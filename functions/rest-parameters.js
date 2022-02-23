const calculateAverage = (...numbers) => {
  /// ...numbers = [n1,n2,n3...nn]
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum / numbers.length;
};
console.log(calculateAverage(0, 100, 88, 64)); // Will print: 63

const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};
printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");
