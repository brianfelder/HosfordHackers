Comments
==
* To comment out the rest of the line: `// Here's a comment.`
* To comment out several lines:

        /* Here's another comment.
           It's really verbose and dull.
        */

Some basics
==

    // Make a variable using "var". Example (note that in all these examples, upper and lowercase matter):
    var whatsUp = "What's up?";

    // Print out the variable's value in an alert. Example:
    alert("I ask the world: " + whatsUp);

    // Prompt the user for input:
    var yourAge = prompt("How old are you?");

    // Print on the page:
    document.writeln("I ask the world: " + whatsUp);

Data Types
==

Numbers
--
* Operator ordering:
  * Parentheses: `()`
  * Multiplication, Division, and Remainder: `*`, `/`, and `%`
  * Addition and Subtraction: `+` and `-`
* Other operators:
  * Test for equality or inequality: `===` and `!==`
  * Test for less / greater / less-equal / greater-equal: `<`, `>`, `<=`, and `>=`

Comparison
--
* Other operators:
  * Test for equality or inequality: `===` and `!==`
  * Test for less / greater / less-equal / greater-equal: `<`, `>`, `<=`, and `>=`


Strings
--
* Put it in either single or double quotes: `"Hi there"` or `'Hi there'`
* Handy string actions:
  * `"Hi there".length` (get the length of a string)
  * `"Hi there".charAt(0)` -> "H" (get one character from a string, starting at 0)
  * `"Hi there".slice(3, 8)` -> "there" (get part of the string, with the start and end)
  * `"Hi there".toUpperCase()` -> "HI THERE"
  * `"Hi there".toLowerCase()` -> "hi there"
* WARNING! `("11" + "55") !== (11 + 55)`
  * Convert a string to a number value: `parseInt("1999");` or `parseFloat("3.14159265");`
  * To test if a value is "Not A Number": `isNaN("10")`


Boolean (fancy way of saying true or false)
--
* Possible values: `true` or `false`
* Or: `||` Example: `if (myVariable > 10 || myVariable < 3)`
* And: `&&` Example: `if (myVariable < 10 && myVariable > 3)`
* Not: `!` Example: `false === ! true`

Other values
--
* `null`
* `undefined`
* `NaN`

Type conversions
==
If an operator is applied to the "wrong" type, JavaScript quietly converts it to a type it can work with. This is called "type coercion." JavaScript can give some strange results when combining the types above. Consider these:

        console.log(8 * null)
        // → 0
        console.log("5" - 1)
        // → 4
        console.log("5" + 1)
        // → 51
        console.log("five" * 2)
        // → NaN


