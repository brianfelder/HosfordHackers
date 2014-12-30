// Exercise 2

// Before entering the loop, we need to define a few variables.
// What character are we going to repeat?
var theCharacter = "#";
// How many times will we repeat?
var timesToRepeat = 7;
// Initialize the string that we're going to print out each time.
var fullString = "";

// Loop 7 times.
for (var i = 0; i < timesToRepeat; i++) {
    // Each time through the loop, we add a character onto the full string.
    fullString = fullString + theCharacter;
    console.log(fullString);
}
