const empty = ''
const space = ' '

function unbracket(entry) {
    entry.english = transform(entry.english)
    return entry
}

function transform(str) {
    return str.replace(/\[[^\]]+\]/g, empty).replace(/\s+/g, space).trim()
}

module.exports = unbracket
