const { Car, commonCars } = require('./car');
const Bicycle = require('./bicycle');

var myCar = new Car('Toyota', 'Corolla', 2005, 'Grey', 60, 'V4', 4);
var myBike = new Bicycle('Schwinn', 'Mongoose', 1992, 'Green', 10, true, true);

myCar.printStats();
console.log(commonCars);