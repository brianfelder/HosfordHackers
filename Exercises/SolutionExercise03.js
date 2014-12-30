// Exercise 3

// To find an average, we need to know how many numbers, and the sum of the numbers.
// We'll use numberCount and numberSum for these, respectively.
var numberCount = 0;
var numberSum = 0;
// Define a variable for what the current number is that the user is entering.
// Initialize it to 0 (this will change each time the user enters something).
var currentNumber = 0;
// Define a flag indicating whether the user is done.
// We'll set this to true when the user enters a NaN value.
var userIsDone = false;

// We'll loop as long as userIsDone is false.
while (userIsDone === false) {
  currentNumber = prompt("Give me another number, or a non-number to quit.");
  if (isNaN(currentNumber)) {
    // It's not a number. User is done.
    userIsDone = true;
  } else {
    // User entered a number. Increment number count and add to sum.
    // We have to convert currentNumber to an floating point number, or we will
    // concatenate the string rather than adding.
    currentNumber = parseFloat(currentNumber);
    numberCount++;
    numberSum += currentNumber;
  }
}

// We should have the sum and the count. Calculate and print out the average.
var average = numberSum / numberCount;
alert("You entered " + numberCount + " numbers, with a sum of " + numberSum + ". The average of your numbers is " + average);
