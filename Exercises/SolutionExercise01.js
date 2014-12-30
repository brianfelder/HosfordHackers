// Exercise 01 Solution

// Setup constants
var secondsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
var secondsInYear = secondsInMinute * minutesInHour * hoursInDay * daysInYear;

// Prompt the user how old they are.
var userAge = prompt("How old are you?");
// Be sure the user enters a number; if not, they get no satisfaction!
if (isNaN(userAge)) {
	alert("OK, wise guy. No answer for you!");
} else {
	// We know that the user entered a number, so calculate it.
	var ageInSeconds = userAge * secondsInYear;
	alert("You are over " + ageInSeconds + " seconds old!");
}
