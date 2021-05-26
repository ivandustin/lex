function filter(a, b) {
    let index = create_index(b)
    return a.filter(function(item) {
        let { greek } = item
        let found     = index[greek]
        if (found)
            console.error('Already exists in override', greek)
        return !found
    })
}

function create_index(array) {
    let hash = {}
    array.forEach(function(item) {
        let { greek } = item
        hash[greek]   = true
    })
    return hash
}

module.exports = filter
