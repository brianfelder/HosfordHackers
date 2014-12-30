Exercise 6
==

* Write a function to count the number of characters in a string. The function takes two parameters:
  * The string.
  * The character we're counting.

Name your function `countChar`, and give it two parameters: `theString` and `theCharacter`. You will be able to call this function with something like this:

        var numberOfEs = countChar("Chica Felder", "e");
	console.log(numberOfEs);
	// 2

Hints:
* Define a variable `charCount` that this function will return.
* Use `theString.length` to get the length of theString.
* Loop through the string as many times as `theString.length`.
  * Use `theString.charAt(i)` to inspect whether the character in the current iteration of the loop is the same as `theCharacter`. Increment `charCount` for each match.
* Return `charCount`.

BONUS POINTS: Remember that JavaScript is case-sensitive, so if the user calls the function with `countChar("Charisse Hung", "h")` it will return only 1, missing the capital H. To make it so that it picks up both H's, you can use `toLowerCase()` on both `theString` and `theCharacter` before testing them.

A solution is here: https://github.com/brianfelder/JavaScriptBuildingBlocks/blob/master/Exercises/SolutionExercise06.js
