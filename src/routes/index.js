const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

module.exports = () => {
    //Empty
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('fs').readdirSync(__dirname).forEach((file) => {
    require('./' + file)(app);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
