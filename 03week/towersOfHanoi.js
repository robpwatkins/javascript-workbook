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

function movePiece(startStack, endStack) {
  let removedPiece = stacks[startStack].pop();
  stacks[endStack].push(removedPiece);
}

function isLegal(startStack, endStack) {
  let startPiece = stacks[startStack][stacks[startStack].length - 1];
  let endPiece = stacks[endStack][stacks[endStack].length - 1];

  if (startPiece > endPiece) {
    return false;
  } else {
    return true;
  }
  
  // let startPiece = stacks[startStack][stacks[startStack.length - 1]];
  // let endPiece = stacks[endStack][stacks[endStack.length - 1]];

  // if (endPiece === '' || startPiece < endPiece) {
  //   return true;
  // } else {
  //   return false;
  // }

  // if (removedPiece > endPiece) {
  //   return false;
  // } else {
  //   return true;
  // }

  // let startPiece = stacks.a[stacks.a.length - 1];
  // let endPiece = stacks.b[stacks.b.length - 1];
  
  // if (endPiece == null) {
  //   endPiece > startPiece;
  // }

  // if (startPiece > endPiece) {
  //   return false;
  // } else {
  //   return true;
  // }

  // if (endPiece === '' || startPiece < endPiece) {
  //   return true;
  // } else {
  //   return false;
  // }

  // if (startPiece > endPiece) {
  //   return false;
  // } else {
  //   return true;
  // }
}

function checkForWin() {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  checkForWin();
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

// 1ST ADDITIONAL TEST
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
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
// 2ND ADDITIONAL TEST
      assert.equal(isLegal('a', 'b'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
// 3RD ADDITIONAL TEST
      stacks = { a: [4], b: [2, 1], c: [3] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
