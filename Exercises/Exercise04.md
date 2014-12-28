Exercise 4
==

* Redo Exercise 2, except make it a function with two parameters:
  * How many times to loop.
  * What character to use.

In case you don't still have it, here's a solution to Exercise 2. You'll want to design this so that theCharacter and timesToRepeat are function parameters.

        var theCharacter = "#";
        var timesToRepeat = 7;
        var fullString = theCharacter;
        for (var i = 0; i < 7; i++) {
            console.log(fullString);
	    fullString = fullString + theCharacter;
        }

