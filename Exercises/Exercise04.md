Exercise 4
==

* Redo Exercise 2, except make it a function with two parameters:
  * What character to use.
  * How many times to repeat.

Name your function `printTriangle`, and give it two parameters: `theCharacter` and `timesToRepeat`. You will be able to call this function with something like this:

`printTriangle("*", 10);`

In case you don't still have it, here's a solution to Exercise 2. You'll want to design this so that theCharacter and timesToRepeat are function parameters.

        var theCharacter = "#";
        var timesToRepeat = 7;
        var fullString = theCharacter;
        for (var i = 0; i < 7; i++) {
            console.log(fullString);
            fullString = fullString + theCharacter;
        }

