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

// Making an HTTP request
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("An error has taken place");
  }
});
request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=2");
request.send();
