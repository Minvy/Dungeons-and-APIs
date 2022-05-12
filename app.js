const playerUtils = require('./src/utils/player')
const serviceUtils = require('./src/utils/service')

serviceUtils.spawn('testing')
serviceUtils.destroy('testing')

require('./src/routes')