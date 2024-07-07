// check number of vovals 
let string = prompt('enter the chracter')
let reg = /[aeiou]/gi // regular expression
let char = string.match(reg)
// console.log(char.length)
console.log(char.join(','))