# rock_paper_scissors
first attempt of making an interactive html page, with heavy emphasis on jscript, less on html and css.

========== Initial Ideas =============
//// This is done at the very begining, probably wrong, and even before reading the further instruction. (aka based on what my imagination of what the simplest RPS html game in my head)
------- Identify things that will be in the page -------
1. a bot that can generate random choice/result to represent's the bot's RockPaperScissors
2. an input prompt that able to take user's choice
3. function to produce results between the bot's and the user's choice
4. score board, to keep track who win or lose (or draw?)
5. end of round, eg if per play is consist of 5 rounds.

NB I decide that if it was draw, I will replay the round, so only user win or bot win will be counted in the scoring.

------- Planing or structuring those things ------------

1. user input, we can make a list or option input, OR (required) input is a text string.
   -> i need to take care of case insensitive
   -> i need to take care of possible typo, or deliberate mis-type or empty
2. (behind the scene) the bot make a choice
   -> this required RNG,
   -> translate the RNG into 3 possible result
3. round begin, imagine 9 possible output and how to write a code to translate those possible output.
   -> easiest would be nested else if within 3 case.
4. scoring begin with three possible result
   -> in case of draw, replay round (ie back to 3.)
5. encapsulate those into round of 5. after round of 5, end the game
6. add functionality to reopen/replay the game



------- Minute things that I note that I have to look at carefully -------





