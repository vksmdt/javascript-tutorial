// swap number in javascript
// using dstructring method
let a = 56;
let b = 100
let = [a, b] = [b, a];
console.log(`a : ${a}`);
console.log(`b : ${b}`);

// using temprory variable
let ab  =  56
let bc = 78
var temp;
temp = ab // temp = 56
ab = bc // ab = 78
bc = temp  // bc = 56


console.log(`${ab},${bc}`)

// without using temporary variable
let dc = 23
let mrl = 32
dc = dc + mrl
mrl = dc - mrl
dc = dc - mrl
console.log(`${dc} , ${mrl}`)