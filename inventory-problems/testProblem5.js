const inventory = require('./inventory');
const olderCars = require('./Problem5');
const carYears = require('./testProblem4');

const result = olderCars(inventory, carYears);
console.log("List of cars older than 2000:", result);
console.log("Total no.of cars older than 2000:", result.length)