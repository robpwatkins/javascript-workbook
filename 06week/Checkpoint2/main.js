
// module.exports = {
//   testThat: function(){
//     return 'heyoo';
//   }
// }

// function testWorking () {
//   return 'cmon now';
// }



// export default testWorking;

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


// window.addEventListener('click', listPeopleChoices);

let listOfPlayers = [];
let blueTeam = [];
let redTeam = [];

// class player {
//   constructor(){}
// }

class DodgeBallPlayer {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class blueTeammate extends DodgeBallPlayer {
  constructor(color = 'blue', mascot = 'The Blue Dude', id, name, age, skillSet, placeBorn, canThrowBall = true, canDodgeBall = true, hasPaid = true, isHealthy = true, yearsExperience = 7){
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = mascot;
  }
}

class redTeammate extends DodgeBallPlayer {
  constructor(color = 'red', mascot = 'The Red Lady', id, name, age, skillSet, placeBorn, canThrowBall = true, canDodgeBall = true, hasPaid = true, isHealthy = true, yearsExperience = 12){
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.color = color;
    this.mascot = mascot;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {listElement.removeChild(li), makePlayer(person)});
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  listOfPlayers = [];
  const listElement = document.getElementById('players')
  let newDodgeBallPlayer = new DodgeBallPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience);
  listOfPlayers.push(newDodgeBallPlayer);
  listOfPlayers.map(player => {
    const li = document.createElement('li');
    const blueButton = document.createElement('button');
    blueButton.innerHTML = 'Blue Team'
    blueButton.addEventListener('click', function() {listElement.removeChild(li), makeBlueTeammate(player)});
    const redButton = document.createElement('button');
    redButton.innerHTML = 'Red Team'
    redButton.addEventListener('click', function() {listElement.removeChild(li), makeRedTeammate(player)});
    li.appendChild(blueButton);
    li.appendChild(redButton);
    li.appendChild(document.createTextNode(person.name));
    listElement.append(li);
  })
}

// const omgThisWorks = () => {
//   return 'omg this works!'
// }

const makeBlueTeammate = (player) => {
  // blueTeam = [];
  let blueTeamMember = [];
  const listElement = document.getElementById('blue');
  let newBlueTeammate = new blueTeammate(player.color, player.mascot, player.id, player.name, player.age, player.skillSet, player.placeBorn, player.canThrowBall, player.canDodgeBall, player.hasPaid, player.isHealthy, player.yearsExperience);
  blueTeamMember.push(newBlueTeammate);
  blueTeamMember.map(player => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(player.name));
    listElement.append(li);
    // console.log(blueTeam);
  })
  blueTeam.push(blueTeamMember[0]);
  // console.log(blueTeam);
}

const makeRedTeammate = (player) => {
  // redTeam = [];
  let redTeamMember = [];
  const listElement = document.getElementById('red');
  let newRedTeammate = new redTeammate(player.color, player.mascot, player.id, player.name, player.age, player.skillSet, player.placeBorn, player.canThrowBall, player.canDodgeBall, player.hasPaid, player.isHealthy, player.yearsExperience);
  redTeamMember.push(newRedTeammate);
  redTeamMember.map(player => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(player.name));
    listElement.append(li);
    // console.log(redTeam);
  })
  redTeam.push(redTeamMember[0]);
  // console.log(redTeam);
}

// export default testWorking();

// module.exports = {testWorking, omgThisWorks}

const assert = require('assert');

describe('DodgeBallPlayer', function(){
  it('should add player properties to person', function(){
    const person = {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    };
    const player = new DodgeBallPlayer(2, "Charles Young", 55, "welding", "Omaha, Nebraska", true, true, true, true, 100)
    assert.equal(player.yearsExperience, '100');
  })
})

describe('makeRedTeammate', function(){
  it('should add "color: red"', function(){
    const player = new redTeammate
    assert.equal(player.color, 'red');
  })
})

describe('makeBlueTeammate', function(){
  it('should push "player" object to blueTeamMember array', function(){
    // const player = new redTeammate
    assert.equal(makeBlueTeammate(), 'blueTeam.length > 0');
  })
})