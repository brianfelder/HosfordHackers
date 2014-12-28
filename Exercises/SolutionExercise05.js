var countChar = function(theString, theCharacter) {
  var charCount = 0;
  for (var i = 0; i < theString.length; i++) {
    if (theString.charAt(i) === theCharacter) {
        charCount++;
    }
  }
  return charCount;
}

console.log(countChar("Chica Felder", "e"));
// 2
console.log(countChar("Hosford Hackers", "H"));
// 2
