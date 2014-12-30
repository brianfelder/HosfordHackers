
// Function has two parameters: theString we're searching, and 
// theCharacter we're searching for.
var countChar = function(theString, theCharacter) {
  // Define a variable for how many times we find theCharacter.
  var charCount = 0;
  // Force theString and theCharacter to lowercase, so that it's
  // case-insensitive.
  theString = theString.toLowerCase();
  theCharacter = theCharacter.toLowerCase();

  // Loop through theString, one character at a time.
  for (var i = 0; i < theString.length; i++) {
    // Test if the current character matches theCharacter. If so,
    // increment charCount.
    if (theString.charAt(i) === theCharacter) {
        charCount++;
    }
  }
  return charCount;
}


// Call our function!

countChar("Chica Felder", "e");
// 2
countChar("JavaScriptBuildingBlocks", "B");
// 2
countChar("Charisse Hung", "h");
// 2 (be sure it gets both the uppercase and lowercase H!)
