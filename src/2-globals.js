// console.log(__dirname);
//
// setInterval(() => {
//     console.log('Hello!')
// }, 1000);


const names = require('./4-names');
console.log(names);

const sayHi = require('./5-utils');
console.log(sayHi());

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
