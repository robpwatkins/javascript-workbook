'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB);
    } else {
      this.symbol = String.fromCharCode(0x125CF);
    }
  }
}

class Board {
  constructor() {
    this.checkers = [];
    this.grid = [];
    // creates an 8x8 array, filled with null values
    this.createGrid = function() {
      // loop to create the 8 rows
      for (let row = 0; row < 8; row++) {
        this.grid[row] = [];
        // push in 8 columns of nulls
        for (let column = 0; column < 8; column++) {
          this.grid[row].push(null);
        }
      }
    };

    // prints out the board
    this.viewGrid = function() {
      // add our column numbers
      let string = "  0 1 2 3 4 5 6 7\n";
      for (let row = 0; row < 8; row++) {
        // we start with our row number in our array
        const rowOfCheckers = [row];
        // a loop within a loop
        for (let column = 0; column < 8; column++) {
          // if the location is "truthy" (contains a checker piece, in this case)
          if (this.grid[row][column]) {
            // push the symbol of the check in that location into the array
            rowOfCheckers.push(this.grid[row][column].symbol);
          } else {
            // just push in a blank space
            rowOfCheckers.push(' ');
          }
        }
        // join the rowOfCheckers array to a string, separated by a space
        string += rowOfCheckers.join(' ');
        // add a 'new line'
        string += "\n";
      }
      console.log(string);
    };


    this.createCheckers = function() {
      // [row, column]
      const whitePositions = [
        [0, 1],
        [0, 3],
        [0, 5],
        [0, 7],
        [1, 0],
        [1, 2],
        [1, 4],
        [1, 6],
        [2, 1],
        [2, 3],
        [2, 5],
        [2, 7]
      ]
      for (let i = 0; i < whitePositions.length; i++) {
        let whiteRow = whitePositions[i][0];
        let whiteColumn = whitePositions[i][1];
        let whiteChecker = new Checker('white');
        this.checkers.push(whiteChecker);
        this.grid[whiteRow][whiteColumn] = whiteChecker;
      }

      const blackPositions = [
        [5, 0],
        [5, 2],
        [5, 4],
        [5, 6],
        [6, 1],
        [6, 3],
        [6, 5],
        [6, 7],
        [7, 0],
        [7, 2],
        [7, 4],
        [7, 6]
      ]
      for (let i = 0; i < 12; i++) {
        let blackRow = blackPositions[i][0];
        let blackColumn = blackPositions[i][1];
        let blackChecker = new Checker('black');
        this.checkers.push(blackChecker);
        this.grid[blackRow][blackColumn] = blackChecker;
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.start = function() {
      this.board.createGrid();
      // Your code here
      this.board.createCheckers();
    };
    this.moveChecker = (start, end) => {
      const startRow = parseInt(start.charAt(0));
      const startColumn = parseInt(start.charAt(1));
      const endRow = parseInt(end.charAt(0));
      const endColumn = parseInt(end.charAt(1));

      if (isLegalInput(startRow, startColumn, endRow, endColumn) && isLegalMove (startRow, startColumn, endRow, endColumn) && this.board.grid[endRow][endColumn] === null) {



        this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn];
        this.board.grid[startRow][startColumn] = null;
        if (Math.abs(endRow - startRow) === 2) {
          let jumpedRow = endRow - startRow > 0 ? startRow + 1 : endRow + 1;
          let jumpedColumn = endColumn - startColumn > 0 ? startColumn + 1 : endColumn + 1;
          this.board.grid[jumpedRow][jumpedColumn] = null;
          this.board.checkers.pop();
        }
      } else {
        console.log('Illegal Move');
      }      
    }
  }
}

const isLegalInput = (startRow, startColumn, endRow, endColumn) => {
  const sourceGood = (startRow >= 0 && startRow < 8) && (startColumn >= 0 && startColumn < 8);
  const destinationGood = (endRow >= 0 && endRow < 8) && (endColumn >= 0 && endColumn < 8);
  return sourceGood && destinationGood;
}

const isLegalMove = (startRow, startColumn, endRow, endColumn) => {
  const goodRowValue = (Math.abs(endRow - startRow));
  const goodColumnValue = (Math.abs(endColumn - startColumn));
  if (goodRowValue === 1 && goodColumnValue === 1){
    return true;
  } else if  (goodRowValue === 2 && goodColumnValue === 2) {
    return true;
  } else{
    return false;
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
