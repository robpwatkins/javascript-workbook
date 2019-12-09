'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  const solutionArray = solution.split('');
  // should be ['a', 'b', 'c', 'd']

  const guessArray = guess.split('');
  // if guess was 'abdc'
  // should be ['a', 'b', 'd', 'c']

  let redPegs = 0;
  let whitePegs = 0;

  // checking for redPegs
  for (let i = 0; i <solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      redPegs++;
      solutionArray[i] = null;
    }
  }

  let targetIndex = null;
  // checking for whitePegs
  for (let i = 0; i < guessArray.length; i++) {
    targetIndex = solutionArray.indexOf(guessArray[i]);

    if (targetIndex > -1) {
      whitePegs++;
      solutionArray[targetIndex] = null;
    }
  }
  return `${redPegs}-${whitePegs}`;
}
// return a string representation of redPegs and whitePegs variables
// return 'x-x'


function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // generateHint();
  board.push(guess);

  if(guess === solution) {
  return 'You guessed it!';
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
