#!/usr/bin/env node
const package       = require('./package.json')
const assert        = require('assert')
const fs            = require('fs')
const argparse      = require('argparse')
const read          = require('./src/read')
const read_txt      = require('./src/read-txt')
const convert       = require('./src/convert-txt')
const filter        = require('./src/filter')
const sort          = require('./src/sort')
const write         = require('./src/write')
const description   = 'Add greek definitions from a text file to override.json'
const lexicon_file  = 'lexicon.json'
const override_file = 'override.json'

function main() {
    assert(fs.existsSync(lexicon_file), `Missing ${lexicon_file}`)
    assert(fs.existsSync(override_file), `Missing ${override_file}`)
    let args     = cli()
    let input    = args.file
    let lexicon  = read(lexicon_file)
    let override = read(override_file)
    let txt      = read_txt(input)
    let result   = convert(txt, lexicon)
    result       = filter(result, override)
    result       = result.concat(override)
    result       = sort(result)
    write(override_file, result)
    console.log('Lexicon', lexicon.length)
    console.log('Override', override.length)
    console.log('Input', txt.length)
}

function cli() {
    let { version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('file',            { help: 'input text file' })
    return parser.parse_args()
}

main()
