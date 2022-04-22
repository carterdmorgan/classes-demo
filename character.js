class Character {
  constructor(name, hitPoints, strength) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.strength = strength;
  }

  printStats() {
    console.log('Name:', this.name);
    console.log('Hit Points:', this.hitPoints);
    console.log('Strength:', this.strength);
  }
}

class Engineer {
  constructor(name, id, email) {

  }

  generateHtml() {
 
  }
}

const userInput = getUserInput();

var carter = new Character(userInput, 50, 10);
var ethan = new Character('Ethan', 49, 9);

carter.printStats();
ethan.printStats();