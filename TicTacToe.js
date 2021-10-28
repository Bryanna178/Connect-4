const blankBoard = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9']
];

const board = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9']
];

var dict = {
  1:board[0][0],
  2:board[0][1],
  3:board[0][2],
  4:board[1][0],
  5:board[1][1],
  6:board[1][2],
  7:board[2][0],
  8:board[2][1],
  9:board[2][2]
}

// takes user input
const prompt = require('prompt-sync')();

function printBoard(){
  console.log('PRINTING TIC TAC TOE BOARD\n');
  console.log('X will go first');
  // loop the outer array
  for (let i = 0; i < board.length; i++) {
    // get the size of the inner array
    var innerArrayLength = board[i].length;
    console.log(board[i][0] + "|" + board[i][1] + "|" + board[i][2]);
  }
}

// checks if game piece is already there
function isAvailable(checkSpace){
  if(dict[checkSpace] === checkSpace){
    return true;
  }
  return false;
}

// takes in game piece and space to put it
function makeMove(gamePiece, space){
  dict[space] = gamePiece;
}

// check for winning condition
function isWinner(gamePiece){
  if ((dict[1] === gamePiece && dict[2] === gamePiece && dict[3] === gamePiece) ||
      (dict[4] === gamePiece && dict[5] === gamePiece && dict[6] === gamePiece) ||
      (dict[7] === gamePiece && dict[8] === gamePiece && dict[9] === gamePiece) ||
      (dict[1] === gamePiece && dict[4] === gamePiece && dict[7] === gamePiece) ||
      (dict[2] === gamePiece && dict[5] === gamePiece && dict[8] === gamePiece) ||
      (dict[3] === gamePiece && dict[6] === gamePiece && dict[9] === gamePiece) ||
      (dict[1] === gamePiece && dict[5] === gamePiece && dict[9] === gamePiece) ||
      (dict[7] === gamePiece && dict[5] === gamePiece && dict[3] === gamePiece)){
        return true;
      }
  return false;
}

// game piece alternates from 'x' and 'o' unless invalid move is given
let gamePiece = 'x';
let player = 'Player One';

//while loop for the game
// while(!winner){
    printBoard();

    // let move = prompt('Select a space 1-9: ');

    // if (isAvailable(move)){
    //   makeMove(gamePiece, move)
    //   console.log("nothin there...");
                  
    // }
    // else{
    //   console.log("Sorry this column is full. Try another column.");
    // }
    
//     isWinner();
// }

console.log("fin");