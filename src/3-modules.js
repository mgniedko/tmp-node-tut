// console.log(__dirname);
//
// setInterval(() => {
//     console.log('Hello!')
// }, 1000);


const names = require('./4-names');
console.log(names);

const sayHi = require('./5-utils');
console.log(sayHi());

const data = require('./6-alternative-syntax');
console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);


require('./7-mind-grenade');

