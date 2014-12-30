// Exercise 5

// Define the function here.
var printTriangle = function(theCharacter, timesToRepeat) {
  // Start with an empty string.
  var fullString = "";
  // Loop as many time as the user tells you to.
  for (var i = 0; i < timesToRepeat; i++) {
    // Each time, add the user's character to the string.
    fullString = fullString + theCharacter;
    console.log(fullString);
  }
}

// Call the function here.
printTriangle("$", 9);
printTriangle("@", 12);
