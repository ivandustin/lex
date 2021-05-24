const collatia = require('collatia')

function recode(entry) {
    entry.greek = collatia.recode(entry.greek)
    return entry
}

module.exports = recode
