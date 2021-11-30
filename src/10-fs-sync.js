const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');

// const path = require('path');
console.log(`${__dirname}`);

const first = readFileSync(`${__dirname}/content/first.txt`, 'utf-8');
const second = readFileSync(`${__dirname}/content/second.txt`, 'utf-8');

console.log(first, second);


writeFileSync(
    `${__dirname}/content/result-sync.txt`, 
    `Result: ${first}, ${second}`,
    {flag: 'a'});

