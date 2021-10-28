let row = 6;
let col = 7;

let gameBoard = [];
let winner = false;

// takes user input
const prompt = require('prompt-sync')();

// create the blank board for the game
function createBlankBoard(){
    //outer loop for the main array testBoard
    for(var i = 0; i < row; i++){
        // used to store the values from each of the inner arrays
        innerArray = []
        for(var x = 0; x < col; x++){
            innerArray.push('-');
        }

        // at the end store the new line char to print on a new line
        innerArray.push('\n');

        // now add in the inner array into the main array
        gameBoard.push(innerArray);
    }
    // console.log("this is the test board");
    // console.log(gameBoard);
}

// prints the board using the 2d array
function printBoard(){
    var toPrint;
    console.log('PRINTING BOARD\n');
    for(var i = 0; i < row; i++){
        toPrint = '|';
        for(var x = 0; x < col; x++){
            toPrint = toPrint + gameBoard[i][x] + '|';
        }
        console.log(toPrint);
    }
}

// checks if column is full
function isColFull(checkCol){
    // checks only top row for empty space
    if (gameBoard[0][checkCol-1] === '-'){
        return false;
    }
    return true;
}

// takes in column #
function makeMove(cNum){
    var emptySpace;
    
}

// check for winning condition
function isWinner(){
    return false;
}

// start of actual game code
createBlankBoard();
printBoard(); // not needed once while loop is implemented

// game piece alternates from 'x' and 'o' unless invalid move is given
let gamePiece = 'x';
let player = 'Player One';

//while loop for the game
// while(!winner){
//     printBoard();

    let move = prompt('Select a column 1-7: ');

    if (isColFull(move)){
        //gamePiece should not change
        console.log("Sorry this column is full. Try another column.");            
    }
    else{
        // makeMove()
        console.log("nothin there...");
    }
    
//     isWinner();
// }

console.log("fin");