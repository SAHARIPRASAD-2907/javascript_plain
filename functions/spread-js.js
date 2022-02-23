const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};
const team = {
  name: "Libery",
  coach: "Casey Penn",
  players: ["Marge", "Aiden", "Herbert", "Sherry"],
};
printTeam(team.name, team.coach, ...team.players);

let cities = ["Barcelona", "Cape Town", "Bordeaux"];
let citiesClone = [...cities, "Santiago"];
console.log(cities); // Will print three citites
console.log(citiesClone); // Will print four citites
