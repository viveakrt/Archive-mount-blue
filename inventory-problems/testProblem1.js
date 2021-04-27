const inventory = require('./inventory');
const findById = require('./Problem1');

const result = findById(inventory, 33);
console.log(`Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`);
