// Display current date and time
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(date, time);

// Convert a number to a string
let num1 = 42
let str = num1.toString();
console.log(str);
console.log(typeof str);

// Convert a string to a number
let str1 = '23';
let integer = parseInt(str1);
console.log(integer);
console.log(typeof integer);

// Create a function that takes in different date types and prints out their type
let firstBool = true;
let nada = null;
let lacksDefinition = undefined;
let firstNum = 63;
let notTheNum = 0/0;
let aString = 'Bruce Dickenson';

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(firstBool);
isTypeOf(nada);
isTypeOf(lacksDefinition);
isTypeOf(firstNum);
isTypeOf(notTheNum);
isTypeOf(aString);

// "" that adds two numbers
let num2 = 55
let num3 = 8
let sum = (num2 + num3);
console.log(sum);

// "" that runs when 2 statements are true
if('num2 = 55' && 'num3 = 8')
  console.log('Both are true.');


// "" that runs when 1 of 2 statments are true
if('num2 = 55' && 'num4 !=7') {
  console.log('One of these is true.');
}

// "" that runs when neither statements are true
if('num2 != 23' && 'num4 !=7') {
  console.log('Neither statement is true.');
}