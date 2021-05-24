#!/usr/bin/env node
const package   = require('./package.json')
const assert    = require('assert')
const path      = require('path')
const fs        = require('fs')
const argparse  = require('argparse')
const parse     = require('./src/parse')
const convert   = require('./src/convert')
const recode    = require('./src/recode')
const uppercase = require('./src/uppercase')
const unbracket = require('./src/unbracket')
const override  = require('./src/override')
const sort      = require('./src/sort')
const group     = require('./src/group')
const verify    = require('./src/verify')
const stats     = require('./src/stats')
const save      = require('./src/save')
const input     = path.join(__dirname, '..', 'livinggreeknt', 'LGNT-Data.txt')

function main() {
    cli()
    assert(fs.existsSync(input), `Input file does not exist: ${input}`)
    let array   = parse(input)
    array       = array.map(convert)
    array       = array.map(recode)
    array       = array.map(uppercase)
    array       = array.map(unbracket)
    array       = array.filter(entry => entry.greek)
    array       = group(array)
    array       = override(array)
    array       = sort(array)
    stats.total = array.length
    verify(array)
    save(array)
    stats.report()
}

function cli() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    return parser.parse_args()
}

main()
