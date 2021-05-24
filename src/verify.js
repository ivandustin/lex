const assert = require('assert')
const stats  = require('./stats')

function verify(array) {
    array.forEach(function(entry) {
        let { greek, english } = entry
        assert(greek, 'Greek is empty')
        console.assert(english.length > 0, `Undefined english greek=${greek}`)
        if (english.length == 0)
            stats.undefined_english++
    })
}

module.exports = verify
