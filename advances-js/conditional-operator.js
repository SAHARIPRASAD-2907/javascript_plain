// const myAge = 27;
// let message = myAge >= 18 ? "you can vote!" : "You cannot vote.";

// if (myAge >= 18) {
//   message = "you can vote!";
// } else {
//   message = "You cannot vote.";
// }

// console.log(message);

const myAge = 27;
const showPage = () => "Showing the page";

const showErrorPage = () => "Showing the error page";
const message = myAge >= 21 ? showPage() : showErrorPage();

console.log(message);

const team = ["Tyler", "Porter", "Andrew", "Ben", "Mike"];
console.log(
  team.length <= 4
    ? `Team size: ${team.length}`
    : `Too many people on your team`
);
