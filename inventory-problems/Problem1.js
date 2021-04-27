function findById(inventory, id) {
    for (let i=0; i < inventory.length; i++) {
        let inven = inventory[i];
        if (inven.id === id) {
            return inven;
        }
    }
}

module.exports = findById;
