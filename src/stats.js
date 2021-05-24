let stats = {
    total             : 0,
    undefined_greek   : 0,
    undefined_english : 0,
    report
}

function report() {
    console.log('Undefined greek', stats.undefined_greek)
    console.log('Undefined english', stats.undefined_english)
    console.log('Total', stats.total)
}

module.exports = stats