Variables
==
* Making a variable: `var myVariable = 6;`
* Add one to a number variable (increment): `myVariable = myVariable + 1`, `myVariable++`, or `myVariable += 1`
* Subtract one from a number variable (decrement): `myVariable = myVariable - 1`, `myVariable--`, or `myVariable -= 1`
* Concatenating to a string variable: `myString = myString + " all the things!"` or `myString += " all the things!"` (`++` doesn't apply here. Why not?)


Loops
==
* To loop a certain number of times, use a `for` loop:

        for (var i = 0; i < 10; i++) {
            console.log("Done with " + i + " times!");
        }

* To loop while a condition is true, use a `while` loop:

        // Usually, you want to be REALLY careful with while-true loop.
        // This is called an "infinite loop."
        while (true) {
            console.log("I've fallen and I can't get up!");
        }

* To break out of a loop: `break`

Conditionals
==

    if (myVariable > 10) {
        console.log("Greater than 10!");
    } else if (myVariable > 5) {
        console.log("Between 5 and 10!");
    } else {
        console.log("Less than 5!");
    }

Functions
==

        var square = function(x) {
            return x * x;
        };

        console.log(square(12));
        // → 144

Arrays
==
Arrays are a list of other JavaScript data values. You can put any other type of thing into an array: numbers, strings, boolean, objects, even other arrays. You can even mix types in an array. You can think of an array as one variable that contains several pieces, ordered in a list.

To declare an array, use square brackets, and separate the array items with commas:

    var timeToCelebrate = ["Hip!", "Hip!"]; // A Hip! Hip! Array! (whomp whomp)
    var sports = ["baseball", "football", "basketball", "soccer", "programming"];
    var mixOfStuff = ["Candle", 42, false, [-45, "Yo."]];

To get a particular item out of the array, use square brackets with a number:

    sports[1];
    // "football"
    mixOfStuff[2];
    // true
    mixOfStuff[3][1];
    // "Yo."

To get the length of an array:

    sports.length
    // 5
    mixOfStuff.length
    // 4
    mixOfStuff[3].length
    // 2

To get the last element in an array:

    sports[sports.length - 1];
    // "programming"

Other handy array actions:
    
    // Remove an element from the end of an array.
    sports.pop();
    sports
    // ["baseball", "football", "basketball", "soccer"]

    // Add an element to the end of an array.
    sports.push("cricket");
    sports
    // ["baseball", "football", "basketball", "soccer", "cricket"]

    // Remove an element from the beginning of an array.
    sports.shift();
    sports
    // ["football", "basketball", "soccer", "cricket"]

    // Add an element to the beginning of an array.
    sports.unshift("volleyball");
    sports
    // ["volleyball", "football", "basketball", "soccer", "cricket"]

    // Replace an array element.
    sports[3] = "badminton";
    sports
    // ["volleyball", "football", "basketball", "badminton", "cricket"]

    // Find the index of a particular element.
    sports.indexOf("basketball");
    // 2
    sports.indexOf("tennis");
    // -1 (because the item does not exist in the array.)

Objects
==
Objects are like arrays, in that they are collections of things inside one variable. The difference is that objects use strings instead of numbers to access the different elements. The strings are called keys, and the elements are called values. While arrays are typically used to represent multiple things, objects are typically (though not always) used to represent one thing with multiple attributes.

To create an object, you use curly braces, and key-value pairs separated by commas, with a colon separating the key from the value. Example:

    var dog = {
      "name"  : "Chica",
      "color" : "tan",
      "breed" : "Yohuahua",
      "hobby" : "lap-sitting",
      "legs"  : 4,
      "barks" : true
    }

There are two ways to access the values in an object:

    // Square brackets
    dog["name"]
    // "Chica"
    dog["breed"]
    // "Yohuahua"

    // Dot notation
    dog.name
    // "Chica"
    dog.barks
    // true

You can also create an empty object like so:

    var cat = {}

Then later add attributes like so:

    cat.name = "Oreo";
    cat.color = "black and white"
    cat.isTooFat = true;

    cat
    // Object {name: "Oreo", color: "black and white", isTooFat: true}

You can also create an array of objects, like so:

    // Create the individual objects.
    var chica = {"species" : "dog", "name" : "Chica", "color" : "tan", "barks" : true};
    var avery = {"species" : "dog", "name" : "Avery", "color" : "black", "barks" : true};
    var oreo = {"species" : "cat", "name" : "Oreo", "color" : "black and white", "meows" : true};

    // Put the objects into an array.
    var pets = [chica, avery, oreo];

Or, an array can be an attribute of an object:

    var chestnut = {"species" : "guinea pig", "hobbies" : ["squeaking", "popcorning", "eating"]}
    chestnut.hobbies
    // ["squeaking", "popcorning", "eating"]
    chestnut.hobbies[1];
    // "popcorning"

Or, an object can be an attribute of an object:

    var oreo = {"species" : "cat", "name" : "Oreo", "color" : "black and white", "sound" : {"name" : "meow", "duration" : "1 second", "frequency" : "whenever hungry"}};
    oreo.sound
    // Object {name: "meow", duration: "1 second", frequency: "whenever hungry"}
    oreo.sound.frequency
    // "whenever hungry"


If you want to loop through the properties of an object, you can do it like this:

    for (var key in avery) {
      // hasOwnProperty is needed due to a behavior in JavaScript.
      if (avery.hasOwnProperty(key)) {
        console.log("Avery's " + key + " is " + avery[key]);
      }
    }

You can combine arrays and objects to represent almost any data structure.
