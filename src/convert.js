const stats = require('./stats')

function convert(entry) {
    let book    = entry['Book'].trim()
    let chapter = entry['Chap'].trim()
    let verse   = entry['Vs'].trim()
    let greek   = entry['Greek'].trim()
    let english = entry['English'].trim()
    console.assert(greek, `Undefined greek book=${book} chapter=${chapter} verse=${verse}`)
    if (!greek)
        stats.undefined_greek++
    return { greek, english }
}

module.exports = convert
