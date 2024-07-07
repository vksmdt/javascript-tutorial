// plaendrom string
var str = prompt('enter a string')
var len = str.length
var msg = 'this is plandrom string'
for (let i = 0; i < len/2; i++) {
    // console.log(str[i])
    // console.log(str[len - 1 - i])
    if (str[i] != str[len - 1 - i] ) {
        msg = ' this is not palendrom string'
        
    }
  
}
console.log(`${str} : ${msg}`)