// Define a variable for our secret number.
var topSecretNumber = Math.floor(Math.random() * 100) + 1;
// Has the user guessed correctly yet?
var correctGuess = false;
// A hint for the user (too low? too high?). Initially, we have no hint.
var hint = "";
// Keep track of how many guesses.
var guessCount = 0;

while (correctGuess !== true) {
  guessCount = guessCount + 1;
  // Prompt the user for a guess.
  var guess = prompt(hint + " Guess the secret number between 1 and 100.");
  if (isNaN(guess)) {
    // Chastise the user for not guessing a number
    hint = "Are you having trouble understanding instructions?";
  } else if (guess < topSecretNumber) {
    // User guessed too low.
    hint = "Too low!";
  } else if (guess > topSecretNumber) {
    // User guessed too high.
    hint = "Too high!";
  } else {
    // If we're here, we know it's a number, it's not too low, and it's not
    // too high, so it must be a correct guess!
    correctGuess = true;
  }
}
// If we're here, we have a correct guess. Congratulate the user.
alert("Great job! You guessed " + topSecretNumber + " in only " + guessCount + " guesses!");
