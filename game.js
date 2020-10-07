let playerOne = 1;
let playerTwo = 2;

let row = 6;
let col = 7;

let gameBoard = [];
let winner = false;
let currPlayer = 1;

// create the blank board for the game
function createBlankBoard(){
    //outer loop for the main array testBoard
    for(var i = 0; i < row; i++){
        // used to store the values from each of the inner arrays
        var innerArray = []
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
    console.log('PRINTING BOARD\n');
    for(var i = 0; i < row; i++){
        var toPrint = '|';
        for(var x = 0; x < col; x++){
            toPrint = toPrint + gameBoard[i][x] + '|';
        }
        console.log(toPrint);
    }
}

// make move (by player?)
function makeMove(player){

}

// check for winning condition
function isWinner(){
    
}

// change the turn for the next player
function determineTurn(currPlayer){

}


// start of actual game code
createBlankBoard();
printBoard();

//while loop for the game (NEED TO TAKE USER INPUT)
/*
while(!winner){
    printBoard();
    determineTurn(currPlayer);
    makeMove(currPlayer);
    isWinner();
}
*/


console.log("fin");