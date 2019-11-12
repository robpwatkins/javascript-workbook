'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // You code here
}

function isLegal() {
  // Your code here
//   let startPiece = startStack[startStack.length -1];
//   let endPiece = endStack[endStack.length - 1];

  // let startPiece = stacks.a[stacks.a.length - 1];
  // let endPiece = stacks.b[stacks.b.length - 1];
  
  // if (endPiece == null) {
  //   endPiece = 0;
  // }

  // if (startPiece > endPiece) {
  //   return false;
  // } else {
  //   return true;
  // }
}

function checkForWin() {
  // Your code here
}

function towersOfHanoi(startStack, endStack) {
  
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });

      // A free first additional unit test for you ;)
      // towersOfHanoi('a', 'c');
      // assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
