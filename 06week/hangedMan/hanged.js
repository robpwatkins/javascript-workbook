let targetPhrase = 'javascript is for winners'
let targetHint = [];

for (let i = 0; i < targetPhrase.length; i++) {
  if (targetPhrase[i] === ' ') {
    targetHint[i] = '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp';
  } else {
    targetHint[i] = ' ___ ' ;
  }
}

document.getElementById('hangedText').innerHTML = targetHint.join('');

function buttonClicked () {
  let inputLetter = document.getElementById('input').value;
  for (let i = 0; i < targetPhrase.length; i++) {
    if (inputLetter === targetPhrase[i]) {
      targetHint[i] = '&nbsp' + '&nbsp' + inputLetter + '&nbsp' + '&nbsp';
    }
  }
  document.getElementById('hangedText').innerHTML = targetHint.join('');
}

document.getElementById('button').addEventListener('click', buttonClicked);
