const assert  = require('assert')
const groupby = require('./groupby')

function group(entries) {
    return groupby('greek', entries).map(reduce)
}

function reduce(group) {
    assert(group.length > 0)
    let first   = group[0]
    let greek   = first.greek
    let english = group.map(entry => entry.english).filter(unique).filter(identity)
    return { greek, english }
}

function unique(value, index, array) {
    return array.indexOf(value) == index
}

function identity(value) {
    return value
}

module.exports = group
