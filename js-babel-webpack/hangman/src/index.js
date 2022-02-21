import { getPuzzle } from "./requests";
import Hangman from "./hangman";

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
  puzzleEl.innerHTML = ``;
  gussesEl.textContent = game1.statueMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
