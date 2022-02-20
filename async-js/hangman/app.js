const puzzleEl = document.querySelector("#puzzle");
const gussesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  game1.makeGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  gussesEl.textContent = game1.statueMessage;
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// fetch API
