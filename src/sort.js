function sort(array) {
    return english(greek(array))
}

function greek(array) {
    let greeks = array.map(entry => entry.greek).sort()
    return greeks.map(function(greek) {
        return array.find(entry => entry.greek == greek)
    })
}

function english(array) {
    array.forEach(entry => entry.english.sort())
    return array
}

module.exports = sort
