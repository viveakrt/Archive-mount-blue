const inventory = require('./inventory');
const findLastInventory = require('./Problem2');

const result = findLastInventory(inventory);
console.log(`Last car is a ${result.car_make} ${result.car_model}`);
