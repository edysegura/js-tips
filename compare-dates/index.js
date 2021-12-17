const x = new Date('2018-04-11');
const y = new Date('2018-04-11');

// less than, greater than is fine:
console.log('x < y', x < y); // false
console.log('x > y', x > y); // false
console.log('x <= y', x <= y); // true
console.log('x >= y', x >= y); // true
console.log('x === y', x === y); // false, oops!

// anything involving '==' or '===' should use the '+' prefix
// it will then compare the dates' millisecond values
// https://stackoverflow.com/questions/492994/compare-two-dates-with-javascript

console.log('+x === +y', +x === +y); // true