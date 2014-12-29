Exercise 1
==

* Ask the user how old they are, then calculate their age in seconds as of their last birthday (don't worry about leap years).
  * First, use variables to find out how many seconds are in a day, in a year, then multiply by how old the user is.
  * Get the user's input in a `prompt`, and output the number of seconds in an `alert`.

Here's one solution: https://github.com/brianfelder/JavaScriptBuildingBlocks/blob/master/Exercises/SolutionExercise01.js

Now, build on this by asking what year the user was born, then calculating the approximate age. You can do something like this:

    var birthYear = prompt("What year were you born?");
    if (isNaN(birthYear)) {
	alert("OK, wise guy. No answer for you!");
    } else {
	var currentYear = new Date().getFullYear();
	var userAge = currentYear - birthYear;
	// ... and so on...
