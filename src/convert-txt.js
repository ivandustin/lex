const assert = require('assert')

function convert(txt, lexicon) {
    let index = create_index(lexicon)
    return txt.map(function(item) {
        let { key, value } = item
        let greek   = key
        let english = [value]
        let found   = index[value]
        if (found)
            english = found
        return { greek, english }
    })
}

function create_index(lexicon) {
    let hash = {}
    lexicon.forEach(function(item) {
        hash[item.greek] = item.english
    })
    return hash
}

module.exports = convert
