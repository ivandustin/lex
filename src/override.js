const fs       = require('fs')
const filepath = 'override.json'

function override(array) {
    if (fs.existsSync(filepath)) {
        let override = JSON.parse(fs.readFileSync(filepath).toString())
        override.forEach(function(entry) {
            let { greek } = entry
            let index = array.findIndex(entry => entry.greek == greek)
            if (~index)
                array[index] = entry
            else
                array.push(entry)
        })
    }
    return array
}

module.exports = override
