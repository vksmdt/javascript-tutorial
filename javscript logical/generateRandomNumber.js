//generate random number

let x = Math.random()
console.log(`${x} before random number`)
// x = x * (10000-1)+1; // farmula to fix hole number
x = x * 10000 // farmula to fix value for flot number
console.log(`${x} after random number`)
// using math.floor() for fix integer value
console.log(`${Math.floor(x)} fix value`)