const Vehicle = require('./vehicle');

class Car extends Vehicle {
  constructor(make, model, year, color, speed, engine, doors) {
    super(make, model, year, color, speed, 4);
    this.engine = engine;
    this.doors = doors;
  }

  printStats() {
    // super.printStats();
    console.log(this.speed);
    console.log(this.engine);
    console.log(this.doors);
  }
}

const commonCars = [
  new Car('Toyota', 'Corolla', 2005, 'Grey', 60, 'V4', 4),
  new Car('Toyota', 'Phantom', 2005, 'Grey', 60, 'V4', 4),
  new Car('Toyota', 'Hyena', 2005, 'Grey', 60, 'V4', 4)
]

module.exports = {
  Car,
  commonCars
};