const fs     = require('fs')
const output = 'lexicon.json'
const undef  = 'undefined.json'

function save(array) {
    write(output, array)
    write(undef, array.filter(entry => entry.english.length == 0))
}

function write(filepath, object) {
    return fs.writeFileSync(filepath, JSON.stringify(object, null, 4))
}

module.exports = save
