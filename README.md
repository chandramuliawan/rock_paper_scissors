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


readme v2.0 --- updated after first iteration
------- Minute things that I note that I have to look at carefully -------
while i managed to complete the task fairly okay in fair time, these are things that can be improve upon.
1. the note specify that draw isn't scored (ie my first intuition is correct), while the program still count draw.
   -> will need one more while/for loop if the result is draw.
2. the note also specify the function using parameter, whilst i did not (i use global var)
   -> while technically correct, i understand that the use of global variable is bad
   -> this will need to be look up upon as at the moment of writing this, the solution does not pop up in my head.
3. those two are the only reqs that i missed, i think. the following is more of what i think i can improve upon
   a. the interface, aka i need to add html element at least, to improve the game. the element include output (at least) and input (if we are to avoid using prompt).
   b. the gaming. RPS is a game, and we can add gaming-variety side, eg. unbalance bot, or pattern bot, to make the interaction more
   c. clean/lean code, at the moment code is done very roughly and really push me doing un-clean coding, and am afraid will develop weird habbit of coding.
at the moment of writing, i opt to push the lesson instead of polishing the html. the goal of the practice is 'do some js' and i think i've done a decent js.





