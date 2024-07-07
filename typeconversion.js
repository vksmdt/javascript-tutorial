console.log('convesion and correction')
 
// type coversion correction

// string

let vikas ;
vikas = String (34);
console.log(vikas)

let bool = String(true)
console.log(bool)   

let date = String (new Date())
console.log( date)


let arr =String ([1,2,3,4,5,6,7,8,9])
console.log(arr )

let i = 8
console.log(i.toString())

//number conversion

let str = Number ("1234")
str = Number ("123g4")
str= Number(true)
str = Number([1,2,3,4,5,6,7,8,9])
console.log(str, (typeof str))


let numr = parseInt('34.098');
console.log(numr, (typeof numr))


let flot = parseFloat('34.098');
// tofixed() fixe the number of float
console.log(flot.toFixed(30), (typeof flot))

//type coercion

// let mystr = '652'
let mystr = Number('652')
let mynmu = 36
console.log(mystr + mynmu)