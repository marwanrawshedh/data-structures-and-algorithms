'use strict'
const Hashtable = require('./hashTable')
function repeatedWord(string) {
    let myTable = new Hashtable(1024);
    let WithoutComma = string.split(',')
    let WithoutCommaSring = WithoutComma.join('')
    let WithoutSpace = WithoutCommaSring.split(' ')
    for (let i = 0; i < WithoutSpace.length; i++) {
        myTable.set(WithoutSpace[i].toLowerCase(), WithoutSpace[i].toLowerCase())
    }
    let counter = { counter: 0, value: '' }
    for (let i = 0; i < myTable.map.length; i++) {
        if (myTable.map[i]) {
            if (myTable.map[i].length > counter.counter) {
                counter = { counter: myTable.map[i].length, value: myTable.map[i].head.value }
            }
        }
    }
   return counter.value
}
module.exports = repeatedWord
repeatedWord('Onceupon a time,there was a a a a braveprincesswho...')