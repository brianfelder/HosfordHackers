// Define the function.
var answerMe8Ball = function(theQuestion) {
    // Define an array of answers.
    var answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    // Pick a random number between 0 and (answers.length - 1)
    var randomNumber = Math.floor(Math.random() * answers.length);
    // Return the index.
    return answers[randomNumber];
    // By the way, what was the question? :)
}

// Call the function.
answerMe8Ball("Will the Ducks win?");
// "Without a doubt"
answerMe8Ball("Will I get straight A's this year?");
// "Signs point to yes"

