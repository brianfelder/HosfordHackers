// The words in our dictionary.
var words = [
	"jujitsu",
	"carjack",
	"tastier",
	"stories",
	"tostada",
	"tailors",
	"seaside",
];

// Pick a random word from our dictionary
var randomWord = words[Math.floor(Math.random() * words.length)];

// How many times the user has missed.
var missesRemaining = 5;

var guessedLetters = [];

// Make the secret the same length as the word.
// Array values will initially be Undefined.
// We'll add found letters as we go.
var wordSecret = Array(randomWord.length);
// Fill the array with underscores.
for (var i = 0; i < randomWord.length; i++) {
	wordSecret[i] = "_";
}

// How many letters have been found?
var foundLetterCount = 0;

while ((missesRemaining > 0) && (foundLetterCount < randomWord.length)) {
	// Show the user the current status of their guesses, and how many misses left.
	console.log("Current word status: '" + wordSecret.join(" ") + "'");
	console.log("You have " + missesRemaining + " misses remaining.");
	var currentGuess = prompt("Guess a letter.");
	if (! currentGuess) {
		// User needs to enter a guess.
	} else if (currentGuess.length != 1) {
		// User needs to enter a guess of length 1.
	} else if (guessedLetters.indexOf(currentGuess) !== -1) {
		// The currentGuess is in the array of guessedLetters, so
		// User already guessed this character.
	} else {
		// We have a single character, that hasn't been guessed yet.
		// Add the character to the list of guesses.
		guessedLetters.push(currentGuess);
		// See if it's in the word.
		// We don't have a match yet, so match is false.
		var match = false;
		
		// Loop through our random word, character by character, to see
		// if the character is a match.
		for (var i = 0; i < randomWord.length; i++) {
			// If the character matches, and it hasn't been matched yet
			// (it's _ if it hasn't been matched yet)
			if (currentGuess === randomWord[i]) {
				// We have a match!
				// Set the character in the array to the
				// current guess character (previously was _).
				wordSecret[i] = currentGuess;
				// Add to the number of letters we have found.
				foundLetterCount++;
				// We have found a match for this guess.
				match = true;
			}
		}
		if (! match) {
			missesRemaining--;
		}
	}
}

console.log("Current word status: '" + wordSecret.join(" ") + "'");

if (missesRemaining > 0) {
	alert("Congratulations! You got it.");
} else {
	alert("Sorry, Charlie.");
}
