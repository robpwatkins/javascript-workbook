'use strict';

<<<<<<< HEAD
document.getElementById('button').addEventListener('click', fn1);
=======
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

>>>>>>> gh-pages

function fn1() {
  let str = document.getElementById('thisGuy').value;
  document.getElementById('pigLatin').innerText=(pigLatin(str));
}



function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  word = word.toLowerCase().trim();
  let storeIndex = 0;

  for (let i=0; i<word.length; i++) {
    for (let j=0; j<vowels.length; j++) {
      if (word[i] === vowels[j]) {
        storeIndex = i;
        const firstString = word.slice(0, storeIndex);
        const secondString = word.slice(storeIndex);
        if (storeIndex === 0) {
          return secondString + firstString + 'yay';
        }
          return secondString + firstString + 'ay';
      }
    }
  }
}

function pigLatin(word) {
  word = word.toLowerCase().trim();
  // if (word.trim().indexOf(' ') != -1) {
  // return 'Poop!';
  // } else {
  let firstPosition = findFirstVowelPosition(word);
  if (firstPosition > 0) {
    return word.slice(firstPosition) + word.slice(0, firstPosition) + 'ay';
  } else {
  return word + 'yay';
  }
  }
function findFirstVowelPosition(word) {
  for (let i = 0; i < word.length; i++) {
    if ('aeiouy'.indexOf(word[i]) !== -1) {
      return i;
      }
    }
  }
