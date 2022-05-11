const fs = require('fs')
const path = require('path')
const fetchUtils = {}

fetchUtils.getFile = (file) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../db/${file}.json`), 'utf8'));
}
fetchUtils.getAllFiles = () => {
    return fs.readdirSync(path.resolve(__dirname, '../db')).map((file) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname,`../db/${file}`), 'utf8'))
    })
}

module.exports = fetchUtils