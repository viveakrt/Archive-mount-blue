function BmwAndAudi(inventory) {
    let bmwAndAudi = [];
    for (let i=0; i< inventory.length; i++) {
        let inven = inventory[i];
        if (inven.car_make === 'BMW' || inven.car_make === 'Audi') {
            bmwAndAudi.push(inven);
        }else{
            continue;
        }
    }
    return bmwAndAudi;
}

module.exports = BmwAndAudi;