const fs = require('fs')

function write(filepath, object) {
    return fs.writeFileSync(filepath, JSON.stringify(object, null, 4))
}

module.exports = write
