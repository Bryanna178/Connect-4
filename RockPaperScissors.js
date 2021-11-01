console.log("This is Rock, Paper, Scissors");
console.log("Rules of the game: \n\t Player 1 and 2 will sit across from each other so that they cannot see each other's moves.");
console.log("\tType R to pick Rock, P to pick paper, and S to pick scissors.");

// takes user input
const prompt = require('prompt-sync')();

function validRound(rounds){
    let x = 3;
    while (x < 8){
        if (x === rounds) return true;
        x++;
    }
    console.log("Sorry no....Byyyyeee");
    return false;
}

function validMove(move){
    move = move.toUpperCase();
    if (move != "R" || move != "P" || move != "S"){
        console.log("Sorry that is not a valid move. Please try again");
        return false;
    }
    return true;
}

let numRounds = prompt('How many rounds do you want to play? Select a number 3 - 7: ');
if (!validRound()) process.exit(1);
console.log("You have chosen to play " + numRounds + "rounds.");

let round = 0;
let player1Wins = 0;
let player2Wins = 0;
while (round < numRounds)
{
    console.log("Current Round: " + round);
    let move1 = prompt("Player 1: please enter R, P, or S");
    if (!validMove(move1)) continue;;

    let move2 = prompt("Player 1: please enter R, P, or S");
    if (!validMove(move2)) continue;

    round++;
}