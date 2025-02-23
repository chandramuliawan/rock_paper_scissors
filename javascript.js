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
var roundFin=false;
var bo5Score=0;




    // document.querySelector(".hiddenboard").style.visibility ="visible";

//function to produce bot ouput. separe RPS_rng just in case.
function bot_RPS() {
    let num = RPS_rng();
    // log(num);//log for debug check
    const clearSelected = document.querySelectorAll(".img_option_bot");
    clearSelected.forEach(opt => {
        opt.classList.remove("selected");
        // log(opt);
    })
    switch (num) {
        case 1:
            bot_output = "bot_rock";
            const Selected1 = document.querySelector(".bot_rock");
            Selected1.classList.add("selected");
            break;
        case 2:
            bot_output = "bot_paper";
            const Selected2 = document.querySelector(".bot_paper");
            Selected2.classList.add("selected");
            break;
        case 3:
            bot_output = "bot_scissors";
            const Selected3 = document.querySelector(".bot_scissors");
            Selected3.classList.add("selected");
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
    if (user_input == "user_rock"){
        switch (bot_output) {
            case "bot_rock":
                result = "it is a rocking draw!";
                score_draw += 1;
                break;
            case "bot_paper":
                result= "your rock lose against paper!";
                score_lose +=1;
                break;
            case "bot_scissors":
                result= "the rock beats scissors any day!";
                score_win +=1;
                break;
        }
    }

    else if (user_input == "user_paper"){
        switch (bot_output) {
            case "bot_rock":
                result = "paper wrap up this match-up every time!";
                score_win +=1;
                break;
            case "bot_paper":
                result= "drawing with paper? why not y'all clap!";
                score_draw += 1;
                break;
            case "bot_scissors":
                result= "uh-oh, scissors beat paper you know?";
                score_lose +=1;
                break;
        }
    }

    else if (user_input == "user_scissors"){
        switch (bot_output) {
            case "bot_rock":
                result = "your crabby hand smashed by the bot's rock!";
                score_lose +=1;
                break;
            case "bot_paper":
                result= "scissors prove to be sharp enough in this round!";
                score_win +=1;
                break;
            case "bot_scissors":
                result= "drawing with scissors? feels bad man!";
                score_draw += 1;
                break;
        }
    }

    return result;

}

//prototype of the loop system! --> put inside the PLAYGAME function

function playGame() {
    // for (;((score_win < 3) && (score_lose < 3));) {
        log(user_input);
        log(bot_RPS());

        RPS_matchup();
        log (result);
        // roundFin = true;
        log ("you win " + score_win + " times");
        log ("you lose " + score_lose + " times");
        log ("you drew " + score_draw + " times");
        const updateTextbox = document.querySelector(".result_board");
        updateTextbox.textContent = result + "  ";
        updateTextbox.textContent += "The current best-of-five scores are: You win " + score_win + " times. Lose "+ score_lose +" times. While drawing "+score_draw+" times!"
    // }
    if ((score_win>=3) || (score_lose>=3)){
        roundFin = true;
        const updatebanner = document.querySelector(".header");
        if (score_win>score_lose) {
            bo5Score += 1;
            const updatetext = document.querySelector(".updateBo5score");
            updatetext.textContent = "You have won " + bo5Score + " best-of-5 so far. Do you want to play again?"
            updatebanner.textContent = "You win this best-of-5 series! YAY!"
        }
        else {
            updatebanner.textContent = "You lose to the BOT in this best-of-five series. Sadge."
        }
        const disable_main = document.querySelector(".main_board")
        disable_main.classList.add("disable")
        const show_hidden = document.querySelector(".hiddenboard")
        show_hidden.classList.add("show")    
        }

}

// if ((score_win>=3) || (score_lose>=3)){
//     roundFin = true;
//     const updatebanner = document.querySelector(".header");
//     if (score_win>score_lose) {
//         bo5Score += 1;
//         const updatetext = document.querySelector(".updateBo5score");
//         updatetext.textContent = "You have won " + bo5Score + " so far. Do you want to play again?"
//         updatebanner.textContent = "You win this best-of-5 series! YAY!"
//     }
//     else {
//         updatebanner.textContent = "You lose to the BOT in this best-of-five series. Sadge."
//     }
//     }

// if (roundFin == true){
//         const disable_main = document.querySelector(".main_board")
//         disable_main.classList.add("disable")
//         const show_hidden = document.querySelector(".hiddenboard")
//         show_hidden.classList.add("show")    
//     }
    const rockUser =document.querySelector(".user_rock");
    const paperUser =document.querySelector(".user_paper");
    const scissorsUser =document.querySelector(".user_scissors");

    rockUser.addEventListener("click",()=>{
        user_input ='user_rock';
        playGame();
    })

    paperUser.addEventListener("click",()=>{
        user_input ='user_paper';
        playGame();
    })


    scissorsUser.addEventListener("click",()=>{
        user_input ='user_scissors';
        playGame();
    })

// playGame()

// var answer;
// while (answer !== false) {
//     answer = confirm("You want to play again? \n( pls no the computer is tired from the dev's testing :( )");
//     if (answer == true) {
//         playGame();
//     }
//     // else{
//     //     answer = false;
//     // }
// }




const replay = document.querySelector(".button_replay");

replay.addEventListener("click",()=>{
    score_draw=0;
    score_win=0;
    score_lose=0;
    roundFin= false;
    const enable_main = document.querySelector(".main_board");
    enable_main.classList.remove("disable");
    const hide_hiddenboard = document.querySelector('.hiddenboard');
    hide_hiddenboard.classList.remove("show");

});