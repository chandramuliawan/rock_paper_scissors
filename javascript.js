log = console.log

log("hello world!")

log("I dont trust hello world, so I try again!")


//this function will randomly return 1 or 2 or 3.
function RPS_rng() {
    return Math.floor(Math.random()*3)+1 ;
}

var bot_output;
var user_input;
var result;
var score_win = 0;
var score_draw = 0;
var score_lose = 0;

//function to produce bot ouput. separe RPS_rng just in case.
function bot_RPS() {
    let num = RPS_rng();
    // log(num);//log for debug check
    switch (num) {
        case 1:
            bot_output = "ROCK-U!";
            break;
        case 2:
            bot_output = "PAY-PAAHHH";
            break;
        case 3:
            bot_output = "SCISSORS!";
        break;
    }
    return bot_output;
}

//function to produce user ouput. All to test scoring and looping system!
// function user_RPS() {
//     let num = RPS_rng();
//     // log(num);//log for debug check
//     switch (num) {
//         case 1:
//             user_input = "rock";
//             break;
//         case 2:
//             user_input="paper";
//             break;
//         case 3:
//             user_input="scissors"
//         break;
//     }
//     return user_input;
// }

function RPS_matchup() {
    //chage the initial rockpaperscissors to user input later
    if (user_input == "rock"){
        switch (bot_output) {
            case "ROCK-U!":
                result = "draw";
                score_draw += 1;
                break;
            case "PAY-PAAHHH":
                result= "LOSE";
                score_lose +=1;
                break;
            case "SCISSORS!":
                result= "are you winning?";
                score_win +=1;
                break;
        }
    }

    else if (user_input == "paper"){
        switch (bot_output) {
            case "ROCK-U!":
                result = "winning";
                score_win +=1;
                break;
            case "PAY-PAAHHH":
                result= "draw";
                score_draw += 1;
                break;
            case "SCISSORS!":
                result= "losing";
                score_lose +=1;
                break;
        }
    }

    else if (user_input == "scissors"){
        switch (bot_output) {
            case "ROCK-U!":
                result = "losing";
                score_lose +=1;
                break;
            case "PAY-PAAHHH":
                result= "winning";
                score_win +=1;
                break;
            case "SCISSORS!":
                result= "draw";
                score_draw += 1;
                break;
        }
    }

    return result;

}

//prototype of the loop system! --> put inside the PLAYGAME function

function playGame() {
    for (let i = 0 ; i < 5; i++){
        log("This is round number " + (i+1) + " out of five rounds!");
        while (user_input !== "rock" && user_input !== "paper" && user_input!== "scissors"){
        let raw_user_input = prompt("This is Round " + (i+1) + " out of five rounds!" + "\nPick your input! rock paper or scissors?")
        log(user_input = raw_user_input.toLowerCase());
        }    
        log(bot_RPS());
        RPS_matchup();
        log (result);
        user_input = ""
    }
    log ("you win " + score_win + " times");
    log ("you lose " + score_lose + " times");
    log ("you drew " + score_draw + " times");
}

playGame()

var answer;
while (answer !== false) {
    answer = confirm("You want to play again? \n( pls no the computer is tired from the dev's testing :( )");
    if (answer == true) {
        playGame();
    }
    // else{
    //     answer = false;
    // }
}