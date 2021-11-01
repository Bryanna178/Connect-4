console.log("This is Rock, Paper, Scissors");
console.log("Rules of the game: \n\t Player 1 and 2 will sit across from each other so that they cannot see each other's moves.");
console.log("\tType R to pick Rock, P to pick paper, and S to pick scissors.");

// takes user input
const prompt = require('prompt-sync')();

function validRound(rounds){
    if (rounds < 3 || rounds > 7){
        console.log("Sorry no....Byyyyeee");
        process.exit(1);
    }
}

function validMove(move){
    move = move.toUpperCase();
    if (move != "R" || move != "P" || move != "S"){
        console.log("Sorry that is not a valid move. Please try again");
        return false;
    }
    return true;
}

function winner(p1, p2){
    // paper beats rock
    if (p1.localeCompare("P") === 0){
        if (p2.localeCompare("R") === 0){
            return 1;
        }
    }
    if (p2.localeCompare("P") === 0){
        if (p1.localeCompare("R") === 0){
            return 2;
        }
    }
    // rock beats scissors
    if (p1.localeCompare("R") === 0){
        if (p2.localeCompare("S") === 0){
            return 1;
        }
    }
    if (p2.localeCompare("R") === 0){
        if (p1.localeCompare("S") === 0){
            return 2;
        }
    }
    // scissors beats paper
    if (p1.localeCompare("S") === 0){
        if (p2.localeCompare("P") === 0){
            return 1;
        }
    }
    if (p2.localeCompare("S") === 0){
        if (p1.localeCompare("P") === 0){
            return 2;
        }
    }
    else {
        return 3;
    }
}

let numRounds = prompt('How many rounds do you want to play? Select a number 3 - 7: ');
validRound(numRounds);
console.log("You have chosen to play " + numRounds + "rounds.");

let round = 0;
let player1Wins = 0;
let player2Wins = 0;
while (round < numRounds)
{
    console.log("Current Round: " + round);
    let move1 = prompt("Player 1: please enter R, P, or S");
    if (!validMove(move1)) continue;

    let move2 = prompt("Player 1: please enter R, P, or S");
    if (!validMove(move2)) continue;

    let whoWon = winner(move1, move2);

    if (whoWon === 1){
        player1Wins++;
    }
    else if (whoWon === 2){
        player2Wins++;
    }
    else {
        console.log("Looks like it's a draw. Let's redo this round");
        continue;
    }
    round++;
}

if (player1Wins > player2Wins){
    console.log("Congratulations player 1. You have won the game.");
}
else if (player2Wins > player1Wins){
    console.log("Congratulations player 2. You have won the game.");
}