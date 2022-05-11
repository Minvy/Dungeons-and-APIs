const fs = require('fs')
const path = require('path')

const playerPath = path.join(__dirname, 'src/db/player.json')
const player = JSON.parse(fs.readFileSync(playerPath, 'utf8'));

console.log(player)

require('./src/routes')