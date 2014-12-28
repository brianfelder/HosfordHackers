// Exercise 01 Solution

// Setup constants
var secondsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
var secondsInYear = secondsInMinute * minutesInHour * hoursInDay * daysInYear;

var userAge = prompt("How old are you?");
if (isNaN(userAge)) {
	alert("OK, wise guy. No answer for you!");
} else {
	var ageInSeconds = userAge * secondsInYear;
	alert("You are over " + ageInSeconds + " seconds old!");
}
