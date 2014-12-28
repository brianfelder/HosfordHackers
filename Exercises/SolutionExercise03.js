// Exercise 3
var numberCount = 0;
var numberSum = 0;
while (true) {
  var currentNumber = prompt("Give me another number, or a non-number to quit.");
  if (isNaN(currentNumber)) {
    // It's not a number. Break out of the loop.
    break;
  } else {
    // User entered a number. Increment number count and add to sum.
    // We have to convert currentNumber to an floating point number, or we will
    // concatenate the string rather than adding.
    currentNumber = parseFloat(currentNumber);
    numberCount++;
    numberSum += currentNumber;
  }
}

var average = numberSum / numberCount;
alert("You entered " + numberCount + " numbers, with a sum of " + numberSum + ". The average of your numbers is " + average);
