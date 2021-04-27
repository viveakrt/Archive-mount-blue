function listOfCarModels(inventory) {
    let carModels = [];
    for (let i=0; i < inventory.length; i++) {
        carModels.push(inventory[i].car_model);
    }

    return carModels.sort();
}

module.exports = listOfCarModels;