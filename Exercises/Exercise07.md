Exercise 7
==

In the 1950s, there was a "Magic 8-Ball" fad, where a large 8-Ball with a window. You could ask questions to the 8-Ball, and it would give you answers. Here's a bit of background:

https://en.wikipedia.org/wiki/Magic_8-Ball

Anyway. You're going to make a magic 8-ball in JavaScript.

Write a function called `answerMe8Ball` that takes one parameter: a question from the user.
In the function, you'll define an `answers` array with an array of answers.
Pick a number at random, between 0 and `answers.length - 1`. Put it in a variable
called `randomNumber`.
Return the value at the `randomNumber` position in the `answers` array. That is, `answers[randomNumber]`.

The `answers` array should look like this (feel free to copy and paste this):

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

And you should be able to call the function with:

    answerMe8Ball("Will I get straight A's this year?");
    // "Reply hazy try again"

