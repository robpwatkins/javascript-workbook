let targetPhrase = 'javascript is for winners'
let targetHint = [];
let guessesLeft = 5;

for (let i = 0; i < targetPhrase.length; i++) {
  if (targetPhrase[i] === ' ') {
    targetHint[i] = '&nbsp' + '&nbsp';
  } else {
    targetHint[i] = '_' ;
  }
}

document.getElementById('hangedText').innerHTML = targetHint.join('');
document.getElementById('guessesLeft').innerHTML = `INCORRECT GUESSES LEFT: ${guessesLeft}`;

function buttonClicked () {
  let inputLetter = document.getElementById('input').value;
  let isIt = 'yes';
  let wrongGuesses = []
  for (let i = 0; i < targetPhrase.length; i++) {
    if (inputLetter === targetPhrase[i]) {
      targetHint[i] = inputLetter;
    } else 
    isIt = 'no';
  }
  if (isIt = 'no') {
    guessesLeft--;
    wrongGuesses.push(inputLetter);
    console.log(wrongGuesses);
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

document.getElementById('button').addEventListener('click', buttonClicked);
document.getElementById('answerButton').addEventListener('click', showAnswer);
