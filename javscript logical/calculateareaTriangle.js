// right angled triange area value
var base = prompt('enter the base')
var height = prompt('enter the heght')
var area = (base*height)/2
console.log(area)

// regular triangle value

var a = 10
var b = 10
var c = 10
var s = (a+b+c)/2
var temp = s*(s-a)*(s-b)*(s-c) // hrons farmula
var areaa = Math.sqrt(temp)
console.log(areaa)