Exercise 5
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

A solution is here: https://github.com/brianfelder/JavaScriptBuildingBlocks/blob/master/Exercises/SolutionExercise06.js

Bonus:
* This is great, but the trouble is, it's case-sensitive. That is, if you put in "c", and there's a "C", it won't find it. How would you make this program so that it does not care about case?
  * Hint: try comparing `theString.toLowerCase()` to `theCharacter.toLowerCase()`.
