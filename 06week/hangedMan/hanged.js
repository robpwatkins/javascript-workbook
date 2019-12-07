function buttonClicked () {
  let inputText = document.getElementById('input').value
  document.getElementById('hangedText').innerHTML = inputText;
  document.getElementById('input').value = '';
}

document.getElementById('button').addEventListener('click', buttonClicked);