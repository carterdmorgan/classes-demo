const Vehicle = require('./vehicle');

class Bicycle extends Vehicle {
  constructor(make, model, year, color, speed, handlebars, pedals) {
    super(make, model, year, color, speed, 2);
    this.handlebars = handlebars;
    this.pedals = pedals;
  }

  printStats() {
    super.printStats();
    console.log(this.handlebars);
    console.log(this.pedals);
  }
}

module.exports = Bicycle;