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
	console.log("Current word status: '" + wordSecret.join(" ") + "'");
	console.log("You have " + missesRemaining + " misses remaining.");
	var currentGuess = prompt("Guess a letter.");
	if (! currentGuess) {
		// User needs to enter a guess.
	} else if (currentGuess.length != 1) {
		// User needs to enter a guess of length 1.
	} else {
		// We have a single character.
		// See if it's in the word.
		var match = false;
		for (var i = 0; i < randomWord.length; i++) {
			if (currentGuess === randomWord[i]) {
				// We have a match!
				wordSecret[i] = currentGuess;
				foundLetterCount++;
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
