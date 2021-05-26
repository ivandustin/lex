const fs      = require('fs')
const cr      = /\r/g
const empty   = ''
const newline = '\n'
const spaces  = /\s+/g
const space   = ' '

function read(filepath) {
    let array = readlines(filepath)
    array     = array.map(clean)
    array     = array.map(split)
    return array
}

function readlines(filepath) {
    return fs.readFileSync(filepath).toString().trim().replace(cr, empty).split(newline)
}

function clean(line) {
    return line.replace(spaces, space).trim()
}

function split(line) {
    let index = line.indexOf(space)
    let key   = line.substring(0, index)
    let value = line.substring(index + 1)
    return { key, value }
}

module.exports = read
