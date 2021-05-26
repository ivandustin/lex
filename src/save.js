const write  = require('./write')
const output = 'lexicon.json'
const undef  = 'undefined.json'

function save(array) {
    write(output, array)
    write(undef, array.filter(entry => entry.english.length == 0))
}

module.exports = save
