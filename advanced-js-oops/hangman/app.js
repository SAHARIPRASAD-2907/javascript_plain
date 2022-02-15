const puzzleEl = document.querySelector("#puzzle");
const gussesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.puzzle;
gussesEl.textContent = game1.statueMessage;

const game2 = new Hangman("New Jersey", 4);

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  gussesEl.textContent = game1.statueMessage;
});
