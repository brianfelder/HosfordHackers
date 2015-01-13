Exercise 9
==

Write a hangman game. Here's the basic flow:

1. Create an array of words.
1. Pick a random word from the array (hint: pick a random number, and use the word at that index of the array).
1. While the user has not yet guessed the word, and they have misses left (user gets 5 misses to find the word):
  1. Show the user how many blanks are left, which blanks they have filled, in, and how many misses they have left.
  1. Let the user choose a letter.
  1. If the user's letter is in the word, replace the blank with the letter they have chosen.
1. If the user guessed the word, tell them congratulations!
1. If the user used up their misses without guessing the word, tell them better luck next time!


