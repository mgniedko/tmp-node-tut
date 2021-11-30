module.exports.items - ['i1', 'i2']
const person = {
    name: 'Bob'
}

module.exports.singlePerson = person;

console.log('Hello from alternative syntax!');


const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf-8');
