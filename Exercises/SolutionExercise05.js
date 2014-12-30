// Exercise 4
var printTriangle = function(theCharacter, timesToRepeat) {
  var fullString = theCharacter;
  for (var i = 0; i < timesToRepeat; i++) {
    console.log(fullString);
    fullString = fullString + theCharacter;
  }
}

printTriangle("$", 9);
printTriangle("@", 12);
