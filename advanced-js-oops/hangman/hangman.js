class Hangman {
  constructor(word, remainingGuess) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuess;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter) || letter === " ";
    });
  }
  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter);
    });
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get statueMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! the word was "${this.word.join("")}."`;
    } else {
      return "Great work! You guessed the work.";
    }
  }
  get puzzle() {
    let puzzle = "";
    console.log(this.word);
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === "") {
        puzzle = puzzle + letter;
      } else {
        puzzle = puzzle + "*";
      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}
