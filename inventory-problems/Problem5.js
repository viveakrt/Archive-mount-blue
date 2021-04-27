function olderCars(inventory, carYears) {
    let oldCars = [];
    let listOfCars = [];
    for (let i=0; i< carYears.length; i++) {
        if (carYears[i] < 2000) {
            oldCars.push(carYears[i]);
        }
    }


    for (let i=0; i < inventory.length; i++) {
        let inven = inventory[i];
        if (oldCars.includes(inven.car_year)) {
            listOfCars.push(inven);
        }
    }
    return listOfCars;
}

module.exports = olderCars;