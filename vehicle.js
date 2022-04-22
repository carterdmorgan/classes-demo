const Transportation = require('./transportation');

class Vehicle extends Transportation {
  constructor(make, model, year, color, speed, wheels) {
    super(speed);
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.wheels = wheels;
    this.currentSpeed = 0;
  }

  accelerate() {
    console.log('Vroom vroom!');
    this.currentSpeed += this.speed;
  }

  printStats() {
    console.log(this.make);
    console.log(this.model);
    console.log(this.year);
    console.log(this.color);
    console.log(this.wheels);
    console.log(this.speed);
    console.log(this.currentSpeed);
  }
}

module.exports = Vehicle;