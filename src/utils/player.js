const fetchUtils = require('./fetch')
const playerUtils = {}

const {name, slots, inventory, stats} = fetchUtils.getFile('player')

playerUtils.equip = (slot, item) => {
    if (inventory.length > 27) throw 'Cannot unequip item, inventory is full'
    inventory.push(slots[slot])
    slots[slot] = item
}

playerUtils.unequip = (slot) => {
    if (inventory.length > 27) throw 'Cannot unequip item, inventory is full'
    inventory.push(slots[slot])
    slots[slot] = {}
}

playerUtils.getSlots = () => {
    return slots
}

playerUtils.getInventory = () => {
    return inventory
}

playerUtils.getStats = () => {
    return stats
}
playerUtils.getName = () => {
    return name
}

module.exports = playerUtils
