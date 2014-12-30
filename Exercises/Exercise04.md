Exercise 4
==

* Make a number guessing game. Pick a number at random between 1 and 100, and ask the user to guess it with `prompt`. If the user guesses too high, tell them to guess lower; if too low, to guess higher. If they guess a non-number, give them a wisecrack and make them guess again. Loop until the user guesses it exactly right.
  * To pick a random number, you'll need to understand a few tools:
    * `Math.random()` picks a random (decimal) number between 0 and 1. Try it out.
    * To get a random number (again, with decimal) between 0 and 100, you can do `Math.random() * 100`.
    * Trouble is, you probably want an integer value (it might take the user some time to guess 76.42526326786156). What you want is to take off the decimal part of the number, so that it's just 76. So, to get a random number between 0 and 99, use `Math.floor(Math.random() * 100)`.
    * HOWEVER, we don't want a number between 0 and 99; we want it between 1 and 100, so, you'll need to add 1 to the result. So, the whole thing should look like this:
      * `Math.floor(Math.random() * 100) + 1` (make sure you have the parentheses in the right place; that's really important!)

Here's a solution: https://github.com/brianfelder/JavaScriptBuildingBlocks/blob/master/Exercises/SolutionExercise04.js


