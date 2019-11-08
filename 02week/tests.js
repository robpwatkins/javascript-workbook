'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  var hand1 = hand1.toLowerCase();
  var hand2 = hand2.toLowerCase();

  var hand1 = hand1.trim();
  var hand2 = hand2.trim();

  if (hand1 === hand2) {
    return "It's a tie!";
  } else if (hand1 === 'rock' && hand2 === 'scissors') {
    return "Hand one wins!";
  } else if (hand1 === 'paper' && hand2 === 'rock') {
    return "Hand one wins!";
  } else if (hand1 === 'scissors' && hand2 === 'paper') {
    return "Hand one wins!";
  } else if (hand1 === 'paper' && hand2 === 'scissors') {
    return "Hand two wins!";
  } else if (hand1 === 'scissors' && hand2 === 'rock') {
    return "Hand two wins!"
  } else {
    return "Hand two wins!";
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should check to make sure user entry is valid', () => {
      assert.equal(rockPaperScissors('shoot', 'dont'), "WRONG.");
    });
  });
} else {

  getPrompt();

}
