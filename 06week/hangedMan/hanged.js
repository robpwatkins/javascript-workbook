function buttonClicked () {
  let inputText = document.getElementById('input').value
  document.getElementById('hangedText').innerHTML = inputText;
  document.getElementById('input').value = '';
}

document.getElementById('button').addEventListener('click', buttonClicked);

let targetPhrase = 'Javascript is for winners'
let targetArray = targetPhrase.split('');
let targetHint = [];
let inputLetter = 'r';

for (let i = 0; i < targetPhrase.length; i++) {
  if (targetPhrase[i] === ' ') {
    targetHint[i] = '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp';
  } else {
    if (inputLetter === targetPhrase[i]) {
      targetHint[i] = inputLetter;
    } else {
    targetHint[i] = ' ___ ' ;
    }
  }
}

console.log(targetHint.join(''));

document.getElementById('hangedText').innerHTML = targetHint.join('');