const squares = document.querySelectorAll('.board-square');

squares.forEach((item) => {
  item.addEventListener('click', handleClick);
});

// function resetGame() {
//   playerTurn = 'X';
//   square.textContent = '';
// }

function handleClick (event) {
  console.log({target: event.target});

  let square = event.target;
  square.textContent = playerTurn;
  square.removeEventListener('click', handleClick);

  let squareCol = square.dataset.col;
  let squareRow = square.dataset.row;

  ticTacToe(squareRow, squareCol);
}

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  // Check the rows of the board for a match
  if (
    board [0][0] === playerTurn && 
    board [0][1] === playerTurn && 
    board [0][2] === playerTurn
  ) { 
    return true;
  } else if (
    board [1][0] === playerTurn && 
    board [1][1] === playerTurn && 
    board [1][2] === playerTurn
  ) {
    return true;
  } else if (
    board [2][0] === playerTurn && 
    board [2][1] === playerTurn && 
    board [2][2] === playerTurn
  ) {
    return true;
  }
    return false;
}

function verticalWin() {
  // Your code here
  // Check the columns of the board
  if (
    board [0][0] === playerTurn && 
    board [1][0] === playerTurn && 
    board [2][0] === playerTurn
  ) { 
    return true;
  } else if (
    board [0][1] === playerTurn && 
    board [1][1] === playerTurn && 
    board [2][1] === playerTurn
  ) {
    return true;
  } else if (
    board [0][2] === playerTurn && 
    board [1][2] === playerTurn && 
    board [2][2] === playerTurn
  ) {
    return true;
  }
    return false;
}

function diagonalWin() {
  // Your code here
  // Check for a line pattern top left to bottom right on the board
  // "" top right to bottom left
  if (
    board [0][0] === playerTurn && 
    board [1][1] === playerTurn && 
    board [2][2] === playerTurn
  ) { 
    return true;
  } else if (
    board [0][2] === playerTurn && 
    board [1][1] === playerTurn && 
    board [2][0] === playerTurn
  ) {
    return true;
  }
    return false;
}

function checkForWin() {
  // Your code here
  // Check for horizontal, vertical, and diagonal wins
  // Return true if h or v or d wins

  if (verticalWin() || horizontalWin() || diagonalWin()) {
    // console.log('win you beautiful bastard');
    if (playerTurn = '0') {
    document.getElementById('winBanner').innerText = 'You did it!!!';
  } else {
    document.getElementById('winBanner').innerText = 'Or O did it!!!';
    }
    return true;
}
}

function ticTacToe(row, column) {
  // Manipulate the board array (place X or O) based on where user clicks
  board[row][column] = playerTurn;
  checkForWin();
  
// Manipulate playerTurn variable, switch from X to O or 0 to X
if (playerTurn === 'X') {
  playerTurn = 'O';
} else {
  playerTurn = 'X';
}
}

// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });

// }