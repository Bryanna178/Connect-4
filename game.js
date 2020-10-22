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
    // if - no longer exists in the top spot of the column
    // then column is full
    switch(checkCol){
        case '1':
            if (gameBoard[0][1] === '-'){
                return false;
            }
        case '2':
            if (gameBoard[0][3] === '-'){
                return false;
            }
        case '3':
            if (gameBoard[0][5] === '-'){
                return false;
            }
        case '4':
            if (gameBoard[0][7] === '-'){
                return false;
            }
        case '5':
            if (gameBoard[0][9] === '-'){
                return false;
            }
        case '6':
            if (gameBoard[0][11] === '-'){
                return false;
            }
        case '7':
            if (gameBoard[0][13] === '-'){
                return false;
            }
        default: return true;
    }
}

// make move (by player?)
function makeMove(){
    
}

// check for winning condition
function isWinner(){
    return false;
}

// change the turn for the next player
function determineTurn(currPlayer){

}


// start of actual game code
createBlankBoard();
printBoard(); // not needed once while loop is implemented

//while loop for the game
// while(!winner){
//     printBoard();

    let move = prompt('Select a column 1-7: ');

    if (isColFull(move)){
        console.log("Sorry this column is full. Try another column.");            
    }
    else{
        console.log("nothin there...");
    }
    
//     isWinner();
// }

console.log("fin");