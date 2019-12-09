// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 0;

do {
  i++;
  console.log(i);
} while (i < 1000);

// Create an object (an array with keys and values) called person
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
const yearNum = Number(person.birthDate.split(' ')[2]);

for (property in person) {
  if (yearNum % 2 !== 0) {
    console.log(person.birthDate);
  }
}

// Create an arrayOfPersons that contains mulitiple objects.
const arrayOfPersons = [
  {firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'},
  {firstName: 'John',
  lastName: 'Doesier',
  birthDate: 'Dec 17, 1942',
  gender: 'male'},
  {firstName: 'Boxtroll',
  lastName: 'Sampson',
  birthDate: 'Feb 14, 1978',
  gender: 'female'},
  {firstName: 'Flimmyflam',
  lastName: 'Alberta',
  birthDate: 'Mar 1, 1963',
  gender: 'male'},
  {firstName: 'Juicified',
  lastName: "B'Narlydud",
  birthDate: 'July 22, 1986',
  gender: 'female'},
  {firstName: 'Goolius',
  lastName: "Boozler",
  birthDate: 'Nov 2, 1977',
  gender: 'female'},
  {firstName: 'Bart-Harley',
  lastName: "Jarvis",
  birthDate: 'Dec 8, 1998',
  gender: 'male'}
  ];

// Use .map() to map over the arrayOfPersons and console.log() their information.
arrayOfPersons.map(x => console.log(x));

// Use .filter() to filter the persons array and console.log only males in the array.
arrayOfPersons.filter(function(element) {
  if (element.gender === 'male') {
    console.log(element);
  }
});

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
arrayOfPersons.filter(function(element) {
  if (element.birthDate.split(' ')[2] < 1990) {
    console.log(element);
  }
});