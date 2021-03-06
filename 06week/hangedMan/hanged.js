let targetPhrase = 'javascript is for winners'
let targetHint = [];
let guessesLeft = 5;
let wrongGuesses = [];

for (let i = 0; i < targetPhrase.length; i++) {
  if (targetPhrase[i] === ' ') {
    targetHint[i] = '&nbsp' + '&nbsp';
  } else {
    targetHint[i] = '_' ;
  }
}

document.getElementById('hangedText').innerHTML = targetHint.join('');
document.getElementById('guessesLeft').innerHTML = `INCORRECT GUESSES LEFT: ${guessesLeft}`;

function hangedMan () {
  let inputLetter = document.getElementById('input').value;
  let number = 0;
  if (targetPhrase.indexOf(inputLetter) !== -1) {
    for (let i = 0; i < targetPhrase.length; i++) {
      if (inputLetter === targetPhrase[i]) {
        targetHint[i] = inputLetter;
      } 
    } 
  } else {
  guessesLeft--;
    wrongGuesses.push(inputLetter);
    document.getElementById('wrongGuesses').innerHTML = `INCORRECT GUESSES: ${wrongGuesses.join(', ')}`;
  }
  document.getElementById('guessesLeft').innerHTML = `INCORRECT GUESSES LEFT: ${guessesLeft}`;
  document.getElementById('input').value = '';
  document.getElementById('hangedText').innerHTML = targetHint.join('');
  if (targetHint.join('') === 'javascript&nbsp&nbspis&nbsp&nbspfor&nbsp&nbspwinners') {
    document.getElementById('guessesLeft').innerHTML = 'YOU GOT IT!'
  }
  if (guessesLeft <= 0) {
    document.getElementById('guessesLeft').innerHTML = 'GAME OVER!';
  }
}


function showAnswer () {
  document.getElementById('theAnswer').style.display = 'block';
}

document.getElementById('button').addEventListener('click', hangedMan);
document.getElementById('answerButton').addEventListener('click', showAnswer);
