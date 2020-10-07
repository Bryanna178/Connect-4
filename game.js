let playerOne = 1;
let playerTwo = 2;

let row = 6;
let col = 7;

let testBoard = [];

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
        testBoard.push(innerArray);
    }
    console.log("this is the test board");
    console.log(testBoard);
}

// prints the board using the 2d array
function printBoard(){
    console.log('PRINTING BOARD\n');
    for(var i = 0; i < row; i++){
        var toPrint = '|';
        for(var x = 0; x < col; x++){
            toPrint = toPrint + testBoard[i][x] + '|';
        }
        console.log(toPrint);
    }
}

// make move
function makeMove(input){

}

// check for winning condition
function isWinner(){
    
}

createBlankBoard();

//while loop for the game

printBoard();
console.log("fin");