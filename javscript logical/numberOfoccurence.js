// check number of occurence
let string = prompt('enter a number')
let letter = prompt('enter a letter')
let strlnth = string.length
let num = 0
for (let i = 0; i < strlnth; i++) {
  
    // console.log(string[i])
    if (string[i] == letter) {
     num++
    }
}
console.log(`${string} => ${letter} => ${num}`)