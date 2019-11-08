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

  let squareCol = square.dataset.col;
  let squareRow = square.dataset.row;

  ticTacToe(squareCol, squareRow);
  board[0][0] = event.target;
  board[0][1] = event.target;
  board[0][2] = event.target;
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
    console.log('win you beautiful bastard');
    return true;
}
}

function ticTacToe() {
  // Manipulate the board array (place X or O) based on where user clicks
  // board[row][column] = playerTurn;

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