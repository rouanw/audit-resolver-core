const fs = require('fs')
const argv = require('../arguments').get()

module.exports = {
    getAudit() {
        console.log('>>>mock get audit')
        if (typeof argv.mock === 'string') {
            return Promise.resolve(fs.readFileSync(argv.mock))
        } else {
            return Promise.resolve(fs.readFileSync('mock-audit.json'))
        }
    }
}