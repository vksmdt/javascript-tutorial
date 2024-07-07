// string replace .. using replace() function

var str = 'vikas has a blue pent and Blue T-shirt nad blue cap'
console.log(str)
var reg = new RegExp('blue','gi')  // ye case senstive check krta he globally change kr deta sbi string ko
var rplce = str.replace(reg,'black')

console.log(rplce)